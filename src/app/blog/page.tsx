import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Construction and real estate development insights from Horizon Building Company. Tips on permitting, ADU construction, value-add strategies, and building in Los Angeles.",
  path: "/blog",
});

const posts = [
  {
    slug: "tenant-improvements-los-angeles",
    title: "Tenant Improvements in Los Angeles: Planning Your Commercial Build-Out",
    excerpt:
      "For business owners planning a tenant improvement in LA, answering the right questions early prevents expensive surprises. A guide to evaluating a space, designing around your operations, and choosing the right contractor.",
    category: "Construction",
    date: "2026-09-12",
    readTime: "10 min read",
    image: "/images/blog/blog-tenant-improvement.jpg",
    imageAlt: "Empty modern commercial space with polished concrete floors ready for tenant improvement build-out in Los Angeles",
  },
  {
    slug: "understanding-the-design-phase",
    title: "Understanding the Design Phase: The Journey from Concept to Construction",
    excerpt:
      "Construction may be the most visible part of a project, but design is where it's truly created. Why the decisions made before the first permit determine a project's success.",
    category: "Construction",
    date: "2026-06-12",
    readTime: "6 min read",
    image: "/images/blog/blog-design-phase.jpg",
    imageAlt: "Architect drafting a detailed construction drawing with a scale ruler and rolled plans on a wood desk",
  },
  {
    slug: "adu-construction-guide-los-angeles-2026",
    title: "The Complete Guide to ADU Construction in Los Angeles (2026)",
    excerpt:
      "Everything you need to know about building an Accessory Dwelling Unit in LA — from new state legislation to permit timelines, costs, and design considerations.",
    category: "Guides",
    date: "2026-05-20",
    readTime: "8 min read",
    image: "/images/blog/blog-adu.jpg",
    imageAlt: "Modern home with palm trees and landscaped front yard",
  },
  {
    slug: "value-add-multifamily-strategy-southern-california",
    title: "Value-Add Multifamily Strategy in Southern California",
    excerpt:
      "How experienced operators identify, acquire, and reposition underperforming apartment communities in LA's competitive market.",
    category: "Investment",
    date: "2026-05-10",
    readTime: "6 min read",
    image: "/images/blog/blog-multifamily.jpg",
    imageAlt: "Modern multifamily apartment building exterior",
  },
  {
    slug: "construction-permit-process-los-angeles",
    title: "Navigating the LA Construction Permit Process",
    excerpt:
      "A contractor's guide to permits, plan check, inspections, and certificate of occupancy in the City of Los Angeles.",
    category: "Permits",
    date: "2026-04-28",
    readTime: "7 min read",
    image: "/images/blog/blog-permits.jpg",
    imageAlt: "Architectural blueprints and construction plans on a table",
  },
  {
    slug: "wildfire-resilience-southern-california",
    title: "Wildfire Resilience in Southern California: Why Material Selection Has Become an Investment Decision",
    excerpt:
      "How roofing, exterior walls, vents, and landscaping decisions now directly affect insurance costs, property value, and long-term asset performance.",
    category: "Construction",
    date: "2026-04-15",
    readTime: "8 min read",
    image: "/images/blog/blog-wildfire.jpg",
    imageAlt: "Wildfire burning through trees at night with orange sky",
  },
  {
    slug: "why-construction-projects-go-over-budget",
    title: "Why Most Construction Projects Go Over Budget",
    excerpt:
      "Budget overruns rarely come from one catastrophic mistake — they compound from incomplete scope, coordination failures, hidden conditions, and delayed decisions. Here's what to watch for.",
    category: "Construction",
    date: "2026-04-01",
    readTime: "10 min read",
    image: "/images/blog/blog-over-budget.jpg",
    imageAlt: "Construction workers on a job site with steel rebar and building materials",
  },
  {
    slug: "designing-home-that-ages-gracefully",
    title: "Designing a Home That Ages Gracefully: Creating a Residence That Serves You for Decades",
    excerpt:
      "How to design a custom home in Southern California that remains functional, comfortable, and desirable for decades — from universal design principles to timeless architecture.",
    category: "Guides",
    date: "2026-03-20",
    readTime: "9 min read",
    image: "/images/blog/blog-aging-home.jpg",
    imageAlt: "Elegant luxury home interior with timeless design and natural light",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Insights & Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-gray-400 leading-relaxed">
              Expert insights on construction, real estate development, permitting,
              and investment strategy from the Horizon Building Company team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-gold/30 transition-all"
              >
                <div className="aspect-[16/9] bg-gray-700 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-gold/10 text-gold rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
