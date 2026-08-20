import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Brachiosaurus",
  classificationLabel: "Sauropod (longer front legs)",
  visibleFeature: "Notice the front legs are longer than the back ones — that lifts the shoulders high, like a living crane.",
  narration: {
    sentences: [
          "This is Brachiosaurus, a long-necked dinosaur that browsed leaves more than ten metres up.",
          "Its name means “arm lizard” because of those unusually long front legs."
    ],
    pronunciation: [
      {
        text: "Brachiosaurus",
        reading: "BRAK-ee-o-sor-us",
      },
    ],
  },
  facts: {
    period: "Late Jurassic (about 154–150 million years ago)",
    discoveryRegions: ["North America (Colorado region, United States)"],
        size: {
      kind: 'body-length',
      minMeters: 18,
      maxMeters: 22,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Brachiosaurus was among the tallest plant-eaters of Jurassic North America: unlike most sauropods its front legs were longer than its hind legs, tilting the back upwards so the head could reach perhaps 9–13 metres high. Its nostrils sat on a dome on top of the head, which once led artists to paint it wading underwater — an idea modern research has rejected. Adults are estimated at 30–40 tonnes and needed hundreds of kilograms of leaves a day. It was the first awe-inspiring dinosaur seen in the film Jurassic Park.",
  sources: [
    {
        "title": "Brachiosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brachiosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Brachiosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Brachiosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Brachiosaurus fossils are scarce, so length and mass estimates carry wide margins.",
            "The East African “Brachiosaurus” brancai is now placed in its own genus, Giraffatitan; this entry covers the North American animal."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
