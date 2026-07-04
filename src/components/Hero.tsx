"use client";

import { motion } from "framer-motion";

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-40"
      initial={{ opacity: 0, y: 0, x: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: [-50, -150],
        x: [0, 30, -30],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function Hero() {

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]">
        <motion.div
          className="absolute top-[10%] left-[10%] w-[clamp(200px,40vw,384px)] h-[clamp(200px,40vw,384px)] bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full blur-[clamp(60px,15vw,120px)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[clamp(160px,35vw,320px)] h-[clamp(160px,35vw,320px)] bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-full blur-[clamp(50px,12vw,100px)]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,50vw,500px)] h-[clamp(300px,50vw,500px)] bg-gradient-to-r from-amber-500/10 via-blue-600/10 to-amber-500/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {[...Array(6)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.8} />
        ))}
      </div>



      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-[clamp(1.75rem,5vw,3.75rem)] font-bold text-center max-w-[min(90vw,768px)] px-2 relative z-10 leading-[1.1]"
      >
        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          Launching Your Dream Website
        </span>
        <br />
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          is Now Easier Than Ever…
        </span>
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const el = document.getElementById('socials');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // briefly focus for accessibility
            (el as HTMLElement).focus?.();
          }
        }}
        className="mt-8 sm:mt-10 lg:mt-12 px-6 sm:px-10 lg:px-14 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-[#0a1628] font-bold rounded-full shadow-lg shadow-amber-500/30 cursor-pointer relative z-10"
      >
        Start Today!
      </motion.button>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-10 sm:mt-14 lg:mt-16 relative z-10"
      >
        <div className="w-6 sm:w-7 h-10 sm:h-12 border-2 border-amber-400/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-amber-400/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
