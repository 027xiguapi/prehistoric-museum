import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Dachshund",
  classificationLabel: "Badger hound (long body, short legs)",
  visibleFeature: "Look at the long, low body — the “sausage” shape was designed for going down badger setts.",
  narration: {
    sentences: [
          "This is the Dachshund — the German name literally means “badger dog”.",
          "It was bred to dive into burrows and face a badger alone underground."
    ],
    pronunciation: [
      {
        text: "Dachshund",
        reading: "DAKS-hund",
      },
    ],
  },
  facts: {
    period: "Present day (centuries old; standardised in 19th-century Germany)",
    discoveryRegions: ["Germany (where the breed was standardised)"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Dachshund’s long body, big lungs, paddle-shaped front paws and sturdy tail are underground work gear: the hunter could haul the dog back out of the sett by its tail. It comes in standard and miniature sizes and in smooth, long and wire coats. The reckless courage is a legacy of one-on-one badger fights in the dark. That long spine is the breed’s weak point — jumping off sofas and climbing stairs can damage its discs, so ramps help. “Waldi”, mascot of the 1972 Munich Olympics, was a dachshund.",
  sources: [
    {
        "title": "Dachshund — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/dachshund/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dachshund — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dachshund",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; standard and miniature sizes differ considerably.",
            "The breed’s risk of disc disease is well above average and should be understood before ownership."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
