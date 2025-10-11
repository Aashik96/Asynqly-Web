"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const features = [
  { title: "Expert Team", desc: "A passionate team of designers, developers, and strategists dedicated to your success.", icon: "👨‍💻" },
  { title: "Tailored Solutions", desc: "We craft customized strategies that align with your unique business goals.", icon: "🎯" },
  { title: "Proven Results", desc: "Our track record speaks for itself with 100+ successful projects delivered.", icon: "🏆" },
  { title: "Customer Focused", desc: "We build strong relationships and ensure your satisfaction is our priority.", icon: "🤝" },
  { title: "Innovative Approach", desc: "Leveraging the latest tech trends to keep you ahead in the digital game.", icon: "🚀" },
  { title: "Full-Service Support", desc: "From concept to launch and beyond, we’ve got you covered.", icon: "🔧" },
  { title: "Transparent Communication", desc: "We maintain open, honest, and timely communication throughout the project.", icon: "📞" },
  { title: "Affordable Pricing", desc: "Get the best value with flexible pricing plans that suit all business sizes.", icon: "💰" },
  { title: "Continuous Improvement", desc: "We constantly learn, adapt, and improve to serve you better.", icon: "📈" },
];

// Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { type: "spring", stiffness: 300, damping: 20 } 
  },
  hover: { rotate: 15, scale: 1.1, transition: { type: "spring", stiffness: 300 } }
};

const Features: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pink-500 bg-white border-2 border-pink-500 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-md">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-4">
            We Deliver Results with Passion & Precision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Our approach combines creativity, technology, and data-driven strategies to provide you with unmatched digital solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-start space-x-4 rounded-2xl p-4 backdrop-blur-md hover:bg-white/60 hover:shadow-xl hover:border hover:border-gray-200 transition-all duration-300"
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="flex-shrink-0 text-3xl bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-3 text-blue-600 shadow-sm"
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 mb-1 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
