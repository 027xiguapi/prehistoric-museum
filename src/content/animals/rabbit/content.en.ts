import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Rabbit",
  classificationLabel: "Lagomorph",
  visibleFeature: "Look at its long ears — they swivel like radar dishes toward sounds.",
  narration: {
    sentences: [
          "This is the rabbit, a champion jumper with long ears.",
          "Its ears turn in every direction and also help it stay cool."
    ],
    pronunciation: [
      {
        text: "Rabbit",
        reading: "RAB-it",
      },
    ],
  },
  facts: {
    period: "Present day (rabbit family around 40 million years old)",
    discoveryRegions: ["Worldwide (domestic rabbits descend from European rabbits)"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Rabbits are prey animals with a full survival kit: long ears gather sound from all directions, wide-set eyes see almost behind them, and powerful hind legs power zigzag escapes. They re-eat special soft droppings to absorb every last nutrient. European rabbits dig warrens and live in social groups.",
  sources: [
    {
        "title": "Rabbit — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/rabbit",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "House rabbit — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Oryctolagus_cuniculus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical European and domestic rabbits.",
            "Behaviour notes centre on European rabbits; hares differ."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
