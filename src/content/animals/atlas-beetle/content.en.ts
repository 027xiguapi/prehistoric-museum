import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Atlas Beetle",
  classificationLabel: "Giant rhinoceros beetle (South-East Asia)",
  visibleFeature: "Look at the three long horns — males use them as levers to pry rivals off branches.",
  narration: {
    sentences: [
          "This is the Atlas beetle, a heavyweight of the South-East Asian forests.",
          "Its grub lives inside rotting logs for a year or two before becoming this armoured adult."
    ],
    pronunciation: [
      {
        text: "Atlas Beetle",
        reading: "AT-las BEE-tul",
      },
    ],
  },
  facts: {
    period: "Present day (scarab lineage over 100 million years old)",
    discoveryRegions: ["South-East Asia (Malaysia, Indonesia and neighbours)"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.09,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Atlas beetle (Chalcosoma atlas) is among Asia’s largest beetles, males reaching nine centimetres. Two of its three horns project from the thorax and one from the head, and fights are pure wrestling: get under the rival and flip him off the branch. Adults sip tree sap and over-ripe fruit, while the grubs eat rotting wood and leaf mould and have famously short tempers. The beetle “strongman” reputation is no myth — scarabs can shift loads dozens of times their own weight.",
  sources: [
    {
        "title": "Atlas beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Atlas_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chalcosoma atlas — 台湾生命大百科",
        "url": "https://taieol.tw/pages/33412",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size includes the horns; females are hornless and much smaller.",
            "Common names vary by region; the scientific name is the reliable identifier."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
