import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Zebra",
  classificationLabel: "Wild equid",
  visibleFeature: "Look at its black-and-white stripes — no two zebras share the same pattern.",
  narration: {
    sentences: [
          "This is the zebra, a horse relative wearing a striped coat.",
          "Every zebra’s stripes are unique, just like your fingerprints."
    ],
    pronunciation: [
      {
        text: "Zebra",
        reading: "ZEE-bruh",
      },
    ],
  },
  facts: {
    period: "Present day (lineage around 4 million years old)",
    discoveryRegions: ["African savannas"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Zebra stripes have several proposed jobs: dazzling biting flies, confusing predators in a running herd, helping individuals recognise each other, and perhaps shedding heat. Family herds are led by one stallion, and members communicate with calls and expressions. Zebras run fast and will bite and kick to defend themselves.",
  sources: [
    {
        "title": "Zebra — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/zebra",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Why do zebras have stripes? — 《科学美国人》（Scientific American）",
        "url": "https://www.scientificamerican.com/article/why-do-zebras-have-stripes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page covers the three zebra species together; sizes are approximate.",
            "Stripe function remains an active research topic."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
