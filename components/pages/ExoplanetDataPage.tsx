"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";

interface Exoplanet {
  name:         string;
  host:         string;
  year:         number;
  method:       string;
  massEarth:    number;    // Earth masses
  radiusEarth:  number;    // Earth radii
  periodDays:   number;
  distLy:       number;    // light-years
  eqTempK:      number | null;
  inHZ:         boolean;
  notable:      string;
}

const SAMPLE: Exoplanet[] = [
  { name:"51 Pegasi b",    host:"51 Pegasi",      year:1995, method:"Radial velocity", massEarth:149,   radiusEarth:12.7, periodDays:4.23,    distLy:50,   eqTempK:1258, inHZ:false, notable:"First confirmed hot Jupiter — changed everything we thought we knew about planet formation." },
  { name:"HD 209458 b",    host:"HD 209458",      year:1999, method:"Transit",          massEarth:218,   radiusEarth:15.6, periodDays:3.52,    distLy:159,  eqTempK:1449, inHZ:false, notable:"First exoplanet transit detected, first detected atmosphere (hydrogen escaping)." },
  { name:"Kepler-22b",     host:"Kepler-22",      year:2011, method:"Transit",          massEarth:36,    radiusEarth:2.4,  periodDays:289.9,   distLy:620,  eqTempK:295,  inHZ:true,  notable:"First Kepler planet confirmed in the habitable zone of a Sun-like star." },
  { name:"Kepler-452b",    host:"Kepler-452",     year:2015, method:"Transit",          massEarth:5,     radiusEarth:1.6,  periodDays:384.8,   distLy:1400, eqTempK:265,  inHZ:true,  notable:"'Earth's Cousin' — most Earth-like habitable zone planet found by Kepler." },
  { name:"Proxima Cen b",  host:"Proxima Centauri",year:2016,method:"Radial velocity", massEarth:1.3,   radiusEarth:1.1,  periodDays:11.2,    distLy:4.2,  eqTempK:234,  inHZ:true,  notable:"Closest known exoplanet to Earth — but host is a flare star." },
  { name:"TRAPPIST-1e",    host:"TRAPPIST-1",     year:2017, method:"Transit",          massEarth:0.77,  radiusEarth:0.92, periodDays:6.1,     distLy:39,   eqTempK:251,  inHZ:true,  notable:"Best candidate for liquid water; one of seven Earth-sized planets around one star." },
  { name:"55 Cancri e",    host:"55 Cancri",      year:2004, method:"Radial velocity", massEarth:7.99,  radiusEarth:1.99, periodDays:0.74,    distLy:41,   eqTempK:2573, inHZ:false, notable:"Ultra-short year (~18 hrs); surface may be a lava ocean. Possibly carbon-rich." },
  { name:"GJ 1214 b",      host:"GJ 1214",        year:2009, method:"Transit",          massEarth:6.26,  radiusEarth:2.85, periodDays:1.58,    distLy:42,   eqTempK:596,  inHZ:false, notable:"First super-Earth with detected atmosphere — likely a 'water world'." },
  { name:"Kepler-186f",    host:"Kepler-186",     year:2014, method:"Transit",          massEarth:1.4,   radiusEarth:1.17, periodDays:129.9,   distLy:492,  eqTempK:188,  inHZ:true,  notable:"First Earth-sized planet found in the habitable zone of another star." },
  { name:"TOI-700d",       host:"TOI-700",        year:2020, method:"Transit",          massEarth:1.72,  radiusEarth:1.19, periodDays:37.4,    distLy:102,  eqTempK:268,  inHZ:true,  notable:"Earth-sized planet in habitable zone; one of TESS's most significant finds." },
];

const METHODS = Array.from(new Set(SAMPLE.map(e => e.method)));

export default function ExoplanetDataPage() {
  const [filter, setFilter] = useState<"all"|"hz">("all");
  const [method, setMethod] = useState<string>("all");
  const [sort, setSort]     = useState<keyof Exoplanet>("year");
  const [asc, setAsc]       = useState(false);

  const planets = useMemo(() => {
    let list = filter === "hz" ? SAMPLE.filter(e => e.inHZ) : SAMPLE;
    if (method !== "all") list = list.filter(e => e.method === method);
    return [...list].sort((a, b) => {
      const av = a[sort] ?? 0, bv = b[sort] ?? 0;
      return asc ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1);
    });
  }, [filter, method, sort, asc]);

  function toggleSort(col: keyof Exoplanet) {
    if (sort === col) setAsc(v => !v);
    else { setSort(col); setAsc(false); }
  }

  const Th = ({ col, label }: { col: keyof Exoplanet; label: string }) => (
    <th onClick={() => toggleSort(col)}
      className="text-left px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide cursor-pointer hover:text-white/60 select-none whitespace-nowrap">
      {label}{sort===col ? (asc?" ↑":" ↓") : ""}
    </th>
  );

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        <section className="text-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.5em] text-blue-400/60 uppercase mb-3">Phase 8</p>
            <h1 className="text-5xl font-bold text-white mb-4">Exoplanet Catalog</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Browse confirmed exoplanets from the NASA Exoplanet Archive. Over 5,700 confirmed as of 2025.
            </p>
            <p className="text-xs text-amber-400/60 mt-4">
              Showing 10 notable examples — full catalog loads via NASA TAP endpoint (#103) in Phase 8
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex rounded-xl overflow-hidden border border-white/10">
            {(["all","hz"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs transition-colors ${filter===f ? "bg-white/20 text-white" : "bg-white/5 text-white/40 hover:text-white/70"}`}>
                {f === "all" ? "All planets" : "🌱 Habitable zone"}
              </button>
            ))}
          </div>
          <select value={method} onChange={e => setMethod(e.target.value)}
            className="px-4 py-2 text-xs rounded-xl border border-white/10 text-white/60 bg-[rgba(8,12,40,0.8)] focus:outline-none appearance-none">
            <option value="all">All detection methods</option>
            {METHODS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <span className="flex-1" />
          <p className="text-white/25 text-xs self-center">{planets.length} result{planets.length !== 1 ? "s" : ""}</p>
        </div>

        {/* Table */}
        <GlassPanel className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <Th col="name" label="Name" />
                  <Th col="year" label="Disc." />
                  <Th col="method" label="Method" />
                  <Th col="massEarth" label="Mass (M⊕)" />
                  <Th col="radiusEarth" label="Radius (R⊕)" />
                  <Th col="periodDays" label="Period (d)" />
                  <Th col="distLy" label="Distance (ly)" />
                  <Th col="eqTempK" label="Teq (K)" />
                  <th className="px-4 py-2.5 text-white/30 text-xs font-normal">HZ?</th>
                </tr>
              </thead>
              <tbody>
                {planets.map((e, i) => (
                  <tr key={e.name} className={`group ${i < planets.length-1 ? "border-b border-white/5" : ""}`}
                    title={e.notable}>
                    <td className="px-4 py-2.5">
                      <p className="text-white font-medium">{e.name}</p>
                      <p className="text-white/35 text-xs">{e.host}</p>
                    </td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{e.year}</td>
                    <td className="px-4 py-2.5 text-white/50 text-xs">{e.method}</td>
                    <td className="px-4 py-2.5 text-white/70 font-mono text-xs">{e.massEarth.toFixed(1)}</td>
                    <td className="px-4 py-2.5 text-white/70 font-mono text-xs">{e.radiusEarth.toFixed(2)}</td>
                    <td className="px-4 py-2.5 text-white/70 font-mono text-xs">{e.periodDays.toFixed(2)}</td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{e.distLy.toLocaleString()}</td>
                    <td className="px-4 py-2.5 text-white/60 font-mono text-xs">{e.eqTempK ?? "—"}</td>
                    <td className="px-4 py-2.5 text-center">{e.inHZ ? <span className="text-green-400">✓</span> : <span className="text-white/20">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-white/8">
            <p className="text-white/20 text-[10px]">Source: NASA Exoplanet Archive (exoplanetarchive.ipac.caltech.edu). Values rounded for display. Hover rows for notable facts.</p>
          </div>
        </GlassPanel>

      </div>
    </main>
  );
}
