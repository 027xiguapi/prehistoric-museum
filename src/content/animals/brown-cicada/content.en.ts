import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Large Brown Cicada",
  classificationLabel: "Summer cicada (common Japanese species)",
  visibleFeature: "Look at the glassy wings and bulging eyes — this is the voice of high summer in Japan.",
  narration: {
    sentences: [
          "This is the large brown cicada, whose “miin miin” song defines Japanese summer.",
          "Males sing with drumming plates on the abdomen — among the loudest insects on Earth."
    ],
    pronunciation: [
      {
        text: "Large Brown Cicada",
        reading: "larj brown si-KAY-da",
      },
    ],
  },
  facts: {
    period: "Present day (cicada family tens of millions of years old)",
    discoveryRegions: ["Japan","parts of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.06,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The large brown cicada (abura-zemi) is among Japan’s commonest cicadas, the main voice of a midsummer noon. Only males sing: drum plates at the base of the abdomen buckle hundreds of times a second, and the hollow belly amplifies the sound. Nymphs spend three to six years underground sipping root sap, then climb out on summer nights to moult into adults that live just a few weeks. Females lay eggs in twigs, and the hatched nymphs drop to the soil to begin the cycle again.",
  sources: [
    {
        "title": "Graptopsaltria nigrofuscata — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Graptopsaltria_nigrofuscata",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "アブラゼミ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/aburazemi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wings; the underground period is an estimated range.",
            "Common names for this cicada vary across regions."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
