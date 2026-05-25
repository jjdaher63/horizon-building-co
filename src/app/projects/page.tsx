import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "View Horizon Building Company's portfolio of completed construction and development projects across Los Angeles, Santa Monica, West Hollywood, and Southern California.",
  path: "/projects",
});

const projects = [
  {
    title: "Outpost Estates",
    location: "Hollywood Hills, CA",
    type: "Luxury Renovation",
    scope: "High-End Residential Remodel",
    image: "/images/outpost-1.webp",
    alt: "Modern luxury home with wood and white facade in Outpost Estates Hollywood Hills",
    description:
      "Comprehensive renovation of a hillside estate in the prestigious Outpost Estates neighborhood. The project included seismic retrofit, complete interior redesign, smart home integration, and construction of a new infinity pool and outdoor entertainment area on a challenging hillside lot.",
    highlights: ["Seismic retrofit", "Smart home systems", "Infinity pool", "Hillside construction"],
  },
  {
    title: "Pearl Street Residence",
    location: "Santa Monica, CA",
    type: "Luxury Single-Family",
    scope: "Complete Renovation & Expansion",
    image: "/images/pearl-st-living.jpg",
    alt: "Modern open-concept living and dining area in Pearl Street Santa Monica renovation",
    description:
      "Full gut renovation and expansion of a beachside single-family residence. The project included structural upgrades, a new second-story addition, high-end finishes throughout, and complete landscape redesign. Delivered on an accelerated timeline to meet client occupancy requirements.",
    highlights: ["Structural reinforcement", "Second-story addition", "Premium finishes", "Landscape architecture"],
  },
  {
    title: "Doran Townhomes",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    scope: "Ground-Up Construction",
    image: "/images/doran-1.webp",
    alt: "Contemporary townhome development with landscaped entrance in Los Angeles",
    description:
      "Ground-up construction of a modern townhome community featuring contemporary architecture and premium amenities. The project involved complex site work, podium construction, and coordination with multiple design consultants to deliver a standout residential product.",
    highlights: ["Ground-up development", "Podium construction", "Modern architecture", "Premium amenities"],
  },
  {
    title: "Westmount",
    location: "West Hollywood, CA",
    type: "Modern Residential",
    scope: "New Construction",
    image: "/images/westmount-1.webp",
    alt: "Modern residential building with dark metal and concrete facade in West Hollywood",
    description:
      "Striking contemporary residential project with a bold mixed-material facade. The design combines corrugated metal, board-formed concrete, and extensive glazing to create a distinctive street presence while providing premium living spaces.",
    highlights: ["Mixed materials", "Contemporary design", "Premium living", "Street presence"],
  },
  {
    title: "Allesandro Street",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    scope: "Ground-Up Construction",
    image: "/images/allesandro-1.jpeg",
    alt: "Modern multifamily apartment building with balconies on Allesandro Street Los Angeles",
    description:
      "Modern multifamily development featuring spacious units with private balconies, wood accent elements, and a clean contemporary aesthetic. The project navigated complex entitlement requirements and delivered a standout residential product in a rapidly evolving LA neighborhood.",
    highlights: ["Private balconies", "Wood accents", "Entitlement navigation", "Contemporary design"],
  },
  {
    title: "Pearl Street Interior",
    location: "Santa Monica, CA",
    type: "Interior Renovation",
    scope: "Premium Interior Finishes",
    image: "/images/pearl-st-bedroom.jpg",
    alt: "Luxury master bedroom with designer furnishings in Pearl Street Santa Monica home",
    description:
      "The Pearl Street interior showcases the level of finish quality Horizon Building Company delivers. Every detail from custom cabinetry to lighting fixtures was carefully curated and installed to create warm, livable luxury throughout the residence.",
    highlights: ["Custom cabinetry", "Designer lighting", "Premium materials", "Curated finishes"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Our Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Project Showcase
            </h1>
            <p className="text-gray-400 leading-relaxed">
              From luxury single-family residences to multifamily developments
              and commercial build-outs, our portfolio demonstrates the breadth
              and quality of our work across Southern California.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <div className="lg:col-span-2 aspect-[4/3] bg-gray-700 rounded-lg relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-xs bg-gold/10 text-gold rounded">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.location}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                  <p className="text-sm text-gold mb-4">{project.scope}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We&apos;d love to hear about your next build. From initial concept
            through final delivery, our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
