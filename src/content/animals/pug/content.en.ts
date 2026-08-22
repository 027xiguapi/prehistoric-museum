import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Pug",
  classificationLabel: "Small dog breed",
  visibleFeature: "Look at its flat face, big round eyes, and tightly curled tail.",
  narration: {
    sentences: [
          "This is the pug, a small dog with a wonderfully flat face.",
          "Its tail curls in a little spiral and wiggles like mad when it is happy."
    ],
    pronunciation: [
      {
        text: "Pug",
        reading: "PUG",
      },
    ],
  },
  facts: {
    period: "Present day (breed around 2,000 years old)",
    discoveryRegions: ["Worldwide (originating in China)"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The pug is an ancient Chinese breed once treasured in imperial courts. Its flat face and short nose (brachycephaly) make breathing less efficient, so pugs overheat easily and need extra care in summer. Gentle and affectionate, pugs gain weight easily and need measured meals; their wrinkles need regular cleaning.",
  sources: [
    {
        "title": "Pug — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/pug/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical adult pugs.",
            "Breed age is an approximation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
