/**
 * COSMOS mission data — 25 landmark space missions.
 * Sources: NASA, ESA, JAXA mission pages; peer-reviewed literature.
 */

export type MissionStatus = "active" | "complete" | "planned" | "en-route";
export type MissionType  = "flyby" | "orbiter" | "lander" | "rover" | "crewed" | "sample-return" | "telescope" | "probe";
export type MissionAgency = "NASA" | "ESA" | "JAXA" | "ISRO" | "CNSA" | "Roscosmos" | "NASA/ESA" | "ESA/JAXA" | "NASA/JAXA";

export interface MissionContent {
  discover: string;
  explore: string;
  professional: string;
}

export interface Mission {
  slug: string;
  name: string;
  agency: MissionAgency;
  launchYear: number;
  endYear: number | null;       // null = ongoing
  target: string;
  type: MissionType;
  status: MissionStatus;
  heroColor: string;
  oneLineHook: string;
  content: MissionContent;
  keyFindings: string[];
  relatedBodySlugs: string[];
}

const MISSIONS: Mission[] = [
  {
    slug: "voyager-1",
    name: "Voyager 1",
    agency: "NASA",
    launchYear: 1977,
    endYear: null,
    target: "Jupiter, Saturn, interstellar space",
    type: "flyby",
    status: "active",
    heroColor: "#c8a060",
    oneLineHook: "The most distant human-made object — Voyager 1 has left the solar system and is sailing through interstellar space.",
    content: {
      discover: "Launched in 1977, Voyager 1 was sent to explore Jupiter and Saturn. After completing that mission brilliantly, it just kept going — and going — and going. In 2012, it became the first spacecraft ever to cross into interstellar space, the region between the stars. It's now more than 160 AU from the Sun — that's over 160 times the Earth-Sun distance! It still sends back data using a 22-watt radio transmitter — about the power of a refrigerator light bulb — and the signals take over 22 hours to reach Earth.",
      explore: "Voyager 1 performed flybys of Jupiter (March 1979) and Saturn (November 1980), discovering active volcanoes on Io, characterising Jupiter's ring system, and revealing the complexity of Saturn's rings and moons. It then used Saturn's gravity to sling it northward out of the ecliptic plane on a trajectory toward interstellar space. In August 2012, the plasma wave science instrument detected the density jump characteristic of the heliopause — the boundary where the solar wind gives way to the interstellar medium — at a distance of ~122 AU. Voyager 1 is now the most distant object ever created by humans.",
      professional: "Voyager 1 crossed the termination shock (where solar wind decelerates to subsonic speeds) at ~94 AU (Dec 2004) and the heliopause at ~122 AU (Aug 2012), confirmed by the plasma wave instrument detecting a two-fold electron density increase (Gurnett et al. 2013, Science). Current distance (2025): ~164 AU; 1-way light time ~22.7 hr; downlink rate ~160 bps on DSN 70-m antennas. RTG power has decayed to ~240 W (2025), requiring sequential instrument shutdowns. Voyager 1 carries the Golden Record (Carl Sagan, Frank Drake), a 12-inch gold-plated copper disk with 115 images, sounds of Earth, and music in case of interstellar encounter.",
    },
    keyFindings: [
      "Discovered active volcanoes on Io — the first extraterrestrial volcanism ever observed.",
      "Revealed the complexity of Jupiter's faint ring system.",
      "Detailed Saturn's ring structure, including the Cassini Division and shepherd moons.",
      "Discovered Titan has a substantial nitrogen atmosphere.",
      "First spacecraft to confirm entry into interstellar space (2012).",
    ],
    relatedBodySlugs: ["jupiter", "saturn", "io", "titan"],
  },

  {
    slug: "voyager-2",
    name: "Voyager 2",
    agency: "NASA",
    launchYear: 1977,
    endYear: null,
    target: "Jupiter, Saturn, Uranus, Neptune, interstellar space",
    type: "flyby",
    status: "active",
    heroColor: "#8090c0",
    oneLineHook: "The only spacecraft to visit all four giant planets — and the only one to have flown past Uranus and Neptune.",
    content: {
      discover: "Voyager 2 is the only spacecraft ever to have visited Uranus and Neptune. Launched in 1977 (two weeks before Voyager 1), it took advantage of a rare alignment of the outer planets that won't happen again for another 175 years. It flew past Jupiter, Saturn, Uranus, and Neptune one by one, completely transforming our understanding of each one. It crossed into interstellar space in 2018 — the second human-made object to do so.",
      explore: "Voyager 2's 'grand tour' was made possible by a planetary alignment occurring only every ~175 years. At Jupiter (1979) it discovered lightning and active volcanism on Io. At Saturn (1981) it gave a second perspective on the ring system. Uranus (1986) was revealed to have a tilted magnetic field, 10 small moons, and 11 rings. Neptune (1989) showed the fastest winds in the solar system, the Great Dark Spot storm, and active geysers on Triton. Voyager 2 crossed the heliopause in November 2018 at ~119 AU.",
      professional: "Voyager 2 crossed the heliopause at ~119 AU in Nov 2018, corroborated by the plasma science instrument detecting an abrupt decrease in solar wind speed to ~0 km/s and an increase in galactic cosmic ray flux (Stone et al. 2019, Nature Astronomy). Unlike Voyager 1 (which lost its plasma instrument in 1980), Voyager 2 retains a functioning plasma science instrument (PLS), providing unique in-situ measurements in the local interstellar medium (LISM). Uranus flyby (Jan 1986): discovered 10 new moons, confirmed 9 rings + 2 new rings, measured magnetic field offset (8.86× Earth's dipole moment, tilted 59° from rotation axis, offset 0.3 R_U from centre). Neptune flyby (Aug 1989): measured 2,100 km/h westward winds, detected Great Dark Spot (since disappeared), discovered Proteus and 5 other moons, and photographed Triton's N₂ geysers.",
    },
    keyFindings: [
      "Only spacecraft to visit Uranus and Neptune.",
      "Discovered Uranus's unusually tilted and offset magnetic field.",
      "Confirmed Neptune has the fastest winds in the solar system (2,100 km/h).",
      "Photographed active nitrogen geysers on Triton.",
      "Crossed into interstellar space in 2018.",
    ],
    relatedBodySlugs: ["jupiter", "saturn", "uranus", "neptune"],
  },

  {
    slug: "apollo-11",
    name: "Apollo 11",
    agency: "NASA",
    launchYear: 1969,
    endYear: 1969,
    target: "Moon",
    type: "crewed",
    status: "complete",
    heroColor: "#d4c060",
    oneLineHook: "The mission that landed humans on the Moon for the first time — one of the greatest achievements in history.",
    content: {
      discover: "On 20 July 1969, astronaut Neil Armstrong became the first human being to set foot on another world. He was followed minutes later by Buzz Aldrin, while Michael Collins orbited above in the Command Module. Armstrong's famous words — 'That's one small step for man, one giant leap for mankind' — were heard by hundreds of millions of people on Earth. The three astronauts spent 8 days in space, collected 21 kg of Moon rocks, and returned safely to Earth on 24 July.",
      explore: "Apollo 11 launched on 16 July 1969 atop a Saturn V rocket — the most powerful rocket ever built. The crew of Neil Armstrong, Buzz Aldrin, and Michael Collins took three days to reach the Moon. Armstrong and Aldrin descended to the lunar surface in the Eagle lander, touching down in the Sea of Tranquillity (Mare Tranquillitatis) at 20:17 UTC on 20 July. They conducted one EVA of 2 hours 31 minutes, collected 21.5 kg of samples, deployed a seismometer and laser retroreflector, and lifted off to rejoin Collins. The mission fulfilled President Kennedy's 1961 challenge to land a man on the Moon before the end of the decade.",
      professional: "Apollo 11 landed at 0.6741°N, 23.4730°E (Mare Tranquillitatis) at 20:17:40 UTC on 20 July 1969. Armstrong's first step occurred at 02:56 UTC on 21 July; EVA duration 2h 31m 40s. Samples returned: 21.55 kg, including basalts (3.7 Gya) and breccias. The Passive Seismic Experiment recorded meteoroid impacts and moonquakes for 21 days before the transmitter failed. The Laser Ranging Retroreflector (LRRR) at the landing site is still used today, enabling measurement of the lunar recession rate (3.83 cm/yr). Command Module (CM-107 Columbia) and Lunar Module (LM-5 Eagle) were built by North American Rockwell and Grumman respectively. Mission cost: ~$1.24B (1969); Saturn V thrust: 34 MN (7.6 million lbf) at liftoff.",
    },
    keyFindings: [
      "First crewed landing on the Moon — 20 July 1969.",
      "Returned 21.5 kg of lunar samples including basalts 3.7 billion years old.",
      "Deployed a laser retroreflector still used to measure the Moon's recession.",
      "Demonstrated orbital mechanics precision required for crewed deep-space missions.",
      "Proved that humans could land on another world and return safely.",
    ],
    relatedBodySlugs: ["moon", "earth"],
  },

  {
    slug: "cassini-huygens",
    name: "Cassini-Huygens",
    agency: "NASA/ESA",
    launchYear: 1997,
    endYear: 2017,
    target: "Saturn system",
    type: "orbiter",
    status: "complete",
    heroColor: "#d4c07a",
    oneLineHook: "Thirteen years at Saturn — Cassini revealed a solar system within a solar system, including the water-jetting moon Enceladus.",
    content: {
      discover: "Cassini spent 13 years orbiting Saturn, exploring its rings, moons, and the planet itself. It was humanity's most thorough look at another planet system ever. The Huygens probe parachuted through Titan's thick orange atmosphere in January 2005 and landed on a surface covered in icy pebbles — the most distant landing on another world. Cassini discovered that the tiny moon Enceladus is shooting geysers of water into space, and that Titan has lakes and seas of liquid methane. In 2017, scientists deliberately flew Cassini into Saturn's atmosphere so it couldn't contaminate the moons.",
      explore: "Cassini arrived at Saturn in July 2004 and conducted 293 orbits, 162 targeted flybys of moons, and four dedicated 'Grand Finale' orbits through the gap between Saturn and its rings. Discoveries: Enceladus's south polar geysers (2005) containing water, organic molecules, and molecular hydrogen; Titan's methane lakes and hydrocarbon dune seas; Saturn's hexagonal north polar vortex; the seasonal change of Saturn's northern hemisphere from blue to gold. The Huygens probe (ESA) descended through Titan's atmosphere on 14 January 2005 and survived 72 minutes on the surface, transmitting data about a landscape of rounded ice pebbles in a dried methane riverbed.",
      professional: "Cassini orbital insertion burn: 1 July 2004, 96-min engine burn at periapsis; apoapsis ~8.9 million km. INMS (Ion and Neutral Mass Spectrometer) sampled Enceladus plume 22 times, detecting H₂, CO₂, CH₄, NH₃, H₂S, complex organics up to m/z=200, and H₂ at 0.4–1.4% by volume (Waite et al. 2017) — indicating active serpentinisation (T_vent ~ 90°C). RADAR (Ku-band SAR) mapped Titan: altimetry of Kraken Mare (depth >100 m), dune morphology (~1,800 km of longitudinal dunes in equatorial band). CIRS measured Enceladus south polar heat flow at 15.8 ± 3.1 GW; VSP showed water vapour column density of 1.5 × 10¹⁵ cm⁻². Grand Finale (Apr–Sep 2017): 22 ring-crossing orbits through 2,000-km Saturn–ring gap, measuring ring mass (1.54 × 10¹⁹ kg) and constraining Saturn's gravitational harmonics J₆–J₁₂ for interior structure. Final atmospheric entry: 15 Sep 2017.",
    },
    keyFindings: [
      "Discovered Enceladus's water-jetting geysers containing organic molecules and molecular hydrogen.",
      "Found evidence of an internal liquid water ocean in Enceladus.",
      "Huygens probe landed on Titan, revealing methane riverbeds and rounded ice pebbles.",
      "Mapped Titan's polar hydrocarbon seas (Kraken Mare, Ligeia Mare).",
      "Measured Saturn's ring mass — resolving a long-standing debate about ring age.",
      "Characterised Saturn's hexagonal north polar vortex across multiple seasons.",
    ],
    relatedBodySlugs: ["saturn", "titan", "enceladus"],
  },

  {
    slug: "hubble",
    name: "Hubble Space Telescope",
    agency: "NASA/ESA",
    launchYear: 1990,
    endYear: null,
    target: "Deep space",
    type: "telescope",
    status: "active",
    heroColor: "#4060c0",
    oneLineHook: "Three decades of breathtaking images — Hubble transformed how humanity sees the universe.",
    content: {
      discover: "The Hubble Space Telescope has been orbiting Earth since 1990 and has taken some of the most iconic photographs in history. Without the blurring of Earth's atmosphere, Hubble can see distant galaxies, colorful nebulae, and the birth and death of stars with stunning clarity. Famous images like the Hubble Deep Field showed us that the universe is filled with countless galaxies as far as the eye can see. Five Space Shuttle servicing missions kept Hubble upgraded and running for over 30 years.",
      explore: "Hubble orbits at 547 km altitude with a 2.4-m mirror and instruments covering UV through near-IR wavelengths. Initial optics suffered from spherical aberration (mirror ground to incorrect curvature by 2.2 μm), corrected by COSTAR optics installed during Servicing Mission 1 (1993). Key science: determined the Hubble constant (H_0 = 72 km/s/Mpc, HST Key Project 2001); discovered that the universe's expansion is accelerating (via Type Ia supernovae, leading to the 2011 Nobel Prize); imaged Pluto's moons; tracked storms on Neptune; characterised exoplanet atmospheres in transmission spectroscopy.",
      professional: "Hubble's 2.4-m Ritchey-Chrétien primary mirror (f/24 Cassegrain, total f/96 after secondary) achieves diffraction-limited resolution of ~0.05\"/px at 500 nm. Current instruments (2025): ACS/WFC (0.05\"/px, 202×202 arcsec² FOV, 3500–11000 Å); WFC3/UVIS (200×200 arcsec², 200–1000 nm) and WFC3/IR (136×123 arcsec², 0.9–1.7 μm); COS (UV spectroscopy, R = 20,000); STIS (long-slit spectroscopy UV–NIR, echelle modes R ~ 200,000). Hubble has produced >1.5 million observations; the Mikulski Archive for Space Telescopes (MAST) contains >40 TB of data. SM4 (2009) installed COS and WFC3 and repaired ACS and STIS; no further servicing is planned. Gyroscope failures (2024) required a switch to 1-gyro mode, reducing scheduling efficiency but extending mission life to ~2030.",
    },
    keyFindings: [
      "Measured the Hubble constant and the age of the universe.",
      "Confirmed that the universe's expansion is accelerating (dark energy).",
      "Hubble Deep Field and Ultra Deep Field showed ~10,000 galaxies in a tiny patch of sky.",
      "Discovered supermassive black holes are common in galaxy centres.",
      "Characterised the atmospheres of exoplanets using transmission spectroscopy.",
      "Tracked decades of weather and storm evolution on Jupiter, Saturn, Uranus, and Neptune.",
    ],
    relatedBodySlugs: ["earth"],
  },

  {
    slug: "mars-curiosity",
    name: "Mars Science Laboratory (Curiosity)",
    agency: "NASA",
    launchYear: 2011,
    endYear: null,
    target: "Mars (Gale Crater)",
    type: "rover",
    status: "active",
    heroColor: "#c1440e",
    oneLineHook: "The car-sized rover that confirmed Mars was once habitable — Curiosity has been exploring Gale Crater since 2012.",
    content: {
      discover: "Curiosity is a car-sized robot rover that has been exploring Mars since landing in August 2012. It landed using a wild 'sky crane' system — a rocket-powered jetpack lowered the rover to the ground on cables. Curiosity drills into Martian rocks, analyses their chemistry, and looks for signs that Mars could once have supported life. It confirmed that the area it landed in — Gale Crater — once had a lake of liquid water billions of years ago. Curiosity is still working today, more than 12 years after it landed!",
      explore: "Curiosity landed in Gale Crater (5.4°S, 137.8°E) on 6 August 2012 using the Entry, Descent and Landing (EDL) system — a hypersonic aeroshell, supersonic parachute, and sky crane system. It carries 10 science instruments including ChemCam (laser-induced breakdown spectroscopy, rock analysis from up to 7 m), SAM (Sample Analysis at Mars, gas chromatograph-mass spectrometer), and CheMin (X-ray diffraction for mineralogy). It confirmed that Gale Crater hosted a lake of fresh, potentially drinkable water 3.5 billion years ago, and discovered complex organics in 3.5-billion-year-old mudstones.",
      professional: "Curiosity (MSL, 899 kg) uses a Multi-Mission Radioisotope Thermoelectric Generator (MMRTG, ~2 kg Pu-238, ~110 W electrical beginning of mission). ChemCam LIBS resolves elemental abundances (H, C, N, O, Na, Mg, Al, Si, K, Ca, Ti, Mn, Fe) in a 350–550 μm spot from up to 7 m; APXS provides bulk elemental analysis via α-particle X-ray fluorescence. SAM: GC-MS identifies organic compounds at ppb sensitivity; TLS (tunable laser spectrometer) measures δ¹³C in CO₂ and CH₄ concentration (seasonal variation 0.2–0.8 ppb detected, Eigenbrode et al. 2018, Science). CheMin X-ray diffraction identifies clay minerals (smectites, illite), sulphates, and oxides. Murray Formation mudstones (Pahrump Hills, 2014–2015) confirm lacustrine deposition in a circumneutral, low-salinity, mildly oxidising environment suitable for chemolithotrophic life (Grotzinger et al. 2014, Science). As of 2025, Curiosity has driven >30 km and drilled >40 rocks.",
    },
    keyFindings: [
      "Confirmed Gale Crater once contained a lake of fresh, neutral-pH liquid water.",
      "Detected complex organic molecules (thiophenes, benzene) preserved in 3.5-billion-year-old mudstone.",
      "Measured seasonal methane variations in Mars's atmosphere (0.2–0.8 ppb).",
      "Characterised the radiation environment on Mars — critical for planning human missions.",
      "Climbed 600+ metres up Mount Sharp (Aeolis Mons), reading billions of years of Mars history in the rock layers.",
    ],
    relatedBodySlugs: ["mars"],
  },

  {
    slug: "mars-perseverance",
    name: "Mars 2020 (Perseverance)",
    agency: "NASA",
    launchYear: 2020,
    endYear: null,
    target: "Mars (Jezero Crater)",
    type: "rover",
    status: "active",
    heroColor: "#c1440e",
    oneLineHook: "Humanity's most ambitious Mars rover — collecting rock samples for eventual return to Earth, while a helicopter makes history.",
    content: {
      discover: "Perseverance landed in Jezero Crater on Mars on 18 February 2021. Jezero was once a river delta flowing into a lake — exactly the kind of place where ancient life might have left traces. Perseverance is collecting rock samples and sealing them in tubes. Future missions will retrieve these tubes and bring them to Earth — the first ever Mars Sample Return! Perseverance also carried a small helicopter called Ingenuity, which made the first ever powered flight on another planet. After its planned 5 flights, Ingenuity went on to fly more than 70 times!",
      explore: "Perseverance (1,025 kg, 2.2 m × 3.0 m × 2.1 m) is the most capable rover ever sent to Mars. It carries 23 cameras, 2 microphones (the first to record sounds on Mars), and 7 science instruments. MOXIE demonstrated oxygen production from Mars's CO₂ atmosphere — a prototype of the technology needed for human missions. Ingenuity (1.8 kg) used contra-rotating blades spinning at 2,400 RPM to fly in Mars's thin atmosphere — the first powered aircraft on another planet. Perseverance has collected and sealed 23 sample tubes of geological core samples, the most scientifically valuable cache of material ever prepared for return from another world.",
      professional: "Perseverance uses the same MMRTG-based power system as Curiosity (~110 W). SHERLOC (Scanning Habitable Environments with Raman & Luminescence for Organics & Chemicals) uses deep-UV Raman spectroscopy (248.6 nm laser) to detect aromatic organics and biosignatures in situ; PIXL (Planetary Instrument for X-ray Lithochemistry) provides sub-mm elemental mapping via μXRF. Core samples (6 mm diameter × 57 mm long) are sealed in titanium tubes (43-mm ID); 23 tubes collected through Jan 2025, containing igneous (olivine-pyroxene cumulate; Séítah formation), aqueously altered (carbonate-sulphate-perchlorate; Máaz/Hawksbill Camp), and regolith samples. MOXIE produced O₂ at 6 g/hr (peak) at >98% purity via SOXE (Solid Oxide Electrolysis) at 800°C; total production: 122 g O₂ over 16 runs (Hecht et al. 2021, Science Advances). Ingenuity flights through sol 1000 (2024): 72 flights, max altitude 24 m, max speed 20 km/h, max range 705 m/flight; communications relay through Perseverance then MRO/MAVEN.",
    },
    keyFindings: [
      "First powered aircraft flight on another planet (Ingenuity helicopter, April 2021).",
      "Collected 23 core samples of ancient Mars rocks for eventual return to Earth.",
      "Produced oxygen from Mars's CO₂ atmosphere (MOXIE experiment).",
      "Recorded the first sounds ever captured on Mars — including wind and rover wheel crunches.",
      "Characterised Jezero Crater as an ancient river delta with significant ancient organic content.",
    ],
    relatedBodySlugs: ["mars"],
  },

  {
    slug: "new-horizons",
    name: "New Horizons",
    agency: "NASA",
    launchYear: 2006,
    endYear: null,
    target: "Pluto, Arrokoth, Kuiper Belt",
    type: "flyby",
    status: "active",
    heroColor: "#d4c0a0",
    oneLineHook: "The mission that revealed Pluto's heart — New Horizons gave us the first close-up of the frozen world at the edge of the solar system.",
    content: {
      discover: "New Horizons was launched in 2006 to explore Pluto — a world that had never been visited by any spacecraft. It raced across the solar system at incredible speed and flew past Pluto on 14 July 2015, sending back breathtaking photographs. We saw Pluto for the first time: mountains of water ice, a heart-shaped plain of nitrogen ice, blue atmospheric haze, and a surprisingly active world. New Horizons then flew past a distant object called Arrokoth in January 2019 — the most distant flyby in history — showing us what the early building blocks of planets looked like.",
      explore: "New Horizons passed Jupiter in 2007 for a gravity-assist boost, reaching Pluto in just 9 years — a record. At closest approach (12,472 km from Pluto's surface), seven science instruments captured data simultaneously. The 6.25 GB of compressed data took 16 months to transmit home at 1–4 kbps across 4.7 billion km. Discoveries included Tombaugh Regio (the 'heart' — a nitrogen-ice plain), the Bladed Terrain (eroded methane-ice ridges), possible cryovolcanoes (Wright and Piccard Montes), and a blue atmospheric haze layer from photochemical tholins. The Arrokoth flyby (2019) revealed a contact-binary KBO — two lobes gently merged, preserved from the early solar system.",
      professional: "New Horizons launched 19 Jan 2006 on Atlas V-551 at 16.26 km/s (then-fastest spacecraft launch velocity). Jupiter gravity assist (28 Feb 2007) increased velocity by 4 km/s; Pluto closest approach: 14 Jul 2015, 11:49:57 UTC, 12,472 km from Pluto's surface, 28,800 km from Charon. LORRI (Long Range Reconnaissance Imager) resolved features down to 80 m/px at closest approach. ALICE UV spectrograph measured atmospheric composition and structure; SWAP/PEPSSI measured solar wind interaction; REX (Radio Science Experiment) measured Pluto's atmospheric pressure via radio occultation (T_surface ~ 37–55 K). Sputnik Planitia convective cell turnover timescale: 500,000–1 Myr (McKinnon et al. 2016). Arrokoth (2014 MU₆₉) flyby: 1 Jan 2019, 3,538 km; revealed a ~36 km contact binary formed by slow coalescence of two lobes (Ultima and Thule) — confirming streaming instability planetesimal formation. Currently at ~58 AU (2025), approaching the heliopause.",
    },
    keyFindings: [
      "First close-up images of Pluto, revealing towering ice mountains and a nitrogen-ice heart.",
      "Discovered active geological processes on Pluto — convecting nitrogen ice cells.",
      "Detected blue atmospheric haze from tholin photochemistry.",
      "Arrokoth flyby revealed pristine contact-binary planetesimal, confirming streaming instability formation.",
      "Discovered possible cryovolcanic features (Wright and Piccard Montes).",
    ],
    relatedBodySlugs: ["pluto"],
  },

  {
    slug: "europa-clipper",
    name: "Europa Clipper",
    agency: "NASA",
    launchYear: 2024,
    endYear: null,
    target: "Europa (Jupiter moon)",
    type: "orbiter",
    status: "en-route",
    heroColor: "#c0d8e8",
    oneLineHook: "The mission to determine whether Jupiter's moon Europa could host life in its hidden ocean — arriving in 2030.",
    content: {
      discover: "Europa Clipper is on its way to Europa — one of Jupiter's moons that hides a vast ocean of liquid water beneath its icy crust. Scientists think there could be more water in Europa's ocean than in all of Earth's oceans combined! And where there's water, there could be life. Europa Clipper will fly past Europa 49 times between 2030 and 2034, getting closer and closer each time to study the ice, the ocean beneath, and any plumes of water that might shoot into space.",
      explore: "Europa Clipper launched on 14 October 2024 aboard a SpaceX Falcon Heavy rocket. It will arrive at Jupiter in April 2030 after gravity assists from Mars (Feb 2025) and Earth (Dec 2026). Rather than orbiting Europa directly (which would expose it to harmful radiation from Jupiter's magnetic field), it will orbit Jupiter and perform 49 targeted flybys of Europa at altitudes as low as 25 km. Its 9 science instruments will probe the ice shell, detect the ocean below, sample any erupting water plumes, and assess whether Europa's environment could support life.",
      professional: "Europa Clipper (6,065 kg fuelled; ~7 m × 22 m deployed with solar arrays) entered a 6-year cruise trajectory using Mars (Feb 2025) and Earth (Dec 2026) gravity assists, arriving at Jupiter April 2030. Science payload: REASON (Radar for Europa Assessment and Sounding: Ocean to Near-surface) — dual-frequency ice-penetrating radar at 9 MHz (sounding) and 60 MHz (high-res); MASPEX (mass spectrometer, 1–2,000 Da, 100 ppm mass resolution); SUDA (surface dust analyser, characterises ejected ocean material); E-THEMIS (thermal imager, 1–100 μm, detects active sites); MISE (mapping imaging spectrometer, 0.8–5 μm); UVS (UV spectrograph, 55–210 nm, O₂ exosphere and plume detection); MAG (fluxgate magnetometer array, measures induced field from ocean). The 49 flybys span 2030–2034 at closest approaches from 25–2,700 km. Mission lifetime constrained by Europa's radiation environment (total ionising dose ~2.8 Mrad at end of mission). Key observable: ice shell thickness from REASON dielectric constant inversions, ocean salinity from induced B-field amplitude.",
    },
    keyFindings: [],
    relatedBodySlugs: ["europa", "jupiter"],
  },

  {
    slug: "james-webb",
    name: "James Webb Space Telescope",
    agency: "NASA/ESA",
    launchYear: 2021,
    endYear: null,
    target: "Deep space",
    type: "telescope",
    status: "active",
    heroColor: "#4080c0",
    oneLineHook: "The most powerful space telescope ever built — Webb sees the universe in infrared, revealing the first galaxies and alien atmospheres.",
    content: {
      discover: "The James Webb Space Telescope launched on Christmas Day 2021 and spent a month carefully unfolding its giant golden mirror in space. It's now orbiting 1.5 million km from Earth — about four times farther than the Moon — at a special point where it can always face away from the Sun. Webb sees in infrared light, which lets it see through dust clouds to watch stars being born, and look so far into the distance that it's seeing light from the very first galaxies formed after the Big Bang. It can even study the atmospheres of planets around other stars!",
      explore: "JWST has a 6.5-m primary mirror made of 18 gold-coated hexagonal segments, giving it about 7× the light-collecting power of Hubble. A five-layer sunshield the size of a tennis court keeps it cold enough to detect infrared heat from the universe. It orbits the Sun-Earth L2 Lagrange point, 1.5 million km in the anti-sunward direction. Since science operations began in July 2022, it has: detected CO₂ in an exoplanet atmosphere for the first time, seen galaxies from just 300 million years after the Big Bang, observed protostellar jets in 3D, and measured the chemistry of Titan, Neptune, and Mars in unprecedented detail.",
      professional: "JWST primary mirror: 6.5 m effective diameter (25.4 m² collecting area), 18 Be segments, gold-coated (>98% NIR reflectivity), deployed in L2 orbit (1.5 × 10⁶ km from Earth, C/R₁ plane). Five-layer Kapton/Al sunshield passively maintains T_telescope < 50 K; MIRI cooled to 6.7 K by Cryo Cooler. Instruments: NIRCam (0.6–5 μm, 0.031–0.063\"/px, coronagraph), NIRSpec (0.6–5.3 μm, R = 100/1000/2700, 5×5 MSA microshutters for MOS), MIRI (5–28 μm, R = 1300–3700 IFU), NIRISS (grism mode, SOSS for exoplanet transit spectroscopy). Science highlights (2022–2025): GS-z14-0 at z = 14.32 (spectroscopically confirmed earliest galaxy ~300 Myr after BB, Carniani et al. 2024); SO₂ detected in WASP-39b (1-bar photochemistry; JWST TRAPPIST 2022); CH₄ + CO₂ in K2-18b mini-Neptune (Madhusudhan et al. 2023); multiple protostellar jets in Carina Nebula. Fuel remaining: ~60-year mission life based on Ariane 5 L2 injection accuracy (station-keeping Δv budget >> requirement).",
    },
    keyFindings: [
      "First detection of CO₂ in an exoplanet atmosphere (WASP-39b).",
      "Detected galaxies from just 300–400 million years after the Big Bang.",
      "Imaged protostellar jets, star-forming pillars, and disk structures in unprecedented detail.",
      "Observed SO₂ — a photochemical byproduct — in a hot Jupiter's atmosphere.",
      "Resolved stellar populations in nearby galaxies at sub-parsec scales.",
    ],
    relatedBodySlugs: ["earth"],
  },

  {
    slug: "parker-solar-probe",
    name: "Parker Solar Probe",
    agency: "NASA",
    launchYear: 2018,
    endYear: null,
    target: "The Sun",
    type: "probe",
    status: "active",
    heroColor: "#ffcc44",
    oneLineHook: "The fastest human-made object ever built — Parker Solar Probe is 'touching the Sun', diving closer to it than any spacecraft in history.",
    content: {
      discover: "Parker Solar Probe is flying closer and closer to the Sun, using Venus's gravity to shrink its orbit with every pass. Eventually it will skim just 6 million kilometres from the Sun's surface — about 7 times closer than Mercury gets! A special heat shield protects the spacecraft from temperatures of up to 1,400 °C. Parker is sampling the Sun's outer atmosphere — the corona — directly for the first time, trying to solve two great mysteries: why the corona is so much hotter than the surface below it, and how the solar wind gets up to such high speeds.",
      explore: "Parker Solar Probe launched on 12 August 2018, using seven Venus gravity assists to progressively shrink its orbit over a 7-year mission. It has already set the record for the closest approach to the Sun and the fastest object ever built — exceeding 690,000 km/h at perihelion. In 2021 it became the first spacecraft to enter the solar corona, flying through the outer atmosphere of a star. The data it returns is helping scientists understand solar wind acceleration, coronal heating, and the structure of the Sun's magnetic field close to the source.",
      professional: "Parker Solar Probe entered the sub-Alfvénic corona (where solar wind speed < Alfvén speed, meaning magnetic field dominates solar wind dynamics) on 28 April 2021 at perihelion 10 (18.8 R☉). Subsequent encounters have reached 8.86 R☉ (6.16 × 10⁶ km from photosphere); at this distance, orbital speed: ~635,000 km/h (0.064% c). Heat shield (TPS): 11.4-cm-thick carbon foam between two carbon-carbon composite panels; front face T ~ 1,400°C, spacecraft side T ~ 30°C. FIELDS instrument (DC magnetic fields + AC electric fields + plasma waves) detected 'switchbacks' — sudden reversals in the Parker spiral magnetic field, found to originate in the chromosphere/transition region (Bale et al. 2021). SWEAP (Solar Wind Electrons Alphas and Protons) measured sub-Alfvénic plasma properties and plasma β < 1 in the near-Sun environment. IS☉IS (Energetic Particle Instruments) tracks energetic particle acceleration during solar energetic particle (SEP) events. Final perihelion (24 Dec 2024): 6.1 R☉ — inside the corona at ~1,700 km/s.",
    },
    keyFindings: [
      "First spacecraft to fly through the solar corona — entering the Sun's outer atmosphere.",
      "Discovered 'switchbacks' — magnetic field reversals near the Sun linked to coronal heating.",
      "Set the record for fastest human-made object (>690,000 km/h at closest approach).",
      "Directly sampled sub-Alfvénic solar wind plasma where the solar wind is formed.",
      "Observed the origin of the slow solar wind and dust-free zone near the Sun.",
    ],
    relatedBodySlugs: ["sun"],
  },

  {
    slug: "dart",
    name: "DART (Double Asteroid Redirection Test)",
    agency: "NASA",
    launchYear: 2021,
    endYear: 2022,
    target: "Dimorphos (asteroid moon of Didymos)",
    type: "probe",
    status: "complete",
    heroColor: "#8a7060",
    oneLineHook: "Humanity's first planetary defence test — DART deliberately crashed into an asteroid to see if we could deflect it.",
    content: {
      discover: "DART was a spacecraft that was deliberately crashed into an asteroid called Dimorphos on 26 September 2022. This was humanity's first test of whether we could deflect an asteroid if one was heading for Earth. Dimorphos was not a threat — scientists chose it precisely because it was safe to crash into. Telescopes around the world watched as DART hit at over 22,000 km/h. The impact changed Dimorphos's orbit by 33 minutes — much more than scientists expected! This proved that kinetic impactor deflection works.",
      explore: "DART targeted Dimorphos, a 160-metre asteroid that orbits a larger asteroid called Didymos (780 m). Before impact, Dimorphos took 11 hours 55 minutes to orbit Didymos. After DART's 570 kg spacecraft hit at 6.14 km/s (22,000 km/h), the orbital period changed to 11 hours 23 minutes — a reduction of 33 minutes. This far exceeded the minimum 73-second mission success threshold. The change in orbit was primarily caused not by DART's mass alone but by the momentum of debris (ejecta) thrown off by the impact — essentially a rocket-like recoil effect. ESA's Hera mission (launched 2024) is now en route to study the crater and debris.",
      professional: "DART impact (26 Sep 2022, 23:14 UTC): kinetic impactor 570 kg at 6.14 km/s (E_kinetic ~ 10.7 GJ). Pre-impact orbital period of Dimorphos: 11 h 55 min 18 ± 3 s. Post-impact period (measured via Earth-based lightcurve): 11 h 22 min 3 ± 2 s — Δt = 33 min 15 s (Thomas et al. 2023, Nature). Momentum transfer efficiency β = Δp_Dimorphos / p_DART = (m_Dimorphos × Δv) / (m_DART × v_impact) ~ 3.6 ± 0.6 — significantly > 1, indicating substantial ejecta momentum augmentation. Ejecta cone morphology observed by LICIACube (Italian CubeSat flyby) and Hubble over weeks post-impact. Dimorphos surface: rubble pile (bulk density ~2,400 kg/m³, highly porous); crater estimated at 65–75 m diameter. HERA (ESA, launched Oct 2024, arrival early 2027) will characterise crater morphology, ejecta environment, and interior using a CubeSat radar (Juventas).",
    },
    keyFindings: [
      "Successfully changed Dimorphos's orbital period by 33 minutes — far exceeding the 73-second target.",
      "Demonstrated kinetic impactor deflection as a viable planetary defence technique.",
      "Confirmed that ejecta momentum amplification (β ≈ 3.6) dominates over spacecraft mass alone.",
      "First deliberate human alteration of a solar system body's motion.",
    ],
    relatedBodySlugs: ["earth"],
  },

  {
    slug: "juno",
    name: "Juno",
    agency: "NASA",
    launchYear: 2011,
    endYear: null,
    target: "Jupiter",
    type: "orbiter",
    status: "active",
    heroColor: "#c88b3a",
    oneLineHook: "Orbiting Jupiter's poles — Juno is peeling back the clouds to reveal what's happening deep inside the gas giant.",
    content: {
      discover: "Juno reached Jupiter in July 2016 and has been orbiting it every 53 days ever since. It flies in a very stretched oval orbit that takes it from far away all the way down to just 4,200 km above the cloud tops — closer than any spacecraft has gone before. Juno uses instruments including a microwave radiometer that can 'see' through Jupiter's clouds to depths of hundreds of kilometres. It's found that Jupiter's bands of clouds go much deeper than expected, and that Jupiter's famous Great Red Spot has roots reaching far down into the planet.",
      explore: "Juno is the first solar-powered spacecraft to operate in the outer solar system, with three massive 9-m solar panels providing enough power at Jupiter's distance. Its polar orbit allows it to fly over every longitude of Jupiter on each orbit. Juno has discovered: Jupiter's bands of atmosphere extend ~3,000 km deep (below which Jupiter rotates as a rigid body), the Great Red Spot has roots extending 200–500 km deep, and ammonia is depleted in the tropical belt down to ~50 bars. Juno's mission has been extended to include flybys of Ganymede, Europa, and Io.",
      professional: "Juno orbital insertion: 5 Jul 2016; 35-min main engine burn at 53,500 km altitude. Orbital period: 53 days; periapsis altitude ~4,200 km. Solar arrays (total area 60 m²) generate ~400 W at Jupiter (5.2 AU). Gravity science (RSG): zonal harmonics J₂–J₁₂ measured to high precision, constraining differential rotation depth at ~3,000 km where interior rigidly rotates (Kaspi et al. 2018, Nature). MWR (Microwave Radiometer): 6 channels at 600 MHz–22 GHz probe ammonia abundance to ~350 bar depth; tropical belt depletion possibly from a deep precipitation cycle (Li et al. 2020). JunoCam has returned high-resolution cloud imagery including cyclone clusters (8 circumpolar cyclones in northern hemisphere); JIRAM (Jovian InfraRed Auroral Mapper) characterises polar aurora and hot spots. Io flybys (Dec 2023, Feb 2024, 1,500 km minimum): highest-resolution JIRAM + JADE + JUNO-WAV data on volcanic hotspots; lava lake in Loki Patera resolved for first time from orbit.",
    },
    keyFindings: [
      "Discovered Jupiter's atmospheric bands extend ~3,000 km deep — far deeper than expected.",
      "Determined that below ~3,000 km depth, Jupiter rotates as a rigid body.",
      "Great Red Spot roots extend 200–500 km below the cloud tops.",
      "Found Jupiter's north and south poles are covered in irregular cyclone clusters.",
      "Achieved the first close-up orbital observations of Io's volcanic activity.",
    ],
    relatedBodySlugs: ["jupiter", "io", "europa"],
  },

  {
    slug: "insight",
    name: "InSight",
    agency: "NASA",
    launchYear: 2018,
    endYear: 2022,
    target: "Mars (Elysium Planitia)",
    type: "lander",
    status: "complete",
    heroColor: "#c1440e",
    oneLineHook: "A seismologist on Mars — InSight listened for marsquakes to reveal the deep interior of the Red Planet.",
    content: {
      discover: "InSight was a lander that sat quietly on the flat plains of Mars and listened. It had a seismometer — a super-sensitive instrument that can detect the tiniest tremors in the ground — and it used marsquakes to X-ray the inside of Mars, much like doctors use X-rays to see inside our bodies. Over four years, InSight detected more than 1,300 marsquakes, some caused by meteorite impacts. It revealed the size of Mars's core, the thickness of its crust, and how active Mars still is internally. It stopped working in December 2022 when its solar panels were too dusty to generate enough power.",
      explore: "InSight landed on 26 November 2018 in Elysium Planitia — a flat, geologically quiet region chosen specifically for seismology. Its SEIS (Seismic Experiment for Interior Structure) seismometer was deployed onto the Martian surface and protected by a wind shield. Over its 4-year mission, it detected 1,319 seismic events, including the largest marsquake ever recorded (M5.0, 4 May 2022). Seismic wave analysis revealed: a thin, fractured crust 20–37 km thick in the northern lowlands, a silicate mantle, and a liquid iron outer core with radius ~1,830 km — larger than models predicted, suggesting a light-element-enriched core.",
      professional: "InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) landed at 4.502°N, 135.623°E (Elysium Planitia) on 26 Nov 2018. SEIS: 3-axis broadband seismometer (VBB) + 3 short-period sensors, sensitivity ~10⁻¹² m/s² at 0.01–10 Hz. 1,319 seismic events detected; dominant event types: low-frequency (2–8 Hz), high-frequency. M5.0 event (4 May 2022) provided best interior constraints. Crustal thickness: 20–37 km (north) / 58–72 km (south) from receiver function analysis (Knapmeyer-Endrun et al. 2021, Science). Mantle: gradual velocity gradient, no global discontinuity; lid velocity ~7.7 km/s P-wave. Core radius: 1,830 ± 40 km with V_P(core) consistent with liquid Fe alloy + S (Stähler et al. 2021, Science). HP³ (heat probe) mole failed to penetrate beyond ~40 cm due to cohesive duricrust; no heat flow measurement obtained. Mission ended 21 Dec 2022 due to dust-covered solar panels (power < 600 Wh/sol).",
    },
    keyFindings: [
      "Detected 1,319 marsquakes including a magnitude 5.0 event.",
      "Revealed Mars's liquid iron core radius (~1,830 km) — larger than models predicted.",
      "Measured Martian crustal thickness: 20–37 km in the north, 58–72 km in the south.",
      "Confirmed the mantle has no major global seismic discontinuity.",
      "Detected meteorite impacts on Mars from their seismic and acoustic signatures.",
    ],
    relatedBodySlugs: ["mars"],
  },

  {
    slug: "osiris-rex",
    name: "OSIRIS-REx",
    agency: "NASA",
    launchYear: 2016,
    endYear: null,
    target: "Bennu, now Apophis",
    type: "sample-return",
    status: "active",
    heroColor: "#8a7060",
    oneLineHook: "The mission that brought home asteroid material — 121 grams from Bennu, the largest extraterrestrial sample since Apollo.",
    content: {
      discover: "OSIRIS-REx spent two years studying the asteroid Bennu from close range, then touched its surface for just 6 seconds to collect a sample — using a device that blew nitrogen gas to stir up and catch surface material. The sample capsule parachuted down over the Utah desert on 24 September 2023, containing 121 grams of material from Bennu — the most from any asteroid ever. Scientists found water-bearing clay minerals and organic compounds in the sample. Now renamed OSIRIS-APEX, the spacecraft is on its way to visit the asteroid Apophis, which will make a very close pass by Earth in 2029.",
      explore: "Bennu is a 490-metre, rubble-pile near-Earth asteroid with a small probability of impacting Earth in the late 22nd century. OSIRIS-REx arrived at Bennu in December 2018 and spent two years mapping its surface in extraordinary detail, discovering that Bennu is covered in boulders and has particle ejection events — puffs of material launching off the surface. In October 2020, the spacecraft briefly touched Bennu's surface and collected material by firing a nitrogen burst. The sample returned to Earth contains hydrated silicates, magnetite, iron sulfides, and amino acid precursors — confirming carbonaceous asteroids delivered organics to the early Earth.",
      professional: "OSIRIS-REx (Origins, Spectral Interpretation, Resource Identification, Security-Regolith Explorer): launched 8 Sep 2016, arrived at Bennu 3 Dec 2018. Bennu (101955): C-type NEO, a = 1.126 AU, e = 0.204, D = 490 m, mass 7.3 × 10¹⁰ kg, ρ_bulk = 1,190 ± 130 kg/m³ (highly porous rubble pile). TAG (Touch-and-Go) event: 20 Oct 2020, 1 contact with surface for 6 s; TAGSAM (Touch-and-Go Sample Acquisition Mechanism) fired N₂ burst and ingested material. Sample container delivered: 24 Sep 2023 (SRC released at 102,000 km altitude, parachute recovery Utah). Final sample mass: 121.6 g (target was 60 g). Analysis: hydrated Mg-phyllosilicates (Mg-serpentine, saponite), magnetite, Fe-sulfides, organics including amino acids (glycine, alanine, β-alanine), and presolar grains. Renamed OSIRIS-APEX; trajectory burn 9 Jan 2024 for Apophis (99942) encounter; arrives 2029-Apr-13 — 6 days after Apophis's historic 31,600 km Earth flyby (0.08 lunar distances).",
    },
    keyFindings: [
      "Returned 121 grams of material from asteroid Bennu — largest extraterrestrial sample since Apollo.",
      "Confirmed hydrated silicates and amino acid precursors on a carbonaceous asteroid.",
      "Discovered Bennu ejects particles from its surface — an unexpected active asteroid process.",
      "Revealed Bennu's interior is significantly porous (rubble pile structure).",
      "Now en route to Apophis for the 2029 Earth flyby encounter.",
    ],
    relatedBodySlugs: ["earth"],
  },

  {
    slug: "dawn",
    name: "Dawn",
    agency: "NASA",
    launchYear: 2007,
    endYear: 2018,
    target: "Vesta and Ceres",
    type: "orbiter",
    status: "complete",
    heroColor: "#8a8070",
    oneLineHook: "The first spacecraft to orbit two extraterrestrial bodies — Dawn revealed a water-world hidden in the asteroid belt.",
    content: {
      discover: "Dawn was the first spacecraft ever to orbit two different destinations beyond Earth. It orbited the giant asteroid Vesta from 2011 to 2012, then fired its ion engine to travel to Ceres — the largest object in the asteroid belt. At Ceres, it discovered something shocking: bright white spots inside a crater called Occator. These turned out to be sodium carbonate salts — the remains of salty water that erupted from beneath Ceres's surface. This made Ceres the closest ocean world to Earth.",
      explore: "Dawn used an ion propulsion system — gradually accelerating using electrically charged xenon gas — to spiral into orbit around Vesta and then escape Vesta's gravity to reach Ceres. At Vesta (2011–2012), it discovered that Vesta is a differentiated body with an iron core and basaltic surface — the likely parent body of the HED meteorite class found on Earth. At Ceres (2015–2018), it mapped the bright spots in Occator Crater and detected a transient haze of water vapour — confirming that Ceres still has active geology. Dawn ran out of hydrazine fuel on 31 October 2018 and remains in a stable orbit around Ceres.",
      professional: "Dawn's ion propulsion system (three Xenon Hall-effect thrusters, Isp ~3,100 s, thrust ~90 mN each) accumulated a total Δv of ~11 km/s — the largest for any solar-powered spacecraft. Vesta orbit (16 Jul 2011–5 Sep 2012): mapping revealed the Rheasilvia basin (diameter 505 km, depth 19 km — one of the largest impact structures in the solar system), an iron core (radius ~110 km), and HED-type surface mineralogy confirmed by GRaND (Gamma Ray and Neutron Detector). Ceres orbit (6 Mar 2015–1 Nov 2018): VIR spectrometer (0.3–5.1 μm) identified Occator Crater (diameter 92 km) faculae as Na₂CO₃ (bright spot 1: Cerealia Tholus, geometric albedo ~0.87) and Mg-sulfates (outer faculae). Bayesian crater morphology analysis (Schenk et al. 2020) constrains brine eruption age to < few Myr. GRaND detected a hydrogen-enriched layer (possibly H₂O ice) within 1 m of the surface at high latitudes.",
    },
    keyFindings: [
      "First spacecraft to orbit two extraterrestrial bodies (Vesta and Ceres).",
      "Confirmed Vesta as the parent body of HED meteorites found on Earth.",
      "Revealed Ceres's bright spots as sodium carbonate from recent brine eruptions.",
      "Demonstrated that Ceres is geologically active — brines erupted within the last few million years.",
      "Detected surface hydrogen (likely water ice) at Ceres's high latitudes.",
    ],
    relatedBodySlugs: ["ceres"],
  },

  {
    slug: "kepler",
    name: "Kepler Space Telescope",
    agency: "NASA",
    launchYear: 2009,
    endYear: 2018,
    target: "Exoplanets",
    type: "telescope",
    status: "complete",
    heroColor: "#2a5040",
    oneLineHook: "The mission that proved planets are everywhere — Kepler discovered over 2,600 confirmed exoplanets around other stars.",
    content: {
      discover: "Kepler stared at a patch of sky containing about 150,000 stars for four years, watching for tiny dips in starlight caused by planets passing in front of their stars. The results were astonishing: almost every star has planets! Kepler discovered over 2,600 confirmed planets, including some that are Earth-sized and orbit in the 'Goldilocks zone' where liquid water could exist. It also discovered that the most common type of planet in the galaxy is something that doesn't exist in our own solar system — 'super-Earths' and 'mini-Neptunes' between the sizes of Earth and Neptune.",
      explore: "Kepler launched in March 2009 and began its primary mission in May 2009, monitoring 150,000 main-sequence stars in a 105 square-degree field of view in the Cygnus/Lyra region. It used transit photometry — measuring brightness dips of 0.008% (Earth-Sun transit) to >1% (hot Jupiters). After the failure of two reaction wheels in May 2013, the mission was repurposed as K2 — operating in the ecliptic plane and using solar pressure for stability, observing 20 additional fields until fuel exhaustion in October 2018. Total confirmed planets: 2,662 (Kepler) + 547 (K2) = 3,209 planets.",
      professional: "Kepler photometer: 0.95-m aperture, 42 CCDs (94.6 megapixels), 105 deg² FOV, 30-min cadence (1-min for selected targets), Johnson V+R broadband. Photometric precision: ~20 ppm per 6-hr measurement for V = 12 stars. Transit signal-to-noise: SNR = (R_p/R_*)² × √(N_transits × Γ × τ) where Γ = duty cycle, τ = transit duration. Data analysis pipeline (Tenenbaum et al.): detrending (PDC-MAP), transit search (BLS, Box Least Squares), threshold crossing events. Occurrence rate analyses (Fressin et al. 2013; Petigura et al. 2013): η_Earth ~ 0.06–0.22 for Sun-like stars; small planet occurrence peaks at 1–1.5 R⊕ (super-Earths). The Fulton gap / radius valley at 1.5–2.0 R⊕ (Fulton et al. 2017) is a key observational constraint on atmospheric photoevaporation models. K2 mission contributed TRAPPIST-1 atmospheric parameters, ultra-short-period planets, and stellar age constraints from asteroseismology.",
    },
    keyFindings: [
      "Discovered over 2,600 confirmed exoplanets — more than all other methods combined at launch.",
      "Proved that small, rocky planets are the most common type in the galaxy.",
      "Discovered the 'radius gap' separating super-Earths from mini-Neptunes.",
      "Found multi-planet systems packed into tight orbits (e.g., Kepler-90: 8 planets).",
      "Confirmed Earth-size planets in habitable zones (Kepler-452b, Kepler-186f).",
    ],
    relatedBodySlugs: ["earth", "sun"],
  },

  {
    slug: "messenger",
    name: "MESSENGER",
    agency: "NASA",
    launchYear: 2004,
    endYear: 2015,
    target: "Mercury",
    type: "orbiter",
    status: "complete",
    heroColor: "#a8956b",
    oneLineHook: "The first spacecraft to orbit Mercury — MESSENGER revealed a world with ice at its poles and a puzzlingly huge iron core.",
    content: {
      discover: "Mercury is the planet closest to the Sun and, before MESSENGER, one of the least understood. Mariner 10 had flown past it three times in the 1970s, but most of Mercury's surface remained unmapped. MESSENGER became the first spacecraft to orbit Mercury in 2011, spending four years mapping every centimetre of the surface. It confirmed that Mercury has water ice at its poles — permanently hidden in shadow — and discovered a type of landform called 'hollows' that exists nowhere else in the solar system.",
      explore: "Getting MESSENGER into orbit around Mercury was an extraordinary challenge: the Sun's gravity kept pulling the spacecraft inward, requiring many complex flybys to slow it down. It took six planetary flybys (Earth × 1, Venus × 2, Mercury × 3) over 6.5 years before the spacecraft could slow enough to enter Mercury orbit in March 2011. MESSENGER mapped the entire planet at high resolution, measured its thin atmosphere (exosphere), confirmed water ice in permanently shadowed polar craters, mapped Mercury's weak magnetic field, and determined the planet's internal structure — revealing an enormous iron core comprising ~85% of the planet's radius.",
      professional: "MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) launched 3 Aug 2004; orbital insertion 18 Mar 2011; controlled impact 30 Apr 2015. Trajectory: 1 Earth flyby, 2 Venus flybys, 3 Mercury flybys (total ΔV savings ~2.3 km/s vs direct trajectory). Orbital mapping: MLA (Mercury Laser Altimeter) produced topographic map; MDIS (Mercury Dual Imaging System) achieved 100% surface coverage at ≥250 m/px. Magnetic field: dipolar, surface intensity ~300 nT at equator, offset 484 km northward from geometric centre (Ness et al. 2011) — unique in the solar system. Hollows (Blewett et al. 2011): shallow, bright irregular depressions associated with Caloris impact melt sheets; formation by sublimation of S-rich volatiles tentatively proposed. GRS + NS (Gamma-Ray Spectrometer + Neutron Spectrometer) confirmed H-bearing material (water ice) in permanently shadowed polar craters (Paige et al. 2013, Science). GRNS detected unexpectedly high surface sulfur (2–4 wt.%) and K/Th ratio, indicating a reducing, volatile-rich precursor composition distinct from other terrestrial planets.",
    },
    keyFindings: [
      "First spacecraft to orbit Mercury.",
      "Confirmed water ice in permanently shadowed polar craters.",
      "Discovered hollows — a unique surface feature formed by volatile sublimation.",
      "Measured Mercury's magnetic field offset northward from the planet's centre.",
      "Mapped Mercury's high sulfur content — revealing a uniquely reducing, volatile-rich composition.",
    ],
    relatedBodySlugs: ["mercury"],
  },

  {
    slug: "bepicolombo",
    name: "BepiColombo",
    agency: "ESA/JAXA",
    launchYear: 2018,
    endYear: null,
    target: "Mercury",
    type: "orbiter",
    status: "en-route",
    heroColor: "#a8956b",
    oneLineHook: "Europe and Japan's joint mission to Mercury — BepiColombo will deploy two orbiters to study the innermost planet in unprecedented detail.",
    content: {
      discover: "BepiColombo is a joint mission from the European Space Agency and JAXA — the Japanese space agency — sent to Mercury. It launched in 2018 and is taking the long route to Mercury, using six Mercury flybys to slow down. It carries two separate spacecraft that will separate and enter different orbits around Mercury. Together they'll study Mercury's surface, interior, magnetic field, and thin atmosphere in more detail than ever before. The mission is named after Giuseppe 'Bepi' Colombo, the Italian mathematician who worked out how to use a planet's gravity to steer spacecraft.",
      explore: "BepiColombo consists of two spacecraft stacked together: ESA's Mercury Planetary Orbiter (MPO) and JAXA's Mercury Magnetospheric Orbiter (Mio). They travel together until arriving at Mercury, where they'll separate into different orbits. MPO will carry 11 instruments to study the surface, interior, and exosphere. Mio will study Mercury's magnetosphere and space environment. Together, the two orbiters will provide a comprehensive study of Mercury that no single spacecraft could accomplish. The mission has made several gravity-assist flybys of Mercury already, with the instruments capturing science data during each pass.",
      professional: "BepiColombo MTM (Mercury Transfer Module) + MPO + Mio stack: total launch mass 4,100 kg. Ion propulsion (4 × QinetiQ T6 gridded-ion thrusters, Isp ~4,000 s) provides 174 mN thrust; solar electric propulsion supplements planetary gravity assists. Trajectory: Earth flyby (Apr 2020), Venus × 2 (Oct 2020, Aug 2021), Mercury × 6 (Oct 2021, Jun/Oct 2022, Jun/Sep 2023, Jan 2025). Mercury orbit insertion: late 2025 (updated timeline). MPO instruments include BELA (laser altimeter, 20-cm vertical accuracy), ISA (Italian spring accelerometer, test of general relativity and geodesy), MORE (Mercury Orbiter Radio-science Experiment, Doppler tracking for gravity field and GR parameters), MERTIS (thermal IR spectrometer, 7–14 μm for mineralogy), MGNS (neutron/gamma spectrometer for hydrogen), PHEBUS (UV spectrograph for exosphere). Mio instruments: MGF (dual fluxgate magnetometer), MSA (mass spectrum analyser). Scientific objectives: Love number k₂ for core size, PPN parameters β and γ, surface volcanism, hollows classification.",
    },
    keyFindings: [],
    relatedBodySlugs: ["mercury"],
  },

  {
    slug: "artemis",
    name: "Artemis Programme",
    agency: "NASA",
    launchYear: 2022,
    endYear: null,
    target: "Moon",
    type: "crewed",
    status: "active",
    heroColor: "#c8c0b8",
    oneLineHook: "Humanity's return to the Moon — Artemis will land the first woman and the next man on the lunar surface.",
    content: {
      discover: "Artemis is NASA's programme to return humans to the Moon for the first time since Apollo 17 in 1972. Artemis I — an uncrewed test flight — launched in November 2022, sending the Orion capsule around the Moon and back to Earth to test the life-support systems. Artemis II will send four astronauts around the Moon. Artemis III will land astronauts near the lunar south pole, where ice in permanently shadowed craters could one day provide water and rocket fuel for missions further into the solar system — and eventually to Mars.",
      explore: "Artemis uses the Space Launch System (SLS) — the most powerful rocket NASA has ever built — to launch the Orion crew capsule. Artemis aims to establish a sustainable human presence on and around the Moon: the Lunar Gateway space station will orbit the Moon, and SpaceX's Starship (as the Human Landing System) will ferry crew from the Gateway to the surface. The south pole landing targets include the Shackleton crater rim and Malapert Massif, close to the permanently shadowed regions where water ice has been confirmed. Artemis also includes international partners (ESA, JAXA, CSA) contributing the European Service Module and elements of the Gateway.",
      professional: "SLS Block 1 (Artemis I, Nov 2022): 8.8 MN liftoff thrust (4 × RS-25 engines + 2 × SRBs), 95-tonne LEO payload, 27-tonne TLI payload. Orion CM: 5.1 m diameter, 3 crew or 4 (2 for lunar surface), European Service Module (ESM) powered by 4 × AJ10 engines. Artemis I (16 Nov–11 Dec 2022): 25.5-day mission, max TLI altitude 1,392,000 km, 2 lunar flybys, Orion SM jettison, high-speed re-entry 11.3 km/s at 40,000 ft. LG (Lunar Gateway): PPE (Power and Propulsion Element, SpaceX Falcon Heavy, ~2025) + HALO (Habitation and Logistics Outpost, Northrop Grumman), ~25 kW solar-electric power. HLS (Human Landing System): SpaceX Starship (lunar variant, no flaps/fins, LOX/CH₄, 100+ tonnes to LEO on Super Heavy). Artemis III targeting ~2026–2027; south polar landing sites include Shackleton Connecting Ridge, Peak Near Shackleton, and Faustini Rim A. Science priority: water ice characterisation via drill and mass spectrometer, geology of the ancient south pole terrain, and ISRU demonstration.",
    },
    keyFindings: [
      "Artemis I successfully tested the SLS rocket and Orion capsule on a 25-day uncrewed lunar mission.",
      "Orion survived the fastest atmospheric re-entry of a crew-rated vehicle (11.3 km/s).",
    ],
    relatedBodySlugs: ["moon", "earth"],
  },
];

export default MISSIONS;
