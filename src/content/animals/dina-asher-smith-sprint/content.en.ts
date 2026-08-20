import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Dina Asher-Smith (Sprint)",
  classificationLabel: "Sprinter",
  visibleFeature: "Watch her stride at full speed — she is the fastest British woman in history.",
  narration: {
    sentences: [
          "This is British sprinter Dina Asher-Smith at full speed.",
          "Elite sprinters reach more than 40 kilometres per hour at the finish."
    ],
    pronunciation: [
      {
        text: "Dina Asher-Smith (Sprint)",
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
  parentClassificationNote: "Dina Asher-Smith is the 2019 world 200-metre champion and 100-metre silver medallist, holding the British 100-metre record of 10.83 seconds — the fastest British woman ever. She studied history at university and is a prominent voice for women in sport. This model captures her maximum-velocity sprinting; block-start and stride models from the same series also exist.",
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
            "Two other models of the same sprinter exist (block start and stride); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
