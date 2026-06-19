"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import BODIES from "@/data/bodies";
import GlassPanel from "@/components/ui/GlassPanel";

// Dynamically import — contains R3F Canvas, must be client-only
const OrreryCanvas = dynamic(
  () => import("@/components/canvas/OrreryCanvas"),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

const planets   = BODIES.filter((b) => b.type === "planet");
const dwarfs    = BODIES.filter((b) => b.type === "dwarf-planet");
const moons     = BODIES.filter((b) => b.type === "moon");
const stars     = BODIES.filter((b) => b.type === "star");

export default function SolarSystemPage() {
  return (
    <main className="min-h-screen">
      {/* ── Interactive orrery hero ── */}
      <section
        className="relative w-full"
        style={{ height: "100svh" }}
        aria-label="Interactive 3D solar system orrery"
      >
        {/* Full-viewport orrery canvas */}
        <div className="absolute inset-0">
          <OrreryCanvas />
        </div>

        {/* Overlay: title + hint */}
        <div className="absolute inset-x-0 top-0 pt-24 flex flex-col items-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-[10px] tracking-[0.5em] text-blue-400/60 uppercase mb-3">
              Interactive 3D Model
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight tracking-widest text-white">
              Our Solar System
            </h1>
          </motion.div>
        </div>

        {/* Hint — bottom centre */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-1 pointer-events-none"
          aria-hidden="true"
        >
          <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Click a planet · Scroll to explore
          </p>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent mt-1" />
        </motion.div>
      </section>

      {/* ── Body catalogue ── */}
      <div className="max-w-6xl mx-auto px-4 pb-24 pt-16 space-y-14">
        <BodySection title="The Star" bodies={stars} />
        <BodySection title="Planets" bodies={planets} />
        <BodySection title="Dwarf Planets" bodies={dwarfs} />
        <BodySection title="Notable Moons" bodies={moons} />
      </div>
    </main>
  );
}

function BodySection({
  title,
  bodies,
}: {
  title: string;
  bodies: typeof BODIES;
}) {
  return (
    <section aria-label={title}>
      <motion.h2
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-xl font-light text-white/70 tracking-wide mb-5"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bodies.map((body, i) => (
          <motion.div
            key={body.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/body/${body.slug}`} className="block group focus-visible:outline-none">
              <GlassPanel
                as="article"
                className="p-4 h-full flex flex-col gap-2 group-hover:border-white/25 group-focus-visible:ring-2 group-focus-visible:ring-white/50 transition-all duration-300 group-hover:-translate-y-0.5"
              >
                {/* Colour swatch */}
                <div className="w-full h-20 rounded-lg flex items-center justify-center mb-1"
                  style={{ background: body.identityColor + "18", border: `1px solid ${body.identityColor}30` }}>
                  <span className="w-10 h-10 rounded-full block transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `radial-gradient(circle at 35% 35%, ${body.identityColor}cc, ${body.identityColor}66)` }}
                    aria-hidden />
                </div>
                <h3 className="text-white text-sm font-medium leading-tight">{body.name}</h3>
                <p className="text-white/50 text-xs line-clamp-2 leading-relaxed flex-1">
                  {body.oneLineHook}
                </p>
                <span className="text-[10px] text-white/25 capitalize mt-auto">
                  {body.type.replace("-", " ")}
                </span>
              </GlassPanel>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
