import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Shark",
  classificationLabel: "Cartilaginous fish",
  visibleFeature: "Look at its torpedo body and upright dorsal fin — it swims in perfect silence.",
  narration: {
    sentences: [
          "This is the shark, one of the ocean’s oldest hunters.",
          "Its skeleton is made of cartilage, and its skin is covered in tiny “skin teeth”."
    ],
    pronunciation: [
      {
        text: "Shark",
        reading: "SHARK",
      },
    ],
  },
  facts: {
    period: "Present day (around 450 million years ago to today)",
    discoveryRegions: ["Oceans worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 2,
      maxMeters: 4,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Sharks are older than dinosaurs and have patrolled the oceans for over 400 million years. Their skeletons are built from light cartilage, and their skin is covered with dermal denticles — tooth-like scales that feel like sandpaper. Special sense organs called ampullae of Lorenzini let sharks detect the faint electric fields of hidden prey.",
  sources: [
    {
        "title": "Shark — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/shark",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Shark — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/shark",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range features large predatory sharks such as the great white; sharks as a group vary enormously.",
            "Sense-organ and skin notes are a general introduction."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
