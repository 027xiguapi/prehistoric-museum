import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Akita",
  classificationLabel: "Large Japanese dog",
  visibleFeature: "Look at the fluffy tail curled over its back and the bear-like head — an ancient snow-country dog from Japan.",
  narration: {
    sentences: [
          "This is the Akita, Japan’s most famous large dog.",
          "Hachikō, the dog who waited years for his owner, was an Akita — his statue stands outside Tokyo’s Shibuya Station."
    ],
    pronunciation: [
      {
        text: "Akita",
        reading: "a-KEE-ta",
      },
    ],
  },
  facts: {
    period: "Present day (centuries-old breed; made a Japanese Natural Monument in 1931)",
    discoveryRegions: ["Akita Prefecture, Japan (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.9,
      maxMeters: 1.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Akita comes from snowy Akita Prefecture in northern Japan, where it once helped hunters track bear and boar and served as a guard. Powerful and double-coated, it is dignified and loyal but reserved with strange dogs. Hachikō, who kept coming to Shibuya Station for nine years after his owner died, became the world’s symbol of canine loyalty, and Helen Keller’s gift dog Kamikaze-go carried the breed to America. Akitas need experienced owners, early socialisation and daily exercise.",
  sources: [
    {
        "title": "Akita — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/akita/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Akita (dog breed) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Akita_(dog_breed)",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the curled tail; Japanese and American Akita types differ in build.",
            "Tolerance of strangers varies individually and depends heavily on early socialisation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
