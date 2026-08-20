import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Emperor Penguin",
  classificationLabel: "Penguin (largest species, Antarctic)",
  visibleFeature: "Look at the orange-yellow patch near its ears — the emperor penguin’s private “crown”.",
  narration: {
    sentences: [
          "This is the emperor penguin, the tallest member of the penguin family.",
          "On the Antarctic ice, penguin dads balance the egg on their feet and cover it with a warm belly flap."
    ],
    pronunciation: [
      {
        text: "Emperor Penguin",
        reading: "EM-per-or PEN-gwin",
      },
    ],
  },
  facts: {
    period: "Present day (penguin family tens of millions of years old)",
    discoveryRegions: ["Antarctica"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Emperor penguins breed in the Antarctic winter: after the female lays the egg she hands it to the male and heads to sea, while he stands without eating for two months, balancing the egg on his feet under a brood pouch and living off stored fat through howling blizzards. Chicks huddle in giant crèches for warmth while parents take turns bringing fish and krill from the coast. Emperors are diving champions too, reaching depths beyond five hundred metres.",
  sources: [
    {
        "title": "Emperor penguin — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emperor-penguin",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Emperor penguin — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/emperor-penguin",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The “length” is standing height; emperors are the tallest penguin species.",
            "Dive-depth records come from scientific tracking and vary between individuals and years."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
