import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Laughing Kookaburra (AR Model)",
  classificationLabel: "Giant kingfisher (famous “laugh”)",
  visibleFeature: "Look at the long, heavy beak — kookaburras whack their prey against a branch before swallowing it.",
  narration: {
    sentences: [
          "This is the laughing kookaburra, a kingfisher whose call sounds like human laughter.",
          "It hunts lizards, snakes and insects rather than fish."
    ],
    pronunciation: [
      {
        text: "Laughing Kookaburra (AR Model)",
        reading: "KUK-a-bur-ra",
      },
    ],
  },
  facts: {
    period: "Present day (kingfisher family tens of millions of years old)",
    discoveryRegions: ["eastern and south-western Australia"],
        size: {
      kind: 'body-length',
      minMeters: 0.28,
      maxMeters: 0.42,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The laughing kookaburra is the world’s largest kingfisher, yet it rarely goes near water: it perches watching the ground, then dives on lizards, snakes, mice or large insects and beats the prey against a branch before swallowing it whole. Families chorus their “laugh” at dawn and dusk to defend their territory — the same laugh Hollywood often dubs over jungle scenes set nowhere near Australia. Kookaburras pair for life, and older siblings help raise the chicks.",
  sources: [
    {
        "title": "Kookaburra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kookaburra",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Laughing kookaburra — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Laughing_kookaburra",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another kookaburra model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "The size range includes the fairly long tail."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
