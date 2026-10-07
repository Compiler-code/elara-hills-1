import React from "react";
import { ArrowRight, Compass, Ruler, Home } from "lucide-react";

interface ResidencesSectionProps {
  onRequestBrochure: (residenceName: string) => void;
}

const RESIDENCES = [
  {
    id: "ridge-villa",
    name: "The Promontory Ridge Villa",
    location: "High Peak Area 4",
    area: "6,200 SQ FT",
    rooms: "5 Beds / 6.5 Baths",
    elevation: "7,400 FT ELEV.",
    desc: "Perched atop the highest granite crest of Elara Hills, featuring cantilevered glass decks that float directly over the mountain treeline.",
    features: ["Basalt Heated Deck", "Cantilevered Living", "Private Elevators"]
  },
  {
    id: "lakehouse",
    name: "The Lakehouse Sanctuary",
    location: "Bay Shoreline 12",
    area: "4,850 SQ FT",
    rooms: "4 Beds / 4.5 Baths",
    elevation: "4,120 FT ELEV.",
    desc: "A direct lakeside structure integrated with the calm waters, featuring a private indoor-outdoor boat slip and automated timber docks.",
    features: ["Deep Water Slip", "Hydrothermal Heat", "Shoreline Access"]
  },
  {
    id: "canopy-lodge",
    name: "The Forest Canopy Retreat",
    location: "Whispering Redwoods 8",
    area: "3,900 SQ FT",
    rooms: "3 Beds / 3.5 Baths",
    elevation: "5,800 FT ELEV.",
    desc: "A structural masterpiece built on isolated support pillars, suspended harmoniously within the crowns of centuries-old coastal redwoods.",
    features: ["Pillar Foundation", "Observatory Dome", "Suspended Walkways"]
  }
];

export default function ResidencesSection({ onRequestBrochure }: ResidencesSectionProps) {
  return (
    <section id="residences-section" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Header Block */}
        <div className="max-w-2xl text-center space-y-4 mb-16 md:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Architectural Collection
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Residences of Elara
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
            Spaces designed to draw attention outward, not inward. Our materials are limited to raw gray granite, charred slate cladding, and local hand-cut western cedar.
          </p>
        </div>

        {/* Centered 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {RESIDENCES.map((residence) => (
            <div 
              key={residence.id}
              className="flex flex-col justify-between p-7 bg-neutral-950/60 hover:bg-neutral-950 border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300 text-center items-center group"
            >
              <div className="w-full flex flex-col items-center space-y-4">
                {/* Meta details bar */}
                <div className="flex items-center justify-center gap-3 text-[10px] uppercase font-mono text-neutral-500 tracking-wider">
                  <span>{residence.location}</span>
                  <span className="text-white/20">•</span>
                  <span>{residence.elevation}</span>
                </div>

                <h3 className="font-sans font-semibold text-xl text-white tracking-tight">
                  {residence.name}
                </h3>

                {/* Specs pill */}
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">
                  <span>{residence.area}</span>
                  <span className="text-white/20">|</span>
                  <span>{residence.rooms}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-xs">
                  {residence.desc}
                </p>

                {/* Features chips */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                  {residence.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="px-2.5 py-1 rounded-full bg-white/4 border border-white/5 text-[10px] text-neutral-400 tracking-tight"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full pt-6 border-t border-white/5 mt-6">
                <button
                  type="button"
                  onClick={() => onRequestBrochure(residence.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-white uppercase tracking-wider transition-all cursor-pointer border border-white/5 hover:border-white/20"
                >
                  <span>Request Plan &amp; Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
