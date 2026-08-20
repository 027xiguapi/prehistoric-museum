import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Swallowtail Butterfly",
  classificationLabel: "Swallowtail butterfly (tailed hindwings)",
  visibleFeature: "Look at the pointed “tails” on the hindwings — they give the swallowtail its name.",
  narration: {
    sentences: [
          "This is the swallowtail, the big butterfly with a forked tail.",
          "Its caterpillar puffs out a bright orange stink-horn when threatened."
    ],
    pronunciation: [
      {
        text: "Swallowtail Butterfly",
        reading: "SWOL-oh-tayl",
      },
    ],
  },
  facts: {
    period: "Present day (swallowtail family tens of millions of years old)",
    discoveryRegions: ["Eurasia and North America"],
        size: {
      kind: 'wingspan',
      minMeters: 0.08,
      maxMeters: 0.1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Old World swallowtail (Papilio machaon) is among the most widespread swallowtails; its caterpillar feeds on carrot-family plants and can evert a bright orange stink-horn (osmeterium) that releases a deterrent smell. The chrysalis hangs slung from a stem by a silk girdle, like a tiny hammock. The hindwing tails deflect bird strikes, so the butterfly escapes at the cost of a wingtip. Adults drink nectar and are important pollinators.",
  sources: [
    {
        "title": "Old World swallowtail — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Papilio_machaon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "キアゲハ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/kiageha.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The wingspan covers typical individuals; subspecies differ.",
            "The model is a generic swallowtail, presented here via the Old World species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
