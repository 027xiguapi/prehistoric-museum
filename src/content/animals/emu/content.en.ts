import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Emu",
  classificationLabel: "Ratite bird",
  visibleFeature: "Look at its long thin neck and shaggy “hair” — its wings are barely more than decoration.",
  narration: {
    sentences: [
          "This is the emu, Australia’s giant flightless bird.",
          "It cannot fly, but it outruns any human."
    ],
    pronunciation: [
      {
        text: "Emu",
        reading: "EE-myoo",
      },
    ],
  },
  facts: {
    period: "Present day (genus around 1 million years old)",
    discoveryRegions: ["Mainland Australia"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The emu is the world’s second-largest bird after the ostrich. Its wings have shrunk to hand-size, while powerful legs sprint at 50 km/h. The loose, hair-like feathers shed no water but insulate well. Emu dads are model fathers: after the female lays and leaves, he incubates the clutch for two months without eating, then raises the chicks alone.",
  sources: [
    {
        "title": "Emu — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/birds/emu/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Emu — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emu",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Sizes reflect standing height (1.5–1.9 m).",
            "Running speeds are approximate field records."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
