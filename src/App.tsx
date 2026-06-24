import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ChevronDown, Play, CheckCircle2, Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

import AboutPage from "./pages/about";
import CareersPage from "./pages/careers";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import FeaturesPage from "./pages/features";
import WorkflowAutomationPage from "./pages/workflow-automation";
import AIModelsPage from "./pages/ai-models";
import IntegrationsPage from "./pages/integrations";
import EnterprisePage from "./pages/enterprise";
import DocsPage from "./pages/docs";
import HelpPage from "./pages/help";
import CommunityPage from "./pages/community";
import APIReferencePage from "./pages/api-reference";
import NotFound from "./pages/not-found";
import LoginPage from "./pages/login";
import AuthCallbackPage from "./pages/auth-callback";
import DashboardPage from "./pages/dashboard";
import { supabase } from "./lib/supabase";
import type { User } from "@supabase/supabase-js";

// ── Logo ──────────────────────────────────────────────────────────────────────
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/liberate-logo.png"
      alt="Liberate Studio"
      className={`w-auto object-contain ${className}`}
    />
  );
}

export function LogoWhite({ size = "md" }: { size?: "sm" | "md" }) {
  const textSize = size === "sm" ? "text-base" : "text-xl";
  return (
    <div className={`flex items-baseline gap-[3px] font-black tracking-[-0.04em] select-none ${textSize}`}>
      <span className="text-white uppercase">Liberate</span>
      <span className="text-white uppercase font-light tracking-widest text-[0.65em] ml-1">STUDIO</span>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Navbar ────────────────────────────────────────────────────────────────────
const NAV_H = "h-16"; // single source of truth for navbar height

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) { setHidden(true); setMenuOpen(false); }
      else { setHidden(false); }
    });
  }, [scrollY]);

  const navLinks = [
    { to: "/features", label: "Product" },
    { to: "/pricing", label: "Pricing" },
    { to: "/docs", label: "Learn" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${NAV_H} bg-white border-b border-gray-100 px-5 md:px-8 flex items-center justify-between`}
      >
        {/* Logo — explicit height on the img so PNG whitespace doesn't fool the browser */}
        <Link to="/" className="flex items-center shrink-0">
          <Logo className="h-9 sm:h-10" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/features" className="flex items-center gap-1 hover:text-black transition-colors">
            Product <ChevronDown size={14} />
          </Link>
          <Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link to="/docs" className="flex items-center gap-1 hover:text-black transition-colors">
            Learn <ChevronDown size={14} />
          </Link>
          <Link to="/blog" className="hover:text-black transition-colors">Blog</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <Link to="/dashboard" className="hidden md:block text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="hidden md:block text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Log in
            </Link>
          )}
          <Link
            to="/features"
            className="hidden sm:inline-block bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu — offset matches NAV_H (h-16 = 64px) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg md:hidden"
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 text-base font-medium text-gray-700 hover:text-black border-b border-gray-100 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              {user ? (
                <Link to="/dashboard" className="text-center py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login" className="text-center py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  Log in
                </Link>
              )}
              <Link to="/features" className="text-center py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

// ── Workflow Demo ─────────────────────────────────────────────────────────────
function WorkflowDemo() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setStep((s) => {
        if (s >= 3) { setRunning(false); setTimeout(() => { setStep(0); setRunning(true); }, 2000); return 3; }
        return s + 1;
      });
    }, 900);
    return () => clearInterval(timer);
  }, [running]);

  const nodes = [
    { label: "INPUT", name: "User Message" },
    { label: "AI MODEL", name: "Claude 3.5" },
    { label: "ACTION", name: "Send to Slack" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-gray-950 shadow-2xl">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/30">
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <span className="ml-3 text-white/40 text-xs font-mono">customer-support-agent</span>
        <div className="ml-auto flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : "bg-green-400"}`} />
          <span className="text-white/40 text-xs">{step >= 3 ? "Completed" : "Running"}</span>
        </div>
      </div>

      <div className="px-5 py-6 flex flex-col md:flex-row items-center justify-center gap-3">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.div
              animate={{
                borderColor: step > i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)",
                backgroundColor: step > i ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
              }}
              transition={{ duration: 0.4 }}
              className="border rounded-xl px-5 py-3 text-center w-full md:w-auto md:min-w-[100px]"
            >
              <div className="text-white/40 text-[10px] font-semibold tracking-wider mb-1">{node.label}</div>
              <div className="text-white text-sm md:text-xs font-medium">{node.name}</div>
            </motion.div>
            {i < nodes.length - 1 && (
              <>
                <div className="flex md:hidden flex-col items-center gap-0.5">
                  <motion.div animate={{ height: step > i ? "1.5rem" : "1rem", opacity: step > i ? 1 : 0.2 }} className="w-px bg-white" />
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white opacity-40" />
                </div>
                <div className="hidden md:flex items-center gap-0.5 shrink-0">
                  <motion.div animate={{ width: step > i ? "2rem" : "1.5rem", opacity: step > i ? 1 : 0.2 }} className="h-px bg-white" />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-white opacity-40" />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mx-5 mb-5 rounded-xl bg-black/40 border border-white/5 p-4">
        <div className="text-white/30 text-[10px] font-semibold tracking-wider mb-2">OUTPUT</div>
        <motion.div animate={{ opacity: step >= 3 ? 1 : 0.4 }} className="text-white/70 text-sm leading-relaxed font-mono">
          {step < 1 && "Waiting for input..."}
          {step === 1 && "Processing with AI model..."}
          {step === 2 && 'Sending to Slack #support...'}
          {step >= 3 && (<><span className="text-green-400">Done.</span> Message sent to <span className="text-white/90">#support</span>. Response time: 1.2s</>)}
        </motion.div>
      </div>
    </div>
  );
}

// ── Video Section ─────────────────────────────────────────────────────────────
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/eMf4oxjvbHw";
const VIDEO_TITLE = "Build Your First AI Automation Workflow in 14 Minutes (No code)";

function getYouTubeId(url: string): string | null {
  const m = url.match(/youtube\.com\/embed\/([^?&]+)/);
  return m ? m[1] : null;
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const ytId = getYouTubeId(VIDEO_EMBED_URL);
  const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : null;
  const fallbackThumb = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null;

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">See it in action</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Watch how teams build and deploy AI agents in minutes with Liberate Studio.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-gray-950">
          {VIDEO_EMBED_URL && playing ? (
            <iframe
              src={`${VIDEO_EMBED_URL}?autoplay=1&rel=0`}
              title={VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setPlaying(true)} role="button" aria-label={`Play: ${VIDEO_TITLE}`}>
              {thumbUrl && (
                <img
                  src={thumbUrl}
                  alt={VIDEO_TITLE}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${thumbLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setThumbLoaded(true)}
                  onError={(e) => { if (fallbackThumb && (e.target as HTMLImageElement).src !== fallbackThumb) { (e.target as HTMLImageElement).src = fallbackThumb; } }}
                />
              )}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={28} className="text-black ml-1" fill="black" />
                </div>
                <span className="text-white text-sm font-medium drop-shadow max-w-xs md:max-w-sm line-clamp-2">{VIDEO_TITLE}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Hero Magic Link Form ───────────────────────────────────────────────────────
function HeroMagicLink() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);
    const { supabase: sb } = await import("./lib/supabase");
    const { error: err } = await sb.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + "/auth/callback" },
    });
    setLoading(false);
    if (err) { setError(err.message); } else { setSent(true); }
  }

  if (sent) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-400 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        Magic link sent to <span className="font-medium text-white">{email}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSend} className="w-full">
      <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-2 focus-within:border-white/50 transition-colors">
        <div className="shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
            <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
        </div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          required
          className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none py-0.5 min-w-0"
        />
        <button
          type="submit"
          disabled={loading || !email.trim()}
          className="shrink-0 bg-white hover:bg-gray-100 disabled:opacity-50 text-gray-900 text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          {loading ? "Sending…" : "Get magic link"}
        </button>
      </div>
      {error && <p className="mt-2 text-red-400 text-xs pl-3">{error}</p>}
    </form>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-14 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-black">
      {/* subtle radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-12">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <div className="flex-1 w-full text-center lg:text-left">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Liberate Studio</span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5">
              Introduce yourself<br />to&nbsp;Liberty.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/50 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Build autonomous AI agents for your business — no code, no complexity. Connect models, automate workflows, and ship in minutes.
            </p>

            {/* Primary CTA — email form */}
            <div className="w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-3">
              <HeroMagicLink />

              {/* Secondary row */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-1">
                <Link
                  to="/docs"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Learn more →
                </Link>
                <span className="w-px h-4 bg-white/20" />
                <a
                  href="https://x.com/liberatestudio_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @liberatestudio_
                </a>
              </div>
            </div>
          </div>

          {/* ── Right column — workflow demo ─────────────────────────────── */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <WorkflowDemo />
          </div>

        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CallToAction() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Build powerful AI agents</h2>
          <p className="text-xl text-gray-500 mb-10">For yourself, your team, or your enterprise. No coding required.</p>
          <Link
            to="/features"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Get Started for Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { company: "TikTok", quote: "Liberate Studio transformed how our creators manage content pipelines.", name: "Sarah Chen", title: "Product Manager" },
  { company: "Microsoft", quote: "The easiest way to deploy robust AI agents across enterprise teams.", name: "David Kim", title: "Engineering Lead" },
  { company: "Adobe", quote: "Incredible velocity. We built what used to take months in an afternoon.", name: "Elena Rostova", title: "Design Technologist" },
  { company: "Oracle", quote: "Secure, reliable, and integrated perfectly with our existing infrastructure.", name: "James Wilson", title: "VP Engineering" },
  { company: "Wipro", quote: "A game changer for client delivery and internal automation.", name: "Ananya Patel", title: "Director of AI" },
  { company: "Intel", quote: "The flexibility of model selection gives us ultimate control over output quality.", name: "Michael Chang", title: "Systems Architect" },
  { company: "Fujitsu", quote: "Pioneering the no-code AI space with exceptional enterprise features.", name: "Kenji Sato", title: "Innovation Lead" },
  { company: "McGraw Hill", quote: "Personalized learning agents deployed at scale, securely.", name: "Rachel Green", title: "EdTech Director" },
];

function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Loved by builders everywhere</h2>
      </div>

      <div className="flex flex-col gap-6 relative" style={{ overflow: 'hidden' }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-[200%] animate-[marquee-left_40s_linear_infinite]">
          {row1.map((t, i) => (
            <div key={i} className="flex-none w-[350px] bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="h-8 w-24 bg-black rounded mb-4 flex items-center justify-center text-white text-xs font-bold tracking-wider">{t.company}</div>
              <p className="text-gray-700 mb-6 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-white text-sm">{t.name.charAt(0)}</div>
                <div className="text-left">
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 w-[200%] animate-[marquee-right_40s_linear_infinite]" style={{ transform: 'translateX(-50%)' }}>
          {row2.map((t, i) => (
            <div key={i} className="flex-none w-[350px] bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="h-8 w-24 bg-black rounded mb-4 flex items-center justify-center text-white text-xs font-bold tracking-wider">{t.company}</div>
              <p className="text-gray-700 mb-6 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-white text-sm">{t.name.charAt(0)}</div>
                <div className="text-left">
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-black transition-colors focus:outline-none"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${yearly ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-gray-900" : "text-gray-500"}`}>
              Yearly <span className="text-black bg-gray-100 px-2 py-0.5 rounded-full text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
            <div className="mb-6"><span className="text-4xl font-bold text-gray-900">$0</span><span className="text-gray-500">/month</span></div>
            <p className="text-gray-600 text-sm mb-8">Plus usage costs</p>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-full mb-8 transition-colors">Get Free</button>
            <ul className="space-y-4 text-sm text-gray-600 flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Build unlimited agents</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> 100 runs per month</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Basic AI models</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Community support</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-black p-8 flex flex-col shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
            <div className="mb-6"><span className="text-4xl font-bold text-gray-900">${yearly ? "16" : "20"}</span><span className="text-gray-500">/month</span></div>
            <p className="text-gray-600 text-sm mb-8">Billed {yearly ? "annually" : "monthly"}</p>
            <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-full mb-8 transition-colors shadow-md">Get Pro</button>
            <ul className="space-y-4 text-sm text-gray-600 flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Everything in Free</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> 5,000 runs per month</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> All premium AI models</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Priority email support</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Advanced analytics</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-6 mt-1"><span className="text-3xl font-bold text-gray-900">Custom</span></div>
            <p className="text-gray-600 text-sm mb-8">For large organizations</p>
            <Link to="/contact" className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-full mb-8 transition-colors block">Contact Us</Link>
            <ul className="space-y-4 text-sm text-gray-600 flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Custom run volume</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> SSO and SAML</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Dedicated account manager</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Custom integrations</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> SLA guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-8 brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The fastest way to build, deploy, and scale AI agents. No coding required.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/workflow-automation" className="hover:text-white transition-colors">Workflow Automation</Link></li>
              <li><Link to="/ai-models" className="hover:text-white transition-colors">AI Models (200+)</Link></li>
              <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/api-reference" className="hover:text-white transition-colors">API Reference</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© 2025 Liberate Studio. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Layout shells ─────────────────────────────────────────────────────────────
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <CallToAction />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main className="pt-16"><HomePage /></main>
            <Footer />
          </div>
        } />
        <Route path="/pricing" element={<Layout><div className="pt-8"><Pricing /></div></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/workflow-automation" element={<Layout><WorkflowAutomationPage /></Layout>} />
        <Route path="/ai-models" element={<Layout><AIModelsPage /></Layout>} />
        <Route path="/integrations" element={<Layout><IntegrationsPage /></Layout>} />
        <Route path="/enterprise" element={<Layout><EnterprisePage /></Layout>} />
        <Route path="/docs" element={<Layout><DocsPage /></Layout>} />
        <Route path="/help" element={<Layout><HelpPage /></Layout>} />
        <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
        <Route path="/api-reference" element={<Layout><APIReferencePage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  );
}
