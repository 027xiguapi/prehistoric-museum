import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Doberman",
  classificationLabel: "Guard dog",
  visibleFeature: "Look at the sleek, athletic body and alert stance — a breed designed from scratch for protection work.",
  narration: {
    sentences: [
          "This is the Doberman, named after its creator, Louis Dobermann.",
          "Fast and powerful, it ranks among the world’s finest protection dogs."
    ],
    pronunciation: [
      {
        text: "Doberman",
        reading: "DOH-ber-man",
      },
    ],
  },
  facts: {
    period: "Present day (developed around 1890 by Louis Dobermann in Germany)",
    discoveryRegions: ["Thuringia, Germany (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.95,
      maxMeters: 1.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "In the late 19th century Louis Dobermann, a tax collector in Apolda, Germany, wanted a dog to protect him on his rounds and built the breed from local cattle dogs, hounds and others. The result combined speed, power and vigilance, and Dobermans served with the US Marine Corps in the Second World War. Modern breeding favours a steadier, gentler temperament, and the breed is famously attached to its people — the “velcro guardian”. The traditional cropped ears and docked tail are cosmetic surgeries now banned in many countries.",
  sources: [
    {
        "title": "Doberman Pinscher — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/doberman-pinscher/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dobermann — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dobermann",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail; if the model shows cropped ears and a docked tail, that is the traditional cosmetic look.",
            "The exact recipe of foundation breeds was never fully recorded."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
