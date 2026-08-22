import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "European Hedgehog",
  classificationLabel: "Insect-eating mammal (hedgehog family)",
  visibleFeature: "Count the thousands of little spines on its back — it becomes a prickly ball when danger comes.",
  narration: {
    sentences: [
          "This is the European hedgehog, a night-walker carrying about five thousand spines.",
          "It snuffles along noisily, hunting snails and beetles for its midnight snack."
    ],
    pronunciation: [
      {
        text: "European Hedgehog",
        reading: "yoor-o-PEE-an HEJ-hog",
      },
    ],
  },
  facts: {
    period: "Present day (hedgehog lineage tens of millions of years old)",
    discoveryRegions: ["Europe","western Asia"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "A European hedgehog’s spines are modified hairs — hollow, springy and about five thousand strong; when danger nears, it tenses the skin muscle beneath and rolls into a prickly ball that leaves a fox nowhere to bite. It is a garden pest-control team all by itself, eating dozens of grams of beetles, worms and snails each night plus the occasional berry. Late in autumn it fattens up, builds a nest of leaves and grass and hibernates, waking in spring for an immediate feast.",
  sources: [
    {
        "title": "Hedgehog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hedgehog",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "European hedgehog — 英国野生动物信托（The Wildlife Trusts）",
        "url": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/european-hedgehog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The spine count is a typical adult figure and varies between individuals.",
            "Though mainly insectivorous, hedgehogs also eat eggs and berries, so they are introduced as omnivores."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
