import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Tyrannosaurus Rex (AR Model)",
  classificationLabel: "Giant predator (the “dinosaur king”)",
  visibleFeature: "Look at the banana-sized teeth and the tiny arms — those little arms were surprisingly strong.",
  narration: {
    sentences: [
          "This is Tyrannosaurus rex, with one of the strongest bites of any land animal ever.",
          "Its name means “tyrant lizard king”."
    ],
    pronunciation: [
      {
        text: "Tyrannosaurus Rex (AR Model)",
        reading: "ti-RAN-o-sor-us REKS",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 68–66 million years ago)",
    discoveryRegions: ["western North America (United States, Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 12,
      maxMeters: 13,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Tyrannosaurus rex was the apex predator of the end-Cretaceous world: 8–9 tonnes in weight with a bite estimated at 3–6 tonnes — enough to pulverise bone, and its fossil droppings do contain bone fragments. The serrated teeth were as thick as railway spikes and regrew when lost. The two-fingered arms were too short to reach the mouth but heavily muscled, perhaps used when rising or grappling prey at close quarters. It had an excellent sense of smell and forward-facing eyes for depth perception. Hatchlings may have worn downy feathers; whether adults kept any plumage is still debated.",
  sources: [
    {
        "title": "Tyrannosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Tyrannosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Tyrannosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tyrannosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This collection already has a published tyrannosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.",
            "Adult plumage and the precise bite-force figure remain open research questions."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
