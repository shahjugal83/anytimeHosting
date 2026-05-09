"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/anytimehost", gradient: "from-amber-400 via-pink-500 to-purple-600" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/@anytimehost", gradient: "from-red-500 to-red-700" },
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/hostingAnyTime", gradient: "from-blue-500 to-blue-700" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/anytimehost", gradient: "from-blue-600 to-blue-800" },
];

export default function SocialIcons() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,60vw)] h-[min(200px,30vh)] bg-gradient-to-r from-amber-500/10 to-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 relative"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Follow Us</span>
      </motion.h2>

      <div className="flex justify-center gap-4 sm:gap-6 lg:gap-10 relative">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            <div className={`relative w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
              <social.icon className="text-xl sm:text-2xl lg:text-3xl text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
