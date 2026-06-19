/**
 * COSMOS meteor shower data — 8 major annual showers.
 * Sources: IMO (International Meteor Organization), NASA, IAU MDC.
 */

export interface ShowerContent {
  discover: string;
  explore: string;
  professional: string;
}

export interface MeteoroidStream {
  parentBody: string;
  parentType: "comet" | "asteroid";
  parentSlug?: string;
}

export interface MetorShower {
  slug: string;
  name: string;
  radiantConstellation: string;
  /** ISO format peak date, year placeholder 0000 */
  peakDate: string;
  /** Days of activity window */
  activeStart: string;
  activeEnd: string;
  /** Zenith Hourly Rate under ideal conditions */
  zhr: number;
  /** Typical entry speed km/s */
  entrySpeedKms: number;
  color: string;
  origin: MeteoroidStream;
  content: ShowerContent;
  tips: string[];
}

const METEOR_SHOWERS: MetorShower[] = [
  {
    slug: "quadrantids",
    name: "Quadrantids",
    radiantConstellation: "Boötes (formerly Quadrans Muralis)",
    peakDate: "0000-01-03",
    activeStart: "0000-12-28",
    activeEnd: "0000-01-12",
    zhr: 120,
    entrySpeedKms: 41,
    color: "#8090e0",
    origin: {
      parentBody: "2003 EH₁ (likely extinct comet)",
      parentType: "asteroid",
    },
    content: {
      discover: "The Quadrantids kick off the meteor year with a brief but intense burst of shooting stars in early January. At their peak — usually around January 3rd — you might see up to 120 meteors per hour from a dark site! The catch is that the peak only lasts a few hours, so timing is everything. The meteors radiate from the constellation Boötes (near the Big Dipper) and often appear as bright, fast streaks.",
      explore: "The Quadrantids are unique among major showers in originating from an asteroid (2003 EH₁) rather than an active comet — suggesting the parent body is an extinct or dormant comet nucleus. The shower peaks sharply over just 4–8 hours, unlike the multi-day plateaus of the Perseids or Geminids, because the Earth crosses a narrow, concentrated part of the debris stream. This brevity means that clouds or moonlight can easily ruin the show. The radiant point lies in what was once the constellation Quadrans Muralis (the Mural Quadrant), now abolished by the IAU in 1922.",
      professional: "The Quadrantid parent body, 2003 EH₁ (Bottke et al. 2002), is a km-sized body on an orbit (a = 3.12 AU, e = 0.62, i = 70.9°) nearly identical to the stream's mean orbit, suggesting it is the nucleus of a disintegrated short-period comet, possibly related to the 1491 comet C/1490 Y1. The shower's narrow filament (width ~0.05 AU at Earth's orbit) produces a peak duration of only 4–8 hours (FWHM), with the ZHR profile sharply asymmetric (faster rise, slower decline). Activity index r ≈ 2.1 (mass index of ejected particles); meteors are medium-speed (41 km/s) with above-average fireball frequency. Radar meteor surveys (CMOR, BRAMS) define the stream's bulk trajectory; the mass influx peaks at ~10⁷ kg/yr.",
    },
    tips: [
      "Observe after midnight when the radiant (Boötes) rises above the horizon.",
      "The peak is only 4–8 hours wide — check IMO predictions for your time zone.",
      "January nights are cold in the northern hemisphere — dress in layers.",
      "Moonlight can interfere — check the lunar phase before you go out.",
    ],
  },

  {
    slug: "lyrids",
    name: "Lyrids",
    radiantConstellation: "Lyra (near Vega)",
    peakDate: "0000-04-22",
    activeStart: "0000-04-16",
    activeEnd: "0000-04-25",
    zhr: 20,
    entrySpeedKms: 49,
    color: "#e0d080",
    origin: {
      parentBody: "C/1861 G1 Thatcher",
      parentType: "comet",
    },
    content: {
      discover: "The Lyrids are one of the oldest recorded meteor showers — they were first documented by Chinese astronomers in 687 BC! They occur each year in late April, peaking around the 22nd. You can typically see about 20 meteors per hour from a dark site, and occasionally the Lyrids produce a short outburst with many more. The meteors seem to shoot from near Vega, the fifth-brightest star in the sky.",
      explore: "The Lyrids originate from debris shed by Comet Thatcher (C/1861 G1), which has an orbital period of about 415 years. This comet won't be close to Earth again until around 2276, but its trail of debris crosses Earth's path every April. Lyrid meteors are medium-fast (49 km/s) and often leave persistent glowing trains in the sky for a few seconds. The shower can occasionally produce 'outbursts' of several hundred meteors per hour when Earth passes through a particularly dense clump of the debris stream.",
      professional: "The Lyrid stream parent comet, C/1861 G1 (Thatcher), has P ≈ 415 yr (a ≈ 55.7 AU, e ≈ 0.9824, i ≈ 79.8°). Observed ZHR is typically 18 ± 5; outbursts have been recorded in 1803 (700/hr), 1922 (96/hr), and 1982 (90/hr) when Earth intersects dense filaments. Activity profile is broader than Quadrantids (Δt_FWHM ~ 12–15 hr); dust trail modelling (Rendtel 2008) attributes outbursts to trails ejected in specific perihelion passages of Thatcher that converge near Earth's path. Lyrid meteors produce a high fraction of persistent trains (>2 s), consistent with meteoroids above average density (r ~ 2.1, silicate-rich). Geographic radiant: α = 272°, δ = +33° (J2000); peak solar longitude λ☉ = 32.32°.",
    },
    tips: [
      "Peak around April 22–23 each year in the pre-dawn hours.",
      "Radiant near Vega, so look generally overhead for best results.",
      "A dark country site improves rates significantly.",
      "Occasionally produces outburst years — check IMO forecasts.",
    ],
  },

  {
    slug: "eta-aquariids",
    name: "Eta Aquariids",
    radiantConstellation: "Aquarius",
    peakDate: "0000-05-06",
    activeStart: "0000-04-19",
    activeEnd: "0000-05-28",
    zhr: 70,
    entrySpeedKms: 66,
    color: "#80e0a0",
    origin: {
      parentBody: "1P/Halley",
      parentType: "comet",
    },
    content: {
      discover: "The Eta Aquariids are debris from Halley's Comet — the most famous comet in history. Every May, Earth passes through the stream of dust and debris that Halley has shed over thousands of years, producing shooting stars that travel at about 66 km/s — some of the fastest meteors of the year. From the Southern Hemisphere the Eta Aquariids can be spectacular, with rates up to 70 per hour. Northern hemisphere observers see fewer because the radiant doesn't climb high in the sky.",
      explore: "Halley's Comet produces two meteor showers each year: the Eta Aquariids in May, when Earth passes through the incoming side of Halley's orbit, and the Orionids in October, when we cross the outgoing side. The Eta Aquariids are active for a remarkably long time — from late April to late May — reflecting the spread of Halley's debris over thousands of years of shedding. At high speeds (66 km/s), Eta Aquariid meteors often leave long, glowing trains that can last for several seconds after the meteor has passed.",
      professional: "Halley's orbital period is ~75.3 yr (a = 17.8 AU, e = 0.967, i = 162.2°, retrograde). The Eta Aquariid stream represents multiple orbital revolutions of dust trails from perihelion passages dating back thousands of years; stream modelling (Rendtel & Lyytinen) identifies distinct trail components from individual perihelion passages. ZHR peak typically 60–85 with year-to-year variability; activity curve is broad and flat for ~5 days near peak (solar longitude λ☉ = 45–47°). Radiant: α = 338°, δ = −1° (J2000.0); the low declination means the shower is optimally placed for latitudes south of −40°, where rates are 20–30% higher. Meteoroid velocities at 66 km/s produce characteristic spectrum dominated by Mg, Na, and Fe emissions. The shower's broad activity (Δλ☉ ~ 40°) reflects the diffuse, old-age spread of Halley's debris field.",
    },
    tips: [
      "Best viewed from the Southern Hemisphere, where the radiant climbs higher.",
      "Look east in the hours before dawn — Aquarius rises in the pre-dawn sky.",
      "Activity broad and flat; not just the peak night but several nights around May 6.",
      "Fast meteors (66 km/s) often leave glowing persistent trains.",
    ],
  },

  {
    slug: "delta-aquariids",
    name: "Delta Aquariids",
    radiantConstellation: "Aquarius",
    peakDate: "0000-07-30",
    activeStart: "0000-07-12",
    activeEnd: "0000-08-23",
    zhr: 25,
    entrySpeedKms: 41,
    color: "#c0e0ff",
    origin: {
      parentBody: "96P/Machholz (probable)",
      parentType: "comet",
    },
    content: {
      discover: "The Delta Aquariids are a reliable midsummer shower, peaking at the end of July. They're not the flashiest shower of the year — you'll typically see about 25 meteors per hour — but they're active for a long time (over a month) and they overlap with the beginning of the Perseid season in early August. If you're outside watching for Perseids in late July, many of those meteors might actually be Delta Aquariids! They're best seen from tropical and southern latitudes.",
      explore: "The Delta Aquariids likely originate from Comet 96P/Machholz, an unusual short-period comet with very low carbon content that orbits close to the Sun every 5.3 years. The comet's chemical oddity — almost no CN gas or C₂ molecules, both normally abundant in comets — makes it a scientific curiosity. Some researchers believe 96P/Machholz is an interstellar capture, a cometary fragment, or a body that has already lost most of its volatiles through close passages to the Sun. The shower is active for over a month, reflecting a broad, old debris stream.",
      professional: "Parent body 96P/Machholz (a = 3.034 AU, e = 0.959, i = 58.3°) has anomalously low CN and C₂ abundances (< 0.1% solar) compared to other comets, suggesting either a different formation region, significant thermal processing, or an interstellar/captured origin (Langland-Shula & Smith 2011). The Delta Aquariid stream (Southern branch: λ☉ = 127°, α = 340°, δ = −16°; ZHR ~ 25) is associated with the Machholz complex — a family of streams including the Quadrantids, Arietids, and others linked by common orbital elements. Moderate entry speed (41 km/s) produces yellow-white meteors with few persistent trains. Activity index r ≈ 3.2 (shallow mass spectrum, fewer large meteoroids). The Southern Delta Aquariids coincide with the Northern branch (ZHR ~10, different radiant) and overlap with the Perseids in early August, complicating attribution.",
    },
    tips: [
      "Best viewed from south of 30°N latitude where the radiant climbs higher.",
      "Active for over a month — not just one peak night.",
      "Overlaps with the start of Perseid season in late July–early August.",
      "Slow-ish meteors (41 km/s) — look for yellow-white streaks.",
    ],
  },

  {
    slug: "perseids",
    name: "Perseids",
    radiantConstellation: "Perseus",
    peakDate: "0000-08-12",
    activeStart: "0000-07-17",
    activeEnd: "0000-08-24",
    zhr: 100,
    entrySpeedKms: 59,
    color: "#ffcc44",
    origin: {
      parentBody: "109P/Swift-Tuttle",
      parentType: "comet",
    },
    content: {
      discover: "The Perseids are the most popular meteor shower of the year — and for good reason! They peak in mid-August when the weather is warm and nights are pleasant, you can see up to 100 meteors per hour from a dark site, and many of them are bright with long glowing trails. Just go outside on the nights around August 12th, lie back, and look up. The meteors seem to come from the direction of the constellation Perseus, but you can see them anywhere in the sky. No telescope needed — just your eyes!",
      explore: "The Perseids are debris from Comet Swift-Tuttle, a large comet (~26 km nucleus diameter) that orbits the Sun every 130 years. Every time the comet passes near the Sun, it sheds more dust that gradually spreads around its orbit. Earth crosses this debris trail every August. The Perseids have been observed for over 2,000 years — Chinese astronomers recorded them in AD 36. Swift-Tuttle last passed near the Sun in 1992 and won't return until 2126. In some years, particularly near the comet's perihelion, the Perseids can produce enhanced storms of several hundred per hour.",
      professional: "Parent comet 109P/Swift-Tuttle: P ≈ 130 yr (a ≈ 26.1 AU, e ≈ 0.963, i ≈ 113.5°); nucleus diameter ≈ 26 km (largest known shower parent). Last perihelion: Dec 1992; next: Sep 2126. Multiple dust trail components from different perihelion passages produce the broad activity profile (Δλ☉ ~ 35°) with a narrow filament producing the sharp peak. Radiant: α = 48°, δ = +58° (J2000); circumpolar for northern high latitudes. Entry speed 59 km/s; r ≈ 2.6; ZHR model includes a pre-peak enhancement at λ☉ = 139.5° (filament) and broad peak at λ☉ = 141.0°. The Perseids have a bimodal mass distribution: high fraction of centimetre-scale meteoroids (responsible for −2 to −4 magnitude fireballs) compared to other showers. Outbursts recorded in 1991 (ZHR ~400), 1992 (ZHR ~500) due to recent-perihelion trail enhancement. Swift-Tuttle's nominal orbit passes within 0.05 AU of Earth; the 2126 apparition trajectory is well-determined — no impact risk for at least 2000 years.",
    },
    tips: [
      "Peak around August 12–13, but active for several nights on either side.",
      "No equipment needed — just lie back in a dark spot and let your eyes adjust.",
      "Look anywhere in the sky; the radiant in Perseus just tells you where they come from.",
      "Best rates after midnight when Perseus is high in the sky.",
      "Warm summer nights make this the most beginner-friendly shower of the year.",
    ],
  },

  {
    slug: "orionids",
    name: "Orionids",
    radiantConstellation: "Orion",
    peakDate: "0000-10-21",
    activeStart: "0000-10-02",
    activeEnd: "0000-11-07",
    zhr: 25,
    entrySpeedKms: 66,
    color: "#ff8060",
    origin: {
      parentBody: "1P/Halley",
      parentType: "comet",
    },
    content: {
      discover: "The Orionids are the second meteor shower produced each year by Halley's Comet — Earth crosses the comet's outgoing debris trail in October. They peak around October 21st with about 25 meteors per hour. These are very fast meteors (66 km/s — the same speed as the Eta Aquariids in May), and many leave long glowing trails. The radiant point is near the famous constellation Orion, close to the famous red star Betelgeuse.",
      explore: "Like the Eta Aquariids, the Orionids are debris from Halley's Comet, but they represent the other side of Halley's orbit — the outgoing trail rather than the incoming one. Orionid meteors are among the fastest of any shower (66 km/s), producing bright streaks with persistent glowing trains. In exceptional years (2006–2009), the Orionids produced enhanced activity of 50–80 meteors per hour, possibly due to gravitational perturbations of the debris stream by Jupiter concentrating a particularly dense clump at Earth's orbit.",
      professional: "The Orionid stream shares the Halley-family parent with the Eta Aquariids but intersects Earth's orbit on the descending node (λ☉ ≈ 208°), whereas the Eta Aquariids intersect on the ascending node (λ☉ ≈ 46°). Both streams have identical heliocentric velocities at Earth's orbit (~42 km/s); the different geocentric entry vectors arise from Earth's orbital velocity direction. Radiant: α = 95°, δ = +16° (J2000); near η Geminorum. Typical ZHR: 20–25, but anomalously high values (60–80) were observed 2006–2009 (Rendtel 2008) attributed to Jupiter-perturbed trail filaments converging at Earth. Activity profile: broad (Δλ☉ ~ 40°) with possible multiple peaks. Entry speed 66 km/s — highest of any major shower alongside Leonids — producing long, luminous ablation trails and significant radio-reflective plasma columns.",
    },
    tips: [
      "Peak around October 21st each year — active for weeks on either side.",
      "Best rates after midnight when Orion is high in the sky.",
      "Very fast meteors (66 km/s) — look for bright, quick streaks with persistent trains.",
      "Can be spectacular in 'outburst' years — check IMO activity reports.",
    ],
  },

  {
    slug: "leonids",
    name: "Leonids",
    radiantConstellation: "Leo",
    peakDate: "0000-11-17",
    activeStart: "0000-11-06",
    activeEnd: "0000-11-30",
    zhr: 15,
    entrySpeedKms: 71,
    color: "#e0a060",
    origin: {
      parentBody: "55P/Tempel-Tuttle",
      parentType: "comet",
    },
    content: {
      discover: "The Leonids are famous for producing the most spectacular meteor storms in history — in 1833 and 1966, observers saw tens of thousands of meteors per hour, filling the sky like snow falling upward. In normal years the Leonids are modest (around 15 per hour), but every 33 years when Comet Tempel-Tuttle passes near Earth, the shower can explode into an extraordinary storm. The Leonids are the fastest meteors of any major shower — 71 km/s — and they radiate from the constellation Leo.",
      explore: "The Leonids peak each year around November 17th, when Earth crosses the debris trail of Comet Tempel-Tuttle. In most years the display is modest (10–20 per hour). But Tempel-Tuttle has a 33.25-year orbital period, and when it comes close to Earth during its perihelion passage, it deposits a fresh, dense trail of debris that produces massive storms. The 1833 Leonid storm (estimated 100,000 meteors per hour) inspired the first serious scientific study of meteor showers. More recent storms occurred in 1966 (200,000/hr) and 1999–2002 (1,000–3,500/hr). The next Tempel-Tuttle perihelion is in 2031.",
      professional: "Parent comet 55P/Tempel-Tuttle: P = 33.25 yr (a = 10.34 AU, e = 0.906, i = 162.7°, retrograde). Last perihelion: Feb 1998; next: May 2031. Leonid storms occur when Earth intersects dense dust trails ejected at or near recent perihelion passages; trail particles cluster within ~0.002 AU of the trail centreline. Storm ZHR modelling (McNaught & Asher 1999; Lyytinen & van Flandern 2000): 1999 storm ZHR ~2,000 (calculated trail: 1899 perihelion), 2001 ZHR ~3,700 (1767 + 1866 trails). Entry speed 71 km/s — highest among the 8 major showers — produces intense ablation; Leonid meteoroids are cometary aggregate particles (low density ~200–800 kg/m³) that generate green/white meteors with rapid terminal flares. Activity index r ≈ 2.5; high fireball frequency. Radiant: α = 153°, δ = +22° (J2000), near γ Leonis. 2031 perihelion may produce moderate storms in 2032–2034.",
    },
    tips: [
      "In storm years (near Tempel-Tuttle perihelion) rates can reach thousands per hour.",
      "Even in normal years, peak around November 17th in the pre-dawn hours.",
      "Extremely fast meteors (71 km/s) — many produce bright, rapid streaks.",
      "Check IMO storm predictions for exceptional years — the next Tempel-Tuttle perihelion is 2031.",
    ],
  },

  {
    slug: "geminids",
    name: "Geminids",
    radiantConstellation: "Gemini",
    peakDate: "0000-12-13",
    activeStart: "0000-12-04",
    activeEnd: "0000-12-20",
    zhr: 150,
    entrySpeedKms: 35,
    color: "#80e0d0",
    origin: {
      parentBody: "3200 Phaethon",
      parentType: "asteroid",
    },
    content: {
      discover: "The Geminids are the best meteor shower of the year by most measures — up to 150 meteors per hour from a dark site, and active all night long because the radiant is high in the sky from early evening. They're different from most meteor showers because they come from an asteroid, not a comet! The asteroid 3200 Phaethon comes unusually close to the Sun and may have shed material in the past. Geminid meteors are slower than the fastest showers (35 km/s), colourful, and often bright. December nights are cold, but the Geminids are worth it.",
      explore: "The Geminids are unusual because most major meteor showers come from comets, but the Geminids originate from 3200 Phaethon, classified as an asteroid (and also as a 'rock comet'). When Phaethon makes its closest approach to the Sun (to within 0.14 AU — closer than Mercury ever gets), it is heated so intensely that sodium evaporates from its surface and it briefly develops a small comet-like dust tail. Over thousands of years, this shed material built up the Geminid stream. At 150 per hour at peak, the Geminids are the most productive annual shower, and they're active from sunset to sunrise.",
      professional: "Parent body 3200 Phaethon (Oort & Simon 1983 discovery via IRAS, Whipple 1983 association with Geminids): B-type asteroid, D ≈ 5.1 km, a = 1.271 AU, e = 0.890, i = 22.2°; q = 0.140 AU (inside Mercury perihelion). At perihelion, T_surface > 1,000 K; sodium sublimation detected by STEREO heliospheric imager (Jewitt & Li 2010). JAXA's DESTINY+ mission (planned launch 2025) will fly past Phaethon and characterise its surface composition and dust ejection. The Geminid stream is the broadest (Δλ☉ ~ 25°) and most massive (~2 × 10¹² kg total) of any annual shower, reflecting an old, well-spread debris trail. Entry speed: 35 km/s (slowest of the major showers) — low ablation height (80–85 km) produces more surviving mass and higher fireball rate. Activity index r ≈ 2.6; high density (>1,000 kg/m³) compared to cometary meteoroids. Radiant: α = 112°, δ = +33° (J2000), near Castor. The Sextantids (ZHR ~10, peak June 2) may be a daytime shower associated with the same Phaethon complex.",
    },
    tips: [
      "Best major shower of the year — up to 150 per hour from a dark site.",
      "Radiant in Gemini is visible from early evening through dawn.",
      "Unlike most showers, you don't need to wait until midnight to see good rates.",
      "Slower meteors (35 km/s) are often colourful — look for yellow, red, and white trails.",
      "December peak is cold in the northern hemisphere — worth the effort.",
    ],
  },
];

export default METEOR_SHOWERS;
