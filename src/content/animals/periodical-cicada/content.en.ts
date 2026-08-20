import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Periodical Cicada",
  classificationLabel: "Periodical cicada (North America)",
  visibleFeature: "Look at the red eyes — these cicadas waited seventeen years underground for this summer.",
  narration: {
    sentences: [
          "This is the periodical cicada, a time-capsule insect that spends seventeen years underground.",
          "A whole brood emerges in the same year — billions of cicadas at once."
    ],
    pronunciation: [
      {
        text: "Periodical Cicada",
        reading: "PEER-ee-OD-ik-al si-KAY-da",
      },
    ],
  },
  facts: {
    period: "Present day (Magicicada lineage millions of years old)",
    discoveryRegions: ["eastern North America"],
        size: {
      kind: 'body-length',
      minMeters: 0.025,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Periodical cicadas are a mathematical mystery: they sip root sap underground for thirteen or seventeen years, then billions surface in the same few weeks. Why 13 and 17? Both are prime numbers, so no predator’s life cycle can easily synchronise with them. The swarm overwhelms every predator and still has survivors left to breed — “predator satiation”. Broods are numbered by emergence year, and their brief, deafening summers are a natural wonder of eastern America.",
  sources: [
    {
        "title": "Periodical cicadas — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Periodical_cicadas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Magicicada — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/cicada",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wings.",
            "Prime-numbered cycles as predator evasion is the leading explanation, not the only hypothesis."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
