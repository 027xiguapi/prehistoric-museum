import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Bull Terrier",
  classificationLabel: "Terrier (the “egg head”)",
  visibleFeature: "Look at the smoothly domed head in profile — the “egg head” is unique in the dog world.",
  narration: {
    sentences: [
          "This is the Bull Terrier, the terrier with an egg-shaped head.",
          "Muscular and mischievous, it is nicknamed “the kid in a dog suit”."
    ],
    pronunciation: [
      {
        text: "Bull Terrier",
        reading: "bul TER-ee-er",
      },
    ],
  },
  facts: {
    period: "Present day (fixed in mid-19th-century Britain)",
    discoveryRegions: ["United Kingdom (where the breed was fixed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Bull Terrier descends from bulldog–terrier crosses made for dog fighting; around the 1850s breeder James Hinks refashioned it into a white “gentleman’s companion”, and the egg-shaped head profile emerged over the following decades. Exuberant, clownish and fiercely loyal to family, it is also stubborn and impulsive, needing firm but kind training and plenty of exercise. White dogs carry a notable risk of congenital deafness, so breeding screening matters.",
  sources: [
    {
        "title": "Bull Terrier — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/bull-terrier/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bull Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bull_Terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The egg-shaped head is an extreme trait selected gradually and only fully fixed in the 20th century."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
