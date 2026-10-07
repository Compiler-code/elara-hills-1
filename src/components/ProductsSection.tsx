import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: "living" | "hearth" | "provisions";
  edition: string;
  price: string;
  materials: string;
  desc: string;
  imageUrl: string;
}

interface ProductsSectionProps {
  onInquireProduct: (productName: string, price: string) => void;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "timber-lounger",
    name: "The Basin Timber Daybed",
    category: "living",
    edition: "Numbered Series of 12",
    price: "$4,200",
    materials: "Charred Western Cedar & Belgian Linen",
    desc: "Sculpted from sustainably fallen old-growth timber, engineered with weather-sealed joinery to rest lakeside year-round.",
    imageUrl: "/src/assets/images/timber_daybed_1791346250221.jpg"
  },
  {
    id: "obsidian-lantern",
    name: "Solstice Brass & Obsidian Lantern",
    category: "living",
    edition: "Society Standard",
    price: "$860",
    materials: "Solid Cast Brass & Smoked Basalt Glass",
    desc: "Solar-charging cordless beacon emitting a gentle 1800K candle-temp glow. Certified zero-blue-light night illumination.",
    imageUrl: "/src/assets/images/obsidian_lantern_1791346261309.jpg"
  },
  {
    id: "fumoir-resin",
    name: "Fumoir No. 04: Alpine Resin",
    category: "hearth",
    edition: "Quarterly Harvest",
    price: "$140",
    materials: "Wild Juniper Berry, Fir Needle & Pine Sap",
    desc: "Cold-distilled botanical scent blocks for hot stones and hearth embers, harvested exclusively inside the Elara foothills.",
    imageUrl: "/src/assets/images/alpine_resin_1791346272241.jpg"
  },
  {
    id: "hearth-suite",
    name: "Hand-Forged Hearth Suite",
    category: "hearth",
    edition: "Estate Commission",
    price: "$1,850",
    materials: "Blackened Hand-Hammered Steel",
    desc: "Four-piece fireplace companion set balanced for lifetime use, forged by third-generation regional metalsmiths.",
    imageUrl: "/src/assets/images/hearth_suite_1791346284768.jpg"
  },
  {
    id: "cashmere-throw",
    name: "Glacier High-Altitude Throw",
    category: "living",
    edition: "Batch 08 / 50 Made",
    price: "$640",
    materials: "100% Raw Undyed Mongolian Cashmere",
    desc: "Heavyweight heirloom weave designed for crisp terrace mornings and stargazing evenings over the lake basin.",
    imageUrl: "/src/assets/images/cashmere_throw_1791346294053.jpg"
  },
  {
    id: "sanctuary-key",
    name: "The Damascus Sanctuary Key",
    category: "provisions",
    edition: "Resident Issue",
    price: "$380",
    materials: "Hand-Folded 256-Layer Damascus Steel",
    desc: "Individually serial-numbered physical perimeter emblem embedded with passive cryptographic NFC credentials.",
    imageUrl: "/src/assets/images/damascus_key_1791346303025.jpg"
  }
];

export default function ProductsSection({ onInquireProduct }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products-section" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative z-10 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
            Curated Provisions &amp; Objects
          </span>
        </div>

        {/* Centered Main Title */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          The Society Collection
        </h2>

        {/* Centered Subtitle */}
        <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl mb-12">
          Heirloom furnishings, artisanal hearth implements, and botanical extractions created specifically for the quiet spaces of Elara Hills.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {[
            { id: "all", label: "All Objects" },
            { id: "living", label: "Living & Terrace" },
            { id: "hearth", label: "Hearth & Scent" },
            { id: "provisions", label: "Member Provisions" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Centered Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col justify-between p-7 rounded-2xl bg-neutral-950/60 hover:bg-neutral-950 border border-white/5 hover:border-white/15 transition-all duration-300 group text-center items-center"
              >
                <div className="w-full flex flex-col items-center">
                  
                  {/* Top Meta info */}
                  <div className="w-full flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-6">
                    <span>{product.edition}</span>
                    <span className="text-white font-semibold">{product.price}</span>
                  </div>

                  {/* Curated Product Image */}
                  <div className="w-full aspect-[4/3] rounded-xl bg-neutral-900 border border-white/10 mb-6 relative overflow-hidden group-hover:border-white/20 transition-all">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80">
                      <span className="truncate max-w-[80%]">{product.materials}</span>
                      <span className="text-white/40">№ 0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-semibold text-lg text-white tracking-tight mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs mb-6">
                    {product.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="w-full pt-4 border-t border-white/5 mt-auto">
                  <button
                    type="button"
                    onClick={() => onInquireProduct(product.name, product.price)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-white uppercase tracking-wider transition-all cursor-pointer border border-white/5 hover:border-white/20"
                  >
                    <span>Request Provision</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Assurance Guarantee */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-400" />
            <span>Lifetime Architectural Warranty</span>
          </div>
          <span className="text-white/20">•</span>
          <div>Numbered &amp; Registered Provenance</div>
          <span className="text-white/20">•</span>
          <div>Delivered Securely to Resident Coordinates</div>
        </div>

      </div>
    </section>
  );
}
