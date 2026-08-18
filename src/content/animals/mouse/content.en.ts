import type { AnimalContentEn } from '../../types'

export const en = {
  name: "House Mouse",
  classificationLabel: "Rodent",
  visibleFeature: "Look at its round ears and thin tail — its front teeth never stop growing.",
  narration: {
    sentences: [
          "This is the house mouse, one of the small animals that has lived alongside humans the longest.",
          "Its front teeth grow all its life, so it gnaws constantly to keep them worn down."
    ],
    pronunciation: [
      {
        text: "House Mouse",
        reading: "hows MOUS",
      },
    ],
  },
  facts: {
    period: "Present day (living alongside humans for about 15,000 years)",
    discoveryRegions: ["Worldwide (except Antarctica)"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.1,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "House mice originated in western and southern Asia and travelled the world aboard human grain stores and ships. They are nocturnal, feel their way with whiskers, and rely on sharp smell and hearing to find food and avoid predators. The house mouse is also the most important laboratory animal, helping scientists understand genes and disease.",
  sources: [
    {
        "title": "House mouse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/house-mouse",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Mus musculus — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Mus_musculus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Body length excludes the tail; wild populations vary slightly by region.",
            "The timing of commensal life with humans is an archaeological approximation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
