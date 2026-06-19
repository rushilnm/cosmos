"use client";
/**
 * Thin wrapper kept for backward compat — delegates to DepthTierSelector
 * but only shows Discover / Explore (the two tiers with data content).
 * Use DepthTierSelector directly for the full 3-tier UI.
 */
import { useStore } from "@/lib/useStore";
import { setStore } from "@/lib/store";

export default function ReadingLevelToggle({ className = "" }: { className?: string }) {
  const { depthTier } = useStore();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 p-1 ${className}`}
      style={{ background: "rgba(8,12,40,0.6)", backdropFilter: "blur(12px)" }}
      role="group"
      aria-label="Reading depth"
    >
      <button
        onClick={() => setStore({ depthTier: "discover" })}
        aria-pressed={depthTier === "discover"}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          depthTier === "discover" ? "bg-blue-500 text-white" : "text-white/50 hover:text-white"
        }`}
      >
        🌱 Discover
      </button>
      <button
        onClick={() => setStore({ depthTier: "explore" })}
        aria-pressed={depthTier === "explore" || depthTier === "professional"}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          depthTier !== "discover" ? "bg-blue-500 text-white" : "text-white/50 hover:text-white"
        }`}
      >
        🚀 Explorer
      </button>
    </div>
  );
}
