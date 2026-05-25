import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Service Areas",
  description:
    "Horizon Building Company serves Los Angeles, Santa Monica, West Hollywood, Silver Lake, Hollywood Hills, and all of Southern California. Licensed general contractor.",
  path: "/areas",
});

const areas = [
  {
    name: "Los Angeles",
    slug: "los-angeles",
    description:
      "Full-service general contracting and development across the City of Los Angeles, from Downtown to the Westside.",
  },
  {
    name: "Santa Monica",
    slug: "santa-monica",
    description:
      "Luxury residential construction and commercial build-outs in Santa Monica's coastal neighborhoods.",
  },
  {
    name: "West Hollywood",
    slug: "west-hollywood",
    description:
      "Mixed-use development, restaurant build-outs, and residential projects in the heart of WeHo.",
  },
  {
    name: "Silver Lake",
    slug: "silverlake",
    description:
      "Multifamily development, ADU construction, and renovations in one of LA's most dynamic neighborhoods.",
  },
  {
    name: "Hollywood Hills",
    slug: "hollywood-hills",
    description:
      "Luxury hillside construction, seismic retrofits, and high-end renovations in the Hills.",
  },
];

export default function AreasPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Where We Build
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Service Areas
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Horizon Building Company provides construction management, general
              contracting, and real estate development services throughout Los
              Angeles County and Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-8 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-gold/50 transition-all"
              >
                <h2 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {area.name}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {area.description}
                </p>
                <p className="text-gold text-sm mt-4 font-medium">
                  Learn More &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We serve all of Los Angeles County and much of Southern California.
            Contact us to discuss your project location.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
