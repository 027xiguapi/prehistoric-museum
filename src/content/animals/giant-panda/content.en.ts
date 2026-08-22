import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Giant Panda",
  classificationLabel: "Bear (bamboo specialist)",
  visibleFeature: "Find the extra “sixth finger” on its wrist — a false thumb made just for gripping bamboo.",
  narration: {
    sentences: [
          "This is the giant panda, a black-and-white bear that eats tens of kilograms of bamboo a day.",
          "Its dark eye patches look like sunglasses, and a false thumb on its wrist helps it hold bamboo."
    ],
    pronunciation: [
      {
        text: "Giant Panda",
        reading: "JY-ant PAN-da",
      },
    ],
  },
  facts: {
    period: "Present day (panda lineage millions of years old)",
    discoveryRegions: ["mountains of Sichuan, Shaanxi and Gansu, China"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Giant pandas descend from meat-eating bears yet switched their menu to bamboo: a wrist bone evolved into a “false thumb” that grips stalks like a thumb, and powerful jaw muscles crunch the toughest culms. Because bamboo is low in calories, pandas feed for over half of each day and sleep through much of the rest. The black-and-white coat hides them in both snow and shadow, while a newborn cub is chalk-stick tiny — about one nine-hundredth of its mother’s weight.",
  sources: [
    {
        "title": "Giant panda — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/giant-panda",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Giant panda — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/giant-panda",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length covers adult females and males; wild and zoo pandas differ noticeably in build.",
            "Classified in the order of carnivores, pandas are introduced as herbivores because bamboo forms nearly all of their diet."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
