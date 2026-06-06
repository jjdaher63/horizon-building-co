import type { Metadata } from "next";

const BASE_URL = "https://horizonbldgco.com";

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle =
    title === "Home"
      ? "Horizon Building Company | General Contractor & Real Estate Developer | Los Angeles, CA"
      : `${title} | Horizon Building Company | Los Angeles`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/opengraph-image`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Horizon Building Company",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Horizon Building Company",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
      "Full-service general contractor and real estate development firm in Los Angeles specializing in construction management, design-build, and value-add multifamily projects.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    telephone: "+1-619-315-1504",
    email: "john@horizonbldgco.com",
    areaServed: [
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Santa Monica" },
      { "@type": "City", name: "West Hollywood" },
      { "@type": "City", name: "Silver Lake" },
      { "@type": "City", name: "Hollywood Hills" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Contractor License",
      recognizedBy: {
        "@type": "Organization",
        name: "California Contractors State License Board",
      },
    },
    founder: [
      { "@type": "Person", name: "John J. Daher", jobTitle: "Principal" },
      { "@type": "Person", name: "William W. Daher", jobTitle: "Principal" },
    ],
  },
};
