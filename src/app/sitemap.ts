import type { MetadataRoute } from "next";

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
    "silverlake",
    "hollywood-hills",
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

  return [...staticPages, ...servicePages, ...areaPages];
}
