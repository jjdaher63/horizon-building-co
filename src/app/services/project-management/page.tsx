import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Project Management",
  description:
    "Professional construction project management in Los Angeles. Horizon Building Company delivers expert scheduling, budget tracking, vendor coordination, reporting, and risk management for complex construction projects.",
  path: "/services/project-management",
});

const process = [
  {
    phase: "Pre-Construction Planning",
    description:
      "Comprehensive project scoping, budgeting, procurement strategy, and schedule development before the first shovel hits the ground. We establish clear milestones, communication protocols, and success metrics.",
  },
  {
    phase: "Procurement & Bidding",
    description:
      "Strategic bid packaging, qualified subcontractor solicitation, scope leveling, and contract negotiation to secure the best value while maintaining quality standards.",
  },
  {
    phase: "Schedule Development & Tracking",
    description:
      "Detailed CPM schedules with weekly updates, three-week look-aheads, critical path analysis, and proactive float management to identify and mitigate delays before they impact completion.",
  },
  {
    phase: "Budget Management & Reporting",
    description:
      "Real-time cost tracking with monthly forecasts, change order documentation, contingency management, and transparent financial reporting to all stakeholders.",
  },
  {
    phase: "Vendor & Stakeholder Coordination",
    description:
      "Centralized communication management between owners, architects, engineers, subcontractors, inspectors, and municipal agencies to prevent miscommunication and delays.",
  },
  {
    phase: "Risk Management & Mitigation",
    description:
      "Proactive identification of project risks with documented mitigation strategies, insurance coordination, and contingency planning for schedule, cost, and scope threats.",
  },
  {
    phase: "Quality Assurance & Closeout",
    description:
      "Systematic punch list development, commissioning coordination, warranty documentation, final inspections, and turnover procedures ensuring a seamless project delivery.",
  },
];

const reasons = [
  "Institutional project management processes refined through $600M+ in delivered projects",
  "Dedicated project manager on every engagement with direct principal oversight",
  "Proven CPM scheduling methodology with weekly owner updates and transparent reporting",
  "Experienced in navigating Los Angeles permitting, inspection, and regulatory requirements",
  "Open-book financial management with real-time budget visibility and proactive cost control",
  "Strong relationships with qualified trade subcontractors across all disciplines in Southern California",
];

export default function ProjectManagementPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Project Management
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Construction Project Management
              <br />
              <span className="text-gold">That Delivers Results</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Effective project management is the difference between a
              construction project that meets its goals and one that spirals into
              cost overruns, schedule delays, and quality compromises. Horizon
              Building Company provides professional construction project
              management services that keep your investment on track from
              pre-construction through final closeout.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our project management methodology is built on systems developed
              through managing over $600 million in construction projects. We
              bring the rigor of institutional-level project controls to every
              engagement, whether it is a tenant improvement, a multifamily
              development, or a commercial build-out in Los Angeles.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As your construction project manager, we serve as the single point
              of contact coordinating all parties, tracking all costs, managing
              all schedules, and resolving all conflicts. Our principals maintain
              direct involvement on every project, ensuring rapid decision-making
              and accountability at the highest level.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Construction project management in Los Angeles requires deep
              knowledge of local building departments, utility providers,
              inspection processes, and regulatory frameworks. Our team navigates
              these complexities daily, leveraging established relationships and
              local expertise to prevent the bureaucratic delays that commonly
              plague projects in the region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Our Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={item.phase}
                className="flex gap-6 p-6 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gold mb-2">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
                The Horizon Advantage
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose Us
              </h2>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-400 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Project Manager You Can Trust?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let us show you how professional project management protects your
            investment. Contact us for a detailed discussion of your project
            needs and a customized management proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Project Management",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Professional construction project management services in Los Angeles including scheduling, budget tracking, vendor coordination, risk management, and transparent reporting for commercial and residential projects.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Project Management",
            url: "https://horizonbldgco.com/services/project-management",
          }),
        }}
      />
    </>
  );
}
