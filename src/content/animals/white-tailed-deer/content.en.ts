import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "White-tailed Deer",
  classificationLabel: "Deer family (white-tailed deer)",
  visibleFeature: "Look at the underside of its tail — when it bolts, the tail goes up like a little white flag.",
  narration: {
    sentences: [
          "This is the white-tailed deer, the most common deer of North America.",
          "Newborn fawns wear white spots like a dusting of sugar."
    ],
    pronunciation: [
      {
        text: "White-tailed Deer",
        reading: "WYT-tayld DEER",
      },
    ],
  },
  facts: {
    period: "Present day (deer family tens of millions of years old)",
    discoveryRegions: ["North America","northern South America"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2.1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "When a white-tailed deer bolts, it hoists its tail to show the snowy underside — a little flag warning every deer behind it. Newborn fawns freeze among the grass, their white spots working as camouflage. Bucks shed their antlers each winter and regrow them in spring; antlers are among the fastest-growing bones in the animal kingdom. Their jumping is astonishing: a deer can clear a two-metre obstacle and bound eight or nine metres in one leap.",
  sources: [
    {
        "title": "White-tailed deer — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/white-tailed-deer",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "White-tailed deer — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/White-tailed_deer",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry and the existing “Deer” draft are different species and different models; the identification split will be rechecked before publication.",
            "Size varies greatly across its range, with northern populations usually larger."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
