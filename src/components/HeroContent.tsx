import React from "react";
import { motion } from "motion/react";

interface HeroContentProps {
  onJoinClick?: () => void;
  onViewClick?: () => void;
}

export default function HeroContent({ onJoinClick, onViewClick }: HeroContentProps) {
  return (
    <div id="hero-content-container" className="flex flex-col justify-end h-full max-w-3xl pb-16 md:pb-24 pointer-events-auto">
      {/* Subtitle / Micro-indicator */}
      <motion.div
        id="hero-subtitle-pill"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center gap-2.5 mb-5"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="font-sans text-xs md:text-sm font-medium tracking-widest text-white/95 uppercase">
          Crafted for Elevated Living
        </span>
      </motion.div>

      {/* Main Hero Headline */}
      <motion.h1
        id="hero-main-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.1] mb-6 select-none"
      >
        Built for Those<br />
        Who Choose Peace<br />
        Over Chaos
      </motion.h1>

      {/* Elegant Sub-description copy */}
      <motion.p
        id="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-lg mb-8 md:mb-10 selection:bg-white selection:text-black"
      >
        Escape the rush of crowded streets and discover a private society designed for calm mornings, open views, and a more meaningful way of living.
      </motion.p>

      {/* Action CTA Buttons */}
      <motion.div
        id="hero-cta-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="flex flex-wrap items-center gap-4"
      >
        <motion.button
          id="btn-join-society"
          onClick={onJoinClick}
          whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileTap={{ scale: 0.98 }}
          className="font-sans text-sm font-semibold text-neutral-900 px-7 py-3 rounded-full bg-white/95 border border-white shadow-[0_4px_24px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer"
        >
          Join society
        </motion.button>

        <motion.button
          id="btn-view-residences"
          onClick={onViewClick}
          whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="font-sans text-sm font-semibold text-white px-7 py-3 rounded-full bg-transparent border border-white/25 backdrop-blur-md transition-all duration-300 cursor-pointer"
        >
          View Residences
        </motion.button>
      </motion.div>
    </div>
  );
}
