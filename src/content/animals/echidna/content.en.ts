import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Echidna",
  classificationLabel: "Egg-laying mammal",
  visibleFeature: "Look at the spiny coat and long snout — this mammal lays eggs.",
  narration: {
    sentences: [
          "This is the echidna, one of only two kinds of egg-laying mammals.",
          "It licks up ants and termites with a long, sticky tongue."
    ],
    pronunciation: [
      {
        text: "Echidna",
        reading: "i-KID-na",
      },
    ],
  },
  facts: {
    period: "Present day (monotreme lineage over 100 million years old)",
    discoveryRegions: ["Australia","New Guinea"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Echidnas and platypuses are monotremes — the most primitive living mammals, laying eggs like reptiles yet nursing their young with milk. When threatened, an echidna curls into a spiky ball or digs straight down with powerful claws, vanishing into the soil in minutes. It has no teeth; instead, horny pads grind up ants and termites, gathered by a tongue that extends 18 centimetres.",
  sources: [
    {
        "title": "Echidna — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/echidna-monotreme",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Short-beaked echidna — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Short-beaked_echidna",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers the common short-beaked echidna; New Guinea’s long-beaked echidnas are larger and critically endangered.",
            "Insect-eating is classified here as carnivory."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
