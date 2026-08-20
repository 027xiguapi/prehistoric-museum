import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Domestic Shorthair",
  classificationLabel: "Domestic cat (shorthair type)",
  visibleFeature: "Look at its sleek short coat and shining eyes — a little hunter always ready to pounce.",
  narration: {
    sentences: [
          "This is the domestic shorthair — not a single breed, but the name for millions of mixed-ancestry house cats.",
          "The easy-care coat comes with full-strength pouncing and mousing skills."
    ],
    pronunciation: [
      {
        text: "Domestic Shorthair",
        reading: "duh-MES-tik SHORT-hair",
      },
    ],
  },
  facts: {
    period: "Present day (cats domesticated about ten thousand years ago)",
    discoveryRegions: ["homes worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "House cats descend from the African wildcat, befriending humans about ten thousand years ago at Near Eastern farmyards — the mice in the grain stores made the best introduction. Short hair is the cat’s “original edition”, with long coats appearing later as a mutation. A cat’s whiskers are sensitive aerials that judge whether a gap is wide enough, and its ears swivel almost 180 degrees to catch sounds far too faint for human ears.",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Domestic short-haired cat — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Domestic_short-haired_cat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length includes the tail; sizes vary a great deal between individuals.",
            "“Domestic shorthair” names a coat type, not a breed; this model’s pattern is just one of many."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
