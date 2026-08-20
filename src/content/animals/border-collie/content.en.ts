import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Border Collie",
  classificationLabel: "Herding dog (the “cleverest” breed)",
  visibleFeature: "Look at the crouched, staring pose — that is “the eye”, the collie’s secret weapon for moving sheep.",
  narration: {
    sentences: [
          "This is the Border Collie, widely considered the cleverest dog breed.",
          "One famous collie, Chaser, learnt the names of over a thousand toys."
    ],
    pronunciation: [
      {
        text: "Border Collie",
        reading: "BOR-der KOL-ee",
      },
    ],
  },
  facts: {
    period: "Present day (fixed in the 19th century on the England–Scotland border)",
    discoveryRegions: ["the border country of England and Scotland"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Border Collie is named for the hill country on the England–Scotland border, where shepherds bred purely for working ability. Most modern collies descend from a legendary 1893 dog called Old Hemp. It steers sheep by crouching and fixing them with “the eye”, and its learning power is famous: psychologist Stanley Coren ranked it first for working intelligence, and the collie Chaser recognised 1,022 toy names. That energy has to go somewhere — herding the children’s bicycles is a favourite — so this breed needs serious daily exercise and jobs to do.",
  sources: [
    {
        "title": "Border Collie — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/border-collie/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Border Collie — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Border_Collie",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "“Cleverest” refers to working and obedience rankings — canine intelligence has many dimensions."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
