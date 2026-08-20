import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Stag Beetle (Model Two)",
  classificationLabel: "Stag beetle (male mandibles)",
  visibleFeature: "Look at the oversized jaws — stag beetles are named in Japanese after the “kuwagata” horns on samurai helmets.",
  narration: {
    sentences: [
          "This is the stag beetle: males duel with their great jaws over the best sap flows.",
          "A pinch from those jaws barely hurts — they are built for lifting rivals, not biting."
    ],
    pronunciation: [
      {
        text: "Stag Beetle (Model Two)",
        reading: "stag BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (stag-beetle family tens of millions of years old)",
    discoveryRegions: ["forests of East and South-East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The stag-beetle family holds more than 1,300 species. Males duel with their mandibles — grip, lift, and throw the rival off the trunk — for access to oozing sap. The jaws look frightening but bite far more weakly than the female’s small ones. Larvae spend one to several years in rotten wood or leaf mould, while adults live for a single summer. Adult size depends on how much rotting wood the grub could eat: brothers from one clutch can differ several-fold in jaw length.",
  sources: [
    {
        "title": "Stag beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stag_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "クワガタムシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This batch contains two stag-beetle models and this is the second; the exact species is not labelled in the model data.",
            "The size includes the mandibles; females are much smaller."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
