import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Hollywood Hills",
  description:
    "Horizon Building Company is a licensed hillside contractor in Hollywood Hills specializing in luxury renovations, new construction, seismic retrofits, and complex hillside builds in Outpost Estates, Beachwood Canyon, and Laurel Canyon.",
  path: "/areas/hollywood-hills",
});

export default function HollywoodHillsPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in Hollywood Hills
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Horizon Building Company is an experienced hillside contractor in
              Hollywood Hills, delivering luxury renovations and complex new
              construction in one of Los Angeles&apos;s most demanding building
              environments.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              Building in the Hollywood Hills requires a contractor who
              understands the unique engineering, logistics, and regulatory
              challenges of hillside construction. Steep grades, narrow winding
              roads, limited staging areas, and stringent geological and
              environmental requirements make every project here more complex
              than flatland building. Horizon Building Company has the technical
              expertise and field experience to deliver exceptional results in
              these conditions, on time and within budget.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              In Outpost Estates, we build and renovate the luxury residences
              that define this prestigious enclave above Hollywood Boulevard.
              Projects here often involve extensive foundation work, caisson
              drilling, retaining walls, and cantilevered structures that
              maximize views while meeting strict geological stability
              requirements. In Beachwood Canyon, our work ranges from restoring
              historic hillside homes to constructing new modern residences that
              integrate seamlessly with the neighborhood&apos;s established character
              below the Hollywood Sign. Laurel Canyon presents its own set of
              challenges with winding access roads and mature tree canopy that
              requires careful site planning, crane logistics, and environmental
              sensitivity throughout construction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Luxury renovation in Hollywood Hills often involves transforming
              dated properties into contemporary showcases with open floor plans,
              walls of glass, infinity pools, and indoor-outdoor living spaces
              that take full advantage of city and canyon views. Our team
              coordinates with structural engineers, soils engineers, and
              specialty subcontractors who understand hillside-specific systems
              including helical piers, shotcrete retaining structures, and
              advanced waterproofing for below-grade construction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a licensed hillside contractor (CA #01118216), Horizon Building
              Company manages the additional permitting layers required in
              hillside areas, including haul route approvals, grading permits,
              and compliance with the City&apos;s Baseline Hillside Ordinance. We
              keep your project moving through every phase of approval and
              construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in Hollywood Hills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hillside New Construction",
              "Luxury Home Renovation",
              "Seismic Retrofitting",
              "Foundation & Caisson Work",
              "Retaining Walls & Grading",
              "Pool & Outdoor Living",
              "Structural Engineering Coordination",
              "ADU Construction",
              "Fire Rebuild & Hardening",
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
            Plan Your Hollywood Hills Project
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Building in the Hills demands a contractor who knows the terrain.
            Contact Horizon Building Company for a consultation on your hillside
            construction, renovation, or development project.
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
