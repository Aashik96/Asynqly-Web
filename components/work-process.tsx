import { CheckCircle, MessageCircle, Settings, Target } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We dive into your vision to uncover key insights and opportunities.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Strategy",
      description: "We create a tailored plan to turn ideas into impactful results.",
      icon: Target,
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team brings your concepts to life with precision and creativity.",
      icon: Settings,
    },
    {
      number: "04",
      title: "Final Result",
      description: "We deliver results that engage, inspire, and make an impact.",
      icon: CheckCircle,
    },
  ];

  // Container variants for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

  return (
    <section id="work-process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pink-500 bg-white border-2 border-pink-500 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-md">
            Work Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            How We Turn Ideas into Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We take your vision and transform it into results-driven digital solutions that make your brand stand out.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index, arr) => (
            <motion.div key={index} className="text-center group relative" variants={stepVariants}>
              {/* Icon + Line wrapper */}
              <div className="relative mb-6 flex justify-center items-center">
                {/* Main Icon */}
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative shadow-md">
                  <step.icon className="w-10 h-10 text-white" />

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm border-2 border-blue-500">
                    {step.number}
                  </div>
                </div>

                {/* Arrow Line */}
                {index !== arr.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 right-[-100px] items-center transform -translate-y-1/2">
                    <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-3 h-3 border-t-2 border-r-2 border-blue-500"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
