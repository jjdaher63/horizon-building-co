import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE_URL = "https://horizonbldgco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "construction-management",
    "project-management",
    "design-development",
    "real-estate-development",
    "property-maintenance",
    "financial-pro-forma",
  ];

  const areas = [
    "los-angeles",
    "santa-monica",
    "west-hollywood",
    "inland-empire",
    "beverly-hills",
    "san-fernando-valley",
  ];

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/areas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const servicePages = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages = areas.map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogSlugs = [
    "adu-construction-guide-los-angeles-2026",
    "value-add-multifamily-strategy-southern-california",
    "construction-permit-process-los-angeles",
    "wildfire-resilience-southern-california",
    "why-construction-projects-go-over-budget",
    "designing-home-that-ages-gracefully",
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...projectPages, ...blogPages];
}
