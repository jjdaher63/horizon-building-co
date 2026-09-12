import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "General Contractor Inland Empire",
  description:
    "Horizon Building Company is a full-service general contractor serving the Inland Empire — Riverside, San Bernardino, Ontario, Rancho Cucamonga, and surrounding areas. Construction management, development, and renovations.",
  path: "/areas/inland-empire",
});

export default function InlandEmpirePage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Service Area
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              General Contractor in the Inland Empire
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              From commercial developments in Ontario and Rancho Cucamonga to
              residential construction in Riverside and San Bernardino, Horizon
              Building Company delivers quality construction services throughout
              the Inland Empire.
            </p>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              The Inland Empire is one of Southern California&apos;s fastest-growing
              regions, and Horizon Building Company is proud to serve clients
              across Riverside County and San Bernardino County. With rapid
              population growth driving demand for new housing, commercial space,
              and mixed-use development, the IE offers tremendous opportunity for
              developers and property owners alike.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our team brings the same institutional-quality construction
              management and attention to detail that we deliver in Los Angeles
              to every Inland Empire project. We work in Riverside, Corona,
              Moreno Valley, Fontana, Ontario, Rancho Cucamonga, Upland, Claremont,
              Redlands, and throughout both counties. Whether you are building a
              ground-up multifamily community, renovating a commercial property,
              or developing a single-family subdivision, we manage the full
              construction lifecycle from permitting through certificate of
              occupancy.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a California licensed contractor (CA License #1118216), we
              understand the local building departments, inspection processes, and
              code requirements specific to Inland Empire jurisdictions. Our
              established relationships with local subcontractors and suppliers
              ensure competitive pricing and reliable schedules for projects of
              all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Our Services in the Inland Empire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Construction Management",
              "Ground-Up Development",
              "Commercial Build-Outs",
              "Multifamily Construction",
              "Single-Family Homes",
              "Tenant Improvements",
              "ADU Construction",
              "Industrial & Warehouse",
              "Property Renovations",
            ].map((service) => (
              <div
                key={service}
                className="p-6 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build in the Inland Empire?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact Horizon Building Company today to discuss your project. We
            provide free consultations and detailed estimates for residential and
            commercial construction throughout the Inland Empire.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get a Free Estimate
          </Link>
          <p className="text-gray-400 text-sm mt-6">
            Or call us directly at{" "}
            <a href="tel:+16193151504" className="text-gold hover:underline">
              (619) 315-1504
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
