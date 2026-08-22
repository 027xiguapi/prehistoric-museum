import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Walker’s Cicada",
  classificationLabel: "Cicada (the “tsuku-tsuku” song)",
  visibleFeature: "Look at the slim body and clear wings — this is the “tsuku-tsuku-boushi” of late Japanese summer.",
  narration: {
    sentences: [
          "This is Walker’s cicada, singing “tsuku-tsuku-boushi” at summer’s end.",
          "Its song rises, plateaus and falls — as if counting down the last days of summer."
    ],
    pronunciation: [
      {
        text: "Walker’s Cicada",
        reading: "WAW-kerz si-KAY-da",
      },
    ],
  },
  facts: {
    period: "Present day (cicada family tens of millions of years old)",
    discoveryRegions: ["Japan","parts of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Japanese name tsuku-tsuku-boushi mimics the song and adds “boushi” (a monk). Its rhythm is unmistakable: quickening chirps, a sustained ringing “tsuku-tsuku” middle, then a slow fade — a soundscape of late summer turning to autumn. Nymphs spend years underground, and the adult’s season runs from late August into September.",
  sources: [
    {
        "title": "Meimuna opalifera — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Meimuna_opalifera",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ツクツクボウシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/tsukutsukubousi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wings.",
            "The Chinese common name is an onomatopoeic rendering rather than a formal name."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
