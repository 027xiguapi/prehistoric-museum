import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Evening Cicada",
  classificationLabel: "Evening cicada (a sign of autumn in Japan)",
  visibleFeature: "Look at the dark body and smoky wings — the “kana-kana” chorus at dusk is this cicada.",
  narration: {
    sentences: [
          "This is the higurashi, the cicada that signals early autumn in Japanese poetry.",
          "It sings mostly at dawn and dusk, a chiming “kana-kana” like tiny bells."
    ],
    pronunciation: [
      {
        text: "Evening Cicada",
        reading: "EEV-ning si-KAY-da",
      },
    ],
  },
  facts: {
    period: "Present day (cicada family tens of millions of years old)",
    discoveryRegions: ["Japan","parts of East Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The higurashi (literally “evening cicada”) is an early-autumn season word in Japanese poetry: after the midsummer roar of other cicadas, its clear, slightly mournful “kana-kana” marks the turning year. Unlike most cicadas it favours dawn, dusk and overcast days over blazing noon. Nymphs spend years underground sipping root sap before emerging in late summer. The anime and game series “Higurashi: When They Cry” takes its name from this insect.",
  sources: [
    {
        "title": "Tanna japonensis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tanna_japonensis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ヒグラシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/higurashi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wings.",
            "Chinese usage of the character is broader; this entry follows the Japanese higurashi species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
