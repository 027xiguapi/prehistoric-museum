import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Woodpecker",
  classificationLabel: "Bird (woodpecker family)",
  visibleFeature: "Look at its chisel-straight beak and the stiff tail feathers propped against the trunk like a “third leg”.",
  narration: {
    sentences: [
          "This is the woodpecker, the forest’s “tree doctor”.",
          "It can drum a tree twenty times a second, thanks to a built-in crash helmet."
    ],
    pronunciation: [
      {
        text: "Woodpecker",
        reading: "WUUD-pek-er",
      },
    ],
  },
  facts: {
    period: "Present day (woodpecker family tens of millions of years old)",
    discoveryRegions: ["forests of Europe, Asia and North America"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.25,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A woodpecker’s drumming hits with several times the g-force of a rocket launch, yet inside its skull sits a crash helmet: spongy bone and an extra-long tongue that wraps round the head work like a seat belt to soak up the shock. Two toes point forward and two back, gripping bark like pliers, while a stiff tail props up the body. Old woodpecker holes often become next year’s homes for owls and squirrels — the woodpecker is the forest’s chief construction crew.",
  sources: [
    {
        "title": "Woodpecker — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/woodpecker",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Woodpecker — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Woodpecker",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This model resembles the great spotted woodpecker; the species will be confirmed visually before publication.",
            "Drumming-rate and g-force figures come from high-speed studies and vary between measurements."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
