import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "American Pit Bull Terrier",
  classificationLabel: "Bull-and-terrier type (a debated breed)",
  visibleFeature: "Look at the solid muscle and broad head — strength and gentleness can live in the same dog.",
  narration: {
    sentences: [
          "This is the American Pit Bull Terrier, a strong breed surrounded by debate.",
          "It loves its family deeply — and it needs an exceptionally responsible owner."
    ],
    pronunciation: [
      {
        text: "American Pit Bull Terrier",
        reading: "pit bul TER-ee-er",
      },
    ],
  },
  facts: {
    period: "Present day (standardised in America from 19th-century British and Irish stock)",
    discoveryRegions: ["United States (where the breed was fixed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.65,
      maxMeters: 0.85,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The pit bull descends from 19th-century British bulldog–terrier crosses, bred taller after arriving in America. It was once nicknamed the “nanny dog” for its patience with children, yet its fighting history and power have brought ownership restrictions in many countries. One important clarification: the tale of a “locking jaw” with unbeatable bite force is an urban legend unsupported by any measurement. The breed’s story shows how much training and management matter more than labels.",
  sources: [
    {
        "title": "American Pit Bull Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/American_Pit_Bull_Terrier",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pit bull — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pit-bull-terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "This breed is restricted or banned in many jurisdictions; regional compliance should be reviewed before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
