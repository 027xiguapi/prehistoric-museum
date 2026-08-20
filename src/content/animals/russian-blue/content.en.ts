import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Russian Blue",
  classificationLabel: "Cat breed (silver-blue shorthair)",
  visibleFeature: "Look at the blue-grey coat shimmering with silver — the guard hairs are tipped as if dusted with silver.",
  narration: {
    sentences: [
          "This is the Russian Blue, wrapped in a silvery “double coat”.",
          "It is quiet and clever, with upturned mouth corners like a permanent smile."
    ],
    pronunciation: [
      {
        text: "Russian Blue",
        reading: "RUSH-an bloo",
      },
    ],
  },
  facts: {
    period: "Present day (recorded as a breed from the late 19th century)",
    discoveryRegions: ["Russia (traditional origin)","Britain and Scandinavia (where the breed was developed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Russian Blue’s origins are wrapped in legend: sailors supposedly brought it from the Russian port of Arkhangelsk to Britain, and it appeared at London cat shows from 1875. Its rare double coat has silver-tipped guard hairs that feel like velvet. Green almond eyes and naturally upturned mouth corners form the famous “Mona Lisa smile”. Quiet, sensitive and loyal to family, it tends to be reserved with strangers and usually lives happily with children and other pets.",
  sources: [
    {
        "title": "Russian Blue — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Russian_Blue",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Russian Blue — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/russian-blue/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The Russian origin rests on legend and early show records rather than a documented chain of evidence."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
