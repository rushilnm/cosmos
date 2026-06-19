"use client";

import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

interface NEO {
  name:          string;
  designation:   string;
  diameterMin:   number;  // m
  diameterMax:   number;  // m
  approachDate:  string;
  missDistAU:    number;
  relVelKms:     number;
  magnitude:     number;
  hazardous:     boolean;
  notable:       string;
}

const SAMPLE: NEO[] = [
  {
    name:"Apophis (99942)",  designation:"2004 MN4",
    diameterMin:310, diameterMax:340,
    approachDate:"2029-Apr-13", missDistAU:0.00025, relVelKms:7.43,
    magnitude:19.2, hazardous:false,
    notable:"Will pass closer than geostationary satellites in 2029 — visible to naked eye. Ruled out for 2068 impact after Goldstone radar.",
  },
  {
    name:"Bennu (101955)",   designation:"1999 RQ36",
    diameterMin:490, diameterMax:510,
    approachDate:"2182-Sep-24", missDistAU:0.00037, relVelKms:6.0,
    magnitude:20.9, hazardous:false,
    notable:"OSIRIS-REx sample return target. 1-in-2700 cumulative impact chance between 2175–2199. Samples returned to Earth Sept 2023.",
  },
  {
    name:"Didymos (65803)",  designation:"1996 GT",
    diameterMin:700, diameterMax:780,
    approachDate:"2062-Nov-01", missDistAU:0.0034, relVelKms:5.87,
    magnitude:18.0, hazardous:false,
    notable:"DART mission target (2022). Moonlet Dimorphos's orbit was altered by ~33 minutes — first successful planetary defense test.",
  },
  {
    name:"1994 PC1",         designation:"1994 PC1",
    diameterMin:1050, diameterMax:1170,
    approachDate:"2022-Jan-18", missDistAU:0.013, relVelKms:19.56,
    magnitude:17.2, hazardous:true,
    notable:"One of the largest known Potentially Hazardous Asteroids. Passed safely at 5× Moon distance in Jan 2022.",
  },
  {
    name:"2023 BU",          designation:"2023 BU",
    diameterMin:3.8, diameterMax:8.5,
    approachDate:"2023-Jan-26", missDistAU:0.0000572, relVelKms:9.25,
    magnitude:28.5, hazardous:false,
    notable:"One of the closest-ever recorded asteroid passes — just ~3,600 km above Earth's surface. Safely flew over southern tip of South America.",
  },
];

function HazardBadge({ h }: { h: boolean }) {
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${h ? "bg-red-500/20 text-red-300" : "bg-green-500/15 text-green-400/80"}`}>
      {h ? "PHA" : "Safe"}
    </span>
  );
}

export default function AsteroidDataPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-orange-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl font-bold text-white mb-4">Near-Earth Objects</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Close approaches, sizes, and velocities of asteroids that come near Earth.
              NASA tracks &gt;34,000 NEOs with 2,350+ classified as Potentially Hazardous.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Showing 5 notable examples — live close-approach feed requires{" "}
              <code className="font-mono bg-white/10 px-1 rounded">#101 NASA API Key</code>
            </p>
          </motion.div>
        </section>

        {/* Stat row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Known NEOs",     value: "34,000+" },
            { label: "PHAs",           value: "2,350+"  },
            { label: "Avg weekly",     value: "~30 passes" },
            { label: "This week",      value: "Sample data" },
          ].map(s => (
            <GlassPanel key={s.label} className="p-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-white/35 text-xs uppercase tracking-wide">{s.label}</p>
            </GlassPanel>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-4 mb-6">
          {SAMPLE.map((neo, i) => (
            <motion.div key={neo.name}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <GlassPanel className="p-5">
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-white font-semibold">{neo.name}</h2>
                      <HazardBadge h={neo.hazardous} />
                    </div>
                    <p className="text-white/35 text-xs mt-0.5">Designation: {neo.designation}</p>
                  </div>
                  <p className="text-white/50 text-sm text-right flex-shrink-0">
                    Close approach: <span className="text-white font-medium">{neo.approachDate}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wide">Diameter</p>
                    <p className="text-white text-sm font-mono">{neo.diameterMin}–{neo.diameterMax} m</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wide">Miss dist.</p>
                    <p className="text-white text-sm font-mono">{neo.missDistAU.toFixed(5)} AU</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wide">Rel. velocity</p>
                    <p className="text-white text-sm font-mono">{neo.relVelKms} km/s</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wide">Magnitude</p>
                    <p className="text-white text-sm font-mono">H {neo.magnitude}</p>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed">{neo.notable}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/20 text-xs">
          Source: NASA Center for Near Earth Object Studies (cneos.jpl.nasa.gov).
          Live feed via NASA NeoWs API — requires API key #101.
        </p>

      </div>
    </main>
  );
}
