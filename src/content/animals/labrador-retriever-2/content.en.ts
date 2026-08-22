import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Labrador Retriever (Model Two)",
  classificationLabel: "Retriever (the favourite family dog)",
  visibleFeature: "Look at the thick otter-like tail — it works as a rudder when swimming.",
  narration: {
    sentences: [
          "This is the Labrador Retriever, for years the world’s most popular dog breed.",
          "Its ancestors helped Newfoundland fishermen retrieve nets and fish."
    ],
    pronunciation: [
      {
        text: "Labrador Retriever (Model Two)",
        reading: "LAB-ra-dor ri-TREE-ver",
      },
    ],
  },
  facts: {
    period: "Present day (fixed in 19th-century Britain from Newfoundland stock)",
    discoveryRegions: ["United Kingdom (where the breed was fixed)","Newfoundland, Canada (ancestral homeland)"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Labrador’s ancestors came not from Labrador but from Newfoundland, where the “lesser water dog” hauled nets and fetched escaped fish. Brought to Britain in the early 19th century, it was fixed as a retrieving gundog. Its short, dense, oily coat sheds water, and webbed toes plus the rudder tail are swimming gear. Food-loving, people-oriented and playful, it is the commonest guide-dog and detection-dog breed; obesity is its great health enemy.",
  sources: [
    {
        "title": "Labrador Retriever — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/labrador-retriever/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Labrador Retriever — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Labrador_Retriever",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This batch contains two different Labrador models and this is the second; before publication one will be chosen or the two merged.",
            "The size excludes the tail."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
