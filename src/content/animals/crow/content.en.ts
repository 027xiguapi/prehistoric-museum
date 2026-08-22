import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Crow",
  classificationLabel: "Songbird",
  visibleFeature: "Its feathers look plain black, but in sunlight they shimmer purple and green.",
  narration: {
    sentences: [
          "This is the crow, the famous genius of the bird world.",
          "It can fashion tools from twigs to fetch insects — and it remembers human faces."
    ],
    pronunciation: [
      {
        text: "Crow",
        reading: "KROH",
      },
    ],
  },
  facts: {
    period: "Present day (lineage around 17 million years old)",
    discoveryRegions: ["Worldwide (except Antarctica)"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Crows (corvids) are among the smartest birds: they cache food and remember thousands of hiding spots, drop stones to raise water levels, and can reason about what others know. Highly social, they gather in roosts of hundreds at dusk. Their “black” feathers carry structural colour that glints purple and green in sunlight.",
  sources: [
    {
        "title": "Crow — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/crow-bird",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Corvid research — 华盛顿大学（UW）",
        "url": "https://corvidresearch.yolasite.com/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page features typical crows; exact species varies by region.",
            "Cognition findings span several corvid species and are summarised."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
