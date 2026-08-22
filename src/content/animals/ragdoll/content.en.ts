import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Ragdoll",
  classificationLabel: "Cat breed (gentle, large)",
  visibleFeature: "Look at the blue eyes and floppy body — a Ragdoll goes limp like a cloth doll when picked up.",
  narration: {
    sentences: [
          "This is the Ragdoll, a cat that relaxes completely when you hold it.",
          "It is famously gentle and loves following its people around."
    ],
    pronunciation: [
      {
        text: "Ragdoll",
        reading: "RAG-dol",
      },
    ],
  },
  facts: {
    period: "Present day (breed developed in 1960s America)",
    discoveryRegions: ["California, United States (where the breed was developed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Ragdoll was bred by Ann Baker in 1960s California and named for its habit of going limp in your arms. It is a large, semi-longhaired cat — males reach 6–9 kilograms — with colourpoint face, ears and tail and striking blue eyes. Ragdolls mature slowly, reaching full size at three to four years old. Their trusting, placid nature makes them poor candidates for free-roaming outdoor life; they do best as indoor cats.",
  sources: [
    {
        "title": "Ragdoll — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ragdoll",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ragdoll — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/ragdoll/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the plumed tail; males are clearly larger than females.",
            "The famous “flop” varies by individual — not every Ragdoll goes fully limp."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
