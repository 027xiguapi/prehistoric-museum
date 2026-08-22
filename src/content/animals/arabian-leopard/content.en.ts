import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Arabian Leopard",
  classificationLabel: "Big cat",
  visibleFeature: "Look at its rosette spots — every leopard’s pattern is one of a kind.",
  narration: {
    sentences: [
          "This is the Arabian leopard, one of the rarest leopards on Earth.",
          "Its rosette spots let it melt into the shadows of the rocks."
    ],
    pronunciation: [
      {
        text: "Arabian Leopard",
        reading: "uh-RAY-bee-in LEH-perd",
      },
    ],
  },
  facts: {
    period: "Present day (lineage around 500,000 years old)",
    discoveryRegions: ["Arabian Peninsula"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Arabian leopard is a small, desert-adapted leopard subspecies of the Arabian Peninsula’s mountains, hunting gazelles, wild goats and hyraxes mostly at night. It is the peninsula’s biggest cat yet critically endangered — perhaps only around two hundred remain in the wild. Leopards are also master climbers and can haul prey up trees to keep it safe.",
  sources: [
    {
        "title": "Arabian leopard — 世界自然保护联盟（IUCN）",
        "url": "https://www.iucnredlist.org/species/26461/212810598",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Leopard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/leopard",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Wild population figures are rough recent estimates and change over time.",
            "Subspecies status is still debated and may be raised to full species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
