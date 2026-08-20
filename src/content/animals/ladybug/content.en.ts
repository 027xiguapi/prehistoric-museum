import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Seven-spot Ladybird",
  classificationLabel: "Helpful beetle (aphid hunter)",
  visibleFeature: "Count the black spots on its back — exactly seven, no more, no less.",
  narration: {
    sentences: [
          "This is the seven-spot ladybird, a tiny beetle with seven stars on its back.",
          "It can eat over a hundred aphids a day — a free bodyguard for the garden."
    ],
    pronunciation: [
      {
        text: "Seven-spot Ladybird",
        reading: "SEV-en-spot LAY-dee-bird",
      },
    ],
  },
  facts: {
    period: "Present day (ladybird family tens of millions of years old)",
    discoveryRegions: ["Europe, Asia and North America"],
        size: {
      kind: 'body-length',
      minMeters: 0.007,
      maxMeters: 0.01,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The seven-spot ladybird is fingernail-sized yet an aphid’s nightmare: adults and larvae alike eat aphids, and one ladybird can devour several thousand in its life. When threatened it oozes bitter yellow fluid from its leg joints — “reflex bleeding” that puts predators off. The bold red-and-black coat is a warning: “I taste terrible.” Hundreds huddle together through winter, then scatter in spring to lay eggs right beside aphid colonies.",
  sources: [
    {
        "title": "Seven-spot ladybird — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Coccinella_septempunctata",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ladybird — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/ladybug",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size is in millimetres and the model is shown greatly enlarged.",
            "Seven spots are fixed for this species, but other ladybirds carry very different counts."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
