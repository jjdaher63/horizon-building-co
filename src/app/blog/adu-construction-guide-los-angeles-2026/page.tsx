import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "The Complete Guide to ADU Construction in Los Angeles (2026)",
  description:
    "Everything you need to know about building an ADU in Los Angeles — costs, permits, timelines, design options, and new 2026 state legislation. Expert guide from a licensed LA contractor.",
  path: "/blog/adu-construction-guide-los-angeles-2026",
});

export default function ADUBlogPost() {
  return (
    <article className="py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs bg-gold/10 text-gold rounded">
              Guides
            </span>
            <span className="text-sm text-gray-400">8 min read</span>
            <span className="text-sm text-gray-400">May 20, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            The Complete Guide to ADU Construction in Los Angeles (2026)
          </h1>
          <p className="text-lg text-gray-300">
            Accessory Dwelling Units have become one of the most popular ways to
            add value to Los Angeles properties. Here&apos;s everything you need to
            know about building one in 2026.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            What Is an ADU?
          </h2>
          <p>
            An Accessory Dwelling Unit (ADU) is a secondary residential unit on a
            single-family lot. In Los Angeles, ADUs can be detached structures,
            garage conversions, or additions to the primary home. They typically
            range from 400 to 1,200 square feet and include a full kitchen,
            bathroom, and separate entrance.
          </p>
          <p>
            California&apos;s progressive ADU legislation has made it easier than ever
            to build these units, with streamlined permitting, reduced fees, and
            relaxed setback requirements designed to address the state&apos;s housing
            shortage.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            ADU Costs in Los Angeles (2026)
          </h2>
          <p>
            Construction costs for ADUs in Los Angeles typically range from $250
            to $450 per square foot, depending on complexity, finishes, and site
            conditions. A standard 600 sq ft detached ADU generally costs between
            $150,000 and $270,000 for construction alone. Additional soft costs
            (design, permits, engineering) typically add 15-25% to the total budget.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Cost Breakdown
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Design and engineering: $15,000 - $40,000</li>
            <li>Permits and fees: $5,000 - $15,000</li>
            <li>Site work and foundation: $20,000 - $50,000</li>
            <li>Framing and structure: $30,000 - $60,000</li>
            <li>Mechanical, electrical, plumbing: $25,000 - $50,000</li>
            <li>Interior finishes: $30,000 - $70,000</li>
            <li>Exterior and landscaping: $10,000 - $25,000</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The Permit Process
          </h2>
          <p>
            Los Angeles has streamlined ADU permitting significantly. The City
            offers a dedicated ADU plan check process with mandated timelines.
            Typical permit approval takes 4-8 weeks for standard designs. Key steps
            include:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-400">
            <li>Preliminary site assessment and feasibility review</li>
            <li>Architectural design and engineering</li>
            <li>Plan submission to LADBS</li>
            <li>Plan check review (4-8 weeks)</li>
            <li>Permit issuance and construction start</li>
            <li>Inspections during construction</li>
            <li>Final inspection and certificate of occupancy</li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Design Considerations
          </h2>
          <p>
            Successful ADU design balances livability with buildability. Key
            considerations include natural light, ceiling height (minimum 7&apos;6&quot; in
            habitable rooms), ventilation, private entry, and integration with the
            existing property. Popular design approaches include modern
            contemporary, Spanish revival matching the main house, and minimalist
            studio layouts.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Timeline: What to Expect
          </h2>
          <p>
            From initial consultation to move-in ready, a typical ADU project in
            Los Angeles takes 8-14 months total:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Design phase: 4-8 weeks</li>
            <li>Permitting: 4-8 weeks</li>
            <li>Construction: 4-7 months</li>
            <li>Final inspections: 1-2 weeks</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            ROI and Rental Income
          </h2>
          <p>
            ADUs in Los Angeles generate strong returns. A well-designed unit can
            command $2,000-$4,000+ per month in rent depending on size, location,
            and finishes. Many property owners see a full payback period of 5-8
            years, with the added benefit of increased property value estimated at
            20-30% above construction cost.
          </p>

          <div className="mt-16 p-8 rounded-lg border border-gray-700 bg-gray-800/50 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Build Your ADU?
            </h3>
            <p className="text-gray-400 mb-6">
              Horizon Building Company has completed numerous ADU projects across
              Los Angeles. We handle everything from design through final
              inspection.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Get a Free ADU Consultation
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
