import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Shining Dung Scarab",
  classificationLabel: "Dung scarab (rainbow sheen)",
  visibleFeature: "Look at the rainbow-domed shell — a beautiful beetle whose job is moving dung.",
  narration: {
    sentences: [
          "This is the shining dung scarab, a cleaner that rolls animal droppings into balls.",
          "By burying dung it keeps the grassland clean and fertilised."
    ],
    pronunciation: [
      {
        text: "Shining Dung Scarab",
        reading: "SHY-ning dung SKA-rab",
      },
    ],
  },
  facts: {
    period: "Present day (scarab lineage over 100 million years old)",
    discoveryRegions: ["Japan","forests and grasslands of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.015,
      maxMeters: 0.025,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The shining dung scarab looks like a moving rainbow bead, yet its work is handling animal droppings: it rolls dung into balls and buries them as food or nurseries. That dirty job is ecologically vital — dung is broken down quickly, nutrients return to the soil, and parasites and flies are suppressed. The sacred scarab of ancient Egypt was a relative: the dung ball stood for the sun, and the beetle for the god who pushes the sun across the sky.",
  sources: [
    {
        "title": "Phelotrupes laevistriatus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Phelotrupes_laevistriatus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "センチコガネ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/sentikogane.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size is in millimetres and the model is shown greatly enlarged.",
            "The diet of dung and humus is recorded here as omnivory."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
