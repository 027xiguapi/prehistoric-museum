import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Elephant",
  classificationLabel: "Elephant",
  visibleFeature: "Look at its long trunk — part nose, part hand, with two lip-like fingers at the tip.",
  narration: {
    sentences: [
          "This is the elephant, the largest animal on land.",
          "Its trunk can rip a whole branch — or gently pick up a single peanut."
    ],
    pronunciation: [
      {
        text: "Elephant",
        reading: "EL-uh-funt",
      },
    ],
  },
  facts: {
    period: "Present day (proboscidean lineage around 55 million years old)",
    discoveryRegions: ["Sub-Saharan Africa","South and Southeast Asia"],
        size: {
      kind: 'body-length',
      minMeters: 5.5,
      maxMeters: 7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "An elephant’s trunk packs tens of thousands of muscles, strong enough to uproot a tree yet delicate enough to pick up a coin — the finger-like tip can even tell heads from tails. Elephants “talk” in infrasound over kilometres and sense ground vibrations through their feet. Herds led by elder females stay close for decades, one of nature’s tightest families.",
  sources: [
    {
        "title": "Elephant — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/elephant",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Elephant — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/elephant",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page does not separate African and Asian species; the size range features large bulls.",
            "Cognition and communication research is ongoing and summarised."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
