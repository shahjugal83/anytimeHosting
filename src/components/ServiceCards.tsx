"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "🌐", title: "Domain", desc: "Get your perfect domain name" },
  { icon: "🚀", title: "Hosting", desc: "Fast & reliable hosting" },
  { icon: "💻", title: "Website", desc: "Build your dream website" },
  { icon: "📢", title: "Ads", desc: "Reach more customers" },
];

export default function ServiceCards() {
  return (
    <section className="bg-black py-12 sm:py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
      >
        Our Services
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-xl text-center cursor-pointer"
          >
            <motion.div
              className="text-4xl sm:text-5xl mb-3 sm:mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}