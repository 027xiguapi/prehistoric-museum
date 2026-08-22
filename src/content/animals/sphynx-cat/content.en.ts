import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Sphynx Cat",
  classificationLabel: "Hairless cat breed",
  visibleFeature: "Look at its wrinkled hairless skin — it feels like a warm peach.",
  narration: {
    sentences: [
          "This is the Sphynx cat, a cat with almost no fur.",
          "Its wrinkly skin is warm and soft to the touch."
    ],
    pronunciation: [
      {
        text: "Sphynx Cat",
        reading: "SFINKS KAT",
      },
    ],
  },
  facts: {
    period: "Present day (breed founded in 1966)",
    discoveryRegions: ["Worldwide (originating in Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Sphynx traces back to a naturally mutated kitten born in Canada in 1966. They are not truly hairless — a fine peach-fuzz covers the skin. Without an insulating coat they chill and sunburn easily, needing jumpers in winter and shade in summer, and their oily skin requires regular bathing. Personality-wise they are devoted heat-seekers.",
  sources: [
    {
        "title": "Sphynx — 国际猫协会（TICA）",
        "url": "https://tica.org/breeds/browse-all-breeds?view=article&id=875:sphynx-breed&catid=8",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers typical adults.",
            "Care notes are general; follow veterinary advice for individuals."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
