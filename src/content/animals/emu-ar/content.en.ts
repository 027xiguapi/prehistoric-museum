import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Emu (AR Model)",
  classificationLabel: "Large flightless bird",
  visibleFeature: "Look at the long neck and big three-toed feet — an emu can sprint at 50 kilometres per hour.",
  narration: {
    sentences: [
          "This is the emu, Australia’s largest bird, second in height only to the ostrich.",
          "It cannot fly, but it is a champion runner."
    ],
    pronunciation: [
      {
        text: "Emu (AR Model)",
        reading: "EE-myoo",
      },
    ],
  },
  facts: {
    period: "Present day (emu lineage millions of years old)",
    discoveryRegions: ["most of mainland Australia"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The emu is the world’s second-tallest bird, standing up to 1.9 metres. Its shaggy feathers look like dried grass and its wings have shrunk to finger-sized stubs. Emu fathers do all the childcare, sitting on the eggs for about eight weeks and barely eating or drinking. Emus are opportunistic omnivores — seeds, fruit, flowers, insects and small lizards — and swallow stones to grind their food. The emu appears on Australia’s coat of arms beside the kangaroo, supposedly because neither can walk backwards.",
  sources: [
    {
        "title": "Emu — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Emu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Emu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size is beak-to-tail length; standing height reaches 1.9 metres.",
            "The “cannot walk backwards” coat-of-arms story is a popular explanation rather than a documented official reason."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
