import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";
import { Logo } from "../App";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/login", { replace: true });
      } else {
        setUser(data.session.user);
        setLoading(false);
      }
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login", { replace: true });
      else setUser(session.user);
    });

    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden sm:block">{user?.email}</span>
          <button
            onClick={handleSignOut}
            className="text-sm font-medium text-gray-700 hover:text-black border border-gray-200 hover:border-gray-400 px-4 py-1.5 rounded-full transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-gray-500 text-sm">Welcome back, <span className="text-gray-800 font-medium">{user?.email}</span></p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Agents", value: "0", desc: "Active agents" },
            { label: "Runs", value: "0", desc: "This month" },
            { label: "Plan", value: "Free", desc: "Current plan" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-200 rounded-2xl p-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="border border-dashed border-gray-200 rounded-2xl p-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Create your first agent</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
            Build a powerful AI automation workflow without writing any code.
          </p>
          <Link
            to="/docs"
            className="inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
