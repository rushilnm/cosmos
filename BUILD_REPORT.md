# BUILD_REPORT.md — COSMOS Pro Edition Build Status

Last updated: Phase 1 complete. Records what was done, what wasn't, and why.

---

## Phase 1: Foundations ✅ Complete

### Done
- 3-tier depth model (`discover / explore / professional`) in store
- `depthTier` auto-derives `readingLevel` for backward compat
- `UnitSystem`, `simulatedTime`, `userLocation`, `commandPaletteOpen` in store
- Asset registry expanded: `apikey` / `dataset` kinds; entries #101–#105
- Named exports `API_KEYS`, `DATASETS`, `FILE_ASSETS` for PlaceholderOverlay
- `DepthTierSelector` component (3-button with compact mode)
- `CommandPalette` (Cmd+K, fuzzy search, keyboard nav, groups, store integration)
- Navigation full rewrite: Explore dropdown, Data submenu, mobile menu, DepthTierSelector
- PlaceholderOverlay updated to show API key section
- ReadingLevelToggle updated to delegate to depthTier
- `CommandPalette` added to root layout
- 7 new routes all returning 200: `/sky`, `/live`, `/data/exoplanets`, `/data/asteroids`, `/data/mars`, `/space-weather`, `/apod`
- 7 stub page components with real sample data (not lorem ipsum)
- Documentation: `ASSETS_NEEDED.md`, `API_SETUP.md`, `SOURCES.md`, `CONTENT_REVIEW.md`, `BUILD_REPORT.md`

### Checkpoint result
✅ Every route loads  
✅ Overlay lists all #N assets, API keys, and datasets  
✅ Command palette functional  
✅ 3-tier depth selector functional  

---

## Bucket 1: Assets to Supply

_(see `ASSETS_NEEDED.md` for full list with sources)_

All body textures (#1–48) — site works with colored placeholders until supplied.
All topic hero images (#49–59) — cards show colored fallback.
HDR environment (#60) — 3D canvas uses programmatic star field.
Audio (#61–72) — ambient and narration audio; no fallback exists (silence is fine).

**How:** Download from NASA / Solar System Scope / Polyhaven, place at `/public/` paths in
`ASSETS_NEEDED.md`, restart dev server. No code changes needed.

---

## Bucket 2: Needs Human Visual Judgment

These items were implemented but cannot be machine-verified:

- **3D canvas** — StarField density, MeteorSystem spawn rate, OrreryScene orbit scale.
  The values are tuned to look good but need eyeballs at different screen sizes.
- **Color palette** — body identity colors in `data/bodies.ts` are chosen for visual
  distinction but may not match official imagery. Should be compared against real textures
  once they're loaded.
- **Size Comparison SVG** — log scale produces correct relative sizes but the visual
  transition between very small (Eris ~2,377 km) and very large (Jupiter ~142,984 km) bodies
  may feel jarring. May need MIN_RADIUS tweak.
- **Typography** — heading hierarchy and line-length on ultra-wide monitors (>1920px).
- **Mobile navigation** — full-width hamburger menu tested via viewport resize, not a real device.

---

## Bucket 3: Needs a Real Device or Live Key to Verify

- **NASA APOD with real key** — archive navigation assumed to work; untested.
- **NEO live feed** — pagination and date-range query untested with real key.
- **Mars Rover Photos** — pagination, sol range, and camera filter untested with real key.
- **NOAA SWPC live endpoints** — CORS behavior from Next.js client untested.
- **ISS position** — `open-notify.org` latency and rate-limit behavior untested.
- **Geolocation** — browser prompt and GPS accuracy untested on mobile.
- **WebGL on low-end devices** — R3F canvas may degrade on older mobiles; no fallback
  implemented yet (Phase 10: Performance & Fallbacks).

---

## Bucket 4: Descoped and Why

| Feature | Descoped from | Reason |
|---------|--------------|--------|
| Real-time planet positions (ephemeris) | Phase 1 | Requires `astronomy-engine` install; planned for Phase 5 |
| Zustand | Phase 1 | Custom store is working and type-safe; migration adds risk without current benefit |
| SWR / TanStack Query | Phase 1 | No live-data hooks yet; planned for Phase 6 |
| d3 / recharts charting | Phase 1 | Kp and exoplanet charts built with plain SVG/Tailwind; upgrade planned for Phase 6 |
| next-pwa (offline support) | Phase 1 | Planned for Phase 10; no service worker needed during development |
| Actual star catalog rendering | Phase 1 | HYG 118k-star CSV planned for Phase 7 (Sky Chart); programmatic stars used now |
| Constellation rendering | Phase 1 | Needs HYG IDs + constellation JSON; planned for Phase 7 |
| Full 3-tier content data | Phase 1 | All bodies and topics still on 2-tier data; upgrade planned for Phase 2 |
| BodyPage/TopicPage depthTier migration | Phase 1 | Currently reads `readingLevel`; backward compat maintained; planned for Phase 2 |
| `CommandPalette` aria-activedescendant | Phase 1 | Keyboard nav works but screen-reader focus announcement not wired; Phase 10 a11y pass |
| Mission timeline data | Phase 1 | Empty array in data/missions.ts; planned for Phase 2 |
| Meteor shower calendar | Phase 1 | Empty array in data/meteorShowers.ts; planned for Phase 2 |
| Glossary | Phase 1 | Empty array in data/glossary.ts; planned for Phase 2 |

---

## Pre-existing TypeScript Errors (not introduced by this build)

These exist in the codebase before Phase 1 and were intentionally left alone:

| File | Error | Status |
|------|-------|--------|
| `components/pages/BodyPage.tsx:70` | `AssetPlaceholder` doesn't accept `width`/`height` | Pre-existing |
| `components/pages/TopicPage.tsx:41` | Same | Pre-existing |
| `components/ui/GlassPanel.tsx:8` | Cannot find namespace `JSX` | Pre-existing |
| `lib/useStore.ts:7` | Cleanup function returns `boolean` | Pre-existing |

All new files introduced in Phase 1 pass `tsc --noEmit` with no errors.
