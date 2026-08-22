import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Grasshopper",
  classificationLabel: "Grasshopper (champion jumper)",
  visibleFeature: "Look at the powerful hind legs — one kick launches it twenty body-lengths away.",
  narration: {
    sentences: [
          "This is the grasshopper, the long-jump champion of the grass.",
          "Its ears sit on its belly, not on its head."
    ],
    pronunciation: [
      {
        text: "Grasshopper",
        reading: "GRAS-hop-er",
      },
    ],
  },
  facts: {
    period: "Present day (grasshopper lineage over 100 million years old)",
    discoveryRegions: ["grasslands worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A grasshopper’s hind legs are springs: elastic protein stores energy and releases it in one explosive kick, and the wings take over from there. Its ears are patches on the sides of the first abdominal segment, and males sing by rasping a leg against a wing. Grass-eaters themselves, grasshoppers are a key link in the food chain, feeding birds, spiders and mantises. Close relatives include locusts, which gather into devastating swarms when crowded.",
  sources: [
    {
        "title": "Grasshopper — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/grasshopper-insect",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Grasshopper — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Grasshopper",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers common species; the group varies widely.",
            "The model is a generic grasshopper and may not match one exact species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
