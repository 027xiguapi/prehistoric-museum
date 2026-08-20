import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Cocker Spaniel",
  classificationLabel: "Woodcock spaniel",
  visibleFeature: "Look at the silky long ears — the name “cocker” comes from the woodcock it was bred to flush.",
  narration: {
    sentences: [
          "This is the Cocker Spaniel, a hunting dog bred to flush woodcock from cover.",
          "Its tail wags at one of the fastest rates in the dog world."
    ],
    pronunciation: [
      {
        text: "Cocker Spaniel",
        reading: "KOK-er SPAN-yel",
      },
    ],
  },
  facts: {
    period: "Present day (separated from other spaniels in 19th-century Britain)",
    discoveryRegions: ["United Kingdom (where the breed was fixed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Spaniels were divided by quarry: the smaller dogs specialising in woodcock became “cockers”. A cocker drives into thick cover to flush the bird, then retrieves it after the shot. The long silky ears are the breed signature — and a trap for dirt and infection, so ears need regular cleaning. Sweet-natured, playful and vocal, it makes a fine family dog; American and English Cocker Spaniels are now separate breeds.",
  sources: [
    {
        "title": "Cocker Spaniel — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cocker-spaniel/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "English Cocker Spaniel — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/English_Cocker_Spaniel",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; English and American cockers differ in build.",
            "Ear- and eye-care needs of the long coat vary by individual."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
