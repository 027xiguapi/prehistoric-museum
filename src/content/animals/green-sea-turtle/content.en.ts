import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Green Sea Turtle",
  classificationLabel: "Large sea turtle (sea turtle family)",
  visibleFeature: "Look at its shield-like front flippers — they row through the water like wings.",
  narration: {
    sentences: [
          "This is the green sea turtle, a long-distance voyager that crosses whole oceans.",
          "It rows with wing-like front flippers and grazes on seagrass meadows."
    ],
    pronunciation: [
      {
        text: "Green Sea Turtle",
        reading: "green SEE TUR-tl",
      },
    ],
  },
  facts: {
    period: "Present day (sea turtle family over 100 million years old)",
    discoveryRegions: ["tropical and subtropical seas worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The green sea turtle is named for the green fat beneath its shell — adults are nearly vegetarian, grazing seagrass and seaweed like undersea lawnmowers and keeping the meadows healthy. Their navigation is astonishing: after decades roaming the open ocean, females still find their way back to the very beach where they hatched to lay eggs. Sand temperature decides whether hatchlings are boys or girls, so a warming climate touches the whole family’s future.",
  sources: [
    {
        "title": "Green sea turtle — 美国国家海洋和大气管理局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/species/green-turtle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Green turtle — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/green-turtle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length is the shell (carapace) length; young turtles eat jellyfish and other animals before turning vegetarian.",
            "This entry and the existing “Sea Turtle” draft are different species and models; identification will be rechecked before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
