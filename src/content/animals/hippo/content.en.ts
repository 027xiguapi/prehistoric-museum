import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Hippopotamus",
  classificationLabel: "Large semi-aquatic mammal",
  visibleFeature: "Look at that huge mouth — a hippo can open its jaws nearly 180 degrees wide.",
  narration: {
    sentences: [
          "This is the hippopotamus, a heavyweight that soaks in water by day and grazes on land at night.",
          "Despite its bulk, a hippo can run much faster than a human."
    ],
    pronunciation: [
      {
        text: "Hippopotamus",
        reading: "hip-po-POT-a-mus",
      },
    ],
  },
  facts: {
    period: "Present day (hippo family tens of millions of years old)",
    discoveryRegions: ["rivers and lakes of Sub-Saharan Africa"],
        size: {
      kind: 'body-length',
      minMeters: 3.3,
      maxMeters: 5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The hippopotamus is the third-largest land animal after elephants and white rhinos, weighing 1.5–3 tonnes. Hippos spend the day huddled in rivers and lakes to avoid sunburn, with eyes, ears and nostrils all on top of the head so the rest of the body can stay submerged. At dusk they come ashore to graze, walking kilometres and eating about 40 kilograms of grass a night. Hippo sweat is pinkish and acts like natural sunscreen. Highly territorial, they are among Africa’s most dangerous animals.",
  sources: [
    {
        "title": "Hippopotamus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hippopotamus-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Hippopotamus — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/hippopotamus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the small tail; weights of 1.5–3 tonnes vary widely by sex and individual.",
            "Hippos graze almost exclusively on grass, though rare carcass-chewing has been recorded."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
