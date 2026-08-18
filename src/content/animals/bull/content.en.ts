import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Bull",
  classificationLabel: "Domestic bovine",
  visibleFeature: "Look at its curved pale horns and its strong shoulders.",
  narration: {
    sentences: [
          "This is a bull, the big fellow of the cattle herd.",
          "With curved horns and powerful muscles, it eats grass and spends much of the day feeding."
    ],
    pronunciation: [
      {
        text: "Bull",
        reading: "BULL",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated 8,000–10,000 years ago)",
    discoveryRegions: ["Worldwide (domesticated from aurochs)"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Cattle descend from the extinct aurochs, a huge wild ox that stood nearly two metres at the shoulder. People began domesticating them in the Near East about ten thousand years ago, and since then cattle have given us milk, meat and ploughing power. They are ruminants: they bring swallowed grass back up to chew again, “cud-chewing” for hours every day.",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Bos taurus — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Bos_taurus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Length spans typical adult bulls; breeds differ quite a bit.",
            "Bullfighting traditions are outside this page’s scope."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
