"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/useStore";
import { setStore } from "@/lib/store";
import BODIES from "@/data/bodies";
import TOPICS from "@/data/topics";

// ── Item type ─────────────────────────────────────────────────────────────────
interface PaletteItem {
  id:       string;
  label:    string;
  subtitle: string;
  href?:    string;
  action?:  () => void;
  icon:     string;
  color?:   string;
  group:    string;
}

// ── Static items ──────────────────────────────────────────────────────────────
const ROUTE_ITEMS: PaletteItem[] = [
  { id:"home",        label:"Home",               subtitle:"Start here",                       href:"/",                   icon:"✦", group:"Pages" },
  { id:"solar",       label:"Solar System",        subtitle:"Interactive 3D orrery",            href:"/solar-system",       icon:"◉", group:"Pages" },
  { id:"sky",         label:"Planetarium",         subtitle:"Real-time sky map",               href:"/sky",                icon:"★", group:"Pages" },
  { id:"live",        label:"Live Dashboard",      subtitle:"ISS, Moon phase, space weather",  href:"/live",               icon:"◉", group:"Pages" },
  { id:"apod",        label:"Astronomy Picture",   subtitle:"NASA APOD archive",               href:"/apod",               icon:"🖼", group:"Pages" },
  { id:"tools",       label:"Interactive Tools",   subtitle:"Weight calc, size compare…",      href:"/tools",              icon:"⚙", group:"Pages" },
  { id:"quiz",        label:"Quizzes",             subtitle:"Test your space knowledge",       href:"/quiz",               icon:"?", group:"Pages" },
  { id:"glossary",    label:"Glossary",            subtitle:"Plain-language definitions",      href:"/glossary",           icon:"A", group:"Pages" },
  { id:"search",      label:"Search",              subtitle:"Search all content",              href:"/search",             icon:"⌕", group:"Pages" },
  { id:"exoplanets",  label:"Exoplanet Catalog",   subtitle:"Browse confirmed exoplanets",     href:"/data/exoplanets",    icon:"🌍", group:"Data" },
  { id:"asteroids",   label:"Asteroid Tracker",    subtitle:"Near-Earth objects & approaches", href:"/data/asteroids",     icon:"☄", group:"Data" },
  { id:"mars",        label:"Mars Explorer",       subtitle:"Rover photos & weather",          href:"/data/mars",          icon:"♂", group:"Data" },
  { id:"spaceweather",label:"Space Weather",       subtitle:"Solar activity, Kp, aurora",      href:"/space-weather",      icon:"☀", group:"Data" },
  { id:"about",       label:"About COSMOS",        subtitle:"How this site was built",         href:"/about",              icon:"ℹ", group:"Pages" },
];

function buildItems(setOpen: (v: boolean) => void): PaletteItem[] {
  const bodyItems: PaletteItem[] = BODIES.map(b => ({
    id:       `body-${b.slug}`,
    label:    b.name,
    subtitle: b.oneLineHook,
    href:     `/body/${b.slug}`,
    icon:     "●",
    color:    b.identityColor,
    group:    "Celestial Bodies",
  }));

  const topicItems: PaletteItem[] = TOPICS.map(t => ({
    id:       `topic-${t.slug}`,
    label:    t.title,
    subtitle: t.subtitle,
    href:     `/topics/${t.slug}`,
    icon:     "≡",
    color:    t.color,
    group:    "Topics",
  }));

  const actionItems: PaletteItem[] = [
    { id:"tier-discover",     label:"Switch to Discover mode",     subtitle:"Simple language & big visuals",     icon:"🌱", group:"Actions",
      action: () => { setStore({ depthTier: "discover" }); setOpen(false); } },
    { id:"tier-explore",      label:"Switch to Explore mode",      subtitle:"Richer explanations & stats",       icon:"🚀", group:"Actions",
      action: () => { setStore({ depthTier: "explore" }); setOpen(false); } },
    { id:"tier-pro",          label:"Switch to Professional mode", subtitle:"Orbital elements, ephemeris, citations", icon:"🔭", group:"Actions",
      action: () => { setStore({ depthTier: "professional" }); setOpen(false); } },
    { id:"open-overlay",      label:"Open Placeholder Overlay",    subtitle:"Show asset & API key checklist",    icon:"⬡", group:"Actions",
      action: () => { setStore({ showPlaceholderOverlay: true }); setOpen(false); } },
  ];

  return [...ROUTE_ITEMS, ...bodyItems, ...topicItems, ...actionItems];
}

// ── Score-based fuzzy filter ──────────────────────────────────────────────────
function score(item: PaletteItem, q: string): number {
  const haystack = `${item.label} ${item.subtitle} ${item.group}`.toLowerCase();
  if (haystack.startsWith(q)) return 3;
  if (item.label.toLowerCase().startsWith(q)) return 2.5;
  if (haystack.includes(q)) return 1;
  return 0;
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function CommandPalette() {
  const { commandPaletteOpen } = useStore();
  const [query, setQuery]      = useState("");
  const [cursor, setCursor]    = useState(0);
  const inputRef               = useRef<HTMLInputElement>(null);
  const listRef                = useRef<HTMLUListElement>(null);
  const router                 = useRouter();

  const setOpen = (v: boolean) => setStore({ commandPaletteOpen: v });

  const ALL_ITEMS = useMemo(() => buildItems(setOpen), []);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ITEMS.slice(0, 8);
    return ALL_ITEMS
      .map(item => ({ item, s: score(item, q) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s)
      .map(({ item }) => item)
      .slice(0, 12);
  }, [query, ALL_ITEMS]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!commandPaletteOpen);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [commandPaletteOpen]);

  // Focus input when opened
  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery("");
      setCursor(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandPaletteOpen]);

  // Keep cursor in bounds
  useEffect(() => setCursor(0), [items]);

  function navigate(item: PaletteItem) {
    if (item.action) { item.action(); return; }
    if (item.href)   { router.push(item.href); setOpen(false); }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setCursor(c => Math.min(c + 1, items.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)); }
    if (e.key === "Enter")     { e.preventDefault(); if (items[cursor]) navigate(items[cursor]); }
  }

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.children[cursor] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  // Group items
  const groups = useMemo(() => {
    const map: Record<string, PaletteItem[]> = {};
    for (const item of items) {
      if (!map[item.group]) map[item.group] = [];
      map[item.group].push(item);
    }
    return map;
  }, [items]);

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 z-[10001] w-full max-w-xl"
            role="dialog"
            aria-label="Command palette"
            aria-modal="true"
          >
            <div
              className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
              style={{ background: "rgba(4,8,24,0.96)", backdropFilter: "blur(24px)" }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                <span className="text-white/30 text-sm flex-shrink-0">⌕</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search pages, bodies, topics, actions…"
                  className="flex-1 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                  aria-label="Search"
                  aria-autocomplete="list"
                  aria-activedescendant={items[cursor] ? `cmd-item-${items[cursor].id}` : undefined}
                />
                <kbd className="hidden sm:block text-[10px] text-white/20 border border-white/10 rounded px-1.5 py-0.5">esc</kbd>
              </div>

              {/* Results */}
              <ul
                ref={listRef}
                className="max-h-80 overflow-y-auto py-1.5"
                role="listbox"
                aria-label="Results"
              >
                {Object.entries(groups).map(([group, groupItems]) => (
                  <li key={group} role="presentation">
                    <p className="text-[10px] text-white/25 uppercase tracking-widest px-4 pt-3 pb-1">{group}</p>
                    <ul role="group" aria-label={group}>
                      {groupItems.map((item) => {
                        const flatIdx = items.indexOf(item);
                        const isActive = cursor === flatIdx;
                        return (
                          <li
                            key={item.id}
                            id={`cmd-item-${item.id}`}
                            role="option"
                            aria-selected={isActive}
                            onClick={() => navigate(item)}
                            onMouseEnter={() => setCursor(flatIdx)}
                            className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                              isActive ? "bg-white/10" : "hover:bg-white/5"
                            }`}
                          >
                            <span
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                              style={{
                                background: item.color ? item.color + "28" : "rgba(255,255,255,0.08)",
                                color: item.color ?? "rgba(255,255,255,0.5)",
                              }}
                              aria-hidden
                            >
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm leading-tight">{item.label}</p>
                              <p className="text-white/35 text-xs truncate">{item.subtitle}</p>
                            </div>
                            {item.href && isActive && (
                              <span className="text-white/20 text-xs flex-shrink-0">↵</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
                {items.length === 0 && (
                  <li className="px-4 py-8 text-center text-white/30 text-sm">
                    No results for "{query}"
                  </li>
                )}
              </ul>

              {/* Footer */}
              <div className="border-t border-white/8 px-4 py-2 flex gap-4 text-[10px] text-white/20">
                <span><kbd className="border border-white/10 rounded px-1">↑↓</kbd> navigate</span>
                <span><kbd className="border border-white/10 rounded px-1">↵</kbd> open</span>
                <span><kbd className="border border-white/10 rounded px-1">esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
