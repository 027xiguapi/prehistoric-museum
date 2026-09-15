// The zoo park's fixed layout.
//
// Animals are placed at life size: the museum's runtime models are normalised
// to metres, so an apatosaurus really is ~22 m long next to a 1.75 m explorer.
// Every distance below is therefore written in metres and the park is a
// 320 × 240 m tabletop valley.
//
// Coordinates follow the museum convention: `x` runs east, `z` runs south
// (toward the default camera), `y` is up.

export const PARK = {
  /** Full terrain extent: x ∈ [-160, 160]. */
  width: 320,
  /** Full terrain extent: z ∈ [-120, 120]. */
  depth: 240,
  /** The explorer is confined inside this box; the outer ring is raised rim. */
  walkX: 146,
  walkZ: 108,
  skirtBottom: -14,
} as const

export const WATER_LEVEL = 0

export const SPAWN = { x: 0, z: 104, facing: Math.PI } as const

/**
 * An escarpment across the whole park divides the warm south (plains and
 * forest) from the cold north (ice and lagoon). Its crest carries the
 * pterosaur perches. Both flanks are gentle enough to walk up.
 */
export const RIDGE = {
  southFoot: -22,
  southCrest: -36,
  northCrest: -44,
  northFoot: -58,
  height: 7.6,
} as const

/** The lagoon lake: an elliptical basin in the north-east with a sandy beach. */
export const LAKE = {
  cx: 86,
  cz: -92,
  rx: 56,
  rz: 22,
  depth: 7,
  /** Normalised distance where the waterline sits. */
  waterline: 0.82,
  /** Normalised distance where the beach berm peaks. */
  berm: 1.06,
  bermHeight: 2.2,
} as const

export type ZoneId = 'meadow' | 'plains' | 'forest' | 'ice' | 'lagoon' | 'ridge'

export interface ZoneDefinition {
  readonly id: ZoneId
  /** Base ground tone. */
  readonly ground: string
  /** Secondary tone blended in by noise so the biome never looks flat. */
  readonly groundAccent: string
  /** Where the zone's ridge/berm rock reads through. */
  readonly rock: string
  /** Saturated tone used for the exhibit label bar and park signage. */
  readonly accent: string
}

export const ZONES: Readonly<Record<ZoneId, ZoneDefinition>> = {
  meadow: {
    id: 'meadow',
    ground: '#8fb85a',
    groundAccent: '#6f9c46',
    rock: '#9c8f7c',
    accent: '#5f8f3c',
  },
  plains: {
    id: 'plains',
    ground: '#cbb469',
    groundAccent: '#a8b45c',
    rock: '#a8916d',
    accent: '#a8802a',
  },
  forest: {
    id: 'forest',
    ground: '#4f7a3f',
    groundAccent: '#39602f',
    rock: '#7d7364',
    accent: '#356859',
  },
  ice: {
    id: 'ice',
    ground: '#e4eef5',
    groundAccent: '#c6dbe9',
    rock: '#9aa7b2',
    accent: '#3f7fa6',
  },
  lagoon: {
    id: 'lagoon',
    ground: '#dfd0a4',
    groundAccent: '#c9bd93',
    rock: '#9c8f7c',
    accent: '#2c7f9e',
  },
  ridge: {
    id: 'ridge',
    ground: '#a9a05e',
    groundAccent: '#8d854e',
    rock: '#9c8f7c',
    accent: '#8a6f45',
  },
} as const

export function zoneAt(x: number, z: number): ZoneId {
  if (z <= RIDGE.southFoot && z >= RIDGE.northFoot) {
    return 'ridge'
  }
  if (z < RIDGE.northFoot) {
    return x < 14 ? 'ice' : 'lagoon'
  }
  if (Math.abs(x) <= 16) {
    return 'meadow'
  }
  return x < 0 ? 'plains' : 'forest'
}

/** How the exhibit sits in the park. */
export type SiteMode = 'land' | 'water' | 'perch' | 'fly'

export interface AnimalSite {
  readonly animalId: string
  readonly zone: ZoneId
  /** Exhibit centre in metres. */
  readonly x: number
  readonly z: number
  /** Direction the animal faces; `0` faces south (+z, toward the camera). */
  readonly facing: number
  readonly mode: SiteMode
  /**
   * Where a visitor stands to look at the exhibit. Snapped to the nearest
   * walkable cell when the park builds, so it only has to be roughly right.
   */
  readonly station: readonly [number, number]
  /**
   * Horizontal footprint used for navigation blocking and the paddock fence.
   * Zero means the exhibit never blocks the player.
   */
  readonly radius: number
  /** Perched height above the ground, for `perch` sites. */
  readonly perchHeight?: number
  /** Hover height above the ground, for `fly` sites. */
  readonly flyHeight?: number
  /** Radius of the circular flight path, for `fly` sites. */
  readonly flyRadius?: number
  /** Landing height offset for `water` sites, as a fraction of body height. */
  readonly sinkFraction?: number
  /** A fenced paddock is drawn for this exhibit. */
  readonly paddock?: boolean
}

/**
 * Eighteen published exhibits from the museum's main collection, grouped by
 * the same atmosphere the exhibit uses in the museum so the walk keeps the
 * museum's own zoning.
 *
 * `radius` is the exhibit's ground footprint, and it is derived from the size
 * fact the museum publishes for that animal (`modelScaleForSizeFact` scales
 * the model to the same fact), so a paddock always matches the animal inside
 * it:
 *
 *   radius ≈ 0.55 × body length, with a little extra room for the biggest
 *   exhibits. Water and flying exhibits never block the visitor, so their
 *   radius is zero.
 *
 * The three pterosaurs are airborne rather than perched: their published
 * models are posed mid-glide, so standing them on a rock would read as a
 * collapsed animal, and circling the escarpment is both truer to the model and
 * easier to see from the trail below.
 */
export const SITES: readonly AnimalSite[] = [
  // ------------------------------------------------ plains (south-west)
  {
    animalId: 'apatosaurus',
    zone: 'plains',
    x: -112,
    z: 46,
    facing: 0.9,
    mode: 'land',
    station: [-112, 60],
    radius: 7.6,
    paddock: true,
  },
  {
    animalId: 'maiasaura',
    zone: 'plains',
    x: -118,
    z: 96,
    facing: -0.6,
    mode: 'land',
    station: [-110, 101],
    radius: 4,
    paddock: true,
  },
  {
    animalId: 'triceratops',
    zone: 'plains',
    x: -62,
    z: 78,
    facing: 2.3,
    mode: 'land',
    station: [-53, 72],
    radius: 4.2,
    paddock: true,
  },
  {
    animalId: 'sauropelta',
    zone: 'plains',
    x: -66,
    z: 18,
    facing: 1.4,
    mode: 'land',
    station: [-60, 13],
    radius: 2.8,
    paddock: true,
  },
  {
    animalId: 'dilophosaurus',
    zone: 'plains',
    x: -30,
    z: 88,
    facing: -1.1,
    mode: 'land',
    station: [-25, 94],
    radius: 3.4,
    paddock: true,
  },
  {
    animalId: 'gigantoraptor',
    zone: 'plains',
    x: -104,
    z: -6,
    facing: 0.5,
    mode: 'land',
    station: [-98, -10],
    radius: 4,
    paddock: true,
  },

  // ------------------------------------------------ forest (south-east)
  {
    animalId: 'stegosaurus',
    zone: 'forest',
    x: 62,
    z: 76,
    facing: -0.6,
    mode: 'land',
    station: [53, 70],
    radius: 4.2,
    paddock: true,
  },
  {
    animalId: 'tyrannosaurus-rex',
    zone: 'forest',
    x: 112,
    z: 34,
    facing: 2.6,
    mode: 'land',
    station: [102, 42],
    radius: 5.4,
    paddock: true,
  },
  {
    animalId: 'pachycephalosaurus',
    zone: 'forest',
    x: 86,
    z: 100,
    facing: 0.9,
    mode: 'land',
    station: [78, 104],
    radius: 1.9,
    paddock: true,
  },

  // -------------------------------------------------------- ice (north-west)
  {
    animalId: 'mammoth',
    zone: 'ice',
    x: -88,
    z: -86,
    facing: 0.4,
    mode: 'land',
    station: [-82, -80],
    radius: 2.8,
    paddock: true,
  },

  // ------------------------------------------- lagoon (north-east, water)
  {
    animalId: 'ichthyosaur',
    zone: 'lagoon',
    x: 56,
    z: -80,
    facing: 1.9,
    mode: 'water',
    station: [52, -67],
    radius: 0,
    sinkFraction: 0.36,
  },
  {
    animalId: 'plesiosaurus',
    zone: 'lagoon',
    x: 80,
    z: -78,
    facing: 2.4,
    mode: 'water',
    station: [80, -67],
    radius: 0,
    sinkFraction: 0.3,
  },
  {
    animalId: 'mosasaurus',
    zone: 'lagoon',
    x: 104,
    z: -80,
    facing: 2.9,
    mode: 'water',
    station: [104, -67],
    radius: 0,
    sinkFraction: 0.34,
  },
  {
    animalId: 'megalodon',
    zone: 'lagoon',
    x: 124,
    z: -82,
    facing: 2.2,
    mode: 'water',
    station: [126, -67],
    radius: 0,
    sinkFraction: 0.5,
  },

  // ---------------------------------------------- aerial, over the crest
  {
    animalId: 'pteranodon',
    zone: 'ridge',
    x: -46,
    z: -40,
    facing: 1.5,
    mode: 'fly',
    flyHeight: 5.5,
    flyRadius: 16,
    station: [-46, -20],
    radius: 0,
  },
  {
    animalId: 'tupandactylus',
    zone: 'ridge',
    x: 44,
    z: -40,
    facing: 1.7,
    mode: 'fly',
    flyHeight: 4.5,
    flyRadius: 11,
    station: [44, -20],
    radius: 0,
  },
  {
    animalId: 'rhamphorhynchus',
    zone: 'ridge',
    x: 96,
    z: -39,
    facing: 1.2,
    mode: 'fly',
    flyHeight: 3.6,
    flyRadius: 7,
    station: [96, -20],
    radius: 0,
  },
  {
    animalId: 'meganeura',
    zone: 'lagoon',
    x: 26,
    z: -66,
    facing: 0,
    mode: 'fly',
    flyHeight: 4.2,
    flyRadius: 7,
    station: [30, -62],
    radius: 0,
  },
]

export const SITE_BY_ID: ReadonlyMap<string, AnimalSite> = new Map(
  SITES.map((site) => [site.animalId, site]),
)

/** Guided-tour order: warm south, then the ridge, then the cold north. */
export const TOUR_ROUTE: readonly string[] = [
  'dilophosaurus',
  'triceratops',
  'maiasaura',
  'apatosaurus',
  'sauropelta',
  'gigantoraptor',
  'stegosaurus',
  'pachycephalosaurus',
  'tyrannosaurus-rex',
  'pteranodon',
  'tupandactylus',
  'rhamphorhynchus',
  'mammoth',
  'meganeura',
  'ichthyosaur',
  'plesiosaurus',
  'mosasaurus',
  'megalodon',
]

/**
 * The visitor trail, painted onto the terrain and used as the tour's road.
 * It climbs the ridge twice (west to the ice, east to the lagoon) so the walk
 * always has a shape to follow.
 */
export const PATH_POINTS: readonly (readonly [number, number])[] = [
  // Warm south loop, west from the gate.
  [0, 104], [-34, 98], [-72, 84], [-106, 60], [-132, 28], [-140, 4],
  [-124, -10], [-86, -16], [-44, -17], [-14, -19],
  // Up the ridge's south flank.
  [0, -30], [0, -40],
  // Along the crest, west.
  [-34, -41], [-70, -41], [-100, -41],
  // Down into the ice field and around it.
  [-114, -52], [-118, -72], [-100, -90], [-72, -96], [-46, -86], [-26, -70],
  [-16, -52], [-4, -41],
  // Back along the crest, east.
  [34, -41], [70, -41], [100, -41],
  // Down to the lagoon beach and along the waterline.
  [112, -56], [96, -63], [60, -64], [30, -64], [18, -56], [10, -44],
  // Back over the crest, then home through the forest.
  [2, -30], [6, -24], [4, -17], [30, -14], [58, 8], [78, 36], [92, 64],
  [76, 92], [40, 104], [0, 104],
]
