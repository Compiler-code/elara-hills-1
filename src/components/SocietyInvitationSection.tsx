import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface SocietyInvitationSectionProps {
  onJoinClick: () => void;
}

export default function SocietyInvitationSection({ onJoinClick }: SocietyInvitationSectionProps) {
  return (
    <section id="invitation-section" className="w-full py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium">
            Strict Allocation Limit: 48 Estates
          </span>
        </motion.div>

        {/* Centered Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-2xl leading-[1.1] mb-6"
        >
          A Private Legacy for Generations to Come
        </motion.h2>

        {/* Centered Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-xl mb-10"
        >
          To maintain eternal peace, density caps are irrevocably deed-restricted. Inquire now to inspect the remaining site parcels and structural schedules.
        </motion.p>

        {/* Centered CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            type="button"
            onClick={onJoinClick}
            className="font-sans text-sm font-semibold text-black px-8 py-4 rounded-full bg-white hover:bg-neutral-100 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-[0_4px_30px_rgba(255,255,255,0.15)] group"
          >
            <span>Request Society Prospectus</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Summary Line */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 pt-10 border-t border-white/5 w-full text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight mb-1">
              75%
            </div>
            <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
              Forever Conserved
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight mb-1">
              48
            </div>
            <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
              Total Capped Homes
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight mb-1">
              0 dB
            </div>
            <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
              Highway Intrusion
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight mb-1">
              Class 1
            </div>
            <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
              Dark Sky Reserve
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
