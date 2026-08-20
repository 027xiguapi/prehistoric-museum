import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Pug (AR Model)",
  classificationLabel: "Small domestic dog (pug)",
  visibleFeature: "Find the wrinkles on its forehead — many pugs carry a “prince mark” there.",
  narration: {
    sentences: [
          "This is the pug, with its squashed dark face and big round eyes.",
          "It snores like a tiny piglet — a sofa companion born and bred."
    ],
    pronunciation: [
      {
        text: "Pug (AR Model)",
        reading: "PUG",
      },
    ],
  },
  facts: {
    period: "Present day (breed over two thousand years old)",
    discoveryRegions: ["China (origin)","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Pugs spent more than two thousand years as royal companions in Chinese palaces before travelling the trade routes into European courts. Legend says a pet pug’s frantic barking saved William of Orange from a night ambush, and the breed became the House of Orange’s mascot. Its flattened airway brings the famous snore and a poor tolerance of heat, so summer days call for a cool room.",
  sources: [
    {
        "title": "Pug — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pug",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pug — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pug",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Pug” draft describe the same breed from two different downloaded models; before publication one will be chosen or the two merged.",
            "The William of Orange ambush story is a court legend whose details cannot be verified."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
