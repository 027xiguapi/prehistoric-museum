import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Owl",
  classificationLabel: "Nocturnal raptor",
  visibleFeature: "Look at its spread wings — saw-toothed feather edges make an owl’s flight almost silent.",
  narration: {
    sentences: [
          "This is an owl, the quiet hunter of the night.",
          "Its dish-shaped face works like a radar dish, catching the tiniest rustle of a mouse."
    ],
    pronunciation: [
      {
        text: "Owl",
        reading: "OWL",
      },
    ],
  },
  facts: {
    period: "Present day (lineage about 55 million years old)",
    discoveryRegions: ["Worldwide (except Antarctica)"],
        size: {
      kind: 'group-range',
      minMeters: 0.15,
      maxMeters: 0.7,
      note: "Owls come in many sizes — some barely bigger than a sparrow, while big eagle-owls stand almost 70 centimetres tall.",
    },
    diet: "carnivore",
  },
  parentClassificationNote: "An owl’s forward-facing eyes work like binoculars, perfect for judging distance, while its remarkably flexible neck can turn most of the way around. Saw-toothed feather edges break up turbulence, so prey barely hears it coming. Most owls hunt at night and spend the day hidden in tree holes or foliage.",
  sources: [
    {
        "title": "Owl — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/owl",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Strigiformes — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Strigiformes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page introduces owls as a group; the exact species of the model awaits expert review.",
            "Size is described as a family range rather than a single measurement."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
