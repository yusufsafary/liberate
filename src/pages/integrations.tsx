import { Link } from "react-router-dom";

const categories = [
  {
    title: "Communication",
    items: ["Slack", "Gmail", "Microsoft Teams", "Outlook", "Discord", "Intercom", "Zendesk", "Twilio SMS"],
  },
  {
    title: "CRM and sales",
    items: ["Salesforce", "HubSpot", "Pipedrive", "Close", "Copper", "Zoho CRM", "Attio"],
  },
  {
    title: "Productivity",
    items: ["Notion", "Airtable", "Google Sheets", "Coda", "Confluence", "Linear", "Jira", "Asana"],
  },
  {
    title: "Storage and files",
    items: ["Google Drive", "Dropbox", "OneDrive", "Box", "AWS S3", "Cloudinary"],
  },
  {
    title: "Data and analytics",
    items: ["Postgres", "MySQL", "Snowflake", "BigQuery", "Supabase", "MongoDB", "Redis"],
  },
  {
    title: "Developer tools",
    items: ["GitHub", "GitLab", "Vercel", "Netlify", "PagerDuty", "Datadog", "Sentry"],
  },
  {
    title: "Commerce and payments",
    items: ["Stripe", "Shopify", "WooCommerce", "Chargebee", "Paddle"],
  },
  {
    title: "Custom APIs",
    items: ["Any REST API", "GraphQL endpoints", "Webhook receivers", "OAuth providers", "gRPC services"],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-24 bg-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Connect with the tools you already use</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Liberate Studio connects to over 100 services out of the box. Any REST API can be added in under two minutes using our no-code connector builder.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Connect any API in minutes</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            If a service is not on our list, you can add it yourself. Paste in an API documentation URL and the connector builder will read the spec and generate a fully typed integration automatically.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", label: "Paste the API URL", desc: "Point to any OpenAPI, Swagger, or Postman collection" },
              { step: "2", label: "Review the connector", desc: "The builder shows you every available endpoint and parameter" },
              { step: "3", label: "Use it in your workflow", desc: "Drag the connector into any workflow node and configure it" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">{s.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.label}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Request an integration</h2>
          <p className="text-gray-400 mb-6">Can't find what you need? Let us know and we will prioritize it on our roadmap.</p>
          <Link to="/contact" className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors">
            Contact the team
          </Link>
        </div>
      </section>
    </div>
  );
}
