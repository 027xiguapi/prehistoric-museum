import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Saber-Toothed Cat",
  classificationLabel: "Prehistoric big cat",
  visibleFeature: "Look at the two long teeth curving out of its mouth — sharp like a pair of sabers.",
  narration: {
    sentences: [
          "This is the saber-toothed cat, a prehistoric big cat from the Ice Age.",
          "Its two long, curved teeth — its sabers — are its most famous feature."
    ],
    pronunciation: [
      {
        text: "Saber-Toothed Cat",
        reading: "SAY-ber toothd cat",
      },
    ],
  },
  facts: {
    period: "Pleistocene (about 2.5 million to 10,000 years ago)",
    discoveryRegions: ["North and South America"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Saber-toothed cats were not ancestors of today’s tigers — they were a separate, extinct branch of the cat family. Their famous upper canine teeth grew over twenty centimetres long and worked like curved blades for cutting into prey. With thick, powerful limbs built for pouncing and holding, they likely hunted the sloths and wild cattle of their time. As the Ice Age ended, climates and prey changed, and the saber-toothed cats disappeared.",
  sources: [
    {
        "title": "Smilodon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Smilodon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Sabre-toothed cats — 英国自然历史博物馆",
        "url": "https://www.nhm.ac.uk/discover/sabre-toothed-cats.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“Saber-toothed cat” covers a whole group; this page focuses on the best-known genus, Smilodon.",
            "The size range is a family-friendly approximation across species, not an exact measurement."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
