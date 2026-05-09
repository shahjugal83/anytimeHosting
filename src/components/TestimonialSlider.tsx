"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "AnyTimeHost made my dream website a reality!", author: "John D." },
  { quote: "Best hosting service I've ever used.", author: "Sarah M." },
  { quote: "Incredible support and fast servers.", author: "Mike R." },
  { quote: "My business grew 10x after the website launch.", author: "Emily K." },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gray-900 py-12 sm:py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        <div className="overflow-hidden min-h-[120px] sm:min-h-[150px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center w-full px-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">&ldquo;{testimonials[current].quote}&rdquo;</p>
              <p className="text-orange-500 font-semibold text-sm sm:text-base">- {testimonials[current].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl"
          >
            →
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              animate={{ scale: current === index ? 1.5 : 1 }}
              className={`w-3 h-3 rounded-full ${current === index ? "bg-orange-500" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}