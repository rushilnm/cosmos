"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Body } from "@/data/bodies";
import BODIES from "@/data/bodies";
import GlassPanel from "@/components/ui/GlassPanel";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import DepthTierSelector from "@/components/ui/DepthTierSelector";
import { useStore } from "@/lib/useStore";

interface Props { body: Body; }

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function BodyPage({ body }: Props) {
  const { depthTier } = useStore();
  const related = BODIES.filter((b) => body.relatedSlugs.includes(b.slug) && b.slug !== body.slug);

  return (
    <main className="min-h-screen pt-20 pb-16">

      {/* ── Hero band ── */}
      <div
        className="w-full py-20 px-4 mb-12 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${body.identityColor}20 0%, transparent 65%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs uppercase tracking-widest text-white/40 mb-2 capitalize"
          >
            {body.type.replace("-", " ")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: body.identityColor }}
          >
            {body.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-white/65 max-w-2xl mb-6"
          >
            {body.oneLineHook}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <DepthTierSelector />
          </motion.div>
        </div>

        {/* Hero asset placeholder — floats right */}
        <div className="absolute right-6 top-8 opacity-30 pointer-events-none" aria-hidden>
          <AssetPlaceholder id={body.assetIds.hero ?? 0}
            label={`${body.name} hero image`} width={200} height={200} />
        </div>
      </div>

      {/* ── Content sections ── */}
      <motion.div
        className="max-w-4xl mx-auto px-4 grid gap-8"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Overview */}
        <RevealPanel aria-label="Overview">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <p className="text-white/78 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {body.content[depthTier]}
          </p>
        </RevealPanel>

        {/* Key stats */}
        <RevealPanel aria-label="Key statistics">
          <h2 className="text-xl font-semibold text-white mb-5">Key Stats</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <StatItem label="Distance from Sun"  value={body.keyStats.distanceFromSun} color={body.identityColor} />
            <StatItem label="Diameter"            value={body.keyStats.diameter}        color={body.identityColor} />
            <StatItem label="Mass"                value={body.keyStats.mass}            color={body.identityColor} />
            <StatItem label="Surface gravity"     value={body.keyStats.gravity}         color={body.identityColor} />
            <StatItem label="Day length"          value={body.keyStats.dayLength}       color={body.identityColor} />
            <StatItem label="Year length"         value={body.keyStats.yearLength}      color={body.identityColor} />
            <StatItem label="Avg temperature"     value={body.keyStats.avgTemp}         color={body.identityColor} />
            <StatItem label="Known moons"         value={String(body.keyStats.moonsCount)} color={body.identityColor} />
          </dl>
        </RevealPanel>

        {/* Atmosphere + Composition side-by-side */}
        <div className="grid md:grid-cols-2 gap-6">
          <RevealPanel aria-label="Atmosphere">
            <h2 className="text-lg font-semibold text-white mb-3">Atmosphere</h2>
            <p className="text-white/65 text-sm leading-relaxed">{body.atmosphere}</p>
          </RevealPanel>
          <RevealPanel aria-label="Composition">
            <h2 className="text-lg font-semibold text-white mb-3">Composition</h2>
            <p className="text-white/65 text-sm leading-relaxed">{body.composition}</p>
          </RevealPanel>
        </div>

        {/* Fun facts */}
        <RevealPanel aria-label="Fun facts">
          <h2 className="text-xl font-semibold text-white mb-5">Did You Know?</h2>
          <ul className="space-y-3">
            {body.funFacts.map((fact, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-sm text-white/72"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                  style={{ background: body.identityColor + "40", color: body.identityColor }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                {fact}
              </motion.li>
            ))}
          </ul>
        </RevealPanel>

        {/* How we know */}
        <RevealPanel aria-label="How we know">
          <h2 className="text-xl font-semibold text-white mb-3">How We Know</h2>
          <p className="text-white/65 text-sm leading-relaxed">{body.howWeKnow}</p>
        </RevealPanel>

        {/* Comparisons */}
        {body.comparisons.length > 0 && (
          <RevealPanel aria-label="Scale comparisons">
            <h2 className="text-xl font-semibold text-white mb-4">Scale Comparisons</h2>
            <ul className="space-y-2">
              {body.comparisons.map((c, i) => (
                <li key={i} className="text-white/65 text-sm flex gap-3">
                  <span style={{ color: body.identityColor }} aria-hidden>↔</span>
                  {c}
                </li>
              ))}
            </ul>
          </RevealPanel>
        )}

        {/* Orbital data */}
        <RevealPanel aria-label="Orbital data">
          <h2 className="text-xl font-semibold text-white mb-5">Orbital Data</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <StatItem label="Semi-major axis" value={`${body.orbitData.semiMajorAxisAU} AU`}      color={body.identityColor} />
            <StatItem label="Orbital period"  value={`${body.orbitData.periodDays.toLocaleString()} days`} color={body.identityColor} />
            <StatItem label="Eccentricity"    value={String(body.orbitData.eccentricity)}          color={body.identityColor} />
            <StatItem label="Inclination"     value={`${body.orbitData.inclinationDeg}°`}          color={body.identityColor} />
          </dl>
        </RevealPanel>

        {/* Related bodies */}
        {related.length > 0 && (
          <section aria-label="Related bodies">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-white mb-5"
            >
              Explore Related Worlds
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {related.map((b, i) => (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link href={`/body/${b.slug}`} className="block group focus-visible:outline-none">
                    <GlassPanel
                      as="article"
                      className="p-4 group-hover:border-white/25 group-focus-visible:ring-2 group-focus-visible:ring-white/50 transition-all duration-300 group-hover:-translate-y-0.5"
                    >
                      <div className="w-8 h-8 rounded-full mb-2 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `radial-gradient(circle at 35% 35%, ${b.identityColor}cc, ${b.identityColor}55)` }}
                        aria-hidden />
                      <p className="text-white text-sm font-medium">{b.name}</p>
                      <p className="text-white/35 text-xs capitalize">{b.type.replace("-", " ")}</p>
                    </GlassPanel>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </motion.div>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function RevealPanel({ children, "aria-label": ariaLabel }: { children: React.ReactNode; "aria-label"?: string }) {
  return (
    <motion.div
      variants={reveal}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassPanel as="section" className="p-6" aria-label={ariaLabel}>
        {children}
      </GlassPanel>
    </motion.div>
  );
}

function StatItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="text-[10px] text-white/35 uppercase tracking-wider">{label}</dt>
      <dd className="text-white text-sm font-mono leading-snug"
        style={{ borderLeft: `2px solid ${color}55`, paddingLeft: 8 }}>
        {value}
      </dd>
    </div>
  );
}
