import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Meet the team behind Horizon Building Company. Over $600M in combined construction and development experience. Licensed Los Angeles general contractor with institutional-level expertise from Clark Construction.",
  path: "/about",
});

const team = [
  {
    name: "John J. Daher",
    role: "Principal",
    bio: "John brings extensive construction and real estate development experience, having overseen over $450 million in projects at major firms including Clark Construction. He holds degrees in Civil Engineering and an MBA, combining technical expertise with business acumen to deliver exceptional results for clients across Southern California.",
    credentials: ["B.S. Civil Engineering", "MBA", "CA Contractor License"],
  },
  {
    name: "William W. Daher",
    role: "Principal",
    bio: "William is a project management specialist with over $150 million in multifamily and commercial development execution across Southern California. He holds degrees in Civil Engineering and an MBA, along with a California Real Estate Broker license, providing a unique blend of construction and real estate expertise.",
    credentials: [
      "B.S. Civil Engineering",
      "MBA",
      "CA Real Estate Broker License",
    ],
  },
];

const values = [
  {
    title: "Quality",
    description:
      "We maintain the highest standards of workmanship and professionalism on every project, treating each build as if it were our own.",
  },
  {
    title: "Innovation",
    description:
      "We bring fresh perspectives and modern building practices to every project, staying ahead of industry trends and technology.",
  },
  {
    title: "Integrity",
    description:
      "Transparent communication, honest pricing, and ethical business practices form the foundation of every client relationship.",
  },
  {
    title: "Client Focus",
    description:
      "We build lasting relationships through trust, responsiveness, and a genuine commitment to exceeding expectations on every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              About Horizon Building Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Built on Experience.
              <br />
              <span className="text-gold">Driven by Excellence.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Horizon Building Company is a dynamic general contracting and real
              estate development firm based in Los Angeles. We provide white-glove
              service with hands-on ownership involvement on every project.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded by principals with institutional construction backgrounds
              at firms like Clark Construction, we bring large-firm capability
              with boutique-firm attention. Our team has collectively managed over
              $600 million in construction projects ranging from luxury single-family
              homes to large-scale multifamily developments and commercial builds.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We specialize in delivering complex projects across Los Angeles,
              Santa Monica, West Hollywood, Silver Lake, and the greater Southern
              California area. Our integrated approach combines construction
              management, real estate development expertise, and financial
              analysis to provide comprehensive solutions for property owners,
              investors, and developers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-lg border border-gray-700 bg-gray-800/50"
              >
                <div className="w-20 h-20 rounded-full bg-gray-700 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s discuss your next project. Our principals are personally
            involved in every engagement from day one.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
