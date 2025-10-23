"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICES_SECTION } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden bg-[#F8FAFC]">
      {/* Background Gradient Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#E0E7FF]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#DBEAFE] to-[#FEF9C3] text-[#1E3A8A] rounded-full text-sm font-semibold mb-4">
            {SERVICES_SECTION.subtitle}
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
            {SERVICES_SECTION.title}
          </h3>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            {SERVICES_SECTION.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-6 left-6 p-4 bg-white rounded-2xl shadow-lg">
                    <Icon className="w-6 h-6 text-[#1E3A8A]" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E3A8A] group-hover:to-[#3B82F6] transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-[#475569] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <button className="flex items-center gap-2 text-[#1E3A8A] font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-2xl p-8 shadow-2xl">
            <div className="text-left">
              <p className="text-lg font-semibold mb-1">
                Ready to get started?
              </p>
              <p className="text-white/80 text-sm">
                Let&apos;s discuss your real estate goals
              </p>
            </div>
            <button className="px-8 py-4 bg-[#FACC15] text-[#1E3A8A] font-semibold rounded-xl hover:bg-[#FDE047] transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
