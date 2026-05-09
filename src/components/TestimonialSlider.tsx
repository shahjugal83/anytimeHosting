"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AnyTimeHost made my dream website a reality! The process was seamless and the team was incredibly supportive.",
    author: "John D.",
    role: "Entrepreneur",
  },
  {
    quote: "Best hosting service I've ever used. Fast servers, excellent uptime, and amazing support team.",
    author: "Sarah M.",
    role: "Startup Founder",
  },
  {
    quote: "Incredible support and fast servers. My e-commerce site has never run better.",
    author: "Mike R.",
    role: "Store Owner",
  },
  {
    quote: "My business grew 10x after the website launch. The social ads campaign was a game changer!",
    author: "Emily K.",
    role: "Business Owner",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,80vw)] h-[min(400px,50vh)] bg-gradient-to-r from-amber-500/10 via-slate-400/10 to-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16 relative"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">What Our Clients Say</span>
      </motion.h2>

      <div className="max-w-[min(90vw,768px)] mx-auto relative">
        <div className="relative min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex items-center justify-center">
          <div className="absolute top-0 left-0 sm:left-4 text-amber-500/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center px-4 sm:px-6 lg:px-8 relative z-10"
            >
              <p className="text-sm sm:text-lg lg:text-2xl text-white mb-4 sm:mb-6 leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-[#0a1628] font-bold text-lg sm:text-xl">
                  {testimonials[current].author.charAt(0)}
                </div>
                <p className="text-amber-400 font-semibold text-sm sm:text-base lg:text-lg">{testimonials[current].author}</p>
                <p className="text-slate-400 text-xs sm:text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-500/30 text-white rounded-full flex items-center justify-center hover:border-amber-500/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 text-[#0a1628] rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </motion.button>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              animate={{
                scale: current === index ? 1.5 : 1,
                opacity: current === index ? 1 : 0.4,
              }}
              className={`h-1.5 sm:h-2 rounded-full cursor-pointer ${current === index ? "bg-amber-500 w-4 sm:w-6" : "bg-slate-500 w-1.5 sm:w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
