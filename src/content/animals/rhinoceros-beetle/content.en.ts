import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Japanese Rhinoceros Beetle",
  classificationLabel: "Rhinoceros beetle (Japan’s favourite insect)",
  visibleFeature: "Look at the forked horn — a miniature rhino’s horn that scoops rivals up and throws them off.",
  narration: {
    sentences: [
          "This is the Japanese rhinoceros beetle, the insect every child in Japan wants to catch in summer.",
          "It can lift dozens of times its own weight — a true insect strongman."
    ],
    pronunciation: [
      {
        text: "Japanese Rhinoceros Beetle",
        reading: "JAP-a-neez RY-no-se-ros BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (scarab lineage over 100 million years old)",
    discoveryRegions: ["Japan","forests of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.04,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The rhinoceros beetle is named “kabuto-mushi” after the samurai helmet. The male’s forked head horn slides under a rival and catapults him off the trunk. Larvae spend about a year in humus eating rotten leaves and wood, while adults gather at oozing oak sap on summer nights. It is Japan’s national insect — children raise them and shops sell them every summer. Females have no horn and lay eggs in the leaf mould.",
  sources: [
    {
        "title": "Japanese rhinoceros beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Japanese_rhinoceros_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "カブトムシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/kabutomushi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size includes the horn; females are hornless and much smaller.",
            "The “1048 batch” of this collection includes a rhinoceros-beetle model that may be a close relative; check before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
