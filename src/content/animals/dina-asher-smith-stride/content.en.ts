import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Dina Asher-Smith (Stride)",
  classificationLabel: "Sprinter (stride)",
  visibleFeature: "Watch her high knee lift and powerful arm swing — sprinting is a whole-body action, not just legs.",
  narration: {
    sentences: [
          "This is Dina Asher-Smith mid-stride, knees driving high.",
          "Sprinters pump their arms hard front to back — the arm action helps the legs go faster."
    ],
    pronunciation: [
      {
        text: "Dina Asher-Smith (Stride)",
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
  parentClassificationNote: "At top speed a sprinter’s stride can exceed two metres, with each foot touching the ground for about a tenth of a second. Sprinters stay tall, lift the knees, land on the ball of the foot and swing the arms through big right-angled arcs. This model freezes one full stride cycle of Asher-Smith’s running form.",
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
            "Two other models of the same sprinter exist (block start and sprint); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
