import { Link } from "react-router-dom";

const posts = [
  {
    category: "Product",
    date: "June 10, 2025",
    title: "Introducing multi-step reasoning in your agents",
    excerpt: "We have added native support for chain-of-thought reasoning across all models. Your agents can now break down complex problems into intermediate steps before producing a final answer, which means significantly better results on tasks involving logic, math, or multi-document analysis.",
    readTime: "5 min read",
  },
  {
    category: "Engineering",
    date: "May 28, 2025",
    title: "How we reduced agent execution latency by 60%",
    excerpt: "Over the last quarter our team rebuilt the orchestration layer that powers every workflow run on Liberate Studio. We cut median execution time from 2.8 seconds to 1.1 seconds. In this post we explain the architectural decisions behind that improvement and what tradeoffs we accepted along the way.",
    readTime: "8 min read",
  },
  {
    category: "Use Cases",
    date: "May 15, 2025",
    title: "How McGraw Hill uses Liberate Studio for personalized learning",
    excerpt: "McGraw Hill's EdTech team built a set of agents that adapt reading level, generate quiz questions, and provide detailed feedback to students based on their performance history. We sat down with their Director of AI to understand how they went from prototype to production in under three weeks.",
    readTime: "6 min read",
  },
  {
    category: "Product",
    date: "April 30, 2025",
    title: "New: connect any REST API in under two minutes",
    excerpt: "We shipped a new integration builder that lets you point Liberate Studio at any REST API documentation URL and automatically generates a typed connector. Your agents can now call external services without you writing a single line of glue code. Here is a walkthrough of how it works.",
    readTime: "4 min read",
  },
  {
    category: "Company",
    date: "April 14, 2025",
    title: "Why we chose to stay small and focused in year two",
    excerpt: "After our Series A we had a lot of pressure to expand into adjacent markets quickly. We decided not to. This post is about why we think staying focused on the core workflow builder is the right bet, and what we think companies get wrong when they scale product teams too early.",
    readTime: "7 min read",
  },
  {
    category: "Engineering",
    date: "March 27, 2025",
    title: "Building a real-time agent testing environment",
    excerpt: "Testing an AI agent used to mean waiting for a full deployment cycle and then manually running through scenarios. We built a live test runner that lets you send messages to any agent directly inside the workflow editor and see the full execution trace in real time. Here is how we built it.",
    readTime: "9 min read",
  },
];

const categoryColors: Record<string, string> = {
  Product: "bg-black text-white",
  Engineering: "bg-gray-800 text-white",
  "Use Cases": "bg-gray-100 text-gray-800",
  Company: "bg-gray-200 text-gray-800",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Liberate Studio Blog</h1>
          <p className="text-gray-400 text-lg">Product updates, engineering deep dives, and stories from our customers.</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <article key={i} className={`rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-800"}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className={`font-bold text-gray-900 mb-3 leading-snug ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <button className="mt-6 text-sm font-semibold text-black hover:underline">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay in the loop</h2>
          <p className="text-gray-600 mb-6">Get new posts delivered to your inbox. No spam. Unsubscribe any time.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
