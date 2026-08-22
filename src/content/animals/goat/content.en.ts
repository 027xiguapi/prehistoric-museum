import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Goat",
  classificationLabel: "Domestic bovine",
  visibleFeature: "Look at its curved horns and rectangular pupils — it climbs rocks like flat ground.",
  narration: {
    sentences: [
          "This is the goat, the best climber among farm animals.",
          "Its wide rectangular pupils give it an amazing field of view."
    ],
    pronunciation: [
      {
        text: "Goat",
        reading: "GOHT",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated around 10,000 years ago)",
    discoveryRegions: ["Worldwide (domesticated from the wild goat)"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Goats were domesticated in western Asia about ten thousand years ago and remain browsers rather than grazers — they happily eat shrubs, thorns and bark, and will balancing on near-vertical cliffs to reach them. Their rectangular pupils open a field of view near 320° for spotting predators. Curious by nature, goats love to explore and climb.",
  sources: [
    {
        "title": "Goat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/goat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Goat — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Capra_hircus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical adults; breeds vary widely.",
            "Pupil field-of-view figures are research approximations."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
