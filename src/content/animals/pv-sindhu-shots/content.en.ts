import type { AnimalContentEn } from '../../types'

export const en = {
  name: "P. V. Sindhu (Shots)",
  classificationLabel: "Badminton player",
  visibleFeature: "Watch her switch between different strokes — badminton has dozens of shots, from clears to drops to net spins.",
  narration: {
    sentences: [
          "Here is P. V. Sindhu demonstrating different badminton strokes.",
          "Top players keep changing pace and shot choice so opponents cannot guess what comes next."
    ],
    pronunciation: [
      {
        text: "P. V. Sindhu (Shots)",
        reading: "P V SIN-doo",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["India"],
        size: {
      kind: 'body-length',
      minMeters: 1.75,
      maxMeters: 1.83,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Core badminton strokes include the deep clear, the soft drop, the tumbling net shot and the cross-court slice. Sindhu’s forehand attack is especially feared; her coach Pullela Gopichand is himself a former All England champion. This model belongs to the same athlete capture series as her rally and smash models.",
  sources: [
    {
        "title": "P V Sindhu — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/pv-sindhu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "P. V. Sindhu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/P._V._Sindhu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "Two other models of the same player exist (rally and smash); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
