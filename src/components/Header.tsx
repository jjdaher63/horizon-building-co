"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { name: "Construction Management", href: "/services/construction-management" },
  { name: "Project Management", href: "/services/project-management" },
  { name: "Design & Development", href: "/services/design-development" },
  { name: "Real Estate Development", href: "/services/real-estate-development" },
  { name: "Property Maintenance", href: "/services/property-maintenance" },
  { name: "Financial Pro Forma", href: "/services/financial-pro-forma" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: services },
  { name: "Projects", href: "/projects" },
  { name: "Service Areas", href: "/areas" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-cropped.svg"
              alt="Horizon Building Company - Los Angeles General Contractor"
              width={400}
              height={188}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-700 rounded-lg shadow-xl py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-gray-900 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-foreground hover:text-gold"
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-sm text-gray-400 hover:text-gold"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 text-center px-5 py-2.5 bg-gold text-gray-900 font-semibold rounded"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
