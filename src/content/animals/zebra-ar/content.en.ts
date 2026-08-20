import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Plains Zebra (AR Model)",
  classificationLabel: "Horse-family grazer (striped camouflage)",
  visibleFeature: "Study the stripes: every zebra’s pattern is different, and a herd’s stripes can dazzle a watching lion.",
  narration: {
    sentences: [
          "This is the plains zebra, the black-and-white striped “horse” of the African savanna.",
          "Scientists think the stripes confuse biting flies and stop them landing."
    ],
    pronunciation: [
      {
        text: "Plains Zebra (AR Model)",
        reading: "playnz ZEE-bra",
      },
    ],
  },
  facts: {
    period: "Present day (horse family tens of millions of years old)",
    discoveryRegions: ["grasslands of eastern and southern Africa"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The plains zebra is the most numerous of the three zebra species, grazing in herds across the grasslands of eastern and southern Africa and migrating long distances to water. The purpose of the stripes has been debated for over a century; the strongest current evidence is that they disrupt the visual systems of tsetse flies and horseflies, with possible side benefits for individual recognition and predator confusion. A zebra’s skin is actually black — the stripes are white hairs growing from it.",
  sources: [
    {
        "title": "Plains zebra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/plains-zebra",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Plains zebra — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Plains_zebra",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another zebra model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "The fly-deterrent explanation is the leading hypothesis, but research into other stripe functions continues."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
