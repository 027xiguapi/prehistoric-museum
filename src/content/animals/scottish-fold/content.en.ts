import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Scottish Fold",
  classificationLabel: "Cat breed (folded ears)",
  visibleFeature: "Look at the forward-folded ears — the cute trait comes from a cartilage gene mutation.",
  narration: {
    sentences: [
          "This is the Scottish Fold, whose ears fold forward like a little cap.",
          "It loves sitting upright like a human, a pose nicknamed the “Buddha sit”."
    ],
    pronunciation: [
      {
        text: "Scottish Fold",
        reading: "SKOT-ish fohld",
      },
    ],
  },
  facts: {
    period: "Present day (breed traces to a Scottish farm cat found in 1961)",
    discoveryRegions: ["Scotland (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "In 1961 a white farm cat named Susie was found in Scotland with naturally folded ears, and the breed descends from her. The fold comes from a dominant gene mutation (linked to TRPV4) affecting cartilage; all kittens are born with straight ears that fold at about three weeks old. Importantly, the same gene affects cartilage throughout the body and can cause a painful joint disease (osteochondrodysplasia), so responsible breeders only mate folds with straight-eared cats, and several countries have banned breeding them altogether.",
  sources: [
    {
        "title": "Scottish Fold — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scottish_Fold",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Scottish Fold — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/scottish-fold/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The severity of the fold gene’s health effects varies; an animal-welfare note should be reviewed before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
