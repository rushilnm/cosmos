# API_SETUP.md — COSMOS Live-Data Configuration

All live-data features work on **sample data with zero configuration**. Adding real keys
upgrades each feature automatically — no code changes required.

---

## #101 — NASA API Key *(unlocks: APOD, Asteroids/NEO, Mars Rover Photos, Space Weather/DONKI)*

**How to get:** https://api.nasa.gov/ → fill in name/email → key arrives immediately in browser.

**Add to project:**
```
# .env.local (create at project root if it doesn't exist)
NEXT_PUBLIC_NASA_API_KEY=your_key_here
```

**What it unlocks:**
| Feature | Without key | With key |
|---------|-------------|----------|
| `/apod` | Sample 3 hardcoded entries | Today's image + 10,000+ archive |
| `/data/asteroids` | 5 notable examples | Live close-approach data (updated daily) |
| `/data/mars` | Placeholder photo grid | Real Perseverance/Curiosity photos |
| `/space-weather` | Sample 24-day Kp chart | Live DONKI alerts, flares, CME data |

**Rate limit:** 1,000 requests/hour (free tier) — COSMOS caches aggressively so this is never hit.

**Endpoints used:**
- `https://api.nasa.gov/planetary/apod` — APOD
- `https://api.nasa.gov/neo/rest/v1/feed` — NEO close approaches
- `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos` — Rover photos
- `https://api.nasa.gov/DONKI/FLR` — Solar flares

---

## #102 — NOAA SWPC *(optional — most endpoints are open)*

**Status:** Most NOAA SWPC data is freely available with no authentication.
The key slot is reserved for potential rate-limit upgrades.

**Open endpoints (no key needed):**
- Kp index: `https://services.swpc.noaa.gov/json/planetary_k_index_1m.json`
- Solar wind: `https://services.swpc.noaa.gov/json/rtsw/rtsw_wind_1m.json`
- Alerts: `https://services.swpc.noaa.gov/json/alerts.json`

If you need higher rate limits, contact NOAA SWPC directly.

---

## #103 — NASA Exoplanet Archive *(no key required)*

The NASA Exoplanet Archive uses the IVOA TAP protocol — publicly accessible.

**Default endpoint (no auth needed):**
```
https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=...&format=json
```

If you want to self-proxy (to avoid CORS or add caching), set:
```
NEXT_PUBLIC_EXOPLANET_ENDPOINT=https://your-proxy/exoplanets
```

---

## ISS Real-Time Position *(no key required)*

Open Notify provides free ISS position data:
```
http://api.open-notify.org/iss-now.json
```
Used in `/live` dashboard. No API key, no rate limit (polling limit ~1/sec is self-imposed).

---

## astronomy-engine *(local, no key required)*

All ephemeris calculations (real planet positions, Moon phases, rise/set times, eclipses) run
locally using the `astronomy-engine` library. No network needed. Install with:

```bash
npm install astronomy-engine
```

This is planned for Phase 5 (Orbital Mechanics & Ephemeris).

---

## Environment Variable Summary

```bash
# .env.local
NEXT_PUBLIC_NASA_API_KEY=         # Required for APOD, NEO, Mars photos, DONKI
NEXT_PUBLIC_NOAA_SWPC_KEY=        # Optional — rate limit upgrade only
NEXT_PUBLIC_EXOPLANET_ENDPOINT=   # Optional — custom TAP proxy URL
```

**Important:** All vars prefixed `NEXT_PUBLIC_` are exposed to the browser.
Never put server-only secrets here. NASA/NOAA keys are designed for public clients.
