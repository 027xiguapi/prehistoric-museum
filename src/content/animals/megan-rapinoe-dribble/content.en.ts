import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Megan Rapinoe (Dribble)",
  classificationLabel: "Footballer",
  visibleFeature: "Watch the ball at her feet — the secret of dribbling is keeping the ball close with every touch.",
  narration: {
    sentences: [
          "This is American football star Megan Rapinoe dribbling the ball.",
          "She has lifted the Women’s World Cup trophy twice."
    ],
    pronunciation: [
      {
        text: "Megan Rapinoe (Dribble)",
        reading: "MEG-an ra-PEE-noh",
      },
    ],
  },
  facts: {
    period: "Present day (motion-capture model published around 2020)",
    discoveryRegions: ["United States"],
        size: {
      kind: 'body-length',
      minMeters: 1.65,
      maxMeters: 1.75,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Megan Rapinoe is an icon of American women’s football: World Cup winner in 2015 and 2019, Olympic gold medallist in 2012 and winner of the 2019 Ballon d’Or Féminin. She is famous for pinpoint crosses, free kicks, her purple hair and the arms-wide goal celebration. This model captures her dribbling the ball at speed.",
  sources: [
    {
        "title": "Megan Rapinoe — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/megan-rapinoe",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Megan Rapinoe — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Megan_Rapinoe",
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
