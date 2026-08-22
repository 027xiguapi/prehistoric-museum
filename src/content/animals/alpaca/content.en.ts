import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Alpaca",
  classificationLabel: "Camelid",
  visibleFeature: "Look at its fluffy fleece and banana-shaped face, with adorably long lashes.",
  narration: {
    sentences: [
          "This is the alpaca, the fluffy farm animal of the Andes.",
          "Its soft warm fleece is sheared and spun into beautiful knitwear."
    ],
    pronunciation: [
      {
        text: "Alpaca",
        reading: "al-PAK-uh",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated around 6,000 years ago)",
    discoveryRegions: ["Andes of South America"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Alpacas were domesticated from the vicuña about six thousand years ago and served Andean civilisations as pack animals and fleece providers. Humpless and compact, their wool comes in twenty-two natural colours. Alpacas express annoyance by spitting and communicate with ear and tail postures. They live in herds and sound alarms when threatened.",
  sources: [
    {
        "title": "Alpaca — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/alpaca",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Alpaca facts — 昆士兰大学（UQ）",
        "url": "https://www.uq.edu.au/news/article/2020/05/four-facts-about-alpacas-and-why-you-need-them",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical adults.",
            "Domestication dates are archaeological approximations."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
