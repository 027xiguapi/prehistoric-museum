import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Shih Tzu",
  classificationLabel: "Chinese palace companion",
  visibleFeature: "Look at the flowing coat and short nose — the name means “little lion”.",
  narration: {
    sentences: [
          "This is the Shih Tzu, a companion dog raised in Chinese palaces.",
          "Its only job for a thousand years has been to keep people company."
    ],
    pronunciation: [
      {
        text: "Shih Tzu",
        reading: "SHEE-dzoo",
      },
    ],
  },
  facts: {
    period: "Present day (depicted in Chinese court art for over a thousand years)",
    discoveryRegions: ["China (developed in the palace from Tibetan court dogs)"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Shih Tzu descends from Tibetan court dogs presented to Chinese emperors and was treasured in Ming and Qing palaces. The Chinese rendering “Xishi” translates the English name Shih Tzu, meaning lion — in Buddhist legend a little lion followed the Buddha, so the dog was an auspicious emblem. In the 20th century the breed dwindled to a handful of dogs, and every modern Shih Tzu descends from just 14 survivors. The long coat needs daily brushing, and the short nose makes heat dangerous in summer.",
  sources: [
    {
        "title": "Shih Tzu — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/shih-tzu/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Shih Tzu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Shih_Tzu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail and furnishings.",
            "The “fourteen survivors” figure is the standard account from modern pedigree research."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
