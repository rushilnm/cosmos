# SOURCES.md — COSMOS Data Provenance

All numerical values in `data/bodies.ts`, `data/bodyPhysics.ts`, and educational content
come from primary or established secondary sources listed here.

## Primary Sources

| Source | Used for |
|--------|----------|
| **NASA Planetary Fact Sheets** (nssdc.gsfc.nasa.gov) | All planet/moon key stats (diameter, mass, gravity, rotation, orbit) |
| **JPL Horizons** (ssd.jpl.nasa.gov/horizons) | Orbital elements (semi-major axis, eccentricity, inclination, period) |
| **IAU (International Astronomical Union)** | Planet/dwarf planet classification definitions |
| **NASA CNEOS** (cneos.jpl.nasa.gov) | NEO close-approach data, Apophis/Bennu/Didymos figures |
| **NASA Exoplanet Archive** | All exoplanet data (mass, radius, period, discovery year) |
| **NOAA SWPC** (swpc.noaa.gov) | Kp index scale, aurora visibility thresholds, solar cycle data |
| **NASA InSight Weather API** | Mars weather (temperature, pressure, wind) — final sol 728 |
| **IAU Constellation Working Group** | 88 constellation boundaries and names |

## Body-Specific Sources

### Sun
- Surface temperature (5,500 °C), core temperature (15,000,000 °C): NASA Goddard
- Corona temperature (>1,000,000 °C): NASA SDO science team
- Mass (1.989 × 10³⁰ kg): IAU 2015 nominal solar values

### Earth
- Equatorial diameter (12,756 km), polar diameter (12,714 km): NASA Fact Sheet
- Surface gravity (9.807 m/s²): WGS84 standard; rounded to 9.81 m/s² in UI
- Sidereal rotation period (23h 56m 4s): IERS

### Moon
- Mean distance (384,400 km): NASA Goddard
- Surface gravity (1.62 m/s²): Lunar Reconnaissance Orbiter science

### Mars
- Olympus Mons height (~22 km): MOLA DEM data (Smith et al. 1999)
- Average temperature: NASA Mars Fact Sheet

### Apophis
- Close approach date 2029-Apr-13: JPL Horizons / CNEOS
- Post-2021 radar ruling out 2068 impact: Goldstone radar campaign (Brozovic et al. 2022)

### TRAPPIST-1 system
- Planet parameters: Grimm et al. 2018; Agol et al. 2021; NASA Exoplanet Archive

### Solar Cycle 25
- Cycle start December 2019, above-prediction tracking: NOAA/NASA Solar Cycle 25 Prediction Panel (2019/2022 update)

## Content Review

Anything uncertain or potentially requiring expert review is flagged in `CONTENT_REVIEW.md`.

## Attribution

All NASA imagery and data used under NASA's [media usage policy](https://www.nasa.gov/multimedia/guidelines/index.html)
(public domain for most content unless otherwise noted).

ESA imagery: [ESA terms](https://www.esa.int/ESA_Multimedia/Terms_and_Conditions).

HYG Star Database: David Nash, CC BY-SA 4.0.
