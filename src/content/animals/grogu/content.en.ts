import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Grogu (The Mandalorian Character)",
  classificationLabel: "Fictional character (Star Wars)",
  visibleFeature: "Look at the big ears and eyes — this fifty-year-old “child” comes from the Star Wars universe.",
  narration: {
    sentences: [
          "This is Grogu, the breakout star of The Mandalorian.",
          "Fans first called him “Baby Yoda” because his species is as mysterious as Yoda’s."
    ],
    pronunciation: [
      {
        text: "Grogu (The Mandalorian Character)",
        reading: "GROH-goo",
      },
    ],
  },
  facts: {
    period: "Fictional (the series began streaming in 2019)",
    discoveryRegions: ["fictional universe (Star Wars)"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.45,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Grogu is a lead character of The Mandalorian: fifty years old and still a toddler, his species name still officially secret, able to lift boulders and heal wounds with the Force. On screen he snacks on frog-like creatures and blue eggs — hence the omnivore label. The character belongs to Lucasfilm/Disney, and unlike the prehistoric animals this entry can only be published with the rights holder’s licence and a brand review, so it stays a draft.",
  sources: [
    {
        "title": "Grogu — 星球大战官网",
        "url": "https://www.starwars.com/databank/grogu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Grogu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Grogu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a fictional character, not an animal; the rights belong to Lucasfilm/Disney and publication requires their licence plus brand review.",
            "The size is estimated from the show; no official height has been published."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
