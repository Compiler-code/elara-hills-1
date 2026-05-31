import React from "react";
import { motion } from "motion/react";

export default function StatsSection() {
  const stats = [
    {
      value: "24/7",
      label: "Private Community Access"
    },
    {
      value: "75%",
      label: "Green Open Space"
    }
  ];

  return (
    <div id="stats-section-container" className="flex items-end justify-end w-full pb-16 md:pb-24 pointer-events-auto">
      <div className="flex gap-10 sm:gap-16 md:gap-24">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            id={`stat-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 + index * 0.15 }}
            className="flex flex-col text-left"
          >
            {/* Large high-impact bold stat value */}
            <span className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-none mb-2">
              {stat.value}
            </span>
            {/* Balanced lowercase / simple explanation labels */}
            <span className="font-sans text-[11px] sm:text-xs md:text-sm font-normal text-white/70 max-w-[140px] leading-snug">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
