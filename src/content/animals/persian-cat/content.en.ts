import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Persian Cat",
  classificationLabel: "Longhaired cat breed",
  visibleFeature: "Look at its flat little face and its long, soft white fur.",
  narration: {
    sentences: [
          "This is the Persian cat, the famous “long-haired aristocrat” of cats.",
          "Its fur is long and silky and needs daily brushing, and its personality is calm and quiet."
    ],
    pronunciation: [
      {
        text: "Persian Cat",
        reading: "PER-zhun cat",
      },
    ],
  },
  facts: {
    period: "Present day (recorded for about 400 years)",
    discoveryRegions: ["Origin: Iran (Persia); bred worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Persian is one of the oldest purpose-bred cat breeds, with longhaired ancestors that travelled the Silk Road into Europe. Its famous flat face is the result of modern breeding; round eyes, a flowing coat and a gentle temper have kept it popular for centuries. That dense fur means it needs a daily brush from its humans.",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Domestic cat — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Body length excludes the tail and reflects the breed’s common range.",
            "Coat colours vary widely; this page shows the white long-haired individual from the model."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
