import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Yorkshire Terrier",
  classificationLabel: "Toy terrier (steel-blue silk coat)",
  visibleFeature: "Look at the floor-length silky coat — yet its ancestors worked as rat catchers in the mills.",
  narration: {
    sentences: [
          "This is the Yorkshire Terrier, a tiny dog with working-class roots.",
          "Small as it is, it is braver than many dogs ten times its size."
    ],
    pronunciation: [
      {
        text: "Yorkshire Terrier",
        reading: "YORK-sheer TER-ee-er",
      },
    ],
  },
  facts: {
    period: "Present day (fixed in mid-to-late 19th-century Yorkshire, England)",
    discoveryRegions: ["Yorkshire, England (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Yorkshire Terrier was born in Industrial-Revolution Yorkshire: Scottish weavers brought small terriers that caught rats in the textile mills and mines, until Victorian society discovered the little dog and moved it into the parlour. Its coat grows continuously like human hair, silky to the touch, in the standard steel-blue and tan. Bold, vocal and devoted, it is the classic “purse companion”; the tiny frame makes low blood sugar and crowded teeth worth watching.",
  sources: [
    {
        "title": "Yorkshire Terrier — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/yorkshire-terrier/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Yorkshire Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Yorkshire_Terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail and furnishings.",
            "Puppies are born black; the steel-blue shade develops with age."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
