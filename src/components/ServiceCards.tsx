"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Monitor, Megaphone } from "lucide-react";

const services = [
  { icon: Globe, title: "Domain", desc: "Get your perfect domain name", gradient: "from-amber-400 via-amber-500 to-amber-600" },
  { icon: Rocket, title: "Hosting", desc: "Fast & reliable hosting", gradient: "from-blue-500 via-blue-600 to-blue-700" },
  { icon: Monitor, title: "Website", desc: "Build your dream website", gradient: "from-slate-300 via-slate-400 to-slate-500" },
  { icon: Megaphone, title: "Ads", desc: "Reach more customers", gradient: "from-amber-500 to-blue-500" },
];

export default function ServiceCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,80vw)] h-[min(400px,50vh)] bg-gradient-to-b from-amber-500/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-t from-blue-600/10 to-transparent rounded-full blur-[80px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Our Services
        </span>
      </motion.h2>

      <div className="max-w-[min(90vw,1200px)] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 relative">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#0f1d32]/90 to-[#0a1628]/40 backdrop-blur-xl border border-amber-500/20 p-4 sm:p-6 lg:p-8 rounded-2xl text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 sm:p-3 lg:p-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <service.icon className="w-full h-full text-[#0a1628]" strokeWidth={2} />
              </motion.div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm lg:text-base">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
