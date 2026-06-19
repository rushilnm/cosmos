"use client";

import { useState, useMemo, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BODY_PHYSICS, BODY_COLOR } from "@/data/bodyPhysics";

const ORDERED_SLUGS = [
  "sun", "jupiter", "saturn", "uranus", "neptune",
  "earth", "venus", "mars", "mercury",
  "titan", "ganymede", "io", "moon", "europa", "pluto",
  "eris", "haumea", "makemake", "ceres", "enceladus",
];

// Remove ganymede — not in our data, keep only what's in BODY_PHYSICS
const AVAILABLE = ORDERED_SLUGS.filter((s) =>
  BODY_PHYSICS.find((b) => b.slug === s)
);

const PHYSICS_MAP = Object.fromEntries(BODY_PHYSICS.map((b) => [b.slug, b]));

const DEFAULT_SELECTED = ["earth", "moon", "jupiter", "sun"];

const MAX_CIRCLES = 6;
const SVG_HEIGHT  = 240;
const MAX_RADIUS  = SVG_HEIGHT / 2 - 8;
const MIN_RADIUS  = 6;

function getRadius(diamKm: number, logMin: number, logMax: number, useLog: boolean): number {
  if (useLog) {
    if (logMax === logMin) return (MAX_RADIUS + MIN_RADIUS) / 2;
    const t = (Math.log10(diamKm) - logMin) / (logMax - logMin);
    return MIN_RADIUS + t * (MAX_RADIUS - MIN_RADIUS);
  }
  return (diamKm / Math.pow(10, logMax)) * MAX_RADIUS;
}

function formatKm(km: number): string {
  if (km >= 1_000_000) return `${(km / 1_000_000).toFixed(2)}M km`;
  if (km >= 1_000)     return `${(km / 1_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} thousand km`;
  return `${km.toLocaleString()} km`;
}

export default function SizeComparison() {
  const [selected, setSelected]   = useState<string[]>(DEFAULT_SELECTED);
  const [useLog, setUseLog]       = useState(true);
  const [hoveredSlug, setHovered] = useState<string | null>(null);
  const labelId = useId();

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_CIRCLES) return prev;
      return [...prev, slug];
    });
  }

  const selectedPhysics = useMemo(() =>
    selected
      .map((s) => PHYSICS_MAP[s])
      .filter(Boolean)
      .sort((a, b) => b.diameterKm - a.diameterKm),
    [selected]
  );

  const { logMin, logMax } = useMemo(() => {
    const diams = selectedPhysics.map((b) => b.diameterKm);
    return {
      logMin: diams.length ? Math.log10(Math.min(...diams)) : 0,
      logMax: diams.length ? Math.log10(Math.max(...diams)) : 1,
    };
  }, [selectedPhysics]);

  const circles = useMemo(() =>
    selectedPhysics.map((bp) => ({
      ...bp,
      r: getRadius(bp.diameterKm, logMin, logMax, useLog),
      color: BODY_COLOR[bp.slug] ?? "#888888",
    })),
    [selectedPhysics, logMin, logMax, useLog]
  );

  // Pack circles left-to-right with padding
  const PADDING = 16;
  let xCursor = PADDING;
  const positioned = circles.map((c) => {
    const cx = xCursor + c.r;
    xCursor   = cx + c.r + PADDING;
    return { ...c, cx };
  });
  const svgWidth = Math.max(xCursor + PADDING, 400);

  return (
    <div className="space-y-6">
      {/* Log / Linear toggle */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-white/50 text-sm">
          Select up to {MAX_CIRCLES} bodies to compare.{" "}
          {selected.includes("sun") && !useLog && (
            <span className="text-amber-400/70">The Sun is so big it dwarfs everything else — try logarithmic scale.</span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/30">Scale:</span>
          {(["log", "linear"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setUseLog(mode === "log")}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                (useLog ? "log" : "linear") === mode
                  ? "bg-white/20 border-white/30 text-white"
                  : "bg-white/5 border-white/10 text-white/40 hover:text-white/70"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* SVG visualisation */}
      <div className="rounded-2xl border border-white/10 overflow-x-auto"
        style={{ background: "rgba(4,8,28,0.7)" }}>
        <svg
          width={svgWidth}
          height={SVG_HEIGHT + 40}
          aria-label="Size comparison visualisation"
          role="img"
        >
          {positioned.map(({ slug, name, diameterKm, r, color, cx }) => {
            const cy      = SVG_HEIGHT / 2;
            const hovered = hoveredSlug === slug;
            return (
              <g key={slug} onMouseEnter={() => setHovered(slug)} onMouseLeave={() => setHovered(null)}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  style={{
                    fill: color + (hovered ? "cc" : "88"),
                    stroke: hovered ? color : color + "44",
                    strokeWidth: 1,
                    transition: "fill 0.2s, stroke 0.2s",
                    filter: hovered ? `drop-shadow(0 0 ${r * 0.3}px ${color}88)` : undefined,
                  }}
                />
                {/* Label below circle */}
                <text
                  x={cx}
                  y={cy + r + 14}
                  textAnchor="middle"
                  fill={hovered ? "white" : "rgba(255,255,255,0.55)"}
                  fontSize={11}
                  fontFamily="inherit"
                  style={{ transition: "fill 0.2s" }}
                >
                  {name}
                </text>
                {/* Diameter on hover */}
                {hovered && (
                  <text
                    x={cx}
                    y={cy + r + 27}
                    textAnchor="middle"
                    fill={color}
                    fontSize={9}
                    fontFamily="inherit"
                  >
                    {formatKm(diameterKm)}
                  </text>
                )}
              </g>
            );
          })}
          {positioned.length === 0 && (
            <text x="50%" y="50%" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize={13} fontFamily="inherit">
              Select bodies below to compare
            </text>
          )}
        </svg>
      </div>

      {useLog && (
        <p className="text-white/25 text-[11px] text-center -mt-3">
          Logarithmic scale — true relative sizes are even more extreme.
        </p>
      )}

      {/* Body selector */}
      <div role="group" aria-label="Select bodies to compare">
        <p id={labelId} className="text-xs text-white/30 uppercase tracking-widest mb-3">
          {selected.length}/{MAX_CIRCLES} selected
        </p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE.map((slug) => {
            const bp      = PHYSICS_MAP[slug];
            if (!bp) return null;
            const color   = BODY_COLOR[slug] ?? "#888888";
            const checked = selected.includes(slug);
            const disabled = !checked && selected.length >= MAX_CIRCLES;

            return (
              <button
                key={slug}
                onClick={() => toggle(slug)}
                disabled={disabled}
                aria-pressed={checked}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                  checked
                    ? "border-current text-white"
                    : disabled
                    ? "border-white/5 text-white/20 cursor-not-allowed"
                    : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                }`}
                style={checked ? { borderColor: color, background: color + "22", color } : {}}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: color }}
                  aria-hidden
                />
                {bp.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison table */}
      {selectedPhysics.length >= 2 && (
        <div className="rounded-xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(8,12,40,0.4)" }}>
          <table className="w-full text-sm" aria-label="Size comparison table">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide">Body</th>
                <th className="text-right px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide">Diameter</th>
                <th className="text-right px-4 py-2.5 text-white/30 text-xs font-normal uppercase tracking-wide">vs Earth</th>
              </tr>
            </thead>
            <tbody>
              {selectedPhysics.map((bp, i) => {
                const color      = BODY_COLOR[bp.slug] ?? "#888888";
                const earthDiam  = 12_742;
                const ratio      = bp.diameterKm / earthDiam;
                const ratioStr   = ratio >= 100
                  ? `${ratio.toFixed(0)}×`
                  : ratio >= 10
                  ? `${ratio.toFixed(1)}×`
                  : ratio >= 1
                  ? `${ratio.toFixed(2)}×`
                  : `1/${(1/ratio).toFixed(1)}`;

                return (
                  <tr key={bp.slug} className={i < selectedPhysics.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="px-4 py-2.5 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ background: color }} aria-hidden />
                      <span className="text-white">{bp.name}</span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-white/70">
                      {bp.diameterKm.toLocaleString()} km
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono" style={{ color }}>
                      {bp.slug === "earth" ? "—" : ratioStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
