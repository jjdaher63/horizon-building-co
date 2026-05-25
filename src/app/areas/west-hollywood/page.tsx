import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor West Hollywood",
  description:
    "Horizon Building Company is a licensed general contractor in West Hollywood providing commercial construction, restaurant build-outs, residential remodeling, and mixed-use development along Sunset Strip, the Design District, and Melrose.",
  path: "/areas/west-hollywood",
});

export default function WestHollywoodPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in West Hollywood
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Horizon Building Company delivers commercial construction,
              restaurant build-outs, and high-end residential projects
              throughout West Hollywood&apos;s most iconic corridors.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              West Hollywood is a city defined by design, nightlife, and bold
              architecture. As a general contractor in West Hollywood, Horizon
              Building Company understands the fast-paced demands of commercial
              construction in WeHo, where restaurant openings, retail launches,
              and entertainment venues operate on tight timelines with exacting
              design standards. We bring the project management discipline and
              skilled trades needed to deliver on schedule in this competitive
              market.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Along the Sunset Strip, we build and renovate the restaurants,
              lounges, and boutique hotels that define this legendary stretch.
              Our team manages the complex permitting, ADA compliance, and
              tenant improvement coordination that commercial construction in
              WeHo demands. In the Design District along Melrose and Robertson,
              we construct showrooms, galleries, and creative office spaces
              where every architectural detail matters. Our commercial
              construction experience in WeHo includes coordinating with
              interior designers, custom fabricators, and specialty trade
              contractors who bring bold visions to life.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              On the residential side, West Hollywood&apos;s mix of mid-century
              modern homes, historic bungalow courts, and contemporary condos
              requires a contractor who can work across styles and eras. We
              handle full-scale renovations that modernize interiors while
              preserving architectural character, as well as new construction
              projects that push design boundaries. From the Norma Triangle to
              West Hollywood West, our team delivers craftsmanship that meets
              the aesthetic expectations of this design-forward community.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Horizon Building Company (CA License #01118216) partners with
              architects, designers, and business owners throughout WeHo to turn
              ambitious concepts into built reality, on time and on budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in West Hollywood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Restaurant & Bar Build-Outs",
              "Commercial Tenant Improvements",
              "Retail & Showroom Construction",
              "Luxury Home Renovation",
              "Mixed-Use Development",
              "Creative Office Build-Outs",
              "Boutique Hotel Construction",
              "ADA Compliance Upgrades",
              "Seismic Retrofitting",
            ].map((service) => (
              <div
                key={service}
                className="p-6 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build Your Vision in West Hollywood
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you are opening a new restaurant on Sunset, renovating a
            Melrose showroom, or remodeling your WeHo home, Horizon Building
            Company has the experience to deliver. Let&apos;s talk about your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get a Free Estimate
          </Link>
          <p className="text-gray-400 text-sm mt-6">
            Or call us directly at{" "}
            <a href="tel:+16193151504" className="text-gold hover:underline">
              (619) 315-1504
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
