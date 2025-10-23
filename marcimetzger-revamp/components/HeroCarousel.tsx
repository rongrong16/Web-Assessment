"use client";

import { useState } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "../lib/constants";
import { GlobalButton } from "./common/globalbutton";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide effect

  const goToSlide = (i: number) => {
    if (isTransitioning || i === index) return;
    setIsTransitioning(true);
    setIndex(i);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0F172A]">
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === index
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.text}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/70 via-[#1E3A8A]/40 to-[#0F172A]/80" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute"
                }`}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-extrabold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
                  {slide.text}
                </h1>
                <p className="text-xl md:text-2xl text-[#E2E8F0] font-light tracking-wide mb-8 md:mb-12">
                  {slide.subtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlobalButton className="w-[200px] h-[50px] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 shadow-xl">
                    Explore Properties
                  </GlobalButton>

                  <GlobalButton
                    asChild
                    className="w-[200px] bg-transparent border-2 border-[#FACC15] text-white hover:bg-[#FACC15] hover:text-[#0F172A] flex items-center justify-center"
                  >
                    <a href="#contact">Contact Us</a>
                  </GlobalButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="pb-8 md:pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <div className="flex gap-3">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="group relative h-1 w-16 md:w-24 bg-white/30 rounded-full overflow-hidden hover:bg-white/50 transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#FACC15] to-[#FDE68A] rounded-full origin-left transition-transform duration-300 ${
                      i === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
