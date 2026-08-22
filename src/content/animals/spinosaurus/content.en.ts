import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Spinosaurus",
  classificationLabel: "Semi-aquatic predator (sail back)",
  visibleFeature: "Look at the tall “sail” on its back and the crocodile-like snout — Spinosaurus was the most water-loving of the big meat-eaters.",
  narration: {
    sentences: [
          "This is Spinosaurus, a sail-backed giant that loved catching fish.",
          "Longer even than Tyrannosaurus, it is the longest meat-eating dinosaur known."
    ],
    pronunciation: [
      {
        text: "Spinosaurus",
        reading: "SPY-no-sor-us",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 99–93.5 million years ago)",
    discoveryRegions: ["North Africa (Morocco, Egypt)"],
        size: {
      kind: 'body-length',
      minMeters: 14,
      maxMeters: 15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Spinosaurus wore a sail supported by vertebral spines up to 1.7 metres tall, perhaps for display or temperature control. Fossils revealed in 2014 and 2020 rewrote its image completely: short hind legs, broad claws and a paddle-shaped tail show it spent much of its life in North African rivers, hunting fish and sawfish like a giant heron. Cone-shaped teeth gripped slippery prey, and its nostrils sat far back so it could breathe while mostly submerged. Whether it was an active swimmer or a wading “fisherman” is still hotly debated.",
  sources: [
    {
        "title": "Spinosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/spinosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Spinosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Spinosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The “longest meat-eater” claim rests on incomplete fossils and estimates keep being revised.",
            "Whether it swam actively or waded at the shore remains an active scientific debate."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
