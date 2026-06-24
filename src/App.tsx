import React, { useState, useEffect } from "react";
import { ChevronDown, Play, CheckCircle2 } from "lucide-react";
import { motion, useScroll } from "framer-motion";

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const textSize = size === "sm" ? "text-base" : "text-xl";
  return (
    <div className={`flex items-baseline gap-[3px] font-black tracking-[-0.04em] select-none ${textSize}`}>
      <span className="text-black uppercase">Liberate</span>
      <span className="text-black uppercase font-light tracking-widest text-[0.65em] ml-1">STUDIO</span>
    </div>
  );
}

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between"
    >
      <Logo />

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          Product <ChevronDown size={14} />
        </div>
        <div className="cursor-pointer hover:text-black transition-colors">Pricing</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          Learn <ChevronDown size={14} />
        </div>
        <div className="cursor-pointer hover:text-black transition-colors">Blog</div>
        <div className="cursor-pointer hover:text-black transition-colors">About</div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden sm:block text-sm font-medium text-gray-700 hover:text-black transition-colors">
          Log in
        </a>
        <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black">
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

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>

            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
              Learn More
            </button>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white ml-1" size={24} />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-950 to-gray-800"></div>
            </div>
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
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            Get Started for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { company: "TikTok", quote: "LiberateStudio transformed how our creators manage content pipelines.", name: "Sarah Chen", title: "Product Manager" },
  { company: "Microsoft", quote: "The easiest way to deploy robust AI agents across enterprise teams.", name: "David Kim", title: "Engineering Lead" },
  { company: "Adobe", quote: "Incredible velocity. We built what used to take months in an afternoon.", name: "Elena Rostova", title: "Design Technologist" },
  { company: "Oracle", quote: "Secure, reliable, and integrated perfectly with our existing infrastructure.", name: "James Wilson", title: "VP Engineering" },
  { company: "Wipro", quote: "A game changer for client delivery and internal automation.", name: "Ananya Patel", title: "Director of AI" },
  { company: "Intel", quote: "The flexibility of model selection gives us ultimate control over output.", name: "Michael Chang", title: "Systems Architect" },
  { company: "Fujitsu", quote: "Pioneering the no-code AI space with exceptional enterprise features.", name: "Kenji Sato", title: "Innovation Lead" },
  { company: "McGraw Hill", quote: "Personalized learning agents deployed at scale securely.", name: "Rachel Green", title: "EdTech Director" },
];

function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Loved by builders everywhere</h2>
      </div>

      <div className="flex flex-col gap-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

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

        <div className="flex gap-6 w-[200%] animate-[marquee-right_40s_linear_infinite] ml-[-50%]">
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
    <section className="py-24 bg-white">
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
            <p className="text-gray-600 text-sm mb-8">+ usage costs</p>
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
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-full mb-8 transition-colors">
              Contact Us
            </button>
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

function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The fastest way to build, deploy, and scale AI agents. No coding required.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Models (200+)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <CallToAction />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
