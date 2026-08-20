import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Rabbit (AR Model)",
  classificationLabel: "Rabbit family (European rabbit)",
  visibleFeature: "Watch its ears swivel like radar dishes — not even a sound behind it escapes.",
  narration: {
    sentences: [
          "This is the rabbit, a hopping champion with long ears and mighty hind legs.",
          "Its eyes sit on the sides of its head, letting it see almost all the way round."
    ],
    pronunciation: [
      {
        text: "Rabbit (AR Model)",
        reading: "RAB-it",
      },
    ],
  },
  facts: {
    period: "Present day (rabbit lineage tens of millions of years old)",
    discoveryRegions: ["Europe (origin)","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "A rabbit’s two ears rotate independently, like twin radars tracking different directions at once. When danger appears, it thumps the ground with a hind foot — an “earthquake alarm” for neighbours down the warren. Its teeth grow all its life, so it must keep grazing to wear them down; and when a rabbit is overjoyed it leaps straight up and twists in mid-air, what keepers call a “binky”.",
  sources: [
    {
        "title": "Rabbit — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/rabbit",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "European rabbit — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/European_rabbit",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Rabbit” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.",
            "The length includes the tail; domestic breeds vary noticeably in size."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
