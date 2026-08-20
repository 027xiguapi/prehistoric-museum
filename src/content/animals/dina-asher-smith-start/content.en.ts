import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Dina Asher-Smith (Block Start)",
  classificationLabel: "Sprinter (block start)",
  visibleFeature: "Watch her explode out of the starting blocks — sprint starts follow the commands “on your marks, set, go”.",
  narration: {
    sentences: [
          "This is Dina Asher-Smith driving out of the starting blocks.",
          "Starting blocks are two small foot plates that let sprinters push off with maximum force."
    ],
    pronunciation: [
      {
        text: "Dina Asher-Smith (Block Start)",
        reading: "DEE-na ASH-er-smith",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["United Kingdom"],
        size: {
      kind: 'body-length',
      minMeters: 1.6,
      maxMeters: 1.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A sprint start has three phases: “on your marks” (feet set against the blocks), “set” (hips raised, weight forward) and the gun. Reaction times under 0.1 seconds count as false starts because research shows humans cannot respond to the gun any faster. This model captures Asher-Smith in the first driving strides away from the blocks.",
  sources: [
    {
        "title": "Dina Asher-Smith — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/dina-asher-smith",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dina Asher-Smith — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dina_Asher-Smith",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "Two other models of the same sprinter exist (sprint and stride); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
