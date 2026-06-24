import { Link } from "react-router-dom";

const features = [
  { title: "SSO and SAML 2.0", description: "Connect Liberate Studio to your existing identity provider. Okta, Azure AD, Google Workspace, and custom SAML providers are all supported. User provisioning happens automatically." },
  { title: "SOC 2 Type II", description: "We undergo annual third-party audits. Our SOC 2 Type II report is available to enterprise customers under NDA. We are also pursuing ISO 27001 certification." },
  { title: "Custom model agreements", description: "Need to ensure your data never touches a specific provider? Enterprise plans support custom model routing policies that honor your vendor agreements and data residency requirements." },
  { title: "Dedicated infrastructure", description: "High-volume enterprise customers can opt for dedicated compute. Your workflows never share resources with other tenants. Latency is predictable even at peak load." },
  { title: "Audit logging", description: "Every agent run, every configuration change, and every login is logged with full attribution. Logs can be streamed to your SIEM in real time via our Datadog and Splunk integrations." },
  { title: "Dedicated account team", description: "Enterprise accounts get a named account executive, a solutions engineer for technical onboarding, and a customer success manager for ongoing support. SLA response times start at 15 minutes." },
  { title: "Custom data retention", description: "Set granular retention policies per agent, per workspace, or per data type. Automatic deletion ensures you stay compliant with GDPR, CCPA, and HIPAA requirements." },
  { title: "Private deployment options", description: "For organizations with strict data sovereignty requirements, we offer private cloud and on-premise deployment options. Our team handles setup and ongoing maintenance." },
];

const logos = ["TikTok", "Microsoft", "Adobe", "Oracle", "Wipro", "Intel", "Fujitsu", "McGraw Hill"];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-semibold text-white/50 tracking-widest uppercase block mb-4">Enterprise</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Built for teams. Designed for scale.</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Liberate Studio Enterprise gives large organizations the security controls, compliance features, and dedicated support they need to deploy AI agents with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8">
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-sm font-semibold transition-colors">
              Talk to sales
            </Link>
            <Link to="/docs" className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm font-medium transition-colors">
              View docs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {logos.map((l, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Enterprise features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Custom pricing for your organization</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Enterprise plans are priced based on your usage, team size, and infrastructure requirements. We offer annual and multi-year contracts with volume discounts.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full text-base font-semibold transition-colors">
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
