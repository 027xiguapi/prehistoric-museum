import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Dragon (Mythical Creature)",
  classificationLabel: "Mythical creature",
  visibleFeature: "Look at the wings and horns — the fire-breathing, treasure-guarding dragon of European legend.",
  narration: {
    sentences: [
          "This is the dragon of European legend, a flying beast guarding treasure.",
          "Chinese dragons are completely different — symbols of luck and water, not fire."
    ],
    pronunciation: [
      {
        text: "Dragon (Mythical Creature)",
        reading: "DRAG-on",
      },
    ],
  },
  facts: {
    period: "Legend (thousands of years of mythology, East and West)",
    discoveryRegions: ["legends of Europe and Asia"],
        size: {
      kind: 'body-length',
      minMeters: 4,
      maxMeters: 8,
    },
    diet: "unknown",
  },
  parentClassificationNote: "Dragons arose independently in mythologies worldwide: the European dragon is a fire-breathing treasure-guarder for knights to duel, while the Chinese dragon brings rain and stands for good fortune and the emperor — the two share almost nothing. Palaeontologists suspect dragon myths were partly inspired by fossil finds: a huge dinosaur or elephant skull is easily read as a monster. This model follows the European winged, fire-breathing form. As a creature of legend, none of its measurements or habits have scientific data — the numbers here are pure imagination.",
  sources: [
    {
        "title": "Dragon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/dragon-mythological-creature",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dragon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dragon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a mythical creature, not a real animal; the size figures are common fictional convention.",
            "Diet is marked “unknown” because legends contradict one another about what dragons eat."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
