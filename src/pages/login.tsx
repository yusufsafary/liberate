import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Logo } from "../App";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);

    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);
    if (err) {
      setError(err.message);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-5 border-b border-gray-100">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          {sent ? (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
              <p className="text-gray-500 text-sm mb-6">
                We sent a magic link to <span className="font-medium text-gray-900">{email}</span>.<br />
                Click the link to sign in — no password needed.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="text-sm text-gray-500 hover:text-black transition-colors underline underline-offset-2"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign in</h1>
                <p className="text-gray-500 text-sm">Enter your email and we'll send you a magic link.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition text-sm"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || !email.trim()}
                  className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white font-medium py-3 rounded-xl text-sm transition-colors"
                >
                  {loading ? "Sending…" : "Send magic link"}
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-gray-400">
                By signing in, you agree to our{" "}
                <a href="#" className="underline hover:text-gray-600">Terms</a>
                {" "}and{" "}
                <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
