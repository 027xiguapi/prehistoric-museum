import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Mallard",
  classificationLabel: "Wild duck (mallard)",
  visibleFeature: "Find the glossy green head — only “Mr. Duck” has one; the female wears speckled camouflage.",
  narration: {
    sentences: [
          "This is the mallard, the most familiar wild duck on Earth and the ancestor of farm ducks.",
          "It feeds by tipping tail-up into the water — a wonderfully silly sight."
    ],
    pronunciation: [
      {
        text: "Mallard",
        reading: "MAL-ard",
      },
    ],
  },
  facts: {
    period: "Present day (duck lineage millions of years old)",
    discoveryRegions: ["temperate Northern Hemisphere","parks worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Nearly every park “quack” comes from a mother mallard — females call loudly while the male’s voice is a whisper. Mallards are dabbling experts, tipping tail-up to reach waterweed and insects below. Ducklings leave the nest on day one: the mother builds high up, and the downy chicks bravely tumble down, then march after her to the water. Nearly every farm duck descends from the mallard.",
  sources: [
    {
        "title": "Mallard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/mallard",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Mallard — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Mallard/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This wild mallard entry and the existing “Duck” draft are different models; before publication the pair will be reconciled.",
            "The length includes the tail; town-park mallards often mix with domestic ducks, so plumage varies widely."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
