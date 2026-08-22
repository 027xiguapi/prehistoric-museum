import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Caeleb Dressel (Butterfly)",
  classificationLabel: "Swimmer (butterfly stroke)",
  visibleFeature: "Watch both arms sweep out of the water together — butterfly is the most demanding of the four strokes.",
  narration: {
    sentences: [
          "This is American swimming star Caeleb Dressel swimming the butterfly.",
          "In butterfly, both arms recover over the water together while the body rolls like a dolphin’s."
    ],
    pronunciation: [
      {
        text: "Caeleb Dressel (Butterfly)",
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
  parentClassificationNote: "Caeleb Dressel is an American sprint freestyle and butterfly star who won five gold medals at the Tokyo 2020 Olympics and holds the 100-metre butterfly world record (49.45 seconds). Butterfly split off from breaststroke in the 1930s and demands simultaneous over-water arm recovery with a dolphin kick, making it hugely demanding on the shoulders and back. This model captures one full butterfly stroke cycle.",
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
            "Two other models of the same swimmer exist (freestyle and dive start); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
