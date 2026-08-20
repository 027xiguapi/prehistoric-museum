import type { AnimalContentEn } from '../../types'

export const en = {
  name: "French Bulldog",
  classificationLabel: "Domestic dog (companion breed)",
  visibleFeature: "Look at its big bat-like ears standing tall, and its flat little piggy nose.",
  narration: {
    sentences: [
          "This is the French bulldog, a small companion dog with bat ears.",
          "Its nose is so short that on hot days it pants to keep itself cool."
    ],
    pronunciation: [
      {
        text: "French Bulldog",
        reading: "french BULL-dog",
      },
    ],
  },
  facts: {
    period: "Present day (breed about two hundred years old)",
    discoveryRegions: ["France (breed origin)","homes worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "French bulldogs descend from small bulldogs that English laceworkers carried to France, where Paris streets and cafés turned them into beloved companions. Their squashed faces make them both heat-sensitive and poor swimmers, so summers call for air conditioning and cool water; snoring is part of the package, thanks to a long soft palate. The upright bat ear is the breed’s emblem, and their sweet, clingy nature has made them city favourites.",
  sources: [
    {
        "title": "French bulldog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/French-bulldog",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "French Bulldog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/french-bulldog/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length is nose-to-tail; the breed standard classes dogs mainly by weight.",
            "Health issues such as breathing and whelping difficulties are breed-wide tendencies that vary by bloodline."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
