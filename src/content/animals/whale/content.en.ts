import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Whale",
  classificationLabel: "Marine mammal",
  visibleFeature: "Look at its enormous body and broad tail — it is one of the largest animals on Earth.",
  narration: {
    sentences: ["This is a whale, a giant mammal that lives in the ocean.","It swims by moving its tail up and down, and it comes to the surface to breathe air."],
    pronunciation: [
      { text: "Whale", reading: "wayl" },
    ],
  },
  facts: {
    period: "Present day (Holocene)",
    discoveryRegions: ["Oceans worldwide"],
    size: {
      kind: 'body-length',
      minMeters: 12,
      maxMeters: 18,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Whales are not fish — they are mammals that live in the sea. They breathe with lungs, so they come to the surface for air now and then. A whale swims by moving its tail up and down, and a thick layer of blubber keeps it warm. The largest animal on Earth, the blue whale, belongs to this family and can grow over thirty metres long.",
  sources: [
    {
        "title": "Whale — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/whale",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Whales — NOAA",
        "url": "https://www.fisheries.noaa.gov/whales",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["“Whale” covers the whole cetacean group; this page shows a typical large whale, and the size range is a family-friendly approximation."],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentEn
