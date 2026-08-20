import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Siamese Cat",
  classificationLabel: "Cat breed (colourpoint)",
  visibleFeature: "Look how the face, ears and tail are darker than the body — those “points” are a built-in temperature map.",
  narration: {
    sentences: [
          "This is the Siamese, an ancient breed from Thailand.",
          "It is famously talkative, with a loud, distinctive voice."
    ],
    pronunciation: [
      {
        text: "Siamese Cat",
        reading: "sy-a-MEEZ",
      },
    ],
  },
  facts: {
    period: "Present day (depicted in old Thai manuscripts; reached the West in the 19th century)",
    discoveryRegions: ["Thailand (formerly Siam, where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Siamese takes its name from Siam, the old name for Thailand, and colourpoint cats appear in the Thai “Cat-Book Poems” manuscripts of the 14th–18th centuries. In 1878 the American consul in Bangkok sent one to President Hayes’s family, making it among the first Asian breeds in the West. The points come from a temperature-sensitive enzyme: cooler body parts (face, ears, legs, tail) produce more pigment, so kittens are born almost white and darken as they grow. Siamese are intensely people-oriented and inquisitive, with a loud, low-pitched voice often compared to a baby’s cry.",
  sources: [
    {
        "title": "Siamese cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Siamese-cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Siamese cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Siamese_cat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the long, slim tail.",
            "Modern “wedge-head” and traditional “apple-head” Siamese differ in build; the model is closer to the traditional type."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
