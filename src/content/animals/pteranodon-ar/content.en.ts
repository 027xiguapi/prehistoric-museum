import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Pteranodon (AR Model)",
  classificationLabel: "Pterosaur (a flying reptile, not a dinosaur)",
  visibleFeature: "Look at the backward-pointing crest and the long toothless beak — pterosaurs were flying reptiles, not dinosaurs.",
  narration: {
    sentences: [
          "This is Pteranodon, a great pterosaur that soared over the seas of the dinosaur age.",
          "Its wingspan was longer than a small car, yet it had no teeth at all."
    ],
    pronunciation: [
      {
        text: "Pteranodon (AR Model)",
        reading: "te-RAN-o-don",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 86–84.5 million years ago)",
    discoveryRegions: ["the inland sea of North America (Kansas region, United States)"],
        size: {
      kind: 'wingspan',
      minMeters: 5,
      maxMeters: 7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Pteranodon soared over the Late Cretaceous inland sea that split North America, riding ocean winds like an albatross and swooping down to catch fish. Crest shape differed between the sexes — males had the larger, upswept crest, probably for display. Each wing was a membrane supported by one hugely elongated fourth finger, and the hollow bones kept weight down to tens of kilograms. On the ground it probably walked on all fours. Remember: pterosaurs were flying reptiles, close cousins of dinosaurs but not dinosaurs themselves.",
  sources: [
    {
        "title": "Pteranodon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pteranodon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pteranodon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pteranodon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This collection already has a published pteranodon entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.",
            "The wingspan range chiefly reflects males; females were markedly smaller."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
