import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Bengal Cat",
  classificationLabel: "Cat breed (leopard-spotted coat)",
  visibleFeature: "Look at the leopard-style rosettes — this breed descends partly from a wild cat.",
  narration: {
    sentences: [
          "This is the Bengal, a domestic cat with a wild leopard look.",
          "It is athletic and energetic, and many Bengals actually enjoy water."
    ],
    pronunciation: [
      {
        text: "Bengal Cat",
        reading: "BEN-gal kat",
      },
    ],
  },
  facts: {
    period: "Present day (breed developed from the 1960s–80s)",
    discoveryRegions: ["United States (where the breed was developed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.65,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Bengal was developed by crossing domestic cats with the Asian leopard cat and gained formal breed recognition in 1983. Its short, dense coat carries rosettes or marbled swirls, and some cats glitter as if dusted with gold. The first hybrid generations (F1–F3) are too wild for most homes, so pet Bengals are normally four or more generations removed. Bengals are clever, athletic climbers that often like playing in water — they need plenty of exercise and attention.",
  sources: [
    {
        "title": "Bengal cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bengal_cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bengal — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/bengal/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; males are usually larger than females.",
            "Some jurisdictions restrict early-generation leopard-cat hybrids, so local rules should be checked before ownership."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
