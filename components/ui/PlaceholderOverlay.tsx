"use client";
import { useEffect, useState } from "react";
import { useManifest } from "@/lib/manifestContext";
import REGISTRY, { API_KEYS, FILE_ASSETS, DATASETS } from "@/lib/assetRegistry";

export default function PlaceholderOverlay() {
  const [open, setOpen] = useState(false);
  const manifest        = useManifest();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "p" || e.key === "P") setOpen(v => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const missingFiles    = FILE_ASSETS.filter(a => a.path && !manifest[a.path]);
  const filledFiles     = FILE_ASSETS.filter(a => a.path &&  manifest[a.path]);
  const missingDatasets = DATASETS.filter(a   => a.path && !manifest[a.path]);
  const missingKeys     = API_KEYS; // API keys always shown — we can't check env client-side

  const totalMissing = missingFiles.length + missingDatasets.length;
  const totalFilled  = filledFiles.length;
  const totalFiles   = FILE_ASSETS.length + DATASETS.length;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Show asset placeholder overlay"
        className="fixed bottom-4 left-4 z-[9999] bg-black/70 border border-yellow-500/50 text-yellow-400 text-[10px] font-mono px-3 py-1.5 rounded-full backdrop-blur-sm hover:border-yellow-400 transition-colors"
      >
        [P] Assets {totalFilled}/{totalFiles} · Keys {API_KEYS.length}
      </button>
    );
  }

  const Section = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
    <div className="mb-3">
      <p className={`text-[10px] uppercase tracking-widest mb-2 px-1 ${color}`}>{title}</p>
      {children}
    </div>
  );

  const Row = ({ id, label, target, filled, note }: { id: number|string; label: string; target: string; filled?: boolean; note?: string }) => (
    <div className={`flex gap-2 px-2 py-1.5 rounded-lg border mb-1 ${filled ? "bg-green-500/8 border-green-500/15 opacity-60" : "bg-yellow-500/8 border-yellow-500/15"}`}>
      <span className={`font-bold w-10 shrink-0 text-[11px] ${filled ? "text-green-400" : "text-yellow-400"}`}>
        {filled ? "✓" : "#"}{id}
      </span>
      <div className="min-w-0 flex-1">
        <div className={`truncate text-[11px] ${filled ? "text-white/60" : "text-white/85"}`}>{label}</div>
        <div className="text-slate-400 truncate text-[10px]">→ {target}</div>
        {note && <div className="text-slate-500 truncate text-[10px]">{note}</div>}
      </div>
    </div>
  );

  return (
    <div role="dialog" aria-label="Asset & config checklist" className="fixed inset-0 z-[9999] flex items-start justify-end pointer-events-none">
      <div className="pointer-events-auto m-3 w-96 max-h-[92vh] overflow-y-auto bg-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-2xl text-xs font-mono shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 bg-black/92 backdrop-blur border-b border-yellow-500/20 px-4 py-3 flex items-center justify-between">
          <span className="text-yellow-400 font-semibold tracking-wide">PLACEHOLDER CHECKLIST</span>
          <span className="text-slate-400 text-[10px]">Files {totalFilled}/{totalFiles} · Keys {API_KEYS.length}</span>
          <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white ml-2" aria-label="Close">[P]</button>
        </div>

        <div className="p-3">

          {/* API Keys section — always shown */}
          <Section title={`API Keys (${API_KEYS.length})`} color="text-blue-400/70">
            {missingKeys.map(a => (
              <Row key={a.id} id={a.id} label={a.label}
                target={a.envVar ? `NEXT_PUBLIC env: ${a.envVar}` : "No key required"}
                note={a.feature ? `Unlocks: ${a.feature}` : a.specs} />
            ))}
          </Section>

          {/* Missing datasets */}
          {missingDatasets.length > 0 && (
            <Section title={`Datasets missing (${missingDatasets.length})`} color="text-purple-400/70">
              {missingDatasets.map(a => (
                <Row key={a.id} id={a.id} label={a.label} target={a.path!} note={a.source} />
              ))}
            </Section>
          )}

          {/* Missing file assets */}
          {missingFiles.length > 0 && (
            <Section title={`File Assets Missing (${missingFiles.length})`} color="text-yellow-400/60">
              {missingFiles.map(a => (
                <Row key={a.id} id={a.id} label={a.label} target={a.path!} note={a.source} />
              ))}
            </Section>
          )}

          {/* Filled */}
          {filledFiles.length > 0 && (
            <Section title={`Filled (${filledFiles.length})`} color="text-green-400/60">
              {filledFiles.map(a => (
                <Row key={a.id} id={a.id} label={a.label} target={a.path!} filled />
              ))}
            </Section>
          )}
        </div>

        <div className="sticky bottom-0 bg-black/92 border-t border-yellow-500/15 px-4 py-2 text-slate-500 text-[10px]">
          Files: drop into public/ then restart · Keys: add to .env.local · Press P to hide
        </div>
      </div>
    </div>
  );
}
