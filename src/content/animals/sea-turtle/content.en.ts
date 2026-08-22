import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Sea Turtle",
  classificationLabel: "Marine turtle",
  visibleFeature: "Look at its flipper-like limbs — steady and swift in the water.",
  narration: {
    sentences: [
          "This is the sea turtle, the long-distance sailor of the oceans.",
          "Its legs have turned into paddles, making it a strong swimmer."
    ],
    pronunciation: [
      {
        text: "Sea Turtle",
        reading: "SEE TUR-tl",
      },
    ],
  },
  facts: {
    period: "Present day (sea turtles around 110 million years old)",
    discoveryRegions: ["Tropical and temperate seas worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.4,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Sea turtles spend almost their whole lives at sea; only females come ashore to nest. They navigate with a magnetic “map” and cross entire oceans to nest on the beaches where they hatched. Sand temperature decides the hatchlings’ sex — warmer sands produce more females. Some live past a hundred years, though plastic and fishing nets now endanger them.",
  sources: [
    {
        "title": "Sea turtle — 美国国家海洋与大气局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/sea-turtles",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Sea turtle — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/sea-turtle",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page covers large species such as the green turtle; sizes are approximate carapace lengths.",
            "Magnetic-navigation mechanisms remain under study."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
