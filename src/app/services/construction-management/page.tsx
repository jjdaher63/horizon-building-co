import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Construction Management",
  description:
    "Expert construction management services in Los Angeles. Horizon Building Company provides site supervision, subcontractor coordination, quality control, scheduling, safety management, and budget oversight for commercial and residential projects.",
  path: "/services/construction-management",
});

const included = [
  {
    title: "Preconstruction Planning",
    description:
      "Early-stage planning including project scoping, phasing strategy, logistics coordination, and constructability review. We identify and resolve issues before they reach the field — saving time and money throughout construction.",
  },
  {
    title: "Competitive Bidding",
    description:
      "Structured bid processes with qualified subcontractors — including RFP development, scope leveling, bid analysis, and contract negotiation. We drive competitive pricing without sacrificing quality or accountability.",
  },
  {
    title: "Value Engineering",
    description:
      "Systematic analysis of design and specification alternatives to achieve project objectives at reduced cost. We identify savings opportunities without compromising performance, aesthetics, or long-term value.",
  },
  {
    title: "Cost Control",
    description:
      "Real-time cost tracking, change order management, contingency analysis, and monthly cost reports. We maintain full budget transparency so you always know exactly where your project stands financially.",
  },
  {
    title: "Procurement Management",
    description:
      "Strategic procurement of long-lead materials, equipment, and specialty subcontractors to protect the project schedule. We manage logistics, submittals, and delivery coordination from early procurement through installation.",
  },
  {
    title: "Construction Administration",
    description:
      "Full-scope field oversight including subcontractor coordination, RFI management, submittal review, inspection scheduling, and day-to-day site management throughout the construction phase.",
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive QA programs including inspection protocols, material testing coordination, punch list management, and compliance verification against project plans and specifications.",
  },
  {
    title: "Schedule Oversight",
    description:
      "Detailed CPM scheduling with regular updates, look-ahead planning, milestone tracking, and proactive delay mitigation. We protect your schedule and your carrying costs from groundbreaking through certificate of occupancy.",
  },
];

const reasons = [
  "Over $600M in combined construction management experience across institutional, commercial, and residential projects",
  "Principals previously managed projects at Clark Construction, one of the nation's largest general contractors",
  "Hands-on ownership involvement on every project ensures accountability and rapid decision-making",
  "Licensed California general contractor (#1118216) with deep knowledge of local codes, permitting, and inspection requirements",
  "Transparent communication with weekly reporting, open-book accounting, and real-time budget visibility",
  "Proven track record delivering projects on schedule and within budget across Los Angeles and Southern California",
];

export default function ConstructionManagementPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Construction Management
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Expert Construction Management
              <br />
              <span className="text-gold">in Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company provides comprehensive construction
              management services for commercial, multifamily, and residential
              projects throughout Los Angeles and Southern California. As your
              general contractor, we assume full responsibility for delivering
              your project on time, within budget, and to the highest quality
              standards.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our construction management approach is built on institutional-level
              processes refined through over $600 million in project delivery.
              Principals John J. Daher and William W. Daher bring hands-on
              experience from Clark Construction, one of the nation&apos;s largest
              general contractors, applying those same rigorous standards to every
              project regardless of size.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Whether you are building a ground-up multifamily development, renovating
              a commercial office space, or executing a complex tenant improvement,
              our team provides the site supervision, subcontractor coordination, and
              cost control necessary to protect your investment and achieve your
              project goals.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We understand that construction management in Los Angeles presents
              unique challenges including complex permitting processes, seismic
              requirements, coastal zone regulations, and a competitive
              subcontractor market. Our deep local knowledge and established
              trade relationships allow us to navigate these challenges
              efficiently while maintaining the quality and schedule your
              project demands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Scope of Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What&apos;s Included
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <h3 className="text-lg font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
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
                The Horizon Difference
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
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us today for a consultation. Our principals will personally
            review your project and provide a detailed proposal for construction
            management services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Request a Proposal
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Management",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Comprehensive construction management services in Los Angeles including site supervision, subcontractor management, quality control, scheduling, safety programs, and budget oversight for commercial and residential projects.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Construction Management",
            url: "https://horizonbldgco.com/services/construction-management",
          }),
        }}
      />
    </>
  );
}
