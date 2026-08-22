import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Donkey",
  classificationLabel: "Domestic animal (the great pack carrier)",
  visibleFeature: "Look at the long ears — much longer than a horse’s, and able to pick up a companion’s call far away.",
  narration: {
    sentences: [
          "This is the donkey, a helper humans domesticated over five thousand years ago.",
          "It carries heavy loads over rough mountain paths more surely than a horse."
    ],
    pronunciation: [
      {
        text: "Donkey",
        reading: "DON-kee",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated in Africa roughly five to seven thousand years ago)",
    discoveryRegions: ["north-eastern Africa (domestication)","worldwide today"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.8,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The donkey descends from the African wild ass and is superbly adapted to hot, dry country: it tolerates thirst and thrives on coarse forage. Its famous “stubbornness” is really caution — a donkey stops to assess danger instead of bolting like a horse, which is precisely what you want on a cliff path. It needs plenty of hay and straw, and its bray can carry three kilometres. Tens of millions of donkeys still work worldwide, and some populations are now threatened by the hide trade.",
  sources: [
    {
        "title": "Donkey — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/donkey",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Donkey — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Donkey",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The height range covers common domestic donkeys; miniature and mammoth types fall outside it.",
            "The domestication window is wide because the archaeological evidence allows several readings."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
