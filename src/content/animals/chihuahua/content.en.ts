import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Chihuahua",
  classificationLabel: "Smallest dog breed",
  visibleFeature: "Look at the huge ears and eyes — this is the world’s smallest dog breed, often under two kilograms.",
  narration: {
    sentences: [
          "This is the Chihuahua, a pocket-sized dog from Mexico.",
          "Tiny as it is, it believes itself to be a very big dog."
    ],
    pronunciation: [
      {
        text: "Chihuahua",
        reading: "chi-WAH-wa",
      },
    ],
  },
  facts: {
    period: "Present day (descended from ancient Central American companion dogs)",
    discoveryRegions: ["Mexico (Chihuahua state, the breed’s namesake)"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Chihuahua takes its name from the Mexican state of Chihuahua, and its ancestor is usually identified as the Techichi, a companion dog of the ancient Toltecs. The head is apple-domed and many keep a soft spot (molera) for life, like a baby’s fontanelle, so bumps must be avoided. Clingy, alert and vocal, it bonds fiercely with its person and suspects strangers. Being tiny brings real vulnerabilities — low blood sugar and cold intolerance — so winter jumpers are a genuine need.",
  sources: [
    {
        "title": "Chihuahua — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/chihuahua/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chihuahua (dog breed) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "Direct descent from the Techichi is the standard account, but the pedigree chain is undocumented."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
