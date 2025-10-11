/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 font-sans text-gray-800 overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/business_image.png"
            alt="About Us Team"
            className="w-full h-auto object-cover rounded-3xl shadow-lg shadow-blue-200/50"
          />
        </motion.div>

        {/* Right Side Text Content */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest"
          >
            About Us
          </motion.h2>

          <motion.h3
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
          >
            We help brands <span className="text-blue-600">grow & succeed</span> online.
          </motion.h3>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700"
          >
            Our passionate team of creatives and marketers specializes in crafting beautiful websites, developing powerful mobile apps, and designing marketing strategies that deliver real results.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-gray-600"
          >
            We turn your business goals into reality using the latest digital trends and cutting-edge technologies.
          </motion.p>

          <motion.blockquote
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="mt-6 pl-6 border-l-4 border-blue-400 italic text-blue-700"
          >
            “Your success is our mission. We craft digital experiences that truly make an impact.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
