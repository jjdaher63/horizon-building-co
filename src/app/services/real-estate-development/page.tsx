import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Real Estate Development",
  description:
    "Full-service real estate development in Los Angeles. Horizon Building Company specializes in ground-up multifamily development, mixed-use projects, value-add repositioning, site acquisition, and entitlements across Southern California.",
  path: "/services/real-estate-development",
});

const included = [
  {
    title: "Site Acquisition & Due Diligence",
    description:
      "Market analysis, site evaluation, zoning feasibility, environmental review, title examination, and financial underwriting to identify and secure development opportunities.",
  },
  {
    title: "Entitlements & Approvals",
    description:
      "Navigation of discretionary and ministerial approval processes including zone changes, variances, conditional use permits, tract maps, and environmental review (CEQA).",
  },
  {
    title: "Ground-Up Development",
    description:
      "Complete development management from raw land through certificate of occupancy including design, permitting, construction, and lease-up or sale for multifamily, mixed-use, and commercial projects.",
  },
  {
    title: "Value-Add Repositioning",
    description:
      "Strategic renovation and repositioning of existing properties to maximize value through unit upgrades, common area improvements, amenity additions, and operational optimization.",
  },
  {
    title: "Multifamily & Mixed-Use",
    description:
      "Specialized expertise in multifamily residential and mixed-use developments including market-rate apartments, affordable housing components, and ground-floor retail integration.",
  },
  {
    title: "Investor Relations & Capital",
    description:
      "Development of investor materials, financial pro formas, capital stack structuring, and ongoing investor reporting throughout the project lifecycle.",
  },
];

const reasons = [
  "Combined construction and real estate development expertise provides unique insight into project feasibility, cost control, and value creation",
  "Principals hold both contractor licenses and real estate broker credentials, providing comprehensive deal perspective",
  "Track record of successful ground-up and value-add projects across Los Angeles multifamily and mixed-use sectors",
  "Deep knowledge of Los Angeles zoning code, density bonus programs, ADU regulations, and transit-oriented development incentives",
  "In-house construction management eliminates general contractor markups and provides true cost transparency",
  "Institutional-quality reporting and financial analysis developed through managing over $600M in projects",
];

export default function RealEstateDevelopmentPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Real Estate Development
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Los Angeles Real Estate
              <br />
              <span className="text-gold">Development Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company is a vertically integrated real estate
              developer and general contractor specializing in multifamily and
              mixed-use projects across Los Angeles and Southern California. Our
              unique combination of development expertise and construction
              capability allows us to identify opportunities, manage risk, and
              deliver superior returns for our projects and partners.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As both developer and builder, we maintain complete control over
              project timelines, construction costs, and quality standards. This
              vertical integration eliminates the adversarial dynamic between
              developer and contractor, aligning incentives and creating
              efficiency that directly benefits project economics.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our development services span the full project lifecycle from site
              identification and acquisition through entitlement, construction,
              and stabilization. Whether pursuing a ground-up multifamily
              development leveraging density bonus incentives or a value-add
              repositioning of an existing asset, we bring institutional
              processes and local market knowledge to every opportunity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Los Angeles presents exceptional development opportunities for
              those who can navigate its complex regulatory environment. Our team
              has deep expertise with LADBS permitting, planning department
              discretionary reviews, density bonus programs, TOC incentives, ADU
              regulations, and CEQA compliance, allowing us to unlock value that
              others cannot access.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Development Capabilities
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
                Vertically Integrated
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
            Have a Development Opportunity?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you have a site under contract, a property to reposition, or
            an idea that needs feasibility analysis, our team is ready to
            evaluate the opportunity and provide a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Discuss a Development Opportunity
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Development",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Full-service real estate development in Los Angeles specializing in ground-up multifamily development, mixed-use projects, value-add repositioning, site acquisition, and entitlements.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Real Estate Development",
            url: "https://horizonbldgco.com/services/real-estate-development",
          }),
        }}
      />
    </>
  );
}
