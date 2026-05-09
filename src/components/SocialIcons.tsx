"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/anytimehost", color: "hover:text-pink-500" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/@anytimehost", color: "hover:text-red-500" },
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/hostingAnyTime", color: "hover:text-sky-400" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/anytimehost", color: "hover:text-blue-500" },
];

export default function SocialIcons() {
  return (
    <section className="bg-black py-10 sm:py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-10"
      >
        Follow Us
      </motion.h2>

      <div className="flex justify-center gap-4 sm:gap-8">
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
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <social.icon className={`text-2xl sm:text-3xl text-white ${social.color} transition-colors`} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}