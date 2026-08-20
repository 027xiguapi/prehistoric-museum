import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Caeleb Dressel (Freestyle)",
  classificationLabel: "Swimmer (freestyle)",
  visibleFeature: "Watch his arms take turns pulling while the legs flutter-kick — “freestyle” racing almost always means front crawl, the fastest stroke.",
  narration: {
    sentences: [
          "Here is Caeleb Dressel swimming freestyle, his arms turning over like a windmill.",
          "In freestyle races everyone chooses front crawl because it is fastest, so the words have become interchangeable."
    ],
    pronunciation: [
      {
        text: "Caeleb Dressel (Freestyle)",
        reading: "KAY-leb DRES-el",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["United States"],
        size: {
      kind: 'body-length',
      minMeters: 1.85,
      maxMeters: 1.95,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Front crawl is the fastest of the four racing strokes: alternating arm pulls, a flutter kick and breathing to the side. Dressel is world-class in the 50- and 100-metre freestyle and won both events at the Tokyo Olympics. This model belongs to the same athlete capture series as his butterfly and dive-start models.",
  sources: [
    {
        "title": "Caeleb Dressel — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/caeleb-dressel",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Caeleb Dressel — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Caeleb_Dressel",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "Two other models of the same swimmer exist (butterfly and dive start); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
