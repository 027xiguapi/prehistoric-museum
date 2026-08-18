import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Centipede",
  classificationLabel: "Many-legged arthropod",
  visibleFeature: "Count the legs along its sides — one pair per body segment, rippling like waves when it runs.",
  narration: {
    sentences: [
          "This is the centipede, a little hunter with very many legs.",
          "Each body segment carries one pair of legs, and they ripple in waves as it walks."
    ],
    pronunciation: [
      {
        text: "Centipede",
        reading: "SEN-ti-peed",
      },
    ],
  },
  facts: {
    period: "Present day (around 400 million years ago to today)",
    discoveryRegions: ["Warm regions worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Centipedes are nocturnal mini-hunters that subdue insects and spiders with venomous forcipules. Despite the name “hundred feet”, most centipedes have only a few dozen legs — one pair per segment, which is the key difference from millipedes that carry two pairs. Centipedes favour damp leaf litter and stones, and are important recyclers in the forest.",
  sources: [
    {
        "title": "Centipede — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/centipede",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Centipedes — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/centipedes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers common families; tropical giants can be longer.",
            "One leg pair per segment holds for almost all centipedes, with a few exceptions."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
