import React from "react";
import { motion } from "motion/react";
import { Flame, Waves, Shield, Sparkles } from "lucide-react";

const AMENITIES = [
  {
    icon: <Flame className="w-5 h-5 text-amber-300" />,
    title: "Thermal Mineral Springs",
    tagline: "Natural Geothermal Pools",
    desc: "A series of outdoor carved granite pools drawing therapeutic mineral water directly from volcanic fault lines below the foothills, positioned at lake-face."
  },
  {
    icon: <Waves className="w-5 h-5 text-sky-300" />,
    title: "Shoreline Basin Harbor",
    tagline: "Private Jetty Basin",
    desc: "A completely shielded harbor strictly restricted to traditional non-emissions mahogany launches, sailing vessels, and electric hydrofoils."
  },
  {
    icon: <Shield className="w-5 h-5 text-emerald-300" />,
    title: "Seclusion Boundary Rings",
    tagline: "Meticulous Privacy",
    desc: "A perimeter including natural land ravines, biometric access keys, and remote camera-less sensor perimeters, restricting access solely to cleared residents."
  }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities-section" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Header */}
        <div className="max-w-2xl text-center mb-16 md:mb-20 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Exclusive Infrastructure
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Common Ground
          </h2>

          <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
            The private amenities of Elara Hills are strictly communal properties, owned equally by all homeowners to ensure perpetual quality control and quiet enjoyment.
          </p>
        </div>

        {/* Centered Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
          {AMENITIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono font-medium block mb-2">
                {item.tagline}
              </span>

              <h3 className="font-sans font-semibold text-lg text-white tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
