import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Lion (AR Model)",
  classificationLabel: "Big cat (the social one)",
  visibleFeature: "Count the dark tuft on its tail tip — lions “talk” to pride-mates with those tufts.",
  narration: {
    sentences: [
          "This is the lion, the only cat that lives in a big family group.",
          "Lionesses hunt as a team, while the male’s mane is his regal “scarf”."
    ],
    pronunciation: [
      {
        text: "Lion (AR Model)",
        reading: "LY-un",
      },
    ],
  },
  facts: {
    period: "Present day (lion lineage millions of years old)",
    discoveryRegions: ["Sub-Saharan Africa","a small population in India"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Lions are the only truly sociable cats: a pride usually gathers several related lionesses, their cubs and one or two males. The lionesses hunt in a fan formation, driving wildebeest and zebra towards hidden companions. A male’s mane is more than decoration — studies suggest a dark, thick mane “tells” rivals he is strong. After dark, a lion’s roar carries eight kilometres, announcing who owns the land.",
  sources: [
    {
        "title": "Lion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lion",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Lion — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/lion",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Lion” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.",
            "The range covers head-to-tail length; males run longer than females and look larger still under the mane."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
