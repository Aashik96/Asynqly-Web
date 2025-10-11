"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_m8nxc8l", // replace with your EmailJS service ID
        "template_hz08zil", // replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "DAy4UUEpzIlBHk3Nj" // replace with your EmailJS public key
      );

      console.log("Email sent:", result.text);
      setStatus("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      // Remove the status after 3 seconds
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
      setTimeout(() => setStatus(""), 2000);
    }
  };

  // Animation variants
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="relative py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Heading + Contact Info */}
          <motion.div
            className="flex flex-col justify-start space-y-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={item}>
              <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
                Contact Us
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Let&apos;s Collaborate
              </h2>
              <p className="text-gray-600 max-w-lg">
                Have questions or ideas? Reach out and let’s create something amazing together.
              </p>
            </motion.div>

            <motion.div className="flex flex-col space-y-8 pt-8" variants={item}>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">12/213, Tharalanda Road, Matale, Sril Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">+94 77 9753890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">contact@yourdomain.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg border border-blue-200 p-8 flex flex-col gap-4"
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
            <button className="w-full bg-brand-secondary hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md">
              Send Message
            </button>
            {status && <p className="text-gray-800 mt-2">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
