import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Australian Shepherd",
  classificationLabel: "Herding dog (actually American)",
  visibleFeature: "Look at the merle pattern — despite the name, this breed was developed in the United States.",
  narration: {
    sentences: [
          "This is the Australian Shepherd, the busiest dog on the ranch.",
          "It gathers sheep with its gaze and quick, darting movements."
    ],
    pronunciation: [
      {
        text: "Australian Shepherd",
        reading: "os-TRAYL-yan SHEP-erd",
      },
    ],
  },
  facts: {
    period: "Present day (standardised in the American West in the 19th century)",
    discoveryRegions: ["the western United States (where the breed was standardised)"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The name is a mix-up: in the 19th century Basque shepherds arrived in America by way of Australia with their herding dogs, and Americans labelled the dogs “Australian shepherds” — the breed itself was standardised on ranches in the American West. Brilliant and tireless, it is famous for managing livestock and stars in rodeo shows and frisbee competitions. The popular merle pattern can carry inherited eye defects, so responsible breeders run genetic tests. This dog needs heavy daily exercise and mental work, and is a poor fit for sedentary homes.",
  sources: [
    {
        "title": "Australian Shepherd — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/australian-shepherd/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Australian Shepherd — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Australian_Shepherd",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; some individuals are born with a natural bobtail.",
            "The “Australian origin” is a historical misunderstanding — the breed was fixed in the United States."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
