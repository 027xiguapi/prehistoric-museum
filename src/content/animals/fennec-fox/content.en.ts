import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Fennec Fox",
  classificationLabel: "Small desert fox",
  visibleFeature: "Look at those huge ears! In the desert they release heat and even hear insects underground.",
  narration: {
    sentences: [
          "This is the fennec fox, the smallest fox of the Sahara Desert.",
          "Its giant ears work like little radars, and thick furry paws let it walk on burning sand."
    ],
    pronunciation: [
      {
        text: "Fennec Fox",
        reading: "FEN-ik fox",
      },
    ],
  },
  facts: {
    period: "Present day",
    discoveryRegions: ["North Africa (Sahara Desert)"],
        size: {
      kind: 'body-length',
      minMeters: 0.24,
      maxMeters: 0.4,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Smaller than a house cat, the fennec fox thrives in a desert that swings between scorching days and chilly nights: it hides in burrows by day and hunts insects, lizards and fruit by night. Those huge ears work as both radiators and radars, and its creamy coat blends into moonlit sand. It rarely needs to drink — its food provides enough water.",
  sources: [
    {
        "title": "Fennec — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/fennec",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Fennec fox — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/fennec-fox",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Body length excludes the tail (head-and-body range).",
            "Behaviour notes are a general overview and vary between populations."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
