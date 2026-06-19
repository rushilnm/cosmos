"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GlassPanel from "@/components/ui/GlassPanel";

const FEATURED = [
  { href: "/solar-system",        emoji: "🪐", title: "Solar System",    desc: "All 8 planets and dwarf worlds in one place" },
  { href: "/topics/the-sun",      emoji: "☀️", title: "The Sun",         desc: "Our star — the engine of the solar system" },
  { href: "/topics/black-holes",  emoji: "🌑", title: "Black Holes",     desc: "Where gravity is so strong light can't escape" },
  { href: "/topics/exoplanets",   emoji: "🌍", title: "Exoplanets",       desc: "Worlds orbiting distant stars" },
  { href: "/topics/galaxies",     emoji: "🌌", title: "Galaxies",         desc: "Islands of billions of stars" },
  { href: "/topics/stars",        emoji: "⭐", title: "Stars",            desc: "Birth, life, and spectacular deaths" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24" aria-labelledby="hero-h1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <p className="text-[11px] tracking-[0.5em] text-blue-400/70 uppercase mb-6">A journey for every curious mind</p>
          <h1 id="hero-h1" className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white mb-6">
            EXPLORE THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">UNIVERSE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
            From the Sun burning in our backyard to galaxies billions of light-years away —
            COSMOS is your guide to understanding it all, one wonder at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-system" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors">
              Start Exploring <span aria-hidden="true">→</span>
            </Link>
            <Link href="/topics/the-sun" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors">
              Pick a Topic
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30" aria-hidden="true">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24" aria-labelledby="topics-h2">
        <motion.h2 id="topics-h2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="text-2xl font-light text-white/80 text-center mb-12 tracking-wide">
          Where would you like to go?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED.map((t, i) => (
            <motion.div key={t.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
              <Link href={t.href} className="group block h-full">
                <GlassPanel className="p-6 h-full hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-3xl mb-4 block" aria-hidden="true">{t.emoji}</span>
                  <h3 className="text-white font-medium mb-2 group-hover:text-blue-300 transition-colors">{t.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32" aria-labelledby="tools-h2">
        <GlassPanel className="p-8 md:p-12 text-center">
          <h2 id="tools-h2" className="text-2xl font-light text-white mb-3">Try the interactive tools</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            How much would you weigh on Jupiter? How long is a year on Mercury?
            Watch a photon travel from the Sun to Earth in real time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              ["⚖️ Weight Calculator", "/tools"],
              ["🔭 Size Comparison", "/tools"],
              ["💡 Light-Travel Timer", "/tools"],
              ["❓ Take a Quiz", "/quiz"],
            ].map(([label, href]) => (
              <Link key={label} href={href}
                className="px-5 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}
