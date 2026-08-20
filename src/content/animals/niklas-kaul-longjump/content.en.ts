import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Niklas Kaul (Long Jump)",
  classificationLabel: "Decathlete (long jump)",
  visibleFeature: "Watch his take-off posture — long jumpers seem to “walk” through the air before landing in the sand.",
  narration: {
    sentences: [
          "This is German decathlete Niklas Kaul competing in the long jump.",
          "The decathlon packs ten events into two days and its winner is called the “king of athletics”."
    ],
    pronunciation: [
      {
        text: "Niklas Kaul (Long Jump)",
        reading: "NIK-las kowl",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["Germany"],
        size: {
      kind: 'body-length',
      minMeters: 1.8,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Niklas Kaul won decathlon gold at the 2019 Doha World Championships, the youngest decathlon world champion in history. The decathlon comprises the 100 metres, long jump, shot put, high jump, 400 metres, 110-metre hurdles, discus, pole vault, javelin and 1500 metres over two days — an extreme test of speed, strength and endurance. In the long jump athletes sprint down a runway, take off from one foot and land feet-first in a sand pit.",
  sources: [
    {
        "title": "Niklas Kaul — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/niklas-kaul",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Niklas Kaul — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Niklas_Kaul",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "The height is approximate from public sources; the exact capture date is unpublished."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
