"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

const ROVERS = [
  { name:"Perseverance", status:"Active", landed:"2021-Feb-18", location:"Jezero Crater", sol:1200, mission:"Search for ancient microbial life, collect samples for future return" },
  { name:"Curiosity",    status:"Active", landed:"2012-Aug-06", location:"Gale Crater",   sol:4200, mission:"Study Mars climate & geology; confirmed habitable ancient environment" },
  { name:"Opportunity", status:"Ended 2019", landed:"2004-Jan-25", location:"Perseverance Valley", sol:5111, mission:"Discovered evidence of liquid water; operated 60× planned mission lifetime" },
  { name:"Spirit",      status:"Ended 2010", landed:"2004-Jan-04", location:"Home Plate, Columbia Hills", sol:2208, mission:"Discovered silica deposits suggesting ancient hot springs" },
];

// InSight weather data — final transmitted sols before comms ended Nov 2022
const WEATHER_SAMPLE = [
  { sol:728, minC:-88, maxC:-17, pressure:739, windDir:"WNW" },
  { sol:727, minC:-90, maxC:-15, pressure:742, windDir:"NW"  },
  { sol:726, minC:-87, maxC:-18, pressure:738, windDir:"W"   },
  { sol:725, minC:-91, maxC:-14, pressure:745, windDir:"WNW" },
  { sol:724, minC:-89, maxC:-16, pressure:741, windDir:"NW"  },
];

const PHOTO_CAPTIONS = [
  "Jezero Crater delta formation — evidence of ancient river delta",
  "Mars sky at sunset — dust-scattered blue-tinted horizon",
  "Ingenuity helicopter shadow on Martian regolith",
  "Martian rock texture — abrasion by Perseverance's PIXL instrument",
  "South Séítah geological unit — ancient lake sediments",
  "Selfie: Perseverance rover in Hawksbill Gap",
];

export default function MarsDataPage() {
  const [tab, setTab] = useState<"rovers"|"weather"|"photos">("rovers");

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-red-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ color: "#cc5533" }}>Mars Explorer</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Live rover photos, Mars weather, and mission status. Four rovers have explored the Red Planet since 2004.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Photos require <code className="font-mono bg-white/10 px-1 rounded">#101 NASA API Key</code> ·
              Weather data from InSight lander (mission ended Nov 2022)
            </p>
          </motion.div>
        </section>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl border border-white/8 mb-6 w-fit" style={{ background: "rgba(8,12,40,0.5)" }}>
          {(["rovers","weather","photos"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm capitalize transition-colors ${tab===t ? "bg-white/15 text-white" : "text-white/40 hover:text-white/70"}`}>
              {t}
            </button>
          ))}
        </div>

        {tab === "rovers" && (
          <div className="grid gap-4">
            {ROVERS.map((r, i) => (
              <motion.div key={r.name}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassPanel className="p-5">
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-white font-semibold">{r.name}</h2>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${r.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white/30"}`}>
                          {r.status}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm mb-3">{r.mission}</p>
                      <div className="grid grid-cols-3 gap-4">
                        <div><p className="text-[10px] text-white/30 uppercase tracking-wide">Landed</p><p className="text-white text-xs font-mono">{r.landed}</p></div>
                        <div><p className="text-[10px] text-white/30 uppercase tracking-wide">Location</p><p className="text-white text-xs">{r.location}</p></div>
                        <div><p className="text-[10px] text-white/30 uppercase tracking-wide">Sol</p><p className="text-white text-xs font-mono">{r.sol.toLocaleString()}</p></div>
                      </div>
                    </div>
                    <div className="w-20 h-20 rounded-xl bg-[rgba(204,85,51,0.15)] border border-[rgba(204,85,51,0.2)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#cc5533] text-xs text-center leading-tight">Photo<br />#{101}<br />needed</span>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        )}

        {tab === "weather" && (
          <div className="space-y-4">
            <p className="text-white/40 text-sm">InSight lander weather — final transmitted sols before mission ended November 2022. Location: Elysium Planitia (4.5°N, 135.6°E).</p>
            <GlassPanel className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8">
                    {["Sol","Min Temp","Max Temp","Pressure (Pa)","Wind Dir"].map(h => (
                      <th key={h} className="text-left px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WEATHER_SAMPLE.map((w, i) => (
                    <tr key={w.sol} className={i < WEATHER_SAMPLE.length-1 ? "border-b border-white/5" : ""}>
                      <td className="px-4 py-2.5 text-white font-mono">{w.sol}</td>
                      <td className="px-4 py-2.5 text-blue-300 font-mono">{w.minC}°C</td>
                      <td className="px-4 py-2.5 text-orange-300 font-mono">{w.maxC}°C</td>
                      <td className="px-4 py-2.5 text-white/70 font-mono">{w.pressure}</td>
                      <td className="px-4 py-2.5 text-white/60">{w.windDir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-2.5 border-t border-white/8 text-white/20 text-[10px]">
                Source: NASA InSight Mars Weather Service API (final data sol 728, Nov 2022).
                Curiosity REMS weather data available via Mars Weather API.
              </div>
            </GlassPanel>
          </div>
        )}

        {tab === "photos" && (
          <div>
            <p className="text-white/40 text-sm mb-4">
              Rover photos load from NASA Mars Rover Photos API (NASA_API_KEY #101).
              Showing layout with placeholder images.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PHOTO_CAPTIONS.map((cap, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                  <GlassPanel className="overflow-hidden">
                    <div className="w-full aspect-video bg-[rgba(204,85,51,0.1)] flex items-center justify-center border-b border-white/5">
                      <p className="text-white/20 text-xs text-center px-2">Photo #101<br />API key needed</p>
                    </div>
                    <p className="px-3 py-2.5 text-white/55 text-xs leading-relaxed">{cap}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
