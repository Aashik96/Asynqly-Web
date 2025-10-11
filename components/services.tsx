import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { Code, Smartphone, TrendingUp, Zap } from 'lucide-react';
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that engage and convert users"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that boost your online presence"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites that rank higher and convert better"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pink-500 bg-white border-2 border-pink-500 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-md">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">What We Do Best?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="h-full"
            >
              <Card className="group hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 bg-white rounded-3xl p-6 shadow-md border-0 h-full flex flex-col">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mb-5 p-5 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full text-blue-600 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-lg"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
