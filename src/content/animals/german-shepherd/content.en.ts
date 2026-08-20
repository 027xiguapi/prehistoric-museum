import type { AnimalContentEn } from '../../types'

export const en = {
  name: "German Shepherd",
  classificationLabel: "All-round working dog",
  visibleFeature: "Look at the upright ears and black-and-tan coat — the world’s most famous police dog.",
  narration: {
    sentences: [
          "This is the German Shepherd, partner to police, armies and rescue teams.",
          "The film star Rin Tin Tin made the breed famous worldwide."
    ],
    pronunciation: [
      {
        text: "German Shepherd",
        reading: "JER-man SHEP-erd",
      },
    ],
  },
  facts: {
    period: "Present day (registered in Germany in 1899)",
    discoveryRegions: ["Germany (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.95,
      maxMeters: 1.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "In 1899 cavalry captain Max von Stephanitz bought a herding dog named Horand at a show and founded the German Shepherd society, aiming above all for a working dog. Today the breed serves as police, army, search-and-rescue and guide dogs. After the First World War, Britain and America briefly renamed it the “Alsatian” to avoid the word “German”. One caution: show-line selection for an extremely sloped back (the “frog-dog” stance) is linked to hip problems, while working lines keep a flatter back.",
  sources: [
    {
        "title": "German Shepherd Dog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/german-shepherd-dog/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "German Shepherd — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/German_Shepherd",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "Show lines and working lines differ clearly in outline and hip health."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
