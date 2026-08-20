import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Timber Wolf",
  classificationLabel: "Grey wolf (North American forest population)",
  visibleFeature: "Look at its pricked ears and bushy tail — this is the wild cousin of every pet dog.",
  narration: {
    sentences: [
          "This is the timber wolf, the grey wolf of North American forests.",
          "A wolf pack is really a family: father, mother and children of different ages."
    ],
    pronunciation: [
      {
        text: "Timber Wolf",
        reading: "TIM-ber WUULF",
      },
    ],
  },
  facts: {
    period: "Present day (grey wolf hundreds of thousands of years old)",
    discoveryRegions: ["northern forests of North America"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Timber wolves are the grey wolves of North American forests. A pack is a close family built around a parent pair and their children, who cooperate to hunt deer and moose. Wolves howl to keep in touch and gather the team, and a howl carries for kilometres through the trees. Every pet dog, from Chihuahua to Great Dane, descends from the grey wolf. After wolves returned to Yellowstone in 1995, willows grew back along the rivers and the whole valley’s web of life livened up.",
  sources: [
    {
        "title": "Wolf — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/wolf",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Gray wolf — 美国国家公园管理局（NPS）",
        "url": "https://www.nps.gov/subjects/wolves/index.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“Timber wolf” usually means North American grey wolf populations rather than a separate species, and size varies by region.",
            "Yellowstone’s “wolf effect” is still debated by scientists, as river changes involve other factors too."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
