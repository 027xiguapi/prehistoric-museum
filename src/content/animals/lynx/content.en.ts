import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Eurasian Lynx",
  classificationLabel: "Wild cat (lynx family)",
  visibleFeature: "Look at the two black “antenna tufts” on its ear tips — the lynx’s calling card.",
  narration: {
    sentences: [
          "This is the lynx, the shadowy big-footed cat of northern forests.",
          "Its broad paws work like snowshoes, letting it tiptoe across deep snow."
    ],
    pronunciation: [
      {
        text: "Eurasian Lynx",
        reading: "YOOR-ay-zhun LINX",
      },
    ],
  },
  facts: {
    period: "Present day (lynx lineage millions of years old)",
    discoveryRegions: ["forests of northern Europe and Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The lynx is a shy, solitary hunter; the long black hairs on its ear tips work like antennas, helping it pinpoint exactly where a sound comes from. Its wide, thickly furred paws act as built-in snowshoes, letting it skim over deep snow in pursuit of hares. Many European countries once hunted the lynx to extinction, and decades of reintroduction are slowly returning balance to the forests — it is the invisible cat that guards them.",
  sources: [
    {
        "title": "Lynx — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lynx-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Eurasian lynx — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Eurasian_lynx",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This model comes from the Nordic collection and should be the Eurasian lynx; it resembles the Canadian lynx, so identification will be rechecked before publication.",
            "Prey varies by region; in northern Europe roe deer and hares dominate."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
