"use client";
import { useState, useEffect } from "react";
import { resolveAsset, type ResolvedAsset } from "./resolveAsset";
import type { AssetEntry } from "./assetRegistry";

export function useAsset(entry: AssetEntry): ResolvedAsset {
  const [resolved, setResolved] = useState<ResolvedAsset>({
    status: "placeholder", path: null, entry,
  });
  useEffect(() => {
    let alive = true;
    resolveAsset(entry).then(r => { if (alive) setResolved(r); });
    return () => { alive = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry.id]);
  return resolved;
}
