import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Red Kangaroo (AR Model)",
  classificationLabel: "Largest marsupial",
  visibleFeature: "Look at the powerful hind legs and thick tail — the tail works as a counterbalance when hopping.",
  narration: {
    sentences: [
          "This is the red kangaroo, the largest marsupial in the world.",
          "A single hop can cover 8 metres — about the length of two small cars!"
    ],
    pronunciation: [
      {
        text: "Red Kangaroo (AR Model)",
        reading: "red kang-ga-ROO",
      },
    ],
  },
  facts: {
    period: "Present day (kangaroo family tens of millions of years old)",
    discoveryRegions: ["arid grasslands and deserts of inland Australia"],
        size: {
      kind: 'body-length',
      minMeters: 1.3,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The red kangaroo is the largest marsupial: males reach 90 kilograms and can hop at 60 kilometres per hour, and hopping actually becomes more energy-efficient as they speed up. A newborn joey is the size of a peanut and crawls into its mother’s pouch to finish developing over several months. Kangaroos cannot move their hind legs independently backwards, so they rarely walk in reverse. They graze on grasses and leaves and can go long periods without drinking, drawing moisture from their food.",
  sources: [
    {
        "title": "Red kangaroo — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/red-kangaroo",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Red kangaroo — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Red_kangaroo",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size is head-and-body length; the muscular tail nearly doubles the total length.",
            "This model follows the red kangaroo; other kangaroo species are noticeably smaller."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
