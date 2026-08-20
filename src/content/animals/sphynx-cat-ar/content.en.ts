import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Sphynx Cat (AR Model)",
  classificationLabel: "Cat breed (hairless)",
  visibleFeature: "Imagine the touch: its skin feels like a warm peach, covered in the finest down.",
  narration: {
    sentences: [
          "This is the Sphynx, a cat born nearly hairless.",
          "With no fur coat to keep it warm, it loves duvets and sunny spots."
    ],
    pronunciation: [
      {
        text: "Sphynx Cat (AR Model)",
        reading: "SFINKS kat",
      },
    ],
  },
  facts: {
    period: "Present day (breed developed from the 1960s in Canada)",
    discoveryRegions: ["Canada (where the breed was developed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Sphynx is not Egyptian — the breed descends from hairless cats found in Canada in 1966 and later in Minnesota, and the name merely evokes Egypt’s Sphinx. It actually wears a fine peach-fuzz down, and its uncovered skin shows characterful wrinkles. Hairlessness brings special care: skin oils have no fur to wick into, so regular warm baths are needed; body heat escapes quickly, so Sphynxes eat more than furred cats and need protection from sun and cold. Outgoing and people-glued, they are often called “dog-like cats”.",
  sources: [
    {
        "title": "Sphynx cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sphynx_cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Sphynx — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/sphynx/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another sphynx-cat model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "The size excludes the tail."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
