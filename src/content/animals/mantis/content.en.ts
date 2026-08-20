import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Chinese Mantis",
  classificationLabel: "Predatory insect (raptorial forelegs)",
  visibleFeature: "Look at the raised “knives” — the spined forelegs lock prey in an inescapable grip.",
  narration: {
    sentences: [
          "This is the Chinese mantis, an ambush hunter waiting with blades raised.",
          "It is the only insect that can turn its head to look over its shoulder."
    ],
    pronunciation: [
      {
        text: "Chinese Mantis",
        reading: "CHY-neez MAN-tis",
      },
    ],
  },
  facts: {
    period: "Present day (mantis order over 100 million years old)",
    discoveryRegions: ["East Asia","introduced in North America"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Chinese mantis is one of the largest mantises, with a mobile triangular head and compound eyes locked on anything that moves. Folded, its forelegs look like praying hands; opened, the interlocking spines trap flies, grasshoppers and even small lizards. Females sometimes eat their mates — but that behaviour is far commoner under laboratory stress than in the wild. Its foam egg case (ootheca) survives the winter and hatches a hundred tiny mantises in spring.",
  sources: [
    {
        "title": "Chinese mantis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chinese_mantis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオカマキリ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ookamakiri.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the wingtips and the tip of the abdomen.",
            "“Sexual cannibalism” is exaggerated by pop culture; wild rates are modest."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
