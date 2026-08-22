import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Stegosaurus (AR Model)",
  classificationLabel: "Armoured dinosaur (plates and tail spikes)",
  visibleFeature: "Look at the two rows of back plates and the four tail spikes — the tail was a weapon, the plates may have been billboards.",
  narration: {
    sentences: [
          "This is Stegosaurus, a plant-eater carrying two rows of huge plates.",
          "Its brain was dog-sized, but the spikes on its tail could see off predators."
    ],
    pronunciation: [
      {
        text: "Stegosaurus (AR Model)",
        reading: "STEG-o-sor-us",
      },
    ],
  },
  facts: {
    period: "Late Jurassic (about 155–150 million years ago)",
    discoveryRegions: ["western North America","Portugal"],
        size: {
      kind: 'body-length',
      minMeters: 6.5,
      maxMeters: 9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Stegosaurus carried 17–22 plates riddled with blood-vessel grooves — probably for display and recognition, and possibly for shedding heat. The four 60–90-centimetre spikes on its tail are nicknamed the “thagomizer”, a joke name from a Far Side cartoon that scientists cheerfully adopted. One fossil Allosaurus tail bone bears a puncture matching a stegosaur spike. The tiny brain made Stegosaurus a byword for dimness, but the old claim of a “second brain in the hips” is a myth.",
  sources: [
    {
        "title": "Stegosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Stegosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Stegosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stegosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This collection already has a published stegosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.",
            "The exact function of the plates (display, recognition, cooling) cannot be proven directly from fossils."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
