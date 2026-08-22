import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Red Panda",
  classificationLabel: "Red panda family",
  visibleFeature: "Look at its reddish fur and big bushy tail — it helps the red panda keep its balance.",
  narration: {
    sentences: [
          "This is the red panda, a tiny climbing champion in the mountain bamboo forests of Asia.",
          "It wears reddish fur and a big ringed tail, and bamboo is its favourite food."
    ],
    pronunciation: [
      {
        text: "Red Panda",
        reading: "red PAN-da",
      },
    ],
  },
  facts: {
    period: "Present day (lineage millions of years old)",
    discoveryRegions: ["Asia (Himalayas)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.6,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Despite the shared name, red pandas are not close cousins of giant pandas — they form their own family, loosely related to raccoons and weasels. They spend most of their lives in trees, gripping branches with curved claws, eating almost nothing but bamboo plus the occasional egg or insect. Their thick reddish coats keep them warm in the mountains, and at night they wrap their tails around themselves like a blanket.",
  sources: [
    {
        "title": "Red Panda — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/red-panda",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Red panda — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/red-panda",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range is a family-friendly approximation of total length; the tail is nearly as long as the body.",
            "Draft model includes decorative pumpkin props; scene props will be reviewed before any release."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
