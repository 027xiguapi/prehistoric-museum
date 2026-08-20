import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Dilophosaurus (AR Model)",
  classificationLabel: "Early meat-eating dinosaur (twin crests)",
  visibleFeature: "Look at the two thin crests on its head — they were for display, not for fighting.",
  narration: {
    sentences: [
          "This is Dilophosaurus, an early meat-eater with a pair of crests side by side on its head.",
          "The real animal could not spit venom and had no neck frill — the film invented that."
    ],
    pronunciation: [
      {
        text: "Dilophosaurus (AR Model)",
        reading: "dy-LOF-o-sor-us",
      },
    ],
  },
  facts: {
    period: "Early Jurassic (about 193 million years ago)",
    discoveryRegions: ["North America (Arizona, United States)"],
        size: {
      kind: 'body-length',
      minMeters: 6,
      maxMeters: 7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Dilophosaurus lived in the Early Jurassic, when the age of dinosaurs was just beginning, and ranked among the largest land predators of its time in North America. Its snout was long and narrow, and the two semicircular crests were thin and fragile — palaeontologists read them as display structures for recognition or courtship. The 1993 film Jurassic Park turned it into a small monster with a rattling frill and venom spit; the real animal was 6–7 metres long and there is no evidence for either feature. A notch at the front of the upper jaw may have helped it grip fish or small prey.",
  sources: [
    {
        "title": "Dilophosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Dilophosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dilophosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dilophosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "This collection already has a published dilophosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.",
            "The crests’ function is inferred and cannot be proven from fossils."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
