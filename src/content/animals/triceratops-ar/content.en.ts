import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Triceratops (AR Model)",
  classificationLabel: "Horned dinosaur (three horns)",
  visibleFeature: "Count the horns on its face: two long ones above the eyes and a short one on the nose.",
  narration: {
    sentences: [
          "This is Triceratops, the plant-eater with three horns and a great frilled shield.",
          "It lived at the same time and place as Tyrannosaurus — and was on its menu."
    ],
    pronunciation: [
      {
        text: "Triceratops (AR Model)",
        reading: "try-SER-a-tops",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 68–66 million years ago)",
    discoveryRegions: ["western North America (United States, Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 8,
      maxMeters: 9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Triceratops was among the last horned dinosaurs before the extinction, and its fossils are so common in the Hell Creek Formation that it is one of the best-understood dinosaurs. The frill is an extension of the skull; in youngsters its edge bones point outwards, fusing as the animal matures — the genus Torosaurus, once thought separate, is now widely read as the elderly form of Triceratops. It cropped low ferns and shrubs with a beak, and its hundreds of teeth formed ever-replaced batteries. Bite-marked fossils confirm real battles with Tyrannosaurus.",
  sources: [
    {
        "title": "Triceratops — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Triceratops",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Triceratops — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Triceratops",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This collection already has a published triceratops entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.",
            "“Torosaurus is old Triceratops” is the leading but still debated hypothesis."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
