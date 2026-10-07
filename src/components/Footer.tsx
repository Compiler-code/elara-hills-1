import React from "react";
import { ShieldCheck, Compass } from "lucide-react";

interface FooterProps {
  onJoinClick?: () => void;
}

export default function Footer({ onJoinClick }: FooterProps) {
  return (
    <footer id="elara-footer" className="w-full bg-black border-t border-white/5 relative z-10 text-white py-16 md:py-20 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        
        {/* Brand logo & name centered */}
        <div 
          className="flex flex-col items-center gap-3 cursor-pointer mb-8 group" 
          onClick={() => {
            const root = document.getElementById("app-root-container");
            root?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg 
            id="elara-mountain-logo-footer"
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            className="text-white fill-none stroke-current group-hover:scale-105 transition-transform"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 26 L14 11 L21 21 L28 11 L31 16" />
            <path d="M11 26 L18 16 L22 22" strokeWidth="1" opacity="0.7" />
          </svg>
          <span className="font-sans font-semibold text-lg tracking-widest uppercase text-white">
            Elara Hills
          </span>
          <span className="text-xs font-mono text-neutral-500 tracking-wider">
            Alpine Society &amp; Foothill Sanctuaries
          </span>
        </div>

        {/* Core attributes chips centered */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-400 font-mono mb-10">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
            <span>Ecological Deed Registry</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-neutral-500" />
            <span>Private Boundary Covenants</span>
          </div>
          <span className="text-white/20">•</span>
          <div>Elevation 7,400 FT</div>
        </div>

        {/* Bottom copyright & simple linkages centered */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Elara Hills Society. All Covenants Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              type="button"
              onClick={onJoinClick} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Request Access Prospectus
            </button>
            <button 
              type="button"
              onClick={onJoinClick} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Homeowner Covenants
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
