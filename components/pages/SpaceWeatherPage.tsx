"use client";

import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

// Historical/sample data — clearly labeled
const SAMPLE_KP = [2, 3, 3, 5, 4, 3, 2, 2, 3, 4, 4, 3, 2, 2, 3, 4, 6, 5, 4, 3, 2, 2, 3, 3];
const KP_LABELS = SAMPLE_KP.map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (24 - i));
  return d.toLocaleDateString("en-GB", { day:"2-digit", month:"short" });
});

function kpColor(kp: number): string {
  if (kp <= 2) return "#44cc88";
  if (kp <= 4) return "#ccaa44";
  if (kp <= 6) return "#cc7733";
  return "#cc3355";
}

function kpLabel(kp: number): string {
  if (kp <= 2) return "Quiet";
  if (kp <= 3) return "Unsettled";
  if (kp <= 4) return "Active";
  if (kp <= 5) return "Minor storm";
  if (kp <= 6) return "Moderate storm";
  return "Severe storm";
}

const RECENT_EVENTS = [
  { date:"2024-Oct-09", type:"X1.8 Flare",   desc:"Strong solar flare from AR3848. Minor radio blackouts on day side.", impact:"Minor" },
  { date:"2024-Oct-03", type:"M5.3 Flare",   desc:"Moderate flare + filament eruption. CME arrived ~36h later.", impact:"Moderate" },
  { date:"2024-May-10", type:"G5 Storm",      desc:"Severe geomagnetic storm — strongest since 2003. Aurora visible across equatorial regions.", impact:"Severe" },
  { date:"2024-May-08", type:"X2.9 Flare",   desc:"Part of Active Region 3663 flare sequence. Multiple CMEs.", impact:"Moderate" },
];

const INDICES = [
  { label:"Kp Index",      value:"3",          desc:"Geomagnetic activity — 0 quiet, 9 severe storm", color:"#ccaa44" },
  { label:"Solar Wind",    value:"420 km/s",   desc:"Current solar wind speed at L1", color:"#44aacc" },
  { label:"Bz (IMF)",      value:"−2 nT",      desc:"Interplanetary magnetic field z-component; negative enhances storms", color:"#aa88cc" },
  { label:"Flux (10.7cm)", value:"142 sfu",    desc:"Solar radio flux — proxy for solar activity level", color:"#ffcc44" },
  { label:"Aurora Kp",     value:"Kp ≥ 5",     desc:"Minimum Kp for aurora at 55°N latitude", color:"#44cc88" },
  { label:"Proton flux",   value:"< 1 pfu",    desc:"Energetic proton flux — SEP event threshold: 10 pfu", color:"#cc7733" },
];

export default function SpaceWeatherPage() {
  const currentKp = SAMPLE_KP[SAMPLE_KP.length - 1] ?? 3;

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-yellow-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl font-bold text-white mb-4">Space Weather</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Solar activity, geomagnetic storms, aurora forecasts, and the space environment
              between the Sun and Earth.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Sample data shown — live feed from NOAA SWPC requires optional key #102
            </p>
          </motion.div>
        </section>

        {/* Current indices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {INDICES.map((idx, i) => (
            <motion.div key={idx.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}>
              <GlassPanel className="p-4">
                <p className="text-[10px] text-white/30 uppercase tracking-wide mb-1">{idx.label}</p>
                <p className="text-2xl font-bold" style={{ color: idx.color }}>{idx.value}</p>
                <p className="text-white/35 text-xs mt-1 leading-tight">{idx.desc}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Kp chart */}
        <GlassPanel className="p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Kp Index — 24-day history</h2>
            <span className="text-xs text-amber-400/60">Sample data</span>
          </div>
          <div className="flex items-end gap-1 h-32" role="img" aria-label="Kp index bar chart">
            {SAMPLE_KP.map((kp, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                <div className="w-full rounded-sm transition-all"
                  style={{ height: `${(kp / 9) * 100}%`, background: kpColor(kp), minHeight: 4 }}
                  title={`${KP_LABELS[i]}: Kp ${kp} (${kpLabel(kp)})`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-white/20 mt-2">
            <span>24 days ago</span><span>Today</span>
          </div>
        </GlassPanel>

        {/* Solar activity guide */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <GlassPanel className="p-5">
            <h2 className="text-white font-semibold mb-3">Solar Cycle 25</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              We are in Solar Cycle 25, which began in December 2019. The cycle is tracking
              above predictions, with solar maximum expected around 2025. During solar maximum,
              flares, CMEs, and geomagnetic storms are more frequent and intense.
            </p>
            <p className="text-white/30 text-xs mt-3">
              Source: NOAA SWPC / NASA Marshall Space Flight Center
            </p>
          </GlassPanel>

          <GlassPanel className="p-5">
            <h2 className="text-white font-semibold mb-3">Aurora Visibility Guide</h2>
            <div className="space-y-2">
              {[
                {kp:1, lat:"68°N+ (Tromsø)", color:"#44cc88"},
                {kp:3, lat:"60°N+ (Helsinki, Reykjavik)", color:"#88cc44"},
                {kp:5, lat:"55°N+ (Edinburgh, Moscow)", color:"#ccaa44"},
                {kp:7, lat:"45°N+ (Paris, Portland OR)", color:"#cc7733"},
                {kp:9, lat:"40°N+ (Philadelphia, Madrid)", color:"#cc3355"},
              ].map(row => (
                <div key={row.kp} className="flex items-center gap-3 text-xs">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: row.color + "30", color: row.color }}>
                    {row.kp}
                  </div>
                  <span className="text-white/60">{row.lat}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Recent events */}
        <GlassPanel className="overflow-hidden">
          <div className="px-5 py-4 border-b border-white/8">
            <h2 className="text-white font-semibold">Recent Space Weather Events</h2>
            <p className="text-[10px] text-amber-400/60 mt-0.5">Historical events — live feed from NOAA DONKI in Phase 8</p>
          </div>
          <div className="divide-y divide-white/5">
            {RECENT_EVENTS.map(ev => (
              <div key={ev.date} className="px-5 py-3.5 flex gap-4 items-start">
                <div className="flex-shrink-0 text-right min-w-[80px]">
                  <p className="text-white/40 text-xs font-mono">{ev.date}</p>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full mt-1 inline-block ${
                    ev.impact==="Severe" ? "bg-red-500/20 text-red-300" :
                    ev.impact==="Moderate" ? "bg-orange-500/20 text-orange-300" :
                    "bg-yellow-500/20 text-yellow-300"
                  }`}>{ev.impact}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{ev.type}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

      </div>
    </main>
  );
}
