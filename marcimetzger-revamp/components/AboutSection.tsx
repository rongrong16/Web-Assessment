"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { ACHIEVEMENTS, HIGHLIGHTS } from "../lib/constants";
import GlobalCard from "./common/card";

export default function AboutSection() {
  const floatingAchievement = ACHIEVEMENTS[0];

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden bg-[#F8FAFC]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#E0E7FF]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
            Meet <span className="text-[#1E3A8A]">Marci Metzger</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Your trusted partner in Nevada real estate
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E3A8A] rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3B82F6] rounded-full opacity-20 blur-xl" />

              <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] p-1 rounded-full shadow-2xl">
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src="/img/marci.webp"
                    alt="Marci Metzger"
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover rounded-full"
                    priority
                  />
                </div>
              </div>

              {/* Floating Stats Card */}
              <GlobalCard
                icon={
                  <floatingAchievement.icon className="w-6 h-6 text-[#FACC15]" />
                }
                label={floatingAchievement.label}
                desc="Industry Leader"
                className="absolute -bottom-6 -right-6 max-w-xs p-6"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-[#334155] leading-relaxed">
                With nearly{" "}
                <strong>three decades of real estate experience</strong>, Marci
                Metzger has guided hundreds of clients in buying and selling
                homes across Nevada. Known for her personal approach and deep
                community roots, Marci leads with integrity, professionalism,
                and results.
              </p>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] border-l-4 border-[#1E3A8A] p-6 rounded-r-xl">
                <p className="text-lg font-semibold text-[#0F172A] mb-2">
                  Record-Breaking Performance
                </p>
                <p className="text-[#334155]">
                  Closed over{" "}
                  <strong className="text-[#1E3A8A]">
                    $28.5 million in sales
                  </strong>{" "}
                  in 2021 alone, establishing herself as a top producer in the
                  Nevada market.
                </p>
              </div>

              <p className="text-lg text-[#334155] leading-relaxed">
                Whether you&apos;re a first-time buyer, seasoned investor, or
                ready to sell, Marci and{" "}
                <strong className="text-[#1E3A8A]">
                  The Ridge Realty Group
                </strong>{" "}
                are here to make the process smooth and rewarding.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#334155]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlobalCard
                key={i}
                icon={<Icon className="w-6 h-6 text-white" />}
                label={item.label}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
