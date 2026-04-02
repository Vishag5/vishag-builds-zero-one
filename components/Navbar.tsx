"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Vishag
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("assignments")}
              className="text-foreground/70 hover:text-foreground transition-colors font-semibold text-[0.9rem] tracking-wide"
            >
              Product Solves
            </button>
            <button
              onClick={() => scrollToSection("builds")}
              className="text-foreground/70 hover:text-foreground transition-colors font-semibold text-[0.9rem] tracking-wide"
            >
              Zero to One
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-foreground/70 hover:text-foreground transition-colors font-semibold text-[0.9rem] tracking-wide"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-foreground transition-colors font-semibold text-[0.9rem] tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/70 hover:text-foreground transition-colors font-semibold text-[0.9rem] tracking-wide"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
