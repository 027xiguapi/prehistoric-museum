import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Giraffe",
  classificationLabel: "Tallest land animal",
  visibleFeature: "Count the patches on its coat — every giraffe’s pattern is completely unique.",
  narration: {
    sentences: [
          "This is the giraffe, the tallest land animal in the world.",
          "Its long, nimble tongue reaches acacia leaves high above the ground."
    ],
    pronunciation: [
      {
        text: "Giraffe",
        reading: "ji-RAF",
      },
    ],
  },
  facts: {
    period: "Present day (giraffe lineage millions of years old)",
    discoveryRegions: ["savannas of Sub-Saharan Africa"],
        size: {
      kind: 'body-length',
      minMeters: 3.8,
      maxMeters: 4.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Standing 4–6 metres tall, a giraffe’s neck alone can reach two metres — yet it has only seven neck bones, the same number as humans, each one greatly elongated. The dark blue-purple tongue extends up to 45 centimetres and wraps around thorny acacia branches. A giraffe’s heart weighs over 10 kilograms and pumps blood up the long neck at very high pressure. Coat patterns are as unique as fingerprints, and recent research suggests “the giraffe” may actually be several species.",
  sources: [
    {
        "title": "Giraffe — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/giraffe",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Giraffe — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/giraffe",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size is body length; standing height (4–6 metres) is far greater.",
            "Giraffe taxonomy is debated — one species with subspecies, or several distinct species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
