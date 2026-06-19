"use client";

import { useStore } from "@/lib/useStore";
import { setStore, type DepthTier } from "@/lib/store";

const TIERS: { id: DepthTier; label: string; icon: string; title: string }[] = [
  { id: "discover",     icon: "🌱", label: "Discover",     title: "Simple language, biggest visuals, best analogies" },
  { id: "explore",      icon: "🚀", label: "Explore",      title: "Richer explanations, more stats, light interactivity" },
  { id: "professional", icon: "🔭", label: "Pro",          title: "Full precision — orbital elements, ephemeris, unit controls, citations" },
];

export default function DepthTierSelector({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const { depthTier } = useStore();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/15 p-1 ${className}`}
      style={{ background: "rgba(8,12,40,0.6)", backdropFilter: "blur(12px)" }}
      role="group"
      aria-label="Reading depth"
    >
      {TIERS.map(({ id, label, icon, title }) => {
        const active = depthTier === id;
        return (
          <button
            key={id}
            onClick={() => setStore({ depthTier: id })}
            aria-pressed={active}
            title={title}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              active
                ? "bg-blue-500 text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {compact ? icon : `${icon} ${label}`}
          </button>
        );
      })}
    </div>
  );
}
