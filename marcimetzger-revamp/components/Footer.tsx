"use client";

import Image from "next/image";
import { PARTNER_LOGOS, SOCIAL_LINKS, COPYRIGHT } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/20 via-[var(--color-primary)] to-[var(--color-primary)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Partner Logos */}
        <div className="mb-10">
          <h3 className="text-xs md:text-sm font-semibold tracking-widest text-[var(--color-secondary)] uppercase mb-6 text-center">
            Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
            {PARTNER_LOGOS.map((logo, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-[var(--color-secondary)]/50 hover:scale-105 hover:shadow-[0_0_15px_var(--color-secondary)] transition-all duration-500">
                  <Image
                    src={logo}
                    alt="Partner logo"
                    width={65}
                    height={65}
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)]/30 to-transparent mb-10" />

        {/* Socials + Copyright */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.alt}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[var(--color-secondary)]/10 rounded-full blur-md group-hover:bg-[var(--color-secondary)]/30 transition-all duration-300" />
                <div className="relative p-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-[var(--color-secondary)]/20 hover:border-[var(--color-secondary)]/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    height={20}
                    className="invert brightness-0 contrast-200 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-[var(--color-bg)]/80 font-light">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-white">{COPYRIGHT.owner}</span>
              {" | "}
              <span className="font-medium text-[var(--color-secondary)]">
                {COPYRIGHT.company}
              </span>
            </p>
            <p className="text-[11px] text-[var(--color-bg)]/60 mt-1 tracking-wide">
              {COPYRIGHT.reservedText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
