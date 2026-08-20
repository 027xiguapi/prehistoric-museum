import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Schnauzer (AR Model)",
  classificationLabel: "German farm dog (the bearded one)",
  visibleFeature: "Look at the bushy eyebrows and beard — “Schnauzer” is German for “whiskered snout”.",
  narration: {
    sentences: [
          "This is the Schnauzer, the bearded farm dog from Germany.",
          "It once earned its keep catching rats, guarding yards and driving stock."
    ],
    pronunciation: [
      {
        text: "Schnauzer (AR Model)",
        reading: "SHNOW-zer",
      },
    ],
  },
  facts: {
    period: "Present day (a medieval German farm type, standardised in the late 19th century)",
    discoveryRegions: ["Germany (where the breed arose)"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Schnauzer is an old farm breed from southern Germany whose whiskers guarded its muzzle while ratting. It comes in miniature, standard and giant sizes — the model matches the standard. The wiry coat needs regular hand-stripping or clipping to keep its texture. Alert, vocal and loyal, it makes an excellent watchdog, and the bearded muzzle gives it a permanently thoughtful look.",
  sources: [
    {
        "title": "Standard Schnauzer — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/standard-schnauzer/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Standard Schnauzer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standard_Schnauzer",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Another schnauzer model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.",
            "The size covers the standard variety and excludes the tail."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
