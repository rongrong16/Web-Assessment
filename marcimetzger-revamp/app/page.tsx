"use client";

import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PhotoGallery from "@/components/PhotoGallery";
import CallOrVisit from "@/components/CallOrVisit";
import Footer from "@/components/Footer";
import SearchListings from "@/components/SearchListings";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <SearchListings />
      <PhotoGallery />
      <CallOrVisit />
      <Footer />
    </main>
  );
}
