export type QuizCategory =
  | "solar-system"
  | "exploration"
  | "astronomy"
  | "moons-and-small-bodies";

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  category: QuizCategory;
}

export const CATEGORY_LABELS: Record<QuizCategory, string> = {
  "solar-system":          "Solar System",
  "exploration":           "Space Exploration",
  "astronomy":             "Astronomy",
  "moons-and-small-bodies":"Moons & Small Bodies",
};

const Q = (
  id: string,
  question: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string,
  category: QuizCategory,
): QuizQuestion => ({ id, question, options, correctIndex, explanation, category });

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ── Solar System ────────────────────────────────────────────────────
  Q("ss01",
    "Which is the largest planet in our solar system?",
    ["Saturn", "Jupiter", "Neptune", "Uranus"],
    1,
    "Jupiter is so large that all other planets in the solar system could fit inside it — with room to spare.",
    "solar-system"),

  Q("ss02",
    "Which planet is closest to the Sun?",
    ["Venus", "Earth", "Mercury", "Mars"],
    2,
    "Mercury orbits just 57.9 million km from the Sun and completes a year in only 88 Earth days.",
    "solar-system"),

  Q("ss03",
    "Which planet is known as the 'Red Planet'?",
    ["Jupiter", "Venus", "Mercury", "Mars"],
    3,
    "Mars looks red because its surface is covered with iron oxide (rust). Its thin atmosphere does nothing to hide the colour.",
    "solar-system"),

  Q("ss04",
    "How long does sunlight take to reach Earth?",
    ["1 minute", "8 minutes", "20 minutes", "1 hour"],
    1,
    "The Sun is ~150 million km away. Light travels at ~300,000 km/s, so the journey takes just over 8 minutes.",
    "solar-system"),

  Q("ss05",
    "Which planet rotates on its side with an axial tilt of about 98°?",
    ["Saturn", "Neptune", "Uranus", "Venus"],
    2,
    "Uranus's extreme tilt means its poles get direct sunlight in summer and complete darkness in winter — each season lasts 21 years.",
    "solar-system"),

  Q("ss06",
    "What is Pluto classified as?",
    ["A planet", "A comet", "A dwarf planet", "An asteroid"],
    2,
    "The IAU reclassified Pluto as a dwarf planet in 2006 because it hasn't cleared its orbital neighbourhood of other debris.",
    "solar-system"),

  Q("ss07",
    "Which planet is the hottest in our solar system despite not being closest to the Sun?",
    ["Mercury", "Venus", "Earth", "Mars"],
    1,
    "Venus averages 465 °C — hotter than Mercury — because its thick CO₂ atmosphere traps heat in a runaway greenhouse effect.",
    "solar-system"),

  Q("ss08",
    "How many planets are in our solar system?",
    ["7", "8", "9", "10"],
    1,
    "Since Pluto's reclassification in 2006, the solar system has eight officially recognised planets.",
    "solar-system"),

  Q("ss09",
    "Which planet has the Great Red Spot?",
    ["Saturn", "Neptune", "Uranus", "Jupiter"],
    3,
    "Jupiter's Great Red Spot is a storm system larger than Earth that has been raging for at least 350 years, though it has been slowly shrinking.",
    "solar-system"),

  Q("ss10",
    "What does 'AU' stand for in astronomy?",
    ["Atmospheric Unit", "Astronomical Unit", "Azimuth Unit", "Atomic Uncertainty"],
    1,
    "One Astronomical Unit equals the average Earth–Sun distance (~150 million km). It's used to measure distances inside the solar system.",
    "solar-system"),

  Q("ss11",
    "Which planet has the shortest day in our solar system?",
    ["Earth", "Mars", "Jupiter", "Saturn"],
    2,
    "Jupiter rotates once every 9.9 hours — its rapid spin contributes to its flattened poles and powerful storm bands.",
    "solar-system"),

  Q("ss12",
    "What is the smallest planet in our solar system?",
    ["Pluto", "Mars", "Mercury", "Venus"],
    2,
    "Mercury has a diameter of just 4,879 km — slightly larger than Earth's Moon. It lost the 'smallest' record when Pluto was reclassified.",
    "solar-system"),

  Q("ss13",
    "What causes the seasons on Earth?",
    ["Earth's distance from the Sun changing", "Solar flares", "Earth's axial tilt", "Moon's gravitational pull"],
    2,
    "Earth's 23.5° axial tilt means hemispheres receive different amounts of sunlight throughout the year. Distance from the Sun changes by only ~3%.",
    "solar-system"),

  Q("ss14",
    "Which planet has rings easily visible through a backyard telescope?",
    ["Jupiter", "Uranus", "Neptune", "Saturn"],
    3,
    "Saturn's rings, made mostly of ice and rock, span 282,000 km and are visible through even a modest telescope.",
    "solar-system"),

  Q("ss15",
    "What is the tallest volcano in the solar system?",
    ["Mauna Kea, Earth", "Olympus Mons, Mars", "Maat Mons, Venus", "Mons Rümker, Moon"],
    1,
    "Olympus Mons on Mars stands ~22 km high — nearly three times the height of Everest. Mars's weak gravity allowed it to grow without collapsing.",
    "solar-system"),

  // ── Space Exploration ────────────────────────────────────────────────
  Q("ex01",
    "Who was the first human to walk on the Moon?",
    ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"],
    2,
    "Neil Armstrong stepped onto the lunar surface on July 20, 1969 during Apollo 11. Buzz Aldrin followed 20 minutes later.",
    "exploration"),

  Q("ex02",
    "Who was the first person to travel to space?",
    ["Neil Armstrong", "Alan Shepard", "Valentina Tereshkova", "Yuri Gagarin"],
    3,
    "Soviet cosmonaut Yuri Gagarin became the first human in space on April 12, 1961, completing one orbit of Earth in Vostok 1.",
    "exploration"),

  Q("ex03",
    "What was the first artificial satellite to orbit Earth?",
    ["Explorer 1", "Sputnik 1", "Vostok 1", "Telstar"],
    1,
    "The Soviet Union launched Sputnik 1 on October 4, 1957, kickstarting the Space Race and the age of satellites.",
    "exploration"),

  Q("ex04",
    "Which spacecraft first flew past Pluto?",
    ["Voyager 2", "New Horizons", "Pioneer 10", "Cassini"],
    1,
    "NASA's New Horizons flew past Pluto in July 2015, revealing its heart-shaped plain (Tombaugh Regio) for the first time.",
    "exploration"),

  Q("ex05",
    "Which mission first orbited Saturn and landed on Titan?",
    ["Voyager 1", "Pioneer 11", "New Horizons", "Cassini-Huygens"],
    3,
    "Cassini orbited Saturn from 2004 to 2017; its Huygens probe landed on Titan in 2005 — the most distant landing ever achieved at the time.",
    "exploration"),

  Q("ex06",
    "What was NASA's first successful Mars rover?",
    ["Curiosity", "Spirit", "Opportunity", "Sojourner"],
    3,
    "Sojourner landed in 1997 as part of Mars Pathfinder. Though tiny (10.6 kg), it proved Mars rovers were viable and paved the way for later missions.",
    "exploration"),

  Q("ex07",
    "Where does the Hubble Space Telescope orbit?",
    ["Between Earth and the Moon", "Low Earth orbit", "At the L2 Lagrange point", "In a geostationary orbit"],
    1,
    "Hubble orbits Earth at ~547 km altitude, completing an orbit every 95 minutes — above the blurring effects of our atmosphere.",
    "exploration"),

  Q("ex08",
    "What type of light does the James Webb Space Telescope primarily observe?",
    ["Gamma rays", "X-rays", "Infrared", "Ultraviolet"],
    2,
    "Webb observes in infrared, allowing it to peer through dust clouds, see the coolest objects in the universe, and study the earliest galaxies.",
    "exploration"),

  Q("ex09",
    "What is the outer boundary of the solar wind called?",
    ["The heliosphere", "The heliopause", "The Oort Cloud", "The magnetosphere"],
    1,
    "The heliopause is where the solar wind meets interstellar space. Voyager 1 crossed it in 2012, becoming the first human-made object in interstellar space.",
    "exploration"),

  Q("ex10",
    "Which rover is currently operating on Mars as of 2025?",
    ["Spirit", "Opportunity", "Perseverance", "Sojourner"],
    2,
    "NASA's Perseverance rover landed in Jezero Crater in February 2021 and continues to search for signs of ancient microbial life.",
    "exploration"),

  // ── Astronomy ────────────────────────────────────────────────────────
  Q("as01",
    "What is a light-year?",
    ["The age of a star in years", "The distance light travels in a year", "A unit of time", "The mass of the Sun"],
    1,
    "A light-year is the distance light travels in one year — about 9.46 trillion kilometres — used to measure vast interstellar distances.",
    "astronomy"),

  Q("as02",
    "How old is the universe?",
    ["4.6 billion years", "6.5 billion years", "13.8 billion years", "100 billion years"],
    2,
    "Based on the cosmic microwave background and the universe's expansion rate, scientists estimate the universe is 13.8 billion years old.",
    "astronomy"),

  Q("as03",
    "What type of galaxy is the Milky Way?",
    ["Elliptical", "Irregular", "Lenticular", "Spiral"],
    3,
    "The Milky Way is a barred spiral galaxy with a central bar-shaped bulge and spiral arms. Our solar system sits in the Orion Arm.",
    "astronomy"),

  Q("as04",
    "What is a black hole?",
    ["A very cold region of space", "A region where gravity is so strong nothing can escape", "A type of galaxy", "A collapsed white dwarf"],
    1,
    "A black hole forms when a massive star collapses. Its gravity is so extreme that not even light can escape from within its event horizon.",
    "astronomy"),

  Q("as05",
    "How does the Sun produce energy?",
    ["Chemical combustion", "Nuclear fission", "Nuclear fusion", "Radioactive decay"],
    2,
    "The Sun fuses hydrogen into helium in its core at ~15 million °C, releasing enormous energy — roughly equivalent to billions of nuclear bombs per second.",
    "astronomy"),

  Q("as06",
    "How far is Proxima Centauri, our nearest stellar neighbour?",
    ["4.24 light-years", "400 light-years", "4,200 light-years", "42 light-years"],
    0,
    "Proxima Centauri is 4.24 light-years away. At typical spacecraft speeds it would take tens of thousands of years to reach.",
    "astronomy"),

  Q("as07",
    "What colour is the Sun when viewed from space?",
    ["Yellow", "Orange", "White", "Blue-white"],
    2,
    "The Sun appears yellow from Earth due to atmospheric scattering, but it emits light across all visible wavelengths and is actually white.",
    "astronomy"),

  Q("as08",
    "What is a nebula?",
    ["A type of black hole", "A cloud of gas and dust in space", "A galaxy with no stars", "A type of neutron star"],
    1,
    "Nebulae are clouds of gas and dust. Some are remnants of dead stars; others are stellar nurseries where new stars are forming.",
    "astronomy"),

  Q("as09",
    "What is tidal locking?",
    ["When Earth's tides slow a moon's orbit", "When a moon's rotation matches its orbital period", "When tides cause earthquakes", "A type of gravitational wave"],
    1,
    "Tidal locking occurs when gravity slows a moon's rotation until it matches its orbital period — why we always see the same face of our Moon.",
    "astronomy"),

  Q("as10",
    "What is dark matter?",
    ["Matter that absorbs all light", "Matter that doesn't emit light but exerts gravity", "Gas between galaxies", "Collapsed stars"],
    1,
    "Dark matter doesn't interact with light but its gravitational effects are detectable. It makes up ~27% of the universe's total energy content.",
    "astronomy"),

  // ── Moons & Small Bodies ─────────────────────────────────────────────
  Q("ms01",
    "What is the largest moon in the solar system?",
    ["Earth's Moon", "Titan", "Callisto", "Ganymede"],
    3,
    "Ganymede, a moon of Jupiter, is larger than the planet Mercury and has its own magnetic field — the only moon in the solar system with one.",
    "moons-and-small-bodies"),

  Q("ms02",
    "Which moon of Saturn might harbour microbial life?",
    ["Titan", "Enceladus", "Mimas", "Rhea"],
    1,
    "Enceladus has geysers of water vapour erupting from a subsurface liquid ocean, making it one of the most promising places to look for life.",
    "moons-and-small-bodies"),

  Q("ms03",
    "Which moon of Jupiter is the most volcanically active body in the solar system?",
    ["Europa", "Callisto", "Ganymede", "Io"],
    3,
    "Io is caught between Jupiter's immense gravity and the gravity of other moons, generating intense tidal heating that powers hundreds of active volcanoes.",
    "moons-and-small-bodies"),

  Q("ms04",
    "What is the Kuiper Belt?",
    ["A ring around Saturn", "A band of gas between Jupiter and Saturn", "A region of icy bodies beyond Neptune", "The asteroid belt"],
    2,
    "The Kuiper Belt is a disc of icy objects beyond Neptune's orbit, home to Pluto, Eris, and thousands of smaller bodies.",
    "moons-and-small-bodies"),

  Q("ms05",
    "What is thought to lie beneath Europa's icy surface?",
    ["Solid rock", "Liquid water", "Liquid methane", "Lava"],
    1,
    "Europa's smooth, cracked surface suggests a vast liquid water ocean beneath its ice shell — possibly twice the volume of all Earth's oceans.",
    "moons-and-small-bodies"),

  Q("ms06",
    "Which body has lakes of liquid methane on its surface?",
    ["Europa", "Titan", "Pluto", "Io"],
    1,
    "Saturn's moon Titan has a thick nitrogen atmosphere and surface lakes of liquid methane and ethane — the only stable surface liquids found beyond Earth.",
    "moons-and-small-bodies"),

  Q("ms07",
    "What type of object is Ceres?",
    ["A comet", "A moon", "A planet", "A dwarf planet"],
    3,
    "Ceres is the largest object in the asteroid belt and the only dwarf planet in the inner solar system. NASA's Dawn spacecraft orbited it from 2015 to 2018.",
    "moons-and-small-bodies"),

  Q("ms08",
    "Where is the asteroid belt located?",
    ["Between Earth and Mars", "Between Mars and Jupiter", "Between Jupiter and Saturn", "Beyond Neptune"],
    1,
    "The asteroid belt lies between the orbits of Mars and Jupiter, containing millions of rocky and metallic objects ranging from dust to hundreds of kilometres wide.",
    "moons-and-small-bodies"),

  Q("ms09",
    "How many natural moons does Earth have?",
    ["0", "1", "2", "3"],
    1,
    "Earth has one natural satellite — the Moon. It is the fifth-largest moon in the solar system and the largest relative to its host planet.",
    "moons-and-small-bodies"),

  Q("ms10",
    "What causes a comet to develop a glowing tail?",
    ["Friction with asteroids", "Solar wind and radiation vaporising icy material", "Atmospheric re-entry", "Volcanic activity"],
    1,
    "As a comet approaches the Sun, solar wind and radiation vaporise its icy nucleus, creating a bright coma and one or two tails pointing away from the Sun.",
    "moons-and-small-bodies"),
];
