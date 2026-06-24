import { Link } from "react-router-dom";

const values = [
  { title: "Access for everyone", description: "We believe powerful AI tools should not be locked behind engineering degrees. Anyone with an idea deserves the ability to build something real." },
  { title: "Transparency first", description: "We tell you exactly what models power your agents, what data they use, and how they make decisions. No black boxes." },
  { title: "Speed over perfection", description: "Waiting months to launch an agent is not acceptable. We obsess over reducing the time from idea to working product." },
  { title: "Builders at heart", description: "Everyone on our team builds things with Liberate Studio. We eat our own cooking and care deeply about the experience." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We believe AI should work for everyone
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Liberate Studio was founded on a simple idea: the most capable AI technology in the world should not require a team of engineers to use. We built the platform we always wished existed.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started in 2023 after watching countless teams struggle to adopt AI. They had the ideas. They had the budget. But building even a simple AI-powered workflow required months of engineering work, custom API integrations, and ongoing maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We knew there had to be a better way. So we built Liberate Studio: a visual platform where anyone can connect AI models, define logic, and deploy production-ready agents without touching a single line of code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, thousands of teams use Liberate Studio to power customer support agents, content pipelines, data analysis workflows, and much more. We are just getting started.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">2023</div>
              <div className="text-gray-500 mb-8">Founded</div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10k+</div>
                  <div className="text-gray-500 text-sm mt-1">Active teams</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50M+</div>
                  <div className="text-gray-500 text-sm mt-1">Agent runs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-500 text-sm mt-1">AI models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-500 text-sm mt-1">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What we stand for</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Come build with us</h2>
          <p className="text-gray-400 mb-8">We are a small team with a big mission. If this resonates with you, we would love to meet you.</p>
          <Link to="/careers" className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-base font-semibold transition-colors">
            See Open Roles
          </Link>
        </div>
      </section>
    </div>
  );
}
