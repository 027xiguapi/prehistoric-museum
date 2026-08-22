import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Ox / Cattle (AR Model)",
  classificationLabel: "Domestic cattle (draught and pack work)",
  visibleFeature: "Look at the patient eyes — for thousands of years, cattle were the most important working power on East Asian farms.",
  narration: {
    sentences: [
          "This is cattle as a working ox — ploughing fields and pulling carts powered farming civilisations.",
          "In Chinese culture, the “old yellow ox” is the symbol of tireless, uncomplaining work."
    ],
    pronunciation: [
      {
        text: "Ox / Cattle (AR Model)",
        reading: "oks",
      },
    ],
  },
  facts: {
    period: "Present day (cattle domesticated about ten thousand years ago)",
    discoveryRegions: ["East Asia (farming regions)","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 2,
      maxMeters: 2.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "“Yellow cattle” is the traditional East Asian name for ordinary domestic cattle, descendants of the wild aurochs. Yoked as oxen, they ploughed fields, hauled carts and drove millstones — so vital that many Chinese dynasties banned slaughtering farm cattle. Like all cattle they are ruminants, spending about eight hours a day rechewing their food, and the sight of a resting ox quietly chewing the cud is a classic of pastoral poetry.",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ox — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ox",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another cattle model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "The size excludes the tail; cattle breeds vary widely in build."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
