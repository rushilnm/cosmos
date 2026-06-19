export type ReadingLevel = "kid" | "explorer";   // kept for backward compat
export type DepthTier   = "discover" | "explore" | "professional";
export type QualityTier = "high" | "medium" | "low";
export type UnitSystem  = "SI" | "imperial" | "astronomical";
export type SceneType   = "home" | "solar-system" | "body" | "other";

export interface UserLocation {
  lat:  number;
  lng:  number;
  name: string;
}

export interface CosmosStore {
  // ── Depth / content ────────────────────────────────────────────────
  depthTier:    DepthTier;
  /** Derived from depthTier; kept so existing pages compile without edits. */
  readingLevel: ReadingLevel;
  units:        UnitSystem;

  // ── Quality / motion ───────────────────────────────────────────────
  qualityTier:   QualityTier;
  reducedMotion: boolean;

  // ── Time / location (for ephemeris, sky map, rise-set) ────────────
  /** ms timestamp. null = real now.  Set by the time-scrubber tool. */
  simulatedTime: number | null;
  userLocation:  UserLocation | null;

  // ── Audio ──────────────────────────────────────────────────────────
  audioEnabled: boolean;

  // ── Loading ────────────────────────────────────────────────────────
  isLoading:    boolean;
  loadProgress: number;

  // ── UI overlay ─────────────────────────────────────────────────────
  showPlaceholderOverlay: boolean;
  commandPaletteOpen:     boolean;

  // ── Canvas / navigation ────────────────────────────────────────────
  activeBodySlug: string | null;
  currentScene:   SceneType;
  /** Set by canvas click handlers; RouterSyncer watches and calls router.push. */
  navigateTo:     string | null;
}

const state: CosmosStore = {
  depthTier:    "explore",
  readingLevel: "explorer",
  units:        "SI",

  qualityTier:   "high",
  reducedMotion: false,

  simulatedTime: null,
  userLocation:  null,

  audioEnabled: false,
  isLoading:    true,
  loadProgress: 0,

  showPlaceholderOverlay: true,
  commandPaletteOpen:     false,

  activeBodySlug: null,
  currentScene:   "home",
  navigateTo:     null,
};

type Listener = (s: CosmosStore) => void;
const listeners = new Set<Listener>();

export const getStore = (): Readonly<CosmosStore> => state;

export function setStore(partial: Partial<CosmosStore>) {
  // Keep readingLevel in sync with depthTier automatically
  if (partial.depthTier !== undefined && partial.readingLevel === undefined) {
    partial.readingLevel = partial.depthTier === "discover" ? "kid" : "explorer";
  }
  Object.assign(state, partial);
  listeners.forEach(l => l(state));
}

export function subscribeStore(fn: Listener) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
