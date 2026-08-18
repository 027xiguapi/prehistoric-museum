import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Cane Corso",
  classificationLabel: "Italian mastiff breed",
  visibleFeature: "Look at its broad muzzle and strong chest — this is a very powerful working dog.",
  narration: {
    sentences: [
          "This is the Cane Corso, a big guard dog from Italy.",
          "It has a sturdy body and clever eyes, and long ago it even worked alongside the Romans."
    ],
    pronunciation: [
      {
        text: "Cane Corso",
        reading: "KAY-nay KOR-so",
      },
    ],
  },
  facts: {
    period: "Present day (breed roots about 2,000 years old)",
    discoveryRegions: ["Italy"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.58,
      maxMeters: 0.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The Cane Corso is an ancient Italian mastiff whose name comes from the Latin for “guardian.” For centuries it helped on farms, driving cattle and protecting property, prized for both strength and loyalty. Like every big dog it needs plenty of exercise and responsible training; it is naturally gentle with its family and watchful with strangers.",
  sources: [
    {
        "title": "Cane Corso — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cane-corso/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Shoulder height is a typical adult range; individual dogs vary.",
            "Breed history has several tellings; this page keeps the common short version."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
