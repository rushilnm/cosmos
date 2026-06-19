"use client";

import GlassPanel from "@/components/ui/GlassPanel";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-white mb-4">About COSMOS</h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            An open, accurate, and beautifully designed guide to the universe — built for curious
            minds of all ages.
          </p>
        </section>

        <div className="grid gap-6">
          {/* Mission */}
          <GlassPanel as="section" className="p-6" aria-label="Our mission">
            <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              COSMOS exists to make the wonders of the universe accessible to everyone. Whether
              you're a curious 8-year-old or a first-year physics student, every page is written
              at two levels — <strong className="text-white">Kid</strong> and{" "}
              <strong className="text-white">Explorer</strong> — so you can explore at the depth
              that feels right.
            </p>
          </GlassPanel>

          {/* Accuracy commitment */}
          <GlassPanel as="section" className="p-6" aria-label="Accuracy commitment">
            <h2 className="text-xl font-semibold text-white mb-3">Our Accuracy Commitment</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              All data in COSMOS is sourced from peer-reviewed publications, NASA fact sheets, and
              IAU resources. Key sources include:
            </p>
            <ul className="space-y-2 text-white/65 text-sm">
              <li>• NASA Solar System Exploration (solarsystem.nasa.gov)</li>
              <li>• JPL Horizons ephemeris system</li>
              <li>• IAU Minor Planet Center</li>
              <li>• NASA/ESA Hubble and JWST press releases</li>
              <li>• Published papers in Nature, Science, and the Astrophysical Journal</li>
            </ul>
            <p className="text-white/50 text-xs mt-4">
              Found an error? Please raise an issue on GitHub — we take corrections seriously.
            </p>
          </GlassPanel>

          {/* Accessibility */}
          <GlassPanel as="section" className="p-6" aria-label="Accessibility statement">
            <h2 className="text-xl font-semibold text-white mb-3">Accessibility Statement</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              COSMOS aims to meet WCAG 2.1 AA standards. Every page includes a skip-to-content
              link, semantic HTML landmarks, visible focus indicators, sufficient colour contrast,
              and support for{" "}
              <code className="text-white/90">prefers-reduced-motion</code>. Screen-reader support
              is tested with VoiceOver and NVDA.
            </p>
            <p className="text-white/50 text-xs mt-4">
              If you encounter an accessibility barrier, please let us know so we can fix it.
            </p>
          </GlassPanel>

          {/* Tech stack */}
          <GlassPanel as="section" className="p-6" aria-label="Technology">
            <h2 className="text-xl font-semibold text-white mb-3">Built With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Next.js (App Router)",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "React Three Fiber",
                "Three.js",
                "Framer Motion",
                "GSAP",
                "Lenis (Smooth Scroll)",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Credits */}
          <GlassPanel as="section" className="p-6" aria-label="Credits">
            <h2 className="text-xl font-semibold text-white mb-3">Credits & Licence</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Planet and moon textures are sourced from Solar System Scope (
              <a
                href="https://www.solarsystemscope.com/textures/"
                className="text-white/90 underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                solarsystemscope.com
              </a>
              ) under a Creative Commons Attribution licence. NASA/JPL imagery is courtesy of
              NASA/JPL-Caltech and is in the public domain.
            </p>
          </GlassPanel>
        </div>
      </div>
    </main>
  );
}
