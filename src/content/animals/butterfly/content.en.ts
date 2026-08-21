import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Butterfly",
  classificationLabel: "Insect",
  visibleFeature: "Look at its two pairs of colorful wings, covered in tiny scale patterns.",
  narration: {
    sentences: ["This is a butterfly, a flying insect.","Its wings are covered in colorful scales, and it flutters among the flowers."],
    pronunciation: [
      { text: "Butterfly", reading: "BUT-er-fly" },
    ],
  },
  facts: {
    period: "Present day (Holocene)",
    discoveryRegions: ["All continents except Antarctica"],
    size: {
      kind: 'wingspan',
      minMeters: 0.05,
      maxMeters: 0.12,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Butterflies are common insects with two pairs of large wings covered in tiny scales that form beautiful colors and patterns. A butterfly goes through four stages in its life — egg, caterpillar, chrysalis, and adult — a wonderful change. It drinks nectar with a long mouthpart and helps pollinate flowers.",
  sources: [
    {
        "title": "Butterfly — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/butterfly-insect",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Butterflies — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/butterflies",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["Butterflies vary greatly in size and color; this page shows a common species."],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentEn
