import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Alexander Massialas (Fencing Touch)",
  classificationLabel: "Fencer (foil)",
  visibleFeature: "Watch the moment he leans forward with his arm fully extended — a touch of the sword tip scores the point.",
  narration: {
    sentences: [
          "This is American fencer Alexander Massialas, scoring a clean touch on the attack.",
          "In foil fencing, only the tip of the sword touching the opponent’s torso scores."
    ],
    pronunciation: [
      {
        text: "Alexander Massialas (Fencing Touch)",
        reading: "al-ex-AN-der mas-ee-AH-las",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["United States"],
        size: {
      kind: 'body-length',
      minMeters: 1.85,
      maxMeters: 1.95,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Alexander Massialas is a leading American foil fencer: individual silver and team bronze medallist at the Rio 2016 Olympics, coached by his father Greg, a former national-team fencer. Foil is one of fencing’s three weapons and uses “right of way” rules — when both fencers hit together, the fencer who started the correct attack scores. This model comes from Google’s athlete motion-capture series for search results and shows the scoring moment as the blade lands.",
  sources: [
    {
        "title": "Alexander Massialas — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/alexander-massialas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Alexander Massialas — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alexander_Massialas",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.",
            "The height is approximate from public sources; the exact capture date is unpublished."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
