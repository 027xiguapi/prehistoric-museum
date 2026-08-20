import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Golden Retriever",
  classificationLabel: "Domestic dog (retriever breed)",
  visibleFeature: "Imagine stroking its golden double coat — a waterproof outer layer over a downy vest.",
  narration: {
    sentences: [
          "This is the golden retriever, a working dog with a mouth so soft it can carry an egg unbroken.",
          "Its waterproof golden coat makes it a born swimmer and fetcher."
    ],
    pronunciation: [
      {
        text: "Golden Retriever",
        reading: "GOL-den ri-TREE-ver",
      },
    ],
  },
  facts: {
    period: "Present day (breed over 150 years old)",
    discoveryRegions: ["Scotland (breed origin)","homes worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 0.9,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Golden retrievers were bred in Scotland to leap into icy lochs and bring back downed waterfowl without a single tooth-mark — the “soft mouth” was the key trait breeders selected for. A waterproof outer coat over an insulating undercoat, plus slight webbing between the toes, makes them natural swimmers. Today they rank among the most trusted guide, search-and-rescue and therapy dogs, and their patience has practically made the breed a synonym for gentleness.",
  sources: [
    {
        "title": "Golden retriever — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/golden-retriever",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden Retriever — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/golden-retriever/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length is nose-to-tail; the breed standard relies on shoulder height and weight.",
            "Carrying an egg unbroken is a popular training demonstration of bite control."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
