import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Beagle",
  classificationLabel: "Scent hound",
  visibleFeature: "Look at the long drooping ears — they sweep scents from the ground up towards the nose.",
  narration: {
    sentences: [
          "This is the Beagle, a hound that works by nose.",
          "Its nose carries over 200 million scent receptors — more than forty times ours."
    ],
    pronunciation: [
      {
        text: "Beagle",
        reading: "BEE-gul",
      },
    ],
  },
  facts: {
    period: "Present day (modern breed fixed in 19th-century Britain)",
    discoveryRegions: ["United Kingdom (where the modern breed was fixed)"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Beagle is a small hound bred for hare hunting on foot, which made it vocal, sociable and enduring. Its nose is second only to the bloodhound’s, and airport “beagle brigades” sniff luggage for hidden food. Snoopy is a Beagle. Friendly and child-proof in temperament, it famously “turns its ears off” when the nose switches on, so a lead is essential outdoors — and its love of food makes portion control a must.",
  sources: [
    {
        "title": "Beagle — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/beagle/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Beagle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Beagle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "The receptor count is a literature approximation and varies between sources."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
