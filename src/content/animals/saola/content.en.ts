import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Saola",
  classificationLabel: "Critically endangered antelope (“Asian unicorn”)",
  visibleFeature: "Look for the white face markings and the two parallel horns — from the side they overlap and look like one.",
  narration: {
    sentences: [
          "This is the saola, a mysterious animal only described by science in 1992.",
          "Its two horns merge into one when seen in profile, earning it the name “Asian unicorn”."
    ],
    pronunciation: [
      {
        text: "Saola",
        reading: "SOW-la",
      },
    ],
  },
  facts: {
    period: "Present day (first described by science in 1992)",
    discoveryRegions: ["Annamite Mountains on the Vietnam–Laos border"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The saola was one of the most spectacular zoological finds of the 20th century: in 1992 scientists described it as a new species from hunters’ horns and skulls, an animal completely unknown to science before. It lives only in the wet mountain forests of the Annamite range on the Vietnam–Laos border, browsing quietly on fig leaves and other vegetation. Sightings are so rare that it is nicknamed the “Asian unicorn”. It is critically endangered — perhaps only tens to a few hundred survive — threatened mainly by wire snares set by poachers.",
  sources: [
    {
        "title": "Saola — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/saola",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Saola — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Saola",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Wild population estimates are highly uncertain, from tens to a few hundred animals.",
            "Despite the “antelope” label it belongs to the cattle subfamily, closer to cows than to true antelopes."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
