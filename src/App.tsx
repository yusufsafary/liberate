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

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const textSize = size === "sm" ? "text-base" : "text-xl";
  return (
    <div className={`flex items-baseline gap-[3px] font-black tracking-[-0.04em] select-none ${textSize}`}>
      <span className="text-black uppercase">Liberate</span>
      <span className="text-black uppercase font-light tracking-widest text-[0.65em] ml-1">STUDIO</span>
    </div>
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setHidden(false);
      }
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
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between"
      >
        <Link to="/">
          <Logo />
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
          {/* Log in: visible on desktop, hidden on mobile (handled in mobile menu) */}
          <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Log in
          </a>
          <Link
            to="/features"
            className="hidden sm:inline-block bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
          {/* Hamburger: visible only on mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-[65px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg md:hidden"
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
              <a
                href="#"
                className="text-center py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              >
                Log in
              </a>
              <Link
                to="/features"
                className="text-center py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

function WorkflowDemo() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setStep((s) => {
        if (s >= 3) {
          setRunning(false);
          setTimeout(() => { setStep(0); setRunning(true); }, 2000);
          return 3;
        }
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

      {/* Mobile: vertical stack — Desktop: horizontal row */}
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
                {/* Vertical arrow on mobile */}
                <div className="flex md:hidden flex-col items-center gap-0.5">
                  <motion.div
                    animate={{ height: step > i ? "1.5rem" : "1rem", opacity: step > i ? 1 : 0.2 }}
                    className="w-px bg-white"
                  />
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white opacity-40" />
                </div>
                {/* Horizontal arrow on desktop */}
                <div className="hidden md:flex items-center gap-0.5 shrink-0">
                  <motion.div
                    animate={{ width: step > i ? "2rem" : "1.5rem", opacity: step > i ? 1 : 0.2 }}
                    className="h-px bg-white"
                  />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-white opacity-40" />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mx-5 mb-5 rounded-xl bg-black/40 border border-white/5 p-4">
        <div className="text-white/30 text-[10px] font-semibold tracking-wider mb-2">OUTPUT</div>
        <motion.div
          animate={{ opacity: step >= 3 ? 1 : 0.4 }}
          className="text-white/70 text-sm leading-relaxed font-mono"
        >
          {step < 1 && "Waiting for input..."}
          {step === 1 && "Processing with AI model..."}
          {step === 2 && 'Sending to Slack #support...'}
          {step >= 3 && (
            <>
              <span className="text-green-400">Done.</span> Message sent to{" "}
              <span className="text-white/90">#support</span>. Response time: 1.2s
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-black">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-6">
              <span className="text-xs font-semibold text-white tracking-wider">NEW FROM LIBERATE STUDIO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Introduce yourself<br />to Liberty.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Build powerful, autonomous AI agents for your business without writing a single line of code. Connect models, automate workflows, and deploy in minutes.
            </p>

            <Link
              to="/docs"
              className="inline-block border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <WorkflowDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

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
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-white text-sm">
                  {t.name.charAt(0)}
                </div>
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
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-white text-sm">
                  {t.name.charAt(0)}
                </div>
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
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 text-sm mb-8">Plus usage costs</p>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-full mb-8 transition-colors">
              Get Free
            </button>
            <ul className="space-y-4 text-sm text-gray-600 flex-grow">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Build unlimited agents</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> 100 runs per month</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Basic AI models</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-black shrink-0" size={18} /> Community support</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-black p-8 flex flex-col shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">${yearly ? "16" : "20"}</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 text-sm mb-8">Billed {yearly ? "annually" : "monthly"}</p>
            <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-full mb-8 transition-colors shadow-md">
              Get Pro
            </button>
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
            <div className="mb-6 mt-1">
              <span className="text-3xl font-bold text-gray-900">Custom</span>
            </div>
            <p className="text-gray-600 text-sm mb-8">For large organizations</p>
            <Link
              to="/contact"
              className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-full mb-8 transition-colors block"
            >
              Contact Us
            </Link>
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

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <LogoWhite />
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
          <div className="text-sm text-gray-500">
            2025 Liberate Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
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
            <main className="pt-[72px]"><HomePage /></main>
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
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  );
}
