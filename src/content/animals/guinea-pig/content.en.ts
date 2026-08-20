import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Guinea Pig",
  classificationLabel: "Domestic rodent",
  visibleFeature: "Look at the round tailless body — guinea pigs chatter, whistle and purr almost constantly.",
  narration: {
    sentences: [
          "This is the guinea pig, a rodent from the Andes of South America.",
          "When happy, it hops straight up — a move called “popcorning”."
    ],
    pronunciation: [
      {
        text: "Guinea Pig",
        reading: "GIN-ee pig",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated in the Andes roughly three to five thousand years ago)",
    discoveryRegions: ["the Andes of South America (domestication)"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.3,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The guinea pig descends from wild South American cavies, domesticated in the Andes for meat and ritual, and carried to Europe by sailors in the 16th century as an exotic pet. Why “guinea” is a mystery — perhaps a transit port or a garbled price. Babies are born furred, eyes open, running within hours. Like humans, guinea pigs cannot make their own vitamin C and need fresh vegetables every day. Grass-eaters and herd animals, they must never live alone.",
  sources: [
    {
        "title": "Guinea pig — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/guinea-pig",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Guinea pig — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Guinea_pig",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size has no tail to exclude — guinea pigs are tailless.",
            "Several theories explain the “guinea” name; none is settled."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
