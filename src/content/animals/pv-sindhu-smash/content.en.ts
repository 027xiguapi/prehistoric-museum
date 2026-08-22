import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "P. V. Sindhu (Smash)",
  classificationLabel: "Badminton player",
  visibleFeature: "Watch her leap and strike downwards with full power — the smash is badminton’s most devastating winning shot.",
  narration: {
    sentences: [
          "This is P. V. Sindhu leaping for a smash.",
          "A smashed shuttle flies down like an arrow at over 400 kilometres per hour."
    ],
    pronunciation: [
      {
        text: "P. V. Sindhu (Smash)",
        reading: "P V SIN-doo",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["India"],
        size: {
      kind: 'body-length',
      minMeters: 1.75,
      maxMeters: 1.83,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A smash is struck at the highest possible point, the arm whipping through to drive the shuttle steeply down into the opponent’s court. The fastest recorded smashes exceed 490 kilometres per hour. Sindhu stands about 1.79 metres tall and hits from an exceptionally high contact point — her signature weapon. This model captures her mid-air at the moment of the smash.",
  sources: [
    {
        "title": "P V Sindhu — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/pv-sindhu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "P. V. Sindhu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/P._V._Sindhu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "Two other models of the same player exist (rally and shots); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
