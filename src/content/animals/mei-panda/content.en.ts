import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Mei (Red Panda Form)",
  classificationLabel: "Animated character (Turning Red)",
  visibleFeature: "Look at her fluffy red-brown fur and round ears, then find her slightly embarrassed expression.",
  narration: {
    sentences: [
          "This is Mei, the girl from the film Turning Red who turns into a red panda whenever her feelings boil over.",
          "In panda form she is big, fluffy and soft — and so are her troubles."
    ],
    pronunciation: [
      {
        text: "Mei (Red Panda Form)",
        reading: "MAY",
      },
    ],
  },
  facts: {
    period: "Fictional character (film released in 2022)",
    discoveryRegions: ["fictional story (set in Toronto, Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 1.8,
      maxMeters: 2.5,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "In Pixar’s Turning Red, thirteen-year-old Mei Lee turns into a giant red panda whenever her emotions boil over — a coming-of-age “test” passed down through the women of her family. The fluffy transformation tells a story every child knows: what to do when big feelings arrive. Director Domee Shi wove in memories of her own Chinese-Canadian upbringing. The real red panda is an endangered Himalayan animal, and the film’s fame has brought new attention to protecting it.",
  sources: [
    {
        "title": "Turning Red — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Turning_Red",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Turning Red — 互联网电影数据库（IMDb）",
        "url": "https://www.imdb.com/title/tt8097060/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry is a fictional character from a Disney/Pixar film and stays a draft; publication would need the rights holder’s licence and brand review.",
            "In the film the panda form towers over adults; this model is a smaller, cuddlier version, so the size follows the model."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
