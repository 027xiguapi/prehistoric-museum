import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Kangaroo",
  classificationLabel: "Marsupial",
  visibleFeature: "Look at its powerful tail and hind legs — it bounds high and far.",
  narration: {
    sentences: [
          "This is the kangaroo, the jumping champion of Australia.",
          "Baby kangaroos ride inside a pouch on their mother’s tummy."
    ],
    pronunciation: [
      {
        text: "Kangaroo",
        reading: "kang-guh-ROO",
      },
    ],
  },
  facts: {
    period: "Present day (macropods around 10 million years old)",
    discoveryRegions: ["Australia and New Guinea"],
        size: {
      kind: 'body-length',
      minMeters: 1.3,
      maxMeters: 2.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The red kangaroo is the largest living marsupial. Hopping is surprisingly efficient — the faster they go, the less energy each hop costs — and the tail works as a third leg for balance. A jellybean-sized joey is born unfinished and crawls into the pouch to grow for months. Groups, called mobs, are led by the biggest male.",
  sources: [
    {
        "title": "Kangaroo — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/mammals/red-kangaroo/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Kangaroo — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kangaroo",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers eastern grey and red kangaroos.",
            "Efficiency findings come from treadmill studies and are summarised."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
