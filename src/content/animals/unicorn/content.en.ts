import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Unicorn (Mythical Creature)",
  classificationLabel: "Mythical creature",
  visibleFeature: "Look at the spiral horn on its forehead — legend says only the pure of heart can approach it.",
  narration: {
    sentences: [
          "This is the unicorn, the white horse of European legend with a single horn.",
          "Real “unicorn horns” sold in history were actually narwhal tusks."
    ],
    pronunciation: [
      {
        text: "Unicorn (Mythical Creature)",
        reading: "YOO-ni-korn",
      },
    ],
  },
  facts: {
    period: "Legend (recorded since ancient Greek writers)",
    discoveryRegions: ["European legend (from traveller’s tales of India and beyond)"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The unicorn can be traced to ancient Greece: the historian Ctesias described a one-horned wild ass of India. In medieval Europe the horn (“alicorn”) was believed to neutralise poison, and kings paid fortunes for unicorn horns — which were in truth narwhal tusks, a fact exposed only in the 16th century. Legend held the unicorn untameable except by the pure of heart. It is the national animal of Scotland, counterpart to England’s lion. Being mythical, its size simply follows a horse.",
  sources: [
    {
        "title": "Unicorn — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/unicorn",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Unicorn — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Unicorn",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a mythical creature, not a real animal; the size simply follows a horse.",
            "Diet follows the horse, as legends never describe it."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
