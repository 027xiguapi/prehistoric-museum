import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Brown Bear (AR Model)",
  classificationLabel: "Large bear",
  visibleFeature: "Look at the big muscle hump on its shoulders — the strongman shoulders it uses for digging.",
  narration: {
    sentences: [
          "This is the brown bear, the strong one of the forest, happiest fishing by a rushing river.",
          "Before winter it eats until it is plump, then curls up in a den and sleeps the winter away."
    ],
    pronunciation: [
      {
        text: "Brown Bear (AR Model)",
        reading: "brown BAIR",
      },
    ],
  },
  facts: {
    period: "Present day (bear family about 20 million years old)",
    discoveryRegions: ["northern Eurasia","north-western North America"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 2.8,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Brown bears are omnivorous gourmets: berries, nuts, roots, pine seeds, salmon and even moths are on the menu, and in autumn they can devour tens of thousands of calories a day. The mighty shoulder hump is digging muscle, perfect for unearthing rodents and flipping stones for insects. They look clumsy yet can outrun a bicycle in a sprint, and during hibernation their heartbeat drops below ten beats a minute as they live off summer fat.",
  sources: [
    {
        "title": "Brown bear — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brown-bear",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Brown bear — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/brown-bear",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Brown Bear” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.",
            "The size range covers regional subspecies; Kodiak bears can grow longer and heavier."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
