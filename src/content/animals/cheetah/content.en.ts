import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Cheetah",
  classificationLabel: "Big cat (speed hunter)",
  visibleFeature: "Look at the two black “tear marks” under its eyes — cheetah-only built-in sunglasses.",
  narration: {
    sentences: [
          "This is the cheetah, the fastest runner on land.",
          "Black lines run from its eyes to its mouth like an athlete’s eye black, helping it keep prey in focus."
    ],
    pronunciation: [
      {
        text: "Cheetah",
        reading: "CHEE-tut",
      },
    ],
  },
  facts: {
    period: "Present day (cheetah lineage millions of years old)",
    discoveryRegions: ["Africa","small population in Iran"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The cheetah is a pure sprinting machine: non-retractable claws work like running spikes, the long tail serves as a rudder, and a flexible spine stretches each stride to seven metres — zero to one hundred kilometres an hour in three seconds. But it is a sprinter, not a marathoner; after a few hundred metres at full speed it must stop and pant, and lions or hyenas often steal its catch. Cubs wear a silvery mantle of hair and practise hunting with their mother for over a year.",
  sources: [
    {
        "title": "Cheetah — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cheetah-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Cheetah — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/cheetah",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length covers head and body without the tail; total length with tail is about 2 metres.",
            "Top speed figures come from timed runs; hunts in the wild are usually slower."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
