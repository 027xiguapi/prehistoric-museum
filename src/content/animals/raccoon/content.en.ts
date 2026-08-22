import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Raccoon",
  classificationLabel: "Procyonid",
  visibleFeature: "Look at its black eye mask and clever front paws — like a little masked bandit.",
  narration: {
    sentences: [
          "This is the raccoon, the clever creature in an eye mask.",
          "Its front paws are so nimble it can unscrew lids and feel for food underwater."
    ],
    pronunciation: [
      {
        text: "Raccoon",
        reading: "ra-KOON",
      },
    ],
  },
  facts: {
    period: "Present day (lineage around 2.5 million years old)",
    discoveryRegions: ["North America","introduced to Europe and Japan"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A raccoon’s dark eye mask may cut glare for night vision. Its front paws are extraordinarily sensitive and work even better when wet — the habit of dunking food earned it the name “washer bear” in several languages. Highly intelligent and adaptable, urban raccoons have learned to open bins and cross roads safely.",
  sources: [
    {
        "title": "Raccoon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/raccoon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Raccoon — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/raccoon-facts",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The glare-reduction role of the mask is one leading hypothesis.",
            "Length excludes the tail; urban animals are often heavier."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
