import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Wombat",
  classificationLabel: "Burrowing marsupial",
  visibleFeature: "Look at the stocky body and strong claws — wombats are champion diggers that produce cube-shaped droppings.",
  narration: {
    sentences: [
          "This is the wombat, a close relative of the koala that lives in burrows it digs itself.",
          "It is the only animal in the world that produces cube-shaped droppings."
    ],
    pronunciation: [
      {
        text: "Wombat",
        reading: "WOM-bat",
      },
    ],
  },
  facts: {
    period: "Present day (wombat family tens of millions of years old)",
    discoveryRegions: ["south-eastern Australia","Tasmania"],
        size: {
      kind: 'body-length',
      minMeters: 0.7,
      maxMeters: 1.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The wombat is a roly-poly burrowing marsupial that grazes on grasses and roots for three to eight hours a night. Its pouch opens backwards so soil cannot fall in onto the joey while it digs. How does it make cubic droppings? Researchers found the wombat’s intestine has uneven stiffness, which shapes the contents into cubes near the end — handy for stacking droppings on rocks as territory markers that will not roll away. Wombat tunnel networks can reach 30 metres, and other animals have been found sheltering in wombat burrows during bushfires.",
  sources: [
    {
        "title": "Wombat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/wombat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Wombat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wombat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size spans all three wombat species; wombats have no visible tail.",
            "The story that wombats “herd” other animals into burrows during fires is folklore — only burrow sharing is documented."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
