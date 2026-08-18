import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Stag Beetle",
  classificationLabel: "Beetle (stag beetle family)",
  visibleFeature: "Look at the pair of antler-like jaws on its head — the male stag beetle’s “swords”.",
  narration: {
    sentences: [
          "This is the stag beetle, a beetle with giant jaws.",
          "The male’s jaws look like deer antlers and are used mainly to wrestle rivals."
    ],
    pronunciation: [
      {
        text: "Stag Beetle",
        reading: "STAG BEE-tl",
      },
    ],
  },
  facts: {
    period: "Present day (around 100 million years ago to today)",
    discoveryRegions: ["East Asia","Europe"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A stag beetle’s huge jaws are not for biting people — they are wrestling weapons males use to contest tree sap and territory. Their larvae eat decaying wood and live inside dead trunks for several years before emerging as beetles. Because they depend on old trees, stag beetles are an indicator of forest health: where they thrive, the forest still keeps enough old and dead wood.",
  sources: [
    {
        "title": "Stag beetle — 英国野生动物信托（The Wildlife Trusts）",
        "url": "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/beetles/stag-beetle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Lucanidae — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/stag-beetle",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical males; females lack the big jaws and are smaller.",
            "Larval years in dead wood vary with climate and tree species; given as an approximation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
