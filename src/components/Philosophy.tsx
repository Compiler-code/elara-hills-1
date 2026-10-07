import React from "react";
import { motion } from "motion/react";

export default function Philosophy() {
  const pillars = [
    {
      number: "01",
      title: "Quietude First",
      desc: "Deliberate covenants strictly limiting motorized machinery to elevate the sound of wind, redwood boughs, and lake ripples."
    },
    {
      number: "02",
      title: "Lakeside Sanctuaries",
      desc: "Direct private shoreline access where residences settle naturally into cold alpine waters with zero disturbance to native stone."
    },
    {
      number: "03",
      title: "Conserved Wilderness",
      desc: "Over 75% of the historic foothills remain forever unbuilt, protected under perpetuity covenants and shared ecological stewardship."
    },
    {
      number: "04",
      title: "Zero Light Pollution",
      desc: "Strict absence of commercial illumination or thoroughfare glare, preserving celestial clarity and natural circadian stillness."
    }
  ];

  return (
    <section id="philosophy-section" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Centered Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
            The Founding Covenant
          </span>
        </motion.div>

        {/* Centered Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-[1.15] mb-6"
        >
          Restoring what density destroyed.
        </motion.h2>

        {/* Centered Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mb-16 md:mb-20"
        >
          Our guidelines reject rapid suburban sprawl. Every structure, pathway, and dock in Elara Hills is placed into the natural contours to safeguard the ancient trees and silent skies.
        </motion.p>

        {/* Centered 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full text-center">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <span className="text-xs font-mono text-neutral-500 mb-4 tracking-widest block group-hover:text-white transition-colors">
                [{pillar.number}]
              </span>
              <h3 className="font-sans font-medium text-base text-white tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
