import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contracting",
  description:
    "Licensed general contracting in Los Angeles — ground-up construction, tenant improvements, commercial construction, industrial construction, luxury residential, and renovations across Southern California.",
  path: "/services/general-contracting",
});

const included = [
  {
    title: "Ground-Up Construction",
    description:
      "New construction from foundation to certificate of occupancy across residential, commercial, and mixed-use asset types. We manage every trade, every phase, and every detail — delivering projects with institutional precision.",
  },
  {
    title: "Tenant Improvements",
    description:
      "Full-scope commercial tenant improvement construction for office, retail, restaurant, medical, and industrial users. We deliver buildouts on compressed schedules without compromising quality or code compliance.",
  },
  {
    title: "Commercial Construction",
    description:
      "General contracting for office buildings, retail centers, mixed-use developments, and hospitality projects throughout Los Angeles and Southern California. We bring institutional quality to every commercial build.",
  },
  {
    title: "Industrial Construction",
    description:
      "Warehouse, distribution, manufacturing, and flex-industrial construction for institutional and private owners. We understand the operational requirements of industrial facilities and build to those standards.",
  },
  {
    title: "Luxury Residential Construction",
    description:
      "Custom home and luxury residential construction for private owners and family offices. We deliver the quality, transparency, and precision that high-end residential projects demand — from architectural shell through finish.",
  },
  {
    title: "Renovations and Repositioning",
    description:
      "Value-add renovation and asset repositioning for existing buildings across all property types. We specialize in occupied and complex renovation environments where sequencing, logistics, and quality control are critical.",
  },
];

const reasons = [
  "Licensed General Contractor (B-License) with active CSLB credentials in California",
  "Over $600M in combined project experience across residential, commercial, and industrial sectors",
  "Principals from Clark Construction bring institutional-level processes to every project",
  "Transparent, open-book project management — no surprises on cost or schedule",
  "Deep subcontractor relationships across Los Angeles and Southern California",
  "Principal involvement from preconstruction through project closeout on every engagement",
];

export default function GeneralContractingPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              General Contracting
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Licensed General Contracting
              <br />
              <span className="text-gold">across Southern California</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company is a licensed California general contractor
              delivering ground-up construction, tenant improvements, commercial
              builds, and luxury residential projects across Los Angeles and
              Southern California. We combine institutional-quality processes with
              the responsiveness and accountability that our clients expect.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our principals bring experience from Clark Construction and other
              leading firms, applying over $600 million in combined project
              experience directly to every build. Whether you are constructing a
              new commercial building, repositioning an existing asset, or
              building a custom home, Horizon delivers with precision.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe general contracting should be transparent, proactive, and
              principal-led. You will not be handed off to a project manager —
              our principals are actively involved in every project from
              preconstruction through final closeout.
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
          <h2 className="text-3xl font-bold mb-4">Start Your Build</h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us to discuss your project scope and learn how Horizon
            Building Company can deliver your construction project with
            institutional quality and principal-level accountability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "General Contracting",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Licensed general contracting in Los Angeles including ground-up construction, tenant improvements, commercial construction, industrial construction, luxury residential construction, and renovations.",
            areaServed: { "@type": "City", name: "Los Angeles" },
            serviceType: "General Contracting",
            url: "https://horizonbldgco.com/services/general-contracting",
          }),
        }}
      />
    </>
  );
}
