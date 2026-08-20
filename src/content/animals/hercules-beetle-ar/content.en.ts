import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Hercules Beetle (AR Model)",
  classificationLabel: "One of the largest beetles (the Americas)",
  visibleFeature: "Look at the extra-long double horns — counted with the horns, it is among the longest beetles alive.",
  narration: {
    sentences: [
          "This is the Hercules beetle, named after the mythological strongman.",
          "A male’s horns can make up two-thirds of his total length."
    ],
    pronunciation: [
      {
        text: "Hercules Beetle (AR Model)",
        reading: "HER-kyoo-leez BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (scarab lineage over 100 million years old)",
    discoveryRegions: ["rainforests of Central and northern South America"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.17,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Hercules beetle (Dynastes hercules) is among the longest beetles, big males reaching 17 centimetres with horns. The long thoracic horn and downward-curving head horn work like pincers: grip the rival, lift and slam. Larvae live one to two years in rotting logs, passing 100 grams before pupating. Adults feed on sap and fruit and live three to six months. The tale that it carries 850 times its weight is an exaggeration — but these beetles are genuine strongmen.",
  sources: [
    {
        "title": "Hercules beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hercules_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Hercules beetle — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/rhinoceros-beetle-insect",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size includes the horns; females are hornless and much smaller.",
            "The 850-times-body-weight claim circulates widely without rigorous measurement."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
