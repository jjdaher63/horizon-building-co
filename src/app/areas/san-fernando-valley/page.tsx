import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor San Fernando Valley",
  description:
    "Horizon Building Company is a full-service general contractor in the San Fernando Valley — Encino, Sherman Oaks, Studio City, Woodland Hills, Tarzana, and surrounding areas. Residential and commercial construction.",
  path: "/areas/san-fernando-valley",
});

export default function SanFernandoValleyPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in the San Fernando Valley
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Residential and commercial construction services throughout the
              San Fernando Valley, from Encino and Sherman Oaks to Woodland Hills
              and North Hollywood. Horizon Building Company builds with precision
              and quality across the Valley.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              The San Fernando Valley represents one of the largest and most
              diverse construction markets in Los Angeles. With a mix of
              established residential neighborhoods, growing commercial corridors,
              and transit-oriented development opportunities, the Valley offers
              significant potential for homeowners, investors, and developers
              alike. Horizon Building Company serves clients throughout this
              dynamic region.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We work across all Valley communities including Sherman Oaks, Encino,
              Tarzana, Woodland Hills, Calabasas, Studio City, North Hollywood,
              Van Nuys, Reseda, Northridge, Granada Hills, and Porter Ranch. Our
              projects span the full range of construction types — from luxury home
              renovations in Encino to multifamily developments along Ventura
              Boulevard, ADU construction in established neighborhoods, and
              commercial tenant improvements in business districts throughout
              the Valley.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a California licensed contractor (CA License #01118216), we
              understand the LADBS permitting process, specific plan areas, and
              hillside construction requirements that apply to many Valley
              properties. Our team manages every phase from initial design
              coordination and plan check through construction and final sign-off,
              ensuring your project is delivered on time and on budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in the San Fernando Valley
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Construction Management",
              "Custom Home Building",
              "Whole-Home Remodeling",
              "ADU Construction",
              "Multifamily Development",
              "Commercial Build-Outs",
              "Kitchen & Bath Renovation",
              "Room Additions",
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
            Ready to Build in the San Fernando Valley?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact Horizon Building Company today to discuss your project. We
            provide free consultations and detailed estimates for residential and
            commercial construction throughout the San Fernando Valley.
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
