"use client";

import { createMetadata } from "@/lib/metadata";
import { useState } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: "(619) 315-1504",
    href: "tel:619-315-1504",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Email",
    value: "john@horizonbldgco.com",
    href: "mailto:john@horizonbldgco.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Location",
    value: "Los Angeles, California",
    href: null,
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "License",
    value: "CA #01118216",
    href: null,
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
                Get In Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Let&apos;s Build
                <br />
                <span className="text-gold">Something Great</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you&apos;re planning a new development, need construction
                management for an ongoing project, or want to explore the
                feasibility of a real estate investment, we&apos;re here to help.
                Our principals respond personally to every inquiry.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.icon}
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-lg border border-gray-700 bg-gray-800/50">
              {submitted ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 text-gold mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We&apos;ll be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold mb-2">
                    Request a Consultation
                  </h2>
                  <p className="text-sm text-gray-400 mb-6">
                    Tell us about your project and we&apos;ll schedule a call to
                    discuss how we can help.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground placeholder-gray-400 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground placeholder-gray-400 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground placeholder-gray-400 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground placeholder-gray-400 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground focus:outline-none focus:border-gold">
                      <option value="">Select a service</option>
                      <option value="construction-management">Construction Management</option>
                      <option value="project-management">Project Management</option>
                      <option value="design-development">Design & Development</option>
                      <option value="real-estate-development">Real Estate Development</option>
                      <option value="property-maintenance">Property Maintenance</option>
                      <option value="financial-pro-forma">Financial Pro Forma</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-foreground placeholder-gray-400 focus:outline-none focus:border-gold resize-none"
                      placeholder="Brief description of your project, timeline, and budget range..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
