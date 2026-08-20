import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Raccoon (AR Model)",
  classificationLabel: "Raccoon family (common raccoon)",
  visibleFeature: "Find the black “bandit mask” on its face — like a little pirate wearing an eye mask.",
  narration: {
    sentences: [
          "This is the raccoon, North America’s cleverest little “food-washer”.",
          "It dunks food in water and rubs it clean, and its clever paws can even undo bottle caps."
    ],
    pronunciation: [
      {
        text: "Raccoon (AR Model)",
        reading: "ra-KOON",
      },
    ],
  },
  facts: {
    period: "Present day (raccoon lineage millions of years old)",
    discoveryRegions: ["North America (origin)","Europe and Japan (introduced)"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A raccoon’s dark eye mask is more than make-up: the dark fur cuts glare and helps it see at night. Its front paws are extraordinarily sensitive — wet, they work almost like human fingers — and “washing” food is really a way of feeling what it is. Raccoons are city-survival champions that open bins and unclip latches; in one study they remembered how to undo a tricky latch for up to three years.",
  sources: [
    {
        "title": "Raccoon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/raccoon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Raccoon — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Raccoon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Raccoon” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.",
            "The length includes the tail; city raccoons often run plumper than their country cousins."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
