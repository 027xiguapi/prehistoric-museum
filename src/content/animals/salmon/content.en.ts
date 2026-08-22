import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Salmon",
  classificationLabel: "Migratory fish",
  visibleFeature: "Look at its streamlined silver body — built for long journeys.",
  narration: {
    sentences: [
          "This is the salmon, a remarkable traveller.",
          "It is born in rivers, grows up at sea, then swims back to its home river to spawn."
    ],
    pronunciation: [
      {
        text: "Salmon",
        reading: "SAM-un",
      },
    ],
  },
  facts: {
    period: "Present day (salmon family around 100 million years old)",
    discoveryRegions: ["North Atlantic","North Pacific rim rivers"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "A salmon’s life is one of nature’s great journeys: juveniles ride the current to the sea, and years later, guided by the remembered smell of their home river, they swim upstream — even leaping waterfalls — to spawn where they hatched. Migrating salmon also carry ocean nutrients back to the forest, feeding bears, eagles and the riverside trees.",
  sources: [
    {
        "title": "Atlantic salmon — 美国国家海洋与大气局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/species/atlantic-salmon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Salmon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/salmon",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical Atlantic and Chinook salmon.",
            "Smell-guided homing is the leading explanation; magnetic cues may also help."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
