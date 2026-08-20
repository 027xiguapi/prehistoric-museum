import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Blue Morpho Butterfly",
  classificationLabel: "Rainforest butterfly (structural blue)",
  visibleFeature: "Look at the brilliant blue upper wings — not paint, but light refracted by millions of scales.",
  narration: {
    sentences: [
          "This is the blue morpho, a flying sapphire of the American rainforest.",
          "The underside of its wings is dull brown — close them and it vanishes."
    ],
    pronunciation: [
      {
        text: "Blue Morpho Butterfly",
        reading: "bloo MOR-foh",
      },
    ],
  },
  facts: {
    period: "Present day (brush-footed butterfly family tens of millions of years old)",
    discoveryRegions: ["rainforests of Central and South America"],
        size: {
      kind: 'wingspan',
      minMeters: 0.12,
      maxMeters: 0.15,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The morpho’s blue is structural: Christmas-tree-shaped nanostructures on the scales reflect only blue wavelengths, so the colour shifts with angle and darkens when wet. That flashing flight makes it hard for predators to track. Adults can only drink — their menu is fermenting fruit, tree sap and juices from carrion. Caterpillars feed on legumes and wear irritating hairs. Indigenous artisans have long set morpho wings into jewellery and crafts.",
  sources: [
    {
        "title": "Morpho — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Morpho",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Blue morpho — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/morpho-butterfly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The wingspan covers the blue morpho; other Morpho species differ.",
            "The butterfly-wing craft trade today relies largely on farmed butterflies."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
