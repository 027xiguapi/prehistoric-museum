import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Parasaurolophus",
  classificationLabel: "Duck-billed dinosaur (long crest)",
  visibleFeature: "Look at the long tube trailing behind its head — a built-in trombone.",
  narration: {
    sentences: [
          "This is Parasaurolophus, with a long hollow crest tube on its head.",
          "It used the tube to trumpet deep calls that carried across the landscape."
    ],
    pronunciation: [
      {
        text: "Parasaurolophus",
        reading: "pa-ra-SAW-ro-LOF-us",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 76.5–73 million years ago)",
    discoveryRegions: ["western North America (United States, Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 7.5,
      maxMeters: 10,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Parasaurolophus carried the most extravagant crest of any duck-billed dinosaur: a hollow tube running from the nostrils over a metre beyond the back of the head. Scientists CT-scanned the crest and modelled the sound — deep, resonant notes like a trombone, probably used to keep herds in touch or to court mates. Its jaws held hundreds of continuously replaced teeth forming a grinding “dental battery” for tough plants. It usually walked on all fours but could break into a two-legged run when fleeing.",
  sources: [
    {
        "title": "Parasaurolophus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Parasaurolophus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Parasaurolophus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Parasaurolophus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The call reconstruction is a computer model; the real vocal range may have been wider.",
            "Crest length varies greatly between species; this entry describes the long-crested P. walkeri."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
