import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Quokka",
  classificationLabel: "Small marsupial (the “smiling” quokka)",
  visibleFeature: "Look at its mouth — naturally upturned corners make the quokka look as if it is always smiling.",
  narration: {
    sentences: [
          "This is the quokka, often called the “world’s happiest animal”.",
          "It lives only on a few islands and one small corner of mainland south-western Australia."
    ],
    pronunciation: [
      {
        text: "Quokka",
        reading: "KWOK-a",
      },
    ],
  },
  facts: {
    period: "Present day (kangaroo family tens of millions of years old)",
    discoveryRegions: ["south-western Australia","offshore islands such as Rottnest Island"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The quokka is a miniature cousin of the kangaroo, about the size of a house cat, browsing grasses, leaves and stems and going for long stretches without drinking. Rottnest Island is named after it: in 1696 a Dutch captain mistook the island’s quokkas for giant rats and called the place “Rotte nest” — rat’s nest. The famous “smile” comes from its natural facial shape, and its fearless nature has made it a selfie celebrity — though visitors must never touch or feed wildlife. Threatened by foxes, feral cats and habitat loss, the quokka is listed as Vulnerable.",
  sources: [
    {
        "title": "Quokka — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/quokka",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Quokka — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quokka",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“Happiest animal” is a media nickname, not a scientific finding; the smile is simply facial anatomy.",
            "The size range excludes the tail."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
