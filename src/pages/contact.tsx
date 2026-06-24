import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in touch</h1>
          <p className="text-gray-400 text-lg">
            Whether you have a question about the platform, need help with your account, or want to talk about enterprise options, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

              {submitted ? (
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent</h3>
                  <p className="text-gray-600">We will get back to you within one business day.</p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Alex"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Johnson"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic</label>
                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white">
                      <option>General question</option>
                      <option>Enterprise inquiry</option>
                      <option>Technical support</option>
                      <option>Partnership</option>
                      <option>Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      placeholder="Tell us what you're working on or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-3.5 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other ways to reach us</h2>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-2">For general questions and feedback:</p>
                <a href="mailto:hello@liberatestudio.ai" className="text-black font-medium hover:underline text-sm">
                  hello@liberatestudio.ai
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise sales</h3>
                <p className="text-gray-600 text-sm mb-2">For custom pricing, security reviews, and onboarding:</p>
                <a href="mailto:enterprise@liberatestudio.ai" className="text-black font-medium hover:underline text-sm">
                  enterprise@liberatestudio.ai
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Help and support</h3>
                <p className="text-gray-600 text-sm mb-2">For account issues and technical questions:</p>
                <Link to="/help" className="text-black font-medium hover:underline text-sm">
                  Visit the Help Center
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Response time</h3>
                <p className="text-gray-600 text-sm">
                  We respond to all messages within one business day. Enterprise inquiries receive a response within four hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
