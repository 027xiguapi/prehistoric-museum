import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Giant Stag Beetle",
  classificationLabel: "Giant stag beetle (Japan)",
  visibleFeature: "Look at the huge jaws — the antler-like mandibles are a male’s duelling weapons.",
  narration: {
    sentences: [
          "This is the giant stag beetle, the largest stag beetle in Japan.",
          "Males grip rivals in their great jaws and hurl them off the tree trunk."
    ],
    pronunciation: [
      {
        text: "Giant Stag Beetle",
        reading: "JY-ant stag BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (stag-beetle family tens of millions of years old)",
    discoveryRegions: ["Japan","parts of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.075,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The giant stag beetle (Dorcus hopei) is king of Japan’s stag beetles and a favourite of insect keepers — large males were once nicknamed “black diamonds” of the insect world. Its mandibles can exceed half the body length, and the pattern of inner teeth hints at where the beetle came from. Larvae eat rotten hardwood for two or three years; adults gather on summer nights at sap flows on oak trunks. The smaller-jawed females lay eggs inside decaying wood.",
  sources: [
    {
        "title": "Dorcus hopei — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dorcus_hopei",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオクワガタ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ookuwagata.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size includes the mandibles; females are much smaller.",
            "Chinese common names vary; the Japanese kanji name is the reliable identifier."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
