import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Alligator",
  classificationLabel: "Crocodilian",
  visibleFeature: "Look at its broad snout — when its mouth closes, the teeth hide behind the lips.",
  narration: {
    sentences: [
          "This is the alligator, a living-fossil reptile from a very ancient line.",
          "Its teeth hide when its mouth shuts — unlike its pointy-snouted cousins."
    ],
    pronunciation: [
      {
        text: "Alligator",
        reading: "AL-uh-gay-ter",
      },
    ],
  },
  facts: {
    period: "Present day (crocodilians around 83 million years old)",
    discoveryRegions: ["Southeastern United States","Yangtze basin, China"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 4,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Alligators are distant cousins of dinosaurs and have kept nearly the same body for 200 million years. Despite a colossal bite, they are gentle parents: mothers guard nests and carry hatchlings to water inside their jaws. Broad snouts with hidden teeth separate alligators from pointy-snouted crocodiles, whose lower teeth show even when closed.",
  sources: [
    {
        "title": "Alligator — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/alligator",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "American alligator — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/reptiles/facts/american-alligator",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Sizes feature the American alligator; the Chinese alligator is smaller.",
            "Bite-force figures vary by study method."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
