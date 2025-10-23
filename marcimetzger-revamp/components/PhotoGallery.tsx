"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GALLERY_IMAGES, GALLERY_SECTION } from "@/lib/constants";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null)
      setSelectedImage(
        (selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
  };

  const goToNext = () => {
    if (selectedImage !== null)
      setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
  };

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/10 via-white to-[var(--color-bg)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {GALLERY_SECTION.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {GALLERY_SECTION.description}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div
                    className={`transform transition-all duration-300 ${
                      hoveredIndex === i
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3">
                      {img.title || ""}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-4 border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-300 rounded-2xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105">
            {GALLERY_SECTION.buttonLabel}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-amber-500/20 hover:bg-amber-500/30 text-white rounded-full backdrop-blur-sm transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 p-3 bg-amber-500/20 hover:bg-amber-500/30 text-white rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 p-3 bg-amber-500/20 hover:bg-amber-500/30 text-white rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedImage].src}
              alt={GALLERY_IMAGES[selectedImage].alt}
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
            {selectedImage + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
