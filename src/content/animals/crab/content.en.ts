import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Crab",
  classificationLabel: "Crustacean (brachyuran crab)",
  visibleFeature: "Watch it walk sideways — eight legs plus two big pincers.",
  narration: {
    sentences: [
          "This is a crab, a crustacean in a suit of armour.",
          "It walks sideways, and its two big pincers are used for feeding and defence."
    ],
    pronunciation: [
      {
        text: "Crab",
        reading: "KRAB",
      },
    ],
  },
  facts: {
    period: "Present day (around 200 million years ago to today)",
    discoveryRegions: ["Oceans and coasts worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.25,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A crab’s exoskeleton works like armour, and because the armour cannot grow, crabs must moult regularly for a bigger shell. Most crabs walk sideways because their leg joints swing best side-to-side. They eat almost anything — algae, shellfish, debris — making them the clean-up crew of the shore. The largest is the Japanese spider crab, whose claw span can top three metres.",
  sources: [
    {
        "title": "Crab — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/crab",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Japanese spider crab — 英国自然历史博物馆（NHM）",
        "url": "https://www.nhm.ac.uk/discover/news/2017/may/facts-japanese-spider-crab.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers common familiar crabs and excludes the claws.",
            "Most crabs walk sideways, though a few groups such as swimming crabs can move forward."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
