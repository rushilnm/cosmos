// Numeric physical data for all 17 celestial bodies.
// Used by interactive tools (weight calc, size comparison, light travel timer).
// Sources: NASA Planetary Fact Sheets, JPL Horizons.

export interface BodyPhysics {
  slug: string;
  name: string;
  gravityMps2: number;       // surface gravity m/s²
  diameterKm: number;        // mean diameter km
  distFromSunMkm: number;    // mean distance from Sun, million km
}

export const BODY_PHYSICS: BodyPhysics[] = [
  { slug: "sun",       name: "The Sun",   gravityMps2: 274.0,  diameterKm: 1_392_700, distFromSunMkm:       0 },
  { slug: "mercury",   name: "Mercury",   gravityMps2:   3.70, diameterKm:     4_879, distFromSunMkm:    57.9 },
  { slug: "venus",     name: "Venus",     gravityMps2:   8.87, diameterKm:    12_104, distFromSunMkm:   108.2 },
  { slug: "earth",     name: "Earth",     gravityMps2:   9.81, diameterKm:    12_742, distFromSunMkm:   149.6 },
  { slug: "mars",      name: "Mars",      gravityMps2:   3.72, diameterKm:     6_779, distFromSunMkm:   227.9 },
  { slug: "jupiter",   name: "Jupiter",   gravityMps2:  24.79, diameterKm:   139_820, distFromSunMkm:   778.5 },
  { slug: "saturn",    name: "Saturn",    gravityMps2:  10.44, diameterKm:   116_460, distFromSunMkm: 1_432.0 },
  { slug: "uranus",    name: "Uranus",    gravityMps2:   8.69, diameterKm:    50_724, distFromSunMkm: 2_867.0 },
  { slug: "neptune",   name: "Neptune",   gravityMps2:  11.15, diameterKm:    49_244, distFromSunMkm: 4_515.0 },
  { slug: "moon",      name: "The Moon",  gravityMps2:   1.62, diameterKm:     3_474, distFromSunMkm:   149.98 },
  { slug: "pluto",     name: "Pluto",     gravityMps2:   0.62, diameterKm:     2_376, distFromSunMkm: 5_906.0 },
  { slug: "ceres",     name: "Ceres",     gravityMps2:   0.28, diameterKm:       945, distFromSunMkm:   413.0 },
  { slug: "eris",      name: "Eris",      gravityMps2:   0.82, diameterKm:     2_326, distFromSunMkm: 10_125.0 },
  { slug: "haumea",    name: "Haumea",    gravityMps2:   0.44, diameterKm:     1_960, distFromSunMkm: 6_452.0 },
  { slug: "makemake",  name: "Makemake",  gravityMps2:   0.50, diameterKm:     1_430, distFromSunMkm: 6_850.0 },
  { slug: "io",        name: "Io",        gravityMps2:   1.80, diameterKm:     3_643, distFromSunMkm:   778.9 },
  { slug: "europa",    name: "Europa",    gravityMps2:   1.32, diameterKm:     3_121, distFromSunMkm:   779.0 },
  { slug: "titan",     name: "Titan",     gravityMps2:   1.35, diameterKm:     5_150, distFromSunMkm: 1_432.0 },
  { slug: "enceladus", name: "Enceladus", gravityMps2:   0.11, diameterKm:       504, distFromSunMkm: 1_432.0 },
];

// km/s — speed of light
export const LIGHT_SPEED_KMS = 299_792;

// identity colours for tools (matches bodies.ts identityColor)
export const BODY_COLOR: Record<string, string> = {
  sun:       "#ffcc44",
  mercury:   "#b5b5c4",
  venus:     "#e8c06a",
  earth:     "#4488cc",
  mars:      "#cc5533",
  jupiter:   "#c88b5a",
  saturn:    "#e8d59a",
  uranus:    "#7de8e8",
  neptune:   "#3366cc",
  moon:      "#cccccc",
  pluto:     "#c4a880",
  ceres:     "#aaaaaa",
  eris:      "#ddddee",
  haumea:    "#b8e0e0",
  makemake:  "#cc8866",
  io:        "#ddcc44",
  europa:    "#aabbdd",
  titan:     "#cc9944",
  enceladus: "#e8f0ff",
};
