import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Owner Representation",
  description:
    "Owner representation services in Los Angeles — project oversight, budget monitoring, schedule management, change order review, contractor coordination, and lender reporting for investors and private owners.",
  path: "/services/owner-representation",
});

const included = [
  {
    title: "Project Oversight",
    description:
      "Full-time principal-level oversight of your project from groundbreaking through closeout. We attend site meetings, review submittals, track RFIs, and keep every team member accountable to the project plan.",
  },
  {
    title: "Budget Monitoring",
    description:
      "Continuous tracking of hard costs, soft costs, contingency draws, and change orders against the approved project budget. We provide clear, real-time visibility into cost performance so you are never surprised.",
  },
  {
    title: "Schedule Management",
    description:
      "Independent review and monitoring of the contractor's project schedule. We identify delays before they compound, evaluate schedule recovery plans, and protect your delivery timeline and carry costs.",
  },
  {
    title: "Construction Draw Review",
    description:
      "Rigorous review of monthly pay applications against actual work in place. We verify quantities, confirm stored materials, and ensure lender draw requirements are met before any funds are released.",
  },
  {
    title: "Change Order Review",
    description:
      "Independent analysis of contractor change order requests for scope validity, pricing accuracy, and schedule impact. We negotiate on your behalf to eliminate unnecessary change orders and reduce inflated costs.",
  },
  {
    title: "Contractor Coordination",
    description:
      "Daily coordination between general contractors, subcontractors, architects, engineers, and inspectors. We manage the communication layer so your project team operates efficiently and without conflict.",
  },
  {
    title: "Risk Management",
    description:
      "Proactive identification and mitigation of project risks — from scope gaps and design conflicts to site conditions and subcontractor performance. We solve problems before they become claims.",
  },
  {
    title: "Lender Reporting",
    description:
      "Preparation of monthly lender progress reports, draw documentation, project status updates, and completion certifications. We manage the lender relationship so you can focus on your investment.",
  },
  {
    title: "Project Closeout",
    description:
      "Comprehensive closeout management including punch list completion, certificate of occupancy, warranty documentation, as-built drawings, and final lien releases — delivered on time and on budget.",
  },
];

const reasons = [
  "Principals bring $600M+ in project experience from institutional builders and developers",
  "Independent — we work exclusively for you, with no financial relationship with contractors or designers",
  "Fluent in construction contracts, lender requirements, and municipal permit processes across Southern California",
  "Proactive risk identification protects your capital and delivery timeline",
  "Transparent reporting keeps you fully informed without requiring your daily involvement",
  "Trusted by developers, family offices, private owners, and institutional investors",
];

export default function OwnerRepresentationPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Owner Representation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Eyes and Ears
              <br />
              <span className="text-gold">on Every Project</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company serves as owner&apos;s representative for
              investors, developers, family offices, and private owners across Los
              Angeles and Southern California. We protect your interests, manage
              project complexity, and ensure your investment performs as planned —
              from contract execution through final closeout.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Real estate development and construction are high-stakes, highly
              specialized disciplines. When you don&apos;t have institutional
              in-house resources, you are entirely reliant on contractors and
              consultants whose interests do not always align with yours. An
              experienced owner&apos;s representative changes that dynamic.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We work exclusively for our clients — never for contractors,
              designers, or lenders. Our principals bring institutional-level
              expertise from over $600 million in combined project experience,
              applied directly to protecting your investment and delivering your
              project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Scope of Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">What&apos;s Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
                <h3 className="text-lg font-semibold text-gold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
                The Horizon Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-400 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Investment</h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us to learn how owner representation services can help you
            deliver your next project on time, on budget, and built to your
            standards.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Owner Representation",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Owner representation services in Los Angeles including project oversight, budget monitoring, schedule management, change order review, contractor coordination, and lender reporting.",
            areaServed: { "@type": "City", name: "Los Angeles" },
            serviceType: "Owner Representation",
            url: "https://horizonbldgco.com/services/owner-representation",
          }),
        }}
      />
    </>
  );
}
