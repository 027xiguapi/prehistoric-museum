import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Dairy Cow",
  classificationLabel: "Domestic cattle (Holstein dairy cow)",
  visibleFeature: "Look at the big black-and-white frame — the highest-yielding dairy breed in the world.",
  narration: {
    sentences: [
          "This is the Holstein dairy cow — every glass of milk costs her dozens of kilograms of feed a day.",
          "Cows have four stomachs and chew their food twice, bringing it back up for a second go."
    ],
    pronunciation: [
      {
        text: "Dairy Cow",
        reading: "DAIR-ee kow",
      },
    ],
  },
  facts: {
    period: "Present day (cattle domesticated about ten thousand years ago; Holstein bred over two thousand years)",
    discoveryRegions: ["the Netherlands and northern Germany (Holstein homeland)"],
        size: {
      kind: 'body-length',
      minMeters: 2.4,
      maxMeters: 2.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The black-and-white Holstein-Friesian is the world’s dairy workhorse, and a top cow gives over ten thousand litres of milk a year. Cattle are ruminants: grass is swallowed half-chewed, then brought back up and rechewed at leisure — about eight hours of cud-chewing a day. Cows also have best friends: studies show pairs form lasting bonds, and separation raises their heart rate. Modern dairying raises real questions about methane and welfare, worth thinking over with your next glass of milk.",
  sources: [
    {
        "title": "Holstein-Friesian — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Holstein-Friesian",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dairy cattle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dairy_cattle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; dairy breeds differ greatly in build.",
            "Milk yields vary enormously with breed, feeding and region."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
