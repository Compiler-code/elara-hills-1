import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Sunrise, Sunset, Clock } from "lucide-react";

const RHYTHMS = [
  {
    id: "dawn",
    time: "06:00 HRS",
    title: "Dawn Over the Lake",
    tagline: "The Alpine Awakening",
    desc: "A layer of cool mountain mist rests across the glassy basin. The silence is broken only by the sound of native trout jumping and the soft splash of wooden oars.",
    highlight: "Fog lifts over granite ridges; zero motor wakes permitted."
  },
  {
    id: "noon",
    time: "12:30 HRS",
    title: "Meridian Canopy",
    tagline: "Light Through Redwoods",
    desc: "High alpine sunlight filters through centuries-old western redwoods. The air warms with natural cedar terpenes as residents read on cantilevered decks or dip into thermal mineral waters.",
    highlight: "Natural shade canopy keeps summer temperatures 12° cooler than the valley."
  },
  {
    id: "dusk",
    time: "18:45 HRS",
    title: "The Golden Slant",
    tagline: "Granite Reflections",
    desc: "The sun descends behind the High Peaks, turning the rock face into radiant amber and violet. Cedar chimneys begin to release fragrant mountain smoke into the stillness.",
    highlight: "Direct western sunset exposure from all 48 residence sites."
  },
  {
    id: "night",
    time: "22:00 HRS",
    title: "The Dark Sky Vault",
    tagline: "Total Celestial Clarity",
    desc: "Under our permanent Class 1 Dark Sky Covenant, all exterior illumination remains strictly below horizontal cutoffs. The Milky Way stretches unbroken from peak to peak.",
    highlight: "Zero commercial light bleed; over 4,000 stars visible to the unaided eye."
  }
];

export default function DailyRhythmSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="rhythm-section" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Centered Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <Clock className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
            Chronology of Stillness
          </span>
        </div>

        {/* Centered Main Title */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          A Day in Elara Hills
        </h2>

        {/* Centered Subtitle */}
        <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl mb-14">
          Time moves differently when the noise of the world is removed. Experience how light, water, and quiet frame each hour of the mountain day.
        </p>

        {/* Time Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-12">
          {RHYTHMS.map((r, idx) => (
            <button
              key={r.id}
              onClick={() => setActiveTab(idx)}
              className={`flex flex-col items-center justify-center py-4 px-3 rounded-2xl border transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-white/10 border-white/30 text-white shadow-lg"
                  : "bg-white/2 border-white/5 text-neutral-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="font-mono text-xs tracking-wider mb-1">
                {r.time}
              </span>
              <span className="font-sans text-xs font-medium">
                {r.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Rhythm Card */}
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col items-center text-center space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                <span>{RHYTHMS[activeTab].time}</span>
                <span className="text-white/20">•</span>
                <span>{RHYTHMS[activeTab].tagline}</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {RHYTHMS[activeTab].title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
                {RHYTHMS[activeTab].desc}
              </p>

              <div className="pt-4 border-t border-white/5 w-full">
                <p className="text-xs font-mono text-neutral-400">
                  ✦ {RHYTHMS[activeTab].highlight}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
