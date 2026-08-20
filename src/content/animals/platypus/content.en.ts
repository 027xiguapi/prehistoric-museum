import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Platypus",
  classificationLabel: "Egg-laying mammal",
  visibleFeature: "Look at the duck-like bill and beaver-like tail — males even carry venomous spurs on their ankles.",
  narration: {
    sentences: [
          "This is the platypus, an egg-laying mammal that looks stitched together from several animals.",
          "It dives with eyes and ears shut, using its bill to sense the faint electricity of prey."
    ],
    pronunciation: [
      {
        text: "Platypus",
        reading: "PLAT-i-pus",
      },
    ],
  },
  facts: {
    period: "Present day (monotreme lineage over 100 million years old)",
    discoveryRegions: ["eastern Australia","Tasmania"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "When the first platypus specimen reached Britain in 1799, scientists suspected a hoax — a duck’s bill sewn onto a beaver’s body. The mother incubates her eggs against her belly, and the hatchlings lap milk that seeps through her skin. The “bill” is a soft electro-sensory organ covered in tens of thousands of receptors that pinpoint shrimp and aquatic insects in pitch-black water. Males carry venomous ankle spurs that cause weeks of pain in humans. In 2020 researchers even found that platypus fur glows blue-green under ultraviolet light.",
  sources: [
    {
        "title": "Platypus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/platypus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Platypus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Platypus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size includes the flat tail; males are clearly larger than females.",
            "The biofluorescence finding rests on a small number of studies and its function is unknown."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
