import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Welsh Corgi",
  classificationLabel: "Cattle herder (short legs)",
  visibleFeature: "Look at the short legs and long body — built low so kicking cows miss.",
  narration: {
    sentences: [
          "This is the Corgi, a cattle-herding dog in a small, low package.",
          "Queen Elizabeth II kept more than thirty of them during her life."
    ],
    pronunciation: [
      {
        text: "Welsh Corgi",
        reading: "welsh KOR-gee",
      },
    ],
  },
  facts: {
    period: "Present day (a Welsh cattle-herding tradition a thousand years old)",
    discoveryRegions: ["Wales, United Kingdom (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.65,
      maxMeters: 0.8,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "“Corgi” is Welsh for “dwarf dog”. It herds cattle by nipping their heels and dropping flat when a hoof flies back. There are two breeds: the Cardigan, which keeps a long tail, and the Pembroke, traditionally born or docked short-tailed. Corgis became royal icons from 1933, and the Queen’s first was named Susan. The long spine on short legs makes disc problems a real risk, and weight control matters.",
  sources: [
    {
        "title": "Pembroke Welsh Corgi — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/pembroke-welsh-corgi/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Welsh Corgi — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Welsh_Corgi",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; Cardigan and Pembroke varieties differ slightly.",
            "The model follows the Pembroke type."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
