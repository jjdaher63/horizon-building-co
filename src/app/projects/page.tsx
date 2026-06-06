import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "View Horizon Building Company's portfolio of completed construction and development projects across Los Angeles, Santa Monica, West Hollywood, and Southern California.",
  path: "/projects",
});

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  <h2 className="text-lg font-semibold mb-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-2">
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <p className="text-gold text-sm mt-4 font-medium">
                    View Project &rarr;
                  </p>
                </div>
              </Link>
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
