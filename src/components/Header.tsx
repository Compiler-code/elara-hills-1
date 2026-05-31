import React from "react";
import { motion } from "motion/react";

interface HeaderProps {
  onNavClick?: (item: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const navItems = ["Home", "About", "Residences", "Amenities", "Gallery"];

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between pointer-events-auto">
      {/* Logo */}
      <motion.div 
        id="logo-container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onNavClick?.("Home")}
      >
        <svg 
          id="elara-mountain-logo"
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          className="text-white fill-none stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Subtle elegant mountain design with peaks */}
          <path d="M4 26 L14 11 L21 21 L28 11 L31 16" />
          <path d="M11 26 L18 16 L22 22" strokeWidth="1" opacity="0.7" />
          <path d="M4 26 L28 26" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        </svg>
        <span id="logo-text" className="font-sans font-semibold text-xl tracking-wide text-white">
          Elara Hills
        </span>
      </motion.div>

      {/* Navigation & Action Button CONTAINER */}
      <div className="flex items-center gap-6 lg:gap-12">
        {/* Navigation items - aligned to center-right */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              id={`nav-${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.08 }}
              onClick={() => onNavClick?.(item)}
              className="font-sans text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative py-1 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 hover:w-full group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        {/* Enter Society CTA Button */}
        <motion.button
          id="btn-enter-society"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ 
            scale: 1.03,
            backgroundColor: "rgba(255, 255, 255, 0.22)",
            borderColor: "rgba(255, 255, 255, 0.45)"
          }}
          whileTap={{ scale: 0.98 }}
          className="font-sans text-sm font-medium text-white px-5 py-2.5 rounded-full bg-white/12 border border-white/25 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-colors duration-300 cursor-pointer"
          onClick={() => onNavClick?.("Enter Society")}
        >
          Enter Society
        </motion.button>
      </div>
    </header>
  );
}
