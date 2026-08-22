import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Macaw",
  classificationLabel: "Large parrot (macaw)",
  visibleFeature: "Look at its hooked beak — a nutcracker strong enough for the hardest nuts.",
  narration: {
    sentences: [
          "This is the macaw, the big parrot of Central and South American rainforests.",
          "It wears rainbow feathers and often flies in a line, wing to wing with its partner."
    ],
    pronunciation: [
      {
        text: "Macaw",
        reading: "ma-KAW",
      },
    ],
  },
  facts: {
    period: "Present day (parrot lineage tens of millions of years old)",
    discoveryRegions: ["tropical forests of Central and South America"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A macaw’s beak can crack palm nuts, but the seeds inside come with toxins — so flocks visit riverside “clay licks” and eat earth that buffers the poison, a built-in antidote. Macaws usually pair for years, and partners sing matching duets of calls. Clever birds, they grab food with a favoured left or right foot, much as people are left- or right-handed.",
  sources: [
    {
        "title": "Macaw — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/macaw",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Macaw — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Macaw",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length includes the long tail; species vary greatly in size, so the range covers familiar large macaws.",
            "Clay licks are explained mainly by the detoxification hypothesis, which scientists still debate."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
