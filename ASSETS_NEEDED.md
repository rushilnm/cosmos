# ASSETS_NEEDED.md — COSMOS Placeholder Manifest

Every `#N` below is shown as a labeled placeholder in the live site until you supply the file.
Press **`P`** in the browser to see the live checklist. Drop files into `/public/` at the exact
path shown, restart the dev server, and the placeholder auto-resolves.

---

## API KEYS (configure in `.env.local`)

| # | Key | Env var | Unlocks |
|---|-----|---------|---------|
| 101 | NASA API Key | `NEXT_PUBLIC_NASA_API_KEY` | APOD, NEO asteroid tracker, Mars Rover Photos, DONKI space weather |
| 102 | NOAA SWPC (optional) | `NEXT_PUBLIC_NOAA_SWPC_KEY` | Higher rate limits on space weather data |
| 103 | NASA Exoplanet Archive | _(no key required)_ | TAP endpoint is public; optional proxy URL |

Get a free NASA key at **https://api.nasa.gov/** (instant, no approval needed).

---

## DATASETS

| # | File | Size estimate | Source |
|---|------|--------------|--------|
| 104 | `/public/data/hygdata_v41.csv` | ~15 MB | [HYG Database v4.1](https://github.com/astronexus/HYG-Database) (CC BY-SA 4.0) — 118,000 stars with RA/Dec/mag/proper motion |
| 105 | `/public/data/constellations.json` | ~50 KB | [Stellarium](https://github.com/Stellarium/stellarium/tree/master/skycultures/western) (GPL) — 88 IAU constellation line sets using HIP IDs |

---

## BODY TEXTURES

### Sun (#1–3)
| # | File | Specs | Source |
|---|------|-------|--------|
| 1 | `/public/textures/bodies/sun/albedo.jpg` | 4096×2048, sRGB, equirectangular | [NASA SDO](https://sdo.gsfc.nasa.gov/assets/img/browse/) / [Solar System Scope](https://www.solarsystemscope.com/textures/) |
| 2 | `/public/textures/bodies/sun/normal.jpg` | 2048×1024, linear RGB | Derived from SDO data |
| 3 | `/public/images/hero/sun-hero.jpg` | 1920×1080, sRGB | NASA SDO public domain |

### Mercury (#4–6) · Venus (#7–9) · Earth (#10–15) · Mars (#16–18)
| # | File | Specs | Source |
|---|------|-------|--------|
| 4 | `/public/textures/bodies/mercury/albedo.jpg` | 2048×1024 | [NASA Visible Earth](https://visibleearth.nasa.gov/) / Solar System Scope |
| 5 | `/public/textures/bodies/mercury/normal.jpg` | 2048×1024 | NASA PDS MESSENGER DEM |
| 6 | `/public/images/hero/mercury-hero.jpg` | 1920×1080 | NASA MESSENGER |
| 7 | `/public/textures/bodies/venus/albedo.jpg` | 2048×1024 | Solar System Scope |
| 8 | `/public/textures/bodies/venus/clouds.jpg` | 2048×1024 | NASA JPL |
| 9 | `/public/images/hero/venus-hero.jpg` | 1920×1080 | NASA MESSENGER |
| 10 | `/public/textures/bodies/earth/albedo.jpg` | 4096×2048 | [NASA Blue Marble](https://visibleearth.nasa.gov/collection/1484/blue-marble) |
| 11 | `/public/textures/bodies/earth/normal.jpg` | 4096×2048 | Solar System Scope / NASA SRTM |
| 12 | `/public/textures/bodies/earth/clouds.jpg` | 4096×2048, greyscale | NASA Blue Marble |
| 13 | `/public/textures/bodies/earth/night.jpg` | 4096×2048 | [NASA VIIRS](https://earthobservatory.nasa.gov/images/79765/night-lights-2012) |
| 14 | `/public/textures/bodies/earth/specular.jpg` | 4096×2048, greyscale | NASA water mask |
| 15 | `/public/images/hero/earth-hero.jpg` | 1920×1080 | NASA public domain |
| 16 | `/public/textures/bodies/mars/albedo.jpg` | 4096×2048 | [NASA MOLA](https://pds-geosciences.wustl.edu/) |
| 17 | `/public/textures/bodies/mars/normal.jpg` | 2048×1024 | Derived from MOLA DEM |
| 18 | `/public/images/hero/mars-hero.jpg` | 1920×1080 | NASA MRO |

### Jupiter (#19–20) · Saturn (#21–23) · Uranus (#24–25) · Neptune (#26–27)
| # | File | Specs | Source |
|---|------|-------|--------|
| 19 | `/public/textures/bodies/jupiter/albedo.jpg` | 4096×2048 | NASA Cassini mosaic |
| 20 | `/public/images/hero/jupiter-hero.jpg` | 1920×1080 | NASA Cassini |
| 21 | `/public/textures/bodies/saturn/albedo.jpg` | 4096×2048 | NASA Cassini |
| 22 | `/public/textures/bodies/saturn/ring.png` | 2048×256, RGBA | [JHT Planetary Pixel Emporium](http://planetpixelemporium.com/) / Solar System Scope |
| 23 | `/public/images/hero/saturn-hero.jpg` | 1920×1080 | NASA Cassini |
| 24 | `/public/textures/bodies/uranus/albedo.jpg` | 2048×1024 | NASA Voyager 2 |
| 25 | `/public/images/hero/uranus-hero.jpg` | 1920×1080 | NASA Voyager 2 |
| 26 | `/public/textures/bodies/neptune/albedo.jpg` | 2048×1024 | NASA Voyager 2 |
| 27 | `/public/images/hero/neptune-hero.jpg` | 1920×1080 | NASA Voyager 2 |

### Moon (#28–30) · Pluto (#31–32) · Ceres (#33–34) · Eris (#35–36) · Haumea (#37–38) · Makemake (#39–40)
_(see `lib/assetRegistry.ts` for exact specs and sources)_

### Moons: Io (#41–42) · Europa (#43–44) · Titan (#45–46) · Enceladus (#47–48)
_(see `lib/assetRegistry.ts`)_

---

## TOPIC HERO IMAGES (#49–59)

One 1920×1080 JPEG per topic. All available from NASA public domain or CC0 photography.

| # | File | Recommended search |
|---|------|-------------------|
| 49 | `/public/images/topics/the-sun.jpg` | NASA SDO AIA 171 Angstrom |
| 50 | `/public/images/topics/stars.jpg` | Hubble Pillars of Creation / Carina Nebula |
| 51 | `/public/images/topics/black-holes.jpg` | EHT M87 black hole / Hubble jets |
| 52 | `/public/images/topics/galaxies.jpg` | Hubble Ultra Deep Field |
| 53 | `/public/images/topics/the-universe.jpg` | CMB Planck map / cosmic web simulation |
| 54 | `/public/images/topics/moons.jpg` | Galilean moons composite |
| 55 | `/public/images/topics/asteroids-comets.jpg` | Rosetta/67P / Bennu |
| 56 | `/public/images/topics/exoplanets.jpg` | Artist concept — NASA/ESA |
| 57 | `/public/images/topics/telescopes.jpg` | JWST in space / Hubble |
| 58 | `/public/images/topics/exploration.jpg` | Apollo 17 / rocket launch |
| 59 | `/public/images/topics/stargazing.jpg` | Night sky Milky Way (CC0 — Unsplash/Pexels) |

---

## GLOBAL / AUDIO (#60–72)

| # | File | Specs | Source |
|---|------|-------|--------|
| 60 | `/public/hdr/milkyway.hdr` | 4096×2048, .HDR | [Polyhaven](https://polyhaven.com/hdris) (CC0) — search "starry night" |
| 61 | `/public/audio/ambient/space.mp3` | MP3 stereo, looping | [Freesound.org](https://freesound.org) CC0 or NASA Sounds of Space |
| 62–72 | `/public/audio/narration/<topic>.mp3` | MP3 mono, ~2-3 min each | Record or generate with TTS |

---

## FREE RESOURCE LINKS

- **NASA Visible Earth**: https://visibleearth.nasa.gov/
- **Solar System Scope Textures**: https://www.solarsystemscope.com/textures/ (free for educational use)
- **NASA Image Gallery**: https://images.nasa.gov/
- **Polyhaven HDRIs**: https://polyhaven.com/hdris (CC0)
- **Freesound**: https://freesound.org (many CC0 options)
- **HYG Star Database**: https://github.com/astronexus/HYG-Database
- **JHT Planetary Pixel Emporium**: http://planetpixelemporium.com/planets.html
