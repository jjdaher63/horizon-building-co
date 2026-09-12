import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/design-development",
        destination: "/services/development-advisory",
        permanent: true,
      },
      {
        source: "/services/real-estate-development",
        destination: "/services/development-advisory",
        permanent: true,
      },
      {
        source: "/services/financial-pro-forma",
        destination: "/services/development-advisory",
        permanent: true,
      },
      {
        source: "/services/project-management",
        destination: "/services/owner-representation",
        permanent: true,
      },
      {
        source: "/services/property-maintenance",
        destination: "/services/general-contracting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
