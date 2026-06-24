import { Link } from "react-router-dom";

const sections = [
  {
    title: "Quick start",
    items: [
      { label: "Create your first agent", desc: "Build a simple question-answering agent in under 10 minutes." },
      { label: "Add a trigger", desc: "Connect your agent to a webhook, schedule, or user input." },
      { label: "Test in the editor", desc: "Use the live test runner to see your agent respond in real time." },
      { label: "Deploy to production", desc: "Publish your agent as an API or chat widget with one click." },
    ],
  },
  {
    title: "Core concepts",
    items: [
      { label: "Workflows and nodes", desc: "Understand how workflows are structured and how data flows between nodes." },
      { label: "Prompts and variables", desc: "Write prompts with dynamic variables pulled from previous nodes or the trigger." },
      { label: "Branching logic", desc: "Route your workflow differently based on model output, user input, or data conditions." },
      { label: "Memory and context", desc: "Give your agent access to conversation history and persistent user data." },
    ],
  },
  {
    title: "Integrations",
    items: [
      { label: "Connect a REST API", desc: "Use the connector builder to add any external service in minutes." },
      { label: "Slack integration", desc: "Deploy your agent as a Slack bot and respond to messages or slash commands." },
      { label: "Database reads and writes", desc: "Query Postgres, MySQL, Supabase, or any SQL database from inside a workflow." },
      { label: "Webhook setup", desc: "Trigger workflows from external events like form submissions, payment events, or alerts." },
    ],
  },
  {
    title: "Advanced topics",
    items: [
      { label: "Multi-agent workflows", desc: "Build workflows where one agent calls another to delegate subtasks." },
      { label: "Cost optimization", desc: "Strategies for reducing model costs without sacrificing output quality." },
      { label: "Error handling", desc: "Add fallback paths, retry logic, and alerting to make your workflows resilient." },
      { label: "Version control", desc: "Manage workflow versions, roll back to previous states, and collaborate safely." },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-gray-400 text-lg">Everything you need to build, deploy, and manage AI agents on Liberate Studio.</p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/40 shrink-0">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-white/40 text-sm">Search the docs...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100">{section.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="group rounded-xl border border-gray-200 p-5 hover:border-black hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">{item.label}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 group-hover:text-black shrink-0 mt-0.5 transition-colors">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Need more help?</h2>
            <p className="text-gray-600 mb-6">Our support team and community are here to help you get unstuck.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/help" className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full text-sm font-semibold transition-colors">
                Help Center
              </Link>
              <Link to="/community" className="border border-gray-300 text-gray-700 hover:bg-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                Community Forum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
