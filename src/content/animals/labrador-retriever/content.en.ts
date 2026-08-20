import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Labrador Retriever",
  classificationLabel: "Domestic dog (retriever breed)",
  visibleFeature: "Look at its tail — thick and round, like a furry rudder.",
  narration: {
    sentences: [
          "This is the Labrador retriever, one of the most popular dogs in the world.",
          "Webbed toes make it a natural swimmer that loves fetching things for people."
    ],
    pronunciation: [
      {
        text: "Labrador Retriever",
        reading: "LAB-ra-dor ri-TREE-ver",
      },
    ],
  },
  facts: {
    period: "Present day (breed developed about 200 years ago)",
    discoveryRegions: ["Newfoundland, Canada","worldwide"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "Labradors descend from the fishermen’s St John’s water dogs of Newfoundland, which hauled escaped fish and nets back to the boats — hence the breed’s love of water. Their mouths are famously “soft”: a trained Labrador can carry a raw egg down a hallway without cracking it. Today it is the most common guide, search-and-rescue and therapy dog, and black, yellow and chocolate all belong to the same breed.",
  sources: [
    {
        "title": "Labrador Retriever — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Labrador-retriever",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Labrador Retriever — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Labrador_Retriever",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size covers nose-to-tail length; males are usually noticeably bigger than females.",
            "This batch contains two different Labrador models (see the “Model Two” entry); before publication one will be kept or the two merged."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
