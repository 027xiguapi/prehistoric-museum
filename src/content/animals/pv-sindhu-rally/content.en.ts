import type { AnimalContentEn } from '../../types'

export const en = {
  name: "P. V. Sindhu (Rally)",
  classificationLabel: "Badminton player",
  visibleFeature: "Watch her move in every direction to return the shuttle — badminton is the fastest racket sport in the world.",
  narration: {
    sentences: [
          "This is Indian badminton star P. V. Sindhu in the middle of a rally.",
          "A smashed shuttlecock can travel over 400 kilometres per hour — faster than a bullet train!"
    ],
    pronunciation: [
      {
        text: "P. V. Sindhu (Rally)",
        reading: "P V SIN-doo",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["India"],
        size: {
      kind: 'body-length',
      minMeters: 1.75,
      maxMeters: 1.83,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Pusarla Venkata Sindhu is one of India’s greatest badminton players: silver at Rio 2016, bronze at Tokyo 2020 and 2019 world champion — the first Indian to win a badminton world title. Her height and long reach make her smash fearsome. A shuttlecock is 16 goose feathers set into a cork base, and its strong air drag gives it a flight path unlike any tennis ball. This model captures her mid-rally footwork.",
  sources: [
    {
        "title": "P V Sindhu — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/pv-sindhu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "P. V. Sindhu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/P._V._Sindhu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "Two other models of the same player exist (shots and smash); decide whether to keep or merge before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
