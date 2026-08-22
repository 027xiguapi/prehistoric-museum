import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Hamster",
  classificationLabel: "Burrowing rodent",
  visibleFeature: "Look at the bulging cheek pouches — the word “hamster” comes from a German word for “hoarder”.",
  narration: {
    sentences: [
          "This is the hamster, a burrowing rodent that hoards food in its cheeks.",
          "Its wild burrows have separate rooms for sleeping, storing food and even a toilet."
    ],
    pronunciation: [
      {
        text: "Hamster",
        reading: "HAM-ster",
      },
    ],
  },
  facts: {
    period: "Present day (the golden hamster became a pet in the 1930s)",
    discoveryRegions: ["Syria and neighbours (home of the golden hamster)"],
        size: {
      kind: 'body-length',
      minMeters: 0.12,
      maxMeters: 0.18,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Most pet hamsters are golden (Syrian) hamsters: nearly all descend from a single mother and litter caught near the Syrian desert in 1930. The cheek pouches can carry half its body volume in food back to the burrow pantry. Nocturnal and solitary, it sleeps all day and runs kilometres on a wheel at night; wild hamsters enter shallow hibernation in winter. The golden hamster is now classed Vulnerable in the wild, and the European hamster is critically endangered.",
  sources: [
    {
        "title": "Hamster — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hamster",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden hamster — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Golden_hamster",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers the golden hamster; dwarf species are smaller.",
            "The single-litter origin is the standard account; a few laboratory lines add minor other stock."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
