import { Link } from "react-router-dom";

const endpoints = [
  {
    method: "POST",
    path: "/v1/agents/{agent_id}/run",
    description: "Execute a workflow agent with a given input. Returns the full agent response along with execution metadata.",
  },
  {
    method: "GET",
    path: "/v1/agents/{agent_id}/runs",
    description: "List recent runs for an agent. Supports pagination, date filtering, and status filtering.",
  },
  {
    method: "GET",
    path: "/v1/agents/{agent_id}/runs/{run_id}",
    description: "Retrieve details of a specific run including the full execution trace, node outputs, and cost breakdown.",
  },
  {
    method: "GET",
    path: "/v1/agents",
    description: "List all agents in your workspace. Returns agent IDs, names, deployment status, and creation timestamps.",
  },
  {
    method: "POST",
    path: "/v1/conversations",
    description: "Start a new conversation session with an agent. Use this for multi-turn chat applications that need persistent context.",
  },
  {
    method: "POST",
    path: "/v1/conversations/{conversation_id}/messages",
    description: "Send a message to an active conversation and receive the agent response. Conversation context is maintained automatically.",
  },
  {
    method: "DELETE",
    path: "/v1/conversations/{conversation_id}",
    description: "End a conversation and clear its context. Conversation history remains in your analytics dashboard.",
  },
  {
    method: "GET",
    path: "/v1/models",
    description: "List all AI models available in your plan. Returns model IDs, provider, context window size, and pricing.",
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-gray-100 text-gray-700",
  POST: "bg-black text-white",
  DELETE: "bg-gray-800 text-white",
};

const sdks = [
  { name: "JavaScript / TypeScript", status: "Stable", note: "Full TypeScript support. Works in Node.js and browser environments." },
  { name: "Python", status: "Stable", note: "Async support with asyncio. Type hints for all parameters and responses." },
  { name: "Go", status: "Beta", note: "Idiomatic Go with context support. Available via go get." },
  { name: "REST API", status: "Stable", note: "Direct HTTP calls work from any language or environment." },
];

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">API Reference</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Integrate Liberate Studio into your own products. Run agents, manage conversations, and retrieve execution data programmatically.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All API requests require an API key passed in the Authorization header. You can generate API keys from your account settings under the API tab.
          </p>
          <div className="bg-gray-950 rounded-2xl p-5 md:p-6 font-mono text-sm overflow-x-auto">
            <div className="text-gray-500 mb-2">Request header</div>
            <div className="text-green-400 whitespace-nowrap">Authorization: Bearer <span className="text-white">ls_live_your_api_key_here</span></div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Keep your API keys secret. Do not commit them to version control or expose them in client-side code. Use environment variables to manage keys in your deployment environment.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((ep, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5 hover:border-gray-400 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded font-mono shrink-0 ${methodColors[ep.method]}`}>
                    {ep.method}
                  </span>
                  <code className="text-gray-800 text-sm font-mono break-all">{ep.path}</code>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{ep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Client libraries</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {sdks.map((sdk, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-gray-900">{sdk.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${sdk.status === "Stable" ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}>
                    {sdk.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{sdk.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rate limits</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { plan: "Free", limit: "60 requests / minute", burst: "10 concurrent" },
              { plan: "Pro", limit: "600 requests / minute", burst: "50 concurrent" },
              { plan: "Enterprise", limit: "Custom", burst: "Custom" },
            ].map((r, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5">
                <div className="font-semibold text-gray-900 mb-3">{r.plan}</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>{r.limit}</div>
                  <div>{r.burst}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            When you exceed the rate limit, the API returns a 429 status. Implement exponential backoff in your client to handle rate limit responses gracefully.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-3">Need help with the API?</h2>
          <p className="text-gray-400 mb-6">Our developer community and support team are here to help you integrate smoothly.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/community" className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full text-sm font-semibold transition-colors">
              Join the community
            </Link>
            <Link to="/contact" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-colors">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
