import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Alpine Goat",
  classificationLabel: "Domestic goat (Alpine breed)",
  visibleFeature: "Look at its backward-curving horns and upright ears — the gear of a mountain athlete.",
  narration: {
    sentences: [
          "This is the Alpine goat, a domestic goat breed from the high mountains of Europe.",
          "Its hooves work like climbing shoes, gripping steep rocky cliffs with ease."
    ],
    pronunciation: [
      {
        text: "Alpine Goat",
        reading: "AL-pine GOHT",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated for hundreds of years)",
    discoveryRegions: ["European Alps","farms worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Alpine goat is a famous dairy breed developed in the Swiss and French Alps, tough enough for cold mountain weather and such a generous milk-maker that farmers have carried it to pastures worldwide. A goat’s hoof is hard outside and soft inside, split in two and able to spread sideways, like built-in climbing shoes. Goats browse widely — grass, twigs, bark and even bushes clinging to steep slopes.",
  sources: [
    {
        "title": "Goat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/goat-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Alpine goat — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Alpine_goat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range is adult head-to-tail length; weight and build vary a lot between farm lines.",
            "“Alpine goat” can also mean the wild Alpine ibex; this page follows the domestic dairy breed."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
