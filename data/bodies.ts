/**
 * COSMOS celestial body data — every field filled for every body.
 * Schema is identical across all 19 entries; no body is thinner than any other.
 * Three content tiers: discover (ages 8+), explore (enthusiast), professional (researcher).
 * Sources: NASA Fact Sheets, JPL Horizons, IAU, mission publications. See SOURCES.md.
 */

export interface ContentTier {
  discover: string;
  explore: string;
  professional: string;
}

/** @deprecated alias kept for backward compatibility — use ContentTier */
export type ReadingVariant = ContentTier;

export interface KeyStats {
  distanceFromSun: string;
  diameter: string;
  mass: string;
  gravity: string;
  dayLength: string;
  yearLength: string;
  avgTemp: string;
  moonsCount: number;
}

export interface OrbitData {
  semiMajorAxisAU: number;
  periodDays: number;
  eccentricity: number;
  inclinationDeg: number;
}

export interface AssetIds {
  albedo?: number;
  normal?: number;
  roughness?: number;
  clouds?: number;
  ring?: number;
  hero?: number;
}

export interface Body {
  slug: string;
  name: string;
  type: "star" | "planet" | "dwarf-planet" | "moon";
  identityColor: string;
  oneLineHook: string;
  content: ContentTier;
  keyStats: KeyStats;
  atmosphere: string;
  composition: string;
  funFacts: string[];
  howWeKnow: string;
  comparisons: string[];
  rotationPeriodHours: number;
  orbitData: OrbitData;
  assetIds: AssetIds;
  relatedSlugs: string[];
}

const BODIES: Body[] = [
  // ────────────────────────────── SUN ──────────────────────────────
  {
    slug: "sun",
    name: "The Sun",
    type: "star",
    identityColor: "#ffcc44",
    oneLineHook: "Our star — a colossal ball of burning gas that lights and warms our entire solar system.",
    content: {
      discover: "The Sun is a giant ball of hot gas sitting right in the middle of our solar system. It's so big that you could fit about 1.3 million Earths inside it! The Sun's heat and light make life on Earth possible.\n\nThe Sun is actually a kind of star — but it looks so much bigger and brighter than other stars because it's much, much closer to us. It's about 150 million kilometres away, which might sound far, but in space terms that's practically next door!\n\nInside the Sun, tiny particles crash together so hard that they create huge amounts of energy. That energy travels outward and eventually reaches us as sunlight. It takes about 8 minutes for sunlight to travel from the Sun to Earth.",
      explore: "The Sun is a G-type main-sequence star located at the centre of our solar system, approximately 150 million km (1 AU) from Earth. It contains 99.86% of the total mass of the solar system — its gravity holds everything in orbit.\n\nThe Sun generates energy through nuclear fusion: hydrogen nuclei fuse together in its core at temperatures of around 15 million °C, producing helium and releasing enormous amounts of energy as light and heat. This process has sustained the Sun for about 4.6 billion years and will continue for roughly another 5 billion.\n\nThe Sun's outer atmosphere — the corona — extends millions of kilometres into space and is heated to over 1 million °C by mechanisms still being studied. Solar wind, a constant stream of charged particles, emanates from the corona and influences every planet in the solar system.",
      professional: "The Sun is a Population I G2V main-sequence star (M☉ = 1.989 × 10³⁰ kg; L☉ = 3.828 × 10²⁶ W; R☉ = 6.957 × 10⁸ m; T_eff = 5,778 K). Core conditions (~15.7 × 10⁶ K, ~2.5 × 10¹⁶ Pa) drive the proton-proton chain (pp-I branch dominant): 4¹H → ⁴He + 2e⁺ + 2νe + 26.73 MeV per reaction. Each photon random-walks through the radiative zone for ~10⁵ yr before reaching the tachocline (0.713 R☉), below which rigid rotation gives way to the differentially rotating convection zone (equator ~455 nHz; poles ~340 nHz as resolved by helioseismology).\n\nThe Babcock-Leighton dynamo, seated at the tachocline shear layer, drives the 11-year sunspot cycle (22-year Hale cycle including field polarity reversal). Parker Solar Probe achieved a perihelion of 8.86 R☉ at ~694,000 km/h, directly sampling sub-Alfvénic solar-wind plasma. Solar neutrino detections by SNO (2001) confirmed the pp-chain rate via neutrino flavour oscillation, resolving the 30-year solar neutrino problem. Coronal heating (> 10⁶ K despite a 5,778 K photosphere) remains an active research question; leading mechanisms are Alfvén-wave dissipation and Parker's nanoflare model.",
    },
    keyStats: {
      distanceFromSun: "0 km (it IS the Sun)",
      diameter: "1,392,700 km",
      mass: "1.989 × 10³⁰ kg",
      gravity: "274 m/s²",
      dayLength: "~25–35 Earth days (differential rotation)",
      yearLength: "~225 million years (galactic orbit)",
      avgTemp: "5,500 °C (surface) / 15,000,000 °C (core)",
      moonsCount: 0,
    },
    atmosphere: "The Sun has no solid surface. Its visible 'surface' is the photosphere (5,500 °C). Above this is the chromosphere and then the corona, reaching over 1 million °C.",
    composition: "~73% hydrogen, ~25% helium, ~2% heavier elements (oxygen, carbon, neon, iron, others)",
    funFacts: [
      "Light from the Sun takes exactly 8 minutes and 20 seconds to reach Earth.",
      "The Sun accounts for 99.86% of all the mass in the solar system.",
      "A million Earths could fit inside the Sun.",
      "The Sun will eventually expand into a red giant, engulfing Mercury and Venus.",
      "The Sun produces solar flares — eruptions that can disrupt satellites and power grids on Earth.",
      "Every second, the Sun converts about 600 million tonnes of hydrogen into helium.",
    ],
    howWeKnow: "Spectroscopy of sunlight reveals its chemical composition; helioseismology — studying vibrations on the Sun's surface — lets scientists probe its interior. Parker Solar Probe (2018–present) directly samples the solar corona.",
    comparisons: [
      "If the Sun were a basketball, Earth would be a peppercorn about 26 metres away.",
      "The Sun's diameter is about 109 times Earth's diameter.",
    ],
    rotationPeriodHours: 609,
    orbitData: { semiMajorAxisAU: 0, periodDays: 0, eccentricity: 0, inclinationDeg: 0 },
    assetIds: { albedo: 1, normal: 2, hero: 3 },
    relatedSlugs: ["mercury", "venus", "earth", "mars"],
  },

  // ────────────────────────────── MERCURY ──────────────────────────
  {
    slug: "mercury",
    name: "Mercury",
    type: "planet",
    identityColor: "#a8956b",
    oneLineHook: "The smallest planet and the fastest sprinter — Mercury zips around the Sun in just 88 days.",
    content: {
      discover: "Mercury is the planet closest to the Sun and the smallest in our solar system. It's only a little bigger than Earth's Moon! Even though it's closest to the Sun, it's not the hottest planet — that title belongs to Venus.\n\nMercury has no real atmosphere to trap heat, so temperatures go from scorching hot on the side facing the Sun to bitterly cold on the night side. It's like a world of extremes!\n\nMercury moves so fast around the Sun that one Mercury year is only 88 Earth days. But a day on Mercury is actually longer than its year — it takes 59 Earth days just to spin around once!",
      explore: "Mercury is the innermost and smallest planet in the solar system, with a diameter of 4,879 km — about 38% of Earth's. Its extreme proximity to the Sun and lack of a substantial atmosphere result in the largest temperature swings in the solar system: from 430 °C at noon to −180 °C at night.\n\nDespite being closest to the Sun, Mercury is not the hottest planet because it has virtually no atmosphere to retain heat. Venus, with its thick CO₂ greenhouse atmosphere, is hotter.\n\nMercury's interior is dominated by an enormous iron core, making up about 85% of its radius — a proportion larger than any other planet. NASA's MESSENGER mission (2011–2015) mapped its entire surface, revealing vast volcanic plains, kilometre-deep craters, and evidence of water ice in permanently shadowed polar craters.",
      professional: "Mercury occupies a stable 3:2 spin-orbit resonance (P_rot = 58.646 days; P_orb = 87.969 days) reached by tidal dissipation acting on its high orbital eccentricity (e = 0.206). Its iron core occupies ~83 ± 1% of the planetary radius — the highest core-fraction of any solar-system planet — probably a consequence of giant-impact stripping of silicate mantle material or differential volatile condensation near the proto-Sun.\n\nMESSENGER magnetometer data confirm a global dipole field offset 480 km northward of the geometric centre, with equatorial surface intensity ~300 nT (~1% of Earth's). Mercury's 'hollows' — shallow, bright, irregular depressions 0.1–10 km wide — are unique to Mercury and form by sublimation of volatile-rich material (candidate species: sulfur compounds, alkali chlorides); their age is estimated at < 1 Gyr. BepiColombo (ESA/JAXA, launched 2018, Mercury orbit insertion 2025) will deploy two orbiters to constrain the core size via Love number k₂, map hollows globally, and characterise the exosphere.",
    },
    keyStats: {
      distanceFromSun: "~77–222 million km (0.31–0.47 AU)",
      diameter: "4,879 km",
      mass: "3.30 × 10²³ kg",
      gravity: "3.7 m/s²",
      dayLength: "58.6 Earth days (sidereal)",
      yearLength: "87.97 Earth days",
      avgTemp: "167 °C (mean); 430 °C (max) / −180 °C (min)",
      moonsCount: 0,
    },
    atmosphere: "Negligible exosphere — trace amounts of oxygen, sodium, hydrogen, helium, and potassium. No weather, no wind.",
    composition: "Rocky silicate surface over a giant iron-nickel core. Core makes up ~85% of the planet's radius.",
    funFacts: [
      "A day on Mercury (sunrise to sunrise) lasts 176 Earth days — longer than its year.",
      "Mercury has ice in craters at its poles, permanently shielded from sunlight.",
      "Its surface is covered in craters, including the Caloris Basin — 1,550 km across.",
      "Mercury has no moons and no rings.",
      "Because it's inside Earth's orbit, Mercury shows phases like the Moon when viewed through a telescope.",
      "Its large iron core may have formed because the outer layers were blasted away by a giant impact early in solar-system history.",
    ],
    howWeKnow: "NASA's MESSENGER spacecraft orbited Mercury from 2011–2015, mapping the entire surface. Mariner 10 flew by three times in 1974–75. BepiColombo is en route.",
    comparisons: [
      "Mercury is slightly larger than Earth's Moon.",
      "Its diameter is about 38% of Earth's.",
    ],
    rotationPeriodHours: 1407.6,
    orbitData: { semiMajorAxisAU: 0.387, periodDays: 87.97, eccentricity: 0.206, inclinationDeg: 7.0 },
    assetIds: { albedo: 4, normal: 5, hero: 6 },
    relatedSlugs: ["sun", "venus", "earth"],
  },

  // ────────────────────────────── VENUS ─────────────────────────────
  {
    slug: "venus",
    name: "Venus",
    type: "planet",
    identityColor: "#e8c97a",
    oneLineHook: "The hottest planet in the solar system — a scorching, crushing, cloud-wrapped world.",
    content: {
      discover: "Venus is sometimes called Earth's twin because it's almost the same size. But visiting Venus would be a nightmare! It's the hottest planet in our solar system, with temperatures hot enough to melt lead.\n\nVenus is wrapped in thick clouds of sulphuric acid that trap heat like a blanket. This is called the greenhouse effect — and on Venus it has gone completely out of control.\n\nStrangely, Venus spins backwards compared to most planets, and it spins very slowly. A day on Venus is longer than its year!",
      explore: "Venus is nearly identical to Earth in size and mass, but its environment couldn't be more different. Its thick atmosphere — 96.5% CO₂ — creates a runaway greenhouse effect that heats the surface to 465 °C, hotter than Mercury despite being farther from the Sun.\n\nAtmospheric pressure at the surface is 92 times that of Earth — equivalent to being 900 metres underwater. The Soviet Venera probes (1970–1984) were designed to survive for just over an hour on the surface before being crushed and melted.\n\nVenus rotates retrograde (east to west, opposite to Earth) and extremely slowly: its sidereal day is 243 Earth days, longer than its 225-day orbital period — meaning a Venus day outlasts its year.",
      professional: "Venus's retrograde rotation (P_rot = 243.025 days; P_orb = 224.701 days) gives a solar day of 116.75 Earth days. Competing formation hypotheses: a late giant impact reversing angular momentum, or resonant tidal coupling between Venus's solar and atmospheric tides locking into the current state. Venus's D/H ratio is ~100× Earth's — geochemical evidence that an ancient ocean (possibly 300 m–3 km deep) was lost via photodissociation and hydrogen escape over ~700 Myr.\n\nThe dense CO₂ atmosphere (92 bar, T_surface = 737 K) maintains a near-adiabatic tropospheric lapse rate; surface temperatures vary < 2 K globally despite 11 km of topographic relief (Maxwell Montes). Cloud-top atmospheric superrotation at ~60 km reaches 360 km/h — ~60× the planetary rotation rate. The 2020 claimed PH₃ detection (Greaves et al., 20 ppb) was disputed by subsequent reanalyses; current upper limit < 1 ppb. DAVINCI+ (NASA, ~2031 descent probe) and EnVision (ESA, ~2034 orbiter) will resolve surface composition and atmospheric chemistry.",
    },
    keyStats: {
      distanceFromSun: "~108 million km (0.72 AU)",
      diameter: "12,104 km",
      mass: "4.87 × 10²⁴ kg",
      gravity: "8.87 m/s²",
      dayLength: "243 Earth days (retrograde)",
      yearLength: "224.7 Earth days",
      avgTemp: "465 °C",
      moonsCount: 0,
    },
    atmosphere: "Dense: 96.5% CO₂, 3.5% N₂. Sulphuric-acid cloud layers at 45–70 km altitude. Surface pressure 92× Earth's.",
    composition: "Rocky silicate crust and mantle, likely an iron core. Surface dominated by volcanic plains and highlands.",
    funFacts: [
      "Venus is the hottest planet even though Mercury is closer to the Sun.",
      "The Soviet Venera 13 probe survived 127 minutes on Venus's surface — a record.",
      "Venus is the brightest natural object in the night sky after the Moon.",
      "A Venus day is longer than a Venus year.",
      "Venus spins backwards — on Venus, the Sun rises in the west.",
      "The clouds of Venus rain sulphuric acid, but it evaporates before reaching the surface.",
    ],
    howWeKnow: "Multiple Soviet Venera landers reached the surface (1970–1984). NASA's Magellan orbiter (1990–1994) mapped 98% of the surface using radar.",
    comparisons: [
      "Venus is 95% the diameter of Earth — Earth's nearest twin in size.",
      "Its atmospheric pressure is like being 900 m underwater on Earth.",
    ],
    rotationPeriodHours: -5832.5,
    orbitData: { semiMajorAxisAU: 0.723, periodDays: 224.7, eccentricity: 0.007, inclinationDeg: 3.4 },
    assetIds: { albedo: 7, clouds: 8, hero: 9 },
    relatedSlugs: ["sun", "earth", "mercury"],
  },

  // ────────────────────────────── EARTH ─────────────────────────────
  {
    slug: "earth",
    name: "Earth",
    type: "planet",
    identityColor: "#3a8fd1",
    oneLineHook: "Our home — the only world we know of where life exists, nestled in the Sun's \"just right\" zone.",
    content: {
      discover: "Earth is our home and, as far as we know, the only planet in the universe with life on it! It's the third planet from the Sun and sits in what scientists call the 'Goldilocks zone' — not too hot, not too cold, just right for liquid water.\n\nEarth is mostly covered in water — about 71% of the surface is ocean. It also has a protective atmosphere that shields us from harmful solar radiation and keeps us warm.\n\nEarth has one moon, which we just call 'the Moon.' The Moon's gravity causes our ocean tides, and it helps keep Earth's tilt stable — which keeps our seasons regular.",
      explore: "Earth is the fifth-largest planet and the densest in the solar system. It is unique among known worlds in having: liquid water on its surface, a nitrogen-oxygen atmosphere breathable by complex life, active plate tectonics, a strong magnetic field (generated by its liquid iron outer core), and a large stabilising moon.\n\nThe 'Goldilocks zone' (habitable zone) is the range of distances from a star where liquid water can exist on a planet's surface. Earth sits comfortably within the Sun's habitable zone at 1 AU.\n\nEarth's axial tilt of 23.5° creates the seasons, and its magnetic field deflects the solar wind that would otherwise strip the atmosphere — as likely happened to early Mars.",
      professional: "Earth's internal structure: inner solid Fe-Ni core (r ≈ 1,220 km, ~6,000 K), outer liquid Fe core (r = 1,220–3,480 km), lower mantle dominated by Mg-silicate bridgmanite + ferropericlase, upper mantle + transition zone, and crust (5–70 km). The geodynamo is sustained by compositional convection (inner-core crystallisation releases buoyant light elements) and thermal convection; current field intensity ~25–65 μT at the surface.\n\nPlate tectonics is Earth's dominant heat-loss mechanism, with ~20 plates consuming oceanic lithosphere at 2.5–15 cm/yr. The silicate-weathering feedback (Walker cycle) sequesters CO₂ on 10⁸-yr timescales, buffering long-term habitability. Milanković orbital forcing (100 kyr eccentricity, 41 kyr obliquity, 23 kyr precession) paces ice-age cycles through summer insolation at ~65°N. Earth's obliquity (23.44°) is stabilised within ±3° by lunar torques; without the Moon, chaotic obliquity excursions of 0°–85° would dramatically destabilise climate. The Sun orbits the Galactic centre at 8.178 ± 0.013 kpc (GRAVITY Collaboration 2019), completing one revolution in ~225 Myr.",
    },
    keyStats: {
      distanceFromSun: "~150 million km (1 AU)",
      diameter: "12,742 km",
      mass: "5.97 × 10²⁴ kg",
      gravity: "9.81 m/s²",
      dayLength: "23 hours 56 minutes (sidereal)",
      yearLength: "365.25 days",
      avgTemp: "15 °C",
      moonsCount: 1,
    },
    atmosphere: "78% nitrogen, 21% oxygen, 1% argon + trace gases (CO₂, water vapour). Ozone layer absorbs UV. Surface pressure 101.3 kPa.",
    composition: "Iron-nickel core (inner solid + outer liquid), silicate mantle, rocky crust. 71% of surface is liquid water.",
    funFacts: [
      "Earth is the densest planet in the solar system.",
      "The Moon is unusually large relative to Earth — about ¼ the diameter.",
      "Earth's magnetic field protects it from solar wind, which would otherwise erode the atmosphere.",
      "Earth is the only planet not named after a Roman or Greek deity ('Earth' comes from Old English/German).",
      "Plate tectonics recycles Earth's crust and may help regulate CO₂ levels, keeping the climate stable.",
      "More than 8.7 million species of life have been catalogued on Earth; millions more remain undiscovered.",
    ],
    howWeKnow: "Humans have lived on Earth and studied it for millennia; orbital satellites since Sputnik (1957) now monitor it continuously from space.",
    comparisons: [
      "If Earth were a basketball, the Moon would be a tennis ball about 7 metres away.",
      "Earth fits inside Jupiter about 1,300 times.",
    ],
    rotationPeriodHours: 23.93,
    orbitData: { semiMajorAxisAU: 1.0, periodDays: 365.25, eccentricity: 0.017, inclinationDeg: 0.0 },
    assetIds: { albedo: 10, normal: 11, clouds: 12, hero: 15 },
    relatedSlugs: ["moon", "sun", "mars", "venus"],
  },

  // ────────────────────────────── MARS ──────────────────────────────
  {
    slug: "mars",
    name: "Mars",
    type: "planet",
    identityColor: "#c1440e",
    oneLineHook: "The Red Planet — a world of towering volcanoes, vast canyons, and the best candidate for a second human home.",
    content: {
      discover: "Mars is called the Red Planet because its dusty surface is covered in iron oxide — essentially rust! It's about half the size of Earth and is the fourth planet from the Sun.\n\nMars has the tallest volcano in the solar system: Olympus Mons, which is almost three times taller than Mount Everest. It also has a giant canyon called Valles Marineris that would stretch across the entire United States.\n\nScientists think Mars once had liquid water and a thicker atmosphere. Today it's cold and dry, but we've sent lots of rovers there — including Curiosity and Perseverance — to look for signs of ancient life.",
      explore: "Mars is a rocky, cold, and thin-atmosphere world currently explored by multiple rovers, landers, and orbiters. Its thin CO₂ atmosphere (< 1% Earth's pressure) cannot maintain liquid water at the surface today, but geological features — ancient river channels, lakebeds, and polar ice deposits — strongly indicate a warmer, wetter past.\n\nOlympus Mons (21.9 km high, 600 km base) is the largest volcano known in the solar system. Valles Marineris (4,000 km long, up to 7 km deep) dwarfs the Grand Canyon.\n\nMars has two small, irregularly shaped moons: Phobos and Deimos, both likely captured asteroids. Phobos orbits so close to Mars that tidal forces are slowly tearing it apart — it will either crash into Mars or break apart into a ring in about 50 million years.",
      professional: "Mars's crustal dichotomy — smooth northern lowlands (mean elevation −4.2 km) vs. ancient cratered southern highlands (+2.8 km) — remains unexplained; leading hypotheses are a low-angle giant impact or endogenic plume volcanism. The Tharsis rise (~4–5 × 10⁸ km³ of volcanic material) may have driven true polar wander of ~20°. Mars's global magnetic field is absent today but remnant crustal magnetism in the southern highlands records an ancient dynamo that ceased ~4.1 Gya, after which solar-wind stripping eroded the early atmosphere (MAVEN: ~100 g/s current ion escape).\n\nInSight's seismometer (2018–2022) recorded > 1,300 marsquakes; inversion yields crust thickness 20–37 km (north) / 58–72 km (south), liquid outer core radius 1,830 ± 40 km (Jones et al. 2023), and core density implying significant sulfur content. Perseverance (Jezero Crater, landed 18 Feb 2021) has cached 23 sample tubes including igneous and aqueously altered rocks. Mars Sample Return (NASA ERO + ESA Earth Return Orbiter) targets Earth delivery ~2033–2035 for geochronology and biomarker analysis under terrestrial lab conditions.",
    },
    keyStats: {
      distanceFromSun: "~228 million km (1.52 AU)",
      diameter: "6,779 km",
      mass: "6.39 × 10²³ kg",
      gravity: "3.72 m/s²",
      dayLength: "24 hours 37 minutes",
      yearLength: "686.97 Earth days",
      avgTemp: "−63 °C (mean); 20 °C (max) / −143 °C (min)",
      moonsCount: 2,
    },
    atmosphere: "95.3% CO₂, 2.7% N₂, 1.6% Ar. Atmospheric pressure ~0.6% of Earth's. Thin, cold, and dry. Seasonal dust storms can envelop the entire planet.",
    composition: "Rocky silicate crust rich in iron oxide (rust), giving it the red colour. Likely a small iron-sulfide core.",
    funFacts: [
      "Olympus Mons on Mars is the largest volcano in the solar system — 21.9 km tall.",
      "Valles Marineris is so large it would stretch from New York to Los Angeles — and is 10× deeper than the Grand Canyon.",
      "Mars has the largest dust storms in the solar system, sometimes covering the entire planet.",
      "Water ice exists at both poles and beneath the surface.",
      "NASA's Ingenuity helicopter made the first powered flight on another planet on Mars in April 2021.",
      "A year on Mars is 687 Earth days, but a day (called a 'sol') is very close to an Earth day: 24h 37min.",
    ],
    howWeKnow: "More than 50 missions have been sent to Mars. NASA's Perseverance rover (landed 2021) is currently collecting rock samples for potential return to Earth.",
    comparisons: [
      "Mars is about half the diameter of Earth.",
      "Its gravity is 38% of Earth's — you'd weigh about a third as much there.",
    ],
    rotationPeriodHours: 24.62,
    orbitData: { semiMajorAxisAU: 1.524, periodDays: 686.97, eccentricity: 0.093, inclinationDeg: 1.9 },
    assetIds: { albedo: 16, normal: 17, hero: 18 },
    relatedSlugs: ["earth", "moon", "sun", "ceres"],
  },

  // ────────────────────────────── JUPITER ───────────────────────────
  {
    slug: "jupiter",
    name: "Jupiter",
    type: "planet",
    identityColor: "#c88b3a",
    oneLineHook: "The king of the planets — a colossal gas giant that could swallow 1,300 Earths.",
    content: {
      discover: "Jupiter is the biggest planet in our solar system by far! It's so large that all the other planets could fit inside it. Jupiter is a gas giant, meaning it doesn't have a solid surface — it's mostly made of hydrogen and helium gas.\n\nJupiter's most famous feature is the Great Red Spot — a storm that has been raging for at least 350 years! It used to be even bigger, but it's been shrinking slowly.\n\nJupiter has at least 95 moons. Four of the biggest — Io, Europa, Ganymede, and Callisto — were spotted by the astronomer Galileo in 1610, and are called the Galilean moons.",
      explore: "Jupiter is the fifth planet from the Sun and the most massive in the solar system — 2.5 times the mass of all other planets combined. Its powerful gravity significantly influences the orbits of other bodies, acting as a 'shield' that deflects some comets away from the inner solar system.\n\nJupiter is a gas giant composed primarily of hydrogen and helium, with no defined solid surface. Internal pressures are so extreme that hydrogen becomes electrically conductive ('metallic hydrogen'), generating Jupiter's enormous magnetic field — the strongest of any planet.\n\nIts 95 known moons include Europa, which harbours a vast liquid-water ocean beneath its icy crust — one of the most promising locations for extraterrestrial life in the solar system.",
      professional: "Juno's gravity science (zonal harmonics through J₁₆) reveals deep differential rotation extending ~3,000 km below the cloud tops; below this depth, Jupiter rotates rigidly as the magnetic braking by metallic hydrogen couples the atmosphere to the interior. The Great Red Spot (diameter ~16,000 km in 2024, down from ~40,000 km in the 1880s) has roots extending 200–500 km below cloud tops, as determined by Juno's 2023 gravity tracking. Juno's Microwave Radiometer (MWR) found a depletion of ammonia in the tropical belt relative to the well-mixed interior below ~50 bar, attributed to a moist convection / precipitation cycle.\n\nThe Galilean system is governed by the Laplace resonance (Io:Europa:Ganymede = 1:2:4), maintained by tidal dissipation; this forces non-zero eccentricities (e_Io = 0.0041; e_Europa = 0.0094) that drive ~60–160 TW of tidal heating in Io. Europa's subsurface ocean was confirmed by Galileo-induced field magnetometry; Europa Clipper (launched Oct 2024, arrival April 2030) will perform 49 flybys carrying REASON (ice-penetrating radar), MASPEX (mass spectrometer), and MAG to characterise ocean salinity and ice-shell thickness.",
    },
    keyStats: {
      distanceFromSun: "~778 million km (5.20 AU)",
      diameter: "139,820 km",
      mass: "1.90 × 10²⁷ kg",
      gravity: "24.79 m/s²",
      dayLength: "9 hours 56 minutes",
      yearLength: "11.86 Earth years",
      avgTemp: "−108 °C (cloud tops)",
      moonsCount: 95,
    },
    atmosphere: "89% molecular hydrogen, 10% helium, trace methane, ammonia, water vapour. Banded cloud structure with wind speeds up to 620 km/h.",
    composition: "Mainly hydrogen and helium. No solid surface. Internal layers: molecular H₂, metallic hydrogen, possible rocky core.",
    funFacts: [
      "Jupiter's Great Red Spot is a storm larger than Earth that has lasted 350+ years.",
      "Jupiter rotates faster than any other planet — a full day in under 10 hours.",
      "Its moon Ganymede is the largest moon in the solar system, bigger than Mercury.",
      "Jupiter has a faint ring system, invisible to the naked eye.",
      "Jupiter's magnetic field is 14 times stronger than Earth's.",
      "Jupiter has been struck by comets multiple times — in 1994, Comet Shoemaker-Levy 9 broke apart and slammed into it.",
    ],
    howWeKnow: "Pioneer 10 & 11, Voyager 1 & 2, Galileo orbiter (1995–2003), Juno orbiter (2016–present) have provided detailed study.",
    comparisons: [
      "1,300 Earths could fit inside Jupiter.",
      "Jupiter's diameter is about 11 times Earth's.",
    ],
    rotationPeriodHours: 9.93,
    orbitData: { semiMajorAxisAU: 5.203, periodDays: 4332.59, eccentricity: 0.049, inclinationDeg: 1.3 },
    assetIds: { albedo: 19, hero: 20 },
    relatedSlugs: ["io", "europa", "saturn", "sun"],
  },

  // ────────────────────────────── SATURN ────────────────────────────
  {
    slug: "saturn",
    name: "Saturn",
    type: "planet",
    identityColor: "#d4c07a",
    oneLineHook: "The ringed wonder — Saturn's spectacular rings are made of billions of chunks of ice and rock.",
    content: {
      discover: "Saturn is famous for its beautiful rings — bands of ice and rock that stretch hundreds of thousands of kilometres. The rings are surprisingly thin though, averaging only about 10 metres thick in places!\n\nSaturn is a gas giant like Jupiter. It's the least dense planet in the solar system — it would actually float if you could find a bathtub big enough! (Of course, there isn't one.)\n\nSaturn has 146 moons — more than any other planet. The most famous is Titan, which has a thick atmosphere and lakes of liquid methane, making it one of the most interesting places in the solar system.",
      explore: "Saturn is the sixth planet from the Sun and the second-largest in the solar system. Its defining feature — the ring system — extends up to 282,000 km from the planet's centre but is remarkably thin: mostly 10 m to 1 km thick. The rings consist of 93% water ice with some rocky debris.\n\nSaturn is the least dense planet: its bulk density (0.687 g/cm³) is less than water, so it would float. Its rapid rotation (10.7 hours) gives it a pronounced equatorial bulge.\n\nThe Cassini spacecraft orbited Saturn from 2004–2017, revealing extraordinary detail about the ring system, storm systems, and moons. Titan — Saturn's largest moon — has a dense nitrogen atmosphere, methane rain, and hydrocarbon lakes, making it the only moon with a substantial atmosphere.",
      professional: "Saturn's rings extend from 7,000 km (D ring) to 480,000 km (E ring outer edge) from the centre. The B ring (optical depth τ > 1, densest) is separated from the A ring by the Cassini Division (τ ≈ 0.05, cleared by 2:1 resonance with Mimas). Cassini gravity science estimates the ring mass at (1.54 ± 0.49) × 10¹⁹ kg — comparable to Mimas. Ring age is disputed between ~10–100 Myr (Cuzzi et al.) and early solar-system formation (Charnoz et al.). Saturn's north polar hexagonal jet stream (a standing Rossby wave at ~77°N, wavelength ~14,500 km) has persisted across Voyager and Cassini baselines of 30+ years.\n\nTitan's Huygens/GCMS confirmed nearly pure ¹²C methane — ruling out biological sources but consistent with deep hydrothermal production. Kraken Mare (estimated depth > 100 m, volume ~10³ km³) has shoreline wave heights constrained to < 1 cm (Lorenz et al.) by SAR observations. Dragonfly (RTG rotorcraft, launch 2028, arrival 2034) targets the Selk impact crater where transient water-organic mixing occurred, to characterise prebiotic chemistry.",
    },
    keyStats: {
      distanceFromSun: "~1.43 billion km (9.54 AU)",
      diameter: "116,460 km",
      mass: "5.68 × 10²⁶ kg",
      gravity: "10.44 m/s²",
      dayLength: "10 hours 40 minutes",
      yearLength: "29.46 Earth years",
      avgTemp: "−139 °C (cloud tops)",
      moonsCount: 146,
    },
    atmosphere: "96.3% hydrogen, 3.3% helium. Distinctive banding, powerful jet streams, and periodic megastorms.",
    composition: "Mostly hydrogen and helium. No solid surface. Dense central core of rock and ice.",
    funFacts: [
      "Saturn's rings span 282,000 km — about the distance from Earth to the Moon — but are only ~10 m thick in places.",
      "Saturn is less dense than water — it would float.",
      "Titan is the only moon in the solar system with a thick atmosphere and surface liquids.",
      "Saturn has 146 known moons — the most of any planet.",
      "Saturn's hexagonal polar vortex at the north pole is a bizarre six-sided jet-stream formation about 30,000 km across.",
      "The Cassini spacecraft plunged into Saturn's atmosphere on 15 September 2017, ending its 13-year mission.",
    ],
    howWeKnow: "Pioneer 11, Voyager 1 & 2, and the 13-year Cassini mission (2004–2017) provided comprehensive data. Hubble continues to monitor it.",
    comparisons: [
      "Saturn's diameter is about 9 times Earth's.",
      "Its ring system is wider than the distance between Earth and the Moon.",
    ],
    rotationPeriodHours: 10.66,
    orbitData: { semiMajorAxisAU: 9.537, periodDays: 10759.22, eccentricity: 0.057, inclinationDeg: 2.5 },
    assetIds: { albedo: 21, ring: 22, hero: 23 },
    relatedSlugs: ["titan", "enceladus", "jupiter", "uranus"],
  },

  // ────────────────────────────── URANUS ────────────────────────────
  {
    slug: "uranus",
    name: "Uranus",
    type: "planet",
    identityColor: "#7de8e8",
    oneLineHook: "The tipped-over planet — Uranus rolls around the Sun on its side, giving it bizarre 42-year seasons.",
    content: {
      discover: "Uranus is a really unusual planet because it's tipped on its side! Most planets spin like a top, but Uranus spins more like a rolling ball. Scientists think this might be because something crashed into it billions of years ago.\n\nUranus is an 'ice giant' — not made of ice exactly, but of a sloshy mixture of water, methane, and ammonia deep inside. The methane in its atmosphere absorbs red light and reflects blue-green light, giving Uranus its beautiful cyan colour.\n\nUranus also has rings, though they're much thinner and darker than Saturn's. And it has 28 known moons, all named after characters from Shakespeare and Alexander Pope!",
      explore: "Uranus is the seventh planet from the Sun and one of two 'ice giants' (with Neptune). Unlike gas giants, its interior is dominated by a hot, dense fluid of 'icy' materials — water, methane, and ammonia — surrounding a small rocky core.\n\nUranus's axial tilt of 97.77° means it effectively rolls around the Sun on its side. This creates extreme seasons: each pole experiences 42 years of sunlight followed by 42 years of darkness.\n\nVoyager 2 remains the only spacecraft to have visited Uranus, flying by in January 1986. It discovered 10 new moons and revealed a faint ring system. Uranus radiates almost no internal heat — it's the coldest planetary atmosphere (−224 °C), cooler even than Neptune despite being closer to the Sun.",
      professional: "Uranus's axial tilt (97.77°) has no definitive dynamical explanation; the leading model involves one or more oblique impacts in the late-accretion phase. Boué & Laskar (2010) proposed a resonance passage with a now-lost companion, but this requires fine-tuned conditions. Uranus's magnetic field is highly unusual: offset 1/3 of the planetary radius from the centre, tilted 59° from the rotation axis, and predominantly quadrupolar — attributed to a convecting 'ionic ocean' of superionic water at megabar pressures rather than a metallic-hydrogen core. Uranus emits negligible internal heat flux (< 0 W/m²), implying either an unusually efficient insulating layer suppresses outward heat transport, or early thermal history was different from Neptune's.\n\nThe 2023–2032 Planetary Science Decadal Survey identified a Uranus Orbiter and Probe as the highest-priority flagship mission, with a notional launch window in the early 2030s. Science objectives include: characterising the multipolar magnetic field structure, sampling the atmosphere via an entry probe (measuring noble gas abundances and isotope ratios), and mapping the irregular moon system (27 known moons).",
    },
    keyStats: {
      distanceFromSun: "~2.87 billion km (19.19 AU)",
      diameter: "50,724 km",
      mass: "8.68 × 10²⁵ kg",
      gravity: "8.87 m/s²",
      dayLength: "17 hours 14 minutes (retrograde)",
      yearLength: "84 Earth years",
      avgTemp: "−195 °C",
      moonsCount: 28,
    },
    atmosphere: "83% hydrogen, 15% helium, 2.3% methane. Methane absorbs red light, making Uranus appear cyan. Featureless compared to other gas giants.",
    composition: "Ice giant: hot dense fluid of water, methane, ammonia over a rocky core. Not actually 'frozen.'",
    funFacts: [
      "Uranus has an axial tilt of 97.77° — it essentially rolls around the Sun on its side.",
      "Each pole of Uranus gets 42 years of continuous sunlight followed by 42 years of darkness.",
      "All of Uranus's 28 moons are named after characters from Shakespeare and Alexander Pope.",
      "Uranus radiates almost no internal heat — it's unusually cold even for its distance from the Sun.",
      "Uranus has 13 known rings, all dark and dusty.",
      "Uranus was the first planet discovered with a telescope, by William Herschel in 1781.",
    ],
    howWeKnow: "William Herschel discovered Uranus in 1781. Voyager 2 is the only spacecraft to have visited (January 1986). Hubble and ground telescopes monitor it from afar.",
    comparisons: [
      "Uranus is about 4 times the diameter of Earth.",
      "Its volume could hold about 63 Earths.",
    ],
    rotationPeriodHours: -17.24,
    orbitData: { semiMajorAxisAU: 19.191, periodDays: 30688.5, eccentricity: 0.046, inclinationDeg: 0.8 },
    assetIds: { albedo: 24, hero: 25 },
    relatedSlugs: ["neptune", "saturn", "sun"],
  },

  // ────────────────────────────── NEPTUNE ───────────────────────────
  {
    slug: "neptune",
    name: "Neptune",
    type: "planet",
    identityColor: "#3f54ba",
    oneLineHook: "The windiest world — Neptune's storms rage at 2,100 km/h, the fastest winds in the solar system.",
    content: {
      discover: "Neptune is the farthest planet from the Sun — it takes 165 Earth years to complete one orbit! It's an ice giant like Uranus, but it's a deep, rich blue colour because of even more methane in its atmosphere.\n\nNeptune has incredibly fierce winds, up to 2,100 kilometres per hour — faster than the speed of sound! Scientists spotted a storm called the Great Dark Spot when Voyager 2 flew by in 1989, though it had disappeared by the time Hubble looked a few years later.\n\nNeptune's largest moon, Triton, is one of the strangest in the solar system. It orbits backwards compared to Neptune's spin, suggesting it was captured from the outer solar system.",
      explore: "Neptune is the eighth and most distant planet from the Sun. As an ice giant, its interior is dominated by hot pressurised fluids of water, ammonia, and methane surrounding a rocky core.\n\nDespite receiving only 1/900th of the sunlight Earth does, Neptune generates significant internal heat, driving its ferocious atmospheric dynamics — wind speeds reach 2,100 km/h (supersonic). This internal heat source distinguishes Neptune from Uranus, which lacks one.\n\nTriton, Neptune's largest moon, orbits retrograde (opposite to Neptune's rotation) and is geologically active, with nitrogen geysers erupting from its surface. Triton is gradually spiralling inward due to tidal deceleration and will be torn apart by tidal forces in ~3.6 billion years.",
      professional: "Neptune's internal heat flux (~0.433 W/m²) exceeds its absorbed solar power (~0.393 W/m²), indicating a significant internal heat source — likely residual gravitational contraction and differentiation — which drives the strongest winds in the solar system (2,100 km/h westward at 70°S). Neptune's magnetic field (like Uranus's) is offset 0.55 R_N from the centre and inclined 47° to the rotation axis; the shared non-dipolar geometry with Uranus supports superionic ice interior models where ionic conduction in H₂O/CH₄/NH₃ mixtures at megabar pressures drives a multipolar dynamo.\n\nTriton (2,706 km diameter; orbital period 5.877 days retrograde; inclination 156.865°) is a captured Kuiper Belt Object — its retrograde orbit and KBO-like surface composition (N₂, CO, CO₂, CH₄ ices) confirm this origin. Active N₂ geysers arise from insolation sublimation through a translucent N₂ ice layer (solid-state greenhouse). Tidal deceleration will bring Triton to Neptune's Roche limit (~2.53 R_N) in ~3.6 Gyr, producing a debris ring. Voyager 2 detected a 14 μbar N₂ atmosphere. No mission has revisited Neptune since Voyager 2's August 1989 flyby.",
    },
    keyStats: {
      distanceFromSun: "~4.50 billion km (30.07 AU)",
      diameter: "49,244 km",
      mass: "1.02 × 10²⁶ kg",
      gravity: "11.15 m/s²",
      dayLength: "16 hours 6 minutes",
      yearLength: "164.8 Earth years",
      avgTemp: "−201 °C",
      moonsCount: 16,
    },
    atmosphere: "80% hydrogen, 19% helium, 1.5% methane. Deep blue colour from methane. Supersonic winds. Dynamic cloud features.",
    composition: "Ice giant: hot dense fluid of water, ammonia, methane. Internal heat source drives fierce storms. Rocky core.",
    funFacts: [
      "Neptune has the fastest winds in the solar system — up to 2,100 km/h.",
      "A year on Neptune is 164.8 Earth years; it completed its first full orbit since discovery in 2011.",
      "Neptune was the first planet whose existence was predicted mathematically before it was observed (1846).",
      "Triton orbits backwards and is being slowly torn apart by Neptune's gravity.",
      "Neptune's Great Dark Spot (1989) was a storm the size of Earth — but it disappeared.",
      "Neptune radiates about 2.6 times more heat than it receives from the Sun.",
    ],
    howWeKnow: "Predicted mathematically by Adams and Le Verrier; confirmed by Johann Galle in 1846. Voyager 2 remains the only spacecraft to visit (August 1989).",
    comparisons: [
      "Neptune is about 4 times the diameter of Earth.",
      "Light from the Sun takes 4 hours 10 minutes to reach Neptune.",
    ],
    rotationPeriodHours: 16.11,
    orbitData: { semiMajorAxisAU: 30.069, periodDays: 60182.0, eccentricity: 0.010, inclinationDeg: 1.8 },
    assetIds: { albedo: 26, hero: 27 },
    relatedSlugs: ["uranus", "pluto", "sun"],
  },

  // ────────────────────────────── MOON ──────────────────────────────
  {
    slug: "moon",
    name: "The Moon",
    type: "moon",
    identityColor: "#c8c0b8",
    oneLineHook: "Earth's constant companion — the only other world humans have ever visited.",
    content: {
      discover: "The Moon is Earth's one and only natural satellite. It's the brightest object in our night sky and the only world beyond Earth where humans have walked. Twelve astronauts stepped on the Moon during the Apollo missions between 1969 and 1972.\n\nThe Moon doesn't have its own light — it shines because it reflects sunlight. As the Moon orbits Earth, we see different amounts of the lit side, which is why the Moon seems to change shape each night. These are called the phases of the Moon.\n\nThe Moon's gravity pulls on Earth's oceans, creating the tides we experience every day. Without the Moon, we'd have almost no tides at all!",
      explore: "Earth's Moon is the fifth-largest moon in the solar system and unusually large relative to its host planet — about 27% of Earth's diameter. The leading theory of its formation (the Giant Impact Hypothesis) holds that it formed from debris ejected when a Mars-sized body (Theia) collided with the early Earth ~4.5 billion years ago.\n\nThe Moon has no atmosphere and no magnetic field, leaving its surface exposed to micrometeoroids and cosmic radiation. Its surface is divided between ancient highland terrain and younger volcanic maria (dark plains).\n\nApollo missions (1969–1972) returned 382 kg of lunar samples. Analysis confirmed the formation hypothesis and revealed that the Moon's interior is differentiated (crust, mantle, small iron core). Modern observations show water ice in permanently shadowed polar craters.",
      professional: "The Giant Impact Hypothesis (GIH) proposes that Theia (~0.1–0.5 M⊕) struck the proto-Earth at ~4.51 Gya at ~4 km/s and ~30–45° inclination, forming a protolunar disk from vapourised material. This explains the Moon's iron depletion (< 3% core fraction vs. Earth's ~32%), identical oxygen isotope ratios, high angular momentum, and elevated FeO mantle content. GRAIL (2012) gravity mapping resolved the nearside/farside crustal thickness asymmetry (~30 km vs. ~70 km), attributed to a slow-cooling post-impact thermal gradient.\n\nLunar laser ranging (LLR) from Apollo retroreflectors measures the recession rate at 3.83 ± 0.009 cm/yr and constrains tidal dissipation factor Q_Moon ≈ 12. LCROSS (2009) confirmed water ice in Cabeus Crater at 155–166 ppm; LRO DIVINER maps permanently shadowed regions (PSRs) at < 40 K. Artemis III (targeting 2026–2027) will land near the south pole to access PSR ice for potential ISRU — electrolysis of water ice to produce O₂ and H₂ propellant.",
    },
    keyStats: {
      distanceFromSun: "~150 million km (follows Earth)",
      diameter: "3,474 km",
      mass: "7.35 × 10²² kg",
      gravity: "1.62 m/s²",
      dayLength: "27.3 Earth days (synchronous with orbit)",
      yearLength: "27.3 days (orbital period around Earth)",
      avgTemp: "−20 °C (mean); 127 °C (day) / −173 °C (night)",
      moonsCount: 0,
    },
    atmosphere: "Negligible exosphere: sodium, potassium, helium, traces of other elements. No weather.",
    composition: "Anorthosite highlands (ancient crust), basaltic maria (solidified lava), deep regolith (impact-shattered rock), small iron-rich core.",
    funFacts: [
      "The Moon is moving away from Earth at ~3.8 cm per year due to tidal interactions.",
      "Twelve humans have walked on the Moon — all during Apollo missions between 1969 and 1972.",
      "The Moon's gravity creates Earth's ocean tides.",
      "The Moon is tidally locked — the same side always faces Earth.",
      "Moonquakes exist and can last up to an hour, much longer than earthquakes.",
      "Water ice has been confirmed in permanently shadowed craters near the Moon's poles.",
    ],
    howWeKnow: "Continuously studied by telescopes for millennia; directly sampled by Apollo missions (1969–72); orbited by many spacecraft including LRO (2009–present).",
    comparisons: [
      "The Moon's diameter is about 27% of Earth's.",
      "It's about 30 Earth diameters away from us — if Earth were a basketball, the Moon would be a tennis ball about 7 metres away.",
    ],
    rotationPeriodHours: 655.7,
    orbitData: { semiMajorAxisAU: 1.0, periodDays: 27.32, eccentricity: 0.055, inclinationDeg: 5.1 },
    assetIds: { albedo: 28, normal: 29, hero: 30 },
    relatedSlugs: ["earth", "sun"],
  },

  // ────────────────────────────── PLUTO ─────────────────────────────
  {
    slug: "pluto",
    name: "Pluto",
    type: "dwarf-planet",
    identityColor: "#d4c0a0",
    oneLineHook: "The little world at the edge — once the 9th planet, now the most famous dwarf planet.",
    content: {
      discover: "Pluto used to be called the ninth planet, but in 2006 scientists decided it was too small and is now called a 'dwarf planet.' This decision upset a lot of people who grew up thinking Pluto was a planet!\n\nPluto lives in a distant region of the solar system called the Kuiper Belt, where there are thousands of icy objects. It's so far away that it takes 248 years to travel around the Sun once.\n\nIn 2015, NASA's New Horizons spacecraft flew past Pluto and sent back amazing photos. We discovered a huge heart-shaped plain of nitrogen ice, mountains made of water ice, and much more than scientists expected.",
      explore: "Pluto was discovered by Clyde Tombaugh in 1930 and reclassified as a dwarf planet by the IAU in 2006 — it shares its orbital neighbourhood with many other Kuiper Belt Objects (KBOs) rather than dominating its orbit as full planets do.\n\nNASA's New Horizons flyby (July 2015) revealed a world of surprising geological complexity: Tombaugh Regio (the 'heart') is a vast nitrogen-ice plain; mountains of water ice rise 3,500 m; evidence for past geological activity. Pluto's largest moon, Charon, is so large relative to Pluto (52% of its diameter) that they're often called a double-planet system.\n\nPluto has five known moons: Charon, Styx, Nix, Kerberos, and Hydra.",
      professional: "Pluto's high obliquity (119.6°) and eccentric orbit (e = 0.248; perihelion 29.7 AU in 1989; aphelion 49.3 AU ~2114) were established during the Nice Model's Late Heavy Bombardment phase (~4.1–3.8 Gya), when Neptune migrated outward and cleared the primordial Kuiper Belt. New Horizons gravity data constrain a rock fraction of ~66–75% by mass — unusually rocky for a KBO — and are consistent with a differentiated interior having a liquid water ocean beneath a ~100 km ice shell.\n\nSputnik Planitia (~1,000 km diameter N₂-ice basin) shows no impact craters (surface age < 10 Myr) and active convective cells (polygon size 25–50 km, consistent with Rayleigh-Bénard convection in nitrogen ice). The Pluto-Charon barycenter lies ~2,110 km above Pluto's surface, outside Pluto itself — forming the only confirmed double-dwarf-planet binary in the solar system. No follow-up mission is currently funded; a Pluto orbiter concept study is in early design phases.",
    },
    keyStats: {
      distanceFromSun: "~5.9 billion km (39.5 AU)",
      diameter: "2,376 km",
      mass: "1.30 × 10²² kg",
      gravity: "0.62 m/s²",
      dayLength: "6.39 Earth days (retrograde)",
      yearLength: "248 Earth years",
      avgTemp: "−229 °C",
      moonsCount: 5,
    },
    atmosphere: "Thin seasonal atmosphere: nitrogen, methane, carbon monoxide. Freezes and falls as snow when Pluto moves farther from the Sun.",
    composition: "Rocky core surrounded by a mantle of water ice, topped by thin nitrogen, methane, and CO ice at the surface.",
    funFacts: [
      "Pluto's orbit is so elliptical that it was actually closer to the Sun than Neptune between 1979 and 1999.",
      "New Horizons' flyby of Pluto in 2015 was humanity's first close look at the dwarf planet.",
      "Charon (Pluto's moon) is so big that the two effectively orbit each other.",
      "Pluto's surface includes mountains of water ice 3,500 m high.",
      "Pluto was discovered on 18 February 1930 by 24-year-old Clyde Tombaugh.",
      "Pluto's atmosphere completely freezes and collapses when it moves to its farthest point from the Sun.",
    ],
    howWeKnow: "Clyde Tombaugh discovered it photographically in 1930. NASA's New Horizons flew past in July 2015, providing the first close-up images.",
    comparisons: [
      "Pluto is smaller than Earth's Moon.",
      "Its diameter is about 18% of Earth's.",
    ],
    rotationPeriodHours: -153.3,
    orbitData: { semiMajorAxisAU: 39.48, periodDays: 90560, eccentricity: 0.248, inclinationDeg: 17.1 },
    assetIds: { albedo: 31, hero: 32 },
    relatedSlugs: ["ceres", "eris", "neptune"],
  },

  // ────────────────────────────── CERES ─────────────────────────────
  {
    slug: "ceres",
    name: "Ceres",
    type: "dwarf-planet",
    identityColor: "#8a8070",
    oneLineHook: "The largest object in the asteroid belt — and a dwarf planet that may hide water ice beneath its surface.",
    content: {
      discover: "Ceres is the largest asteroid in the asteroid belt between Mars and Jupiter. It's so large that it's actually classified as a dwarf planet. Ceres makes up about a third of the entire mass of the asteroid belt!\n\nWhen the Dawn spacecraft visited Ceres in 2015, scientists were surprised to see bright white spots inside craters. These spots turned out to be salt deposits, left behind when salty water evaporated from beneath the surface.\n\nCeres might have a liquid water layer under its surface, which makes it an interesting place in the search for life beyond Earth.",
      explore: "Ceres is the only dwarf planet in the inner solar system and the largest body in the asteroid belt (diameter: 945 km). It was the first asteroid-belt object discovered (by Giuseppe Piazzi in 1801) and was itself classified as a planet before being demoted to asteroid, then elevated to dwarf planet status in 2006.\n\nNASA's Dawn spacecraft orbited Ceres from 2015–2018. It revealed bright spots in Occator Crater — now understood to be sodium carbonate deposits from briny liquid water that erupted through the crust. Evidence suggests Ceres has or had a liquid water interior, making it a water-world in the inner solar system.",
      professional: "Ceres's inferred interior comprises a rock-dominated core (r ≈ 360–400 km) overlain by a water-ice/brine mantle and a silicate-rich crust. Dawn's gravity science yields moment of inertia factor I/MR² ≈ 0.36, indicating incomplete rock-ice differentiation relative to a fully differentiated body. Dawn VIR spectrometer identified Occator Crater's Cerealia Tholus faculae as Na₂CO₃ (sodium carbonate); the surrounding water-vapour haze is consistent with a brine reservoir within the top 40 km. Crater morphology Bayesian modelling (Schenk et al. 2020) confirms liquid brine eruption within the last few million years, classifying Ceres as currently geologically active.\n\nCeres was discovered by Giuseppe Piazzi on 1 January 1801 from Palermo Observatory; Gauss's orbital determination from sparse observations established its orbit and made it the first demonstration of the least-squares method. Dawn was the first spacecraft to orbit two extraterrestrial bodies (Vesta 2011–2012, Ceres 2015–2018); it exhausted propellant on 31 October 2018 and remains in orbit.",
    },
    keyStats: {
      distanceFromSun: "~413 million km (2.77 AU)",
      diameter: "945 km",
      mass: "9.39 × 10²⁰ kg",
      gravity: "0.28 m/s²",
      dayLength: "9 hours 4 minutes",
      yearLength: "4.6 Earth years",
      avgTemp: "−105 °C",
      moonsCount: 0,
    },
    atmosphere: "Tenuous water vapour around the bright spots — possibly the thinnest atmosphere in the solar system.",
    composition: "Rocky core, possibly a water-ice mantle, dusty/clay surface rich in carbonates and salts.",
    funFacts: [
      "Ceres contains about a third of the total mass of the entire asteroid belt.",
      "The bright spots in Occator Crater are sodium carbonate salt deposits from briny water.",
      "Ceres may have a liquid water ocean beneath its surface.",
      "Dawn became the first spacecraft to orbit two extraterrestrial bodies (Vesta, then Ceres).",
      "Ceres was discovered on the first day of the 19th century: January 1, 1801.",
      "Ceres is the smallest known dwarf planet to date.",
    ],
    howWeKnow: "Discovered by Giuseppe Piazzi in 1801. NASA's Dawn spacecraft orbited it 2015–2018.",
    comparisons: [
      "Ceres is about 27% the diameter of Earth's Moon.",
      "Its diameter is roughly the distance from London to Cairo.",
    ],
    rotationPeriodHours: 9.07,
    orbitData: { semiMajorAxisAU: 2.77, periodDays: 1681.6, eccentricity: 0.076, inclinationDeg: 10.6 },
    assetIds: { albedo: 33, hero: 34 },
    relatedSlugs: ["pluto", "mars", "jupiter"],
  },

  // ────────────────────────────── ERIS ──────────────────────────────
  {
    slug: "eris",
    name: "Eris",
    type: "dwarf-planet",
    identityColor: "#d0c8c0",
    oneLineHook: "The discovery that reclassified Pluto — Eris is the most massive known dwarf planet.",
    content: {
      discover: "Eris is what caused Pluto to lose its planet status! When astronomers discovered Eris in 2005, they realised it was bigger than Pluto. They couldn't keep calling Pluto a planet without also calling Eris one — and there were many more Pluto-sized objects out there.\n\nSo in 2006, the International Astronomical Union made a new rule and reclassified both Pluto and Eris as 'dwarf planets.' Some people weren't happy about Pluto's demotion!\n\nEris is very far from the Sun — about 97 times farther than Earth at its most distant — and extremely cold.",
      explore: "Eris was discovered in January 2005 by Mike Brown, Chad Trujillo, and David Rabinowitz using images from the Palomar Observatory. Its discovery directly triggered the IAU's 2006 redefinition of 'planet,' demoting Pluto to dwarf-planet status.\n\nEris has a diameter of approximately 2,326 km (slightly smaller than Pluto but more massive). Its surface is highly reflective — almost as reflective as freshly fallen snow — suggesting a thin coating of frozen methane or nitrogen that refreshes as the dwarf planet approaches the Sun.\n\nEris has one known moon: Dysnomia. Its highly elliptical orbit takes it as far as 97.65 AU from the Sun, in the scattered disc region of the outer solar system.",
      professional: "Eris was discovered in January 2005 from Palomar images taken September 2003 (Brown, Trujillo & Rabinowitz). Its diameter (2,326 ± 12 km, from stellar occultation 2010) is essentially equal to Pluto's (2,376 km), but its mass (1.66 × 10²² kg, from Dysnomia's orbit: a = 37,273 km, P = 15.786 days) exceeds Pluto's by ~27%. Eris's high geometric albedo (~0.96) is attributed to fresh CH₄ frost condensing as Eris recedes from perihelion; VLT/X-SHOOTER spectra detect CH₄ and N₂ in absorption, with CH₄ dominating unlike Pluto's N₂-dominated crust.\n\nEris is classified as a scattered-disc object (SDO; a = 67.78 AU, e = 0.436, i = 44.04°), distinguishing it from classical KBOs; its high eccentricity was probably acquired during Neptune's late orbital migration. Currently at 96.2 AU receding from a 2010 perihelion at 38.3 AU, Eris will reach aphelion (~97.65 AU) around 2257. Orbital parameter uncertainties grow significantly beyond the current ~20-year observational arc.",
    },
    keyStats: {
      distanceFromSun: "~5.7–14.6 billion km (38–97.65 AU, highly elliptical)",
      diameter: "~2,326 km",
      mass: "1.66 × 10²² kg",
      gravity: "~0.82 m/s²",
      dayLength: "~25.9 hours",
      yearLength: "~559 Earth years",
      avgTemp: "~−231 °C",
      moonsCount: 1,
    },
    atmosphere: "Thin, seasonal; methane ice sublimates when Eris is nearest the Sun.",
    composition: "Likely rock and ice. Highly reflective methane/nitrogen ice surface.",
    funFacts: [
      "Eris's discovery directly caused Pluto's reclassification as a dwarf planet in 2006.",
      "Eris is actually slightly more massive than Pluto despite being smaller in diameter.",
      "Its surface is one of the most reflective in the solar system — like freshly fallen snow.",
      "Eris takes about 559 Earth years to orbit the Sun.",
      "Eris's moon is named Dysnomia, after the goddess of lawlessness (a nod to Eris's effect on planetary classifications).",
      "At its farthest, Eris is nearly 100 times farther from the Sun than Earth.",
    ],
    howWeKnow: "Discovered in 2005 from archival images taken at Palomar Observatory. No spacecraft has visited; observations from telescopes including Hubble and ground-based arrays.",
    comparisons: [
      "Eris is slightly smaller but more massive than Pluto.",
      "At its farthest, it is nearly 100 times the Earth–Sun distance from the Sun.",
    ],
    rotationPeriodHours: 25.9,
    orbitData: { semiMajorAxisAU: 67.78, periodDays: 203830, eccentricity: 0.436, inclinationDeg: 44.0 },
    assetIds: { albedo: 35, hero: 36 },
    relatedSlugs: ["pluto", "haumea", "makemake"],
  },

  // ────────────────────────────── HAUMEA ────────────────────────────
  {
    slug: "haumea",
    name: "Haumea",
    type: "dwarf-planet",
    identityColor: "#e8e0d0",
    oneLineHook: "The strangest-shaped dwarf planet — Haumea spins so fast it's squashed into an egg shape.",
    content: {
      discover: "Haumea is one of the most unusual dwarf planets because of its weird shape. Instead of being a sphere like most planets, it looks like a squashed egg! This is because Haumea spins incredibly fast — it completes a full rotation in just under 4 hours.\n\nHaumea orbits the Sun in the Kuiper Belt, just like Pluto. It has two small moons called Namaka and Hi'iaka, named after characters from Hawaiian mythology.\n\nIn 2017, astronomers discovered that Haumea even has a ring — making it the first Kuiper Belt object known to have one!",
      explore: "Haumea is a dwarf planet in the Kuiper Belt notable for its extraordinary shape and rotation rate. It is triaxially ellipsoidal — roughly 2,322 × 1,704 × 1,138 km — the most elongated major body in the solar system. Its rapid rotation (3.92 hours) creates centrifugal flattening.\n\nHaumea was discovered independently by teams led by Mike Brown (Caltech) and José Luis Ortiz (Sierra Nevada Observatory) around 2004–2005, leading to a priority dispute. The IAU officially named it in 2008 after the Hawaiian goddess of childbirth.\n\nIn 2017, stellar occultation observations revealed a ring around Haumea — the first known ring system around a Kuiper Belt object.",
      professional: "Haumea's triaxial shape (semi-axes a = 1,161 km, b = 852 km, c = 569 km, from 2017 stellar occultation, Ortiz et al.) results from rotational flattening at P = 3.9154 ± 0.0001 h — the fastest spin of any solar-system body larger than 100 km. Bulk density 2,018 ± 66 kg/m³ implies a rock-dominated interior (< 20% ice by mass), consistent with collisional stripping of a primordial ice-rich mantle by the family-forming impact ~1 Gyr ago. The ring at 2,287 ± 45 km from the centre has width ~70 km, optical depth τ ≈ 0.5, and orbits near the 3:1 spin-orbit resonance (ring orbital period ~12.2 h vs. 1/3 Haumea rotation = 13.0 h).\n\nHaumea's collisional family — the largest in the Kuiper Belt — includes Hi'iaka (radius ~160 km, a = 49,880 km, P = 49.46 days), Namaka (radius ~85 km, a = 25,657 km, P = 18.28 days), and at least 10 associated classical KBOs. Hi'iaka's precessing orbit constrains Haumea's J₂ and moment of inertia. Spectral properties of the family (UV-blue, water-ice dominated) differ from the tholins-rich surfaces of most KBOs, further evidencing the icy mantle origin of the collisional debris.",
    },
    keyStats: {
      distanceFromSun: "~6.45 billion km (~43.1 AU)",
      diameter: "~1,960 km (longest axis)",
      mass: "4.01 × 10²¹ kg",
      gravity: "~0.44 m/s²",
      dayLength: "3 hours 55 minutes",
      yearLength: "~285 Earth years",
      avgTemp: "~−241 °C",
      moonsCount: 2,
    },
    atmosphere: "None detected.",
    composition: "Primarily rock with a thin coating of crystalline water ice; unusually dry surface compared to other KBOs.",
    funFacts: [
      "Haumea rotates once every 3.9 hours — the fastest spin of any known large body in the solar system.",
      "Its rapid spin squashes it into an egg shape.",
      "Haumea has a ring — the first ring discovered around a Kuiper Belt object.",
      "Both of Haumea's moons are named after daughters of the Hawaiian goddess Haumea.",
      "Haumea's family of fragments (from a past collision) is one of the few collisional families found in the Kuiper Belt.",
      "Despite being cold and icy, Haumea's surface is unusually dark in infrared, suggesting a different composition from Pluto or Eris.",
    ],
    howWeKnow: "Discovered ~2004–2005 by telescope surveys. No spacecraft has visited. Its ring was discovered via stellar occultation in 2017.",
    comparisons: [
      "Haumea's longest axis is about 2/3 the diameter of Pluto.",
      "It spins so fast a day lasts under 4 hours.",
    ],
    rotationPeriodHours: 3.92,
    orbitData: { semiMajorAxisAU: 43.13, periodDays: 103468, eccentricity: 0.191, inclinationDeg: 28.2 },
    assetIds: { albedo: 37, hero: 38 },
    relatedSlugs: ["pluto", "eris", "makemake"],
  },

  // ────────────────────────────── MAKEMAKE ──────────────────────────
  {
    slug: "makemake",
    name: "Makemake",
    type: "dwarf-planet",
    identityColor: "#e8d0b0",
    oneLineHook: "A reddish Kuiper Belt world — Makemake's surface is covered in frozen methane and ethane.",
    content: {
      discover: "Makemake (say it: MAH-keh-MAH-keh) is a dwarf planet in the Kuiper Belt. It's one of the brightest objects in the outer solar system. Makemake is named after the creator deity of the Rapa Nui people of Easter Island.\n\nMakemake is covered in frozen methane, and it's reddish-brown in colour. It's very cold and has no known atmosphere most of the time.\n\nIn 2016, astronomers discovered a small, dark moon orbiting Makemake. They nicknamed it MK2 and later named it S/2015 (136472) 1.",
      explore: "Makemake is a classical Kuiper Belt Object discovered on March 31, 2005, by Mike Brown's team at Palomar. It was one of four discoveries that prompted the 2006 IAU redefinition of 'planet.' Its name honours the creator deity of Easter Island's indigenous Rapa Nui people.\n\nMakemake has a reddish-brown surface covered in frozen methane (tholins — organic reddish compounds formed by UV irradiation of nitrogen/methane ice). Its albedo (~0.81) makes it one of the brightest KBOs.\n\nA small moon, S/2015 (136472) 1 (nicknamed MK2), was discovered in 2016 using Hubble. It is remarkably dark (low albedo), suggesting it may be a captured body or remnant of a collision.",
      professional: "Makemake's diameter (1,430 ± 9 km) and geometric albedo (0.81 ± 0.03) are constrained by Herschel PACS thermal emission (70–160 μm). VLT/X-SHOOTER spectra show strong CH₄ absorption with N₂ as a minor constituent — CH₄-dominated surface unlike Pluto's N₂-dominated crust. The absence of a detectable atmosphere (stellar occultation 2011: upper limit ~10 nbar N₂) may reflect insufficient volatile reservoir or unfavourable axial geometry. Tholins (UV/GCR-irradiated N₂/CH₄ organics) account for the reddish spectral slope.\n\nMK2 (semi-major axis ~21,000 km, period ~12.4 days, albedo ~0.02 — charcoal dark) was discovered via Hubble ACS/WFC in 2016. The extreme albedo contrast between MK2 and Makemake's bright surface is difficult to explain by a common-origin impact; capture or asymmetric ejecta are alternatives. System mass from the satellite orbit: ~4.4 × 10²¹ kg. No spacecraft has visited Makemake, and no dedicated mission is in development.",
    },
    keyStats: {
      distanceFromSun: "~6.85 billion km (~45.8 AU)",
      diameter: "~1,430 km",
      mass: "~3.1 × 10²¹ kg",
      gravity: "~0.50 m/s²",
      dayLength: "~22.5 hours",
      yearLength: "~305 Earth years",
      avgTemp: "~−239 °C",
      moonsCount: 1,
    },
    atmosphere: "Thin methane atmosphere that may collapse and freeze when Makemake moves farthest from the Sun.",
    composition: "Frozen methane, ethane, and nitrogen ices on the surface; likely a rocky interior.",
    funFacts: [
      "Makemake was discovered on Easter Sunday 2005, inspiring its Easter Island mythology name.",
      "Its moon MK2 is very dark — almost as dark as coal — a striking contrast to Makemake's bright surface.",
      "Makemake is one of the brightest objects in the Kuiper Belt.",
      "No spacecraft has ever visited Makemake.",
      "Makemake's reddish colour comes from tholins — organic compounds created by UV light hitting frozen methane.",
      "It was the third dwarf planet officially named after Pluto's reclassification.",
    ],
    howWeKnow: "Discovered March 2005 by telescope at Palomar Observatory. Its moon found via Hubble in 2016. No spacecraft visits planned.",
    comparisons: [
      "Makemake is about 60% the diameter of Pluto.",
      "It's so far from the Sun that it receives only 1/1,900th of the sunlight Earth gets.",
    ],
    rotationPeriodHours: 22.5,
    orbitData: { semiMajorAxisAU: 45.79, periodDays: 111690, eccentricity: 0.162, inclinationDeg: 29.0 },
    assetIds: { albedo: 39, hero: 40 },
    relatedSlugs: ["pluto", "eris", "haumea"],
  },

  // ────────────────────────────── IO ────────────────────────────────
  {
    slug: "io",
    name: "Io",
    type: "moon",
    identityColor: "#e8c040",
    oneLineHook: "The most volcanically active world in the solar system — Io is Jupiter's volcanic moon.",
    content: {
      discover: "Io is one of Jupiter's four big moons, and it's the most volcanic place in the entire solar system! It has hundreds of active volcanoes that shoot lava hundreds of kilometres into space. The lava cools and falls back down, giving Io a constantly changing surface of yellows, reds, and blacks.\n\nAll this volcanic activity is caused by Jupiter's enormous gravity. Jupiter's pull stretches and squishes Io as it orbits, generating enormous heat inside. This is called tidal heating.\n\nIo was discovered by the astronomer Galileo in 1610, along with Europa, Ganymede, and Callisto — the four Galilean moons.",
      explore: "Io is Jupiter's innermost Galilean moon and the most volcanically active body in the solar system. Its surface is resurfaced continuously by lava from over 400 known active volcanic features, including Pele (a volcanic hotspot 300 km across) and Loki Patera (a lava lake 200 km across).\n\nThe heat driving Io's volcanism comes not from radioactive decay but from tidal heating: Jupiter's immense gravity, combined with gravitational resonance with Europa and Ganymede, continuously flexes Io's interior, generating enormous frictional heat.\n\nIo's surface features no impact craters — they are erased faster than they form — and its colour palette of yellow, orange, red, black, and white comes from various sulfur compounds and silicate lavas.",
      professional: "Io's global heat flow (average 1.5–3 W/m²; local hotspots to 50 W/m²) is driven by tidal dissipation in a partially molten asthenosphere; total tidal power ~60–160 TW (vs. Earth's 4 TW). The Laplace resonance (Io:Europa:Ganymede = 1:2:4) maintains Io's eccentricity (e = 0.0041) by resonant forcing that balances tidal damping, sustaining the heat budget. Loki Patera (202 km diameter lava lake) undergoes periodic resurface events every ~400–600 days, with a wave propagating at ~1–2 km/day — consistent with gravitational overturn of a crusted lava lake.\n\nIo's volcanic SO₂ + S₂ plume Pele creates a red sulfur-sulfide torus at ~5.9 R_J that electromagnetically couples to Jupiter's aurora via an Alfvén wing. Galileo PPR and NIMS mapped > 150 thermal emission sites. Juno's 2023 flybys (minimum altitude 1,500 km) provided the highest-resolution compositional data since Galileo. A dedicated Io Volcano Observer (IVO) mission concept has been proposed to constrain the tidal dissipation mechanism and interior melt fraction.",
    },
    keyStats: {
      distanceFromSun: "~778 million km (follows Jupiter)",
      diameter: "3,643 km",
      mass: "8.93 × 10²² kg",
      gravity: "1.80 m/s²",
      dayLength: "1.77 Earth days (synchronous with orbit)",
      yearLength: "1.77 Earth days (orbital period around Jupiter)",
      avgTemp: "−143 °C (mean surface)",
      moonsCount: 0,
    },
    atmosphere: "Thin SO₂ exosphere from volcanic outgassing. Collapses and freezes when Io moves into Jupiter's shadow.",
    composition: "Silicate rocky mantle with iron/iron-sulfide core. Surface dominated by sulfur dioxide frost, sulfur compounds, and silicate lavas.",
    funFacts: [
      "Io has over 400 active volcanic features — more than any other world.",
      "Some of Io's volcanic plumes reach 500 km into space.",
      "Io's volcanism is powered by tidal heating from Jupiter's gravity.",
      "The colour palette — yellows, reds, blacks — comes from various sulfur compounds.",
      "No impact craters exist on Io; the surface is too young — continuously resurfaced by lava.",
      "Io was discovered by Galileo Galilei in January 1610.",
    ],
    howWeKnow: "Voyager 1 first imaged its volcanoes in 1979 (a stunning surprise). Galileo orbiter studied it extensively 1995–2003. Juno has made recent close flybys.",
    comparisons: [
      "Io is slightly larger than Earth's Moon.",
      "Its surface renews itself faster than any other world — craters are obliterated within thousands of years.",
    ],
    rotationPeriodHours: 42.46,
    orbitData: { semiMajorAxisAU: 5.20, periodDays: 1.77, eccentricity: 0.004, inclinationDeg: 0.04 },
    assetIds: { albedo: 41, hero: 42 },
    relatedSlugs: ["europa", "jupiter", "sun"],
  },

  // ────────────────────────────── EUROPA ────────────────────────────
  {
    slug: "europa",
    name: "Europa",
    type: "moon",
    identityColor: "#c0d8e8",
    oneLineHook: "A cracked ice world hiding a vast ocean — Europa may be the best place to search for life beyond Earth.",
    content: {
      discover: "Europa is one of Jupiter's moons, and it has something very special: a giant ocean of liquid water hidden beneath a thick shell of ice! Scientists believe there could be as much water in Europa's ocean as in all of Earth's oceans combined.\n\nFrom space, Europa looks like a cracked billiard ball. The cracks are where the ice shell flexes and refreezes due to Jupiter's gravity. Warm water might even leak up through the cracks, a bit like how hot springs work on Earth.\n\nBecause of its liquid water ocean, Europa is one of the most exciting places in the solar system for scientists looking for signs of life.",
      explore: "Europa is Jupiter's fourth-largest moon and one of the highest-priority targets in astrobiology. Beneath its ~10–30 km icy crust lies a global liquid water ocean estimated to contain 2–3 times the volume of all Earth's oceans combined.\n\nThe ice shell is crossed by a complex network of ridges, bands, and chaotic terrain formed by tidal flexing from Jupiter's gravity. Some features suggest salty water may have recently erupted through the ice — and possible plumes of water vapour have been observed.\n\nNASA's Europa Clipper mission (launched October 2024) will conduct close flybys to characterise the ice shell, ocean, and potential habitability. The ocean is kept liquid by tidal heating and may have hydrothermal vents on its floor.",
      professional: "Europa's ice shell thickness (10–30 km) is constrained by chaos terrain morphology and tidal flexure; Love number h₂ = 1.269 ± 0.001 from Galileo Doppler tracking confirms a fluid interior. The subsurface ocean volume (2–3 × Earth's oceans) is inferred from shell thickness and global coverage. Galileo magnetometer detected an induced magnetic field at the synodic frequency, consistent with a conducting ocean of salinity 0.06–260 g/kg. Linear ridges (2–4 km wide, up to 1,000 km long) are interpreted as tectonic fractures partially infilled by upwelling ice; Conamara Chaos (~90 × 145 km) suggests ice-block rafting on subsurface liquid.\n\nEuropa Clipper (launched Oct 2024, arrival April 2030) will perform 49 flybys at altitudes as low as 25 km. Instrument suite: MISE (mapping imaging spectrometer, 0.8–5 μm), REASON (9 MHz and 60 MHz ice-penetrating radar), UVS, MASPEX (mass spectrometer for plume/ocean chemistry), SUDA (surface dust analyser for ejected ocean material), and a triaxial magnetometer array. Key observables: ice-shell structure, ocean depth/salinity, and potential biosignature detection in plume material.",
    },
    keyStats: {
      distanceFromSun: "~778 million km (follows Jupiter)",
      diameter: "3,121 km",
      mass: "4.80 × 10²² kg",
      gravity: "1.32 m/s²",
      dayLength: "3.55 Earth days (synchronous with orbit)",
      yearLength: "3.55 Earth days (orbital period around Jupiter)",
      avgTemp: "−160 °C (surface)",
      moonsCount: 0,
    },
    atmosphere: "Thin oxygen exosphere produced by radiation splitting water molecules. Not breathable — very tenuous.",
    composition: "Ice shell (~10–30 km thick) over a global saltwater ocean. Rocky silicate mantle and iron core beneath.",
    funFacts: [
      "Europa's ocean may contain 2–3× the volume of all Earth's oceans.",
      "NASA's Europa Clipper (launched 2024) will investigate its habitability.",
      "Europa's surface is the smoothest of any solid body in the solar system.",
      "The reddish-brown streaks on Europa's surface are likely salts from the ocean below.",
      "Possible water plumes have been tentatively detected erupting from Europa's south pole.",
      "Europa's surface is geologically young — very few impact craters — meaning it's actively reshaped.",
    ],
    howWeKnow: "Discovered by Galileo in 1610. Voyager flybys (1979), Galileo orbiter (1995–2003), and Hubble observations have revealed the subsurface ocean. Europa Clipper is en route.",
    comparisons: [
      "Europa is slightly smaller than Earth's Moon.",
      "Its ocean may hold 2-3× more water than all of Earth's oceans.",
    ],
    rotationPeriodHours: 85.23,
    orbitData: { semiMajorAxisAU: 5.20, periodDays: 3.55, eccentricity: 0.009, inclinationDeg: 0.47 },
    assetIds: { albedo: 43, hero: 44 },
    relatedSlugs: ["io", "jupiter", "enceladus"],
  },

  // ────────────────────────────── TITAN ─────────────────────────────
  {
    slug: "titan",
    name: "Titan",
    type: "moon",
    identityColor: "#d4a050",
    oneLineHook: "Saturn's hazy moon with rivers and seas — but made of liquid methane, not water.",
    content: {
      discover: "Titan is Saturn's largest moon and one of the most fascinating worlds in our solar system. It's the only moon known to have a thick atmosphere and the only place beyond Earth where we know there are rivers, lakes, and seas — but they're made of liquid methane and ethane, not water!\n\nTitan's atmosphere is so thick and orange-coloured that when Cassini first arrived, scientists couldn't see the surface at all. The Huygens probe parachuted through it in 2005 and landed on a surface that looked like a rocky beach.\n\nNASA is sending a mission called Dragonfly to Titan in the 2030s — a rotorcraft that will fly through Titan's thick atmosphere and land in different places.",
      explore: "Titan is Saturn's largest moon (5,150 km diameter) and the only moon in the solar system with a substantial atmosphere — 98.4% nitrogen with ~1.4% methane, at 1.5× Earth's sea-level pressure. It is the second-largest moon in the solar system (after Ganymede).\n\nTitan's surface features a complete hydrological cycle — but using methane and ethane instead of water. Liquid methane/ethane rains from the sky, carves rivers and valleys, and pools into vast northern polar seas (Kraken Mare, Ligeia Mare) large enough to be continents of lake.\n\nThe Cassini-Huygens mission provided extraordinary data. The Huygens probe landed on Titan in January 2005. NASA's Dragonfly rotorcraft mission, targeted for a 2030s arrival, will fly to multiple landing sites to study Titan's prebiotic chemistry.",
      professional: "Titan's methane cycle involves evaporation from polar seas, equatorward advection, propane-methane mixed rain at mid-latitudes, and drainage into river channels and polar basins. Cassini RADAR altimetry of Kraken Mare gives depth > 100 m; VIMS spectroscopy indicates a CH₄-C₂H₆-N₂ liquid mixture. Huygens/GCMS confirmed nearly pure ¹²C methane — ruling out biogenic origin but consistent with deep hydrothermal production. Titan's photochemical haze (fractal aggregate tholins, 40–120 km altitude) settles at ~1 μm/s, accumulating as reddish equatorial sand dunes (sand seas ~30° lat).\n\nDragonfly (dual-quadrotor RTG lander, launch 2028, arrival 2034) will make ~8 km hops between landing sites over a ~30-month mission powered by ~70 W RTG + battery. Primary target: Selk impact crater, where transient water-organic mixing during impact melt enables prebiotic chemistry analogues to early Earth. Secondary targets include dune materials and the Huygens landing site. The Huygens HASI instrument detected a Schumann-resonance analogue signal, suggesting continuous electrical activity or significant surface conductivity.",
    },
    keyStats: {
      distanceFromSun: "~1.43 billion km (follows Saturn)",
      diameter: "5,150 km",
      mass: "1.35 × 10²³ kg",
      gravity: "1.35 m/s²",
      dayLength: "15.95 Earth days (synchronous with orbit)",
      yearLength: "15.95 Earth days (orbital period around Saturn)",
      avgTemp: "−179 °C",
      moonsCount: 0,
    },
    atmosphere: "98.4% nitrogen, 1.4% methane, traces of ethane, acetylene, and other organics. Thick orange haze from photochemical reactions. 1.5× Earth surface pressure.",
    composition: "Rocky silicate core, water-ice mantle, possible liquid water layer deep inside. Surface covered in organic sand dunes, hydrocarbon lakes, and water-ice pebbles.",
    funFacts: [
      "Titan is the only world besides Earth known to have stable liquid on its surface — methane lakes and seas.",
      "Titan's atmosphere is 4× denser than Earth's at the surface.",
      "Dragonfly — a drone-helicopter — will explore Titan in the 2030s.",
      "Titan has methane rain, methane rivers, and methane seas.",
      "The organic chemistry on Titan may resemble early Earth before life began.",
      "Titan was discovered by Dutch astronomer Christiaan Huygens in 1655.",
    ],
    howWeKnow: "Discovered 1655. Detailed study by Cassini-Huygens (2004–2017): the Huygens probe landed on the surface on 14 January 2005.",
    comparisons: [
      "Titan is larger than the planet Mercury.",
      "Its atmosphere pressure at the surface is 1.5× Earth's — you could walk around without a pressure suit (but would need oxygen and cold protection).",
    ],
    rotationPeriodHours: 382.7,
    orbitData: { semiMajorAxisAU: 9.54, periodDays: 15.95, eccentricity: 0.029, inclinationDeg: 0.35 },
    assetIds: { albedo: 45, hero: 46 },
    relatedSlugs: ["saturn", "enceladus", "europa"],
  },

  // ────────────────────────────── ENCELADUS ─────────────────────────
  {
    slug: "enceladus",
    name: "Enceladus",
    type: "moon",
    identityColor: "#e8f0f8",
    oneLineHook: "A tiny icy world shooting geysers of water into space — and harbouring an ocean beneath its ice.",
    content: {
      discover: "Enceladus is one of Saturn's moons and it has a huge secret: it has an ocean of liquid water under its icy surface! We know this because the Cassini spacecraft spotted huge geysers shooting water vapour, ice, and other chemicals from the south pole into space.\n\nThe material from Enceladus's geysers actually feeds Saturn's outer ring, called the E ring. So Saturn's ring is being constantly replenished by this tiny moon.\n\nScientists found that the water in Enceladus's geysers contains hydrogen, which is a sign of chemical reactions happening near hydrothermal vents on the ocean floor — like those found at the bottom of Earth's oceans where life exists.",
      explore: "Enceladus is Saturn's sixth-largest moon (504 km diameter) and one of the most scientifically significant small bodies in the solar system. The Cassini spacecraft discovered erupting geysers from its south polar region in 2005 — plumes of water ice, water vapour, sodium chloride, silica nanoparticles, organic molecules, and molecular hydrogen.\n\nThe presence of molecular hydrogen (H₂) in the plumes indicates active hydrothermal chemistry on the seafloor — similar to hydrothermal vents on Earth's ocean floors, which support rich ecosystems without sunlight. This makes Enceladus one of the top candidates for extraterrestrial life in our solar system.\n\nThe plumes feed Saturn's E ring. Enceladus's tidal heating (from Saturn and Dione) keeps the subsurface ocean liquid.",
      professional: "Enceladus's south polar terrain (SPT) features four 'tiger stripe' fractures (Baghdad, Cairo, Damascus, Alexandria Sulci) erupting a continuous plume system. Cassini UVIS stellar occultations measured integrated H₂O vapour column ~1.5 × 10¹⁵ cm⁻² with gas-to-dust ratio ~5:1. INMS flybys (22 total) directly detected H₂, CO₂, CH₄, NH₃, H₂S, and complex organics (masses up to 200 Da) in the plume. H₂ detection (Waite et al. 2017, Science) is diagnostic of active serpentinisation: (Mg,Fe)-silicate + H₂O → serpentine + H₂ + heat at ~90°C seafloor conditions.\n\nSPT heat flow: 15.8 ± 3.1 GW (Spencer et al. 2006, CIRS), exceeding expected radiogenic + tidal equilibrium by 2–5×, implying episodic or time-variable tidal dissipation possibly controlled by 1:2 resonance with Dione. Ocean salinity estimated at ~0.5–2% NaCl from silica nanoparticle size constraints on SiO₂ solubility. The plume contains liquid water, energy (hydrothermal), organic carbon, nitrogen, and hydrogen — all ingredients proposed as necessary for life. A dedicated Enceladus mission (Enceladus Orbilander concept, NAS Decadal Survey) would sample the plume for biosignatures.",
    },
    keyStats: {
      distanceFromSun: "~1.43 billion km (follows Saturn)",
      diameter: "504 km",
      mass: "1.08 × 10²⁰ kg",
      gravity: "0.11 m/s²",
      dayLength: "1.37 Earth days (synchronous with orbit)",
      yearLength: "1.37 Earth days (orbital period around Saturn)",
      avgTemp: "−201 °C (mean); −128 °C (south polar hotspot)",
      moonsCount: 0,
    },
    atmosphere: "Thin water-vapour exosphere fed by the south polar plumes.",
    composition: "Ice shell over a global liquid saltwater ocean. Rocky seafloor with active hydrothermal venting. Most reflective body in the solar system (albedo ~1.0).",
    funFacts: [
      "Enceladus is the most reflective body in the solar system — it reflects almost all sunlight.",
      "Its geysers shoot material at 1,400 km/h into space, feeding Saturn's E ring.",
      "Cassini flew through the plumes 22 times, tasting their chemistry directly.",
      "Hydrothermal vents on Enceladus's seafloor may support conditions for life.",
      "The plumes contain almost all the ingredients biologists think life needs: liquid water, energy, organic carbon, nitrogen, and hydrogen.",
      "Enceladus is only 500 km across — smaller than the United Kingdom — yet harbours one of the most promising oceans for life.",
    ],
    howWeKnow: "Discovered by William Herschel in 1789. Revolutionised by Cassini's discovery of plumes in 2005. Cassini made 22 targeted flybys before its end-of-mission in 2017.",
    comparisons: [
      "Enceladus is smaller than the United Kingdom (about 500 km across).",
      "Its geysers shoot water at 1,400 km/h — faster than a rifle bullet.",
    ],
    rotationPeriodHours: 32.9,
    orbitData: { semiMajorAxisAU: 9.54, periodDays: 1.37, eccentricity: 0.005, inclinationDeg: 0.02 },
    assetIds: { albedo: 47, hero: 48 },
    relatedSlugs: ["titan", "saturn", "europa"],
  },
];

export default BODIES;
