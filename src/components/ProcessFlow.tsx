"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Domain", icon: "🌐" },
  { num: "2", title: "Hosting", icon: "🚀" },
  { num: "3", title: "Website", icon: "💻" },
  { num: "4", title: "Social Ads", icon: "📢" },
];

export default function ProcessFlow() {
  return (
    <section className="bg-gray-900 py-12 sm:py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-16"
      >
        How It Works
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <div key={step.num} className="flex items-center flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-2 sm:mb-3"
              >
                {step.icon}
              </motion.div>
              <span className="text-white font-semibold text-sm sm:text-base">{step.title}</span>
              <span className="text-orange-500 text-xs sm:text-sm mt-1">Step {step.num}</span>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ width: 0, height: 2 }}
                whileInView={{ width: 40, height: 2 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.5 }}
                className="hidden md:block h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-0 md:mx-4 mt-4 md:mt-0 w-10 md:w-auto"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}