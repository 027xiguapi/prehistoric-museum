import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Frog",
  classificationLabel: "Amphibian",
  visibleFeature: "Look at its bulging eyes and long hind legs with webbed toes.",
  narration: {
    sentences: [
          "This is the frog, the jumping champion that lives in water and on land.",
          "It starts as a gill-breathing tadpole, then grows lungs and breathes through skin too."
    ],
    pronunciation: [
      {
        text: "Frog",
        reading: "FROG",
      },
    ],
  },
  facts: {
    period: "Present day (frogs around 200 million years old)",
    discoveryRegions: ["Worldwide (except polar and some island regions)"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.13,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "A frog’s thin, moist skin breathes directly — which also makes frogs sensitive to pollution, so healthy frog choruses signal healthy environments. Their eyes help swallowing: each blink pushes food down the throat. Males sing with vocal sacs to attract mates, and a tadpole’s transformation into a frog is one of nature’s greatest makeovers.",
  sources: [
    {
        "title": "Frog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/frog",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Frogs — 美国自然历史博物馆（AMNH）",
        "url": "https://www.amnh.org/explore/ology/biodiversity/frogs",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers common frogs; goliath frogs reach 30 cm.",
            "The indicator-species framing is a general science note."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
