import { Link } from "react-router-dom";

const providers = [
  { name: "OpenAI", models: ["GPT-4o", "GPT-4 Turbo", "GPT-3.5 Turbo", "o1", "o3-mini"], description: "The most widely used family of language models. Strong general reasoning, code generation, and instruction following across all task types." },
  { name: "Anthropic", models: ["Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Claude 3 Opus", "Claude 3 Sonnet"], description: "Built with a focus on safety and reliability. Excellent for long documents, nuanced reasoning, and tasks where consistent behavior matters." },
  { name: "Google", models: ["Gemini 2.0 Pro", "Gemini 1.5 Flash", "Gemini 1.5 Pro", "Gemini Ultra"], description: "Google's frontier models with native multimodal capabilities. Best in class for tasks that mix text, code, and structured data." },
  { name: "Meta", models: ["Llama 3.3 70B", "Llama 3.1 405B", "Llama 3.1 8B", "Code Llama"], description: "Open weights models that run with full privacy. Excellent for teams that need on-premise deployments or want to avoid data leaving their environment." },
  { name: "Mistral", models: ["Mistral Large", "Mistral Nemo", "Codestral", "Mixtral 8x7B"], description: "European frontier models known for fast inference and strong multilingual capabilities. A great choice for cost-sensitive, high-volume applications." },
  { name: "Cohere", models: ["Command R+", "Command R", "Embed v3", "Rerank 3"], description: "Purpose-built for enterprise retrieval and search. The embed and rerank models are particularly strong for knowledge base and RAG applications." },
  { name: "xAI", models: ["Grok 2", "Grok 2 Mini", "Grok Vision Beta"], description: "Real-time knowledge and strong reasoning with a less filtered output style. Particularly useful for tasks that require current information." },
  { name: "Open source", models: ["Qwen 2.5", "DeepSeek V3", "Phi-4", "Falcon 180B"], description: "Hundreds of community and research models available via Hugging Face and custom endpoints. Bring any model that serves an OpenAI-compatible API." },
];

export default function AIModelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Access 200+ AI models from a single platform</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Every major language model from every major provider, all available in your workflows with a single click. Switch models any time without rewriting prompts or logic.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "AI models" },
              { value: "8", label: "Major providers" },
              { value: "1-click", label: "Model switching" },
              { value: "100%", label: "Same prompt format" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Models by provider</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {providers.map((p, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-7 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.models.map((m, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-mono">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Consistent interface</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every model uses the same node interface inside your workflow. Switching from GPT-4o to Claude Opus takes three seconds and zero code changes.</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Cost transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">See the exact cost per run for every model before you commit. The cost estimator updates live as you change models or prompts.</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Privacy first</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your prompts and data never train any external model. All API calls go through our encrypted proxy and are never stored by the provider.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Try any model for free</h2>
          <p className="text-gray-400 mb-8">Free accounts include access to a selection of models. Pro and Enterprise plans unlock every model in our catalog.</p>
          <Link to="/docs" className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-base font-semibold transition-colors">
            Start building
          </Link>
        </div>
      </section>
    </div>
  );
}
