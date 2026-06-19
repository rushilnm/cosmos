import type { AssetEntry } from "./assetRegistry";

export type AssetStatus = "loaded" | "placeholder";

export interface ResolvedAsset {
  status: AssetStatus;
  path: string | null;
  entry: AssetEntry;
}

let _manifest: Record<string, boolean> | null = null;

async function getManifest(): Promise<Record<string, boolean>> {
  if (_manifest) return _manifest;
  try {
    const r = await fetch("/asset-manifest.json");
    _manifest = r.ok ? await r.json() : {};
  } catch {
    _manifest = {};
  }
  return _manifest!;
}

export async function resolveAsset(entry: AssetEntry): Promise<ResolvedAsset> {
  const manifest = await getManifest();
  return entry.path && manifest[entry.path]
    ? { status: "loaded", path: entry.path, entry }
    : { status: "placeholder", path: null, entry };
}

export function resolveAssetSync(
  entry: AssetEntry,
  manifest: Record<string, boolean>
): ResolvedAsset {
  return entry.path && manifest[entry.path]
    ? { status: "loaded", path: entry.path, entry }
    : { status: "placeholder", path: null, entry };
}

export function isLoaded(r: ResolvedAsset): r is ResolvedAsset & { path: string } {
  return r.status === "loaded" && r.path !== null;
}
