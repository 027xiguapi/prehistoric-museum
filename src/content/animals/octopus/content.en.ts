import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Octopus",
  classificationLabel: "Cephalopod mollusc",
  visibleFeature: "Count its arms — an octopus has eight, each lined underneath with suckers.",
  narration: {
    sentences: [
          "This is the octopus, the eight-armed magician of the sea.",
          "It can change colour, squirt ink, and solve puzzles better than any other animal without a backbone."
    ],
    pronunciation: [
      {
        text: "Octopus",
        reading: "OK-tuh-pus",
      },
    ],
  },
  facts: {
    period: "Present day (lineage about 300 million years old)",
    discoveryRegions: ["Oceans worldwide"],
        size: {
      kind: 'group-range',
      minMeters: 0.12,
      maxMeters: 3,
      note: "Octopus species vary hugely — small species span just a dozen centimetres, while the giant Pacific octopus can stretch its arms over 3 metres.",
    },
    diet: "carnivore",
  },
  parentClassificationNote: "An octopus has three hearts, blue blood, and hundreds of suckers that can each “taste” what they touch. Colour-changing cells in its skin let it repaint itself in seconds. When trouble comes, it squirts an ink cloud and can squeeze through gaps far smaller than itself — because an octopus has no hard bones at all.",
  sources: [
    {
        "title": "Octopus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/octopus",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Octopus — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/octopus",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This page introduces octopuses as a group; the model’s exact species awaits review.",
            "Size uses arm span across the family rather than a single measurement."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
