import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Domestic Pig",
  classificationLabel: "Domestic animal (the clever omnivore)",
  visibleFeature: "Look at the snout — a super-sensitive shovel-nose that can smell food buried underground.",
  narration: {
    sentences: [
          "This is the domestic pig, among the cleverest of all farm animals.",
          "It rolls in mud not from dirtiness but to put on sunscreen."
    ],
    pronunciation: [
      {
        text: "Domestic Pig",
        reading: "do-MES-tik pig",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated independently in several places about nine thousand years ago)",
    discoveryRegions: ["domesticated across Eurasia","worldwide today"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.8,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The domestic pig descends from the wild boar and was domesticated independently in East Asia and the Middle East. It is one of the cleverest farm animals — pigs learn mazes, use mirrors to find hidden food, and have even been taught to play simple video games with a joystick. With few sweat glands, a pig cools and sunproofs itself in mud, and rooting is natural foraging. Its nose rivals a detection dog’s, which is why pigs are still used to hunt buried truffles. As an omnivore it eats almost anything — one reason it conquered the world.",
  sources: [
    {
        "title": "Pig — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pig-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Domestic pig — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Domestic_pig",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; breeds vary enormously in build.",
            "The exact number of domestication centres (two or more) is still discussed."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
