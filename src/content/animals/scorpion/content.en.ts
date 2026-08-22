import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Scorpion",
  classificationLabel: "Arachnid",
  visibleFeature: "Look at its raised venomous tail and big pincers — and its back glows blue under UV light.",
  narration: {
    sentences: [
          "This is the scorpion, the little night hunter of the arachnids.",
          "Under ultraviolet light its armour glows blue-green."
    ],
    pronunciation: [
      {
        text: "Scorpion",
        reading: "SKOR-pee-un",
      },
    ],
  },
  facts: {
    period: "Present day (around 430 million years ago to today)",
    discoveryRegions: ["Warm and arid regions worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Scorpions are far older than dinosaurs and have barely changed in hundreds of millions of years. They hunt at night, gripping prey with pincers and injecting venom with their tail. Their exoskeleton fluoresces under ultraviolet light — researchers count scorpions in the desert with UV torches. Mothers carry their hatchlings on their backs, rare care among arthropods.",
  sources: [
    {
        "title": "Scorpion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/scorpion",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Scorpions — 亚利桑那-索诺拉沙漠博物馆（ASDM）",
        "url": "https://www.desertmuseum.org/kids/oz/long-fact-sheets/Scorpions.php",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range covers common species; emperor scorpions reach 20 cm.",
            "Venom potency varies; the vast majority are harmless to humans."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
