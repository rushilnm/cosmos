"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BODIES from "@/data/bodies";
import TOPICS from "@/data/topics";
import GlassPanel from "@/components/ui/GlassPanel";

type ResultKind = "body" | "topic";

interface SearchResult {
  kind: ResultKind;
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  color?: string;
}

const ALL_RESULTS: SearchResult[] = [
  ...BODIES.map((b) => ({
    kind: "body" as const,
    slug: b.slug,
    title: b.name,
    subtitle: b.oneLineHook,
    href: `/body/${b.slug}`,
    color: b.identityColor,
  })),
  ...TOPICS.map((t) => ({
    kind: "topic" as const,
    slug: t.slug,
    title: t.title,
    subtitle: t.subtitle,
    href: `/topics/${t.slug}`,
    color: t.color,
  })),
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_RESULTS.filter(
      (r) =>
        r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-white mb-4">Search</h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            Find planets, moons, dwarf planets, and topic articles.
          </p>
        </section>

        {/* Search input */}
        <label htmlFor="site-search" className="sr-only">
          Search COSMOS
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'Jupiter', 'black holes', 'stargazing'…"
          autoFocus
          className="w-full rounded-xl px-5 py-4 bg-white/5 border border-white/10 text-white text-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 mb-8"
        />

        {/* Empty state */}
        {query.trim() === "" && (
          <p className="text-white/30 text-center">Start typing to search…</p>
        )}

        {/* No results */}
        {query.trim() !== "" && results.length === 0 && (
          <p className="text-white/40 text-center">
            No results for &ldquo;{query}&rdquo;.
          </p>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="grid gap-3" role="list" aria-label="Search results">
            <p className="text-white/40 text-sm mb-1">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </p>
            {results.map((r) => (
              <Link
                key={`${r.kind}-${r.slug}`}
                href={r.href}
                role="listitem"
                className="block group focus-visible:outline-none"
              >
                <GlassPanel
                  as="article"
                  className="p-4 flex gap-4 items-center group-hover:border-white/30 group-focus-visible:ring-2 group-focus-visible:ring-white/60 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ background: (r.color ?? "#888888") + "44" }}
                    aria-hidden
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium">{r.title}</p>
                    <p className="text-white/50 text-sm line-clamp-1">{r.subtitle}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-white/10 text-white/40 capitalize">
                    {r.kind}
                  </span>
                </GlassPanel>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
