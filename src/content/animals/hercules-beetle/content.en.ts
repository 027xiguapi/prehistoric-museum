import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Hercules Beetle",
  classificationLabel: "Beetle (rhinoceros beetle family)",
  visibleFeature: "Look at the long “rhinoceros horn” on the male — its wrestling weapon.",
  narration: {
    sentences: [
          "This is the Hercules beetle, one of the biggest beetles on Earth.",
          "The male’s long horn is used to wrestle rivals."
    ],
    pronunciation: [
      {
        text: "Hercules Beetle",
        reading: "HUR-kyoo-leez BEE-tl",
      },
    ],
  },
  facts: {
    period: "Present day (around 100 million years ago to today)",
    discoveryRegions: ["Central and South American rainforests"],
        size: {
      kind: 'body-length',
      minMeters: 0.1,
      maxMeters: 0.18,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "By total length the Hercules beetle is among the largest beetles; the male’s horn can be nearly half his body. Famously strong, they can lift several hundred times their own weight. Larvae live in rotting wood for a year or two, while adults feed on sap and fruit. Horn size varies widely and depends on larval nutrition.",
  sources: [
    {
        "title": "Hercules beetle — 内布拉斯加大学（UNL）昆虫系",
        "url": "https://entomology.unl.edu/k12/herculesbeetle.htm",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dynastes hercules — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Dynastes_hercules/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Lengths include the horn; body-only males reach roughly 5–8 cm.",
            "Strength multipliers vary across studies."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
