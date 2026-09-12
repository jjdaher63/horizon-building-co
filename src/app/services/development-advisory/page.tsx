import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Development Advisory",
  description:
    "Strategic development advisory services in Los Angeles — acquisition due diligence, feasibility analysis, entitlement strategy, permit management, and design team coordination for developers and investors.",
  path: "/services/development-advisory",
});

const included = [
  {
    title: "Acquisition Due Diligence",
    description:
      "Comprehensive review of site conditions, zoning, entitlements, title, and development constraints before you commit capital. We identify risks early so you can negotiate and structure acquisitions with confidence.",
  },
  {
    title: "Feasibility Analysis",
    description:
      "Rigorous evaluation of project viability including land use, program options, development costs, schedule, and financial returns. We provide the analysis needed to make informed go/no-go decisions.",
  },
  {
    title: "Development Budgeting",
    description:
      "Detailed pre-development and total project cost budgets incorporating hard costs, soft costs, financing, and contingency — structured to support lender requirements and investment underwriting.",
  },
  {
    title: "Project Planning",
    description:
      "Early-stage project programming, phasing strategy, team assembly, and schedule development. We establish the framework for efficient project execution before the first dollar is spent on design.",
  },
  {
    title: "Entitlement Strategy",
    description:
      "Navigating local planning, zoning, and discretionary approval processes across Los Angeles and Southern California. We develop strategies to minimize time, cost, and exposure throughout entitlements.",
  },
  {
    title: "Municipal Coordination",
    description:
      "Direct engagement with city departments, planning commissions, and public agencies on behalf of our clients. We manage the relationships and processes that determine project approval timelines.",
  },
  {
    title: "Permit Management",
    description:
      "Full coordination of plan check, permit applications, corrections, agency sign-offs, and inspection scheduling. We manage permitting as a strategic process, not an administrative afterthought.",
  },
  {
    title: "Design Team Coordination",
    description:
      "Procurement and oversight of architects, engineers, and specialty consultants. We ensure the design team is properly scoped, coordinated, and aligned with the project's cost and schedule objectives.",
  },
  {
    title: "Consultant Procurement",
    description:
      "Identification, vetting, and engagement of civil, structural, mechanical, electrical, and specialty consultants. We build the right project team for your specific asset type and market.",
  },
];

const reasons = [
  "Over $600M in combined development and construction experience across Southern California",
  "Deep relationships with LA city departments, planning agencies, and municipal bodies",
  "Principals bring institutional processes from Clark Construction to every advisory engagement",
  "Independent perspective — our interests are aligned with yours, not with any design or construction firm",
  "Integrated understanding of how development decisions affect construction cost and schedule",
  "Proven track record guiding complex projects through entitlements and permitting in Los Angeles",
];

export default function DevelopmentAdvisoryPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Development Advisory
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Strategic Development Advisory
              <br />
              <span className="text-gold">for Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company provides development advisory services to
              investors, developers, family offices, and private owners navigating
              the complex landscape of real estate development in Southern
              California. From initial site evaluation through project delivery,
              we serve as a trusted strategic partner at every stage of the
              development process.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Development in Los Angeles requires deep knowledge of local
              entitlement processes, municipal relationships, permitting
              requirements, and market dynamics. Our principals bring
              institutional-level expertise from over $600 million in combined
              project experience — applied directly to your investment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are evaluating an acquisition, navigating entitlements,
              assembling a project team, or managing the pre-development process,
              Horizon Building Company provides the guidance and hands-on support
              needed to move your project forward with confidence.
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
            <h2 className="text-3xl sm:text-4xl font-bold">What&apos;s Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
                <h3 className="text-lg font-semibold text-gold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-400 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move Forward?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us to discuss your project and learn how our development
            advisory services can help you make better decisions and achieve
            better outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Development Advisory",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Strategic development advisory services in Los Angeles including acquisition due diligence, feasibility analysis, entitlement strategy, permit management, and design team coordination.",
            areaServed: { "@type": "City", name: "Los Angeles" },
            serviceType: "Development Advisory",
            url: "https://horizonbldgco.com/services/development-advisory",
          }),
        }}
      />
    </>
  );
}
