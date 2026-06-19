"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

// Real APOD entries (used as sample/fallback — images are placeholders)
const SAMPLE_APOD = [
  {
    date:        "2022-10-19",
    title:       "Pillars of Creation",
    credit:      "Science: NASA, ESA, CSA, STScI; Image Processing: Joseph DePasquale, Alyssa Pagan, Anton M. Koekemoer",
    explanation: "The Pillars of Creation, captured here by the James Webb Space Telescope's Near-Infrared Camera (NIRCam), show the iconic region of star formation in the Eagle Nebula (M16). The pillars are part of an active star-forming region and stretch several light-years into space. The blue area at the top of each pillar is where the densest gas is being illuminated by ultraviolet light from young, hot stars. The glowing red dots near the edges of the pillars are newly formed stars, still embedded in the gas clouds.",
    media_type:  "image",
  },
  {
    date:        "2023-07-12",
    title:       "Webb's First Deep Field",
    credit:      "NASA, ESA, CSA, STScI",
    explanation: "This is the first full-color image from the James Webb Space Telescope, released July 12, 2022. It shows SMACS 0723, a galaxy cluster 4.6 billion light-years away whose gravity acts as a lens, magnifying and bending the light of galaxies behind it — some of whose light has traveled over 13 billion years to reach us. The image covers a sky patch no larger than a grain of sand held at arm's length.",
    media_type:  "image",
  },
  {
    date:        "2024-02-14",
    title:       "Pale Blue Dot — Revisited",
    credit:      "NASA/JPL-Caltech",
    explanation: "On February 14, 1990, NASA's Voyager 1 turned its camera toward Earth and captured this famous portrait. At the request of Carl Sagan, the image shows our planet as less than a single pixel — a pale blue dot suspended in a sunbeam. Earth is ~6 billion kilometres from Voyager 1 in this image. Sagan wrote: 'Look again at that dot. That's here. That's home. That's us.'",
    media_type:  "image",
  },
];

export default function ApodPage() {
  const [selected, setSelected] = useState(0);
  const apod = SAMPLE_APOD[selected]!;

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        <section className="text-center py-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-blue-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl font-bold text-white mb-3">Astronomy Picture of the Day</h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Since 1995, NASA has published one new stunning astronomical image every day — with an explanation from a professional astronomer.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Live image requires <code className="font-mono bg-white/10 px-1 rounded">#101 NASA API Key</code> ·
              3 sample entries shown below
            </p>
          </motion.div>
        </section>

        {/* Tab selector */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {SAMPLE_APOD.map((a, i) => (
            <button key={a.date} onClick={() => setSelected(i)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selected===i ? "bg-white/20 border-white/30 text-white" : "border-white/10 text-white/40 hover:border-white/25"}`}>
              {a.date}
            </button>
          ))}
        </div>

        {/* Main APOD card */}
        <motion.div key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}>
          <GlassPanel className="overflow-hidden mb-6">
            {/* Image placeholder */}
            <div
              className="w-full flex items-center justify-center border-b border-white/8"
              style={{ height: 400, background: "rgba(4,8,24,0.8)" }}
              role="img"
              aria-label={`APOD image placeholder for: ${apod.title}`}
            >
              <div className="text-center">
                <p className="text-white/20 text-4xl mb-3" aria-hidden>🖼</p>
                <p className="text-white/25 text-sm">{apod.title}</p>
                <p className="text-white/15 text-xs mt-1">Image #101 · Add NASA API key to load live photo</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold text-white">{apod.title}</h2>
                  <p className="text-white/35 text-xs mt-1 font-mono">{apod.date}</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/20 text-amber-400/80 flex-shrink-0">Sample data</span>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4">{apod.explanation}</p>

              <p className="text-white/25 text-xs">
                Credit: {apod.credit}
              </p>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Archive preview (coming in Phase 8) */}
        <GlassPanel className="p-5">
          <h2 className="text-white font-semibold mb-3">Archive Browser</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Browse 10,000+ APOD images from 1995 to present day. Filter by date, search by keyword,
            or let us surprise you. Full archive available in Phase 8 with NASA API key #101.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {Array.from({length:12}).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                <span className="text-white/15 text-[10px]">#{101}</span>
              </div>
            ))}
          </div>
        </GlassPanel>

      </div>
    </main>
  );
}
