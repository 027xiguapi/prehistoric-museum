import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Jindo Dog",
  classificationLabel: "Korean native dog",
  visibleFeature: "Look at the pricked ears and sickle tail — the Jindo is famous for devotion to its owner.",
  narration: {
    sentences: [
          "This is the Jindo, a hunting dog from Korea’s Jindo Island.",
          "It bonds to one person for life — in Korea its name means loyalty itself."
    ],
    pronunciation: [
      {
        text: "Jindo Dog",
        reading: "JIN-doh dog",
      },
    ],
  },
  facts: {
    period: "Present day (island stock centuries old; made a Korean Natural Monument in 1962)",
    discoveryRegions: ["Jindo Island, South Korea (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Jindo was bred in relative isolation for centuries on Jindo Island off Korea’s south-west coast, helping to hunt deer and rabbits. Island life fixed a legendary homing instinct: there are well-documented Korean stories of Jindos travelling hundreds of kilometres back to their original owners. Almost cat-like, it grooms itself and is naturally clean indoors; gentle with family but wary of strangers and other dogs, it needs patient socialisation.",
  sources: [
    {
        "title": "Korean Jindo — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Korean_Jindo",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Korean Jindo Dog — 美国养犬俱乐部基金会（AKC FSS）",
        "url": "https://www.akc.org/dog-breeds/korean-jindo-dog/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The “one-person dog” claim is breed tradition; individuals vary widely."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
