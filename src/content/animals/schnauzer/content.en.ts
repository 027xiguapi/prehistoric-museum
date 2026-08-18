import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Schnauzer",
  classificationLabel: "Dog breed",
  visibleFeature: "Look at its bushy brows and beard — like a kindly little grandpa.",
  narration: {
    sentences: [
          "This is the schnauzer, the little dog with a beard and eyebrows.",
          "Its beard collects water and crumbs, so it gets a wipe after meals."
    ],
    pronunciation: [
      {
        text: "Schnauzer",
        reading: "SHNOW-tser",
      },
    ],
  },
  facts: {
    period: "Present day (breed around 500 years old)",
    discoveryRegions: ["Worldwide (originating in Germany)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The schnauzer is named after the German word for muzzle, Schnauze, and began as an all-round ratting dog on fifteenth-century German farms. Its famous brows and beard had a job too: shielding the face from rat bites and thorns. Alert, clever and lightly shedding, it makes a fine watchdog — and miniature, standard and giant are technically three separate breeds.",
  sources: [
    {
        "title": "Standard Schnauzer — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/standard-schnauzer/",
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
            "Sizes reflect the standard schnauzer; miniature and giant differ.",
            "Breed age is a historical approximation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
