import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Santa Monica",
  description:
    "Horizon Building Company is a licensed general contractor in Santa Monica specializing in luxury home construction, remodeling, and commercial build-outs in Ocean Park, Montana Ave, Main Street, and beachside neighborhoods.",
  path: "/areas/santa-monica",
});

export default function SantaMonicaPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in Santa Monica
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Horizon Building Company brings precision craftsmanship and
              reliable project delivery to Santa Monica&apos;s coastal residences,
              boutique commercial spaces, and mixed-use developments.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              Santa Monica presents unique construction challenges and
              opportunities. The coastal climate demands materials and building
              techniques that withstand salt air and marine conditions, while the
              city&apos;s strict permitting process and design review boards require
              a contractor who understands local regulations inside and out.
              Horizon Building Company has the experience and relationships to
              navigate Santa Monica&apos;s planning department efficiently, keeping
              your project on schedule and within budget.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              In Ocean Park, we specialize in modern beachside home renovations
              and new construction that maximize natural light and ocean views
              while meeting the neighborhood&apos;s specific setback and height
              requirements. Along Montana Avenue, our work includes high-end
              retail build-outs and restaurant construction that reflect the
              street&apos;s upscale character. On Main Street, we deliver commercial
              tenant improvements for boutiques, restaurants, and creative office
              spaces that thrive in this walkable district. For beachside
              properties near the pier and along Ocean Avenue, we handle
              everything from seismic upgrades on older structures to full
              luxury remodels that transform dated condos and single-family
              homes into contemporary coastal living spaces.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a construction company serving Santa Monica, we also understand
              the importance of minimizing disruption in dense residential
              neighborhoods. Our team coordinates logistics, manages noise
              ordinance compliance, and maintains clean, organized job sites that
              respect your neighbors and community. Whether you are planning a
              kitchen remodel in Santa Monica or a ground-up custom home, our
              licensed team (CA #1118216) handles every detail from architectural
              coordination through final punch list.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in Santa Monica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Luxury Home Construction",
              "Whole-Home Remodeling",
              "Kitchen & Bath Renovation",
              "Commercial Tenant Improvements",
              "Restaurant Build-Outs",
              "Seismic Retrofitting",
              "ADU & Guest House Construction",
              "Coastal Weatherproofing",
              "Condo Renovation",
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
            Start Your Santa Monica Project
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            From beachside bungalows to Montana Ave storefronts, Horizon
            Building Company delivers quality construction in Santa Monica.
            Contact us for a free consultation.
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
