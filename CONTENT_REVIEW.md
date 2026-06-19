# CONTENT_REVIEW.md — Items Flagged for Human Review

Entries here are content that is either uncertain, potentially simplified, or should be verified
by a subject-matter expert before the site goes public.

---

## Numerical Values — Needs Verification

| Item | Current value | Concern | Source to check |
|------|--------------|---------|-----------------|
| Sun corona temperature | ">1,000,000 °C" | Highly variable — ranges from 1–3 MK in quiet regions to 10+ MK in active regions | NASA SDO science pages |
| Mercury surface temperature range | "-180 °C to 430 °C" | Correct range, but might mention 700K as peak equatorial daytime | NASA MESSENGER fact sheets |
| Venus surface pressure | "92 bar" | Consensus value, but some sources say 90–95 bar | Venera mission data |
| Pluto "heart" feature | "Tombaugh Regio" and informal "heart" | Verify formal name and correct region description | NASA New Horizons pages |
| TRAPPIST-1e habitability | Described as "potentially habitable" | Current status: not confirmed habitable; in habitable zone only | Agol et al. 2021 |
| Olympus Mons height | "~22 km" | Some sources say 21.9 km, others 22 km | MOLA DEM products |
| Number of known exoplanets | "5,600+" hardcoded | Changes weekly — should be pulled from NASA Exoplanet Archive | Live API |
| NEO count | "34,000+" | Changes continuously | JPL CNEOS live |

---

## Simplified Explanations — Needs Tier Check

These "Discover" tier explanations were written to be accessible but may oversimplify:

| Content | Simplification used | What's lost |
|---------|--------------------|-----------:|
| Black hole event horizon description | "point of no return" | Doesn't capture the distinction between the event horizon and the photon sphere |
| Star lifecycle (main sequence) | Simplified to "burning hydrogen" | Technically nuclear fusion of H → He; "burning" implies chemical combustion |
| Tidal locking explanation (Moon) | "same side always faces Earth" | Doesn't mention libration (~59% of surface visible over time) |
| Light year definition | "distance light travels in one year" | Could note: 9.46 × 10¹² km, ~63,241 AU |
| Neutron star description | "city-sized ball of neutrons" | Doesn't mention pulsars, magnetars, or quark star possibilities |

---

## Images / Visualizations

| Item | Concern |
|------|---------|
| APOD sample images | Three hardcoded entries use real NASA descriptions. Verify exact credit lines before using verbatim text. |
| Mars InSight weather | Data is from real published API responses (sols 724–728). Caption says "Sample data — InSight mission ended Dec 2022" — verify final sol number |
| Kp index chart | 24 bars are synthetic sample data — make this clearer in the UI (currently labeled "Sample") |
| Exoplanet "notable facts" | These are paraphrased from memory — verify each against NASA Exoplanet Archive discovery announcements |

---

## Legal / Attribution

| Item | Action needed |
|------|--------------|
| Solar System Scope texture license | Confirm that educational/non-commercial use is covered before any commercial deployment |
| Constellation line data from Stellarium | GPL — if used, verify implications for the overall project license |
| HYG Star Database | CC BY-SA 4.0 — attribution required; add to footer or credits page |
| NASA imagery | Public domain domestically; verify for any ESA co-produced imagery used |

---

## UX / Accessibility

| Item | Concern |
|------|---------|
| Color-only Kp level indicators | Currently uses only color to indicate storm levels. Needs text or pattern for colorblind users. |
| SVG size comparison | No ARIA labels on SVG circles — screen readers can't interpret the visualization |
| Quiz correct/wrong color feedback | Green/red feedback has no secondary indicator for colorblind users |
| Command palette | `aria-activedescendant` not implemented — may break screen reader navigation |

---

## Needs Real Device / Live Key

These cannot be verified without actual API keys or physical test:

- `/apod` date picker with real key — archive navigation (10,000+ dates)
- `/data/mars` photos tab — rover photo pagination with NASA key
- `/space-weather` live Kp data — real-time NOAA endpoint
- ISS position accuracy — `open-notify.org` response format and CORS behavior
- Geolocation API — user location for sky chart and aurora threshold (needs GPS permission)
- Touch interactions on mobile — quiz, tools, and command palette (needs real device)
