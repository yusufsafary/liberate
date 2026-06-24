import { Link } from "react-router-dom";

const roles = [
  {
    title: "Senior Frontend Engineer",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    description: "You will own the canvas experience at the core of Liberate Studio. We are looking for someone who cares deeply about interaction quality and has built complex drag-and-drop or node-based UIs before. React, TypeScript, and performance optimization are your comfort zone.",
  },
  {
    title: "AI Platform Engineer",
    team: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "You will build the runtime layer that executes thousands of agent workflows per second. This means designing reliable orchestration systems, managing model inference pipelines, and keeping latency low while cost stays under control.",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    description: "You will shape how people experience AI agent building. The work ranges from the core workflow canvas to onboarding flows to the dashboard. We want someone who thinks in systems, pushes back on unnecessary complexity, and ships polished work fast.",
  },
  {
    title: "Solutions Engineer",
    team: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "You will be the bridge between enterprise customers and the platform. You will help new customers get their first agent live, diagnose integration challenges, and bring structured product feedback back to the engineering team.",
  },
  {
    title: "Growth Marketer",
    team: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "You will own our acquisition channels from SEO to paid to community. We want someone who treats marketing like an engineering problem: hypothesis, test, measure, iterate. Strong writing skills and a deep curiosity about AI tools are a must.",
  },
];

const perks = [
  "Fully remote with flexible hours",
  "Competitive salary and equity",
  "Health, dental, and vision coverage",
  "Home office budget",
  "Annual team retreats",
  "Learning and conference budget",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join the team</h1>
          <p className="text-xl text-gray-400">
            We are a fully remote team on a mission to give everyone access to the power of AI. If you want to build tools that genuinely change how people work, you are in the right place.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What we offer</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                <span className="text-gray-700 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Open positions</h2>
          <div className="space-y-6">
            {roles.map((role, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.team}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.location}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.type}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors shrink-0"
                  >
                    Apply
                  </Link>
                </div>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Don't see a role that fits? We always want to hear from exceptional people.</p>
            <Link to="/contact" className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-sm font-medium transition-colors">
              Send an open application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
