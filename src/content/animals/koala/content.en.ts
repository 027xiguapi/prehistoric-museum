import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Koala",
  classificationLabel: "Tree-dwelling marsupial",
  visibleFeature: "Look at the fluffy ears and round nose — koalas sleep 18 to 22 hours a day.",
  narration: {
    sentences: [
          "This is the koala, an Australian marsupial that lives in eucalyptus trees.",
          "It eats almost nothing but eucalyptus leaves, which are poisonous to most other animals."
    ],
    pronunciation: [
      {
        text: "Koala",
        reading: "koh-AH-la",
      },
    ],
  },
  facts: {
    period: "Present day (koala family tens of millions of years old)",
    discoveryRegions: ["eucalyptus forests of eastern and south-eastern Australia"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.85,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The koala is not a bear — it is a marsupial, carrying its joey in a pouch like a kangaroo. Eucalyptus leaves are low in calories and laced with toxins; a koala’s liver detoxifies them and an enormous caecum ferments the fibre, but the price is sleeping up to 22 hours a day to save energy. Individual koalas accept leaves from only a handful of eucalyptus species. Habitat loss and bushfires led the Australian government to list the koala as endangered in 2022.",
  sources: [
    {
        "title": "Koala — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/koala",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Koala — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/koala",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the vestigial tail; southern koalas are markedly larger than northern ones.",
            "“Endangered” is its legal status in parts of Australia; the global Red List currently rates it Vulnerable."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
