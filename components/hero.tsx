"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Smartphone,
  Globe,
  Database,
  Code,
  Lock,
  Cloud,
  Sparkles,
  ArrowRight,
  Rocket,
} from "lucide-react";

// --- Custom Hook to handle responsive radius ---
const useOrbitalRadius = () => {
  const outerRadiusSmall = "10rem";
  const outerRadiusLarge = "14rem";
  const innerRadiusSmall = "6rem";
  const innerRadiusLarge = "9rem";

  // State to hold the current radius values
  const [radii, setRadii] = useState({
    outer: outerRadiusLarge, // Default to large for SSR/initial render
    inner: innerRadiusLarge,
  });

  const updateRadii = () => {
    // Check for window existence and update based on screen width
    if (typeof window !== "undefined") {
      const isSmallScreen = window.innerWidth <= 640;
      setRadii({
        outer: isSmallScreen ? outerRadiusSmall : outerRadiusLarge,
        inner: isSmallScreen ? innerRadiusSmall : innerRadiusLarge,
      });
    }
  };

  useEffect(() => {
    // Set initial values on mount (client-side)
    updateRadii();

    // Add event listener for screen resize
    window.addEventListener("resize", updateRadii);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", updateRadii);
  }, []); // Empty dependency array means this runs once on mount and clean up on unmount

  return radii;
};
// ----------------------------------------------

const Hero: React.FC = () => {
  const { outer: outerRadius, inner: innerRadius } = useOrbitalRadius(); // Use the custom hook

  return (
    <div
      id="home"
      className="min-h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-tr from-[#0a0f1f] via-[#1e1b4b] to-[#312e81] font-sans text-gray-100 pt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between px-4 sm:px-10 lg:px-20 mt-10 lg:mt-20 gap-8 lg:gap-10">
        {/* Left Content (omitted for brevity) */}
        <div className="lg:w-1/2 pt-4 flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8 lg:mb-12"
          >
            Turning Ideas Into <br />
            <span className="text-brand-secondary">Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md sm:max-w-lg mb-8 lg:mb-12"
          >
            We help brands innovate, grow, and stand out with modern digital
            solutions. From concept to reality, we craft experiences that engage
            and inspire.
          </motion.p>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap sm:flex-nowrap items-start space-x-0 sm:space-x-8 mb-8 lg:mb-12 gap-y-4 sm:gap-y-0"
          >
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-1 bg-[#FF6B6B]" />
              <div className="flex flex-col">
                <p className="text-white font-semibold leading-none">Creative</p>
                <span className="text-gray-500 text-xs mt-1">
                  Solutions That Inspire
                </span>
              </div>
            </div>
            <div className="hidden sm:block border-l border-gray-600 h-10 self-center" />
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-1 bg-[#4ECDC4]" />
              <div className="flex flex-col">
                <p className="text-white font-semibold leading-none">
                  Innovative
                </p>
                <span className="text-gray-500 text-xs mt-1">
                  Digital Experiences
                </span>
              </div>
            </div>
            <div className="hidden sm:block border-l border-gray-600 h-10 self-center" />
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-1 bg-[#FFD93D]" />
              <div className="flex flex-col">
                <p className="text-white font-semibold leading-none">
                  Customer-Focused
                </p>
                <span className="text-gray-500 text-xs mt-1">
                  We Deliver Value
                </span>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mt-8 lg:mt-12 mb-8"
          >
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold text-[#1e3a8a] bg-white hover:bg-gray-100 transition-colors shadow-md flex items-center gap-3 justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold text-white border border-white/30 bg-white/10 hover:bg-white/20 transition-colors shadow-md flex items-center gap-3 justify-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex justify-center mb-10 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem]">
            {/* Central Hub (omitted for brevity) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center z-20">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-red-500" />
              </div>
            </div>

            {/* Orbit Rings (omitted for brevity) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-200 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-blue-100 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] border border-blue-200 rounded-full opacity-25"></div>

            {/* Rotating Outer Icons */}
            <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
              {[
                { icon: Globe, angle: 0, color: "text-red-500" },
                { icon: Rocket, angle: 90, color: "text-green-500" },
                { icon: Sparkles, angle: 180, color: "text-yellow-500" },
                { icon: Lock, angle: 270, color: "text-purple-500" },
              ].map(({ icon: Icon, angle, color }, idx) => (
                <div
                  key={idx}
                  className="absolute w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100"
                  style={{
                    left: "50%",
                    top: "50%",
                    // Use the state-driven radius
                    transform: `rotate(${angle}deg) translate(${outerRadius}) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                >
                  <Icon className={`w-4 sm:w-6 h-4 sm:h-6 ${color}`} />
                </div>
              ))}
            </div>

            {/* Rotating Inner Icons */}
            <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
              {[
                { icon: Code, angle: 45, color: "text-pink-500" },
                { icon: Smartphone, angle: 135, color: "text-teal-500" },
                { icon: Cloud, angle: 225, color: "text-orange-500" },
                { icon: Database, angle: 315, color: "text-purple-500" },
              ].map(({ icon: Icon, angle, color }, idx) => (
                <div
                  key={idx}
                  className="absolute w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100"
                  style={{
                    left: "50%",
                    top: "50%",
                    // Use the state-driven radius
                    transform: `rotate(${angle}deg) translate(${innerRadius}) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                >
                  <Icon className={`w-4 sm:w-5 h-4 sm:h-5 ${color}`} />
                </div>
              ))}
            </div>

            {/* Floating Elements (omitted for brevity) */}
            <motion.div
              className="absolute top-16 right-8 w-3 h-3 bg-blue-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 left-4 w-2 h-2 bg-blue-300 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-32 left-12 w-4 h-4 bg-blue-500 rounded-full"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            {/* Background Glow (omitted for brevity) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;