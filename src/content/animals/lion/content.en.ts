import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Lion",
  classificationLabel: "Big cat",
  visibleFeature: "Look at the male’s shaggy mane — a scarf gifted by nature.",
  narration: {
    sentences: [
          "This is the lion, the only big cat that lives in groups.",
          "The male wears a shaggy mane, and his roar carries for kilometres."
    ],
    pronunciation: [
      {
        text: "Lion",
        reading: "LY-un",
      },
    ],
  },
  facts: {
    period: "Present day (Panthera lineage around 3 million years old)",
    discoveryRegions: ["Sub-Saharan Africa","Gir Forest, India"],
        size: {
      kind: 'body-length',
      minMeters: 2.4,
      maxMeters: 3.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Lions are the only truly social cats: a pride centres on related females and their cubs, and the lionesses do most of the hunting. A male’s mane protects his neck and signals his condition. Roars carry up to eight kilometres, advertising territory. Wild populations have declined steeply over the past century.",
  sources: [
    {
        "title": "Lion — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/lion",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Lion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lion",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range spans males and females; males run longer.",
            "Roar distances vary with terrain."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
