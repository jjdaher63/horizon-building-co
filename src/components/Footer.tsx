import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Development Advisory", href: "/services/development-advisory" },
  { name: "Owner Representation", href: "/services/owner-representation" },
  { name: "Construction Management", href: "/services/construction-management" },
  { name: "General Contracting", href: "/services/general-contracting" },
];

const areas = [
  { name: "Los Angeles", href: "/areas/los-angeles" },
  { name: "Santa Monica", href: "/areas/santa-monica" },
  { name: "West Hollywood", href: "/areas/west-hollywood" },
  { name: "Inland Empire", href: "/areas/inland-empire" },
  { name: "Beverly Hills", href: "/areas/beverly-hills" },
  { name: "San Fernando Valley", href: "/areas/san-fernando-valley" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/images/logo-cropped-white.svg"
              alt="Horizon Building Company"
              width={400}
              height={188}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-service general contractor and real estate development firm
              serving Los Angeles and Southern California. Licensed, bonded, and
              insured.
            </p>
            <p className="text-gray-400 text-sm">
              CA Contractor License #01118216
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:619-315-1504" className="hover:text-gold transition-colors">
                  (619) 315-1504
                </a>
              </li>
              <li>
                <a href="mailto:john@horizonbldgco.com" className="hover:text-gold transition-colors">
                  john@horizonbldgco.com
                </a>
              </li>
              <li>Los Angeles, California</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-gold text-gray-900 text-sm font-semibold rounded hover:bg-gold-light transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Horizon Building Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/projects" className="hover:text-gold transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
