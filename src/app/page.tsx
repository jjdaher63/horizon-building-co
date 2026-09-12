import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { projects as allProjects } from "@/lib/projects";

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
    title: "General Contracting",
    description:
      "Full-service general contracting for ground-up construction, tenant improvements, and complex renovation projects.",
    href: "/services/general-contracting",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
  {
    title: "Owner Representation",
    description:
      "Rigorous scheduling, budgeting, and coordination — protecting your interests throughout every phase of the project.",
    href: "/services/owner-representation",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Development Advisory",
    description:
      "Ground-up development and investment analysis for multifamily, mixed-use, and commercial projects across Southern California.",
    href: "/services/development-advisory",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const homeProjects = allProjects.slice(0, 6);

const stats = [
  { value: "$600M+", label: "Project Experience" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "4", label: "Service Disciplines" },
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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-6">
            Development. Construction.
            <br />
            <span className="text-gold">Owner Representation.</span>
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

      {/* Who We Serve Section */}
      <section className="py-24 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Who We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built for Those Who Build Wealth
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We partner with a broad range of clients across the real estate
              and development spectrum — from first-time developers to
              institutional owners.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {[
              {
                label: "Developers",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                description: "Ground-up & value-add projects",
              },
              {
                label: "Real Estate Investors",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                description: "Acquisition to disposition support",
              },
              {
                label: "Family Offices",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                description: "Discreet, institutional-level execution",
              },
              {
                label: "Private Owners",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                description: "Custom homes & renovations",
              },
              {
                label: "Business Owners",
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                description: "Commercial build-outs & tenant improvements",
              },
              {
                label: "Luxury Residential Clients",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                description: "High-end custom construction",
              },
              {
                label: "Institutional Owners",
                icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
                description: "Portfolio-scale asset management",
              },
            ].map((client) => (
              <div
                key={client.label}
                className="group flex flex-col items-center text-center p-6 rounded-lg border border-gray-700 bg-gray-800/40 hover:border-gold/40 hover:bg-gray-800/70 transition-all w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-56"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={client.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-gold transition-colors">
                  {client.label}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
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
            {homeProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-lg border border-gray-700 overflow-hidden bg-white hover:shadow-lg hover:border-gold/50 transition-all"
              >
                <div className="aspect-[4/3] bg-gray-700 relative overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold uppercase tracking-wider mb-1">
                    {project.type}
                  </p>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </Link>
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
