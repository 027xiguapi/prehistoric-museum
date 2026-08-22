import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Deer",
  classificationLabel: "Deer",
  visibleFeature: "Look at the antlers on its head — branched like tree limbs and regrown every year.",
  narration: {
    sentences: [
          "This is the deer, the graceful animal that wears branches on its head.",
          "Its antlers fall off every year and grow all over again."
    ],
    pronunciation: [
      {
        text: "Deer",
        reading: "DEER",
      },
    ],
  },
  facts: {
    period: "Present day (deer family around 20 million years old)",
    discoveryRegions: ["Asia","Europe","the Americas"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Antlers are the only mammalian organs that regenerate whole each year, growing up to two centimetres a day — a treasure trove for regeneration biology. Grown by males (except reindeer), they serve in rutting contests. Deer rely on keen smell and hearing, and flash the white underside of the tail to warn the herd of danger.",
  sources: [
    {
        "title": "Deer — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/deer",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Antler regeneration — 纽约州立大学（SUNY）Cobleskill 校区",
        "url": "https://www.cobleskill.edu/about/news/antlers-regeneration",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page features medium-sized deer such as white-tailed and sika deer.",
            "Antler growth rates vary by species and age."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
