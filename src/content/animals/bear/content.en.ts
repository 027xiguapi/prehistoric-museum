import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Brown Bear",
  classificationLabel: "Large bear",
  visibleFeature: "Look at its round ears, small eyes, and thick brown fur.",
  narration: {
    sentences: [
          "This is the brown bear, one of the biggest land predators on Earth.",
          "With thick fur and strong claws, it curls up in a den and sleeps through winter."
    ],
    pronunciation: [
      {
        text: "Brown Bear",
        reading: "brown BAIR",
      },
    ],
  },
  facts: {
    period: "Present day (lineage about 500,000 years old)",
    discoveryRegions: ["Asia, Europe, North America"],
        size: {
      kind: 'body-length',
      minMeters: 1.7,
      maxMeters: 2.2,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Brown bears are the giants of the bear world, yet much of their menu is berries, nuts and salmon — they spend autumn eating non-stop to store fat. The hump on their shoulders is pure muscle, powering strong arms that flip rocks and dig. During hibernation their heartbeat slows way down; they live off that fat and emerge in spring with new cubs.",
  sources: [
    {
        "title": "Brown bear — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brown-bear",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Grizzly bear — 美国国家野生动物联合会（NWF）",
        "url": "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Grizzly-Bear",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Length reflects typical adults; regional differences are large.",
            "Subspecies such as grizzlies and Kodiak bears are not detailed here."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
