import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Chow Chow",
  classificationLabel: "Ancient Chinese breed",
  visibleFeature: "Look at its tongue — a blue-black tongue is the Chow Chow’s unique signature.",
  narration: {
    sentences: [
          "This is the Chow Chow, an ancient breed from China.",
          "It walks as if on stilts because its hind knees barely bend."
    ],
    pronunciation: [
      {
        text: "Chow Chow",
        reading: "chow chow",
      },
    ],
  },
  facts: {
    period: "Present day (Chow-like dogs recorded in China over two thousand years ago)",
    discoveryRegions: ["northern China (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.7,
      maxMeters: 0.85,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Chow Chow is one of China’s oldest breeds — pottery figurines from the Han dynasty already show its outline. It worked as a hunter, hauler and guard. The blue-black tongue comes from dense melanin pigment; puppies are born with pink tongues that darken within weeks. The stilted gait comes from unusually straight hind knees. Independent, almost cat-clean and loyal to family but aloof with strangers, it wears a thick double coat that needs regular grooming — and it suffers in summer heat.",
  sources: [
    {
        "title": "Chow Chow — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/chow-chow/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chow Chow — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chow_Chow",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The “two thousand years” claim rests on figurines and similar indirect evidence; the exact pedigree cannot be traced that far."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
