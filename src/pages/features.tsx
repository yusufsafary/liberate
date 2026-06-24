import { Link } from "react-router-dom";

const features = [
  {
    icon: "⬡",
    title: "Visual workflow builder",
    description: "Design AI agent workflows using a drag-and-drop canvas. Connect inputs, models, logic branches, and actions with no code. What used to take a sprint now takes an afternoon.",
  },
  {
    icon: "⬡",
    title: "200+ AI models",
    description: "Access every major language model from OpenAI, Anthropic, Google, Meta, Mistral, and dozens of open-source providers. Switch models with a single click without changing your workflow.",
  },
  {
    icon: "⬡",
    title: "Real-time testing",
    description: "Send test messages to your agent directly inside the editor. See the full execution trace, model outputs, and timing information before you deploy anything to production.",
  },
  {
    icon: "⬡",
    title: "One-click deploy",
    description: "Publish your agent as a hosted API endpoint, embeddable chat widget, or Slack bot in seconds. We handle the infrastructure, scaling, and uptime so you do not have to.",
  },
  {
    icon: "⬡",
    title: "Deep integrations",
    description: "Connect to the tools your team already uses. Slack, Gmail, Notion, Salesforce, HubSpot, Airtable, Google Drive, and more. Any REST API can be added in under two minutes.",
  },
  {
    icon: "⬡",
    title: "Advanced analytics",
    description: "Track every run across your agents. See which steps take the most time, where errors occur, how costs accumulate, and how user satisfaction changes over time.",
  },
  {
    icon: "⬡",
    title: "Memory and context",
    description: "Give your agents persistent memory across conversations. Store user preferences, session history, and structured data so every interaction builds on the last.",
  },
  {
    icon: "⬡",
    title: "Team collaboration",
    description: "Invite teammates to build and review workflows together. Set permissions by role, leave comments on nodes, and track changes with full version history.",
  },
  {
    icon: "⬡",
    title: "Privacy by default",
    description: "Your data never trains any model without your explicit consent. All agent runs are encrypted in transit and at rest. SOC 2 Type II compliance available for Enterprise plans.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Everything you need to build AI agents</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From a simple question-answering bot to a fully autonomous multi-step workflow, Liberate Studio gives you the tools to build it without writing a line of code.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link to="/docs" className="bg-white text-black hover:bg-gray-100 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">
              Get started free
            </Link>
            <Link to="/workflow-automation" className="border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 rounded-full text-sm font-medium transition-colors">
              See workflow builder
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white text-xl mb-5">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare plans</h2>
          <p className="text-gray-600 mb-8">All features are available on every plan. The difference is run volume and support level.</p>
          <Link to="/#pricing" className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full text-base font-semibold transition-colors">
            See pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
