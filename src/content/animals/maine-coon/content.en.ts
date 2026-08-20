import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Maine Coon",
  classificationLabel: "Cat breed (giant longhair)",
  visibleFeature: "Look at the lynx-like ear tufts and the huge bushy tail — this is one of the biggest domestic cat breeds.",
  narration: {
    sentences: [
          "This is the Maine Coon, the “gentle giant” of cat breeds.",
          "Its big tufted paws work like snowshoes in winter."
    ],
    pronunciation: [
      {
        text: "Maine Coon",
        reading: "mayn KOON",
      },
    ],
  },
  facts: {
    period: "Present day (breed established in 19th-century America)",
    discoveryRegions: ["Maine, United States (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Maine Coon is one of America’s oldest natural breeds and the official state cat of Maine. It has a heavy bone structure, a water-resistant coat, and tufts of fur in its ears and between its toes against the cold; males can weigh 8–12 kilograms. Gentle and quietly vocal, Maine Coons tend to follow their people from room to room, and many keep the quick mousing reflexes of their farm-and-ship ancestors. The record for the world’s longest domestic cat — over 1.2 metres from nose to tail tip — has repeatedly been held by Maine Coons.",
  sources: [
    {
        "title": "Maine Coon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maine_Coon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Maine Coon — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/maine-coon-cat/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The upper range reflects exceptionally long individuals (over 1.2 metres including the tail); the lower end covers smaller females.",
            "The folk tale of raccoon ancestry is biologically impossible."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
