import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Giant Tortoise",
  classificationLabel: "Tortoise",
  visibleFeature: "Look at its high, domed shell — like a little walking hill.",
  narration: {
    sentences: [
          "This is a tortoise, a reptile that slowly walks with a house on its back.",
          "Its shell is fused to its skeleton, and it carries that house for life."
    ],
    pronunciation: [
      {
        text: "Giant Tortoise",
        reading: "TOR-tis",
      },
    ],
  },
  facts: {
    period: "Present day (turtle lineage around 200 million years old)",
    discoveryRegions: ["Galápagos Islands","Indian Ocean islands","mainland Africa"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Giant tortoises survive only on islands and in arid Africa; their tall domed shells help store warmth in the cool season. They can live past a hundred years and take days to digest a meal. The shell is not detachable armour — it is bone fused to ribs and spine. The Galápagos tortoises famously helped Darwin think his way toward evolution.",
  sources: [
    {
        "title": "Galápagos tortoise — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Galapagos-tortoise",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Tortoise — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/tortoise",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page features giant tortoises; common pet tortoises are far smaller.",
            "Lifespan and digestion times are approximations varying by species and climate."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
