"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DepthTierSelector from "@/components/ui/DepthTierSelector";
import { setStore } from "@/lib/store";

// ── Data ─────────────────────────────────────────────────────────────────────
const TOPICS = [
  { href:"/topics/the-sun",                  label:"The Sun" },
  { href:"/topics/stars",                    label:"Stars" },
  { href:"/topics/black-holes",              label:"Black Holes" },
  { href:"/topics/galaxies",                 label:"Galaxies" },
  { href:"/topics/the-universe",             label:"The Universe" },
  { href:"/topics/moons",                    label:"Moons" },
  { href:"/topics/asteroids-comets-meteors", label:"Asteroids, Comets & Meteors" },
  { href:"/topics/exoplanets",               label:"Exoplanets" },
  { href:"/topics/telescopes",               label:"Telescopes" },
  { href:"/topics/exploration",              label:"Space Exploration" },
  { href:"/topics/stargazing",               label:"Stargazing" },
];

const EXPLORE = [
  { href:"/sky",           label:"Planetarium",        icon:"★", badge:"Phase 7" },
  { href:"/live",          label:"Live Dashboard",     icon:"◉", badge:"Live" },
  { href:"/apod",          label:"Astronomy Picture",  icon:"🖼", badge:null },
  { href:"/space-weather", label:"Space Weather",      icon:"☀", badge:null },
];

const DATA = [
  { href:"/data/exoplanets", label:"Exoplanet Catalog",  icon:"🌍" },
  { href:"/data/asteroids",  label:"Asteroid Tracker",   icon:"☄" },
  { href:"/data/mars",       label:"Mars Explorer",      icon:"♂" },
];

const MAIN = [
  { href:"/",             label:"Home" },
  { href:"/solar-system", label:"Solar System" },
];

const SECONDARY = [
  { href:"/tools",    label:"Tools" },
  { href:"/quiz",     label:"Quiz" },
  { href:"/glossary", label:"Glossary" },
];

// ── Nav link ──────────────────────────────────────────────────────────────────
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
        active ? "text-white bg-white/10" : "text-white/55 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </Link>
  );
}

// ── Dropdown trigger + panel ───────────────────────────────────────────────────
function NavDropdown({
  label, active, children,
}: { label: string; active: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
          active ? "text-white bg-white/10" : "text-white/55 hover:text-white hover:bg-white/5"
        }`}
      >
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M2 4l4 4 4-4"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute top-full mt-2 left-0 min-w-[220px] rounded-xl border border-white/10 py-2 shadow-2xl z-50"
            style={{ background: "rgba(2,6,28,0.97)", backdropFilter: "blur(20px)" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropItem({ href, label, icon, badge, onClick }: {
  href: string; label: string; icon?: string; badge?: string | null; onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      role="menuitem"
      onClick={onClick}
      className="flex items-center gap-2.5 px-4 py-2 text-sm text-white/65 hover:text-white hover:bg-white/8 transition-colors"
    >
      {icon && <span className="text-base w-5 text-center" aria-hidden>{icon}</span>}
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400/80 flex-shrink-0">
          {badge}
        </span>
      )}
    </Link>
  );
}

// ── Main Navigation ────────────────────────────────────────────────────────────
export default function Navigation() {
  const path          = usePathname();
  const [mobOpen, setMobOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  const isExploreActive  = EXPLORE.some(e => path.startsWith(e.href));
  const isDataActive     = DATA.some(d => path.startsWith(d.href));
  const isTopicsActive   = path.startsWith("/topics");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2"
      style={{ background:"rgba(2,6,20,0.75)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="COSMOS home">
        <span className="text-xl font-light tracking-[0.3em] text-white group-hover:text-blue-300 transition-colors">COSMOS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors" aria-hidden />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-0.5" role="list">
        {MAIN.map(item => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} active={isActive(item.href)} />
          </li>
        ))}

        {/* Topics dropdown */}
        <li>
          <NavDropdown label="Topics" active={isTopicsActive}>
            {TOPICS.map(t => <DropItem key={t.href} href={t.href} label={t.label} />)}
          </NavDropdown>
        </li>

        {/* Explore (live/sky/apod) dropdown */}
        <li>
          <NavDropdown label="Explore" active={isExploreActive}>
            {EXPLORE.map(e => <DropItem key={e.href} href={e.href} label={e.label} icon={e.icon} badge={e.badge} />)}
            <div className="mx-4 my-2 border-t border-white/8" />
            <p className="px-4 py-1 text-[10px] text-white/25 uppercase tracking-widest">Data</p>
            {DATA.map(d => <DropItem key={d.href} href={d.href} label={d.label} icon={d.icon} />)}
          </NavDropdown>
        </li>

        {SECONDARY.map(item => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} active={isActive(item.href)} />
          </li>
        ))}

        {/* Search */}
        <li>
          <Link href="/search"
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${isActive("/search") ? "text-white bg-white/10" : "text-white/55 hover:text-white hover:bg-white/5"}`}>
            Search
          </Link>
        </li>
      </ul>

      {/* Right side: depth tier + Cmd+K hint */}
      <div className="hidden lg:flex items-center gap-2">
        <DepthTierSelector />
        <button
          onClick={() => setStore({ commandPaletteOpen: true })}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-white/30 border border-white/10 hover:text-white/60 hover:border-white/20 transition-colors"
          aria-label="Open command palette"
        >
          <span>⌕</span>
          <kbd className="font-sans">⌘K</kbd>
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white/70 hover:text-white p-2"
        onClick={() => setMobOpen(v => !v)}
        aria-label={mobOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobOpen}
      >
        <span className="block w-5 h-0.5 bg-current mb-1.5" />
        <span className="block w-5 h-0.5 bg-current mb-1.5" />
        <span className="block w-5 h-0.5 bg-current" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-full left-0 right-0 border-b border-white/10 p-4 space-y-1 max-h-[85vh] overflow-y-auto"
            style={{ background:"rgba(2,6,20,0.97)", backdropFilter:"blur(20px)" }}
          >
            {/* Depth tier */}
            <div className="pb-2 mb-2 border-b border-white/8">
              <DepthTierSelector className="w-full justify-center" />
            </div>

            {/* Main links */}
            {[...MAIN, ...SECONDARY].map(item => (
              <Link key={item.href} href={item.href}
                className="block px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/8 transition-colors"
                onClick={() => setMobOpen(false)}>
                {item.label}
              </Link>
            ))}

            <div className="pt-2 pb-1 border-t border-white/8">
              <p className="text-white/25 text-[10px] uppercase tracking-widest px-3 mb-1">Topics</p>
              {TOPICS.map(t => (
                <Link key={t.href} href={t.href}
                  className="block px-3 py-1.5 text-sm text-white/55 hover:text-white transition-colors"
                  onClick={() => setMobOpen(false)}>
                  {t.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 pb-1 border-t border-white/8">
              <p className="text-white/25 text-[10px] uppercase tracking-widest px-3 mb-1">Explore & Data</p>
              {[...EXPLORE, ...DATA].map(item => (
                <Link key={item.href} href={item.href}
                  className="block px-3 py-1.5 text-sm text-white/55 hover:text-white transition-colors"
                  onClick={() => setMobOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Cmd+K button */}
            <button
              onClick={() => { setMobOpen(false); setStore({ commandPaletteOpen: true }); }}
              className="w-full mt-2 px-3 py-2 rounded-lg border border-white/10 text-white/40 text-sm text-left hover:text-white/70 transition-colors">
              ⌕ Search everything…
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
