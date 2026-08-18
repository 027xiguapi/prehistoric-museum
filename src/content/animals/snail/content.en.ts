import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Snail",
  classificationLabel: "Gastropod mollusc",
  visibleFeature: "Look at the spiral house on its back — home travels everywhere with it.",
  narration: {
    sentences: [
          "This is the snail, the little animal that carries its house along.",
          "It leaves a shiny trail wherever it slides."
    ],
    pronunciation: [
      {
        text: "Snail",
        reading: "SNAYL",
      },
    ],
  },
  facts: {
    period: "Present day (gastropods around 500 million years old)",
    discoveryRegions: ["Worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.02,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A snail ripples its muscular foot forward on self-made slime that protects it, glues it to walls, and even lets it crawl upside down over a razor blade. The shell is a portable skeleton and shelter — in dry weather the snail seals the opening and sleeps long and deep. Most land snails are simultaneous hermaphrodites that mate mutually.",
  sources: [
    {
        "title": "Snail — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/snail",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Snails and slugs — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/molluscs/gastropods/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page features common garden snails; giant species are far larger.",
            "Diet notes centre on herbivorous land snails."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
