import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import PhotoGallery from "@/components/PhotoGallery";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${project.type} | Horizon Building Company`,
    description: `${project.title} — ${project.type} in ${project.location}. ${project.description} View project photos and details.`,
    openGraph: {
      title: `${project.title} | Horizon Building Company`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gold transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="mb-4">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              {project.type}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg">{project.location}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery photos={project.photos} />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-gray-400">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              {prevProject && (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="inline-flex items-center text-gray-400 hover:text-gold transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {prevProject.title}
                </Link>
              )}
            </div>
            <div>
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center text-gray-400 hover:text-gold transition-colors"
                >
                  {nextProject.title}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us to discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
