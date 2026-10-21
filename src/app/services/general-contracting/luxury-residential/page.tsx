import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Luxury Residential General Contractor",
  description:
    "Horizon Building Company builds custom luxury homes and high-end residences across Los Angeles — Hollywood Hills, Beverly Hills, Bel Air, Malibu, and the Westside. Principal-led construction with $600M+ of institutional project experience.",
  path: "/services/general-contracting/luxury-residential",
});

const scope = [
  {
    title: "Custom Ground-Up Homes",
    description:
      "New construction from raw land to certificate of occupancy. We manage architecture coordination, structural engineering, all trade subcontractors, and every finish detail — delivering a custom home built exactly to the client's vision.",
  },
  {
    title: "Estate Renovations",
    description:
      "Full-scope renovation of existing luxury residences, including structural modifications, new systems, and high-end finish work. We specialize in occupied and phased renovation environments where sequencing and discretion matter.",
  },
  {
    title: "Whole-Home Remodels",
    description:
      "Complete interior and exterior remodels for single-family homes and estates. From kitchens and primary suites to full structural reconfiguration — we deliver the quality and precision that high-end residential projects demand.",
  },
  {
    title: "Architectural Shell Through Finish",
    description:
      "For clients working with a design architect, we step in as the builder — taking the architectural drawings through structural completion, systems rough-in, and every element of the finish scope.",
  },
  {
    title: "ADU & Guest House Construction",
    description:
      "Custom accessory dwelling units and detached guest houses built to match the quality and detailing of the primary residence. We handle design coordination, permitting, and full construction in one engagement.",
  },
  {
    title: "Site & Landscape Construction",
    description:
      "Pool, hardscape, retaining walls, motor courts, gates, and site infrastructure — coordinated alongside vertical construction so the site and the home finish as one cohesive project.",
  },
];

const approach = [
  "Principal involvement on every project — you work directly with John or William Daher from preconstruction through move-in, not a project manager you have never met",
  "Transparent, open-book budgeting — detailed line-item estimates, no markups hidden in allowances, and real-time cost visibility throughout construction",
  "Institutional processes adapted for private clients — the scheduling rigor, documentation standards, and subcontractor accountability of a large commercial firm applied to your home",
  "Discretion for high-net-worth clients and family offices — we understand the value of a quiet, professionally managed build with minimal disruption to the household",
  "Deep Los Angeles subcontractor relationships — established trade partners across every specialty required for high-end residential, built through years of project delivery in this market",
  "Licensed California General Contractor (B-License #1118216) — fully bonded and insured, with active CSLB credentials and deep familiarity with LADBS permitting requirements",
];

const neighborhoods = [
  "Hollywood Hills",
  "Beverly Hills",
  "Bel Air",
  "Brentwood",
  "Pacific Palisades",
  "Malibu",
  "Silver Lake",
  "Los Feliz",
  "Hancock Park",
  "West Hollywood",
  "Santa Monica",
  "Mar Vista",
];

export default function LuxuryResidentialPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Luxury Residential Construction
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Luxury Residential General Contractor
              <br />
              <span className="text-gold">in Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company is a licensed Los Angeles general contractor
              specializing in custom luxury homes, estate renovations, and high-end
              residential construction. We build across the most demanding neighborhoods
              in Los Angeles — from Hollywood Hills and Beverly Hills to Bel Air,
              Malibu, Pacific Palisades, and the Westside.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our principals — John J. Daher and William W. Daher — bring more than
              $600 million in combined construction experience from Clark Construction
              and institutional real estate firms. That depth of experience means we
              apply the systems, documentation standards, and accountability structures
              of a large commercial builder to every custom home we deliver. Clients
              get institutional quality with direct, principal-led engagement.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Luxury residential construction in Los Angeles demands more than craftsmanship.
              It demands a contractor who understands complex permitting, high-end
              subcontractor management, architect collaboration, and the discretion that
              private clients require. Horizon delivers all of it — on schedule, on budget,
              and with the transparency and communication that high-net-worth clients
              and their advisors expect.
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
            <h2 className="text-3xl sm:text-4xl font-bold">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scope.map((item) => (
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
                How We Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">The Horizon Approach</h2>
            </div>
            <ul className="space-y-4">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h2 className="text-3xl font-bold mb-4">Where We Build in Los Angeles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We build luxury residential projects across Los Angeles and the surrounding
              communities — from hillside estates to coastal properties.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="px-4 py-2 text-sm border border-gray-700 rounded text-gray-300 bg-gray-800/30"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Build Your Custom Home with Horizon</h2>
          <p className="text-gray-400 text-lg mb-4">
            Whether you are planning a ground-up custom home or a major renovation to an
            existing property, our principals will personally review your project and
            provide a detailed proposal for construction services.
          </p>
          <p className="text-gray-400 mb-8">
            Have questions about{" "}
            <Link href="/services/general-contracting" className="text-gold hover:text-gold-light">
              general contracting services
            </Link>
            {" "}or want to learn more about our full scope of residential work? We are happy
            to discuss your project at any stage of planning.
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
            name: "Luxury Residential General Contracting",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Luxury residential general contracting in Los Angeles including custom ground-up homes, estate renovations, whole-home remodels, and high-end residential construction across Hollywood Hills, Beverly Hills, Bel Air, Malibu, and the Westside.",
            areaServed: { "@type": "City", name: "Los Angeles" },
            serviceType: "Luxury Residential General Contracting",
            url: "https://horizonbldgco.com/services/general-contracting/luxury-residential",
          }),
        }}
      />
    </>
  );
}
