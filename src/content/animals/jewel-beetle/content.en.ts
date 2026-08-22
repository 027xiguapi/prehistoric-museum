import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Jewel Beetle",
  classificationLabel: "Jewel beetle (metallic sheen)",
  visibleFeature: "Look at the rainbow metallic shine — that colour comes from light-bending shell layers, not pigment.",
  narration: {
    sentences: [
          "This is the jewel beetle, a flying gemstone.",
          "In Japan, tens of thousands of jewel-beetle wing cases once decorated a temple shrine."
    ],
    pronunciation: [
      {
        text: "Jewel Beetle",
        reading: "JOO-el BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (jewel-beetle family over 100 million years old)",
    discoveryRegions: ["Japan","forests of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A jewel beetle’s rainbow is structural: nanometre-thin layers in the wing cases interfere with light, so the metallic shine never fades — Nara’s Hōryū-ji temple inlaid tens of thousands of wing cases into its Tamamushi Shrine. Larvae tunnel in dead or weakened wood, and adults visit summer flowers for sap and pollen. Some jewel beetles detect forest fires by infrared and fly straight to freshly burned woodland to lay eggs.",
  sources: [
    {
        "title": "Buprestidae — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Buprestidae",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "玉虫（タマムシ）— 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/tamamushi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers common jewel beetles; the family varies widely.",
            "The exact wing-case count on the Tamamushi Shrine differs between historical sources."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
