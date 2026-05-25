import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Financial Pro Forma Creation",
  description:
    "Institutional-quality real estate financial pro formas and analysis. Horizon Building Company provides acquisition underwriting, development pro formas, rent comps, market analysis, investor presentations, and IRR/cash-on-cash analysis for Los Angeles real estate transactions.",
  path: "/services/financial-pro-forma",
});

const included = [
  {
    title: "Acquisition Analysis",
    description:
      "Comprehensive underwriting of purchase opportunities including rent roll analysis, operating expense review, capital expenditure budgeting, debt sizing, and return metric calculation to support informed investment decisions.",
  },
  {
    title: "Development Pro Formas",
    description:
      "Detailed ground-up development financial models including hard and soft cost budgets, construction draw schedules, lease-up assumptions, stabilized valuations, and sensitivity analysis across key variables.",
  },
  {
    title: "Rent Comps & Market Analysis",
    description:
      "Research and compilation of comparable rental data, vacancy rates, absorption trends, and submarket fundamentals to support realistic revenue assumptions and identify market positioning opportunities.",
  },
  {
    title: "Investor Presentations",
    description:
      "Institutional-quality investment memoranda and pitch materials including executive summaries, market overviews, financial projections, risk analysis, and partnership structure documentation.",
  },
  {
    title: "IRR & Cash-on-Cash Analysis",
    description:
      "Multi-year discounted cash flow models with levered and unlevered IRR calculations, cash-on-cash returns, equity multiples, and waterfall distribution modeling for partnership structures.",
  },
  {
    title: "Sensitivity & Scenario Analysis",
    description:
      "Stress testing of key assumptions including rent growth, vacancy, construction costs, interest rates, and exit cap rates to quantify downside risk and identify break-even thresholds.",
  },
];

const reasons = [
  "Real construction cost expertise ensures pro forma budgets reflect actual market pricing, not theoretical estimates",
  "Combined development and construction background provides unique insight into realistic project timelines and contingency requirements",
  "Institutional-quality financial modeling methodology developed through underwriting over $600M in projects",
  "Deep knowledge of Los Angeles submarket fundamentals including rent trends, vacancy rates, and development pipeline",
  "Experience preparing materials for institutional investors, family offices, and high-net-worth LP capital raises",
  "Understanding of construction financing structures, draw schedules, and lender requirements for development loans",
];

export default function FinancialProFormaPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Financial Pro Forma Creation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Real Estate Financial
              <br />
              <span className="text-gold">Analysis & Pro Formas</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sound real estate investment decisions require rigorous financial
              analysis. Horizon Building Company creates institutional-quality
              pro formas and financial models that provide clarity on returns,
              risk, and feasibility for acquisition, development, and
              repositioning opportunities across Los Angeles.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              What sets our financial analysis apart is our construction
              expertise. Most financial analysts build pro formas using generic
              cost assumptions and theoretical timelines. Our models are
              grounded in actual construction pricing, realistic schedules, and
              practical knowledge of what it takes to deliver projects in the
              Los Angeles market. This means our budgets, contingencies, and
              timeline assumptions reflect reality rather than optimism.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We provide comprehensive financial modeling for every stage of the
              real estate investment lifecycle. From initial acquisition
              underwriting that determines whether a deal pencils, through
              development pro formas that guide construction budgets and capital
              raises, to disposition analysis that maximizes exit timing and
              value, our models give you the information needed to make
              confident decisions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our investor presentation materials meet the standards expected by
              institutional capital partners, family offices, and sophisticated
              high-net-worth investors. We structure analyses with clear
              assumptions, transparent methodology, sensitivity tables, and
              professional formatting that demonstrates credibility and
              thoroughness to potential equity partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Analytical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What&apos;s Included
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <h3 className="text-lg font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
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
                Builder-Grade Analysis
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose Us
              </h2>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-400 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Pro Forma You Can Trust?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you are underwriting an acquisition, modeling a development,
            or preparing materials for a capital raise, our team delivers
            financial analysis grounded in real construction expertise. Contact
            us to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Request Financial Analysis
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Financial Pro Forma Creation",
            provider: {
              "@type": "GeneralContractor",
              name: "Horizon Building Company",
              telephone: "+1-619-315-1504",
              email: "john@horizonbldgco.com",
            },
            description:
              "Institutional-quality real estate financial pro formas and analysis including acquisition underwriting, development pro formas, rent comps, market analysis, investor presentations, and IRR/cash-on-cash analysis.",
            areaServed: {
              "@type": "City",
              name: "Los Angeles",
            },
            serviceType: "Financial Analysis",
            url: "https://horizonbldgco.com/services/financial-pro-forma",
          }),
        }}
      />
    </>
  );
}
