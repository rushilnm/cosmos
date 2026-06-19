export interface GlossaryDefinition {
  discover: string;
  explore: string;
  professional: string;
}

export type GlossaryCategory =
  | "orbital-mechanics"
  | "stellar-physics"
  | "planetary-science"
  | "cosmology"
  | "instrumentation"
  | "missions";

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: GlossaryCategory;
  symbol?: string;
  definition: GlossaryDefinition;
  relatedSlugs?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  // ─── ORBITAL MECHANICS ───────────────────────────────────────────────────────
  {
    slug: "aphelion",
    term: "Aphelion",
    category: "orbital-mechanics",
    definition: {
      discover:
        "The point in a planet's orbit where it is farthest from the Sun. Earth reaches aphelion in early July, which is actually summer in the Northern Hemisphere — proof that seasons are caused by Earth's tilt, not its distance from the Sun.",
      explore:
        "At aphelion, a planet moves slowest in its orbit, per Kepler's second law (equal areas in equal times). Earth's aphelion is about 152.1 million km from the Sun (1.017 AU), roughly 5 million km farther than its perihelion distance.",
      professional:
        "Aphelion distance Q = a(1 + e), where a is the semi-major axis and e the orbital eccentricity. Earth: Q = 1.00000261 AU × (1 + 0.01671022) ≈ 1.01671 AU. The vis-viva equation v² = GM(2/r − 1/a) gives Earth's aphelion speed ~29.3 km/s vs ~30.3 km/s at perihelion. Apsidal precession due to relativistic and solar oblateness effects shifts the argument of perihelion ω̇ ~ 0.°012/century for Earth.",
    },
    relatedSlugs: ["perihelion", "orbital-eccentricity", "keplers-second-law"],
  },
  {
    slug: "perihelion",
    term: "Perihelion",
    category: "orbital-mechanics",
    definition: {
      discover:
        "The point in a planet's orbit where it is closest to the Sun. Earth is at perihelion in early January, moving slightly faster through space than at any other time of year.",
      explore:
        "At perihelion, a planet's orbital speed peaks (Kepler's second law). Earth's perihelion is ~147.1 million km from the Sun (0.983 AU). For highly elliptical comets like Halley's, perihelion is where activity — gas jets, dust tails — peaks dramatically.",
      professional:
        "Perihelion distance q = a(1 − e). Earth: q ≈ 0.98329 AU (January 3). Perihelion precession in General Relativity contributes Δω = 24π³a²/(T²c²(1−e²)) per orbit; for Mercury this yields 42.98″/century — the famous GR confirmation. Cometary outgassing rates scale roughly as r⁻⁴ near the Sun, peaking sharply at perihelion passage.",
    },
    relatedSlugs: ["aphelion", "orbital-eccentricity", "keplers-second-law"],
  },
  {
    slug: "orbital-eccentricity",
    term: "Orbital Eccentricity",
    category: "orbital-mechanics",
    symbol: "e",
    definition: {
      discover:
        "A number from 0 to 1 that describes the shape of an orbit. An eccentricity of 0 is a perfect circle. The closer the number is to 1, the more stretched-out (elliptical) the orbit is. Most planets have nearly circular orbits; many comets have very elongated ones.",
      explore:
        "Eccentricity e = c/a, where c is the distance from the orbit's center to a focus and a is the semi-major axis. Earth: e ≈ 0.017 (nearly circular). Mars: e ≈ 0.093. Pluto: e ≈ 0.249. Halley's Comet: e ≈ 0.967 — a highly elongated ellipse reaching from inside Venus's orbit out past Neptune.",
      professional:
        "In the two-body problem, e² = 1 + 2EL²/(μ²k²) where E is total energy, L angular momentum, μ the reduced mass, and k = Gm₁m₂. For e < 1: bound elliptical orbit; e = 1: parabolic escape; e > 1: hyperbolic (unbound). Secular perturbations exchange eccentricity and inclination through Kozai-Lidov cycles in hierarchical triple systems, with critical angle i_crit ≈ 39.2°.",
    },
    relatedSlugs: ["aphelion", "perihelion", "keplers-first-law"],
  },
  {
    slug: "keplers-first-law",
    term: "Kepler's First Law",
    category: "orbital-mechanics",
    definition: {
      discover:
        "Every planet moves in an ellipse, with the Sun at one of the two focal points. This explained why planets sometimes appear to speed up and slow down as seen from Earth — they're following a slightly squashed oval path, not a circle.",
      explore:
        "Published in Astronomia Nova (1609), Kepler derived this from Tycho Brahe's precise naked-eye observations of Mars. The Sun occupies one focus of the ellipse; the other focus is empty. The semi-major axis a and eccentricity e fully define the ellipse: r = a(1−e²)/(1 + e·cosθ).",
      professional:
        "The conic section r(θ) = p/(1 + e·cosθ), with semi-latus rectum p = a(1−e²), follows directly from integrating Newton's inverse-square law F = −GMm/r² in polar coordinates. The shape is an ellipse for E < 0, parabola for E = 0, hyperbola for E > 0. Perturbations from other planets cause slow apsidal precession; for Earth this totals ~1719″/century (dominated by Jupiter and Saturn).",
    },
    relatedSlugs: ["orbital-eccentricity", "keplers-second-law", "keplers-third-law"],
  },
  {
    slug: "keplers-second-law",
    term: "Kepler's Second Law",
    category: "orbital-mechanics",
    definition: {
      discover:
        "A line connecting a planet to the Sun sweeps out equal areas in equal amounts of time. This means planets travel faster when they're closer to the Sun, and slower when they're farther away.",
      explore:
        "Also called the 'law of equal areas,' this is a consequence of conservation of angular momentum. Because gravity acts along the line connecting planet to Sun (a central force), there's no torque, so L = mv⊥r remains constant. When r decreases (near perihelion), v must increase proportionally.",
      professional:
        "dA/dt = L/(2m) = constant, where L = m(r × v) is the conserved orbital angular momentum. This holds for any central force, not just gravity. In practice, for solar-system bodies: v_perihelion/v_aphelion = (1+e)/(1−e). Tidal dissipation slowly transfers angular momentum from a body's rotation to its orbit (or vice versa), breaking the strict conservation for real extended bodies.",
    },
    relatedSlugs: ["keplers-first-law", "keplers-third-law", "orbital-eccentricity"],
  },
  {
    slug: "keplers-third-law",
    term: "Kepler's Third Law",
    category: "orbital-mechanics",
    definition: {
      discover:
        "The farther a planet is from the Sun, the longer its year. Specifically, the square of a planet's orbital period is proportional to the cube of its average distance from the Sun. A planet twice as far out takes almost three times as long to complete one orbit.",
      explore:
        "T² ∝ a³. In convenient units: if T is in Earth-years and a in AU, then T² = a³ exactly. Jupiter at 5.2 AU: T = 5.2^1.5 ≈ 11.9 years. Neptune at 30.1 AU: T ≈ 165 years. This let astronomers calculate relative planetary distances before sending spacecraft anywhere.",
      professional:
        "Newton's generalization: T² = 4π²a³/[G(M₁+M₂)], correcting Kepler's original mass-free form. For exoplanet systems this is used to derive stellar masses from transiting planet periods and transit-derived semi-major axes. Radial velocity surveys measure M sin i; combining with Gaia astrometry gives true masses. The formula breaks for very close binaries where tidal deformation and GR corrections to the potential are non-negligible.",
    },
    relatedSlugs: ["keplers-first-law", "keplers-second-law", "semi-major-axis"],
  },
  {
    slug: "semi-major-axis",
    term: "Semi-Major Axis",
    category: "orbital-mechanics",
    symbol: "a",
    definition: {
      discover:
        "Half the length of the longest diameter of an elliptical orbit. For planets, it's essentially the average distance from the planet to the Sun across an entire orbit. Earth's semi-major axis is 1 AU (about 150 million km).",
      explore:
        "The semi-major axis a sets both the orbital period (via Kepler's third law) and the total orbital energy E = −GMm/(2a). Together with eccentricity, a fully specifies the size and shape of an orbit. Perturbations from other planets slowly alter a over millions of years.",
      professional:
        "In the vis-viva equation v² = GM(2/r − 1/a), the semi-major axis alone determines total orbital energy E = −GMm/(2a), independent of eccentricity. The osculating semi-major axis changes slowly due to perturbations; for the major planets these variations are bounded on Myr timescales (Laskar 1994) but can grow chaotically over Gyr. For binary stars, spectroscopic orbits yield a sin i; combined with parallax from Gaia, true a and individual masses can be derived.",
    },
    relatedSlugs: ["keplers-third-law", "orbital-eccentricity"],
  },
  {
    slug: "inclination",
    term: "Orbital Inclination",
    category: "orbital-mechanics",
    symbol: "i",
    definition: {
      discover:
        "The tilt of a planet's orbit relative to the plane of Earth's orbit (the ecliptic). Most solar-system planets orbit within a few degrees of the ecliptic. Pluto has an inclination of 17°, which is one reason it's considered unusual.",
      explore:
        "Inclination i is the angle between the orbital plane and the reference plane (ecliptic for solar system, sky plane for exoplanets). A body with i = 0° orbits exactly in the ecliptic; i = 90° is a polar orbit; i > 90° is retrograde. Kozai-Lidov oscillations can drive inclinations to extreme values in triple systems.",
      professional:
        "The five Keplerian elements needed to specify an orbit are: a, e, i, Ω (longitude of ascending node), ω (argument of periapsis), and an epoch or mean anomaly M₀. Mutual inclinations drive secular Kozai-Lidov cycles: ė = (15/8)(n·e/a²)(1−e²)^(−1/2)·sin²i·sin(2ω)·(m₃/m₁)(a/a₃)³. For nearly coplanar systems (i < i_crit ≈ 39.2°), these cycles are suppressed.",
    },
    relatedSlugs: ["orbital-eccentricity", "retrograde-orbit", "laplace-resonance"],
  },
  {
    slug: "resonance",
    term: "Orbital Resonance",
    category: "orbital-mechanics",
    definition: {
      discover:
        "When two orbiting bodies have orbital periods that form a simple whole-number ratio, they experience a repeating gravitational 'tug' at the same point in their orbits. This can lock them into stable patterns — like Jupiter's moons Io, Europa, and Ganymede — or create gaps in ring systems and asteroid belts.",
      explore:
        "A mean-motion resonance (MMR) occurs when orbital periods are in ratio p:(p+q) for integers p and q. The Kirkwood gaps in the asteroid belt at 3:1, 5:2, 7:3, and 2:1 resonances with Jupiter are emptied by resonant perturbations. The Io:Europa:Ganymede 1:2:4 Laplace resonance is maintained by tidal dissipation and is stable.",
      professional:
        "Resonant angles φ = (p+q)λ₂ − pλ₁ − qω̃ (where λ are mean longitudes, ω̃ the longitude of perihelion) librate about 0° or 180° for captured pairs. The resonance width scales as (μ/M☉)^(1/2) in semi-major axis. Capture probability during convergent migration scales as ~1 − exp(−πΓ/α̇) where Γ is the libration damping rate and α̇ the convergence rate. Neptune-Pluto occupy a 3:2 MMR, and ~25% of known Kuiper Belt objects are in various neptunian resonances.",
    },
    relatedSlugs: ["laplace-resonance", "kirkwood-gaps", "tidal-locking"],
  },
  {
    slug: "laplace-resonance",
    term: "Laplace Resonance",
    category: "orbital-mechanics",
    definition: {
      discover:
        "A special gravitational lock among three moons where their orbital periods are in a 1:2:4 ratio. Jupiter's moons Io, Europa, and Ganymede are in this resonance. Every time Ganymede completes one orbit, Europa does two and Io does four — perfectly synchronized.",
      explore:
        "The resonance is maintained by tidal forces from Jupiter dissipating energy within each moon. It drives enormous tidal heating in Io — enough to make it the most volcanically active body in the solar system — and keeps Europa's subsurface ocean liquid by flexing its icy shell.",
      professional:
        "The Laplace resonance condition: λ_Io − 3λ_Europa + 2λ_Ganymede = 180° (librates with amplitude < 0.°07). Tidal dissipation within Jupiter (Q_J ~ 10⁴–10⁵) drives slow outward migration of the moons. Lainey et al. (2009) measured current migration rates via astrometry: +1.53 ± 0.09 cm/s for Io. Io's tidal heat flow ~2–3 W/m² (total ~1 × 10¹⁴ W) is consistent with equilibrium tidal dissipation at Q_Io ~ 100.",
    },
    relatedSlugs: ["resonance", "tidal-locking", "tidal-heating"],
  },
  {
    slug: "tidal-locking",
    term: "Tidal Locking",
    category: "orbital-mechanics",
    definition: {
      discover:
        "When a moon's rotation period equals its orbital period, it always shows the same face to its planet. Earth's Moon is tidally locked — we always see the near side. This happens because the planet's gravity pulls slightly more strongly on the moon's near side, gradually slowing its spin over millions of years.",
      explore:
        "Tidal locking (synchronous rotation) results from tidal torques dissipating rotational kinetic energy. The timescale depends on the moon's size, rigidity, and orbital distance. Small moons close to large planets lock quickly. Mercury's 3:2 spin-orbit resonance is a special case where it completes three rotations per two orbits — also tidal in origin but not fully synchronous.",
      professional:
        "Tidal locking timescale: τ_lock ~ ωa⁶μQ/(6m_p·m_s·R_s⁵·G) where μ is rigidity, Q the tidal dissipation factor, a the orbital semi-major axis, and subscripts p/s denote planet/satellite. For the Moon: τ ≈ 10⁷–10⁸ yr. Mercury's 3:2 resonance is stabilized by its large orbital eccentricity; the resonant argument Θ = θ − 3n/2·t librates with amplitude ~23°. Secondary spin-orbit resonances (1:1, 3:2, 2:1) are separated by fractional widths ~e in semi-major axis.",
    },
    relatedSlugs: ["resonance", "laplace-resonance", "tidal-heating"],
  },
  {
    slug: "tidal-heating",
    term: "Tidal Heating",
    category: "orbital-mechanics",
    definition: {
      discover:
        "Heat generated inside a moon when gravitational forces repeatedly squeeze and stretch it as it orbits. Io, Jupiter's closest large moon, is the most volcanically active body in the solar system — almost entirely because of tidal heating from Jupiter.",
      explore:
        "Tidal heating occurs when a moon is in an orbital resonance that keeps its orbit slightly elliptical. Each orbit, the moon flexes as the tidal bulge shifts, and friction converts that flexing into heat. For Europa, this melts the ice beneath the surface, creating a global liquid water ocean.",
      professional:
        "Tidal heating power: Ė = −Im(k₂)·(21/2)·(GM_p/R_s³)·n·R_s⁵·e²/(G), where k₂ is the complex Love number (Im(k₂) ∝ 1/Q), n the mean motion, e eccentricity. Io's measured heat flow ~1×10¹⁴ W (Spencer et al. 2000). The tidal-thermal equilibrium condition ties orbital evolution to interior dissipation: as tidal heating warms the interior, Q decreases, which affects resonant stability. Europa Clipper's MAG and REASON instruments will constrain Im(k₂) from induced magnetic fields and ice-shell thickness.",
    },
    relatedSlugs: ["tidal-locking", "laplace-resonance", "resonance"],
  },
  {
    slug: "lagrange-points",
    term: "Lagrange Points",
    category: "orbital-mechanics",
    definition: {
      discover:
        "Five special locations in space where the gravitational pull of two large bodies (like the Sun and Earth) combines with the centrifugal force of orbiting to create stable or semi-stable 'parking spots.' The James Webb Space Telescope sits at the Sun-Earth L2 point, 1.5 million km behind Earth.",
      explore:
        "L1, L2, and L3 lie along the line connecting the two primary bodies; L4 and L5 form equilateral triangles with them. L4 and L5 are stable for mass ratios > 24.96:1 (always the case for Sun-planet systems). Trojans — asteroids orbiting at Jupiter's L4 and L5 — number over 12,000 objects. Earth's L2 hosts JWST, Gaia, and Planck.",
      professional:
        "In the circular restricted three-body problem (CR3BP), Lagrange points satisfy ∇U_eff = 0 where U_eff = −G(M₁/r₁ + M₂/r₂) − Ω²r²/2. L4 and L5 are stable when μ = M₂/(M₁+M₂) < 0.03852. L1/L2/L3 are unstable saddle points; orbits there require station-keeping ΔV ~ 1–5 m/s/year. JWST's L2 halo orbit has semi-major amplitude ~800,000 km, maintaining continuous Sun-shield orientation. Quasi-periodic Lyapunov orbits and halo orbits are used operationally.",
    },
    relatedSlugs: ["orbital-eccentricity", "resonance"],
  },

  // ─── STELLAR PHYSICS ─────────────────────────────────────────────────────────
  {
    slug: "main-sequence",
    term: "Main Sequence",
    category: "stellar-physics",
    definition: {
      discover:
        "The 'lifetime' phase of a star where it fuses hydrogen into helium in its core. The Sun has been on the main sequence for about 4.6 billion years and will remain there for another ~5 billion. A star's mass determines where it sits on the main sequence and how long it stays there.",
      explore:
        "On a Hertzsprung-Russell (H-R) diagram, the main sequence is a diagonal band from hot-luminous (upper left) to cool-dim (lower right). Mass governs everything: a 10 M☉ star burns ~1,000× faster and lives only ~30 Myr; a 0.1 M☉ red dwarf may live a trillion years. Main-sequence lifetime: t_MS ≈ 10¹⁰ × (M/M☉)/(L/L☉) years.",
      professional:
        "ZAMS (Zero-Age Main Sequence) luminosity scales as L ∝ M^4 for intermediate masses (0.5–10 M☉), with the power-law index varying: L ∝ M^2.5 for low mass, M^4 for solar, M^3 for massive (opacity-driven). Core hydrogen fraction X ≈ 0.71 initially; exhaustion (X_c → 0) triggers subgiant expansion. The Eddington luminosity L_Edd = 4πGMc/κ_es ≈ 1.3×10³¹ (M/M☉) W caps radiation-pressure-dominated stars. The mass-luminosity relation breaks near 150 M☉ where radiation pressure exceeds gravity.",
    },
    relatedSlugs: ["hertzsprung-russell", "stellar-nucleosynthesis", "chandrasekhar-limit"],
  },
  {
    slug: "hertzsprung-russell",
    term: "Hertzsprung-Russell Diagram",
    category: "stellar-physics",
    definition: {
      discover:
        "A chart plotting stars by their temperature (x-axis) versus brightness (y-axis). It reveals that stars aren't random — they cluster into distinct groups: the main sequence, red giants, and white dwarfs. A star's position on this diagram tells its life stage.",
      explore:
        "The H-R diagram was independently created around 1910 by Ejnar Hertzsprung and Henry Norris Russell. The x-axis (temperature) runs backwards — hot blue stars on the left, cool red stars on the right. Star clusters plotted on H-R diagrams reveal their age: where the main sequence 'turns off' toward the red giant branch shows how old the cluster is.",
      professional:
        "The main-sequence turnoff point defines isochrone age: τ ≈ 10¹⁰(M_TO/M☉)^(1−α) yr where α ≈ 3–4 is the mass-luminosity exponent. Stellar evolution tracks are computed from stellar structure equations (mass continuity, hydrostatic equilibrium, energy transport — radiative or convective, energy generation). The Schwarzschild criterion for convection: ∇_rad > ∇_ad where ∇_rad = (3κLp)/(64πGmacT⁴) and ∇_ad = 1 − 1/γ for an ideal gas. Horizontal branch stars (core He burning at M_c ≈ 0.5 M☉) provide standard candles via the I-band magnitude M_I(HB) ≈ 0.22[Fe/H] + 0.61.",
    },
    relatedSlugs: ["main-sequence", "stellar-nucleosynthesis", "white-dwarf"],
  },
  {
    slug: "stellar-nucleosynthesis",
    term: "Stellar Nucleosynthesis",
    category: "stellar-physics",
    definition: {
      discover:
        "The process by which stars forge new elements in their cores. The Sun fuses hydrogen into helium. More massive stars can fuse helium into carbon, carbon into oxygen and neon, and so on — all the way up to iron. Elements heavier than iron are built in supernova explosions and neutron star mergers.",
      explore:
        "The proton-proton (pp) chain dominates in Sun-like stars: 4¹H → ⁴He + energy. More massive stars use the CNO cycle, where carbon acts as a catalyst. Red giants fuse helium via the triple-alpha process (3 × ⁴He → ¹²C). Heavier elements are built by neutron capture: the slow s-process in AGB stars and the rapid r-process in neutron star mergers.",
      professional:
        "The pp-I chain: p+p → ²H+e⁺+νe (Q=0.42 MeV), ²H+p → ³He+γ, ³He+³He → ⁴He+2p (Q=12.86 MeV). CNO cycle rate ∝ T^17 vs pp ∝ T^4, dominating above ~1.5 M☉. Triple-α: ⁴He+⁴He ⇌ ⁸Be (τ₁/₂=8.2×10⁻¹⁷s), ⁸Be+⁴He → ¹²C* (Hoyle state at 7.654 MeV), ¹²C*→¹²C+2γ. r-process: neutron capture on timescales τ_n < β-decay τ; requires neutron density n_n > 10²⁰ cm⁻³. GW170817 kilonova confirmed r-process in neutron star mergers via lanthanide opacity κ ~ 10 cm²/g.",
    },
    relatedSlugs: ["main-sequence", "supernova", "neutron-star"],
  },
  {
    slug: "supernova",
    term: "Supernova",
    category: "stellar-physics",
    definition: {
      discover:
        "A massive stellar explosion that briefly outshines an entire galaxy. Core-collapse supernovae happen when a massive star (>8 solar masses) runs out of fuel and its core implodes. Type Ia supernovae occur in binary systems involving white dwarfs. Both scatter newly-forged elements across space.",
      explore:
        "Type Ia supernovae arise when a white dwarf accretes matter from a companion until it reaches the Chandrasekhar limit (~1.4 M☉), igniting runaway nuclear fusion. Their consistent peak brightness makes them 'standard candles' for measuring cosmic distances — they were used to discover the accelerating expansion of the universe in 1998.",
      professional:
        "Core-collapse (CC-SN): iron core grows to M_ch ≈ 1.4 M☉, collapses in ~0.25 s, inner core bounces at nuclear density ρ_nuc ≈ 2.7×10¹⁴ g/cm³ launching a shock. Neutrino energy deposition (L_ν ~ 3×10⁴⁶ J released in 10 s) revives the shock via SASI and convection. Type Ia: M_Ni⁵⁶ ≈ 0.6–0.8 M☉ synthesized (DDT or double-detonation models); Phillips relation: brighter Ia decline slower (Δm₁₅ correlation). The standard Ia cosmological anchor gave H₀ = 73.04 ± 1.04 km/s/Mpc (Riess et al. 2022) in tension with Planck CMB value of 67.4 ± 0.5.",
    },
    relatedSlugs: ["chandrasekhar-limit", "neutron-star", "white-dwarf", "stellar-nucleosynthesis"],
  },
  {
    slug: "chandrasekhar-limit",
    term: "Chandrasekhar Limit",
    category: "stellar-physics",
    definition: {
      discover:
        "The maximum mass a white dwarf star can have: about 1.4 times the mass of the Sun. Above this limit, the electron pressure that holds the star up can no longer resist gravity, and the star collapses. This discovery by Subrahmanyan Chandrasekhar in 1930 predicted the existence of neutron stars and black holes.",
      explore:
        "As a white dwarf gains mass (from a companion star), its radius actually shrinks. At 1.4 M☉, electrons are moving near the speed of light and can no longer prevent collapse. The result is either a Type Ia supernova or a neutron star. Chandrasekhar received the Nobel Prize in Physics in 1983 for this work.",
      professional:
        "M_Ch = ω₃⁰(5.83/μ_e²) M☉ ≈ 1.44/μ_e² M☉, where μ_e = A/Z ≈ 2 for C/O WDs and ω₃⁰ = 2.018 is a numerical factor from the Lane-Emden equation for a polytrope n=3. Electron degeneracy pressure P_e ∝ ρ^(5/3) (non-relativistic) transitions to P_e ∝ ρ^(4/3) (relativistic) near M_Ch, allowing no stable solution. Corrections from Coulomb interactions lower M_Ch by ~2–4%. The TOV limit for neutron stars M_TOV ≈ 2.1–2.3 M☉ is the analogous neutron degeneracy limit, confirmed by PSR J0740+6620 at 2.08 ± 0.07 M☉.",
    },
    relatedSlugs: ["white-dwarf", "neutron-star", "supernova"],
  },
  {
    slug: "white-dwarf",
    term: "White Dwarf",
    category: "stellar-physics",
    definition: {
      discover:
        "The dense, Earth-sized remnant left when a Sun-like star exhausts its fuel and sheds its outer layers. A white dwarf is incredibly dense — a teaspoon of its material would weigh about 5 tonnes on Earth. It slowly cools over billions of years without any nuclear burning.",
      explore:
        "White dwarfs are supported by electron degeneracy pressure, not thermal pressure, so they don't need to keep burning to stay stable. Their surface temperatures start around 100,000 K and cool over billions of years. The coolest known white dwarfs are around 4,000 K — nearly as old as the universe itself.",
      professional:
        "WD mass-radius relation: R_WD ∝ M^(−1/3) in the non-relativistic limit, shrinking to zero at M_Ch. Typical WD: M ≈ 0.6 M☉, R ≈ 0.013 R☉, ρ_c ≈ 10⁶ g/cm³. Cooling tracks: L ∝ T_c^7/2 (Mestel cooling), modified by crystallization latent heat release at T_c ~ 6×10⁶ K. DA (hydrogen-atmosphere) vs DB (helium) spectral types. The 40 Eridani B WD luminosity function provides an independent age of the galactic disk ~8 Gyr. WD pollution (metal absorption from tidally disrupted planetesimals) probes exoplanetary composition: observed Ca, Mg, Fe abundances in >25% of WDs.",
    },
    relatedSlugs: ["chandrasekhar-limit", "neutron-star", "main-sequence"],
  },
  {
    slug: "neutron-star",
    term: "Neutron Star",
    category: "stellar-physics",
    definition: {
      discover:
        "The ultra-dense core left after a massive star explodes as a supernova. A neutron star packs more than the Sun's mass into a sphere only about 20 km across. Its density is so extreme that protons and electrons are crushed together into neutrons.",
      explore:
        "Neutron stars are supported by neutron degeneracy pressure. They can spin hundreds of times per second (millisecond pulsars) and have magnetic fields a trillion times stronger than Earth's. When we detect pulsars — regular radio pulses from rotating neutron stars — we're using them as the most precise clocks in the universe.",
      professional:
        "Typical NS: M ≈ 1.4 M☉, R ≈ 10–12 km, ρ_c ≈ 5×10¹⁴ g/cm³ (super-nuclear). Structure governed by TOV equation: dP/dr = −(ε+P)(M+4πr³P/c²)/(r²(1−2GM/rc²)). EOS uncertainty: quark deconfinement or hyperon softening at high density debates mass maximum M_TOV. LIGO/Virgo GW170817 tidal deformability Λ̃ < 800 (90% CI) constrains R₁.4 ≈ 10.8–13.2 km. NICER X-ray timing: PSR J0030+0451 gives R = 13.0₋₁.₉⁺²·⁷ km, M = 1.34₋₀.₁₆⁺⁰·¹⁵ M☉ (Miller et al. 2021). Spin-down luminosity Ė = IΩΩ̇ where I ≈ 10³⁸ kg·m².",
    },
    relatedSlugs: ["chandrasekhar-limit", "supernova", "black-hole", "pulsar"],
  },
  {
    slug: "pulsar",
    term: "Pulsar",
    category: "stellar-physics",
    definition: {
      discover:
        "A rapidly rotating neutron star that beams radio waves (or X-rays) from its magnetic poles. Because the beam sweeps across Earth like a lighthouse, we detect it as a precise, rhythmic pulse. The most stable pulsars are more accurate timekeepers than atomic clocks.",
      explore:
        "Pulsars were discovered in 1967 by Jocelyn Bell Burnell and Antony Hewish. Millisecond pulsars (MSPs) spin up to 716 Hz by accreting matter from a companion star. Pulsar timing arrays (PTAs) use networks of MSPs to detect gravitational waves at nanohertz frequencies — a signal that appeared in NANOGrav's 2023 data.",
      professional:
        "Pulsar spin-down: dE_rot/dt = IΩΩ̇ = −4π²IṖ/P³ (braking by magnetic dipole radiation). Characteristic age τ_c = P/(2Ṗ), surface B ~ 3.2×10¹⁹(PṖ)^½ G. Pulsar timing residuals δt → stochastic GW background: NANOGrav 15-yr dataset (2023) found Hellings-Downs correlations with A_GW ~ 2.4×10⁻¹⁵ at f_ref = 1 yr⁻¹. MSP populations used as GW detectors: sensitivity ~ 10⁻¹⁸ strain at 10 nHz with decades of timing. Binary pulsars: PSR B1913+16 (Hulse-Taylor, Nobel 1993) orbital decay ṖB = −2.40×10⁻¹² (GR prediction: −2.40242×10⁻¹²), confirming GW energy loss.",
    },
    relatedSlugs: ["neutron-star", "gravitational-waves"],
  },

  // ─── PLANETARY SCIENCE ───────────────────────────────────────────────────────
  {
    slug: "differentiation",
    term: "Planetary Differentiation",
    category: "planetary-science",
    definition: {
      discover:
        "When a young planet's interior melts, heavier materials (like iron) sink to the center and lighter materials (like rock) float to the surface. This is why Earth has a dense iron core and a lighter rocky crust. It's the same reason cream floats to the top of milk.",
      explore:
        "Differentiation requires enough heat to melt rock — supplied by the energy of accretion, radioactive decay (⁴⁰K, ²³²Th, ²³⁵U, ²³⁸U), and short-lived isotopes like ²⁶Al (half-life ~0.7 Myr). Bodies that formed quickly — within ~2 Myr of CAI formation — differentiated; those that formed later are mostly undifferentiated rubble piles.",
      professional:
        "Iron segregation: siderophile elements partition into the metallic phase; lithophiles into silicate. Metal-silicate partition coefficients D = c_metal/c_silicate for Ni ≈ 30, Co ≈ 25 at 2500 K, 5 GPa. Core formation timescale from ¹⁸²Hf-¹⁸²W chronometry: Earth's core segregated within ~30 Myr of t_SS (Kleine et al. 2009, ε¹⁸²W deficit). The 'late veneer' hypothesis invokes post-core-formation delivery of ~0.5% chondritic material to explain excess HSEs in the mantle. Vesta's differentiated structure was confirmed by Dawn: crust ~22 km, mantle, iron core ~110 km radius (Russell et al. 2012).",
    },
    relatedSlugs: ["accretion", "impacts", "radioactive-decay"],
  },
  {
    slug: "accretion",
    term: "Accretion",
    category: "planetary-science",
    definition: {
      discover:
        "The process by which planets grow by attracting and collecting material. Gas, dust, and rocks in a protoplanetary disk gradually stick together: dust grains become pebbles, pebbles become planetesimals, and planetesimals collide to form planets over millions of years.",
      explore:
        "Accretion begins with tiny dust grains sticking electrostatically, then grows through mutual gravity. A key challenge is the 'meter-size barrier' — objects ~1m in size drift inward quickly and tend to fragment rather than grow. Pebble accretion (streaming instability) may skip this barrier by concentrating pebbles directly into planetesimals.",
      professional:
        "Planetesimal formation via streaming instability requires dust-to-gas ratio ε ≳ 0.02 and Stokes number St ~ 0.01–1. Pebble accretion rate: Ṁ ≈ 2R_H²·Σ_peb·Ω where R_H = a(m/3M☉)^(1/3) is the Hill radius. Oligarchic growth timescale: τ ≈ (ρ_p R_p)/(Σ Ω f_g) where f_g is the gravitational enhancement factor. Giant impact phase ends with ~1–3 Moon-forming collisions; Earth's Moon-forming impactor Theia had M ~ 0.1–0.45 M⊕ (canonical: 0.14 M⊕). N-body simulations (Chambers 2001; Hansen 2009) reproduce terrestrial planet architectures for various disk surface density profiles Σ ∝ r^(−3/2).",
    },
    relatedSlugs: ["differentiation", "protoplanetary-disk", "impacts"],
  },
  {
    slug: "magnetosphere",
    term: "Magnetosphere",
    category: "planetary-science",
    definition: {
      discover:
        "The region of space dominated by a planet's magnetic field, which deflects the solar wind — a stream of charged particles from the Sun. Earth's magnetosphere acts like a shield, protecting our atmosphere and surface. Without it, the solar wind would gradually strip away our atmosphere (as likely happened to Mars).",
      explore:
        "Earth's magnetosphere extends about 60,000 km toward the Sun and stretches into a 'magnetotail' millions of km in the opposite direction. Charged particles trapped in the Van Allen radiation belts can damage satellites. Aurora borealis and australis are visible where solar wind particles funnel into the atmosphere along magnetic field lines.",
      professional:
        "Magnetopause standoff distance r_MP ≈ (B_eq²/8πρ_sw v_sw²)^(1/6) R_p. Earth's dipole moment M_E = 8×10²² A·m². The Dungey cycle drives magnetospheric convection: dayside reconnection transfers flux to the tail, nightside reconnection drives substorms (E-field across polar cap ~ 30–100 kV). Ganymede has an intrinsic field B_eq = 719 nT (dipole moment 1.3×10²⁰ A·m²), the only moon with a true magnetosphere. Mercury's magnetosphere is ~5% of Earth's in dipole moment; BepiColombo will measure its internal field to constrain core size and dynamo mechanism.",
    },
    relatedSlugs: ["solar-wind", "aurora"],
  },
  {
    slug: "impact-crater",
    term: "Impact Crater",
    category: "planetary-science",
    definition: {
      discover:
        "A circular depression formed when a meteorite, asteroid, or comet strikes a planet's surface. The Moon is covered in craters because it has no atmosphere to burn up incoming rocks and no geological processes to erase them. Earth has craters too — the Chicxulub impactor 66 million years ago triggered the mass extinction that ended the dinosaurs.",
      explore:
        "Craters form in three phases: contact/compression (impactor vaporizes in microseconds), excavation (a cavity ~10× impactor size forms), and modification (walls collapse into a final shape). Large craters have central peaks or rings formed by elastic rebound. Crater counting on planetary surfaces is the primary method for estimating terrain age.",
      professional:
        "Crater scaling: D_crater ≈ 1.16(g_target/g_E)^(−0.22)(ρ_imp/ρ_target)^(0.33) d^0.78 v^0.44 for impact velocity v (Melosh 1989). Chicxulub: ~12 km impactor, ~180 km complex crater (peak ring, melt sheet ~3 km deep). Crater size-frequency distributions (CSFDs) calibrated to lunar samples: N(D) ∝ D^(−n) with n ≈ 2 for D > 4 km. The Late Heavy Bombardment hypothesis (terminal cataclysm ~3.9 Ga) remains debated: some sample chronologies support an extended flux rather than a distinct spike (Zellner 2017). DART mission demonstrated kinetic impactor deflection: β_ejecta ≈ 3.6 (Cheng et al. 2023).",
    },
    relatedSlugs: ["late-heavy-bombardment", "accretion"],
  },
  {
    slug: "volcanic-activity",
    term: "Volcanism",
    category: "planetary-science",
    definition: {
      discover:
        "The eruption of molten rock (magma) from a planet's interior to its surface. Volcanism built most of the solid surfaces in our solar system and released the gases that formed early atmospheres. Mars has the largest volcano in the solar system (Olympus Mons, ~22 km tall), though it is now dormant.",
      explore:
        "Volcanism is driven by heat from three sources: primordial heat from accretion, radioactive decay, and tidal heating. On Earth, plate tectonics recycles crust and drives volcanism at plate boundaries. On Mars and Venus, which lack plate tectonics, volcanic activity concentrated in single hotspots, building enormous shield volcanoes.",
      professional:
        "Silicate melt rheology: η ∝ exp(A/T) (Arrhenius), with η_basalt ~ 10–100 Pa·s. Magma buoyancy: Δρ ~ 200–500 kg/m³ drives dyke ascent. Cryovolcanism on Enceladus: plume gas composition H₂O (>90%), CO₂ (~0.5%), CH₄ (~0.2%), H₂ (~0.8%); H₂ molar abundance implies active serpentinisation (Waite et al. 2017). Io heat flow: ~2 W/m² global average, locally up to 10 W/m² over hot spots; sustains 400+ active volcanic centers. Evidence for recent (<2 Ma) volcanic activity on Venus from Magellan radar surface emissivity changes (Shalygin et al. 2015) and VERITAS/EnVision will characterize Venusian volcanic flux.",
    },
    relatedSlugs: ["tidal-heating", "differentiation", "plate-tectonics"],
  },
  {
    slug: "plate-tectonics",
    term: "Plate Tectonics",
    category: "planetary-science",
    definition: {
      discover:
        "The process by which Earth's outer shell is divided into large pieces (plates) that slowly move, collide, and pull apart. This motion builds mountains, creates ocean floors, causes earthquakes and volcanoes, and recycles carbon — making Earth the only confirmed tectonically active rocky planet.",
      explore:
        "Earth's plates move at 1–15 cm/year (similar to fingernail growth). Where plates diverge, new ocean floor is created; where they converge, one sinks under the other (subduction). Plate tectonics regulates Earth's climate over millions of years by cycling CO₂ between the atmosphere and mantle through the carbonate-silicate cycle.",
      professional:
        "Plate velocity driven by ridge push F_R ~ 2×10¹² N/m and slab pull F_S ~ 3–5×10¹² N/m (dominant). Slab thermal structure: temperature T(z, t) ∝ erfc(z/2√(κt)) where κ ≈ 10⁻⁶ m²/s. Tectonic carbon cycle: C_atm regulated by silicate weathering (temperature-dependent) and volcanic outgassing — Walker et al. (1981) negative feedback. InSight crustal thickness estimates support a single-plate thick lithosphere for Mars; absence of subduction confirmed by MAVEN magnetic field mapping showing no ridge-parallel magnetic stripes. Europa's ice shell deformation and potential subduction of ice remains an open question for Europa Clipper.",
    },
    relatedSlugs: ["volcanic-activity", "magnetosphere"],
  },

  // ─── COSMOLOGY ───────────────────────────────────────────────────────────────
  {
    slug: "hubble-constant",
    term: "Hubble Constant",
    category: "cosmology",
    symbol: "H₀",
    definition: {
      discover:
        "A number that describes how fast the universe is expanding: for every 3.26 million light-years (one megaparsec) of distance, galaxies are moving away from us at about 70 km/s. Discovered by Edwin Hubble in 1929, this expansion is the foundation of the Big Bang theory.",
      explore:
        "H₀ sets the scale of the universe: the Hubble time 1/H₀ ≈ 14 billion years gives an approximate age of the universe. The controversy today is that two independent measurement methods disagree: the CMB (Planck) gives H₀ ≈ 67.4 km/s/Mpc, while supernova/Cepheid distance ladders give H₀ ≈ 73 km/s/Mpc. This 'Hubble tension' may hint at new physics.",
      professional:
        "CMB measurement: H₀ = 67.4 ± 0.5 km/s/Mpc (Planck 2018, assuming flat ΛCDM). Local distance ladder: H₀ = 73.04 ± 1.04 km/s/Mpc (Riess et al. 2022, SH0ES: Cepheid+SNIa). Tension at 5σ level. Proposed resolutions: early dark energy, extra relativistic species N_eff > 3.046, decaying dark matter, or systematic errors. JWST Cepheid calibrations (Freedman et al. 2023) find H₀ ≈ 69.8 ± 1.7 using TRGB anchor — intermediate value. Gravitational wave standard sirens (GW170817 + NGC 4993 recession) give H₀ = 70.0⁺¹²·⁰₋₈.₀ km/s/Mpc (Abbott et al. 2017).",
    },
    relatedSlugs: ["dark-energy", "cosmic-microwave-background", "big-bang"],
  },
  {
    slug: "dark-matter",
    term: "Dark Matter",
    category: "cosmology",
    definition: {
      discover:
        "An invisible form of matter that doesn't emit or absorb light but exerts gravity. We know it exists because galaxies rotate too fast at their edges without extra unseen mass, and galaxy clusters bend light more than their visible matter alone should. Dark matter makes up about 27% of the universe's total energy content.",
      explore:
        "Strong evidence for dark matter includes galaxy rotation curves (flat where they should decline, discovered by Vera Rubin in the 1970s), gravitational lensing in the Bullet Cluster (dark matter and gas separated during a collision), and the large-scale structure of the universe matching simulations that include dark matter.",
      professional:
        "Dark matter density parameter Ω_DM h² = 0.1200 ± 0.0012 (Planck 2018). NFW halo profile: ρ(r) = ρ_s/[(r/r_s)(1+r/r_s)²]. Leading WIMP candidates (m ~ 10–1000 GeV, σ_SI ~ 10⁻⁴⁶ cm²) are constrained by LUX-ZEPLIN (LZ) to σ_SI < 6.5×10⁻⁴⁸ cm² at m_χ = 30 GeV (2024). Axion DM: m_a ~ 10⁻⁵ eV, ADMX sensitivity to g_aγγ ~ 10⁻¹⁵ GeV⁻¹. Fuzzy DM (ultra-light axions m ~ 10⁻²² eV) suppresses small-scale structure below Jeans length λ_J ~ 1 Mpc, constrained by Lyman-alpha forest. SIDM (σ/m ~ 1 cm²/g) proposed to address core-cusp and too-big-to-fail problems.",
    },
    relatedSlugs: ["dark-energy", "cosmic-microwave-background", "galaxy-rotation-curve"],
  },
  {
    slug: "dark-energy",
    term: "Dark Energy",
    category: "cosmology",
    symbol: "Λ",
    definition: {
      discover:
        "A mysterious form of energy that is causing the expansion of the universe to accelerate. Discovered in 1998 when astronomers found that distant supernovae were fainter — and therefore farther — than expected. Dark energy makes up about 68% of the universe's total energy content.",
      explore:
        "Dark energy is often described as a property of space itself — even empty space has energy. As the universe expands, dark energy stays constant per unit volume (unlike matter, which dilutes), so its influence grows over time. In ~5 billion years, it will drive galaxies so far apart that our Milky Way's neighbor galaxies will no longer be visible.",
      professional:
        "Cosmological constant Λ: equation-of-state parameter w = P/(ρc²) = −1. Planck 2018: Ω_Λ = 0.6847 ± 0.0073. The 'coincidence problem': why Ω_DE ≈ Ω_m now? Quintessence models: w(a) = w₀ + w_a(1−a) (Chevallier-Polarski-Linder parametrization); DESI 2024 BAO data show w₀ = −0.827 ± 0.060, w_a = −0.75 ± 0.29 (2.5σ from w=−1). Vacuum energy theoretical prediction from QFT: ρ_vac ~ M_Pl⁴/ℏ³c³ ~ 10⁹³ g/cm³ vs observed ρ_Λ ~ 10⁻²⁹ g/cm³ — fine-tuning of 120 orders of magnitude (cosmological constant problem). Euclid satellite (launched 2023) will constrain w to ~1% using weak lensing and BAO surveys over 15,000 deg².",
    },
    relatedSlugs: ["hubble-constant", "cosmic-microwave-background", "dark-matter"],
  },
  {
    slug: "cosmic-microwave-background",
    term: "Cosmic Microwave Background",
    category: "cosmology",
    symbol: "CMB",
    definition: {
      discover:
        "The faint afterglow of the Big Bang — light that has been traveling through space for 13.8 billion years. It's a nearly uniform bath of microwave radiation coming from every direction, discovered accidentally in 1964 by Arno Penzias and Robert Wilson. Its tiny temperature variations (1 part in 100,000) seed all the structure in the universe.",
      explore:
        "The CMB comes from the 'surface of last scattering' — when the universe was 380,000 years old and cool enough for electrons and protons to combine into neutral hydrogen, making the universe transparent for the first time. Its temperature today is 2.725 K. The CMB's acoustic peaks encode the universe's composition, age, and geometry.",
      professional:
        "CMB temperature power spectrum C_l: acoustic peaks at l ≈ 220, 540, 800 (first three peaks). Planck 2018 cosmological parameters from TT,TE,EE+lowE+lensing: H₀=67.36±0.54, Ω_b h²=0.02237±0.00015, Ω_c h²=0.1200±0.0012, τ=0.0544±0.0073, n_s=0.9649±0.0042, ln(10¹⁰A_s)=3.044±0.014. Silk damping suppresses power on scales l > 1000 (θ_Silk ≈ 0.1°). B-mode polarization: primordial gravitational waves → tensor-to-scalar ratio r; BICEP/Keck bound r < 0.036 (95% CI, 2021). CMB lensing by LSS detected at 40σ (SPT, ACT, Planck). The Sunyaev-Zel'dovich effect (inverse Compton scattering of CMB photons off hot cluster electrons) provides galaxy cluster masses.",
    },
    relatedSlugs: ["big-bang", "dark-matter", "dark-energy", "hubble-constant"],
  },
  {
    slug: "big-bang",
    term: "Big Bang",
    category: "cosmology",
    definition: {
      discover:
        "The prevailing scientific model for the origin of the universe: 13.8 billion years ago, all of space, time, matter, and energy exploded from an extraordinarily hot, dense state and has been expanding ever since. It wasn't an explosion in space — it was an expansion of space itself.",
      explore:
        "Three key observations support the Big Bang: (1) the universe is expanding (Hubble's law); (2) the CMB — the thermal afterglow predicted in the 1940s and found in 1964; (3) Big Bang nucleosynthesis — the observed abundance of hydrogen and helium matches predictions from a hot early universe (~25% He by mass).",
      professional:
        "BBN predictions (Cyburt et al. 2016): ⁴He mass fraction Y_p = 0.2470 ± 0.0002, D/H = (2.527 ± 0.030)×10⁻⁵, ⁷Li/H = (4.7 ± 0.7)×10⁻¹⁰. Observed ⁷Li is ~3× lower (lithium problem). Inflation solves: horizon problem (causally disconnected CMB regions in thermal equilibrium), flatness problem (|Ω_total − 1| < 0.005 today requires fine-tuning), monopole problem. Slow-roll inflation: ε = (M_Pl²/2)(V'/V)², η = M_Pl²(V''/V); observational predictions n_s = 1 − 6ε + 2η, r = 16ε. Chaotic inflation (Linde 1983): V = m²φ²/2, gives n_s ≈ 0.967, r ≈ 0.13 — r now disfavored at >2σ; Starobinsky R² inflation gives r ≈ 0.004 (preferred).",
    },
    relatedSlugs: ["cosmic-microwave-background", "dark-energy", "hubble-constant"],
  },
  {
    slug: "gravitational-waves",
    term: "Gravitational Waves",
    category: "cosmology",
    definition: {
      discover:
        "Ripples in the fabric of spacetime caused by accelerating massive objects, predicted by Einstein in 1916 and first directly detected in 2015. LIGO detected the merger of two black holes 1.3 billion light-years away — a signal lasting less than a second that stretched space by less than 1/1,000th the diameter of a proton.",
      explore:
        "Gravitational waves travel at the speed of light and pass through matter almost unimpeded. LIGO uses laser interferometry with 4-km arms to detect changes 1,000× smaller than a proton. Events observed include black hole mergers, neutron star mergers (including the kilonova GW170817 seen with telescopes), and potentially future signals from cosmic inflation.",
      professional:
        "GW strain h = ΔL/L; LIGO sensitivity ~10⁻²³ Hz⁻¹/² at 100 Hz. GW power radiated by a binary: P = −32G⁴/(5c⁵) × (m₁m₂)²(m₁+m₂)/r⁵. GW150914: m₁ = 36 M☉, m₂ = 29 M☉, m_remnant = 62 M☉, E_GW ≈ 3 M☉c² ≈ 5×10⁴⁷ J radiated in <1 s. GW170817: chirp mass ℳ = (m₁m₂)^(3/5)/(m₁+m₂)^(1/5) = 1.188 M☉; tidal deformability Λ̃ < 800; ejecta ~0.01 M☉ r-process material. LISA (launch 2035): 2.5 Gm arm length, mHz band — targets MBH mergers, EMRIs, verification binaries. NANOGrav 15-yr GWB: A_GW = 2.4×10⁻¹⁵ at f = 1/yr, consistent with SMBH binary background.",
    },
    relatedSlugs: ["black-hole", "neutron-star", "pulsar"],
  },
  {
    slug: "inflation",
    term: "Cosmic Inflation",
    category: "cosmology",
    definition: {
      discover:
        "A period of extraordinarily rapid expansion in the first tiny fraction of a second after the Big Bang (roughly 10⁻³⁶ to 10⁻³² seconds). During inflation, the universe grew from smaller than a proton to the size of a grapefruit in a blink — smoothing out the universe and seeding the slight variations that would grow into galaxies.",
      explore:
        "Inflation explains why the CMB is so uniform (horizon problem) and why the universe's geometry is nearly flat (flatness problem). It also stretched quantum fluctuations to cosmic scales — those fluctuations became the seeds of galaxies. The theory was proposed by Alan Guth in 1981; key evidence supporting it comes from the CMB's near-scale-invariant power spectrum.",
      professional:
        "Slow-roll parameters ε = (M_Pl/√2)²(V'/V)², η = M_Pl²(V''/V). Spectral index n_s = 1 − 6ε + 2η; tensor-to-scalar r = 16ε. Planck 2018 + BK18: n_s = 0.9649 ± 0.0042, r < 0.036. e-folding number N_e ≈ 60 needed to solve horizon/flatness. Starobinsky R² model: n_s ≈ 1 − 2/N ≈ 0.967, r ≈ 12/N² ≈ 0.003 — currently best-fit. Trans-Planckian problem: modes originating below Planck scale may have modified dispersion relations; observable if α_TP ≳ H²/M_Pl². Eternal inflation (Linde): inflation continues in some regions forever, producing a multiverse of bubble universes with differing physical constants.",
    },
    relatedSlugs: ["big-bang", "cosmic-microwave-background", "dark-energy"],
  },

  // ─── INSTRUMENTATION ─────────────────────────────────────────────────────────
  {
    slug: "spectrometer",
    term: "Spectrometer",
    category: "instrumentation",
    definition: {
      discover:
        "An instrument that splits light into its component colors (spectrum). Each element absorbs or emits specific colors, leaving fingerprints in a spectrum. Astronomers use spectrometers to identify what distant stars and planets are made of, how fast they're moving, and how hot they are — all from light alone.",
      explore:
        "Spectrometers spread light using a prism or diffraction grating. Absorption lines (dark lines in a continuous spectrum) show which elements are present in a star's atmosphere. Doppler shifts of these lines reveal radial velocity — the basis of the radial velocity method for finding exoplanets.",
      professional:
        "Resolving power R = λ/Δλ. For a grating: R = mN (order × number of grooves illuminated). HARPS: R ≈ 115,000, σ_RV ≈ 1 m/s (photon-limited). ESPRESSO (VLT): R ≈ 190,000, σ_RV < 10 cm/s (ultra-stabilized, 70 kg vacuum vessel). JWST NIRSpec: R ≈ 100 (prism), 1000, 2700 in grating modes; IFU 3.1″×3.2″ FOV. NIRCam grism R ≈ 1600 for slitless spectroscopy. Radial velocity precision via iodine cell calibration (Butler et al. 1996): absorption reference imprinted on stellar spectrum, σ_RV ~ 3 m/s achievable. For exoplanet atmospheres: transmission spectroscopy transit depth δ = (R_p/R_s)² + 2H·N_atm/R_s² × dσ/dλ.",
    },
    relatedSlugs: ["telescope", "radial-velocity", "exoplanet-detection"],
  },
  {
    slug: "telescope",
    term: "Telescope",
    category: "instrumentation",
    definition: {
      discover:
        "An instrument that collects and focuses light (or other radiation) from distant objects. Optical telescopes use lenses or mirrors to gather more light than the human eye can. Larger apertures collect more light and resolve finer details — a 10-meter telescope collects 1,000× more light than a 30-cm backyard scope.",
      explore:
        "Modern observatories use mirrors, not lenses — mirrors can be made much larger and have no chromatic aberration. Telescopes also observe beyond visible light: radio, X-ray, infrared, ultraviolet, and gamma-ray telescopes reveal phenomena invisible to optical light. Space telescopes escape the blurring effects of Earth's atmosphere.",
      professional:
        "Angular resolution (Rayleigh criterion): θ = 1.22λ/D radians. For D = 10 m at λ = 500 nm: θ = 0.012″ (diffraction limit). Atmospheric seeing: Fried parameter r₀ ≈ 10–20 cm at good sites (Mauna Kea), limiting resolution to ~0.5″ without AO. AO system: deformable mirror with N_act actuators corrects N_act = (D/r₀)^2 modes; Strehl ratio S ≈ exp(−(σ_φ)²) where σ_φ is residual wavefront error in rad. ELT (Extremely Large Telescope): D = 39 m, 798 hexagonal segments, first light ~2028. JWST primary: 6.5 m gold-beryllium (18 segments), L2 orbit, T_mirror ≈ 50 K for mid-IR sensitivity.",
    },
    relatedSlugs: ["spectrometer", "adaptive-optics", "interferometry"],
  },
  {
    slug: "adaptive-optics",
    term: "Adaptive Optics",
    category: "instrumentation",
    definition: {
      discover:
        "A technology that corrects for the blurring of light as it passes through Earth's turbulent atmosphere. A computer measures the distortions hundreds of times per second and adjusts a flexible mirror to compensate, letting ground-based telescopes approach the sharp imaging only possible from space.",
      explore:
        "AO systems need a bright reference star near the target to measure atmospheric distortion. When no natural guide star exists, an artificial laser guide star is created by shining a laser into the sodium layer of the atmosphere (90 km up). Modern AO on 8–10m telescopes achieves near-diffraction-limited resolution in the near-infrared.",
      professional:
        "AO performance measured by Strehl ratio S = exp(−σ_φ²) ≈ 1 − σ_φ² for small errors. The Greenwood frequency f_G = 0.43v_wind/r₀ sets required AO bandwidth. Tip-tilt correction needs the brightest NGS; higher-order correction (50–3000 actuators) uses WFSs (Shack-Hartmann or pyramid). Laser guide star sodium backscatter: λ = 589 nm, column density ~4×10⁹ Na/cm², return flux ~10⁵ photons/m²/s. Keck AO Strehl: ~55% at K-band (2.2 μm) in good conditions. The GRAVITY instrument (VLTI, 4-telescope AO beam combination) achieved 30 μas astrometry, resolving stellar orbits around Sgr A* and confirming GR precession (Gravity Collaboration 2020).",
    },
    relatedSlugs: ["telescope", "interferometry"],
  },
  {
    slug: "interferometry",
    term: "Interferometry",
    category: "instrumentation",
    definition: {
      discover:
        "A technique that combines light or radio waves from multiple telescopes separated by large distances, achieving resolution equivalent to a single telescope as wide as the separation. The Event Horizon Telescope used radio dishes across Earth to image the black hole shadow in M87 — a baseline as wide as our entire planet.",
      explore:
        "Radio interferometry (VLBI) connects dishes thousands of kilometers apart. The angular resolution is θ ≈ λ/B, where B is the baseline. The EHT baseline is ~10,000 km, giving resolution ~20 μas at 1.3 mm — enough to resolve structures the size of a black hole shadow at 55 million light-years.",
      professional:
        "VLBI cross-correlation: fringe visibility V_AB = ∫I(l,m)e^(−2πi(ul+vm))dl dm where (u,v) is the baseline projected on the sky plane in units of λ, and I(l,m) the sky brightness distribution. Aperture synthesis: image reconstruction from uv-plane samples using CLEAN or regularized maximum-likelihood methods (eht-imaging). EHT M87*: angular diameter θ_shadow = (5.2 ± 0.2)×2GM/Dc² ≈ 42 μas (EHT 2019); consistent with M = 6.5 ± 0.7 × 10⁹ M☉. Sgr A* imaging challenge: scattering screen τ_scatter ∝ λ² at mm wavelengths, varying substructure on orbital timescales (Ghez et al. 2008 astrometry: M_Sgr = 4.02 × 10⁶ M☉).",
    },
    relatedSlugs: ["telescope", "black-hole", "adaptive-optics"],
  },
  {
    slug: "radial-velocity",
    term: "Radial Velocity Method",
    category: "instrumentation",
    definition: {
      discover:
        "A method for finding exoplanets by measuring how a planet's gravity causes its star to 'wobble.' As a planet orbits, it pulls its star slightly toward and away from us; the star's light blue-shifts and red-shifts accordingly. This Doppler wobble was used to discover the first exoplanet around a Sun-like star (51 Pegasi b, 1995).",
      explore:
        "The RV method measures radial velocity semi-amplitude K = (2πG/P)^(1/3) × m_p sin(i)/(m_s+m_p)^(2/3). It finds the planet's minimum mass m_p sin(i) because orbital inclination is unknown without additional observations (like transits). Hot Jupiters (massive planets close to their stars) produce the largest signals and were the first class found.",
      professional:
        "Semi-amplitude K = 28.4 m/s (M_p sin i / M_J)(M_*/M☉)^(−2/3)(P/yr)^(−1/3)(1−e²)^(−1/2). Earth analog around solar twin: K ≈ 9 cm/s, P = 1 yr — requiring σ_RV < 10 cm/s (ESPRESSO target). Stellar noise floor: solar RV jitter ~1 m/s (granulation, oscillations, activity); suppressed by time-averaging and activity indicators (log R'_HK, FWHM, BIS asymmetry). 51 Peg b discovery: K = 56 m/s, P = 4.231 d (Mayor & Queloz 1995, Nobel 2019). RV + Gaia astrometry (2024 data) resolves sin i degeneracy for companions with a_phot > 0.1 mas, enabling true mass determination.",
    },
    relatedSlugs: ["exoplanet-detection", "spectrometer"],
  },
  {
    slug: "exoplanet-detection",
    term: "Exoplanet Detection",
    category: "instrumentation",
    definition: {
      discover:
        "The various methods used to discover planets orbiting other stars. Since planets are faint and close to bright stars, direct imaging is extremely difficult — most exoplanets are found indirectly through effects on their host star: the transit method (planet blocks starlight) and radial velocity (planet pulls star).",
      explore:
        "Transit method: a planet crossing in front of its star dims it by (R_p/R_s)². Kepler found ~2,600 confirmed exoplanets using this technique. TESS is extending the search to bright nearby stars. Direct imaging works for young, bright, wide-orbit planets; the James Webb Space Telescope can take spectra of directly-imaged atmospheres.",
      professional:
        "Transit depth δ = (R_p/R_s)² ≈ 10⁻⁴–10⁻² for Earths–Jupiters. Transit SNR ∝ (R_p/R_s)²/(δ_noise/√N_transits). Transit timing variations (TTVs) reveal non-transiting companions via resonance-induced period changes — TRAPPIST-1 masses determined from TTVs (Agol et al. 2021). Atmospheric characterization: JWST transmission spectra (TRAPPIST-1c, 2022): transit depth excess at CO₂ band 15 μm of 65 ± 25 ppm; JWST MIRI phase curve of TRAPPIST-1b (Ducrot et al. 2023) consistent with bare rock or thin CO₂. Habitable World Observatory (HWO): coronagraphic imaging at IWA ~ 2λ/D with contrast ratio 10⁻¹⁰ for Earth-Sun analog at 10 pc.",
    },
    relatedSlugs: ["radial-velocity", "spectrometer", "telescope"],
  },

  // ─── MISSIONS ────────────────────────────────────────────────────────────────
  {
    slug: "voyager-program",
    term: "Voyager Program",
    category: "missions",
    definition: {
      discover:
        "NASA's twin Voyager spacecraft, launched in 1977, used a rare alignment of the outer planets to fly past Jupiter, Saturn, Uranus, and Neptune. Voyager 1 is now the farthest human-made object, over 160 AU from the Sun. Both carry the Golden Record — a greeting to any civilization that might find them.",
      explore:
        "Voyager 1 crossed into interstellar space in 2012 (confirmed 2013), becoming the first human object to leave the heliosphere. It measured the termination shock, heliosheath, and heliopause. Both craft still send data using their nuclear power sources (RTGs), though power is declining ~4 W/year.",
      professional:
        "Voyager 1 position (2024): ~164 AU from Sun, receding at 17.0 km/s. Power from three MHW-RTGs (originally 420 W at launch, now ~250 W total). Data rate at >160 AU: ~160 bit/s via 34 m DSN dishes. Voyager 2 crossed the heliopause at 119 AU in 2018; its PLS instrument still operational (Voyager 1's PLS failed 1980). Anomalous cosmic ray measurements provide boundary conditions on the heliosheath model. The Voyager Anomaly (Pioneer anomaly resolved by radiation pressure in 2012) was not detected in Voyager tracking.",
    },
    relatedSlugs: ["heliosphere", "gravity-assist"],
  },
  {
    slug: "gravity-assist",
    term: "Gravity Assist",
    category: "missions",
    definition: {
      discover:
        "A technique where a spacecraft uses a planet's gravity and orbital motion to gain speed — essentially borrowing momentum from the planet. It's like a ball gaining speed by bouncing off a moving truck. NASA's Voyager probes used gravity assists at Jupiter and Saturn to achieve solar escape velocity without needing extra fuel.",
      explore:
        "In a gravity assist, the spacecraft swings around a planet's trailing side to gain speed (or the leading side to slow down). The planet loses an imperceptibly small amount of orbital energy to the spacecraft. Cassini got its Jupiter gravity assist in 2000; DART targeted the Didymos system partly to calibrate gravity assist physics.",
      professional:
        "Vinf conservation: |v_∞_in| = |v_∞_out| in the planet's frame, but the direction changes by the deflection angle δ = 2 arcsin(1/(1+r_p v_∞²/GM_p)) where r_p is periapsis. Velocity change in Sun-frame: Δv = 2v_planet sin(δ/2). Voyager 2 gained ~12 km/s from its Jupiter flyby alone. Multiple gravity assists: MESSENGER made one Venus and two Mercury flybys before MOI. BepiColombo: 1 Earth, 2 Venus, 6 Mercury flybys before Mercury orbit insertion (2025–2026). Cassini-Huygens: 6.7-year cruise with 2 Venus, 1 Earth, 1 Jupiter gravity assist to reach Saturn orbit insertion (2004).",
    },
    relatedSlugs: ["voyager-program", "delta-v"],
  },
  {
    slug: "delta-v",
    term: "Delta-V",
    category: "missions",
    symbol: "Δv",
    definition: {
      discover:
        "The total change in velocity a spacecraft can achieve with its fuel supply. It's the single most important number in mission planning. Getting to the Moon requires about 6 km/s of delta-v from low Earth orbit; reaching Mars requires roughly 4 km/s. Chemical rockets have limited delta-v; ion engines produce far more for the same fuel mass.",
      explore:
        "Delta-v is calculated from the Tsiolkovsky rocket equation: Δv = v_exhaust × ln(m_initial/m_final). A higher exhaust velocity (specific impulse, or Isp) means more delta-v per kilogram of propellant. Chemical rockets (Isp ~450 s) are powerful but fuel-hungry; ion engines (Isp ~3,000 s) are highly efficient but low-thrust, suitable for deep-space cruise phases.",
      professional:
        "Tsiolkovsky equation: Δv = g₀ Isp ln(m_0/m_f). Specific impulse: Isp = F/(ṁ g₀). Chemical propellants: LOX/LH₂ Isp ~ 450 s (vacuum), LOX/RP-1 ~350 s. Ion propulsion (xenon): Isp ~ 3,000 s but F ~ 90 mN (Dawn). Solar-electric: power ∝ r⁻², limiting ion drive beyond ~3–4 AU. Hohmann transfer Earth–Mars: Δv ≈ 2.94 km/s from LEO departure + 2.09 km/s Mars orbit insertion. Low-energy transfers via invariant manifolds of Sun-Earth L1/L2 require Δv ~ 0.1 km/s — used by Genesis, GRAIL. Nuclear thermal (NTR, Isp ~900 s) would reduce Earth-Mars transit from ~7 months to ~4 months.",
    },
    relatedSlugs: ["gravity-assist", "voyager-program"],
  },
  {
    slug: "sample-return",
    term: "Sample Return",
    category: "missions",
    definition: {
      discover:
        "A space mission that collects material from another world and brings it back to Earth for laboratory analysis. Samples from the Moon (Apollo), asteroids (Hayabusa, Hayabusa2, OSIRIS-REx), comet dust (Stardust), and solar wind (Genesis) have revealed the building blocks of our solar system in extraordinary detail.",
      explore:
        "Sample return is valuable because Earth labs can perform analyses impossible with any spacecraft instrument — isotopic ratios to 6 decimal places, individual nanometer-scale mineral grains, and experiments designed after the mission returns. Hayabusa2 returned ~5.4 g from asteroid Ryugu; OSIRIS-REx returned 121.6 g from Bennu — the largest asteroid sample yet.",
      professional:
        "OSIRIS-REx sample mass: 121.6 g Bennu regolith (2023), dominated by hydrated silicates and carbon-rich organics consistent with Ivuna-type (CI) carbonaceous chondrites. Carbon content ~4.7 wt% — organically rich. Isotopic analysis: δ¹³C ≈ −10 to −15‰ VPDB range. Hayabusa2 Ryugu samples: serpentine, magnetite, Fe-sulfides, amino acids (glycine at ~60 ppm), and RNA precursor uracil detected (Oba et al. 2023). Mars Sample Return (MSR): Perseverance rover has cached 23 tubes; planned ESA Earth Return Orbiter + NASA Sample Retrieval Lander; target return ~2033–2035. Sample canister meets COSPAR planetary protection Category V (restricted Earth return).",
    },
    relatedSlugs: ["voyager-program", "delta-v", "gravity-assist"],
  },
  {
    slug: "heliosphere",
    term: "Heliosphere",
    category: "missions",
    definition: {
      discover:
        "The vast bubble of space dominated by the Sun's solar wind — a continuous stream of charged particles flowing outward. The heliosphere protects the solar system from most galactic cosmic rays. At its outer boundary (the heliopause), the solar wind meets interstellar space and is compressed to a stop.",
      explore:
        "The heliosphere extends 80–100 AU from the Sun in the upstream direction and is pushed into a tail downstream. Within it lie: the termination shock (where solar wind slows from ~400 to ~150 km/s, at ~85 AU), the heliosheath (turbulent region beyond), and the heliopause (boundary with interstellar medium). Voyager 1 and 2 crossed the heliopause at 121 and 119 AU respectively.",
      professional:
        "Solar wind ram pressure P_SW = ρ_SW v_SW² ≈ n_SW m_p v_SW². At 1 AU: n_SW ≈ 5–10 cm⁻³, v_SW ≈ 400 km/s, P_SW ≈ 2–3 nPa. Termination shock Rankine-Hugoniot conditions: density ratio r = (γ+1)/(γ−1+2/M²) → 4 for M >> 1 (M_A ~ 100 at shock). Voyager 1 data: absence of expected flow pattern in interstellar medium suggests a more symmetric heliosphere (no heliotail elongation). Interstellar magnetic field B_LISM ≈ 3 μG from Voyager magnetometer. IMAP mission (launch 2025) will map the global heliospheric structure using energetic neutral atoms.",
    },
    relatedSlugs: ["solar-wind", "voyager-program"],
  },
  {
    slug: "solar-wind",
    term: "Solar Wind",
    category: "missions",
    definition: {
      discover:
        "A constant stream of charged particles (mainly protons and electrons) flowing from the Sun in all directions at hundreds of kilometers per second. The solar wind shapes cometary tails (always pointing away from the Sun), drives auroras on planets with magnetospheres, and inflates the heliosphere.",
      explore:
        "The solar wind comes in two varieties: slow (~400 km/s, from equatorial regions) and fast (~700–800 km/s, from coronal holes at the poles). Coronal mass ejections (CMEs) are large bursts that can trigger geomagnetic storms. Parker Solar Probe has flown through the corona closer than any spacecraft, measuring the solar wind's origin region.",
      professional:
        "Parker Solar Probe (PSP): perihelion at 9.8 R☉ (2024), v_max ≈ 200 km/s (fastest human-made object). First sub-Alfvénic solar wind encounter (2021): within the Alfvén critical surface r_A ~ 10–20 R☉ where v_SW < v_A. Measurements: 'switchbacks' (rapid Bᵣ polarity reversals), dust-free zone below ~0.15 AU. Solar wind at 1 AU: n ≈ 5 cm⁻³, T_p ≈ 1.5×10⁵ K, T_e ≈ 1.4×10⁵ K, B ≈ 5 nT. CME leading edge speed: 250–3000 km/s; Dst index measures geomagnetic storm intensity (severe storm Dst < −100 nT). NOAA SWPC issues real-time space weather forecasts using ACE/DSCOVR L1 monitor data.",
    },
    relatedSlugs: ["heliosphere", "magnetosphere", "aurora"],
  },
  {
    slug: "aurora",
    term: "Aurora",
    category: "missions",
    definition: {
      discover:
        "Natural light displays in the sky near the polar regions, caused by solar wind particles funneling into Earth's atmosphere along magnetic field lines. When these particles collide with atmospheric oxygen and nitrogen, they emit colored light — green and red from oxygen, blue and purple from nitrogen.",
      explore:
        "Aurora occur in oval-shaped bands around the magnetic poles (aurora borealis in the north, aurora australis in the south). They are most vivid during and after geomagnetic storms triggered by coronal mass ejections. Jupiter, Saturn, Uranus, Neptune, and even some moons (including Ganymede) have their own auroras.",
      professional:
        "Auroral emission altitudes: 100–300 km. Green O line: 557.7 nm (forbidden ¹S→¹D, τ ≈ 0.7 s). Red O line: 630.0 nm (¹D→³P, τ ≈ 110 s). Blue N₂⁺ first negative system: 427.8 nm. Auroral Kp index: 0–9 scale; Kp ≥ 5 = geomagnetic storm. SuperDARN HF radar network measures ionospheric convection driven by Dungey cycle. Jupiter's UV aurora (HST): 10–30 GW power, driven partly by Io plasma torus current systems, partly by solar wind. JWST MIRI and NIRCam imaged Jupiter's IR aurora at unprecedented resolution (2022), revealing fine temporal variability correlated with solar wind dynamic pressure.",
    },
    relatedSlugs: ["solar-wind", "magnetosphere"],
  },
];

export default glossaryTerms;

export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export const GLOSSARY_CATEGORIES: Record<GlossaryCategory, string> = {
  "orbital-mechanics": "Orbital Mechanics",
  "stellar-physics": "Stellar Physics",
  "planetary-science": "Planetary Science",
  cosmology: "Cosmology",
  instrumentation: "Instrumentation",
  missions: "Missions & Exploration",
};
