import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Jellyfish",
  classificationLabel: "Cnidarian",
  visibleFeature: "Look at its see-through umbrella-shaped body and drifting tentacles — like a swimming parachute.",
  narration: {
    sentences: ["This is a jellyfish, an ancient animal that lives in the sea.","Its see-through body looks like an umbrella, and it pulses to drift through the water."],
    pronunciation: [
      { text: "Jellyfish", reading: "JEH-lee-fish" },
    ],
  },
  facts: {
    period: "Present day (Holocene)",
    discoveryRegions: ["Oceans worldwide"],
    size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Jellyfish are very ancient sea animals that first appeared hundreds of millions of years ago. They have no brain, heart, or bones, and their bodies are mostly water. A jellyfish swims by pulsing its bell, and its long tentacles catch small animals. Some jellyfish can sting, so it is best to keep a safe distance.",
  sources: [
    {
        "title": "Jellyfish — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/jellyfish",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Jellyfish — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/jellyfish",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["Jellyfish vary widely in size; the range here approximates common species."],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentEn
