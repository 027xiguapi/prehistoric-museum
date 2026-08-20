import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Robust Cicada",
  classificationLabel: "Cicada (the “min-min” song)",
  visibleFeature: "Look at the glassy wings folded over its back — this is the “min-min” singer of late Japanese summer.",
  narration: {
    sentences: [
          "This is the robust cicada, singing “min-min” at the end of summer.",
          "Its song is bright and urgent, and it sings loudest on the hottest days."
    ],
    pronunciation: [
      {
        text: "Robust Cicada",
        reading: "roh-BUST si-KAY-da",
      },
    ],
  },
  facts: {
    period: "Present day (cicada family tens of millions of years old)",
    discoveryRegions: ["Japan","parts of East and South-East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.035,
      maxMeters: 0.045,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The robust cicada (min-min-zemi) is named for its urgent “meen, min-min” song, the signature sound of late summer and early autumn. It appears later than the large brown cicada and favours trees at the forest edge. Nymphs spend years underground on root sap before emerging at summer’s end. A cicada sings like a clicked drinks can: the male’s abdominal drum buckles hundreds of times a second and the hollow body carries the sound a hundred metres.",
  sources: [
    {
        "title": "Hyalessa maculaticollis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hyalessa_maculaticollis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ミンミンゼミ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/minminzemi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wings.",
            "The Chinese common name is a calque of the Japanese name rather than a formal name."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
