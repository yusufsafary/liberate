import { Link } from "react-router-dom";

const steps = [
  {
    step: "1",
    title: "Define your trigger",
    description: "Every workflow starts with a trigger. It could be an incoming message, a scheduled time, a webhook from an external service, or a button clicked by a user. Choose from built-in triggers or connect any API.",
  },
  {
    step: "2",
    title: "Add your logic",
    description: "Drop in AI model nodes to process text, analyze data, or generate content. Add conditional branches to route conversations differently based on intent, user type, or model output. Layer in loops, memory reads, and data lookups as needed.",
  },
  {
    step: "3",
    title: "Connect your actions",
    description: "When the logic is done, wire up the output. Send an email, post a Slack message, update a CRM record, write to a database, or call any external API. Actions can be chained so one workflow triggers another.",
  },
  {
    step: "4",
    title: "Test before you ship",
    description: "Use the built-in test runner to send live inputs through your workflow and inspect every step. See the exact prompt sent to each model, the raw response, how long it took, and what it cost.",
  },
  {
    step: "5",
    title: "Deploy and monitor",
    description: "Publish your workflow with one click. It becomes a live API endpoint, Slack app, or embeddable widget. The analytics dashboard shows you real-time run volume, error rates, latency, and cost.",
  },
];

const useCases = [
  { title: "Customer support", description: "Route incoming tickets, generate draft replies, escalate complex issues, and update your CRM. Automatically. All day." },
  { title: "Content pipelines", description: "Turn a brief into a fully researched article, social post set, and SEO summary. One workflow, one click." },
  { title: "Data analysis", description: "Connect to your database, ask a natural language question, and get a formatted summary with charts and action items." },
  { title: "Lead qualification", description: "Score inbound leads against your ideal customer profile, enrich with public data, and notify the right sales rep instantly." },
  { title: "Internal assistants", description: "Give your team a knowledge base they can talk to. HR policies, engineering docs, product specs. Searchable and conversational." },
  { title: "Code review helpers", description: "Analyze pull requests for security issues, style violations, and documentation gaps before a human reviewer sees them." },
];

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Automate any workflow with AI</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            The Liberate Studio workflow builder lets you connect models, data sources, and actions into repeatable processes that run without human intervention. If you can describe it, you can automate it.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">How it works</h2>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What teams are building</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Liberate Studio is flexible enough to handle almost any business process. Here are some of the most common things our customers build.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Start building your first workflow</h2>
          <p className="text-gray-400 mb-8">Free to start. No credit card required. Your first workflow can be live in under 30 minutes.</p>
          <Link to="/docs" className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-base font-semibold transition-colors">
            Read the quickstart guide
          </Link>
        </div>
      </section>
    </div>
  );
}
