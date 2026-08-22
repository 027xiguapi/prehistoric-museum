import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Caeleb Dressel (Dive Start)",
  classificationLabel: "Swimmer (dive start)",
  visibleFeature: "Watch him launch off the starting block — at the top level, the start alone can decide a race.",
  narration: {
    sentences: [
          "Here is Caeleb Dressel diving in from the starting block.",
          "Racing starts demand an explosive jump within a split second of the signal — hundredths of a second matter."
    ],
    pronunciation: [
      {
        text: "Caeleb Dressel (Dive Start)",
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
  parentClassificationNote: "Modern racing starts use a “track start”: the swimmer grips the front of the block, loads one leg forward and one back, then drives off and enters the water in a tight streamline with an underwater dolphin-kick phase. Reaction times under 0.1 seconds are judged false starts. This model captures Dressel mid-flight on the way into the water.",
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
            "Two other models of the same swimmer exist (butterfly and freestyle); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
