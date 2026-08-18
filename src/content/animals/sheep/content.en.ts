import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Sheep",
  classificationLabel: "Domestic bovine",
  visibleFeature: "Look at its thick, curly wool — like a coat made of clouds.",
  narration: {
    sentences: [
          "This is the sheep, one of the first animals humans ever tamed.",
          "Its wool grows all year, and each spring the fleece is sheared and spun into warm yarn."
    ],
    pronunciation: [
      {
        text: "Sheep",
        reading: "SHEEP",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated 8,000–11,000 years ago)",
    discoveryRegions: ["Worldwide (domesticated from Asian mouflon)"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Sheep descend from wild mountain sheep of Asia and were domesticated about ten thousand years ago. They are ruminants with four stomach chambers that slowly digest grass, and their wide, rectangular pupils give them a huge field of view for spotting danger. Sheep recognise each other’s faces and look out for one another in the flock.",
  sources: [
    {
        "title": "Sheep — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/sheep",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Ovis aries — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Ovis_aries/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Length reflects typical adults; breeds vary considerably.",
            "Wool-use notes are a general introduction."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
