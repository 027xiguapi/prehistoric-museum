import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Sparrow",
  classificationLabel: "Small songbird",
  visibleFeature: "Look at its round head and brown back, with a dark patch on its cheek.",
  narration: {
    sentences: [
          "This is the sparrow, the little bird we see every day.",
          "Round and plump, it hops about in flocks among bushes and eaves."
    ],
    pronunciation: [
      {
        text: "Sparrow",
        reading: "SPAR-oh",
      },
    ],
  },
  facts: {
    period: "Present day (lineage several million years old)",
    discoveryRegions: ["Eurasia","Africa","introduced to the Americas and Australia"],
        size: {
      kind: 'body-length',
      minMeters: 0.14,
      maxMeters: 0.18,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "House and tree sparrows live almost entirely alongside people: in cities they take crumbs and scraps, on farms they eat weed seeds, and in summer they catch insects for their chicks. They are resident birds that do not migrate, gathering in noisy communal roosts at dusk. Sparrow numbers are declining in some big cities, and scientists are still working out why.",
  sources: [
    {
        "title": "House sparrow — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/House_Sparrow/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "House sparrow — 英国皇家鸟类保护协会（RSPB）",
        "url": "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/house-sparrow/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page covers human-associated house and tree sparrows, not other “sparrow” birds.",
            "Causes of urban declines remain unsettled."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
