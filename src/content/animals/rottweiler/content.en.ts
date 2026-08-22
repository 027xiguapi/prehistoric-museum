import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Rottweiler",
  classificationLabel: "Domestic dog (working breed)",
  visibleFeature: "Look at its glossy black “suit” with the tan “bib” on its chest.",
  narration: {
    sentences: [
          "This is the Rottweiler, one of the oldest working dogs.",
          "Its ancestors drove cattle for Roman legions, and later it pulled butchers’ meat carts to market."
    ],
    pronunciation: [
      {
        text: "Rottweiler",
        reading: "ROT-wy-ler",
      },
    ],
  },
  facts: {
    period: "Present day (breed tradition traces to ancient Rome; formalised over a century ago)",
    discoveryRegions: ["Rottweil, Germany (breed formalised)","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The Rottweiler takes its name from the German town of Rottweil, where butchers used the dogs to drive cattle to market and guard the money box — hence the nickname “butcher’s dog”. Powerful and steady-natured, it is remarkably gentle with its family, and well-trained Rottweilers serve as police, search-and-rescue and therapy dogs. The breed needs plenty of exercise and patient teaching, and repays both with lifelong loyalty.",
  sources: [
    {
        "title": "Rottweiler — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Rottweiler",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Rottweiler — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/rottweiler/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length covers nose to tail; males are clearly larger than females.",
            "The “Roman cattle dog” ancestry is a breed tradition whose early details cannot be directly verified."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
