import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Supabase client auto-processes the token from URL hash on initialization.
    // We just need to wait for the session to be established.
    supabase.auth.getSession().then(({ data, error: err }) => {
      if (err) {
        setError(err.message);
        return;
      }
      if (data.session) {
        navigate("/dashboard", { replace: true });
      } else {
        // Try waiting for the auth state change event
        const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            sub.subscription.unsubscribe();
            navigate("/dashboard", { replace: true });
          } else if (event === "SIGNED_OUT") {
            setError("Sign-in failed. Please try again.");
          }
        });
        // Timeout fallback
        const t = setTimeout(() => {
          setError("Sign-in timed out. Please try again.");
        }, 8000);
        return () => { clearTimeout(t); sub.subscription.unsubscribe(); };
      }
    });
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <a href="/login" className="inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Back to sign in
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Signing you in…</p>
      </div>
    </div>
  );
}
