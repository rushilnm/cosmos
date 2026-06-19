/**
 * COSMOS Asset & Config Registry — single ordered source of truth.
 *
 * Kinds:
 *   texture | hdr | image | video | audio  → supply file at `path` under /public
 *   apikey                                  → set env var `envVar` in .env.local
 *   dataset                                 → supply data file at `path`
 *
 * Every `#id` is shown as a placeholder in the live site until resolved.
 * Press P to open the Placeholder Overlay.
 */

export type AssetKind = "texture" | "hdr" | "image" | "video" | "audio" | "apikey" | "dataset";

export interface AssetEntry {
  id:       number;
  kind:     AssetKind;
  path?:    string;       // relative to /public — for file assets
  envVar?:  string;       // env variable name — for apikey entries
  label:    string;
  specs:    string;
  source:   string;
  body?:    string;
  topic?:   string;
  feature?: string;       // which live feature this unlocks
}

const REGISTRY: AssetEntry[] = [

  // ── API KEYS ─────────────────────────────────────────────────────────────────
  { id:101, kind:"apikey", envVar:"NEXT_PUBLIC_NASA_API_KEY",
    label:"NASA API Key",
    specs:"Single key for: APOD, NEO (asteroids), Mars Rover Photos, DONKI (space weather)",
    source:"Free at https://api.nasa.gov/ — takes 30 seconds",
    feature:"apod, asteroids, mars-rover, space-weather" },

  { id:102, kind:"apikey", envVar:"NEXT_PUBLIC_NOAA_SWPC_KEY",
    label:"NOAA SWPC Space Weather Key",
    specs:"Optional — SWPC endpoints are mostly open, key unlocks higher rate limits",
    source:"https://www.swpc.noaa.gov/products/alerts-watches-and-warnings",
    feature:"space-weather" },

  // NASA Exoplanet Archive uses TAP protocol — no key required; listed for completeness
  { id:103, kind:"apikey", envVar:"",
    label:"NASA Exoplanet Archive (no key required)",
    specs:"TAP endpoint — public access. Set NEXT_PUBLIC_EXOPLANET_ENDPOINT if self-proxying.",
    source:"https://exoplanetarchive.ipac.caltech.edu/TAP/",
    feature:"exoplanets" },

  // ── DATASETS ─────────────────────────────────────────────────────────────────
  { id:104, kind:"dataset", path:"/data/hygdata_v41.csv",
    label:"HYG Star Catalog v4.1 (118,000 stars)",
    specs:"CSV, ra/dec/dist/mag/proper/hip columns. Reduces to ~9,000 bright stars for sky map.",
    source:"https://github.com/astronexus/HYG-Database (CC BY-SA 4.0)" },

  { id:105, kind:"dataset", path:"/data/constellations.json",
    label:"Constellation line data (88 IAU constellations)",
    specs:"JSON: { id, name, abbr, lines: [[hip1,hip2]] } — HIP star IDs",
    source:"https://github.com/Stellarium/stellarium/tree/master/skycultures/western (GPL)" },

  // ── SUN ──────────────────────────────────────────────────────────────────────
  { id:1,  kind:"texture", path:"/textures/bodies/sun/albedo.jpg",     label:"Sun surface texture",           specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA SDO public imagery / Solar System Scope", body:"sun" },
  { id:2,  kind:"texture", path:"/textures/bodies/sun/normal.jpg",     label:"Sun normal map",                specs:"2048×1024 JPEG, linear RGB, equirectangular",                        source:"Derived from SDO imagery", body:"sun" },
  { id:3,  kind:"image",   path:"/images/hero/sun-hero.jpg",           label:"Sun hero image",                specs:"1920×1080 JPEG, sRGB, dramatic solar surface",                       source:"NASA SDO public domain", body:"sun" },

  // ── MERCURY ──────────────────────────────────────────────────────────────────
  { id:4,  kind:"texture", path:"/textures/bodies/mercury/albedo.jpg", label:"Mercury albedo texture",        specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Visible Earth / Solar System Scope", body:"mercury" },
  { id:5,  kind:"texture", path:"/textures/bodies/mercury/normal.jpg", label:"Mercury normal map",            specs:"2048×1024 JPEG, linear RGB, equirectangular",                        source:"NASA PDS MESSENGER DEM", body:"mercury" },
  { id:6,  kind:"image",   path:"/images/hero/mercury-hero.jpg",       label:"Mercury hero image",            specs:"1920×1080 JPEG, sRGB",                                               source:"NASA MESSENGER public domain", body:"mercury" },

  // ── VENUS ────────────────────────────────────────────────────────────────────
  { id:7,  kind:"texture", path:"/textures/bodies/venus/albedo.jpg",   label:"Venus surface texture",         specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"Solar System Scope", body:"venus" },
  { id:8,  kind:"texture", path:"/textures/bodies/venus/clouds.jpg",   label:"Venus cloud layer",             specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA JPL public imagery", body:"venus" },
  { id:9,  kind:"image",   path:"/images/hero/venus-hero.jpg",         label:"Venus hero image",              specs:"1920×1080 JPEG, sRGB",                                               source:"NASA MESSENGER public domain", body:"venus" },

  // ── EARTH ────────────────────────────────────────────────────────────────────
  { id:10, kind:"texture", path:"/textures/bodies/earth/albedo.jpg",   label:"Earth day texture",             specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA Blue Marble (public domain)", body:"earth" },
  { id:11, kind:"texture", path:"/textures/bodies/earth/normal.jpg",   label:"Earth normal map",              specs:"4096×2048 JPEG, linear RGB, equirectangular",                        source:"Solar System Scope / NASA SRTM", body:"earth" },
  { id:12, kind:"texture", path:"/textures/bodies/earth/clouds.jpg",   label:"Earth cloud layer",             specs:"4096×2048 JPEG, greyscale, equirectangular",                         source:"NASA Blue Marble cloud layer (public domain)", body:"earth" },
  { id:13, kind:"texture", path:"/textures/bodies/earth/night.jpg",    label:"Earth night lights",            specs:"4096×2048 JPEG, linear RGB, equirectangular",                        source:"NASA VIIRS Earth at Night 2016 (public domain)", body:"earth" },
  { id:14, kind:"texture", path:"/textures/bodies/earth/specular.jpg", label:"Earth specular (ocean mask)",   specs:"4096×2048 JPEG, greyscale, equirectangular",                         source:"NASA Blue Marble water mask", body:"earth" },
  { id:15, kind:"image",   path:"/images/hero/earth-hero.jpg",         label:"Earth hero image",              specs:"1920×1080 JPEG, sRGB, Blue Marble style",                            source:"NASA public domain", body:"earth" },

  // ── MARS ─────────────────────────────────────────────────────────────────────
  { id:16, kind:"texture", path:"/textures/bodies/mars/albedo.jpg",    label:"Mars albedo texture",           specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA MOLA/HRSC (public domain)", body:"mars" },
  { id:17, kind:"texture", path:"/textures/bodies/mars/normal.jpg",    label:"Mars normal map",               specs:"2048×1024 JPEG, linear RGB, equirectangular",                        source:"Derived from NASA MOLA DEM", body:"mars" },
  { id:18, kind:"image",   path:"/images/hero/mars-hero.jpg",          label:"Mars hero image",               specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Mars Reconnaissance Orbiter (public domain)", body:"mars" },

  // ── JUPITER ──────────────────────────────────────────────────────────────────
  { id:19, kind:"texture", path:"/textures/bodies/jupiter/albedo.jpg", label:"Jupiter albedo texture",        specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA Cassini flyby mosaic (public domain)", body:"jupiter" },
  { id:20, kind:"image",   path:"/images/hero/jupiter-hero.jpg",       label:"Jupiter hero image",            specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Cassini (public domain)", body:"jupiter" },

  // ── SATURN ───────────────────────────────────────────────────────────────────
  { id:21, kind:"texture", path:"/textures/bodies/saturn/albedo.jpg",  label:"Saturn albedo texture",         specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA Cassini (public domain)", body:"saturn" },
  { id:22, kind:"texture", path:"/textures/bodies/saturn/ring.png",    label:"Saturn ring texture",           specs:"2048×256 PNG with alpha, radial cross-section",                      source:"Solar System Scope / JHT Planetary Pixel Emporium", body:"saturn" },
  { id:23, kind:"image",   path:"/images/hero/saturn-hero.jpg",        label:"Saturn hero image",             specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Cassini (public domain)", body:"saturn" },

  // ── URANUS ───────────────────────────────────────────────────────────────────
  { id:24, kind:"texture", path:"/textures/bodies/uranus/albedo.jpg",  label:"Uranus albedo texture",         specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Voyager 2 / Solar System Scope", body:"uranus" },
  { id:25, kind:"image",   path:"/images/hero/uranus-hero.jpg",        label:"Uranus hero image",             specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Voyager 2 (public domain)", body:"uranus" },

  // ── NEPTUNE ──────────────────────────────────────────────────────────────────
  { id:26, kind:"texture", path:"/textures/bodies/neptune/albedo.jpg", label:"Neptune albedo texture",        specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Voyager 2 / Solar System Scope", body:"neptune" },
  { id:27, kind:"image",   path:"/images/hero/neptune-hero.jpg",       label:"Neptune hero image",            specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Voyager 2 (public domain)", body:"neptune" },

  // ── MOON ─────────────────────────────────────────────────────────────────────
  { id:28, kind:"texture", path:"/textures/bodies/moon/albedo.jpg",    label:"Moon albedo texture",           specs:"4096×2048 JPEG, sRGB, equirectangular",                              source:"NASA LRO WAC mosaic (public domain)", body:"moon" },
  { id:29, kind:"texture", path:"/textures/bodies/moon/normal.jpg",    label:"Moon normal map",               specs:"4096×2048 JPEG, linear RGB, equirectangular",                        source:"NASA LOLA DEM", body:"moon" },
  { id:30, kind:"image",   path:"/images/hero/moon-hero.jpg",          label:"Moon hero image",               specs:"1920×1080 JPEG, sRGB",                                               source:"NASA LRO (public domain)", body:"moon" },

  // ── PLUTO ────────────────────────────────────────────────────────────────────
  { id:31, kind:"texture", path:"/textures/bodies/pluto/albedo.jpg",   label:"Pluto albedo texture",          specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA New Horizons (public domain)", body:"pluto" },
  { id:32, kind:"image",   path:"/images/hero/pluto-hero.jpg",         label:"Pluto hero image",              specs:"1920×1080 JPEG, sRGB",                                               source:"NASA New Horizons (public domain)", body:"pluto" },

  // ── CERES ────────────────────────────────────────────────────────────────────
  { id:33, kind:"texture", path:"/textures/bodies/ceres/albedo.jpg",   label:"Ceres albedo texture",          specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Dawn (public domain)", body:"ceres" },
  { id:34, kind:"image",   path:"/images/hero/ceres-hero.jpg",         label:"Ceres hero image",              specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Dawn (public domain)", body:"ceres" },

  // ── ERIS ─────────────────────────────────────────────────────────────────────
  { id:35, kind:"texture", path:"/textures/bodies/eris/albedo.jpg",    label:"Eris albedo texture",           specs:"1024×512 JPEG, sRGB, equirectangular",                               source:"Artist concept / Hubble (public domain)", body:"eris" },
  { id:36, kind:"image",   path:"/images/hero/eris-hero.jpg",          label:"Eris hero image",               specs:"1920×1080 JPEG, sRGB",                                               source:"NASA/ESA Hubble (public domain)", body:"eris" },

  // ── HAUMEA ───────────────────────────────────────────────────────────────────
  { id:37, kind:"texture", path:"/textures/bodies/haumea/albedo.jpg",  label:"Haumea albedo texture",         specs:"1024×512 JPEG, sRGB, equirectangular",                               source:"Artist concept", body:"haumea" },
  { id:38, kind:"image",   path:"/images/hero/haumea-hero.jpg",        label:"Haumea hero image",             specs:"1920×1080 JPEG, sRGB",                                               source:"Artist concept / ESO", body:"haumea" },

  // ── MAKEMAKE ─────────────────────────────────────────────────────────────────
  { id:39, kind:"texture", path:"/textures/bodies/makemake/albedo.jpg",label:"Makemake albedo texture",       specs:"1024×512 JPEG, sRGB, equirectangular",                               source:"Artist concept / Hubble", body:"makemake" },
  { id:40, kind:"image",   path:"/images/hero/makemake-hero.jpg",      label:"Makemake hero image",           specs:"1920×1080 JPEG, sRGB",                                               source:"Artist concept / NASA", body:"makemake" },

  // ── IO ───────────────────────────────────────────────────────────────────────
  { id:41, kind:"texture", path:"/textures/bodies/io/albedo.jpg",      label:"Io albedo texture",             specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Galileo / Solar System Scope", body:"io" },
  { id:42, kind:"image",   path:"/images/hero/io-hero.jpg",            label:"Io hero image",                 specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Galileo (public domain)", body:"io" },

  // ── EUROPA ───────────────────────────────────────────────────────────────────
  { id:43, kind:"texture", path:"/textures/bodies/europa/albedo.jpg",  label:"Europa albedo texture",         specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Galileo (public domain)", body:"europa" },
  { id:44, kind:"image",   path:"/images/hero/europa-hero.jpg",        label:"Europa hero image",             specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Galileo / Juno (public domain)", body:"europa" },

  // ── TITAN ────────────────────────────────────────────────────────────────────
  { id:45, kind:"texture", path:"/textures/bodies/titan/albedo.jpg",   label:"Titan albedo texture",          specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Cassini (public domain)", body:"titan" },
  { id:46, kind:"image",   path:"/images/hero/titan-hero.jpg",         label:"Titan hero image",              specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Cassini (public domain)", body:"titan" },

  // ── ENCELADUS ────────────────────────────────────────────────────────────────
  { id:47, kind:"texture", path:"/textures/bodies/enceladus/albedo.jpg",label:"Enceladus albedo texture",     specs:"2048×1024 JPEG, sRGB, equirectangular",                              source:"NASA Cassini (public domain)", body:"enceladus" },
  { id:48, kind:"image",   path:"/images/hero/enceladus-hero.jpg",     label:"Enceladus hero image",          specs:"1920×1080 JPEG, sRGB",                                               source:"NASA Cassini (public domain)", body:"enceladus" },

  // ── TOPICS (hero images) ──────────────────────────────────────────────────────
  { id:49, kind:"image",   path:"/images/topics/the-sun.jpg",          label:"The Sun topic hero",            specs:"1920×1080 JPEG, sRGB",                                               source:"NASA SDO (public domain)", topic:"the-sun" },
  { id:50, kind:"image",   path:"/images/topics/stars.jpg",            label:"Stars topic hero",              specs:"1920×1080 JPEG, sRGB — stellar nursery",                             source:"NASA/ESA Hubble (public domain)", topic:"stars" },
  { id:51, kind:"image",   path:"/images/topics/black-holes.jpg",      label:"Black holes topic hero",        specs:"1920×1080 JPEG, sRGB",                                               source:"NASA/ESA Hubble or EHT (public domain)", topic:"black-holes" },
  { id:52, kind:"image",   path:"/images/topics/galaxies.jpg",         label:"Galaxies topic hero",           specs:"1920×1080 JPEG, sRGB — Milky Way or Hubble deep field",              source:"NASA/ESA (public domain)", topic:"galaxies" },
  { id:53, kind:"image",   path:"/images/topics/the-universe.jpg",     label:"The Universe topic hero",       specs:"1920×1080 JPEG, sRGB — cosmic web or CMB",                           source:"NASA/ESA (public domain)", topic:"the-universe" },
  { id:54, kind:"image",   path:"/images/topics/moons.jpg",            label:"Moons topic hero",              specs:"1920×1080 JPEG, sRGB",                                               source:"NASA (public domain)", topic:"moons" },
  { id:55, kind:"image",   path:"/images/topics/asteroids-comets.jpg", label:"Asteroids/Comets topic hero",   specs:"1920×1080 JPEG, sRGB",                                               source:"NASA (public domain)", topic:"asteroids-comets-meteors" },
  { id:56, kind:"image",   path:"/images/topics/exoplanets.jpg",       label:"Exoplanets topic hero",         specs:"1920×1080 JPEG, sRGB — artist's concept",                            source:"NASA/ESA (public domain)", topic:"exoplanets" },
  { id:57, kind:"image",   path:"/images/topics/telescopes.jpg",       label:"Telescopes topic hero",         specs:"1920×1080 JPEG, sRGB — Hubble or JWST",                              source:"NASA/ESA (public domain)", topic:"telescopes" },
  { id:58, kind:"image",   path:"/images/topics/exploration.jpg",      label:"Exploration topic hero",        specs:"1920×1080 JPEG, sRGB — rocket launch or Apollo",                     source:"NASA (public domain)", topic:"exploration" },
  { id:59, kind:"image",   path:"/images/topics/stargazing.jpg",       label:"Stargazing topic hero",         specs:"1920×1080 JPEG, sRGB — night sky with Milky Way",                    source:"Free nature photography (CC0)", topic:"stargazing" },

  // ── GLOBAL ───────────────────────────────────────────────────────────────────
  { id:60, kind:"hdr",     path:"/hdr/milkyway.hdr",                   label:"Milky Way HDR environment",     specs:"4096×2048 .HDR, equirectangular, high dynamic range",                source:"Polyhaven (CC0) — search 'starry night'" },
  { id:61, kind:"audio",   path:"/audio/ambient/space.mp3",            label:"Ambient space soundscape",      specs:"MP3 stereo, looping-friendly, no hard attack at loop point",         source:"Freesound.org (CC0) or NASA 'Sounds of Space'" },

  // ── NARRATION (per-topic) ────────────────────────────────────────────────────
  { id:62, kind:"audio",   path:"/audio/narration/the-sun.mp3",        label:"The Sun narration",             specs:"MP3 mono, ~2-3 min, plain spoken narration",                         source:"Record with text-to-speech or human narration", topic:"the-sun" },
  { id:63, kind:"audio",   path:"/audio/narration/stars.mp3",          label:"Stars narration",               specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"stars" },
  { id:64, kind:"audio",   path:"/audio/narration/black-holes.mp3",    label:"Black holes narration",         specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"black-holes" },
  { id:65, kind:"audio",   path:"/audio/narration/galaxies.mp3",       label:"Galaxies narration",            specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"galaxies" },
  { id:66, kind:"audio",   path:"/audio/narration/the-universe.mp3",   label:"The Universe narration",        specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"the-universe" },
  { id:67, kind:"audio",   path:"/audio/narration/moons.mp3",          label:"Moons narration",               specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"moons" },
  { id:68, kind:"audio",   path:"/audio/narration/asteroids.mp3",      label:"Asteroids/comets narration",    specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"asteroids-comets-meteors" },
  { id:69, kind:"audio",   path:"/audio/narration/exoplanets.mp3",     label:"Exoplanets narration",          specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"exoplanets" },
  { id:70, kind:"audio",   path:"/audio/narration/telescopes.mp3",     label:"Telescopes narration",          specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"telescopes" },
  { id:71, kind:"audio",   path:"/audio/narration/exploration.mp3",    label:"Exploration narration",         specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"exploration" },
  { id:72, kind:"audio",   path:"/audio/narration/stargazing.mp3",     label:"Stargazing narration",          specs:"MP3 mono, ~2-3 min",                                                 source:"Record narration", topic:"stargazing" },
];

export default REGISTRY;

export const API_KEYS  = REGISTRY.filter(a => a.kind === "apikey");
export const DATASETS  = REGISTRY.filter(a => a.kind === "dataset");
export const FILE_ASSETS = REGISTRY.filter(a => !["apikey","dataset"].includes(a.kind));

export function getById(id: number): AssetEntry | undefined {
  return REGISTRY.find(a => a.id === id);
}
export function getByBody(body: string): AssetEntry[] {
  return REGISTRY.filter(a => a.body === body);
}
export function getByTopic(topic: string): AssetEntry[] {
  return REGISTRY.filter(a => a.topic === topic);
}
