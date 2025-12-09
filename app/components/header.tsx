"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home /", id: "hero" },
    { label: "Services /", id: "services" },
    { label: "Features /", id: "features" },
    { label: "About /", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
        isScrolled ? "bg-white/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center">
        <nav className="flex w-full items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo/rething.svg"
              alt="ReThing"
              width={100}
              height={100}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex md:items-center md:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[12px] font-medium tracking-[0.2em] uppercase text-zinc-600 hover:text-zinc-500"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:flex md:items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-700 hover:text-zinc-900 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100">
          <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium text-zinc-700 py-2 px-3 rounded-lg hover:bg-zinc-50 transition"
              >
                {item.label.replace(" /", "")}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

