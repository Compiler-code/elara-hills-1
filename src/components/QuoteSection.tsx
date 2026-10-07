import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    id: 1,
    text: "We do not build to conquer the wilderness, but to remember how to listen to it.",
    author: "Arthur Vance",
    role: "Founding Architect & Fellow",
    year: "1964"
  },
  {
    id: 2,
    text: "Silence is not the empty space between things. It is the room where thought finally breathes.",
    author: "Elena Rostova",
    role: "Resident Botanist & Essayist",
    year: "1982"
  },
  {
    id: 3,
    text: "True luxury is what remains when you strip away every unnecessary sound, headline, and screen.",
    author: "David Sterling",
    role: "Master Plan Trustee",
    year: "2001"
  }
];

export default function QuoteSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="quote-section" className="w-full py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10 overflow-hidden">
      {/* Subtle ambient light glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Quote Glyph Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-neutral-400"
        >
          <Quote className="w-5 h-5 text-neutral-300" />
        </motion.div>

        {/* Dynamic Quote Text Container */}
        <div className="min-h-[170px] sm:min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <blockquote className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-light tracking-tight text-neutral-100 max-w-3xl leading-snug">
                "{QUOTES[activeIdx].text}"
              </blockquote>

              <div className="flex flex-col items-center space-y-1">
                <span className="font-sans font-medium text-sm text-white tracking-wide">
                  {QUOTES[activeIdx].author}
                </span>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {QUOTES[activeIdx].role} — {QUOTES[activeIdx].year}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote switch controls */}
        <div className="flex items-center gap-2.5 mt-10">
          {QUOTES.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View quote ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                activeIdx === idx 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
