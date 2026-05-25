import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Full-service construction management, project management, design-build, real estate development, property maintenance, and financial pro forma services in Los Angeles. Over $600M in combined project experience.",
  path: "/services",
});

const services = [
  {
    title: "Construction Management",
    href: "/services/construction-management",
    description:
      "Comprehensive site supervision, subcontractor coordination, quality control, and budget oversight for commercial and residential construction projects across Los Angeles.",
  },
  {
    title: "Project Management",
    href: "/services/project-management",
    description:
      "End-to-end project oversight including scheduling, budget tracking, vendor coordination, risk management, and transparent reporting from pre-construction through closeout.",
  },
  {
    title: "Design & Development",
    href: "/services/design-development",
    description:
      "Integrated design-build delivery from conceptual design through construction documents, permitting, and execution with a single point of accountability.",
  },
  {
    title: "Real Estate Development",
    href: "/services/real-estate-development",
    description:
      "Ground-up development and value-add repositioning of multifamily, mixed-use, and commercial properties throughout Southern California.",
  },
  {
    title: "Property Maintenance",
    href: "/services/property-maintenance",
    description:
      "Preventive maintenance programs, emergency repairs, tenant improvements, and facility management to protect and enhance your real estate investments.",
  },
  {
    title: "Financial Pro Forma Creation",
    href: "/services/financial-pro-forma",
    description:
      "Institutional-quality financial modeling, acquisition analysis, development pro formas, and investor presentation materials for real estate transactions.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive Construction &
              <br />
              <span className="text-gold">Development Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company delivers a full spectrum of construction
              and real estate development services across Los Angeles and
              Southern California. With over $600 million in combined project
              experience, our principals bring institutional-level expertise from
              firms like Clark Construction to every engagement.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From initial feasibility analysis through construction closeout,
              we provide hands-on ownership involvement at every stage. Whether
              you need a general contractor to manage your next ground-up build
              or a development partner to navigate entitlements and deliver a
              multifamily project, our integrated approach ensures quality,
              efficiency, and accountability throughout.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-gold/50 transition-colors"
              >
                <h2 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-gold text-sm font-medium">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Every project begins with a conversation. Tell us about your vision
            and we&apos;ll show you how Horizon Building Company can bring it to
            life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "Horizon Building Company",
            url: "https://horizonbldgco.com/services",
            description:
              "Full-service general contractor and real estate development firm in Los Angeles offering construction management, project management, design-build, real estate development, property maintenance, and financial pro forma services.",
            telephone: "+1-619-315-1504",
            email: "john@horizonbldgco.com",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Construction & Development Services",
              itemListElement: services.map((s, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                },
                position: i + 1,
              })),
            },
          }),
        }}
      />
    </>
  );
}
