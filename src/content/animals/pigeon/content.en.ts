import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Pigeon",
  classificationLabel: "Urban bird",
  visibleFeature: "Look at the rainbow sheen on its neck — grey feathers flashing green and purple.",
  narration: {
    sentences: [
          "This is the pigeon, the city bird that knows humans best.",
          "Its neck feathers flash rainbow colours in the sunlight."
    ],
    pronunciation: [
      {
        text: "Pigeon",
        reading: "PIJ-un",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated around 5,000 years ago)",
    discoveryRegions: ["Cities worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.29,
      maxMeters: 0.37,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "City pigeons are descendants of domestic birds whose wild ancestors, rock doves, nested on sea cliffs — which is why pigeons love building ledges. They find their way home using memorised landmarks, a magnetic sense and smell. Pigeon chicks are fed not seeds but “crop milk”, a nutritious fluid from their parents’ crops.",
  sources: [
    {
        "title": "Rock pigeon — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Rock_Pigeon/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Pigeon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pigeon",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical rock and domestic pigeons.",
            "Navigation combines several cues and remains an active research topic."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
