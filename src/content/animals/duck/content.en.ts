import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Duck",
  classificationLabel: "Waterbird (waterfowl)",
  visibleFeature: "Look at its flat bill and waterproof feathers — water rolls right off.",
  narration: {
    sentences: [
          "This is the duck, a waterbird that loves to play on ponds.",
          "It strains food from the water with its flat bill, bobbing its tail as it paddles."
    ],
    pronunciation: [
      {
        text: "Duck",
        reading: "DUK",
      },
    ],
  },
  facts: {
    period: "Present day (mallard lineage several million years old)",
    discoveryRegions: ["Worldwide (domesticated from the mallard)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Domestic ducks descend mostly from the mallard. A gland near the tail makes oil that the duck works through its feathers with its bill, keeping it dry while swimming. Comb-like lamellae along the flat bill strain insects and seeds from the water. Ducks waddle because their legs sit far back on the body — the same design that makes them powerful paddlers.",
  sources: [
    {
        "title": "Duck — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/duck",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Mallard — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Mallard/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical domestic ducks and mallards.",
            "Domestication history varies by region and breed; given in summary."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
