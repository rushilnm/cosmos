"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import GlassPanel from "@/components/ui/GlassPanel";

// Dynamically import heavy tool components (they use browser APIs)
const WeightCalculator = dynamic(() => import("@/components/tools/WeightCalculator"), { ssr: false });
const SizeComparison   = dynamic(() => import("@/components/tools/SizeComparison"),   { ssr: false });
const LightTravelTimer = dynamic(() => import("@/components/tools/LightTravelTimer"), { ssr: false });

// ── Active tools ──────────────────────────────────────────────────────────────
const ACTIVE_TOOLS = [
  {
    id:          "weight" as const,
    title:       "Weight on Other Worlds",
    description: "Enter your weight and find out how much you'd weigh on every planet, moon, and dwarf planet.",
    icon:        "⚖️",
  },
  {
    id:          "size" as const,
    title:       "Size Comparison",
    description: "Stack planets side by side for an honest, to-scale size comparison.",
    icon:        "🔭",
  },
  {
    id:          "light" as const,
    title:       "Light Travel Timer",
    description: "Watch a photon travel from the Sun to any body in our solar system.",
    icon:        "💡",
  },
] as const;

type ActiveToolId = typeof ACTIVE_TOOLS[number]["id"];

// ── Coming soon tools ─────────────────────────────────────────────────────────
const COMING_SOON = [
  { icon: "📏", title: "Scale Model Builder",     description: "Resize the solar system to a football field and see where every planet lands." },
  { icon: "🪐", title: "Orbit Simulator",          description: "Drag planets to different distances and watch orbital speed change." },
  { icon: "⭐", title: "Star Lifecycle Explorer",  description: "Select a star mass and animate its entire life — nebula to supernova." },
  { icon: "🌓", title: "Day & Night Simulator",   description: "Spin any planet and watch its day/night terminator sweep across the surface." },
  { icon: "✨", title: "Constellation Finder",    description: "Enter your location and date to see which constellations are visible tonight." },
  { icon: "🚀", title: "Missions Timeline",       description: "Scrub through 70+ years of space exploration on an interactive timeline." },
];

// ── Main component ─────────────────────────────────────────────────────────────
export default function ToolsHub() {
  const [activeTool, setActiveTool] = useState<ActiveToolId>("weight");

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-white mb-4">Interactive Tools</h1>
          <p className="text-xl text-white/65 max-w-2xl mx-auto">
            Hands-on experiments to make space feel real. Drag, calculate, and explore.
          </p>
        </section>

        {/* Tab bar */}
        <div
          className="flex flex-col sm:flex-row gap-2 mb-0.5 p-1 rounded-2xl border border-white/8"
          style={{ background: "rgba(8,12,40,0.5)" }}
          role="tablist"
          aria-label="Available tools"
        >
          {ACTIVE_TOOLS.map((tool) => (
            <button
              key={tool.id}
              role="tab"
              aria-selected={activeTool === tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-all text-left ${
                activeTool === tool.id
                  ? "bg-white/12 text-white"
                  : "text-white/45 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              <span className="text-xl" aria-hidden>{tool.icon}</span>
              <span className="font-medium leading-tight">{tool.title}</span>
            </button>
          ))}
        </div>

        {/* Tool panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <GlassPanel
              className="p-6 sm:p-8 mt-1"
              role="tabpanel"
              aria-label={ACTIVE_TOOLS.find((t) => t.id === activeTool)?.title}
            >
              {/* Tool description */}
              <p className="text-white/45 text-sm mb-6 leading-relaxed">
                {ACTIVE_TOOLS.find((t) => t.id === activeTool)?.description}
              </p>

              {activeTool === "weight" && <WeightCalculator />}
              {activeTool === "size"   && <SizeComparison />}
              {activeTool === "light"  && <LightTravelTimer />}
            </GlassPanel>
          </motion.div>
        </AnimatePresence>

        {/* Coming soon section */}
        <section className="mt-16" aria-label="Coming soon tools">
          <h2 className="text-sm uppercase tracking-widest text-white/25 mb-6">More tools coming soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMING_SOON.map((tool) => (
              <GlassPanel
                key={tool.title}
                as="article"
                className="p-5 flex flex-col gap-2.5 opacity-55"
                aria-label={tool.title}
              >
                <span className="text-2xl" aria-hidden>{tool.icon}</span>
                <h3 className="text-white/70 text-sm font-medium">{tool.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed flex-1">{tool.description}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/8 text-white/30 w-fit">
                  Coming soon
                </span>
              </GlassPanel>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
