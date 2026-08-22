import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Velociraptor",
  classificationLabel: "Raptor dinosaur (feathers and sickle claw)",
  visibleFeature: "Look at the raised sickle claw on each foot — the real Velociraptor was turkey-sized and feathered.",
  narration: {
    sentences: [
          "This is Velociraptor, the real animal behind the movie “raptor”.",
          "In life it was feathered all over and about the size of a turkey."
    ],
    pronunciation: [
      {
        text: "Velociraptor",
        reading: "ve-LOS-i-rap-tor",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 75–71 million years ago)",
    discoveryRegions: ["Mongolia","Inner Mongolia, China"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Velociraptor was a light, long-legged hunter of the desert, with a 6.5-centimetre sickle claw on the second toe of each foot for pinning or piercing prey. In 2007 scientists found quill knobs — the “buttons” where feathers anchor — on its forearm bone, proving it really was feathered (feathers evolved for warmth and display, not flight). The famous “Fighting Dinosaurs” fossil captures a Velociraptor locked in combat with a Protoceratops. The towering movie raptors were actually modelled on the larger Deinonychus — and stripped of feathers.",
  sources: [
    {
        "title": "Velociraptor — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Velociraptor",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Velociraptor — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Velociraptor",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Much of the length is tail; body mass was only about 15–20 kilograms.",
            "The model follows the film-style scaly restoration, which the fossil evidence contradicts — the copy must say so clearly before publication."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
