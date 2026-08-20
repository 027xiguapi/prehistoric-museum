import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Pony",
  classificationLabel: "Small horse (pony)",
  visibleFeature: "Look at its thick mane and tail — like wearing a shaggy cloak.",
  narration: {
    sentences: [
          "This is a pony — not a foal, but a breed that stays small for life.",
          "It may be little, yet it is strong enough to carry a grown-up."
    ],
    pronunciation: [
      {
        text: "Pony",
        reading: "POH-nee",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated for thousands of years)",
    discoveryRegions: ["Shetland Islands, Scotland","farms worldwide"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.7,
      maxMeters: 1.45,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A pony is classically any horse standing under 1.47 metres at the shoulder — anything taller counts as a “big horse”. Shetland ponies were shaped by windy, grass-poor islands: a double coat, broad hooves and a thrifty “eat little, work hard” engine that lets one pull twice its own weight. Ponies once hauled coal in mines; today they are often a child’s first riding teacher.",
  sources: [
    {
        "title": "Pony — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pony",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pony — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pony",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“Pony” covers many breeds; this model resembles a Shetland type, and the range tops out at the traditional 1.47-metre dividing line.",
            "Weights vary hugely between breeds, roughly from 100 to 400 kilograms."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
