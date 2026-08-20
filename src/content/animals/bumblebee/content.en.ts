import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Bumblebee",
  classificationLabel: "Bee family (bumblebee)",
  visibleFeature: "Listen to its buzzing “engine” — it shakes pollen out of flowers by vibrating its muscles.",
  narration: {
    sentences: [
          "This is the bumblebee, a round, fluffy “little flying stove”.",
          "It can warm its body to forty degrees, making it the first to work on a cool morning."
    ],
    pronunciation: [
      {
        text: "Bumblebee",
        reading: "BUM-bal-bee",
      },
    ],
  },
  facts: {
    period: "Present day (bumblebees about 30 million years old)",
    discoveryRegions: ["temperate and mountain regions of the Northern Hemisphere"],
        size: {
      kind: 'body-length',
      minMeters: 0.015,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Wrapped in thick velvet, a bumblebee shivers its flight muscles up to about forty degrees before take-off, which makes it the earliest visitor to flowers on a chilly morning. It “buzz-pollinates”: gripping a bloom and vibrating fast to shake pollen out of tubes — so greenhouse farmers hire bumblebees for tomatoes and strawberries. Unlike the honeybee’s year-round kingdom, a bumblebee colony lasts a single season; only the queen overwinters underground to found a new family in spring.",
  sources: [
    {
        "title": "Bumblebee — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/bumblebee",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bumblebee — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Bumblebee",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers queens and workers; about 250 bumblebee species exist worldwide, so this entry describes the genus.",
            "The old claim that “bumblebees shouldn’t be able to fly” is a myth — their flight fits the laws of aerodynamics perfectly."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
