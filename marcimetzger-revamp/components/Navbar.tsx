import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { NAV_LINKS, BRAND } from "../lib/constants";
import { GlobalButton } from "./common/globalbutton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
          : "bg-white/70 backdrop-blur-md shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="" className="flex items-center gap-3 group">
          <div
            className={`w-12 h-12 bg-${BRAND.colors.primary} rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
          >
            <span className="text-white font-bold text-xl">
              {BRAND.initials}
            </span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-none">
              <span className={`${BRAND.colors.textPrimary}`}>
                {BRAND.fullName.first}{" "}
              </span>
              <span className={`text-${BRAND.colors.primary}`}>
                {BRAND.fullName.last}
              </span>
            </h1>
            <p className={`${BRAND.colors.textSecondary} text-xs font-medium`}>
              {BRAND.subtitle}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-900 transition-all"
            >
              {link.name}
              <span className="absolute inset-0 bg-yellow-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
            </a>
          ))}

          {/* Desktop CTA */}
          <GlobalButton
            asChild
            className="bg-blue-900 hover:bg-yellow-400 text-white"
          >
            <a href="#contact">Get Started</a>
          </GlobalButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-1 mb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-900 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <GlobalButton
            asChild
            className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-yellow-400 text-white"
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </a>
          </GlobalButton>
        </nav>
      )}
    </header>
  );
}
