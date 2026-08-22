import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Great White Shark",
  classificationLabel: "Large shark (mackerel shark family)",
  visibleFeature: "Look at the rows of triangular teeth — when one falls out, a spare from the row behind slides forward.",
  narration: {
    sentences: [
          "This is the great white shark, the most famous big shark in the ocean.",
          "It keeps hundreds of spare teeth and goes through thousands in a lifetime."
    ],
    pronunciation: [
      {
        text: "Great White Shark",
        reading: "grayt wyt SHARK",
      },
    ],
  },
  facts: {
    period: "Present day (lineage about 16 million years old)",
    discoveryRegions: ["temperate and tropical seas worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 3.5,
      maxMeters: 6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The great white is the ocean’s apex hunter, with serrated steak-knife teeth replaced conveyor-style from rows behind, thousands in a lifetime. Special muscles keep its body warmer than the surrounding sea for extra speed and power, and pores on its snout detect the faint electric fields of a prey animal’s heartbeat. Its favourite hunt is a stealth rush at a seal from below, sometimes launching its whole body clear of the water. Despite its fearsome fame, it does not hunt humans — and it needs our protection.",
  sources: [
    {
        "title": "Great white shark — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/great-white-shark",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Great white shark — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/great-white-shark",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The upper length comes from well-documented historical records; most adults stay under 5 metres.",
            "Lineage age is based on fossil and molecular estimates and remains debated."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
