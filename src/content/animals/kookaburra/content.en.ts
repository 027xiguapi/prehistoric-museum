import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Kookaburra",
  classificationLabel: "Kingfisher",
  visibleFeature: "Listen! Its call sounds like human laughter, rolling in chorus after chorus.",
  narration: {
    sentences: [
          "This is the kookaburra, the “laughing bird” of Australian forests.",
          "Its call sounds like big human laughter — really it is announcing territory."
    ],
    pronunciation: [
      {
        text: "Kookaburra",
        reading: "KOOK-uh-bur-uh",
      },
    ],
  },
  facts: {
    period: "Present day (kingfisher family around 30 million years old)",
    discoveryRegions: ["Australia and New Guinea"],
        size: {
      kind: 'body-length',
      minMeters: 0.39,
      maxMeters: 0.47,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Kookaburras are the largest kingfishers yet rarely fish — they perch and pounce on snakes, lizards and big insects, even tackling venomous snakes. At dawn and dusk family groups “laugh” in rolling choruses that proclaim territory, the bush’s natural alarm clock. They nest in tree hollows, with helpers joining the parents to raise chicks.",
  sources: [
    {
        "title": "Laughing kookaburra — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/birds/laughing-kookaburra/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Kookaburra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kookaburra",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page features the laughing kookaburra.",
            "Diet notes are a general summary."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
