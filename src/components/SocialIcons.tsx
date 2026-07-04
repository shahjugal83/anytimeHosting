"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/anytimehost", gradient: "from-amber-400 via-pink-500 to-purple-600" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/@anytimehost", gradient: "from-red-500 to-red-700" },
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/hostingAnyTime", gradient: "from-blue-500 to-blue-700" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/anytimehost", gradient: "from-blue-600 to-blue-800" },
  { name: "Phone", icon: FaPhone, href: "tel:+91-851-141-5595", gradient: "from-orange-400 to-orange-600" },
  { name: "Email", icon: FaEnvelope, href: "mailto:anytimehost@gmail.com?subject=Website%20Inquiry%20-%20AnyTimeHost&body=Hi%20AnyTimeHost%20team%2C%0A%0AI%27m%20interested%20in%20your%20website%20services.%0A%0ASolution%20you%20needed%3A%20%5BPlease%20describe%20what%20type%20of%20website%20solution%20you%27re%20looking%20for%5D%0A%0APlease%20contact%20me%20at%20%2B91-851-141-5595.%0A%0AThanks%21%0A%0A%E2%80%94%20%5BYour%20name%5D", gradient: "from-green-400 to-green-600" },
];

export default function SocialIcons({ subText }: { subText?: string }) {
  return (
    <section id="socials" className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 xs:px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,60vw)] h-[min(200px,30vh)] bg-gradient-to-r from-amber-500/10 to-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 relative"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Follow Us</span>
      </motion.h2>

      {subText && (
        <p className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-base text-slate-400 text-center mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 relative">{subText}</p>
      )}

      <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 relative">
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
            aria-label={social.name}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            <div className={`relative w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
              <social.icon className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
