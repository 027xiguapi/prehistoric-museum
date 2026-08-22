import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Cane Corso (AR Model)",
  classificationLabel: "Italian guardian dog",
  visibleFeature: "Look at the broad head and powerful body — the breed name comes from Latin for “guardian dog”.",
  narration: {
    sentences: [
          "This is the Cane Corso, an ancient Italian guardian and farm dog.",
          "Its ancestors are traced back to the war dogs of ancient Rome."
    ],
    pronunciation: [
      {
        text: "Cane Corso (AR Model)",
        reading: "KAH-nay KOR-so",
      },
    ],
  },
  facts: {
    period: "Present day (tradition traced to ancient Rome; revived in the 1980s)",
    discoveryRegions: ["southern Italy (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The name Cane Corso is usually traced to the Latin “cohors”, meaning guardian or courtyard watch. It worked on southern Italian farms guarding stock, driving boar and protecting the homestead, then nearly vanished after the Second World War; in the 1980s enthusiasts gathered the remaining country dogs and rebuilt the breed. Steady, focused and devoted to family, it has strong guardian instincts and needs an experienced owner and systematic socialisation.",
  sources: [
    {
        "title": "Cane Corso — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cane-corso/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Cane Corso — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cane_Corso",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another Cane Corso model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "Direct descent from Roman war dogs is breed tradition, not a documented pedigree."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
