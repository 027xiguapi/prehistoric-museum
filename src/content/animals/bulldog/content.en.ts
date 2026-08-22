import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Bulldog",
  classificationLabel: "Medium companion dog",
  visibleFeature: "Look at the wrinkled face and wide jaw — this breed left the bull ring long ago and became a sofa philosopher.",
  narration: {
    sentences: [
          "This is the Bulldog — a serious face hiding a gentle nature.",
          "Its snore sounds like a tiny tractor."
    ],
    pronunciation: [
      {
        text: "Bulldog",
        reading: "BUL-dog",
      },
    ],
  },
  facts: {
    period: "Present day (reinvented as a companion after bull-baiting was banned in 1835)",
    discoveryRegions: ["United Kingdom (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Bulldog was first bred for the cruel sport of bull-baiting: a low-slung body made it hard for the bull to toss, and the wide jaws locked on. After Britain banned the sport in 1835, breeders rebuilt it into a gentle companion; today it is a national symbol of Britain and the mascot of Yale and many other universities. The short muzzle means poor heat tolerance and noisy breathing (typical of flat-faced breeds), so summer heat is dangerous. Affectionate, tolerant of children and modest in exercise needs, it is above all a homebody.",
  sources: [
    {
        "title": "Bulldog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/bulldog/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bulldog — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bulldog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the short tail.",
            "Flat-faced breeds commonly suffer breathing and heat-regulation problems; the welfare debate should be understood before ownership."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
