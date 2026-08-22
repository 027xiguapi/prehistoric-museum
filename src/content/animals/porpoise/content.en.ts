import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Harbour Porpoise",
  classificationLabel: "Toothed whale (porpoise family)",
  visibleFeature: "Look at its small triangular dorsal fin — like a little spade standing on its back.",
  narration: {
    sentences: [
          "This is the harbour porpoise, the shy little whale of northern seas.",
          "It seldom leaps; it just surfaces quietly for a breath, like a tiny ghost of the sea."
    ],
    pronunciation: [
      {
        text: "Harbour Porpoise",
        reading: "HAR-ber POR-pus",
      },
    ],
  },
  facts: {
    period: "Present day (porpoise family millions of years old)",
    discoveryRegions: ["cold coastal waters of the North Atlantic and North Pacific"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The harbour porpoise is one of the smallest whales, a cousin of the dolphins but built differently: smaller, with a shorter beak and spade-shaped teeth instead of conical ones. Shy by nature, it hardly ever leaps or rides bow waves, surfacing with a soft puff that earned it the sailor’s nickname “sea pig”. It hunts small fish in murky coastal waters using echolocation. Nets are its greatest danger, and many fishing fleets now fit acoustic pingers to help it steer clear.",
  sources: [
    {
        "title": "Porpoise — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/porpoise",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Harbour porpoise — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Harbour_porpoise",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This model’s source file carried a skin-weights defect that was repaired deterministically during conversion; the animation will be rechecked before publication.",
            "Populations from the North Atlantic to the Black Sea differ in size and habits."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
