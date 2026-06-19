"use client";

import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

// Sample data — live versions connect to real APIs in Phase 8
const SAMPLE = {
  iss:   { lat: 51.6, lng: -47.2, altitude: 408, speed: 27580 },
  moon:  { phase: "Waxing Gibbous", illumination: 72, age: 9.4, riseUTC: "14:32", setUTC: "02:18" },
  kp:    3,
  apodTitle: "Pillars of Creation (JWST, NIRCam)",
  nextEclipse: { type: "Total Solar", date: "2026-Aug-12", path: "Spain · North Africa · Middle East" },
  planets: [
    { name: "Mercury", constellation: "Leo",    elongation: "18° E", visibility: "Evening" },
    { name: "Venus",   constellation: "Gemini", elongation: "46° E", visibility: "Evening" },
    { name: "Mars",    constellation: "Taurus", elongation: "72° E", visibility: "Evening" },
    { name: "Jupiter", constellation: "Aries",  elongation: "120° E",visibility: "Evening" },
    { name: "Saturn",  constellation: "Aquarius",elongation:"65° W", visibility: "Morning" },
  ],
  spaceweather: { alert: false, summary: "Quiet. Kp index: 3 (unsettled). No significant flares." },
};

function Card({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <GlassPanel className="p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-white font-semibold text-sm">{title}</h2>
        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400/80 flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      {children}
    </GlassPanel>
  );
}

function KpBar({ kp }: { kp: number }) {
  const color = kp <= 3 ? "#44cc88" : kp <= 5 ? "#ccaa44" : "#cc4466";
  return (
    <div className="space-y-1">
      <div className="flex gap-1">
        {Array.from({length: 9}, (_, i) => (
          <div key={i} className="flex-1 h-3 rounded-sm"
            style={{ background: i < kp ? color : "rgba(255,255,255,0.1)" }} />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-white/25">
        <span>Quiet</span><span>Unsettled</span><span>Storm</span>
      </div>
    </div>
  );
}

export default function LivePage() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-green-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Live Dashboard</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real-time data: ISS position, Moon phase, planet visibility, space weather, and more.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Sample data shown — add <code className="font-mono bg-white/10 px-1 rounded">#101 NASA API Key</code> to enable live feeds
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

          {/* ISS */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <Card title="International Space Station" badge="Sample">
              <div className="text-4xl font-light text-white/80 mb-1 font-mono">
                {SAMPLE.iss.lat.toFixed(1)}°N
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><p className="text-white/30">Longitude</p><p className="text-white font-mono">{Math.abs(SAMPLE.iss.lng).toFixed(1)}°W</p></div>
                <div><p className="text-white/30">Altitude</p><p className="text-white font-mono">{SAMPLE.iss.altitude} km</p></div>
                <div><p className="text-white/30">Speed</p><p className="text-white font-mono">{SAMPLE.iss.speed.toLocaleString()} km/h</p></div>
                <div><p className="text-white/30">Orbital period</p><p className="text-white font-mono">~92 min</p></div>
              </div>
              <p className="text-white/20 text-[10px]">Live: updates every 5s via open-notify.me API (no key needed)</p>
            </Card>
          </motion.div>

          {/* Moon */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card title="The Moon" badge="Sample">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full flex-shrink-0"
                  style={{ background: `conic-gradient(#cccccc ${SAMPLE.moon.illumination * 3.6}deg, #222 0)`, borderRadius: "50%" }}
                  aria-label={`${SAMPLE.moon.illumination}% illuminated`}
                />
                <div>
                  <p className="text-white font-medium">{SAMPLE.moon.phase}</p>
                  <p className="text-white/50 text-xs">{SAMPLE.moon.illumination}% illuminated</p>
                  <p className="text-white/35 text-xs">Age: {SAMPLE.moon.age} days</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><p className="text-white/30">Rise (UTC)</p><p className="text-white font-mono">{SAMPLE.moon.riseUTC}</p></div>
                <div><p className="text-white/30">Set (UTC)</p><p className="text-white font-mono">{SAMPLE.moon.setUTC}</p></div>
              </div>
            </Card>
          </motion.div>

          {/* Space Weather */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card title="Space Weather" badge="Sample">
              <div>
                <p className="text-xs text-white/30 mb-2">Kp Index (geomagnetic activity)</p>
                <KpBar kp={SAMPLE.kp} />
                <p className="text-white/60 text-xs mt-3 leading-relaxed">{SAMPLE.spaceweather.summary}</p>
              </div>
            </Card>
          </motion.div>

          {/* Next Eclipse */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card title="Next Total Solar Eclipse">
              <p className="text-2xl font-bold text-white">{SAMPLE.nextEclipse.date}</p>
              <p className="text-white/50 text-sm">{SAMPLE.nextEclipse.type}</p>
              <p className="text-white/35 text-xs leading-relaxed">Path of totality: {SAMPLE.nextEclipse.path}</p>
            </Card>
          </motion.div>

          {/* APOD preview */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            <Card title="Today's Astronomy Picture" badge="Sample">
              <div className="w-full h-24 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center"
                aria-label="APOD image placeholder #101">
                <p className="text-white/25 text-xs text-center">Image #101 · NASA API Key needed</p>
              </div>
              <p className="text-white text-sm font-medium">{SAMPLE.apodTitle}</p>
              <a href="/apod" className="text-blue-400/70 text-xs hover:text-blue-300 transition-colors">Full archive →</a>
            </Card>
          </motion.div>

          {/* Planet visibility */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-1">
            <Card title="Planet Visibility" badge="Sample">
              <div className="space-y-2">
                {SAMPLE.planets.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <span className="text-white">{p.name}</span>
                    <span className="text-white/40 font-mono">{p.constellation}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      p.visibility === "Evening" ? "bg-blue-500/15 text-blue-300/70" : "bg-orange-500/15 text-orange-300/70"
                    }`}>{p.visibility}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>

        <p className="text-center text-white/20 text-xs">
          Sample data shown throughout. Live feeds activate in Phase 8 when API keys are configured — see Placeholder Overlay [P].
        </p>
      </div>
    </main>
  );
}
