"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/contents";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      const currentSection = NAV_ITEMS.reduce((current, item) => {
        const section = document.getElementById(item.id);
        return section && section.offsetTop <= scrollPosition ? item.id : current;
      }, "home");
      setActiveSection(currentSection);

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled || activeSection !== "home" ? "text-gray-900" : "text-white";
  const underlineColor = isScrolled || activeSection !== "home" ? "after:bg-gray-900" : "after:bg-white";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* <div
            className={`font-black text-xl sm:text-2xl tracking-tight cursor-pointer transition-colors ${textColor}`}
            onClick={() => scrollToSection("home")}
          >
            Asynqly
          </div> */}
          <div
  className="flex items-center space-x-2 cursor-pointer"
  onClick={() => scrollToSection("home")}
>
  <Image
    src="/logos/asynqly-logo-blue.png" // 👈 change to your actual logo file name (e.g. /logo-blue.png)
    alt="Asynqly logo"
    width={40} // adjust as needed
    height={40}
    className="object-contain"
    priority
  />
  <span
    className={`font-black text-xl sm:text-2xl tracking-tight transition-colors ${textColor}`}
  >
    Asynqly
  </span>
</div>

          <div className="hidden md:flex space-x-6 flex-1 justify-end">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  relative font-medium transition-colors
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300
                  ${textColor} ${activeSection === id ? `${underlineColor} after:w-full` : ""}
                `}
              >
                {label}
              </button>
            ))}
          </div>

          <button className={`md:hidden focus:outline-none ${textColor}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        <div className="px-4 sm:px-6 space-y-3 bg-white/90 backdrop-blur-md rounded-b-lg shadow-md max-w-full">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left font-medium text-gray-900 text-lg py-2 px-2 rounded hover:bg-gray-100 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
