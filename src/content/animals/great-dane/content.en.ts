import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Great Dane",
  classificationLabel: "Giant dog (the “gentle giant”)",
  visibleFeature: "Look at the size of it — standing on its hind legs, a Great Dane is taller than most people.",
  narration: {
    sentences: [
          "This is the Great Dane, the tallest dog breed in the world.",
          "Gentle and unaware of its size, it keeps trying to be a lap dog."
    ],
    pronunciation: [
      {
        text: "Great Dane",
        reading: "grayt dayn",
      },
    ],
  },
  facts: {
    period: "Present day (centuries old; standardised in 19th-century Germany)",
    discoveryRegions: ["Germany (where the breed was standardised)"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Despite the name, the Great Dane was developed in Germany to hunt wild boar and later became a court guardian and companion. The tallest on record, Zeus, stood 1.118 metres at the shoulder. Size has its price: the breed averages only 7–10 years of life and is prone to stomach torsion (bloat), triggered by vigorous exercise around meals, so several small meals a day are advised. Tolerant and friendly with children and other animals, it is the model for Scooby-Doo.",
  sources: [
    {
        "title": "Great Dane — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/great-dane/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Great Dane — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Great_Dane",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; shoulder height often exceeds 80 centimetres.",
            "Bloat is the breed’s leading emergency risk and should be understood before ownership."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
