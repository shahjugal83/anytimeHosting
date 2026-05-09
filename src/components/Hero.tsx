"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 sm:mb-6"
      >
        <Image src="/logo.png" alt="AnyTimeHost Logo" width={200} height={80} className="h-auto w-auto" priority />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center max-w-3xl px-2"
      >
        Launching Your Dream Website is Now Easier Than Ever…
      </motion.h1>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/contact")}
        className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/30 cursor-pointer"
      >
        Start Today!
      </motion.button>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 sm:mt-12"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}