import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Shiba Inu",
  classificationLabel: "Ancient Japanese hunter",
  visibleFeature: "Look at the alert triangular ears and curled tail — the Shiba is the dog behind the “Doge” meme.",
  narration: {
    sentences: [
          "This is the Shiba Inu, one of Japan’s oldest breeds.",
          "Cat-clean and dramatic, it is famous for the piercing “Shiba scream”."
    ],
    pronunciation: [
      {
        text: "Shiba Inu",
        reading: "SHEE-ba EE-noo",
      },
    ],
  },
  facts: {
    period: "Present day (stock thousands of years old; a Japanese Natural Monument since 1936)",
    discoveryRegions: ["Japan (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Shiba’s line goes back to dogs that arrived in Japan with ancient settlers, and for millennia it flushed small birds and game in the mountains. The name “shiba” may refer to its brushwood-red coat or to the brushwood scrub where it hunted. Independent, fastidiously clean and territorial, it emits a startling high-pitched “Shiba scream” when excited or displeased. Nearly extinct after the Second World War, it is now Japan’s most popular native dog — and the face of the Dogecoin cryptocurrency.",
  sources: [
    {
        "title": "Shiba Inu — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/shiba-inu/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Shiba Inu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Shiba_Inu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the curled tail.",
            "Two etymologies for “shiba” exist and neither is fully proven."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
