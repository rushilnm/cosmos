"use client";

import { useState, useMemo } from "react";
import GlassPanel from "@/components/ui/GlassPanel";

interface GlossaryEntry {
  term: string;
  definition: string;
  category: string;
}

const ENTRIES: GlossaryEntry[] = [
  { term: "Astronomical Unit (AU)", definition: "The average distance between the Earth and the Sun — about 150 million kilometres. Used as a convenient yardstick for measuring distances inside the solar system.", category: "Measurement" },
  { term: "Atmosphere", definition: "The layer of gases surrounding a planet or moon, held in place by gravity. Earth's atmosphere is what makes life possible.", category: "Planetary Science" },
  { term: "Axial tilt", definition: "The angle between a planet's rotation axis and the perpendicular to its orbital plane. Earth's 23.5° tilt creates the seasons.", category: "Planetary Science" },
  { term: "Big Bang", definition: "The cosmological model describing the origin of the universe from an extremely hot, dense state approximately 13.8 billion years ago.", category: "Cosmology" },
  { term: "Black hole", definition: "A region of spacetime where gravity is so strong that nothing — not even light — can escape. Forms when a massive star collapses.", category: "Astrophysics" },
  { term: "Comet", definition: "A small icy body that, when near the Sun, displays a visible coma (fuzzy atmosphere) and often a tail caused by the solar wind.", category: "Small Bodies" },
  { term: "Constellation", definition: "A named pattern of stars as seen from Earth. The IAU officially recognises 88 constellations covering the entire sky.", category: "Observational" },
  { term: "Corona", definition: "The outermost layer of the Sun's atmosphere, visible during a total solar eclipse. Mysteriously hotter than the surface below it.", category: "Solar Science" },
  { term: "Cosmic microwave background (CMB)", definition: "Thermal radiation left over from about 380,000 years after the Big Bang, when the universe cooled enough for atoms to form.", category: "Cosmology" },
  { term: "Dark energy", definition: "A mysterious form of energy making up ~68% of the universe and driving its accelerating expansion. Its nature is unknown.", category: "Cosmology" },
  { term: "Dark matter", definition: "A hypothetical form of matter that doesn't emit light but can be detected by its gravitational effects. Makes up ~27% of the universe.", category: "Cosmology" },
  { term: "Dwarf planet", definition: "A celestial body that orbits the Sun and has enough mass for gravity to make it round, but has not cleared its orbital neighbourhood. Examples: Pluto, Ceres, Eris.", category: "Planetary Science" },
  { term: "Eccentricity", definition: "A measure of how elliptical (non-circular) an orbit is. An eccentricity of 0 is a perfect circle; closer to 1 means a more elongated ellipse.", category: "Orbital Mechanics" },
  { term: "Event horizon", definition: "The boundary around a black hole beyond which nothing can escape. It is not a physical surface but a point of no return.", category: "Astrophysics" },
  { term: "Exoplanet", definition: "A planet that orbits a star other than the Sun. Over 5,700 have been confirmed as of 2025.", category: "Exoplanets" },
  { term: "Galaxy", definition: "A gravitationally bound system of stars, gas, dust, and dark matter. The Milky Way contains 200–400 billion stars.", category: "Cosmology" },
  { term: "Gravitational lensing", definition: "The bending of light from a distant object by the gravity of a massive body in the foreground, predicted by general relativity.", category: "Astrophysics" },
  { term: "Greenhouse effect", definition: "The trapping of heat in a planet's atmosphere by gases such as CO₂ and water vapour. A moderate effect keeps Earth habitable; a runaway effect makes Venus hellish.", category: "Planetary Science" },
  { term: "Habitable zone", definition: "The range of distances from a star where liquid water could exist on a planet's surface. Also called the 'Goldilocks zone.'", category: "Exoplanets" },
  { term: "Heliopause", definition: "The boundary where the solar wind meets interstellar space. Voyager 1 crossed it in 2012, becoming the first human-made object in interstellar space.", category: "Solar Science" },
  { term: "Kuiper Belt", definition: "A region of the outer solar system beyond Neptune's orbit, home to many icy small bodies including Pluto, Eris, and Makemake.", category: "Small Bodies" },
  { term: "Light-year", definition: "The distance light travels in one year — about 9.46 trillion kilometres. Used to measure distances between stars and galaxies.", category: "Measurement" },
  { term: "Main sequence", definition: "The stage in a star's life when it is fusing hydrogen in its core. The Sun is currently on the main sequence and has been for 4.6 billion years.", category: "Stellar Science" },
  { term: "Meteor", definition: "The flash of light produced when a meteoroid burns up in Earth's atmosphere. Commonly called a 'shooting star.'", category: "Small Bodies" },
  { term: "Meteorite", definition: "A meteoroid that survives its passage through the atmosphere and reaches Earth's surface.", category: "Small Bodies" },
  { term: "Moon (natural satellite)", definition: "A natural body in orbit around a planet or other non-stellar object. Our Moon is Earth's only natural satellite.", category: "Planetary Science" },
  { term: "Nebula", definition: "A cloud of gas and dust in space. Some are remnants of dead stars; others are stellar nurseries where new stars are forming.", category: "Stellar Science" },
  { term: "Neutron star", definition: "The dense core remnant of a massive star after a supernova explosion, composed almost entirely of neutrons and only ~20 km in diameter.", category: "Stellar Science" },
  { term: "Nuclear fusion", definition: "The process by which light atomic nuclei combine to form heavier nuclei, releasing enormous energy. Powers stars including the Sun.", category: "Astrophysics" },
  { term: "Oort Cloud", definition: "A vast, spherical shell of icy bodies surrounding the solar system, thought to be the source of long-period comets.", category: "Small Bodies" },
  { term: "Orbit", definition: "The curved path of an object around another body due to gravity. All planets orbit the Sun in ellipses, as described by Kepler's laws.", category: "Orbital Mechanics" },
  { term: "Parsec", definition: "A unit of distance equal to 3.26 light-years, used by astronomers. Short for 'parallax arcsecond.'", category: "Measurement" },
  { term: "Photosphere", definition: "The visible 'surface' of the Sun — the layer from which its light is emitted. Its temperature is about 5,500 °C.", category: "Solar Science" },
  { term: "Planet", definition: "A body orbiting the Sun that (1) has enough mass to be roughly spherical, (2) has cleared its orbital neighbourhood. The solar system has eight planets.", category: "Planetary Science" },
  { term: "Pulsar", definition: "A rapidly rotating neutron star that emits beams of electromagnetic radiation from its magnetic poles, detected as regular pulses.", category: "Stellar Science" },
  { term: "Red dwarf", definition: "The smallest and coolest type of main-sequence star. They are the most common stars in the Milky Way and can burn for trillions of years.", category: "Stellar Science" },
  { term: "Red giant", definition: "A late stage in the evolution of a star like the Sun, where it expands enormously as hydrogen in the core is exhausted.", category: "Stellar Science" },
  { term: "Retrograde rotation", definition: "Rotation in the direction opposite to the majority of objects in the solar system. Venus and Uranus spin retrograde.", category: "Planetary Science" },
  { term: "Solar flare", definition: "An intense burst of radiation from the Sun's surface, associated with sunspot activity. Can disrupt communications on Earth.", category: "Solar Science" },
  { term: "Solar wind", definition: "A stream of charged particles (mostly electrons and protons) continuously expelled from the Sun's corona into interplanetary space.", category: "Solar Science" },
  { term: "Spectroscopy", definition: "The study of how matter absorbs and emits light at specific wavelengths. Used to determine the chemical composition of stars and planets.", category: "Techniques" },
  { term: "Supernova", definition: "A powerful stellar explosion that occurs when a massive star exhausts its fuel and its core collapses — or when a white dwarf in a binary system accretes too much mass.", category: "Stellar Science" },
  { term: "Tidal locking", definition: "When a moon's orbital period matches its rotation period so the same face always points toward its parent body. Our Moon is tidally locked to Earth.", category: "Orbital Mechanics" },
  { term: "Transit", definition: "When a planet passes in front of its host star as seen from Earth, causing a small dip in observed starlight. Used to detect exoplanets.", category: "Techniques" },
  { term: "White dwarf", definition: "The dense, Earth-sized remnant of a low-to-medium mass star after it has shed its outer layers. It slowly cools over billions of years.", category: "Stellar Science" },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(ENTRIES.map((e) => e.category))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ENTRIES.filter((e) => {
      const matchesSearch =
        !q || e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q);
      const matchesCategory = !activeCategory || e.category === activeCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryEntry[]> = {};
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(entry);
    }
    return map;
  }, [filtered]);

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-white mb-4">Glossary</h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            Plain-language definitions for every space term you'll encounter in COSMOS.
          </p>
        </section>

        {/* Search */}
        <div className="mb-6">
          <label htmlFor="glossary-search" className="sr-only">
            Search glossary
          </label>
          <input
            id="glossary-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms…"
            className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filter by category"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              !activeCategory
                ? "bg-white/20 border-white/30 text-white"
                : "bg-white/5 border-white/10 text-white/50 hover:border-white/20"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-white/20 border-white/30 text-white"
                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {Object.keys(grouped).length === 0 ? (
          <p className="text-white/40 text-center py-16">No matching terms found.</p>
        ) : (
          <div className="grid gap-4">
            {Object.entries(grouped)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([letter, entries]) => (
                <section key={letter} aria-label={`Terms starting with ${letter}`}>
                  <h2
                    className="text-sm uppercase tracking-widest text-white/30 mb-3 pl-1"
                    aria-hidden
                  >
                    {letter}
                  </h2>
                  <div className="grid gap-2">
                    {entries.map((entry) => (
                      <GlassPanel
                        key={entry.term}
                        as="article"
                        className="p-4"
                        aria-label={entry.term}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-1">{entry.term}</h3>
                            <p className="text-white/65 text-sm leading-relaxed">
                              {entry.definition}
                            </p>
                          </div>
                          <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-white/10 text-white/30 mt-0.5">
                            {entry.category}
                          </span>
                        </div>
                      </GlassPanel>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}
      </div>
    </main>
  );
}
