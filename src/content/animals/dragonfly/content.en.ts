import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Wandering Glider Dragonfly",
  classificationLabel: "Dragonfly (globe-trotting migrant)",
  visibleFeature: "Look at the four glassy wings held flat — dragonflies are among the finest fliers in the insect world.",
  narration: {
    sentences: [
          "This is the wandering glider, the most widespread dragonfly on Earth.",
          "Riding monsoon winds across oceans, its migrations span thousands of kilometres over several generations."
    ],
    pronunciation: [
      {
        text: "Wandering Glider Dragonfly",
        reading: "WON-der-ing GLY-der",
      },
    ],
  },
  facts: {
    period: "Present day (dragonfly order over 300 million years old)",
    discoveryRegions: ["warm regions worldwide"],
        size: {
      kind: 'wingspan',
      minMeters: 0.08,
      maxMeters: 0.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The wandering glider (Pantala flavescens) may be the longest-migrating insect known: genetic and tracking studies link populations that ride monsoon winds between Africa and India across the Indian Ocean. Dragonfly flight muscles drive all four wings directly, allowing hovering, backwards flight and hairpin turns, and hunting success rates above ninety per cent. Its aquatic nymphs are fierce underwater hunters, snatching prey with a hinged lower lip that shoots out like a spear gun.",
  sources: [
    {
        "title": "Pantala flavescens — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pantala_flavescens",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Wandering glider — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/dragonfly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The model follows the generic “dragonfly”; this entry uses the wandering glider as the reference species.",
            "Details of the migration route are still being tracked."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
