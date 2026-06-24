import { Link } from "react-router-dom";

const channels = [
  {
    name: "Discord server",
    description: "Join thousands of builders on our Discord. Ask questions, share what you have built, and get feedback from the community and our team. We are active every day.",
    members: "12,000+ members",
    action: "Join on Discord",
    href: "#",
  },
  {
    name: "Community forum",
    description: "A searchable, indexed forum for longer discussions, deep dives, and technical questions. Great for questions you want to reference later or topics that need more than a quick chat reply.",
    members: "8,000+ threads",
    action: "Browse the forum",
    href: "#",
  },
  {
    name: "X (Twitter)",
    description: "Follow us for product announcements, tips on building better agents, and highlights from the community. We reply to questions and share what our team is building.",
    members: "24,000+ followers",
    action: "Follow on X",
    href: "#",
  },
  {
    name: "GitHub",
    description: "Explore open source templates, report bugs, and contribute to our SDK and connector library. All client libraries and example workflows are hosted publicly.",
    members: "4,200+ stars",
    action: "View on GitHub",
    href: "#",
  },
];

const events = [
  {
    date: "July 15, 2025",
    title: "Monthly community office hours",
    description: "A live session with the Liberate Studio team. Ask anything about the platform, roadmap, or how to approach specific use cases. Recorded and shared afterwards.",
  },
  {
    date: "August 2, 2025",
    title: "Agent building workshop: customer support automation",
    description: "A two-hour hands-on session where we build a complete customer support triage and response system from scratch. All skill levels welcome.",
  },
  {
    date: "August 20, 2025",
    title: "Community showcase: share what you built",
    description: "Members present the workflows and agents they have built. A great way to discover new approaches and get feedback on your own work.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join the Liberate Studio community</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Over 20,000 builders are using Liberate Studio to automate their work with AI. The community is where they share what they have learned, ask for help, and find inspiration.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Where to find us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((c, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{c.name}</h3>
                <div className="text-sm text-gray-400 mb-4">{c.members}</div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{c.description}</p>
                <a
                  href={c.href}
                  className="inline-block bg-black text-white hover:bg-gray-800 text-sm font-semibold px-6 py-3 rounded-full transition-colors text-center"
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Upcoming events</h2>
          <p className="text-gray-600 text-center mb-10 md:mb-12">Live sessions, workshops, and showcases. All free and open to the community.</p>
          <div className="space-y-6">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-7 flex gap-4 md:gap-6 items-start">
                <div className="bg-black text-white rounded-xl px-3 md:px-4 py-3 text-center shrink-0 min-w-[68px] md:min-w-[80px]">
                  <div className="text-xs font-semibold tracking-wider">{event.date.split(" ")[0].slice(0, 3).toUpperCase()}</div>
                  <div className="text-xl font-bold">{event.date.split(" ")[1].replace(",", "")}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  <button className="mt-3 text-sm font-semibold text-black hover:underline">Register free</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Share what you built</h2>
          <p className="text-gray-400 mb-6">Publish your workflow as a community template and help other builders get started faster. The most popular templates are featured in our gallery.</p>
          <a href="#" className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-base font-semibold transition-colors">
            Submit a template
          </a>
        </div>
      </section>
    </div>
  );
}
