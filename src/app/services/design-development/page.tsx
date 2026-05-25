import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Design & Development",
  description:
    "Integrated design-build services in Los Angeles. Horizon Building Company provides conceptual design, schematic design, construction documents, permitting, and design-build delivery with a single point of accountability.",
  path: "/services/design-development",
});

const included = [
  {
    title: "Conceptual Design & Feasibility",
    description:
      "Initial programming, site analysis, massing studies, and preliminary cost estimates to validate your vision before committing significant capital. We evaluate zoning, setbacks, FAR, and parking requirements early.",
  },
  {
    title: "Schematic Design",
    description:
      "Development of design concepts into preliminary floor plans, elevations, and site plans that establish the overall character, scale, and organization of the project.",
  },
  {
    title: "Design Development",
    description:
      "Refinement of approved schematics into detailed architectural plans with structural, mechanical, electrical, and plumbing systems coordination, material selections, and finish specifications.",
  },
  {
    title: "Construction Documents",
    description:
      "Production of permit-ready drawings and specifications that clearly communicate design intent to subcontractors and form the basis for accurate competitive bidding.",
  },
  {
    title: "Permitting & Entitlements",
    description:
      "Navigation of Los Angeles building department submittals, plan check corrections, discretionary approvals, and agency coordination to secure all required permits efficiently.",
  },
  {
    title: "Design-Build Delivery",
    description:
      "Single-source responsibility from initial concept through construction completion. We manage architects, engineers, and contractors under one contract for streamlined communication and accountability.",
  },
];

const reasons = [
  "Single point of accountability from initial concept through construction completion eliminates finger-pointing between designers and builders",
  "Deep understanding of Los Angeles zoning, building codes, and planning requirements reduces permitting risk and timeline",
  "Constructability review during design phases prevents expensive field changes and redesign during construction",
  "Value engineering throughout design reduces cost without sacrificing design intent or quality",
  "Established relationships with top architectural and engineering firms across Southern California",
  "Proven experience with LADBS, coastal commission, and discretionary planning approvals",
];

export default function DesignDevelopmentPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Design & Development
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Integrated Design-Build
              <br />
              <span className="text-gold">Services in Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Great buildings start with great design. Horizon Building Company
              provides integrated design and development services that bridge the
              gap between architectural vision and construction reality. Our
              design-build approach delivers projects faster, with fewer change
              orders, and with a single point of accountability from concept
              through completion.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Unlike traditional design-bid-build delivery where architects and
              contractors operate in silos, our integrated model ensures that
              constructability, cost implications, and schedule impacts are
              evaluated at every design decision point. This collaborative
              approach prevents the expensive redesigns and field conflicts that
              plague conventionally delivered projects.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our team manages the entire design process including architect and
              engineer selection, design coordination, code compliance review,
              and permitting through Los Angeles building departments. With deep
              knowledge of LADBS processes, zoning overlay districts, specific
              plan areas, and discretionary review requirements, we navigate the
              complex Los Angeles regulatory landscape efficiently.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether your project requires a full design-build delivery or
              targeted design management services for an existing architectural
              team, Horizon Building Company provides the construction expertise
              and project leadership needed to translate designs into built
              reality on schedule and within budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              From Concept to Completion
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
                The Design-Build Advantage
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
            Have a Vision? Let&apos;s Design It Together.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            From initial sketches to finished construction, our design-build team
            provides seamless delivery. Contact us to discuss how we can bring
            your project from concept to reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Start the Design Process
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Design & Development",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Integrated design-build services in Los Angeles including conceptual design, schematic design, construction documents, permitting, and single-source design-build delivery for commercial and residential projects.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Design-Build",
            url: "https://horizonbldgco.com/services/design-development",
          }),
        }}
      />
    </>
  );
}
