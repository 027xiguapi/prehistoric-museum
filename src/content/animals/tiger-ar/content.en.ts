import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Tiger (AR Model)",
  classificationLabel: "Big cat (tiger)",
  visibleFeature: "Look at its stripes — they are printed on the skin too, and no two tigers share the same pattern.",
  narration: {
    sentences: [
          "This is the tiger, the largest cat in the world.",
          "Unlike most cats it loves swimming and will soak in a river all day in hot weather."
    ],
    pronunciation: [
      {
        text: "Tiger (AR Model)",
        reading: "TY-ger",
      },
    ],
  },
  facts: {
    period: "Present day (tiger lineage about 2 million years old)",
    discoveryRegions: ["forests and grasslands of Asia"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The tiger is the lone king of the jungle: its stripes are not merely coat-deep but printed on the skin, unique to every individual like a fingerprint. Huge as it is, it walks almost silently on paws with retractable claws, and it is the cat family’s champion swimmer, crossing wide rivers with ease. Each tiger patrols its own territory, marking borders with claw scratches and scent, and its roar carries two kilometres.",
  sources: [
    {
        "title": "Tiger — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/tiger",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Tiger — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/tiger",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Tiger” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.",
            "The length includes the tail and varies widely between subspecies, from the small Sumatran tiger to the huge Siberian tiger."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
