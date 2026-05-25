import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Horizon Building Company is a full-service general contractor and real estate developer in Los Angeles. Construction management, design-build, and value-add development. Over $600M in project experience. Call (619) 315-1504.",
  path: "/",
});

const services = [
  {
    title: "Construction Management",
    description:
      "End-to-end oversight of commercial and residential builds, from groundbreaking to certificate of occupancy.",
    href: "/services/construction-management",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Project Management",
    description:
      "Rigorous scheduling, budgeting, and coordination ensuring your project delivers on time and on budget.",
    href: "/services/project-management",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Design & Development",
    description:
      "Innovative architectural design and development solutions tailored to maximize your property's potential.",
    href: "/services/design-development",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Real Estate Development",
    description:
      "Ground-up development of multifamily, mixed-use, and commercial projects across Southern California.",
    href: "/services/real-estate-development",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Property Maintenance",
    description:
      "Comprehensive facility management and maintenance programs to preserve and enhance your real estate assets.",
    href: "/services/property-maintenance",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Financial Pro Forma",
    description:
      "Detailed financial modeling and investment analysis for acquisitions, developments, and value-add strategies.",
    href: "/services/financial-pro-forma",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const projects = [
  {
    title: "Outpost Estates",
    location: "Hollywood Hills, CA",
    type: "Luxury Renovation",
    description: "High-end modern residence in the prestigious Hollywood Hills.",
    image: "/images/outpost-1.webp",
    alt: "Modern luxury home with wood and white facade in Outpost Estates Hollywood Hills",
  },
  {
    title: "Pearl Street Residence",
    location: "Santa Monica, CA",
    type: "Luxury Single-Family",
    description: "Complete gut renovation with premium finishes throughout.",
    image: "/images/pearl-st-living.jpg",
    alt: "Modern open-concept living room with natural light in Pearl Street Santa Monica renovation",
  },
  {
    title: "Doran Townhomes",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    description: "Ground-up construction of modern townhome community.",
    image: "/images/doran-1.webp",
    alt: "Contemporary townhome development with landscaped entrance in Los Angeles",
  },
  {
    title: "Westmount",
    location: "West Hollywood, CA",
    type: "Modern Residential",
    description: "Striking contemporary design with mixed material facade.",
    image: "/images/westmount-1.webp",
    alt: "Modern residential building with dark metal and concrete facade in West Hollywood",
  },
  {
    title: "Allesandro Street",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    description: "Modern multifamily development with balconies and wood accents.",
    image: "/images/allesandro-1.jpeg",
    alt: "Modern multifamily apartment building on Allesandro Street Los Angeles",
  },
  {
    title: "Pearl Street Interior",
    location: "Santa Monica, CA",
    type: "Interior Renovation",
    description: "Luxurious bedroom suite with custom built-ins and natural finishes.",
    image: "/images/pearl-st-bedroom.jpg",
    alt: "Luxury master bedroom with designer furnishings in Pearl Street Santa Monica home",
  },
];

const stats = [
  { value: "$600M+", label: "Project Experience" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "6", label: "Service Disciplines" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/outpost-1.webp"
          alt="Luxury modern home built by Horizon Building Company in Hollywood Hills"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/70 to-gray-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6">
            Los Angeles General Contractor
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Real Estate Development
            <br />
            <span className="text-gold">&amp; Construction Excellence</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Precision. Performance. Progress.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            From ground-up development to full-scale renovations, Horizon
            Building Company delivers institutional-quality construction and
            development services across Southern California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold rounded hover:bg-gold-light transition-colors text-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-foreground font-medium rounded hover:border-gold hover:text-gold transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Expertise</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive construction and development services backed by
              decades of institutional-level experience at firms like Clark
              Construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-lg border border-gray-700 bg-gray-900 hover:border-gold/50 hover:shadow-lg transition-all"
              >
                <svg
                  className="w-10 h-10 text-gold mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.icon}
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-gold hover:text-gold-light font-medium transition-colors"
            >
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-900 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Project Showcase</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A selection of recent projects across residential, commercial, and
              mixed-use development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-lg border border-gray-700 overflow-hidden bg-white hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-gray-700 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold uppercase tracking-wider mb-1">
                    {project.type}
                  </p>
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gold text-gold font-medium rounded hover:bg-gold hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re planning a ground-up development, a major
            renovation, or need expert construction management, we&apos;re here
            to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:619-315-1504"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-foreground font-medium rounded hover:border-gold hover:text-gold transition-colors"
            >
              Call (619) 315-1504
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
