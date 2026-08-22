import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Golden Eagle",
  classificationLabel: "Large raptor (eagle family)",
  visibleFeature: "Look at the golden feathers on its neck and its hook-shaped beak — the marks of a sky hunter.",
  narration: {
    sentences: [
          "This is the golden eagle, the grand raptor of open mountains.",
          "When it stoops from the sky, its powerful talons can seize a fox or a hare in one grab."
    ],
    pronunciation: [
      {
        text: "Golden Eagle",
        reading: "GOL-den EE-gl",
      },
    ],
  },
  facts: {
    period: "Present day (eagle lineage tens of millions of years old)",
    discoveryRegions: ["mountains and steppes of the Northern Hemisphere"],
        size: {
      kind: 'wingspan',
      minMeters: 1.8,
      maxMeters: 2.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The golden nape feathers shine like metal in sunlight and give the bird its name. One of the most widespread eagles of the Northern Hemisphere, it hunts by circling high to mark its target, then folding its wings into a dive of well over two hundred kilometres an hour. At the strike, all eight talons close at once with a grip stronger than a human hand. Falconry traditions across the steppes have made it a totem bird of grassland cultures.",
  sources: [
    {
        "title": "Golden eagle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/golden-eagle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden eagle — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Golden_Eagle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The wingspan covers both sexes; females are usually larger.",
            "Dive speeds come mostly from observational estimates and differ between sources."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
