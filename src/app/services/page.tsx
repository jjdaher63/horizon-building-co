import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Development advisory, owner representation, construction management, and general contracting services across Los Angeles and Southern California. Over $600M in combined project experience.",
  path: "/services",
});

const categories = [
  {
    number: "01",
    title: "Development Advisory",
    description:
      "Strategic guidance from site selection through project delivery — helping owners and investors make informed decisions at every stage of the development process.",
    services: [
      "Acquisition Due Diligence",
      "Feasibility Analysis",
      "Development Budgeting",
      "Project Planning",
      "Entitlement Strategy",
      "Municipal Coordination",
      "Permit Management",
      "Design Team Coordination",
      "Consultant Procurement",
    ],
  },
  {
    number: "02",
    title: "Owner Representation",
    description:
      "Acting as your eyes and ears on every project — protecting your interests, managing complexity, and ensuring your investment performs as planned.",
    services: [
      "Project Oversight",
      "Budget Monitoring",
      "Schedule Management",
      "Construction Draw Review",
      "Change Order Review",
      "Contractor Coordination",
      "Risk Management",
      "Lender Reporting",
      "Project Closeout",
    ],
  },
  {
    number: "03",
    title: "Construction Management",
    description:
      "Institutional-quality construction oversight that keeps projects on time, on budget, and built to the highest standards of quality.",
    services: [
      "Preconstruction Planning",
      "Competitive Bidding",
      "Value Engineering",
      "Cost Control",
      "Procurement Management",
      "Construction Administration",
      "Quality Assurance",
      "Schedule Oversight",
    ],
  },
  {
    number: "04",
    title: "General Contracting",
    description:
      "Licensed general contracting across residential, commercial, and industrial sectors — delivering projects with the precision and accountability of an institutional builder.",
    services: [
      "Ground-Up Construction",
      "Tenant Improvements",
      "Commercial Construction",
      "Industrial Construction",
      "Luxury Residential Construction",
      "Renovations and Repositioning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive Construction &amp;
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
              we provide hands-on principal involvement at every stage — whether
              you need a development advisor, an owner&apos;s representative, a
              construction manager, or a licensed general contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat.number}
                className="group rounded-lg border border-gray-700 bg-gray-900 overflow-hidden hover:border-gold/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left — category identity */}
                  <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-700 flex flex-col justify-between">
                    <div>
                      <p className="text-gold/50 text-4xl font-bold mb-4 leading-none">
                        {cat.number}
                      </p>
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">
                        {cat.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Right — service list */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <p className="text-xs text-gold uppercase tracking-widest mb-6">
                      Services Include
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {cat.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-3 text-sm text-gray-300"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              "Full-service general contractor and real estate development firm in Los Angeles offering development advisory, owner representation, construction management, and general contracting.",
            telephone: "+1-619-315-1504",
            email: "john@horizonbldgco.com",
            areaServed: { "@type": "City", name: "Los Angeles" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Construction & Development Services",
              itemListElement: categories.map((cat, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: cat.title,
                  description: cat.description,
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
