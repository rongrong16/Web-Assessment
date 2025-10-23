"use client";

import { Clock, ArrowRight } from "lucide-react";
import { CONTACT_CARDS, OFFICE_INFO, CTA_BUTTONS } from "../lib/constants";

export default function CallOrVisit() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-6 md:px-16 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-primary)]/5 to-[var(--color-bg)] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-secondary)]/30 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--color-secondary)] text-[var(--color-text)] rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Call or Visit Us
          </h3>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            We&apos;re here to guide you through every step of your real estate
            journey — contact us anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {CONTACT_CARDS.map(
            ({ title, text, href, icon: Icon, color, label }, i) => (
              <a
                key={i}
                href={href}
                target={title === "Visit Our Office" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-accent)] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                    {title}
                  </h4>
                  <p className="text-[var(--color-muted)] mb-4 break-words">
                    {text}
                  </p>
                  <span
                    className="font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                    style={{ color }}
                  >
                    {label} <ArrowRight size={18} />
                  </span>
                </div>
              </a>
            )
          )}
        </div>

        {/* Bottom Card */}
        <div className="bg-white/90 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl">
                <Clock className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  {OFFICE_INFO.hoursTitle}
                </h5>
                <p className="text-[var(--color-muted)]">
                  {OFFICE_INFO.hoursText}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {CTA_BUTTONS.map(({ label, variant }, i) => (
                <button
                  key={i}
                  className={`px-8 py-4 font-semibold rounded-xl transition-all ${
                    variant === "primary"
                      ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-primary)]"
                      : "bg-[var(--color-secondary)] text-[var(--color-text)] hover:opacity-90"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
