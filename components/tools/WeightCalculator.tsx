"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BODY_PHYSICS, BODY_COLOR } from "@/data/bodyPhysics";
import BODIES from "@/data/bodies";

const EARTH_GRAVITY = 9.81;

// Sorted by gravity ascending for a nice progression
const SORTED_BODIES = [...BODY_PHYSICS].sort((a, b) => a.gravityMps2 - b.gravityMps2);
const MAX_G = BODY_PHYSICS.find((b) => b.slug === "sun")!.gravityMps2;

function lbsToKg(lbs: number): number { return lbs * 0.453592; }
function kgToLbs(kg: number): number  { return kg  / 0.453592; }

function formatWeight(kg: number, unit: "kg" | "lbs"): string {
  const val = unit === "kg" ? kg : kgToLbs(kg);
  if (val < 0.1) return `< 0.1 ${unit}`;
  if (val >= 10_000) return `${(val / 1000).toFixed(1)} t`;
  return `${val.toFixed(1)} ${unit}`;
}

export default function WeightCalculator() {
  const [rawInput, setRawInput]   = useState("70");
  const [unit, setUnit]           = useState<"kg" | "lbs">("kg");
  const [hoveredSlug, setHovered] = useState<string | null>(null);

  const inputNum = parseFloat(rawInput) || 0;
  const weightKg = unit === "kg" ? inputNum : lbsToKg(inputNum);

  const results = useMemo(() =>
    SORTED_BODIES.map((bp) => {
      const weightOnBody = weightKg * (bp.gravityMps2 / EARTH_GRAVITY);
      const bodyData     = BODIES.find((b) => b.slug === bp.slug);
      return { ...bp, weightOnBody, bodyData };
    }),
    [weightKg]
  );

  const maxBodyWeight = useMemo(() =>
    Math.max(...results.map((r) => r.weightOnBody)),
    [results]
  );

  return (
    <div className="space-y-6">
      {/* Input row */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="flex-1">
          <label htmlFor="weight-input" className="block text-xs text-white/40 uppercase tracking-widest mb-1.5">
            Your weight
          </label>
          <div className="flex gap-2">
            <input
              id="weight-input"
              type="number"
              min="1"
              max="9999"
              step="0.1"
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              className="w-full rounded-xl px-4 py-2.5 bg-white/8 border border-white/12 text-white text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              aria-describedby="weight-unit"
            />
            <div id="weight-unit" className="flex rounded-xl overflow-hidden border border-white/12">
              {(["kg", "lbs"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => {
                    if (u !== unit) {
                      const converted = u === "lbs"
                        ? kgToLbs(parseFloat(rawInput) || 0)
                        : lbsToKg(parseFloat(rawInput) || 0);
                      setRawInput(converted.toFixed(1));
                      setUnit(u);
                    }
                  }}
                  className={`px-4 py-2.5 text-sm transition-colors ${
                    unit === u
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-white/40 hover:text-white/70"
                  }`}
                  aria-pressed={unit === u}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        </div>

        {weightKg > 0 && (
          <p className="text-white/40 text-sm sm:self-end sm:pb-2.5">
            = {unit === "kg"
              ? `${kgToLbs(weightKg).toFixed(1)} lbs`
              : `${weightKg.toFixed(1)} kg`}
          </p>
        )}
      </div>

      {weightKg <= 0 && (
        <p className="text-white/30 text-sm text-center py-4">Enter a weight above to see results.</p>
      )}

      {/* Results grid */}
      {weightKg > 0 && (
        <div className="grid gap-2">
          {results.map(({ slug, name, gravityMps2, weightOnBody, bodyData }, i) => {
            const color     = BODY_COLOR[slug] ?? "#888888";
            const barWidth  = maxBodyWeight > 0 ? (weightOnBody / maxBodyWeight) * 100 : 0;
            const isHovered = hoveredSlug === slug;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className="group relative rounded-xl overflow-hidden border border-white/8 transition-colors"
                style={{ background: isHovered ? color + "14" : "rgba(8,12,40,0.4)" }}
                onMouseEnter={() => setHovered(slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Progress bar background */}
                <motion.div
                  className="absolute inset-y-0 left-0 pointer-events-none"
                  initial={{ width: 0 }}
                  animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: color + "18" }}
                />

                <div className="relative flex items-center gap-3 px-4 py-3">
                  {/* Colour dot */}
                  <span
                    className="w-7 h-7 rounded-full flex-shrink-0"
                    style={{ background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}55)` }}
                    aria-hidden
                  />

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium leading-tight">{name}</p>
                    <p className="text-white/30 text-xs">
                      {gravityMps2} m/s² gravity
                    </p>
                  </div>

                  {/* Weight value */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-white font-mono text-sm font-semibold" style={{ color: isHovered ? color : undefined }}>
                      {formatWeight(weightOnBody, unit)}
                    </p>
                    {slug !== "earth" && (
                      <p className="text-white/30 text-[10px]">
                        {gravityMps2 < EARTH_GRAVITY
                          ? `${((1 - gravityMps2 / EARTH_GRAVITY) * 100).toFixed(0)}% lighter`
                          : `${((gravityMps2 / EARTH_GRAVITY - 1) * 100).toFixed(0)}% heavier`}
                      </p>
                    )}
                    {slug === "earth" && (
                      <p className="text-white/30 text-[10px]">home base</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <p className="text-white/20 text-xs text-center pt-2">
        Based on surface (or cloud-top) gravity. On gas giants you'd sink through the atmosphere.
      </p>
    </div>
  );
}
