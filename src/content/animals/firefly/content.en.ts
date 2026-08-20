import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Firefly",
  classificationLabel: "Glowing beetle",
  visibleFeature: "Look at the light organ on its abdomen — firefly light is “cold light” that wastes almost no energy as heat.",
  narration: {
    sentences: [
          "This is the firefly, the little lantern beetle of summer nights.",
          "Each flash is a coded signal for finding a mate."
    ],
    pronunciation: [
      {
        text: "Firefly",
        reading: "FY-er-fly",
      },
    ],
  },
  facts: {
    period: "Present day (firefly family over 100 million years old)",
    discoveryRegions: ["East Asia (clean streamsides in Japan, China and neighbours)"],
        size: {
      kind: 'body-length',
      minMeters: 0.01,
      maxMeters: 0.02,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Fireflies are actually beetles: in light-producing cells of the abdomen, the chemical luciferin reacts with oxygen in front of an enzyme to make light at nearly one hundred per cent efficiency — far better than an incandescent bulb. Each species flashes its own rhythm: males signal on the wing and females answer from the grass with the correct code. The larvae live by streams and are fierce little hunters of snails. Because fireflies need clean water and real darkness, light pollution and concrete riverbanks have made them rare.",
  sources: [
    {
        "title": "Firefly — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/firefly-insect",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Firefly — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Firefly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers common aquatic fireflies; species differ considerably.",
            "The near-100 per cent figure is chemical-to-light efficiency, an approximation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
