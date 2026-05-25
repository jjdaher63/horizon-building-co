import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Property Maintenance",
  description:
    "Professional property maintenance and facility management services in Los Angeles. Horizon Building Company provides preventive maintenance, emergency repairs, tenant improvements, landscaping, and HVAC services for commercial and residential properties.",
  path: "/services/property-maintenance",
});

const included = [
  {
    title: "Preventive Maintenance Programs",
    description:
      "Scheduled inspection and maintenance routines for building systems including HVAC, plumbing, electrical, roofing, and structural elements to extend asset life and prevent costly emergency repairs.",
  },
  {
    title: "Emergency Repair Services",
    description:
      "Rapid-response repair capabilities for urgent building issues including plumbing failures, electrical outages, structural damage, fire and water damage, and life-safety system failures.",
  },
  {
    title: "Tenant Improvements",
    description:
      "Design and build-out of tenant spaces including office improvements, retail fit-outs, ADA compliance upgrades, and custom build-to-suit installations for new and renewing tenants.",
  },
  {
    title: "Landscaping & Exterior Maintenance",
    description:
      "Comprehensive grounds maintenance including irrigation management, hardscape repair, parking lot maintenance, exterior painting, pressure washing, and drought-tolerant landscape installation.",
  },
  {
    title: "HVAC & Mechanical Systems",
    description:
      "Installation, maintenance, and repair of heating, ventilation, and air conditioning systems including preventive filter changes, refrigerant management, ductwork cleaning, and energy efficiency upgrades.",
  },
  {
    title: "Building Code Compliance",
    description:
      "Proactive identification and correction of code compliance issues, ADA accessibility upgrades, fire life safety improvements, and preparation for regulatory inspections.",
  },
];

const reasons = [
  "Licensed general contractor capability means we handle everything from minor repairs to major capital improvements under one contract",
  "Construction management expertise ensures tenant improvements and renovations are delivered on time and within budget",
  "Established trade relationships provide priority scheduling and competitive pricing from qualified subcontractors",
  "Understanding of investment property economics allows us to prioritize maintenance that protects and enhances asset value",
  "Single point of contact for all property needs simplifies management and improves response times",
  "Transparent pricing with detailed scope documentation and no hidden charges or markup surprises",
];

export default function PropertyMaintenancePage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Property Maintenance
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Property Maintenance
              <br />
              <span className="text-gold">& Facility Management</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Protecting your real estate investment requires more than reactive
              repairs. Horizon Building Company provides comprehensive property
              maintenance and facility management services that preserve asset
              value, reduce operating costs, and keep tenants satisfied across
              your Los Angeles portfolio.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our property maintenance services are backed by the same
              construction expertise and project management rigor we bring to
              ground-up development. As a licensed general contractor, we handle
              everything from routine HVAC filter changes to complex structural
              repairs and full tenant improvement build-outs under a single
              service agreement.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We understand that property maintenance is ultimately about
              protecting investment returns. Deferred maintenance erodes asset
              value, increases tenant turnover, and creates liability exposure.
              Our preventive maintenance programs are designed to identify and
              address issues before they become expensive problems, extending the
              useful life of building systems and improving net operating income.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For multifamily owners, commercial landlords, and property managers
              across Los Angeles, our integrated approach means one call handles
              everything from a leaking faucet to a complete common area
              renovation. We provide the responsiveness of a handyman service
              with the capability and professionalism of a licensed general
              contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Comprehensive Care
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
                More Than Maintenance
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
            Protect Your Investment
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you need a preventive maintenance program for your portfolio
            or immediate help with a property issue, our team is ready to
            respond. Contact us to discuss a customized maintenance plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get a Maintenance Proposal
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Property Maintenance",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Professional property maintenance and facility management services in Los Angeles including preventive maintenance, emergency repairs, tenant improvements, landscaping, HVAC, and building code compliance.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Property Maintenance",
            url: "https://horizonbldgco.com/services/property-maintenance",
          }),
        }}
      />
    </>
  );
}
