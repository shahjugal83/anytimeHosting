"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Monitor, Megaphone, ArrowRight } from "lucide-react";

const steps = [
  { num: "1", title: "Domain", icon: Globe, desc: "Choose your unique domain" },
  { num: "2", title: "Hosting", icon: Rocket, desc: "Fast & reliable servers" },
  { num: "3", title: "Website", icon: Monitor, desc: "Build your online presence" },
  { num: "4", title: "Social Ads", icon: Megaphone, desc: "Grow your audience" },
];

export default function ProcessFlow() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1d32] to-[#0a1628]">
        <div className="absolute bottom-0 left-1/4 w-[min(500px,60vw,300px)] h-[min(300px,40vh,200px)] bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16 relative"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">How It Works</span>
      </motion.h2>

      <div className="max-w-[min(90vw,1200px)] mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-center flex-col md:flex-row relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300"
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0a1628]" strokeWidth={2} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white"
                  >
                    {step.num}
                  </motion.div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mt-3 sm:mt-4 mb-0.5 sm:mb-1">{step.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm text-center max-w-[120px] sm:max-w-[140px]">{step.desc}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  className="hidden md:flex items-center mx-2 lg:mx-4 mt-4 md:mt-0"
                >
                  <div className="w-8 sm:w-12 lg:w-20 h-0.5 bg-gradient-to-r from-amber-500 via-slate-300 to-blue-500 relative overflow-hidden rounded-full">
                    <motion.div
                      className="absolute inset-0 bg-white/50"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500 ml-1 lg:ml-2" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
