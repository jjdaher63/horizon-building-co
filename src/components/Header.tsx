"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const serviceLinks = [
  { name: "Development Advisory", href: "/services/development-advisory" },
  { name: "Owner Representation", href: "/services/owner-representation" },
  { name: "Construction Management", href: "/services/construction-management" },
  { name: "General Contracting", href: "/services/general-contracting" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: serviceLinks },
  { name: "Projects", href: "/projects" },
  { name: "Service Areas", href: "/areas" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((o) => !o)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-gold transition-colors"
                    aria-expanded={servicesOpen}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-xs uppercase tracking-wider text-gray-400 font-semibold border-b border-gray-100 hover:text-gold transition-colors"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gold hover:bg-gray-50 transition-colors"
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
              Contact Us
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className="flex items-center justify-between w-full py-2 text-foreground hover:text-gold"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-1 border-l-2 border-gold/30 ml-2 mb-2">
                      <Link
                        href={link.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        className="block py-1.5 text-sm text-gray-400 hover:text-gold"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                          className="block py-1.5 text-sm text-gray-400 hover:text-gold"
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
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-foreground hover:text-gold"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 text-center px-5 py-2.5 bg-gold text-gray-900 font-semibold rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
