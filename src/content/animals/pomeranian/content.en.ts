import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Pomeranian",
  classificationLabel: "Small domestic dog (spitz family)",
  visibleFeature: "It looks like a bouncing marshmallow with the face of a little fox.",
  narration: {
    sentences: [
          "This is the Pomeranian, the tiniest dog with the biggest personality.",
          "Its double coat fluffs up in cold weather like a feathered cloak."
    ],
    pronunciation: [
      {
        text: "Pomeranian",
        reading: "POM-er-AY-nee-an",
      },
    ],
  },
  facts: {
    period: "Present day (breed developed over centuries)",
    discoveryRegions: ["Pomerania, northern Europe","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The Pomeranian is named after Pomerania on the Baltic coast, and its ancestors were much bigger sledge spitz dogs. Queen Victoria kept a particularly small one, and after that all Europe wanted the “pocket size”; in a century the breed shrank from a twenty-kilo hauler to a two-kilo darling. Small as it is, its bark and courage are extra-large — a devoted little doorbell of a dog.",
  sources: [
    {
        "title": "Pomeranian — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Pomeranian",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pomeranian dog — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pomeranian_dog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The fluffy coat makes the dog look bigger; the length follows the actual frame.",
            "Adults usually weigh about 1.5–3.5 kilograms; early Pomeranians were much heavier."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
