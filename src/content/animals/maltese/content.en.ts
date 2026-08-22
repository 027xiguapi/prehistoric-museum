import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Maltese",
  classificationLabel: "Toy dog (long white coat)",
  visibleFeature: "Look at the floor-length white coat — a breed with more than two thousand years of history as a pet.",
  narration: {
    sentences: [
          "This is the Maltese, the “sleeve dog” of Roman ladies.",
          "Its coat grows continuously like human hair and barely sheds."
    ],
    pronunciation: [
      {
        text: "Maltese",
        reading: "MOL-teez",
      },
    ],
  },
  facts: {
    period: "Present day (recorded in the Mediterranean over two thousand years ago)",
    discoveryRegions: ["the Mediterranean (traditionally linked to Malta)"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Maltese is among Europe’s oldest toy breeds: Aristotle described this “Melita dog”, and Roman ladies carried it in their sleeves. The pure white silky coat is its signature, needing daily brushing or a short pet trim. Lively, affectionate and vocal, it is braver than its size suggests. Tradition places its origin on Malta, though modern research is less certain.",
  sources: [
    {
        "title": "Maltese — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/maltese/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Maltese dog — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maltese_dog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail and floor-length furnishings.",
            "Origin on Malta is traditional; ancient sources point to several Mediterranean locations."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
