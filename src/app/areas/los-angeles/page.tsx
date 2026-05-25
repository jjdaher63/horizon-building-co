import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Los Angeles",
  description:
    "Horizon Building Company is a full-service general contractor in Los Angeles offering construction management, design-build, remodeling, and real estate development across Downtown, Westside, Mid-City, South LA, and the Valley.",
  path: "/areas/los-angeles",
});

export default function LosAngelesPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in Los Angeles
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              From ground-up commercial developments in Downtown to whole-home
              renovations on the Westside, Horizon Building Company delivers
              construction excellence across every corner of Los Angeles.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              Los Angeles is one of the most dynamic construction markets in the
              country, and Horizon Building Company has built a reputation as a
              trusted general contractor and construction company in LA. We bring
              deep local knowledge, reliable subcontractor networks, and a
              commitment to quality that spans residential, commercial, and
              mixed-use projects throughout the city.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our team works across all major neighborhoods and districts.
              In Downtown Los Angeles, we handle adaptive reuse projects and
              ground-up multifamily developments that navigate the complexities
              of urban zoning and LADBS permitting. On the Westside, we deliver
              luxury custom homes and high-end remodels in Brentwood, Pacific
              Palisades, and Mar Vista. Mid-City projects range from duplex
              conversions to commercial tenant improvements along major corridors
              like La Brea and Fairfax. In South LA, we focus on multifamily
              housing and community-oriented development. And in the Valley, from
              Sherman Oaks to Studio City, we build everything from ADUs to
              full-scale estate renovations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a licensed builder in Los Angeles (CA License #01118216), we
              understand the permitting landscape, seismic requirements, Title 24
              energy compliance, and neighborhood-specific design guidelines that
              shape every project in this city. Whether you are planning a
              single-family remodel or a multi-unit development, our team manages
              the full lifecycle from pre-construction planning through final
              inspection and certificate of occupancy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in Los Angeles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Construction Management",
              "Design-Build",
              "Custom Home Construction",
              "Whole-Home Remodeling",
              "Commercial Tenant Improvements",
              "Multifamily Development",
              "ADU Construction",
              "Seismic Retrofitting",
              "Kitchen & Bath Renovation",
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
            Ready to Build in Los Angeles?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact Horizon Building Company today to discuss your project. We
            provide free consultations and detailed estimates for residential and
            commercial construction anywhere in Los Angeles.
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
