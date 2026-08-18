import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Horse",
  classificationLabel: "Equine",
  visibleFeature: "Look at its flowing mane and huge side-set eyes — an almost wrap-around view.",
  narration: {
    sentences: [
          "This is the horse, humankind’s oldest engine on four legs.",
          "It can sleep standing up, and it runs fast and steady."
    ],
    pronunciation: [
      {
        text: "Horse",
        reading: "HORS",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated around 5,500 years ago)",
    discoveryRegions: ["Worldwide (domesticated from steppe wild horses)"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Horses have the largest eyes of any land mammal, placed for near-panoramic vision, while their ears rotate 180° to localise sounds. A stay-apparatus locks their legs, so they doze standing up. Ears and tails broadcast mood. Domesticated on the Central Asian steppe around 5,500 years ago, horses transformed travel, farming and war.",
  sources: [
    {
        "title": "Horse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/horse",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Horse domestication — 《科学》（Science）期刊报道",
        "url": "https://www.science.org/content/article/ancient-dna-shows-horse-herders-botai-were-not-first-domesticate-horses",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Shoulder heights cover common breeds; ponies and draft horses differ.",
            "Domestication timing and place are still being refined by ancient-DNA work."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
