/**
 * COSMOS topic article data — 11 topics with full content at three reading tiers.
 * discover: accessible (ages 8+)  explore: enthusiast  professional: researcher
 * Sources: NASA, ESA, peer-reviewed publications. See SOURCES.md.
 */

export interface ContentTier {
  discover: string;
  explore: string;
  professional: string;
}

/** @deprecated alias — use ContentTier */
export type ReadingVariant = ContentTier;

export interface TopicSection {
  heading: string;
  body: ContentTier;
}

export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  heroAssetId: number;
  color: string;
  intro: ContentTier;
  sections: TopicSection[];
  relatedSlugs: string[];
  relatedTopicSlugs: string[];
}

const TOPICS: Topic[] = [
  // ──────────────────────────── THE SUN ────────────────────────────
  {
    slug: "the-sun",
    title: "The Sun",
    subtitle: "Our star — understanding the engine that powers life on Earth",
    heroAssetId: 49,
    color: "#ffcc44",
    intro: {
      discover: "The Sun is the giant ball of burning gas at the centre of our solar system. It is so important that without it, there would be no life on Earth — no warmth, no light, and no energy for plants to grow.",
      explore: "The Sun is a G-type main-sequence star approximately 4.6 billion years old, generating energy through hydrogen fusion in its core. It dominates the solar system both gravitationally and energetically.",
      professional: "The Sun (G2V; M☉ = 1.989 × 10³⁰ kg; L☉ = 3.828 × 10²⁶ W; T_eff = 5,778 K; age 4.603 ± 0.005 Gyr) is the reference object defining the astronomical unit, solar mass, and solar luminosity. Its internal structure — from nuclear-burning core to chromosphere and corona — is constrained by helioseismology and solar neutrino observations. The Parker Solar Probe mission (2018–present) directly samples the sub-Alfvénic corona.",
    },
    sections: [
      {
        heading: "What is the Sun made of?",
        body: {
          discover: "The Sun is mostly made of two gases: hydrogen (about 73%) and helium (about 25%). The rest is tiny amounts of other elements like oxygen and carbon. Inside the Sun, hydrogen atoms crash together and fuse to make helium, releasing a huge burst of energy — that energy is what we feel as sunlight and warmth!",
          explore: "The Sun's photosphere contains approximately 73% hydrogen and 25% helium by mass, with trace heavier elements. In the core (temperature ~15 million °C, pressure ~250 billion atmospheres), proton-proton chain fusion converts hydrogen to helium, releasing ~3.8 × 10²⁶ watts continuously.",
          professional: "Photospheric composition (Asplund et al. 2009 solar abundance scale): H: 73.5%, He: 24.9%, O: 0.77%, C: 0.29%, Ne: 0.17% by mass (AGSS09). The proton-proton chain (pp-I: 4¹H → ⁴He + 2e⁺ + 2νe + 26.73 MeV) accounts for ~84% of solar energy production; pp-II/III branches and the CNO bi-cycle contribute the remainder (~1.6% CNO at solar metallicity). Core pressure ~2.5 × 10¹⁶ Pa; density ~1.5 × 10⁵ kg/m³. Helioseismic inversions have constrained the sound-speed profile, confirming standard solar model predictions to better than 0.5% throughout the radiative zone.",
        },
      },
      {
        heading: "The Sun's layers",
        body: {
          discover: "The Sun has different layers, like an onion. The very centre is the core, where all the energy is made. Surrounding it is the radiative zone, where energy slowly bounces outward — it can take up to 100,000 years! Then comes the convection zone, where hot gas bubbles up to the surface, and finally the photosphere, which is what we see as the Sun's surface.",
          explore: "The Sun is structured in concentric shells: the core (fusion energy source), radiative zone (energy transport by photon diffusion, ~100,000 year transit), convection zone (turbulent convective transport), photosphere (5,500 °C, visible 'surface'), chromosphere (~10,000 °C), transition region, and corona (>1 million °C). The coronal heating problem — why the corona is hotter than the surface below — remains an active research area.",
          professional: "The tachocline (at 0.713 R☉) is the boundary between the rigidly rotating radiative zone (~430 nHz) and the differentially rotating convection zone (equator ~455 nHz; poles ~340 nHz), resolved by helioseismic inversions. Energy transport transitions from radiative diffusion (opacity-dominated, photon mean free path ~1 cm) to convective transport at this interface. The photon diffusion timescale in the radiative zone is ~10⁵ yr (Kelvin-Helmholtz estimate). Coronal heating mechanisms under investigation: Alfvén wave dissipation (Cranmer & van Ballegooijen) and Parker's nanoflare model (impulsive reconnection events, each ~10²⁴ ergs). DKIST and Parker Solar Probe are addressing the heating problem via high-resolution magnetic field mapping and in-situ plasma measurements.",
        },
      },
      {
        heading: "Solar activity",
        body: {
          discover: "The Sun isn't smooth and calm — it's always bubbling and exploding! Sunspots are dark patches on the surface where magnetic fields poke through. Solar flares are giant eruptions of energy. And coronal mass ejections (CMEs) are huge bubbles of charged particles thrown into space. When these reach Earth, they can cause beautiful auroras — the Northern and Southern Lights!",
          explore: "Solar activity follows an ~11-year cycle governed by the Sun's magnetic field, which flips polarity every cycle. Sunspots (cooler regions, ~3,800 °C) mark concentrated magnetic flux. Solar flares are sudden radiative bursts; coronal mass ejections (CMEs) are large magnetised plasma clouds ejected into the heliosphere at 250–3,000 km/s. Geomagnetic storms triggered by CMEs cause auroras and can disrupt satellites, power grids, and radio communications.",
          professional: "The Babcock-Leighton dynamo operates at the tachocline: poloidal field is generated from toroidal field by buoyant flux-tube emergence (Joy's Law tilt); toroidal field is regenerated by differential rotation shearing the poloidal field (Ω-effect). The ~11-year cycle (Schwabe cycle) represents half the 22-year Hale magnetic cycle. Solar Cycle 25 (began December 2019) has tracked above official predictions in sunspot number and X-ray flux through mid-2025. X-class flares (GOES classification ≥ 10⁻⁴ W/m²) produce EUV/X-ray enhancements causing HF radio blackouts. CME speeds of 250–3,000 km/s with embedded southward Bz fields (ICME) cause Kp-index storms from G1 to G5. The Carrington Event (1859) remains the strongest recorded geomagnetic storm (Dst ≈ −850 nT); a similar event today would cause multi-trillion-dollar infrastructure damage.",
        },
      },
      {
        heading: "The Sun's future",
        body: {
          discover: "Don't worry — the Sun won't run out of fuel for another 5 billion years! But when it does, it will swell up into a huge red giant, swallowing Mercury and Venus (and maybe Earth). After that, it will shed its outer layers to form a beautiful planetary nebula, leaving behind a tiny hot white dwarf star.",
          explore: "The Sun has consumed about half its hydrogen fuel. In ~5 billion years it will exhaust core hydrogen and enter the red-giant phase — expanding to ~200 solar radii, engulfing Mercury and Venus, and possibly Earth. It will then shed its envelope as a planetary nebula, leaving a carbon-oxygen white dwarf roughly Earth-sized. It will slowly cool over billions of years.",
          professional: "The Sun's main-sequence lifetime is ~10 Gyr (half elapsed). As core H is depleted, the inert He core contracts and H shell burning begins, driving the subgiant branch luminosity increase (~10% brighter per Gyr currently). The tip of the red giant branch (RGB) reaches ~200 R☉ and L ~ 2,000 L☉; whether Earth's orbit survives is uncertain — enhanced solar wind mass loss reduces orbital distance by gravitational recoil, potentially moving Earth outward, while tidal drag may cause inspiral. After the RGB tip, helium ignition (He flash) starts the horizontal branch. Thermal pulses on the asymptotic giant branch (AGB) drive mass loss and planetary nebula formation. The resulting C-O white dwarf (M_WD ~ 0.54 M☉, R_WD ~ R⊕) will cool on a timescale > 10¹⁰ yr, eventually becoming a dark 'black dwarf' — though the universe is not yet old enough for any to exist.",
        },
      },
    ],
    relatedSlugs: ["sun", "earth", "mercury"],
    relatedTopicSlugs: ["stars", "stargazing"],
  },

  // ──────────────────────────── STARS ──────────────────────────────
  {
    slug: "stars",
    title: "Stars",
    subtitle: "The universe's nuclear furnaces — from birth to spectacular death",
    heroAssetId: 50,
    color: "#fffbe6",
    intro: {
      discover: "Stars are enormous balls of hot glowing gas scattered all across the universe. Our Sun is a star, but there are hundreds of billions of stars in our galaxy alone — and hundreds of billions of galaxies in the universe!",
      explore: "Stars are self-gravitating plasma spheres generating energy by nuclear fusion. Their mass at formation determines their spectral class, luminosity, lifetime, and ultimate fate — from the dim red dwarfs that burn for trillions of years to the blue supergiants that detonate in centuries.",
      professional: "Stars are self-gravitating, radiatively stable (or convectively unstable) plasma configurations in hydrostatic equilibrium between gravity and radiation/thermal pressure. The fundamental stellar parameters — mass M, luminosity L, radius R, and surface temperature T_eff — are related by the mass-luminosity relation (L ∝ M³·⁵ for main sequence), Wien's law, and the Stefan-Boltzmann law. The Initial Mass Function (Salpeter 1955; Kroupa/Chabrier modifications) describes the birth mass spectrum of stellar populations.",
    },
    sections: [
      {
        heading: "How stars are born",
        body: {
          discover: "Stars are born inside giant clouds of gas and dust called nebulae. Gravity pulls the gas together into a clump that gets hotter and hotter as it shrinks. When the centre gets hot enough — about 10 million degrees — hydrogen atoms start fusing together, and the star 'switches on' and begins to shine!",
          explore: "Star formation begins with the gravitational collapse of a dense molecular cloud core. The protostar phase features a disk of infalling material; bipolar jets expel angular momentum. When core temperature exceeds ~10 million K, hydrogen fusion ignites and radiation pressure halts collapse — the object becomes a main-sequence star. Initial mass is the dominant parameter: brown dwarfs (<0.08 M☉) never achieve sustained fusion.",
          professional: "Molecular cloud cores collapse when external pressure or turbulent dissipation causes them to exceed the Jeans mass (M_J ∝ T³/² ρ⁻¹/²). Protostellar collapse proceeds approximately isothermally (cooling by dust emission) until densities ~10⁻¹³ g/cm³, after which the core becomes opaque and heats adiabatically (first hydrostatic core). The second collapse (H₂ dissociation, ~2000 K) produces the stellar core. Class 0→I→II→III T Tauri sequence tracks disk accretion and dispersal on ~3–5 Myr timescales (EUV photoevaporation + FU Ori outbursts). Zero-Age Main Sequence (ZAMS) ignition occurs when core T_c ~ 10⁷ K for H burning; the Hayashi track (convective contraction) and Henyey track (radiative) characterise pre-MS evolution on HR diagrams.",
        },
      },
      {
        heading: "Types of stars",
        body: {
          discover: "Stars come in different colours and sizes, and scientists sort them by temperature. Blue-white stars are the hottest, then white, then yellow (like our Sun), then orange, then red, which are the coolest. Red dwarf stars are the most common kind in the universe. The biggest stars are called supergiants and can be hundreds of times wider than the Sun!",
          explore: "The Harvard spectral classification (OBAFGKM + L, T, Y for brown dwarfs) orders stars by surface temperature. O stars (>30,000 K, blue) are rare and short-lived. G stars (5,200–6,000 K) like the Sun are intermediate. M dwarfs (<3,900 K, red) comprise ~70% of all stars. The Hertzsprung–Russell diagram plots luminosity vs temperature, showing the main sequence, giant branch, and white-dwarf region.",
          professional: "MK luminosity classes (I: supergiant, II: bright giant, III: giant, IV: subgiant, V: dwarf/main sequence, VI: subdwarf) refine the spectral classification. M dwarfs (M_* < 0.6 M☉; τ_MS > 10¹³ yr) are the most numerous and long-lived stars, but their habitable zones lie within tidal locking radii and are subject to intense UV/X-ray flaring. Variable stars include Cepheid pulsators (P-L relation; standard candles to ~100 Mpc), RR Lyrae (population II standard candles), and LBV (luminous blue variables) undergoing η Carinae-type mass-loss events. The Chandrasekhar limit (1.44 M☉) caps white-dwarf mass; the TOV limit (~2–3 M☉) caps neutron-star mass. The most massive stars known (R136a1, ~200–250 M☉) may be merger products.",
        },
      },
      {
        heading: "How stars die",
        body: {
          discover: "How a star dies depends on how big it was. A star like our Sun will swell into a red giant, then puff off its outer layers to form a glowing cloud called a planetary nebula, leaving a small white dwarf behind. Massive stars end more dramatically — they explode in a gigantic blast called a supernova! What's left might be a dense neutron star or even a black hole.",
          explore: "Low/intermediate-mass stars (0.08–8 M☉) end as planetary nebulae + white dwarfs. High-mass stars (>8 M☉) undergo core collapse when iron builds up (iron fusion absorbs rather than releases energy) — the resulting supernova (Type II) can outshine an entire galaxy. The remnant is a neutron star (<3 M☉ remnant) or a black hole. Pair-instability supernovae destroy the most massive stars (~130–250 M☉) entirely.",
          professional: "Core-collapse supernovae (CCSN, Type Ib/c/II) occur when M_core > 1.44 M☉ iron core exceeds the Chandrasekhar limit; collapse proceeds on ~0.1 s free-fall timescale; the bounce shock stalls at ~200 km radius; neutrino-driven convection (SASI, neutrino-driven winds) and/or MHD jets revive the shock (delayed neutrino mechanism). Neutron star formed with ~10⁵³ erg total energy; ~1% couples to ejecta kinetic energy (~10⁵¹ erg canonical). Type Ia SN arise from C-O white dwarf detonation at or near M_Ch via accretion or double-degenerate merger; their standardisable luminosity (M_B ≈ −19.3) enabled the discovery of accelerated expansion (Riess, Perlmutter, Schmidt 1998). Neutron stars: r = 10–12 km, ρ ~ 10¹⁴ g/cm³, M = 1.17–2.35 M☉ (observational range). The maximum neutron-star mass (TOV limit) depends on the nuclear equation of state; GW170817 constrains it to < 2.3 M☉.",
        },
      },
    ],
    relatedSlugs: ["sun"],
    relatedTopicSlugs: ["the-sun", "black-holes", "galaxies"],
  },

  // ──────────────────────────── BLACK HOLES ─────────────────────────
  {
    slug: "black-holes",
    title: "Black Holes",
    subtitle: "Where gravity wins — regions of spacetime from which nothing escapes",
    heroAssetId: 51,
    color: "#2a1a4e",
    intro: {
      discover: "A black hole is a place in space where gravity is so strong that nothing — not even light — can escape from it. Because light can't get out, it looks completely black, which is how it gets its name.",
      explore: "A black hole is a region of spacetime where curvature becomes so extreme that the escape velocity exceeds the speed of light. General relativity predicts a singularity at the centre where known physics breaks down.",
      professional: "A black hole is a solution to Einstein's field equations where spacetime curvature is singular (in GR) and the light-cone structure closes: no future-directed causal curve can escape the event horizon. The Schwarzschild solution describes a static, spherically symmetric black hole; the Kerr metric describes rotating black holes (characterised by mass M and spin parameter a = J/Mc, 0 ≤ a ≤ GM/c²). No-hair theorem: isolated black holes are fully described by M, J, and charge Q.",
    },
    sections: [
      {
        heading: "How black holes form",
        body: {
          discover: "Most black holes form when a massive star dies in a supernova explosion. If the remaining core is heavy enough — about 3 times the mass of the Sun or more — gravity squishes it so hard that it collapses into a black hole. There are also supermassive black holes millions or billions of times heavier than the Sun sitting at the centres of most galaxies. We're not sure how those form!",
          explore: "Stellar-mass black holes (3–100 M☉) form from core-collapse supernovae of stars >25 M☉. Intermediate-mass black holes (100–100,000 M☉) may form by mergers or runaway accretion in dense star clusters. Supermassive black holes (10⁶–10¹⁰ M☉) reside in galactic nuclei; their formation mechanism — direct collapse of massive gas clouds vs. hierarchical mergers — is an active research question.",
          professional: "CCSN remnants > ~3 M☉ collapse to black holes, either by 'failed supernovae' (direct collapse without visible explosion) or via fallback accretion. Population III (first-generation, metal-free) stars with M > 260 M☉ may produce pair-instability supernovae leaving no remnant, or directly collapse to seed intermediate-mass black holes (IMBHs). Supermassive black hole (SMBH) seed mechanisms: (1) direct collapse of metal-poor Lyman-Werner radiation-shielded gas at z > 10, forming ~10⁴–10⁵ M☉ seeds; (2) stellar-mass BH merger chains in dense clusters; (3) Pop III remnant seeds growing by accretion. The observed M_BH–σ* correlation (M_BH ≈ 3.1 × 10⁸ M☉ (σ*/200 km/s)^5.1) indicates co-evolution of SMBHs and galaxy bulges through AGN feedback.",
        },
      },
      {
        heading: "What happens at the event horizon?",
        body: {
          discover: "The event horizon is the invisible boundary around a black hole — the point of no return. Once anything crosses it, there's no escaping. To an outside observer, time seems to slow down near the event horizon — this is called gravitational time dilation. A clock falling into a black hole would appear to tick slower and slower, freeze, and fade away.",
          explore: "The event horizon is the surface at radius r_s = 2GM/c² (Schwarzschild radius). Time dilation: a clock at r_s appears frozen to a distant observer, while an infalling observer experiences nothing special at the crossing (no 'wall'). Hawking radiation — theoretical thermal emission from quantum effects near the horizon — implies black holes slowly evaporate over astronomical timescales. Information paradox: whether infalling information is destroyed or encoded in Hawking radiation remains unsolved.",
          professional: "The event horizon is a global, causal boundary: no future-directed null or timelike geodesic originating inside can reach future null infinity ℐ⁺. An infalling observer crosses the horizon in finite proper time and experiences no local anomaly (equivalence principle); external observers see the infaller redshifted and time-dilated asymptotically. Hawking (1974) showed that quantum field theory in curved spacetime predicts thermal radiation from the horizon at T_H = ℏc³/(8πGMk_B) — for M_☉ black holes, T_H ~60 nK, unobservably cold. Hawking evaporation timescale: τ ≈ 5120πG²M³/(ℏc⁴). The information paradox (Hawking 1975; Page curve debate) remains unresolved; recent progress via island formula and replica wormholes suggests information is preserved in radiation entropy (consistent with unitarity). The photon sphere at r = 3M (Schwarzschild) produces the observed photon ring in EHT images.",
        },
      },
      {
        heading: "Seeing the unseeable",
        body: {
          discover: "Since black holes don't emit light, we can't directly photograph them. But in 2019, the Event Horizon Telescope — a planet-sized network of radio dishes — captured the first real image of a black hole in the galaxy M87. In 2022, they got an image of Sagittarius A*, the supermassive black hole at the centre of our own Milky Way!",
          explore: "The Event Horizon Telescope (EHT), a global very-long-baseline interferometry (VLBI) network, achieved resolutions of ~20 microarcseconds. In 2019 it imaged M87* (6.5 × 10⁹ M☉) at 55 Mly; in 2022 it imaged Sgr A* (4 × 10⁶ M☉) at 27,000 ly. Both images showed the predicted photon ring and central brightness depression consistent with GR. Gravitational wave detections by LIGO/Virgo have also directly confirmed black hole mergers.",
          professional: "EHT operates at 1.3 mm wavelength with baselines spanning 10,000+ km, achieving angular resolution ~20 μas (theoretical diffraction limit for Earth-baseline at this wavelength). M87* image (Paper I–VI, EHT Collaboration 2019): asymmetric ring with diameter 42 ± 3 μas, brightness temperature asymmetry consistent with Doppler beaming from a jet oriented 17° from line of sight, shadow diameter consistent with M = (6.5 ± 0.7) × 10⁹ M☉. Sgr A* (EHT 2022): M = (4.0 ± 0.3) × 10⁶ M☉, confirmed by stellar orbit measurements (S2 star, GRAVITY Collaboration). LIGO/Virgo/KAGRA have detected 90+ compact binary merger events (GWTC-3, 2021), including BH-BH, NS-NS (GW170817), and candidate NS-BH mergers; the remnant mass gap (3–5 M☉) between neutron stars and stellar BHs is being probed.",
        },
      },
    ],
    relatedSlugs: ["sun"],
    relatedTopicSlugs: ["stars", "galaxies", "the-universe"],
  },

  // ──────────────────────────── GALAXIES ───────────────────────────
  {
    slug: "galaxies",
    title: "Galaxies",
    subtitle: "Island universes — the vast cities of stars that structure the cosmos",
    heroAssetId: 52,
    color: "#1a2a5e",
    intro: {
      discover: "A galaxy is a huge collection of stars, gas, dust, and dark matter held together by gravity. Our solar system lives inside a galaxy called the Milky Way, which contains about 200–400 billion stars. And there are roughly 2 trillion galaxies in the observable universe!",
      explore: "Galaxies are gravitationally bound systems of stars, stellar remnants, interstellar gas, dust, and dark matter. They range from dwarf galaxies with ~10⁷ stars to giant ellipticals exceeding 10¹³ M☉. Galaxies form the large-scale structure of the universe, clustered into groups, clusters, and filamentary superclusters.",
      professional: "Galaxies are the fundamental baryonic structures of the universe, tracing the underlying dark-matter halo distribution (NFW profile: ρ ∝ 1/(r/r_s)(1+r/r_s)²). The stellar mass function, Tully-Fisher (spirals) and Faber-Jackson (ellipticals) relations encode galaxy formation physics. The star-formation rate density (SFRD, Madau-Dickinson plot) peaks at z ~2 ('cosmic noon') and has declined by ~30× since then.",
    },
    sections: [
      {
        heading: "Types of galaxies",
        body: {
          discover: "Galaxies come in three main shapes. Spiral galaxies (like the Milky Way) have swirling arms of stars coming out from a central bulge — they look like a giant pinwheel! Elliptical galaxies are round or oval blobs of old stars. Irregular galaxies don't have a clear shape — they've often been distorted by collisions with other galaxies.",
          explore: "The Hubble sequence classifies galaxies as elliptical (E0–E7), lenticular (S0), spiral (Sa–Sd, SBa–SBd for barred), and irregular (Irr). Ellipticals are dominated by old stellar populations and little star-forming gas. Spirals have ongoing star formation in their disk and arms. Lenticulars are disk galaxies that have lost most of their gas. Galaxy morphology correlates with environment — ellipticals dominate dense clusters, spirals prefer the field.",
          professional: "The Hubble tuning-fork sequence (revised by de Vaucouleurs) reflects a morphological correlation with star-formation history, gas fraction, and environment. Ellipticals follow the r^(1/4) de Vaucouleurs surface brightness profile (Sérsic n ~4); disks follow exponential (n = 1). Galaxy quenching mechanisms: AGN feedback (radio-mode 'maintenance'; quasar-mode 'ejective'), stellar feedback, virial shock heating above M_halo ~ 10¹² M☉. The bimodal colour-magnitude relation (red sequence vs. blue cloud) reflects the quenching transition; the 'green valley' hosts transitional galaxies. Ultra-diffuse galaxies (UDGs, R_e > 1.5 kpc, μ_0,g > 24 mag/arcsec²) challenge formation models — possibly 'failed' Milky Way-mass systems or tidal remnants.",
        },
      },
      {
        heading: "The Milky Way",
        body: {
          discover: "Our home galaxy is called the Milky Way. On a clear, dark night, you can see part of it as a hazy band of light stretching across the sky — that's billions of stars so far away that they blur together. The Milky Way is a barred spiral galaxy, meaning it has a bar shape in the middle with spiral arms coming off the ends. Our solar system sits in one of the outer spiral arms, about 26,000 light-years from the centre.",
          explore: "The Milky Way is a barred spiral galaxy (SBbc type) with a stellar mass of ~6 × 10¹⁰ M☉ and a dark-matter halo extending ~200 kpc. The central bar is ~27,000 ly long. Four major spiral arms (Scutum-Centaurus, Carina-Sagittarius, Perseus, Norma) extend outward. The Sun orbits at ~8.2 kpc from the centre, completing one galactic orbit every ~225 million years. The central supermassive black hole, Sgr A*, has a mass of ~4 × 10⁶ M☉.",
          professional: "Milky Way structural parameters (Reid et al. 2019; GRAVITY 2019): R_0 = 8.178 ± 0.026 kpc (Sun–GC distance); V_0 = 236 ± 7 km/s (circular speed at R_0); M_disk ~ 5 × 10¹⁰ M☉; M_bulge ~ 1.5 × 10¹⁰ M☉; M_halo (virial) ~ (0.5–2) × 10¹² M☉. The bar half-length is ~4–5 kpc with pattern speed Ω_bar ~ 35–40 km/s/kpc (placing the corotation resonance at ~6 kpc). The Galactic warp (bending of the HI disk beyond ~8 kpc) is dynamically driven by LMC interaction (Poggio et al. 2020). Sgr A* mass = (4.0 ± 0.3) × 10⁶ M☉ (S2 orbit; GRAVITY Collaboration 2019); it currently accretes at well below the Eddington rate. The Milky Way will merge with M31 in ~4.5 Gyr (van der Marel et al. 2012).",
        },
      },
    ],
    relatedSlugs: ["sun"],
    relatedTopicSlugs: ["stars", "black-holes", "the-universe"],
  },

  // ──────────────────────────── THE UNIVERSE ───────────────────────
  {
    slug: "the-universe",
    title: "The Universe",
    subtitle: "Everything that exists — its origin, evolution, and ultimate fate",
    heroAssetId: 53,
    color: "#0a0a1e",
    intro: {
      discover: "The universe is everything that exists — all the stars, galaxies, planets, energy, and even space and time itself. It started about 13.8 billion years ago with a gigantic explosion called the Big Bang, and it has been expanding ever since.",
      explore: "The observable universe is the region of space from which light has had time to reach us in 13.8 billion years. The Big Bang model, supported by the cosmic microwave background, galaxy recession, and primordial nucleosynthesis, describes the universe's evolution from a hot, dense initial state.",
      professional: "The ΛCDM (Lambda Cold Dark Matter) concordance model describes the universe with six primary parameters: H_0, Ω_b, Ω_DM, Ω_Λ, n_s, A_s. Current best values (Planck 2018): H_0 = 67.4 ± 0.5 km/s/Mpc, Ω_m = 0.315, Ω_Λ = 0.685, age = 13.787 ± 0.020 Gyr. The 4–6σ Hubble tension (Planck H_0 vs. local distance ladder H_0 = 73.04 ± 1.04, Riess et al. 2022) is the most significant unresolved tension in cosmology.",
    },
    sections: [
      {
        heading: "The Big Bang",
        body: {
          discover: "The Big Bang wasn't really an explosion — it was the start of everything: space, time, matter, and energy all came into existence at once, in an incredibly hot and dense state. In the first few minutes, simple atoms formed. Over hundreds of millions of years, gravity pulled gas together into stars and galaxies. The universe has been expanding ever since.",
          explore: "The Big Bang model describes the universe evolving from a singularity (or near-singularity) at t=0. At ~10⁻³⁶ s, cosmic inflation exponentially expanded spacetime. At t≈3 min, Big Bang nucleosynthesis forged H, He, and trace Li. At t≈380,000 yr, recombination allowed photons to travel freely — this is the cosmic microwave background (CMB). First stars formed at t≈100–200 Myr. The CMB, discovered by Penzias & Wilson in 1965, is the strongest evidence for the Big Bang.",
          professional: "Timeline: Planck epoch t < 10⁻⁴³ s (quantum gravity); GUT epoch t ~ 10⁻³⁶ s (EW + strong unification); inflation (slow-roll, e-folding N > 60, stretching quantum fluctuations to cosmic scales, seeding structure via adiabatic perturbations, n_s = 0.965); EWSB at t ~ 10⁻¹² s; QCD transition (quark-hadron) at t ~ 10⁻⁵ s; BBN at t ~ 3 min (predicted ⁴He = 24.7%, D/H = 2.53 × 10⁻⁵ — consistent with observations to 1–2%); recombination at z = 1100 (t = 380 kyr; T = 3000 K), decoupling CMB photons; Cosmic Dark Ages; cosmic dawn and reionisation (z ~ 6–20, driven by first stars and quasars). CMB temperature fluctuations ΔT/T ~ 10⁻⁵ encode the primordial power spectrum; the acoustic peaks in C_l^TT constrain Ω_b, Ω_DM, H_0, and the spectral index n_s.",
        },
      },
      {
        heading: "Dark matter and dark energy",
        body: {
          discover: "Scientists have discovered that the stuff we can see — stars, planets, gas — makes up only about 5% of the universe! About 27% is 'dark matter' — invisible material that doesn't glow but we can detect by its gravity. The remaining 68% is 'dark energy' — a mysterious force that's making the universe expand faster and faster. We don't yet know what dark matter or dark energy really are.",
          explore: "The ΛCDM (Lambda Cold Dark Matter) model is the standard cosmological model. Ordinary baryonic matter: ~4.9%. Cold dark matter: ~26.8% (non-baryonic, non-luminous; inferred from galaxy rotation curves, gravitational lensing, CMB power spectrum). Dark energy (Λ): ~68.3% (negative-pressure component driving accelerated expansion; discovered 1998 via Type Ia supernovae). The nature of both components remains unknown — among the deepest open questions in physics.",
          professional: "Dark matter evidence: flat galaxy rotation curves (Rubin & Ford 1970); gravitational lensing (strong/weak/micro); Bullet Cluster collision (offset of mass centroid from baryons, Clowe et al. 2006); CMB acoustic peak heights (Ω_b vs. Ω_DM). Leading DM candidates: WIMPs (M ~ GeV–TeV; direct detection null results from LZ, XENONnT, PandaX-4T constrain σ_SI < 10⁻⁴⁷ cm² at 40 GeV); axions (10⁻⁶–10⁻⁴ eV; ADMX, CASPEr searches); sterile neutrinos. Dark energy: the cosmological constant Λ (vacuum energy density ρ_Λ ~ 6 × 10⁻²⁷ kg/m³; fine-tuning problem: observed Λ is 10¹²⁰ smaller than naive QFT predictions — the worst fine-tuning problem in physics). w₀waCDM extensions allow time-varying equation of state; DESI 2024 BAO results hint at w > −1 at z < 0.5, consistent with dynamical dark energy at ~2σ.",
        },
      },
    ],
    relatedSlugs: ["sun"],
    relatedTopicSlugs: ["galaxies", "stars", "black-holes"],
  },

  // ──────────────────────────── MOONS ──────────────────────────────
  {
    slug: "moons",
    title: "Moons",
    subtitle: "Natural satellites — the companion worlds orbiting planets across the solar system",
    heroAssetId: 54,
    color: "#8888aa",
    intro: {
      discover: "Moons are natural objects that orbit planets, just like Earth's Moon orbits us. Our solar system has more than 290 known moons! Some planets have many moons — Saturn has 146 — while Mercury and Venus have none at all.",
      explore: "Natural satellites (moons) are bodies gravitationally bound to planets or dwarf planets. The solar system contains >290 confirmed moons orbiting six planets plus numerous dwarf-planet satellites. They span four orders of magnitude in diameter and exhibit extraordinary geological diversity.",
      professional: "Natural satellites are classified by origin: regular (prograde, low-inclination, formed in circumplanetary disk), irregular (retrograde or high-inclination, captured), and giant-impact products (Earth's Moon, Pluto-Charon). Orbital architecture is shaped by tidal evolution (orbit-spin coupling, resonance locking), mean-motion resonances (Laplace resonance in Galilean system), and Kozai-Lidov oscillations for distant irregulars.",
    },
    sections: [
      {
        heading: "How moons form",
        body: {
          discover: "Moons form in three main ways. Some formed at the same time as their planet from the same cloud of gas and dust — like most of Jupiter's big moons. Some were captured from elsewhere — like Mars's moons Phobos and Deimos. And Earth's Moon probably formed when a Mars-sized body smashed into Earth long ago, and the debris orbited Earth and clumped together.",
          explore: "Moons form by: (1) Co-accretion — forming in the same protoplanetary disk (most regular satellites of Jupiter, Saturn, Uranus). (2) Capture — irregular satellites with inclined/retrograde orbits; e.g., Triton, Mars's satellites. (3) Giant impact — Earth's Moon from the Theia impactor ~4.5 Gya; possibly Pluto-Charon. Tidal locking (synchronous rotation) is common for close moons: one hemisphere perpetually faces the host planet.",
          professional: "Circumplanetary disk (CPD) accretion: regular satellites of Jupiter and Saturn formed from gas-starved CPDs fed by inflow from the circumsolar disk, with disk Roche radius as the outer boundary. Galilean moon formation models (Canup & Ward 2002; Shibaike et al. 2019) predict sequential resonance capture during migration. Capture probability for irregular satellites scales with the planet's mass and Hill sphere volume; gas drag during the gas-giant formation phase likely dominated early captures. Tidal evolution timescale: τ_sync ∝ a⁶ Q M_planet⁻¹; Io-Europa-Ganymede maintain the 1:2:4 Laplace resonance against dissipation, requiring ongoing energy input to Io's tidal budget. The SMART-1 and GRAIL constraints on the Moon's bulk composition confirm the giant impact origin and distinguish between models (canonical Theia, high-energy impact, multiple-impact scenarios).",
        },
      },
      {
        heading: "The most fascinating moons",
        body: {
          discover: "Some moons are genuinely amazing! Europa (Jupiter) hides a huge ocean under its ice. Titan (Saturn) has lakes of liquid methane. Io (Jupiter) is covered in active volcanoes. Enceladus (Saturn) shoots water geysers into space. Triton (Neptune) orbits backwards and has geysers of liquid nitrogen. And Ganymede is bigger than the planet Mercury!",
          explore: "Key worlds: Europa — subsurface ocean, potential biosignatures. Titan — only moon with thick atmosphere and surface liquids. Io — most volcanically active world, tidal heating. Enceladus — active cryovolcanism, confirmed hydrothermal activity. Ganymede — largest moon in solar system (5,268 km), has its own magnetosphere. Triton — retrograde captured KBO, nitrogen geysers, doomed tidal decay. Charon (Pluto's moon) — half Pluto's diameter, forms a binary system.",
          professional: "Ocean worlds of special interest: Europa (confirmed induced B-field, ice-penetrating radar REASON, EC arrival 2030), Enceladus (active plumes with H₂ indicating serpentinisation; Enceladus Orbilander decadal priority), Titan (methane cycle; Dragonfly 2034), Ganymede (largest intrinsic magnetosphere of any moon; JUICE arrival 2034 — will orbit Ganymede). Ganymede's magnetosphere (surface field ~720 nT at equator) creates auroral ovals visible in UV (Hubble) and drives plasma waves. Triton is unique as a nitrogen-geyser-active captured KBO undergoing tidal decay; no Triton-targeting mission exists beyond hypothetical Neptune system orbiters. Phobos (Mars, a = 9,376 km, e = 0.0151) spirals inward at ~1.8 m/century toward the Roche limit in ~30–50 Myr; JAXA's MMX mission (Martian Moons eXploration, launch 2026) will sample Phobos and return material to Earth.",
        },
      },
    ],
    relatedSlugs: ["moon", "io", "europa", "titan", "enceladus"],
    relatedTopicSlugs: ["the-sun", "exoplanets"],
  },

  // ──────────────────────────── ASTEROIDS, COMETS & METEORS ─────────
  {
    slug: "asteroids-comets-meteors",
    title: "Asteroids, Comets & Meteors",
    subtitle: "The solar system's leftover building blocks — rocky visitors from the early solar system",
    heroAssetId: 55,
    color: "#8a7060",
    intro: {
      discover: "Asteroids, comets, and meteors are all small objects in the solar system — leftovers from when the planets formed 4.6 billion years ago. They help scientists understand the early solar system, and sometimes they even deliver water and organic molecules to planets!",
      explore: "Small solar-system bodies (SSSBs) represent primitive material from the protoplanetary disk, largely unprocessed since formation ~4.6 Gya. Their study constrains models of solar-system formation and evolution.",
      professional: "Small solar-system bodies (SSSBs) are the remnant planetesimals of the protoplanetary disk. They preserve a record of nebular chemistry (chondrules, CAIs, presolar grains) and dynamical history (Nice Model, Grand Tack, Late Heavy Bombardment). The asteroid belt is compositionally stratified by heliocentric distance, reflecting the original snow line and planetary migration.",
    },
    sections: [
      {
        heading: "Asteroids",
        body: {
          discover: "Asteroids are rocky chunks that orbit the Sun, mostly in the asteroid belt between Mars and Jupiter. They range from tiny pebbles to Ceres, which is so large it's classified as a dwarf planet! Some asteroids cross Earth's orbit — these are called near-Earth asteroids, and scientists keep a close eye on them in case any might hit Earth.",
          explore: "Asteroids are rocky/metallic SSSBs, predominantly in the main belt (2.2–3.2 AU). Spectral taxonomy: C-type (carbonaceous, dark, outer belt), S-type (silicaceous, inner belt), M-type (metallic). The Kirkwood gaps — resonances with Jupiter — create structure. Near-Earth Objects (NEOs, <1.3 AU) include Atens, Apollos, Amors; >28,000 known. Planetary defence studies NEO deflection (DART mission successfully altered Dimorphos's orbit in 2022).",
          professional: "Main belt taxonomy (Bus-DeMeo): S-complex (olivine + pyroxene; HED meteorites from Vesta), C-complex (carbonaceous; CI/CM/CR chondrites), X-complex (E-types: enstatite; M-types: metal-rich; P-types: dark primitive). Kirkwood gaps at 3:1, 5:2, 7:3, 2:1 mean-motion resonances with Jupiter are depleted by chaotic diffusion. Yarkovsky effect (thermal recoil, ~2 mm/yr for km-sized bodies) provides the primary delivery mechanism of asteroids into resonance zones. DART impact (26 Sep 2022) reduced Dimorphos's orbital period by 33 ± 1 min (pre-impact: 11.921 h → 11.367 h), exceeding minimum mission success by >25× — confirming momentum transfer efficiency β ~ 3.6 (ejecta augmentation). Psyche mission (launched Oct 2023, arrival 2029) will characterise 16 Psyche — a possibly differentiated metallic core remnant (M ~ 2.7 × 10¹⁹ kg).",
        },
      },
      {
        heading: "Comets",
        body: {
          discover: "Comets are dirty snowballs — chunks of ice, rock, and dust that orbit the Sun in long, looping paths. When a comet gets close to the Sun, the Sun's heat turns the ice into gas that streams away as a bright tail. Comets can have two tails: one made of dust and one made of glowing gas, and they always point away from the Sun.",
          explore: "Comets are icy SSSBs from the Kuiper Belt (short-period, <200 yr) or Oort Cloud (long-period, >200 yr). The nucleus is a few km to tens of km of water ice, CO, CO₂, organics, and silicates. Insolation sublimates volatiles → coma + twin tails (dust tail: curved, along orbit; ion tail: straight, pointing anti-sunward, blown by solar wind). Rosetta/Philae (2014–2016) orbited and landed on comet 67P/Churyumov-Gerasimenko, finding glycine and other organics.",
          professional: "Comet reservoir populations: Jupiter-Family Comets (JFCs, T_J = 2–3, q < 2.5 AU, P < 20 yr) originate from the scattered disc/Kuiper Belt; Halley-type comets (HTCs, T_J < 2, P = 20–200 yr) from the inner Oort Cloud; long-period comets (LPCs, P > 200 yr) from the isotropic outer Oort Cloud (a ~ 10⁴–10⁵ AU). 67P/CG nucleus (Rosetta 2014–2016): bilobed, contact binary, 4.3 km × 2.6 km × 2.1 km, mass 9.98 × 10¹² kg, bulk density 538 kg/m³ (62% porosity). ROSINA DFMS detected > 70 molecular species including glycine (NH₂CH₂COOH), phosphorus, and complex organics with D/H ratio 3× Vienna Standard Mean Ocean Water — inconsistent with cometary delivery of Earth's oceans (asteroid delivery more consistent). OSIRIS-REx (Bennu sample return, Sept 2023) and Hayabusa2 (Ryugu, Dec 2020) confirm hydrated silicates and organics on near-Earth carbonaceous asteroids.",
        },
      },
      {
        heading: "Meteors and meteorites",
        body: {
          discover: "A meteor is a piece of rock or dust that burns up in Earth's atmosphere — that bright streak in the sky is a 'shooting star'! If a piece survives and lands on Earth, it's called a meteorite. Every year, Earth passes through streams of comet debris, creating predictable meteor showers — like the Perseids in August or the Leonids in November.",
          explore: "Meteoroids become meteors (luminous ablation trails) upon entering the atmosphere at 11–72 km/s. Most particles (<1 mm) ablate completely. Larger fragments survive as meteorites: stony (chondrites — primitive, chondrule-bearing; achondrites — differentiated parent-body fragments), iron (core material), stony-iron. Carbonaceous chondrites preserve presolar grains and organic molecules, including amino acids. Annual meteor showers result from Earth intersecting debris streams along established cometary orbits.",
          professional: "Meteor entry velocity range: 11.2 km/s (Earth escape) to 72.8 km/s (retrograde Oort Cloud body head-on). Ablation produces a plasma column (radio-reflective); radar meteor surveys constrain flux rates. Meteorite taxonomy (Weisberg et al. 2006): chondrites (CI, CM, CO, CV, CK, CR, CH, CB; ordinary H/L/LL; enstatite EH/EL; Rumuruti R), achondrites (HED: howardite-eucrite-diogenite from Vesta; SNC: shergottite-nakhlite-chassignite from Mars; lunar; angrites; aubrites), irons (IIIAB, IVA, IAB structural groups), stony-irons (pallasites, mesosiderites). CAIs (calcium-aluminium-rich inclusions) date to 4,567.30 ± 0.16 Ma (U-Pb; Connelly et al. 2012) — the oldest solar-system materials. Presolar grains (SiC, graphite, nanodiamonds) preserve nucleosynthetic isotope anomalies from AGB stars and SNe preceding the Sun.",
        },
      },
    ],
    relatedSlugs: ["ceres", "earth", "mars"],
    relatedTopicSlugs: ["moons", "exploration", "the-universe"],
  },

  // ──────────────────────────── EXOPLANETS ─────────────────────────
  {
    slug: "exoplanets",
    title: "Exoplanets",
    subtitle: "Worlds beyond our solar system — thousands of planets around other stars",
    heroAssetId: 56,
    color: "#2a5040",
    intro: {
      discover: "Exoplanets are planets that orbit stars other than our Sun. Before 1992, we didn't know if any other planets existed beyond our solar system! Now we know of more than 5,600, and scientists believe almost every star has at least one planet orbiting it.",
      explore: "Exoplanets are planets orbiting stars other than the Sun. As of 2025, >5,700 are confirmed, with thousands of candidates from Kepler/K2 and TESS. Statistical analysis implies most main-sequence stars host at least one planet.",
      professional: "As of mid-2025, the NASA Exoplanet Archive lists >5,700 confirmed exoplanets. Occurrence rates from Kepler: η_Earth (Sun-like stars, HZ rocky planets) ≈ 0.1–0.5; M dwarfs have a higher frequency of small rocky planets in the HZ (~0.5–1 per star). The radius gap at 1.5–2 R⊕ (Fulton et al. 2017) distinguishes rocky super-Earths from mini-Neptunes, interpreted as photoevaporation or core-powered mass-loss stripping hydrogen envelopes.",
    },
    sections: [
      {
        heading: "How we find exoplanets",
        body: {
          discover: "Planets are too dim and small to photograph easily around other stars. So scientists use clever tricks. The transit method watches for a star dimming slightly when a planet passes in front of it — like an ant crossing a car headlight. The radial velocity method detects the tiny wobble in a star's position caused by a planet's gravity. The James Webb Space Telescope can even study light filtered through an exoplanet's atmosphere!",
          explore: "Detection methods: Transit photometry (Kepler, TESS) — detects dips in stellar flux as a planet occults the disk, yields radius. Radial velocity (Doppler spectroscopy) — measures stellar reflex motion, yields m sin i. Direct imaging — mostly young, wide-orbit giants using coronagraphs. Gravitational microlensing — sensitive to sub-Earth masses. Astrometry — stellar position wobble. Each method is biased: transits favour short periods, RV favours high mass. Combined, they reveal planet occurrence rates.",
          professional: "Transit: depth ΔF/F = (R_p/R_*)²; duration T_14 = (P/π) arcsin(√((R_p+R_*)² - b²)/a); Kepler photometric precision ~20 ppm per 6h cadence enabled Earth-radius planets around Sun-like stars. RV semi-amplitude K = (2πG/P)^(1/3) M_p sin i / (M_* + M_p)^(2/3) / √(1-e²); current ESPRESSO precision ~10 cm/s allows Earth-mass planet detection around bright stars. TESS (launched 2018) covers 85% of sky in 2-min cadence photometry, yielding thousands of candidates; follow-up with ESPRESSO/HARPS/NEID. Direct imaging: GPI, SPHERE achieve 10⁻⁷ contrast at 0.2\" separation; next generation ELT/TMT coronagraphs targeting 10⁻⁸ for RV-confirmed nearby planets. JWST transmission spectroscopy has detected CO₂ (WASP-39b, 4.3 μm, ERS 2022), SO₂, H₂O, and methane in hot Jupiter atmospheres; targeting TRAPPIST-1 planets requires ~10 transits per species at current sensitivity.",
        },
      },
      {
        heading: "Worlds beyond imagination",
        body: {
          discover: "Exoplanets are incredibly diverse. 'Hot Jupiters' are gas giants that orbit their star in just a few days — so close they're scorching hot. 'Super-Earths' are rocky planets bigger than Earth but smaller than Neptune. Some planets are tidally locked, with one side always facing their star and the other in eternal night. The James Webb Space Telescope has detected carbon dioxide and other molecules in exoplanet atmospheres.",
          explore: "Observed population: hot Jupiters (~0.5–13 MJ, period <10 days), warm/cold Jupiters, mini-Neptunes (1.7–3.5 R⊕, most common Kepler planet type), super-Earths, Earth-analogs (rare in transit surveys due to long periods). 'Radius gap' (~1.5–2 R⊕) separates super-Earths from mini-Neptunes, likely driven by photoevaporation or core-powered mass loss. Habitable-zone rocky exoplanets of particular interest: Proxima Centauri b, TRAPPIST-1 system (7 Earth-sized planets, 3 in HZ), TOI-700 d.",
          professional: "TRAPPIST-1 system (Gillon et al. 2017; Agol et al. 2021): 7 Earth-sized planets (R_p = 0.77–1.13 R⊕; M_p = 0.33–1.37 M⊕ from TTV) orbiting an M8V star (T_eff = 2566 K) at 12.43 pc. Planets e, f, g are in the conservative HZ (Kopparapu et al.). TRAPPIST-1b/c JWST eclipse photometry (Lustig-Yaeger et al. 2023; Greene et al. 2023) constrains secondary eclipse depths consistent with bare rock (no thick CO₂ atmosphere) at 3–4σ. Proxima Cen b (M_p sin i = 1.07 M⊕, P = 11.186 d; Anglada-Escudé et al. 2016) is in the HZ of the nearest star but subject to intense XUV flaring (10³× solar at UV). Atmospheric biosignature targets: O₂ 760 nm (requires 10 m-class space telescope), O₃ 9.6 μm, CH₄+CO₂ disequilibrium (Schwieterman et al.). LIFE mission concept and HWO (Habitable Worlds Observatory, NAS Decadal priority) target direct imaging of Earth-analogs at ≤10 pc.",
        },
      },
    ],
    relatedSlugs: ["earth", "sun"],
    relatedTopicSlugs: ["stars", "the-universe", "telescopes"],
  },

  // ──────────────────────────── TELESCOPES ─────────────────────────
  {
    slug: "telescopes",
    title: "Telescopes",
    subtitle: "Our eyes on the universe — how we observe the cosmos across the electromagnetic spectrum",
    heroAssetId: 57,
    color: "#2a4060",
    intro: {
      discover: "Telescopes are instruments that gather light and make faraway objects appear closer and brighter. Galileo first used one to study the night sky in 1609. Today's telescopes are far more powerful, and some even orbit in space to get a clearer view above Earth's blurring atmosphere.",
      explore: "Telescopes are optical instruments that collect and focus electromagnetic radiation to image and characterise distant objects. Modern astronomy spans the full electromagnetic spectrum — each band requiring specialised detector technology and often space-based observatories above atmospheric absorption.",
      professional: "Modern observational astronomy employs multi-wavelength facilities from radio to gamma rays. Key performance metrics: collecting area (A ∝ D²), angular resolution (θ_min = 1.22λ/D for a diffraction-limited aperture), detector quantum efficiency, and spectral resolution (R = λ/Δλ). Adaptive optics (AO) systems correct atmospheric seeing in real-time using deformable mirrors and guide stars (natural or laser), achieving near-diffraction-limited performance at 8–10 m apertures.",
    },
    sections: [
      {
        heading: "From optical to radio",
        body: {
          discover: "Stars and planets don't just emit visible light — they also emit radio waves, infrared heat, X-rays, and more. Different telescopes are built to detect different types of radiation. Radio telescopes have giant dish antennas. Infrared telescopes like James Webb can see through dust clouds. X-ray telescopes must be in space, because Earth's atmosphere blocks X-rays. Each type of telescope reveals something different about the universe.",
          explore: "The electromagnetic spectrum from radio to gamma rays encodes different physical processes. Radio: synchrotron radiation, cold gas (21-cm HI), CMB. Microwave/mm: COBE, WMAP, Planck mapped CMB anisotropies. Infrared: cool dust, star formation (Spitzer, Herschel, JWST). Optical/UV: stellar photospheres, HST. X-ray: hot plasmas, accretion disks, supernovae remnants (Chandra, XMM-Newton). Gamma-ray: nuclear reactions, GRBs, AGN (Fermi). Multi-messenger astronomy (gravitational waves + EM) began with GW170817.",
          professional: "Atmospheric opacity windows: radio (1 mm–20 m, ionosphere cuts off >20 m), optical (380–700 nm), NIR (J, H, K bands: 1.1, 1.6, 2.2 μm), with absorbing layers of H₂O, CO₂, O₃ blocking much of IR and all UV/X-ray/gamma-ray. Space observatories required beyond optical/NIR. VLBI arrays (EHT, 1.3 mm; EVN/VLBA, cm): maximum baseline B ~ 10,000 km → θ ~ λ/B ~ 20 μas at 1.3 mm. Chandra X-ray Observatory (0.5–10 keV, 0.5\" FWHM) and XMM-Newton (0.2–12 keV, 6\" FWHM) are complementary in resolution vs. collecting area. Fermi-LAT (20 MeV–300 GeV, full-sky survey every 3 hr) has detected >7,000 sources (4FGL-DR4). LIGO/Virgo/KAGRA (gravitational wave detectors) open the multi-messenger era: GW170817 NS-NS merger was observed simultaneously in GW, γ-ray (Fermi+INTEGRAL), X-ray (Chandra), optical (DECam, DLT40), IR, and radio — the first gravitational wave counterpart detection.",
        },
      },
      {
        heading: "The James Webb Space Telescope",
        body: {
          discover: "The James Webb Space Telescope (JWST) is the most powerful space telescope ever built. It launched on Christmas Day 2021 and spent a month unfolding itself in space. Webb can see in infrared, which lets it peer through dust clouds to see new stars forming. It can also study the atmospheres of exoplanets and look back in time to see the very first galaxies that formed after the Big Bang.",
          explore: "JWST is a 6.5-m aperture infrared space observatory at the Sun-Earth L2 point. Its 18-segment gold-coated beryllium primary mirror and five-layer sunshield (passively cooled to <50 K) enable NIRCam (0.6–5 μm), NIRSpec (0.6–5.3 μm), MIRI (5–28 μm), and NIRISS. Key science: first-light galaxies (detected galaxies at z>13), exoplanet atmospheres (CO₂ in WASP-39b, TRAPPIST-1 atmospheric constraints), protostellar jets, solar-system bodies. Launched 25 Dec 2021; nominal 10-year mission.",
          professional: "JWST primary mirror: 6.5 m effective diameter (25.4 m² collecting area), 18 hexagonal beryllium segments gold-coated (reflectivity >98% in NIR), deployable. Five-layer Kapton/aluminium sunshield (tennis-court sized) provides T_cold < 50 K passively for MIRI (cooled further to 6.7 K by cryocooler). Instruments: NIRCam (0.6–5 μm, coronagraph, 9.7' × 9.7' FOV), NIRSpec (multi-object spectroscopy, R = 100/1000/2700, MOS via 5 × 5 MSA microshutter arrays), MIRI (5–28 μm, imaging + MRS IFU, R = 1,300–3,700), NIRISS (grism + SOSS mode for exoplanet transmission). First-year highlights: SMACS 0723 deep field, Stephan's Quintet, Carina Nebula protostellar jets, SO₂ in WASP-39b (photochemistry), galaxy candidates at z ~ 13–17 (GN-z11 spectroscopically confirmed at z = 10.6, JADES-GS-z14-0 at z = 14.32 as of 2024). JWST has 60+ years of fuel for station-keeping after accurate Ariane 5 injection.",
        },
      },
    ],
    relatedSlugs: ["sun", "earth"],
    relatedTopicSlugs: ["exoplanets", "exploration", "stargazing"],
  },

  // ──────────────────────────── EXPLORATION ────────────────────────
  {
    slug: "exploration",
    title: "Space Exploration",
    subtitle: "From Sputnik to the Moon and beyond — humanity's greatest adventure",
    heroAssetId: 58,
    color: "#1a3a5a",
    intro: {
      discover: "Space exploration is the journey humans have taken to explore outer space — using both robotic spacecraft and people. We've sent robots to every planet in the solar system, landed on the Moon, and built a space station where people have lived continuously for over 20 years!",
      explore: "Space exploration encompasses robotic missions, crewed spaceflight, and the supporting ground infrastructure humanity has developed since 1957. It is driven by scientific discovery, technological development, international prestige, and increasingly by commercial incentives.",
      professional: "Space exploration policy and architecture have shifted since the 2000s from government-monopsony toward a public-private partnership model. New Space actors (SpaceX, Blue Origin, Rocket Lab, ispace) are reducing launch costs by 10–100× via reusability and mass production. The 2023 Planetary Science Decadal Survey sets scientific priorities through 2032; NASA, ESA, JAXA, ISRO, CNSA, and Roscosmos each pursue independent and collaborative programs.",
    },
    sections: [
      {
        heading: "The Space Race and Apollo",
        body: {
          discover: "The 'Space Race' began in 1957 when the Soviet Union launched Sputnik — the first human-made satellite. Then in 1961, Yuri Gagarin became the first person in space. The US responded by landing astronauts on the Moon. On 20 July 1969, Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon — one of the greatest achievements in human history.",
          explore: "Sputnik 1 (4 Oct 1957) triggered the Space Race between the US and USSR. Soviet firsts: first satellite, first animal in space (Laika, 1957), first human (Gagarin, 12 Apr 1961), first EVA (Leonov, 1965), first uncrewed lunar soft landing (Luna 9, 1966). US firsts: first crewed lunar orbit (Apollo 8, Dec 1968), first crewed lunar landing (Apollo 11, 20 Jul 1969). Six Apollo missions landed on the Moon, returning 382 kg of samples. Apollo 13 (1970) suffered an oxygen tank explosion and returned safely — one of history's greatest improvisational engineering feats.",
          professional: "Apollo programme cost: ~$25.4B (1973 dollars; ~$280B in 2025 dollars). Apollo 11 landed at 0.67°N 23.47°E (Mare Tranquillitatis) on 20 July 1969 at 20:17 UTC; Armstrong egressed at 02:56 UTC on 21 July. Total Apollo EVA samples: 382 kg across six landings (11, 12, 14, 15, 16, 17). Apollo 17 (Dec 1972) remains the final crewed lunar landing; geologist-astronaut Harrison Schmitt was the only professional scientist to walk on the Moon. The Apollo Guidance Computer (AGC, 4 KB RAM, 32 KB ROM, 0.043 MHz) navigated the mission — less processing power than a modern digital watch. Key legacy: Moon-forming giant impact hypothesis supported by oxygen isotope ratios (Wiechert et al. 2001) and GRAIL gravity mapping.",
        },
      },
      {
        heading: "Robotic exploration",
        body: {
          discover: "We've sent spacecraft to every planet in the solar system! Voyager 1 and 2 launched in 1977 and have now left the solar system — they're the most distant human-made objects. Rovers like Curiosity and Perseverance are exploring Mars. And missions like Cassini at Saturn and Juno at Jupiter have completely transformed our understanding of these planets.",
          explore: "Landmark missions: Mariner 4 (first Mars flyby, 1965), Pioneer 10/11 (Jupiter/Saturn flybys), Voyager 1/2 (grand tour; both now in interstellar space), Galileo (Jupiter orbiter, 1995–2003), Cassini-Huygens (Saturn, 2004–2017), New Horizons (Pluto flyby, 2015; Arrokoth flyby, 2019), MESSENGER (Mercury orbiter), Dawn (Vesta and Ceres), Mars Science Laboratory (Curiosity, 2012–present), Mars 2020 (Perseverance + Ingenuity). Future: Europa Clipper (2024, en route), Dragonfly (Titan, 2030s), Artemis crewed Moon return.",
          professional: "Voyager 1 (heliocentric distance ~164 AU as of 2025) crossed the heliopause (termination of solar wind) in August 2012 at ~122 AU, confirmed by plasma wave observations (Gurnett et al. 2013); Voyager 2 crossed in November 2018 at ~119 AU. Both carry RTGs decaying at ~4 W/yr; expected signal loss ~2025–2030. New Horizons' Pluto flyby (14 Jul 2015, closest approach 12,472 km) returned 6.25 GB of data over 16 months at 1–4 kbps; Arrokoth flyby (1 Jan 2019) revealed a contact-binary KBO formed by gentle collapse — a 'cold classical' primordial planetesimal. OSIRIS-REx delivered the largest extraterrestrial sample (121 g from Bennu) to Earth on 24 Sep 2023; analysis reveals hydrated silicates, magnetite, and amino acid precursors. Commercial lunar delivery: NASA CLPS program (Astrobotic, Intuitive Machines, Firefly) is delivering payloads to the lunar surface starting 2024.",
        },
      },
    ],
    relatedSlugs: ["moon", "mars", "earth", "pluto"],
    relatedTopicSlugs: ["telescopes", "exoplanets", "moons"],
  },

  // ──────────────────────────── STARGAZING ─────────────────────────
  {
    slug: "stargazing",
    title: "Stargazing",
    subtitle: "How to observe the night sky — everything you need to get started",
    heroAssetId: 59,
    color: "#1a1a3a",
    intro: {
      discover: "Stargazing is the hobby of going outside at night and looking up at the stars! You don't need any special equipment to start — just dark skies, patience, and curiosity. As your eyes adjust to the darkness, more and more stars will appear.",
      explore: "Stargazing is the direct observation of the night sky, accessible without equipment at naked-eye limiting magnitude ~6.5 under ideal conditions, and extended to magnitude ~14 with 10×50 binoculars. Systematic observation builds familiarity with the celestial sphere, seasonal constellation patterns, and transient events.",
      professional: "Naked-eye astronomy exploits scotopic vision (rod-dominated, λ_peak ~507 nm) with angular resolution ~1 arcmin for well-separated double stars. Dark adaptation proceeds over ~20–30 min as rhodopsin regenerates; even brief white-light exposure resets the process. Sky quality is quantified by the Bortle scale (1–9) and the Sky Quality Meter (SQM, mag/arcsec²); Bortle 1 corresponds to SQM ≈ 21.6 mag/arcsec², enabling zodiacal band and gegenschein visibility.",
    },
    sections: [
      {
        heading: "Getting started",
        body: {
          discover: "Here are the most important tips for beginning stargazers: Get away from city lights — light pollution makes it hard to see faint stars. Give your eyes 20 minutes to adjust to the dark (don't look at your phone!). Use a red flashlight if you need to read a star chart — red light doesn't ruin your night vision. Start by learning a few constellations, like Orion or the Big Dipper. Then try to spot the planets — they don't twinkle like stars.",
          explore: "Key factors: dark-sky location (Bortle scale 1–2 optimal, <7 for casual observing), dark adaptation (~20 min for rhodopsin saturation), moon phase (avoid full moon for deep-sky work). Naked eye: constellations, bright planets (Jupiter, Venus, Saturn, Mars), Milky Way core (Sagittarius arm), satellite passes (ISS ~magnitude −4), meteor showers. Averted vision improves detection of faint extended objects. Apps (Stellarium, SkySafari) use gyroscope + GPS for real-time sky overlay.",
          professional: "Equipment selection tradeoffs: aperture vs. portability. 10×50 binoculars (f/l = 50 mm, exit pupil = 5 mm, TFOV ~7°) are optimal for survey work and rich-field objects. Telescopes: refractors (achromat, apochromat) are low-maintenance, ideal for planets/doubles; Newtonian reflectors offer aperture per dollar; Schmidt-Cassegrain (SCT) and Ritchey-Chrétien (RC) compact designs suit astrophotography. Eyepiece selection: magnification M = f_objective/f_eyepiece; useful magnification range 50×–250× for visual (atmospheric seeing limit ~1 arcsec FWHM). CCD/CMOS sensors: QE > 90% at peak (vs. eye ~1%); cooled cameras (ΔT = −20 to −40°C from ambient) reduce thermal noise. Image stacking (lucky imaging, shift-and-add for planetary; long-exposure dithering for DSOs) overcomes atmospheric turbulence. Light pollution filters (OIII 500 nm, Hα 656 nm, SII 672 nm) enable nebula imaging from suburban sites.",
        },
      },
      {
        heading: "What to look for",
        body: {
          discover: "With the naked eye, you can see about 5,000 stars on a clear night (only ~2,500 at once). You can spot five planets without a telescope: Mercury (near the horizon at dawn or dusk), Venus (the brilliant 'evening star'), Mars (orange-red), Jupiter (very bright and steady), and Saturn (yellowish). With binoculars, you can see Jupiter's moons, craters on Earth's Moon, and star clusters like the Pleiades!",
          explore: "Observable without telescope: planets (Mercury in twilight; Venus −4.6 max; Mars variable −2.9 to +1.6; Jupiter −2.9; Saturn +0.4–+1.2); ISS visible worldwide multiple times per night; iridium flares (fading as Iridium constellation retires); Andromeda Galaxy M31 (~2.5 Mly, naked eye in dark skies); zodiacal light (dust band along ecliptic, pre-dawn or post-dusk). With 10×50 binoculars: Galilean moons of Jupiter, M45 (Pleiades), M44 (Beehive), lunar craters, Ring Nebula M57 (just visible), globular clusters M13/M22.",
          professional: "Celestial coordinate systems: equatorial (RA/Dec, J2000.0 epoch) for star catalogues; altitude-azimuth for real-time pointing; ecliptic for solar system bodies. Precession of the equinoxes: 50.3\"/yr, 26,000-yr cycle; proper motion of bright stars (largest: Barnard's Star, μ = 10.36\"/yr at 1.83 pc) requires epoch propagation. Atmospheric refraction: R ≈ 1.02 tan(z) arcmin (near-zenith), rising to ~34' at the horizon — explains the flattened Sun at sunset. Atmospheric seeing: r₀ (Fried parameter) characterises coherence length; at good sites r₀ ~ 20–30 cm at 500 nm (limiting resolution ~0.4–0.6 arcsec). ISS orbital elements (TLE, two-line element sets from Space-Track.org) propagate with SGP4 model; visibility passes computed from observer lat/lon/alt. SIMBAD, VizieR, and Aladin provide catalog cross-matching and finding charts for professional-quality observations.",
        },
      },
    ],
    relatedSlugs: ["sun", "moon", "earth"],
    relatedTopicSlugs: ["telescopes", "the-sun", "stars"],
  },
];

export default TOPICS;
