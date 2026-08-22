import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Poodle",
  classificationLabel: "Water retriever (three sizes)",
  visibleFeature: "Look at the “lion clip” — those pompoms were originally left to protect joints and organs from icy water.",
  narration: {
    sentences: [
          "This is the Poodle, a clever dog bred as a water retriever.",
          "It regularly ranks second in canine intelligence lists."
    ],
    pronunciation: [
      {
        text: "Poodle",
        reading: "POO-dul",
      },
    ],
  },
  facts: {
    period: "Present day (centuries old; the national dog of France)",
    discoveryRegions: ["Germany (name and ancestry)","France (standardisation)"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The name Poodle comes from the German “pudeln”, to splash: the breed descends from European water retrievers that fetched ducks from icy water. The famous clip was working gear — pompoms left over the chest and joints for warmth, the rest clipped short for swimming. France turned it into a circus star and its national dog. Poodles come in standard, miniature and toy sizes, and the curly coat barely sheds, earning a “hypoallergenic” reputation — though dog allergy is triggered by dander, not hair, so no breed is truly allergy-free.",
  sources: [
    {
        "title": "Poodle — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/poodle-standard/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Poodle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Poodle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers the standard poodle; miniature and toy varieties are much smaller.",
            "“Hypoallergenic” is a popular claim — medically, no dog is completely non-allergenic."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
