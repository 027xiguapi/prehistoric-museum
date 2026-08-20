import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Arctic Fox",
  classificationLabel: "Canine family (Arctic fox)",
  visibleFeature: "Look at its small rounded ears — they stay small to lose less heat in the ice and snow.",
  narration: {
    sentences: [
          "This is the Arctic fox, a master of costume change: snow-white in winter, grey-brown in summer.",
          "It wraps its big fluffy tail around itself like a quilt when it sleeps."
    ],
    pronunciation: [
      {
        text: "Arctic Fox",
        reading: "ARK-tik FOKS",
      },
    ],
  },
  facts: {
    period: "Present day (Arctic fox hundreds of thousands of years old)",
    discoveryRegions: ["tundra around the Arctic Circle"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 1.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Arctic fox owns two completely different coats: winter white that insulates and hides it in snow, and summer grey-brown that melts into tundra rock and lichen. Its fur is among the best insulations in the mammal world, shrugging off fifty degrees of frost, and its thick tail doubles as a quilt at night. It is also a great scavenger, following polar bears for leftovers and diving nose-first into snow to catch lemmings.",
  sources: [
    {
        "title": "Arctic fox — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Arctic-fox",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Arctic fox — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/arctic-fox",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length includes the tail; in good lemming years a litter can hold more than a dozen cubs, while in lean years foxes may barely breed.",
            "Some populations migrate hundreds of kilometres each winter, so behaviour varies widely."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
