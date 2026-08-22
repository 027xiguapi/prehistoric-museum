import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "African Leopard",
  classificationLabel: "Big cat",
  visibleFeature: "Look for the rosette-shaped spots on its coat — every leopard has its own unique pattern.",
  narration: {
    sentences: [
          "This is the African leopard, a big cat that carries its prey up into trees.",
          "Its rosette spots help it hide among grass and tree shadows."
    ],
    pronunciation: [
      {
        text: "African Leopard",
        reading: "AF-ri-can LE-pard",
      },
    ],
  },
  facts: {
    period: "Present day (leopard lineage millions of years old)",
    discoveryRegions: ["Sub-Saharan Africa","parts of Asia"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "African leopards are champion climbers: powerful shoulders and retractable claws let them haul prey heavier than themselves up into trees, safely away from lions and hyenas. Their “rosettes” are not plain dots but hollow, flower-like rings, and each leopard’s pattern is as unique as a fingerprint. Leopards are all-round hunters that swim, climb and see well in the dark.",
  sources: [
    {
        "title": "Leopard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/leopard",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Leopard — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/leopard",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers head-to-tail length for both sexes; males are usually about a third larger than females.",
            "“African leopard” refers to Africa’s leopard populations; leopards live across Africa and Asia."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
