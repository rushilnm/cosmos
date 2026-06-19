"use client";

import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

const CONTROLS = [
  { label: "Date & Time",    icon: "🕐", desc: "Scrub to any moment in history or future" },
  { label: "Location",      icon: "📍", desc: "Your coordinates — or choose any city" },
  { label: "Coordinates",   icon: "⊕",  desc: "Equatorial · Ecliptic · Horizontal · Galactic" },
  { label: "Constellation", icon: "✦",  desc: "Toggle IAU constellation lines & names" },
  { label: "Objects",       icon: "◉",  desc: "Toggle planets, Messier objects, asteroids" },
  { label: "Export",        icon: "↓",  desc: "Save current sky as SVG or share deep-link" },
];

const SAMPLE_OBJECTS = [
  { name: "Jupiter",        ra: "02h 15m", dec: "+12° 30'", mag: -2.9, type: "Planet" },
  { name: "Saturn",         ra: "22h 08m", dec: "-13° 10'", mag: +0.7, type: "Planet" },
  { name: "Mars",           ra: "04h 50m", dec: "+22° 18'", mag: +1.2, type: "Planet" },
  { name: "Sirius",         ra: "06h 45m", dec: "-16° 43'", mag: -1.46, type: "Star (α CMa)" },
  { name: "Betelgeuse",     ra: "05h 55m", dec: "+07° 24'", mag: +0.5, type: "Star (α Ori)" },
  { name: "M42 Orion Neb.", ra: "05h 35m", dec: "-05° 24'", mag: +4.0, type: "Nebula" },
  { name: "Andromeda Gal.", ra: "00h 43m", dec: "+41° 16'", mag: +3.4, type: "Galaxy (M31)" },
];

export default function SkyPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-blue-400/60 uppercase mb-3">Phase 7</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Planetarium</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A real-time, interactive sky map showing stars, planets, and constellations at
              their true positions — for any time and place on Earth.
            </p>
          </motion.div>
        </section>

        {/* Canvas placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full rounded-2xl border border-white/10 overflow-hidden mb-8"
          style={{ background: "rgba(2,4,16,0.8)", height: 440 }}
          aria-label="Sky map placeholder"
          role="img"
        >
          <div className="h-full flex flex-col items-center justify-center gap-4">
            {/* Fake horizon arc */}
            <svg width="400" height="220" viewBox="0 0 400 220" aria-hidden>
              <defs>
                <radialGradient id="sky-grad" cx="50%" cy="100%" r="90%">
                  <stop offset="0%" stopColor="#0a1a4a" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#000510" stopOpacity="0.9"/>
                </radialGradient>
              </defs>
              <ellipse cx="200" cy="210" rx="195" ry="100" fill="url(#sky-grad)" />
              {/* Stars */}
              {Array.from({length: 60}, (_, i) => {
                const angle = (i / 60) * Math.PI;
                const r = 30 + (i * 7.3 % 150);
                return (
                  <circle key={i}
                    cx={200 + Math.cos(angle) * r}
                    cy={210 - Math.sin(angle) * r * 0.55}
                    r={i % 7 === 0 ? 1.5 : 0.8}
                    fill="white"
                    opacity={0.3 + (i % 3) * 0.25}
                  />
                );
              })}
              {/* Horizon line */}
              <line x1="5" y1="210" x2="395" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4"/>
              <text x="200" y="230" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">S</text>
              <text x="10" y="214" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">E</text>
              <text x="390" y="214" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">W</text>
            </svg>
            <div className="text-center">
              <p className="text-white/30 text-sm">Interactive sky map</p>
              <p className="text-white/15 text-xs mt-1">Rendering in Phase 7 · astronomy-engine + real HYG star catalog</p>
            </div>
          </div>
        </motion.div>

        {/* Controls preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {CONTROLS.map((c, i) => (
            <motion.div key={c.label}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <GlassPanel className="p-4 flex gap-3 items-start opacity-70">
                <span className="text-xl flex-shrink-0" aria-hidden>{c.icon}</span>
                <div>
                  <p className="text-white text-sm font-medium">{c.label}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Sample object table */}
        <GlassPanel className="overflow-hidden">
          <div className="px-5 py-4 border-b border-white/8">
            <p className="text-xs text-white/30 uppercase tracking-widest">Sample objects visible tonight (London, 52°N)</p>
            <p className="text-[10px] text-amber-400/60 mt-0.5">Sample data — live positions load with astronomy-engine in Phase 7</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  {["Object","RA","Dec","Magnitude","Type"].map(h => (
                    <th key={h} className="text-left px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SAMPLE_OBJECTS.map((o, i) => (
                  <tr key={o.name} className={i < SAMPLE_OBJECTS.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="px-4 py-2.5 text-white font-medium">{o.name}</td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{o.ra}</td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{o.dec}</td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{o.mag.toFixed(1)}</td>
                    <td className="px-4 py-2.5 text-white/40 text-xs">{o.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>

      </div>
    </main>
  );
}
