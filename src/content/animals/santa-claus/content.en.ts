import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Santa Claus",
  classificationLabel: "Festive legend character",
  visibleFeature: "Look at his snowy beard and red suit, then find the big shiny buckle on his belt.",
  narration: {
    sentences: [
          "This is Santa Claus, the white-bearded grandfather who, legend says, delivers presents on Christmas Eve.",
          "He is said to fly a reindeer sleigh around the whole world in a single night."
    ],
    pronunciation: [
      {
        text: "Santa Claus",
        reading: "SAN-ta KLAWZ",
      },
    ],
  },
  facts: {
    period: "Legendary figure (4th-century bishop origins; modern image settled in the 19th century)",
    discoveryRegions: ["story origins in Europe","known worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 1.6,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Santa Claus began as Saint Nicholas, a 4th-century bishop of Myra in Asia Minor who, tradition says, secretly gave gifts to people in need. Dutch settlers knew him as Sinterklaas and carried the story to the Americas; the 1823 poem “A Visit from St. Nicholas” gave him a reindeer sleigh and a chimney, and 19th-century illustrators dressed him in a red suit trimmed with white fur. Today he is the guest children all over the world look forward to most at Christmas.",
  sources: [
    {
        "title": "Santa Claus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/Santa-Claus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Santa Claus — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Santa_Claus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This entry is a fictional festive character rather than an animal and stays a draft; publication would need its own rights and branding review.",
            "The claim that Coca-Cola advertising invented the red suit is a common misconception — the suit predates the adverts, which only made it more famous."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
