"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BODY_PHYSICS, BODY_COLOR, LIGHT_SPEED_KMS } from "@/data/bodyPhysics";
import BODIES from "@/data/bodies";

// Bodies sorted by distance from Sun (ascending), skipping Sun itself
const DESTINATIONS = [...BODY_PHYSICS]
  .filter((b) => b.slug !== "sun")
  .sort((a, b) => a.distFromSunMkm - b.distFromSunMkm);

const ANIM_DURATION_MS = 5_000;

function formatTime(seconds: number): string {
  if (seconds < 60)     return `${seconds.toFixed(1)} seconds`;
  if (seconds < 3_600)  return `${Math.floor(seconds / 60)} min ${Math.round(seconds % 60)} sec`;
  if (seconds < 86_400) return `${(seconds / 3_600).toFixed(2)} hours`;
  return `${(seconds / 86_400).toFixed(2)} days`;
}

function formatDist(mkm: number): string {
  const au = mkm / 149.596;
  if (mkm < 10)   return `${(mkm * 1_000_000).toLocaleString()} km`;
  return `${mkm.toFixed(1)} million km (${au.toFixed(2)} AU)`;
}

export default function LightTravelTimer() {
  const [selectedSlug, setSelected]   = useState("earth");
  const [progress, setProgress]       = useState(0);
  const [running, setRunning]         = useState(false);
  const [done, setDone]               = useState(false);
  const rafRef                        = useRef<number | undefined>(undefined);
  const startRef                      = useRef<number>(0);

  const target = BODY_PHYSICS.find((b) => b.slug === selectedSlug)!;
  const distKm = target.distFromSunMkm * 1_000_000;
  const travelSeconds = distKm / LIGHT_SPEED_KMS;
  const color = BODY_COLOR[selectedSlug] ?? "#4488cc";

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRunning(false);
  }, []);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  // Reset when destination changes
  useEffect(() => {
    stop();
    setProgress(0);
    setDone(false);
  }, [selectedSlug, stop]);

  function launch() {
    stop();
    setProgress(0);
    setDone(false);
    setRunning(true);
    startRef.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startRef.current;
      const p = Math.min(1, elapsed / ANIM_DURATION_MS);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRunning(false);
        setDone(true);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  const elapsedSec = travelSeconds * progress;
  const bodyData   = BODIES.find((b) => b.slug === selectedSlug);

  return (
    <div className="space-y-6">
      <p className="text-white/50 text-sm">
        Select a destination. Press <span className="text-white/70">Send Light</span> to watch
        a photon travel from the Sun in real-scale time — visualised over 5 seconds.
      </p>

      {/* Destination picker */}
      <div>
        <label htmlFor="dest-select" className="block text-xs text-white/35 uppercase tracking-widest mb-1.5">
          Destination
        </label>
        <select
          id="dest-select"
          value={selectedSlug}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full sm:w-72 rounded-xl px-4 py-2.5 bg-white/8 border border-white/12 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 appearance-none cursor-pointer"
          style={{ background: "rgba(8,12,40,0.8)" }}
        >
          {DESTINATIONS.map((bp) => (
            <option key={bp.slug} value={bp.slug} style={{ background: "#060818" }}>
              {bp.name}
            </option>
          ))}
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { label: "Distance from Sun",  value: formatDist(target.distFromSunMkm) },
          { label: "Light travel time",  value: formatTime(travelSeconds) },
          { label: "Speed of light",     value: "299,792 km/s" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-white/8 p-3.5" style={{ background: "rgba(8,12,40,0.5)" }}>
            <p className="text-[10px] text-white/30 uppercase tracking-wide mb-1">{label}</p>
            <p className="text-white text-sm font-mono leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Visualisation */}
      <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(4,8,28,0.7)" }}>
        {/* Track */}
        <div className="relative h-12 flex items-center mb-4">
          {/* Sun icon */}
          <div
            className="w-8 h-8 rounded-full flex-shrink-0 z-10"
            style={{ background: "radial-gradient(circle at 40% 40%, #ffee88, #ffaa00)" }}
            aria-label="The Sun"
          />

          {/* Track line */}
          <div className="flex-1 mx-3 relative h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: `linear-gradient(90deg, #ffcc44, ${color})` }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ ease: "linear", duration: 0 }}
            />
            {/* Photon dot */}
            {running && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{
                  left: `calc(${progress * 100}% - 6px)`,
                  background: color,
                  boxShadow: `0 0 8px ${color}`,
                }}
              />
            )}
          </div>

          {/* Destination icon */}
          <div
            className="w-8 h-8 rounded-full flex-shrink-0 z-10"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}55)`,
              opacity: done ? 1 : 0.4,
              transition: "opacity 0.3s",
              boxShadow: done ? `0 0 16px ${color}88` : "none",
            }}
            aria-label={target.name}
          />
        </div>

        {/* Labels */}
        <div className="flex items-center justify-between text-xs text-white/30 mb-5 px-1">
          <span>The Sun</span>
          <span style={{ color: done ? color : undefined, transition: "color 0.3s" }}>
            {target.name}
          </span>
        </div>

        {/* Timer display */}
        <div className="text-center">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Elapsed time</p>
          <p
            className="text-3xl font-mono font-light tabular-nums"
            style={{ color: running || done ? color : "rgba(255,255,255,0.2)" }}
          >
            {formatTime(Math.max(0, elapsedSec))}
          </p>
          {done && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-white/50 mt-2"
            >
              Light has arrived at {target.name}.
              {bodyData && (
                <span className="text-white/30"> "{bodyData.oneLineHook}"</span>
              )}
            </motion.p>
          )}
        </div>
      </div>

      {/* Launch button */}
      <div className="flex gap-3">
        <button
          onClick={launch}
          disabled={running}
          className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-medium transition-all ${
            running
              ? "opacity-50 cursor-not-allowed bg-white/8 text-white/40 border border-white/8"
              : "text-black hover:brightness-110 active:scale-95"
          }`}
          style={!running ? { background: color } : {}}
          aria-label="Send a photon from the Sun"
        >
          {running ? "Sending…" : done ? "Send Again" : "Send Light ✦"}
        </button>
        {running && (
          <button
            onClick={stop}
            className="px-4 py-3 rounded-xl text-sm text-white/50 border border-white/10 hover:text-white transition-colors"
          >
            Pause
          </button>
        )}
      </div>

      <p className="text-white/20 text-xs">
        Animation compressed to 5 seconds. Distances are mean values from JPL Horizons.
      </p>
    </div>
  );
}
