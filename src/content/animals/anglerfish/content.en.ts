import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Anglerfish",
  classificationLabel: "Deep-sea fish (anglerfish order)",
  visibleFeature: "Find the “fishing rod” on its head — the little light at the tip blinks in the dark.",
  narration: {
    sentences: [
          "This is the anglerfish, a little hunter living in the pitch-black deep sea.",
          "A rod grows out of its head, and the glowing bulb at its tip lures curious little fish close."
    ],
    pronunciation: [
      {
        text: "Anglerfish",
        reading: "ANG-gler-fish",
      },
    ],
  },
  facts: {
    period: "Present day (deep-sea lineage tens of millions of years old)",
    discoveryRegions: ["deep oceans worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The anglerfish’s little lantern shelters glowing bacteria — the light itself is made by the microbes, working like a lure lamp in the pitch-dark deep sea. Long, backward-pointing teeth line its huge mouth, so prey that is bitten can never back out. Finding a partner in the deep sea is so hard that in some species the tiny male bites onto a female and stays there for life, one of the ocean’s strangest families.",
  sources: [
    {
        "title": "Anglerfish — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/anglerfish",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Anglerfish — 美国国家海洋和大气管理局（NOAA）",
        "url": "https://oceanexplorer.noaa.gov/facts/anglerfish.html",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Anglerfishes are a large family with wildly different sizes; the range here covers common deep-sea species.",
            "Bacterial light and male attachment happen only in some species, presented as family-wide curiosities."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
