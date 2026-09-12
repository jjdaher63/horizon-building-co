import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Beverly Hills",
  description:
    "Horizon Building Company is a luxury general contractor in Beverly Hills specializing in high-end residential construction, estate renovations, and custom home builds. Licensed and insured.",
  path: "/areas/beverly-hills",
});

export default function BeverlyHillsPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in Beverly Hills
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Luxury residential construction, estate renovations, and custom
              home builds in one of the world&apos;s most prestigious communities.
              Horizon Building Company delivers the craftsmanship and attention
              to detail that Beverly Hills demands.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              Beverly Hills sets the standard for luxury living, and construction
              projects here require a contractor who understands the expectations
              of discerning homeowners and the unique regulatory environment of
              the city. Horizon Building Company brings institutional-level project
              management and premium craftsmanship to every Beverly Hills project,
              from full estate remodels to ground-up custom homes.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We work throughout Beverly Hills including the flats, the hills north
              of Sunset, Trousdale Estates, and the Beverly Hills Post Office area.
              Our projects range from comprehensive interior renovations with
              designer finishes to complete tear-down and rebuild developments. We
              coordinate with top architects, interior designers, and landscape
              architects to deliver cohesive results that meet the highest standards.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Beverly Hills has specific permitting requirements, design review
              processes, and construction regulations that differ from the City of
              Los Angeles. As a California licensed contractor (CA License #1118216),
              we navigate these requirements efficiently, managing everything from
              initial planning approvals through final inspections. Our experience
              with the Beverly Hills Building & Safety Department ensures smooth
              project delivery without costly delays.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in Beverly Hills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Home Construction",
              "Estate Renovations",
              "Luxury Kitchen & Bath",
              "Whole-Home Remodeling",
              "Additions & Expansions",
              "Outdoor Living & Pools",
              "Smart Home Integration",
              "Seismic Retrofitting",
              "Commercial Build-Outs",
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
            Ready to Build in Beverly Hills?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact Horizon Building Company today to discuss your project. We
            provide free consultations and detailed estimates for luxury
            residential construction in Beverly Hills.
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
