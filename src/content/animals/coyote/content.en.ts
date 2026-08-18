import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Coyote",
  classificationLabel: "Wild canid",
  visibleFeature: "Look at its upright ears and bushy tail — like a lean, small wolf.",
  narration: {
    sentences: [
          "This is the coyote, one of the cleverest hunters of North American wilds.",
          "It is smaller than a wolf, yet adapts to cities and countryside even better."
    ],
    pronunciation: [
      {
        text: "Coyote",
        reading: "ky-OH-tee",
      },
    ],
  },
  facts: {
    period: "Present day (canid lineage several million years old)",
    discoveryRegions: ["North and Central America"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.35,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Coyotes are native North American canids at home everywhere from grassland to city parks. They hunt small prey, eat fruit and carrion, and are ecological generalists. Famous for their howls, the rising and falling night “songs” are long-distance calls between companions. Where wolves and cougars declined, coyotes quietly expanded their range.",
  sources: [
    {
        "title": "Coyote — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/coyote-facts",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Coyote — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/coyote",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Length is a typical adult range and excludes the tail.",
            "Diet notes are a broad summary; regional variation is large."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
