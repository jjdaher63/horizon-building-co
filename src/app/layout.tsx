import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jsonLd } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://horizonbldgco.com"),
  title: {
    default:
      "Horizon Building Company | General Contractor & Real Estate Developer | Los Angeles, CA",
    template: "%s | Horizon Building Company",
  },
  description:
    "Los Angeles general contractor specializing in construction management, real estate development, and design-build. Over $600M in project experience. Licensed & insured. Call (619) 315-1504.",
  keywords: [
    "general contractor Los Angeles",
    "construction management LA",
    "real estate development Los Angeles",
    "design build contractor",
    "commercial construction Los Angeles",
    "residential contractor LA",
    "multifamily development",
    "ADU contractor Los Angeles",
    "permit assistance LA",
    "construction company Southern California",
  ],
  authors: [{ name: "Horizon Building Company" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.organization),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
