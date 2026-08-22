import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Ball Python",
  classificationLabel: "Snake (python family)",
  visibleFeature: "Look at its brown-and-gold blotches — when scared, it rolls itself into a ball.",
  narration: {
    sentences: [
          "This is the ball python, a gentle python that stays fairly small.",
          "When frightened, it hides its head in the middle of its coils and rolls into a tight ball."
    ],
    pronunciation: [
      {
        text: "Ball Python",
        reading: "bawl PY-thon",
      },
    ],
  },
  facts: {
    period: "Present day",
    discoveryRegions: ["west and central Africa"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The ball python is named after its signature move: when disturbed it coils into a ball with its vulnerable head tucked safely in the middle, leaving a predator nowhere to bite. A night hunter of West African grasslands, it finds mice in the dark using heat-sensing pits, then holds on and gently constricts. Mother ball pythons wrap around their clutch of eggs like a hen until the babies hatch.",
  sources: [
    {
        "title": "Ball python — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/ball-python",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ball python — 圣地亚哥动物园（San Diego Zoo）",
        "url": "https://animals.sandiegozoo.org/animals/python",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The upper length is for females; males usually stay around one metre.",
            "Heat-sensing pits vary across python species, described here in general terms."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
