import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "German Shepherd",
  classificationLabel: "Large working dog",
  visibleFeature: "Look at the pirate hat! It is really a German shepherd wearing a costume prop.",
  narration: {
    sentences: [
          "This is a German shepherd — it just happens to wear a pirate-hat prop.",
          "It is a clever, brave working dog that often helps police and rescue teams."
    ],
    pronunciation: [
      {
        text: "German Shepherd",
        reading: "JUR-mun SHEF-erd",
      },
    ],
  },
  facts: {
    period: "Present day (breed founded in 1899)",
    discoveryRegions: ["Germany"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.55,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The German shepherd was shaped from 1899 by Max von Stephanitz, who wanted to breed the ideal working dog. Quick to learn and brave by nature, it now excels at search-and-rescue, police and guide work. A family German shepherd still needs a “job” — daily runs, sniffing games and training keep it happy.",
  sources: [
    {
        "title": "German Shepherd Dog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/german-shepherd-dog/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Shoulder height reflects typical adults.",
            "The pirate hat ships with the source model as a prop; the final scene will remove or explain it."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
