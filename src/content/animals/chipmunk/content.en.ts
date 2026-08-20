import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Chipmunk",
  classificationLabel: "Cheek-pouch squirrel",
  visibleFeature: "Look at those puffed cheeks — each pouch can hold a whole handful of nuts.",
  narration: {
    sentences: [
          "This is the chipmunk, a small striped ground squirrel.",
          "It packs nuts into its cheek pouches and carries them home to its burrow for winter."
    ],
    pronunciation: [
      {
        text: "Chipmunk",
        reading: "CHIP-munk",
      },
    ],
  },
  facts: {
    period: "Present day (squirrel family tens of millions of years old)",
    discoveryRegions: ["forests of eastern North America","northern Asia (the Siberian chipmunk)"],
        size: {
      kind: 'body-length',
      minMeters: 0.18,
      maxMeters: 0.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The chipmunk is a small ground squirrel that sleeps in a burrow, marked by five dark stripes down its back. Stuffed full, its cheek pouches can make its head look three times wider and carry dozens of acorns per trip. In autumn it hoards frantically — one burrow may hold thousands of seeds. An omnivore, it eats nuts, seeds, mushrooms, eggs and small insects. Its hibernation is not one long sleep: it wakes every few days to snack on the pantry.",
  sources: [
    {
        "title": "Chipmunk — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/chipmunk",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chipmunk — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chipmunk",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range includes the tail.",
            "Asia has only the Siberian chipmunk; all other twenty-odd species live in North America."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
