import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Common Octopus",
  classificationLabel: "Cephalopod (octopus family)",
  visibleFeature: "Count its eight arms, then watch the little bumps on its skin — it can change its “outfit” at any moment.",
  narration: {
    sentences: [
          "This is the common octopus, the ocean’s greatest invertebrate magician.",
          "It has eight bendy arms and three hearts, and its skin can change colour in a second."
    ],
    pronunciation: [
      {
        text: "Common Octopus",
        reading: "KOM-on OK-ta-pus",
      },
    ],
  },
  facts: {
    period: "Present day (octopus lineage hundreds of millions of years old)",
    discoveryRegions: ["tropical and temperate seas"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The common octopus is a deep-sea Einstein: it opens jars, solves mazes and mimics other animals, with memory and learning that astonish scientists. Thousands of colour cells dot its skin, and with raisable bumps called papillae it can melt into a reef in seconds. Two hearts pump blood through the gills while a third serves the body, and a copper-based protein carries the oxygen, making octopus blood blue.",
  sources: [
    {
        "title": "Octopus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/octopus-mollusk",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Common octopus — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Common_octopus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range refers to the arm-spread and varies hugely between individuals; treat it as a family-friendly approximation.",
            "This entry and the existing “Octopus” draft are different models of closely related animals; one will be kept or the two merged before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
