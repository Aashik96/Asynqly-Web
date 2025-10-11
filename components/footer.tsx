"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-blue-950 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Asynqly</h2>
          <p className="mt-3 text-gray-400">
            Transforming ideas into seamless digital experiences. Innovative solutions for businesses worldwide.
          </p>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="#work-process" className="hover:text-blue-400 transition-colors">Process</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Web Development</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Cloud Solutions</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:hello@asynqly.com" className="hover:text-blue-400 transition-colors">hello@asynqly.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+94 77 9753890</a></li>
            <li>Address: 12/213, Tharalanda Road, Matale, Sril Lanka</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-900 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Asynqly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
