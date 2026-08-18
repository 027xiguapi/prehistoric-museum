import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Norwegian Forest Cat",
  classificationLabel: "Longhaired cat breed",
  visibleFeature: "Find the fluffy “scarf” of long fur around its neck — that is its winter gear.",
  narration: {
    sentences: [
          "This is the Norwegian Forest Cat, a big Nordic cat wearing a thick coat.",
          "It grows fur inside its ears and between its toes, so snowy ground does not bother it."
    ],
    pronunciation: [
      {
        text: "Norwegian Forest Cat",
        reading: "nor-WEE-jun FOR-ist cat",
      },
    ],
  },
  facts: {
    period: "Present day (an old natural breed)",
    discoveryRegions: ["Northern Europe (Norway)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Norwegian Forest Cats have lived in Scandinavian forests for centuries, and legend says they even pulled the goddess Freyja’s chariot in Norse myth. Their thick, water-shedding double coat is shed each spring for a lighter summer look. They are expert climbers and can descend a tree head-first, slowly and safely.",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Domestic cat — 国家地理儿童版（Nat Geo Kids）",
        "url": "https://kids.nationalgeographic.com/animals/mammals/facts/domestic-cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Body length excludes the tail; all that fur makes the cat look even bigger.",
            "Origin stories mix legend and history; this page keeps the common introduction."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
