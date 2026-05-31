import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  MapPin, 
  Sparkles, 
  Image as ImageIcon, 
  Maximize2, 
  Upload, 
  ArrowRight, 
  Check, 
  Compass, 
  Sliders, 
  ShieldCheck, 
  Eye, 
  RotateCcw,
  TreePine,
  TrendingUp,
  Waves
} from "lucide-react";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import StatsSection from "./components/StatsSection";

// High-fidelity curated presets so they can preview the "Elara Hills" visual feel in different moods!
const PRESETS = [
  {
    id: "solid-black",
    name: "Pure Black (Default)",
    url: "",
    theme: "dark",
    description: "Deep minimalist negative space"
  },
  {
    id: "elara-lake",
    name: "Sunny Forest Lake",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2600",
    theme: "light",
    description: "Matches the bright sunshine and lake reference"
  },
  {
    id: "misty-mountains",
    name: "Alpine Reflection",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2640",
    theme: "light",
    description: "Misty evergreen forest and quiet waters"
  },
  {
    id: "volcanic-peaks",
    name: "Obsidian Twilight",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2600",
    theme: "dark",
    description: "Moody dramatic mountain sunset"
  }
];

export default function App() {
  // Background State
  const [bgImage, setBgImage] = useState<string>("");
  const [activePreset, setActivePreset] = useState<string>("solid-black");
  const [isDragging, setIsDragging] = useState(false);

  // Overlay Settings / Protection
  const [showVignette, setShowVignette] = useState(true);
  const [showSunFlare, setShowSunFlare] = useState(true);
  const [showBottomProtection, setShowBottomProtection] = useState(true);
  const [exposure, setExposure] = useState(40); // 0-100 opacity overlay

  // Control Drawer State
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Popups & Application Modals
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Application Form Inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });

  // Load background from localStorage if present
  useEffect(() => {
    const savedBg = localStorage.getItem("elara-background");
    const savedPreset = localStorage.getItem("elara-preset");
    if (savedBg) {
      setBgImage(savedBg);
      if (savedPreset) setActivePreset(savedPreset);
    }
  }, []);

  const saveBackgroundState = (url: string, presetId: string) => {
    setBgImage(url);
    setActivePreset(presetId);
    if (url) {
      localStorage.setItem("elara-background", url);
      localStorage.setItem("elara-preset", presetId);
    } else {
      localStorage.removeItem("elara-background");
      localStorage.removeItem("elara-preset");
    }
  };

  // Drag and drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            const dataUrl = event.target.result as string;
            saveBackgroundState(dataUrl, "custom");
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const dataUrl = event.target.result as string;
          saveBackgroundState(dataUrl, "custom");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearCustomBackground = () => {
    saveBackgroundState("", "solid-black");
  };

  // Submission handler
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInvitationRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setShowJoinModal(false);
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", notes: "" });
      // Clean system toast/message trigger
    }, 2500);
  };

  return (
    <div 
      id="app-root-container" 
      className="w-full h-screen min-h-screen relative overflow-hidden bg-black text-white select-none transition-colors duration-500"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Background Images Layer */}
      <div id="dynamic-bg-container" className="absolute inset-0 w-full h-full z-0 transition-all duration-700 pb-1">
        {/* Solid Black Canvas Cover */}
        <div className="absolute inset-0 bg-black z-0" />

        {/* Dynamic Image Element */}
        {bgImage && (
          <motion.div
            key={bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center select-none"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}

        {/* Exposure Control overlay to darken background to maintain high typography readable contrast */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none" 
          style={{ opacity: bgImage ? exposure / 100 : 0 }} 
        />

        {/* Option 1: Light Sun Flare from corner as seen in the top right of reference image */}
        {bgImage && showSunFlare && (
          <div 
            id="vibe-sun-flare" 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-[140px] pointer-events-none z-1" 
          />
        )}

        {/* Option 2: Elegant Vignette Shadow around corners to draw focus */}
        {showVignette && (
          <div 
            id="vibe-vignette" 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-1" 
          />
        )}

        {/* Option 3: Heavy Bottom-protection shadow gradient to anchor the text items */}
        {showBottomProtection && (
          <div 
            id="vibe-bottom-gradient" 
            className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-1" 
          />
        )}
      </div>

      {/* Drag & Drop Overlay Indicator */}
      <AnimatePresence>
        {isDragging && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-8 border-4 border-dashed border-white/20 m-4 rounded-2xl"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <Upload className="w-16 h-16 text-white mb-4 stroke-[1.25]" />
              <h2 className="text-3xl font-display font-medium text-white mb-2 tracking-tight">Set Elara Hills Backdrop</h2>
              <p className="text-white/60 text-sm max-w-md text-center">
                Release your image file anywhere on the screen to apply it instantly. Recommended high resolution landscape scenes.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main UI layout inside container with correct maximum grid widths */}
      <div className="w-full h-full relative z-10 flex flex-col justify-between pointer-events-none">
        
        {/* Header - Pixel-perfect layout boundaries matching reference image */}
        <Header onNavClick={(item) => {
          setActiveTab(item);
          if (item === "Enter Society" || item === "Residences") {
            setShowJoinModal(true);
          } else {
            // Smoothly display tabs or reset
          }
        }} />

        {/* Main body content section: perfectly split layout on big screens */}
        <main className="w-full flex-grow px-6 md:px-12 lg:px-24 flex items-end">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:items-end gap-12 lg:gap-8 min-h-[55%]">
            
            {/* Left Box: Hero text information and CTAs */}
            <div className="flex items-end">
              <HeroContent 
                onJoinClick={() => setShowJoinModal(true)} 
                onViewClick={() => {
                  setActiveTab("Residences");
                  setShowJoinModal(true);
                }} 
              />
            </div>

            {/* Right Box: Bottom Right Stats Aligned */}
            <div className="flex items-end justify-start lg:justify-end pb-1 inline-block">
              <StatsSection />
            </div>

          </div>
        </main>
      </div>

      {/* Interactive Global Theme & Background Customizer Drawer Control (Subtle floating button bottom-left) */}
      <div className="absolute bottom-6 left-6 z-40 pointer-events-auto">
        <motion.div className="flex items-center gap-2">
          <motion.button
            id="btn-open-customizer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex items-center gap-2 bg-black/40 border border-white/15 backdrop-blur-md px-4 py-2 rounded-full text-xs text-white/90 hover:text-white transition-all cursor-pointer shadow-lg"
            title="Design Customizer & Test Backdrop"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Backdrop</span>
            {activePreset !== "solid-black" && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Control Drawer Container */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop click dismisses */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-black/20 z-30 pointer-events-auto"
            />

            <motion.div
              id="customizer-panel"
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute top-0 left-0 h-full w-[310px] sm:w-[340px] bg-neutral-950/95 border-r border-white/10 z-40 p-6 flex flex-col justify-between overflow-y-auto pointer-events-auto shadow-[10px_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 text-amber-300" />
                    <h3 className="font-display font-medium text-lg leading-none">Layout Workspace</h3>
                  </div>
                  <button 
                    onClick={() => setDrawerOpen(false)} 
                    className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Info Card */}
                <div className="bg-white/5 rounded-xl p-3.5 mb-6 text-[12px] leading-relaxed text-white/70 border border-white/5">
                  <p className="font-medium text-white mb-1">💡 Interactive Backdrop</p>
                  As requested, the default is <strong className="text-white">pure black</strong>. Test your custom landscape image anytime with drag-and-drop or select a nature preset below!
                </div>

                {/* Section: Upload */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-white/50 block mb-3 font-semibold">
                    Upload Custom Image
                  </span>
                  <label className="flex flex-col items-center justify-center border border-dashed border-white/15 hover:border-white/35 bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/8 transition-all group">
                    <Upload className="w-5 h-5 text-white/50 group-hover:text-white mb-2 transition-colors" />
                    <span className="text-xs text-white/80 font-medium select-none group-hover:text-white">Choose Image File</span>
                    <span className="text-[10px] text-white/40 mt-1 select-none">or Drag &amp; Drop here</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                      className="hidden" 
                    />
                  </label>
                  {bgImage && activePreset === "custom" && (
                    <button
                      onClick={clearCustomBackground}
                      className="mt-2.5 flex items-center justify-center gap-1.5 w-full text-center text-xs text-rose-400 hover:text-rose-300 p-2 rounded-lg bg-rose-500/10 border border-rose-500/10 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Clear custom image
                    </button>
                  )}
                </div>

                {/* Section: Curated Presets */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-white/50 block mb-3 font-semibold">
                    Preset Atmospheres
                  </span>
                  <div className="space-y-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p.id}
                        id={`preset-btn-${p.id}`}
                        onClick={() => saveBackgroundState(p.url, p.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          activePreset === p.id 
                            ? "bg-white/10 border-white/30 shadow-md" 
                            : "bg-white/2 border-transparent hover:bg-white/5"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-white select-none">{p.name}</span>
                          <span className="text-[10px] text-white/50 select-none mt-0.5">{p.description}</span>
                        </div>
                        {activePreset === p.id && (
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section: Atmospheric Details Controls */}
                {bgImage && (
                  <div className="mb-6 space-y-4 pt-1">
                    <span className="text-xs uppercase tracking-widest text-white/50 block mb-1 font-semibold">
                      Fine-Tuning Filters
                    </span>
                    
                    {/* Exposure Control */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium select-none text-white/70">
                        <span>Black Overlay (Exposure)</span>
                        <span className="font-mono">{exposure}%</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="90"
                        value={exposure}
                        onChange={(e) => setExposure(Number(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    {/* Vignette Toggle */}
                    <label className="flex items-center justify-between p-2.5 bg-white/3 rounded-xl cursor-pointer hover:bg-white/6 transition-colors select-none">
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-medium">Corner Vignette Shadow</span>
                        <span className="text-[10px] text-white/40">Soft focus darkening effect</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={showVignette}
                        onChange={(e) => setShowVignette(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-0 text-neutral-800 accent-white cursor-pointer"
                      />
                    </label>

                    {/* Bottom Protection Toggle */}
                    <label className="flex items-center justify-between p-2.5 bg-white/3 rounded-xl cursor-pointer hover:bg-white/6 transition-colors select-none">
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-medium">Text Protection Gradient</span>
                        <span className="text-[10px] text-white/40">Bottom shadow for extreme contrast</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={showBottomProtection}
                        onChange={(e) => setShowBottomProtection(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-0 text-neutral-800 accent-white cursor-pointer"
                      />
                    </label>

                    {/* Sun Flare Toggle */}
                    <label className="flex items-center justify-between p-2.5 bg-white/3 rounded-xl cursor-pointer hover:bg-white/6 transition-colors select-none">
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-medium">Golden Hour Sun Flare</span>
                        <span className="text-[10px] text-white/40">Top right realistic ambient light</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={showSunFlare}
                        onChange={(e) => setShowSunFlare(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-0 text-neutral-800 accent-white cursor-pointer"
                      />
                    </label>
                  </div>
                )}
              </div>

              {/* Drawer footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Interactive Elara Hills Prototype v1.0</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Invitation Join Society Modal Overlay */}
      <AnimatePresence>
        {showJoinModal && (
          <div id="modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl pointer-events-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg bg-neutral-950 border border-white/15 rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] outline-none"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowJoinModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-left">
                {/* Logo & Invitation Label */}
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Request Private Access
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                  Elara Hills Society
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {activeTab === "Residences" ? (
                    "Enter your information below to acquire luxury brochures, private resident pricing arrays, and structural residence schedules."
                  ) : (
                    "Enter your secure credentials to request registration. Membership is strictly limited to ensure tranquil communal integrity."
                  )}
                </p>

                {/* Subtitle list of perks to keep visual design elite */}
                <div className="grid grid-cols-2 gap-3 mb-8 bg-white/3 p-4 rounded-xl border border-white/5 text-[12px]">
                  <div className="flex items-center gap-2 text-white/80">
                    <TreePine className="w-4 h-4 text-emerald-400" />
                    <span>75% Open Nature</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Waves className="w-4 h-4 text-sky-400" />
                    <span>Lakeside Living</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>Private Community</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <TrendingUp className="w-4 h-4 text-rose-400" />
                    <span>Select Invitation Only</span>
                  </div>
                </div>

                {/* Main Form */}
                {!isSubmitted ? (
                  <form onSubmit={handleInvitationRequest} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g., Sterling Sterling" 
                        className="w-full bg-white/5 hover:bg-white/8 focus:bg-white/10 border border-white/10 focus:border-white/30 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g., name@example.com" 
                        className="w-full bg-white/5 hover:bg-white/8 focus:bg-white/10 border border-white/10 focus:border-white/30 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-white/5 hover:bg-white/8 focus:bg-white/10 border border-white/10 focus:border-white/30 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 font-sans"
                      />
                    </div>
                    <div className="pt-2">
                      <motion.button
                        id="btn-submit-invitation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors cursor-pointer"
                      >
                        Request Society Invitation
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="font-display font-medium text-xl mb-1">Invitation Request Logged</h4>
                    <p className="text-sm text-white/60">
                      The Elara Hills Selection Committee will finalize verification and reach out within 48 business hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
