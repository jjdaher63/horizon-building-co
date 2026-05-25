import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Silver Lake",
  description:
    "Horizon Building Company is a licensed general contractor in Silver Lake specializing in ADU construction, multifamily development, home renovations, and new builds in Silver Lake, Echo Park, and Atwater Village.",
  path: "/areas/silverlake",
});

export default function SilverLakePage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in Silver Lake
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Horizon Building Company delivers ADU construction, multifamily
              development, and thoughtful renovations throughout Silver Lake,
              Echo Park, and Atwater Village.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              Silver Lake is one of Los Angeles&apos;s most architecturally diverse
              neighborhoods, where mid-century modern gems sit alongside
              craftsman bungalows, Spanish Revival homes, and contemporary new
              builds. As a general contractor in Silver Lake, Horizon Building
              Company brings deep familiarity with the neighborhood&apos;s hillside
              lots, narrow street access, and the specific construction
              challenges that come with building on slopes and in established
              residential areas.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              This area has become one of the most active markets for ADU
              construction in Silver Lake and the surrounding eastside
              neighborhoods. California&apos;s ADU-friendly legislation has made it
              possible for homeowners to add rental units, home offices, and
              guest houses to their properties, and our team specializes in
              maximizing these opportunities. We handle the full ADU process from
              feasibility analysis and design coordination through permitting,
              construction, and final utility connections. Whether you are
              building a detached backyard unit, converting a garage, or adding a
              junior ADU within your existing footprint, we deliver efficient,
              code-compliant construction that adds lasting value.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Beyond ADUs, our work in the Silver Lake area extends to Echo Park,
              where we handle multifamily renovations and small-lot subdivisions,
              and Atwater Village, where we build custom homes and commercial
              spaces along Glendale Boulevard. The eastside&apos;s mix of older
              housing stock and infill development opportunities means projects
              often involve structural upgrades, foundation work, and navigating
              historic preservation considerations. Horizon Building Company has
              the technical expertise and local permitting knowledge to manage
              these complexities.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Licensed in California (#01118216), our team works closely with
              architects and property owners throughout the Silver Lake area to
              create spaces that honor the neighborhood&apos;s creative character
              while meeting modern living standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in Silver Lake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ADU Construction",
              "Garage Conversions",
              "Multifamily Development",
              "Custom Home Building",
              "Whole-Home Renovation",
              "Hillside Construction",
              "Foundation & Structural Work",
              "Kitchen & Bath Remodeling",
              "Small-Lot Subdivisions",
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
            Start Your Silver Lake Project
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Planning an ADU, renovation, or new build in Silver Lake, Echo Park,
            or Atwater Village? Horizon Building Company provides free
            consultations and detailed project estimates.
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
