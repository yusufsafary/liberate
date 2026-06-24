import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I get started with Liberate Studio?",
    answer: "Create a free account, then open the workflow builder. From the template library, pick a starting point that matches your use case, or start from scratch with a blank canvas. Our quickstart guide walks you through building your first agent in under 10 minutes.",
  },
  {
    question: "What AI models are available on the free plan?",
    answer: "Free accounts include access to GPT-3.5 Turbo, Claude 3 Haiku, Gemini 1.5 Flash, and Llama 3.1 8B. Pro and Enterprise plans unlock the full catalog of 200+ models including GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Pro, and all premium variants.",
  },
  {
    question: "How are runs counted and billed?",
    answer: "A run is one complete execution of a workflow from trigger to final output. Free plans include 100 runs per month. Pro plans include 5,000 runs per month. Additional runs beyond your plan limit are billed at a per-run rate shown in your account settings. Model inference costs are billed separately at cost.",
  },
  {
    question: "Can I connect my own API keys for model providers?",
    answer: "Yes. Pro and Enterprise accounts can bring their own API keys for any supported provider. Your key is stored encrypted and never logged. When your key is configured, all inference for that provider routes through your account directly.",
  },
  {
    question: "Is my data used to train any AI models?",
    answer: "No. Your prompts, agent configurations, and workflow data are never used to train any model, by Liberate Studio or by any of our model providers. We have data processing agreements in place with all providers to enforce this.",
  },
  {
    question: "Can I export my workflows or migrate to another platform?",
    answer: "Yes. All workflows can be exported as JSON at any time from the workflow settings menu. The export format is open and documented in our API reference. You own your workflows and can take them anywhere.",
  },
  {
    question: "What happens if my agent errors during a run?",
    answer: "Failed runs are logged with full error details in your analytics dashboard. You can configure retry policies on any node, set up fallback branches for known failure modes, and receive real-time alerts via Slack or email when error rates exceed a threshold you define.",
  },
  {
    question: "Is Liberate Studio GDPR compliant?",
    answer: "Yes. We are a data processor under GDPR. We offer a Data Processing Agreement to all customers on request. Enterprise plans include configurable data residency (EU-only processing), automatic data deletion, and audit log exports to support your compliance obligations.",
  },
  {
    question: "How do I cancel or downgrade my subscription?",
    answer: "You can cancel or change your plan at any time from the Billing section of your account settings. When you cancel a paid plan, you keep access until the end of your current billing period. Your workflows and data are retained for 90 days after cancellation.",
  },
  {
    question: "Do you offer educational or nonprofit discounts?",
    answer: "Yes. We offer a 50% discount on Pro plans for verified educational institutions and registered nonprofits. Contact us at hello@liberatestudio.ai with your organization details and we will set that up for you.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:text-black transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-gray-400 shrink-0 mt-0.5 text-xl leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-gray-600 leading-relaxed pb-5 text-sm">{answer}</p>
      )}
    </div>
  );
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-gray-400 text-lg">Find answers to common questions or reach out and we will get back to you fast.</p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Getting started", desc: "Set up your account, build your first workflow, and deploy your first agent.", link: "/docs" },
              { title: "Billing and plans", desc: "Understand how runs are counted, how billing works, and how to manage your subscription.", link: "/contact" },
              { title: "Contact support", desc: "Reach our support team directly for account issues, technical questions, or enterprise inquiries.", link: "/contact" },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.link}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow block"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Frequently asked questions</h2>
          <p className="text-gray-500 text-center mb-10">If your question is not here, reach out and we will answer it within one business day.</p>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still need help?</h2>
          <p className="text-gray-600 mb-6">Our support team responds to all messages within one business day. Enterprise customers get a response within 15 minutes.</p>
          <Link to="/contact" className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors">
            Contact support
          </Link>
        </div>
      </section>
    </div>
  );
}
