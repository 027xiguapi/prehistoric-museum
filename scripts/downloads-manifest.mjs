// Candidate manifest for the `model-downloads` batch (Google "AR Answers in
// Search" models bucket, mirrored by scripts/download-models.mjs from
// model_list.md). Consumed by convert-model-downloads.mjs,
// measure-downloads-models.mjs and prepare-downloads-drafts.mjs.
//
// `expectedLongestMeters` is the family-friendly nose-to-tail / wing / arm
// span size of the real animal (or, for the non-animal entries, the expected
// longest bounding-box dimension in metres) and drives the metre scale during
// normalization. `yawDegrees` is the baked head-to-+Z rotation decided by the
// orientation contact sheets (pass 1 runs everything at 0).
//
// Seven downloads are byte-identical to sources already onboarded by the 1048
// batch (verified by sha256 against the recorded provenance) and are skipped.
// Thirteen more are deferred for now (owner decision, 2026-08-20): twelve
// Olympics clips ship KTX2 textures that the production viewer cannot decode,
// and alligator-ar's source export has degenerate skin attributes. Their
// converted files stay under converted-downloads/ for a later repair pass.
export const DOWNLOADS = [
  // Root-level single models
  { slug: 'african-leopard', source: 'AfricanLeopard/model.glb', expectedLongestMeters: 1.9 },
  { slug: 'alligator-ar', source: 'Alligator/model.glb', expectedLongestMeters: 3.5, skip: 'deferred: source export has degenerate skin attributes (JOINTS_0/WEIGHTS_0 accessors without bufferView) that convert to out-of-range joint indices' },
  { slug: 'alpine-goat', source: 'AlpineGoat/model.glb', expectedLongestMeters: 1.4 },
  { slug: 'anglerfish', source: 'AnglerFish/model.glb', expectedLongestMeters: 0.5 },
  { slug: 'arabian-horse', source: 'ArabianHorse/model.glb', expectedLongestMeters: 2.2 },
  { slug: 'ball-python', source: 'BallPython/model.glb', expectedLongestMeters: 1.5, yawDegrees: 180 },
  { slug: 'brown-bear', source: 'BrownBear/model.glb', expectedLongestMeters: 2.4 },
  { slug: 'cheetah', source: 'Cheetah/model.glb', expectedLongestMeters: 2.0 },
  { slug: 'common-octopus', source: 'CommonOctopus/model.glb', expectedLongestMeters: 1.0 },
  { slug: 'emperor-penguin', source: 'EmperorPenguin/model.glb', expectedLongestMeters: 1.2 },
  { slug: 'european-hedgehog', source: 'EuropeanHedgehog/model.glb', expectedLongestMeters: 0.35 },
  { slug: 'french-bulldog', source: 'FrenchBulldog/model.glb', expectedLongestMeters: 0.55 },
  { slug: 'giant-panda', source: 'GiantPanda/model.glb', expectedLongestMeters: 1.9 },
  { slug: 'golden-eagle', source: 'GoldenEagle/model.glb', expectedLongestMeters: 2.2 },
  { slug: 'golden-retriever', source: 'GoldenRetriever/model.glb', expectedLongestMeters: 1.1 },
  { slug: 'great-white-shark', source: 'GreatWhiteShark/model.glb', expectedLongestMeters: 4.5 },
  { slug: 'green-sea-turtle', source: 'GreenSeaTurtle/model.glb', expectedLongestMeters: 1.3 },
  { slug: 'labrador-retriever', source: 'LabradorRetriever/model.glb', expectedLongestMeters: 1.15 },
  { slug: 'lion-ar', source: 'Lion/model.glb', expectedLongestMeters: 2.5 },
  { slug: 'macaw', source: 'Macaw/model.glb', expectedLongestMeters: 0.9 },
  { slug: 'mallard-duck', source: 'MallardDuck/model.glb', expectedLongestMeters: 0.65 },
  { slug: 'pomeranian', source: 'Pomeranian/model.glb', expectedLongestMeters: 0.55 },
  { slug: 'pony', source: 'Pony/model.glb', expectedLongestMeters: 1.8 },
  { slug: 'pug-ar', source: 'Pug/model.glb', expectedLongestMeters: 0.55 },
  { slug: 'rabbit-ar', source: 'Rabbit/model.glb', expectedLongestMeters: 0.45 },
  { slug: 'raccoon-ar', source: 'Raccoon/model.glb', expectedLongestMeters: 0.75 },
  { slug: 'rottweiler', source: 'Rottweiler/model.glb', expectedLongestMeters: 1.2 },
  { slug: 'santa-claus', source: 'SantaClaus/model.glb', expectedLongestMeters: 1.9 },
  { slug: 'short-haired-cat', source: 'ShortHairedCat/model.glb', expectedLongestMeters: 0.75 },
  { slug: 'tiger-ar', source: 'Tiger/model.glb', expectedLongestMeters: 3.0 },
  { slug: 'timber-wolf', source: 'TimberWolf/model.glb', expectedLongestMeters: 1.6 },
  { slug: 'mei-panda', source: 'TurningRed/meiPanda.glb', expectedLongestMeters: 1.1 },
  { slug: 'white-tailed-deer', source: 'WhiteTailedDeer/model.glb', expectedLongestMeters: 1.9 },
  // Nordic collection
  { slug: 'arctic-fox', source: 'Nordic/ArcticFox/arcticfox.glb', expectedLongestMeters: 0.95, yawDegrees: 45 },
  { slug: 'bumblebee', source: 'Nordic/Bumblebee/bumblebee.glb', expectedLongestMeters: 0.03 },
  { slug: 'lynx', source: 'Nordic/Lynx/lynx.glb', expectedLongestMeters: 1.1, yawDegrees: 45 },
  { slug: 'porpoise', source: 'Nordic/Porpoise/porpoise.glb', expectedLongestMeters: 1.8 },
  { slug: 'woodpecker', source: 'Nordic/Woodpecker/woodpecker.glb', expectedLongestMeters: 0.4 },
  // Olympics athlete action clips (human, non-animal entries kept as drafts)
  { slug: 'alexander-massialas-flick', source: 'Olympics/AlexanderMassialas/flick/flick.glb', expectedLongestMeters: 2.2, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'alexander-massialas-parry', source: 'Olympics/AlexanderMassialas/parry/parry.glb', expectedLongestMeters: 2.0, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'leticia-bufoni-boardslide', source: 'Olympics/LeticiaBufoni/boardslide/boardslide.glb', expectedLongestMeters: 1.9, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-discus', source: 'Olympics/NiklasKaul/discus/discus.glb', expectedLongestMeters: 2.2, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-highjump', source: 'Olympics/NiklasKaul/highjump/highjump.glb', expectedLongestMeters: 2.3, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-hurdles', source: 'Olympics/NiklasKaul/hurdles/hurdles.glb', expectedLongestMeters: 2.2, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-javelin', source: 'Olympics/NiklasKaul/javelin/javelin.glb', expectedLongestMeters: 2.6, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-polevault', source: 'Olympics/NiklasKaul/polevault/polevault.glb', expectedLongestMeters: 3.2, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'niklas-kaul-shotput', source: 'Olympics/NiklasKaul/shotput/shotput.glb', expectedLongestMeters: 2.2, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'simone-biles-doubledouble', source: 'Olympics/SimoneBiles/doubledouble/doubledouble.glb', expectedLongestMeters: 1.7, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'simone-biles-jumpseries', source: 'Olympics/SimoneBiles/jumpseries/jumpseries.glb', expectedLongestMeters: 2.0, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  { slug: 'simone-biles-tripledouble', source: 'Olympics/SimoneBiles/tripledouble/tripledouble.glb', expectedLongestMeters: 1.7, skip: 'deferred: KTX2 textures (KHR_texture_basisu) cannot be decoded by the production viewer' },
  // African endangered collection
  { slug: 'giraffe', source: 'african_endangered/Giraffe/Giraffe.glb', expectedLongestMeters: 4.8 },
  { slug: 'hippo', source: 'african_endangered/Hippo/Hippo.glb', expectedLongestMeters: 3.8 },
  { slug: 'red-panda', source: 'african_endangered/RedPanda/RedPanda.glb', skip: 'byte-identical to the onboarded red-panda source (sha256 match)' },
  { slug: 'saola', source: 'african_endangered/Saola/saola.glb', expectedLongestMeters: 1.5 },
  { slug: 'zebra-ar', source: 'african_endangered/Zebra/Zebra.glb', expectedLongestMeters: 2.5 },
  // Aussie animals collection
  { slug: 'echidna', source: 'aussie_animals/Echidna.glb', expectedLongestMeters: 0.6 },
  { slug: 'emu-ar', source: 'aussie_animals/Emu.glb', expectedLongestMeters: 1.7 },
  { slug: 'kangaroo-ar', source: 'aussie_animals/Kangaroo.glb', expectedLongestMeters: 1.9 },
  { slug: 'koala', source: 'aussie_animals/Koala.glb', expectedLongestMeters: 0.85 },
  { slug: 'kookaburra-ar', source: 'aussie_animals/Kookaburra.glb', expectedLongestMeters: 0.45 },
  { slug: 'platypus', source: 'aussie_animals/Platypus.glb', expectedLongestMeters: 0.6 },
  { slug: 'quokka', source: 'aussie_animals/Quokka.glb', expectedLongestMeters: 0.8 },
  { slug: 'wombat', source: 'aussie_animals/Wombat.glb', expectedLongestMeters: 1.1 },
  // Cats collection
  { slug: 'bengal-cat', source: 'cats/Bengal/Bengal.glb', expectedLongestMeters: 0.7 },
  { slug: 'kitten', source: 'cats/Kitten/Kitten.glb', skip: 'byte-identical to the onboarded kitten source (sha256 match)' },
  { slug: 'maine-coon', source: 'cats/Mainecoon/Mainecoon.glb', expectedLongestMeters: 1.0 },
  { slug: 'norwegian-forest-cat', source: 'cats/Norwegianforest/Norwegianforest.glb', skip: 'byte-identical to the onboarded norwegian-forest-cat source (sha256 match)' },
  { slug: 'persian-cat', source: 'cats/Persian/Persian.glb', skip: 'byte-identical to the onboarded persian-cat source (sha256 match)' },
  { slug: 'ragdoll', source: 'cats/Ragdoll/Ragdoll.glb', expectedLongestMeters: 0.95 },
  { slug: 'russian-blue', source: 'cats/Russianblue/Russianblue.glb', expectedLongestMeters: 0.75 },
  { slug: 'scottish-fold', source: 'cats/ScottishFold/ScottishFold.glb', expectedLongestMeters: 0.7 },
  { slug: 'siamese', source: 'cats/Siamese/Siamese.glb', expectedLongestMeters: 0.8 },
  { slug: 'sphynx-cat-ar', source: 'cats/Sphynx/Sphynx.glb', expectedLongestMeters: 0.6 },
  // Dinosaur collection
  { slug: 'ankylosaurus', source: 'dinos/Ankylosaur.glb', expectedLongestMeters: 7.0, yawDegrees: 45 },
  { slug: 'brachiosaurus', source: 'dinos/Brachiosaur.glb', expectedLongestMeters: 20.0 },
  { slug: 'dilophosaurus-ar', source: 'dinos/Dilophosa.glb', expectedLongestMeters: 6.0 },
  { slug: 'parasaurolophus', source: 'dinos/Parasaurolophus.glb', expectedLongestMeters: 10.0, yawDegrees: 45 },
  { slug: 'pteranodon-ar', source: 'dinos/Pteranodon.glb', expectedLongestMeters: 7.0 },
  { slug: 'spinosaurus', source: 'dinos/Spinosaurus.glb', expectedLongestMeters: 14.0 },
  { slug: 'stegosaurus-ar', source: 'dinos/Stegosaurus.glb', expectedLongestMeters: 8.5, yawDegrees: 225 },
  { slug: 'triceratops-ar', source: 'dinos/Triceratop.glb', expectedLongestMeters: 9.0, yawDegrees: 90 },
  { slug: 'tyrannosaurus-rex-ar', source: 'dinos/Tyrannosa.glb', expectedLongestMeters: 12.3, yawDegrees: 270 },
  { slug: 'velociraptor', source: 'dinos/Velociraptor.glb', expectedLongestMeters: 2.1, yawDegrees: 45 },
  // Dogs collection
  { slug: 'akita', source: 'dogs/Akita/Akita.glb', expectedLongestMeters: 1.1 },
  { slug: 'australian-shepherd', source: 'dogs/AustralianShepherd/AustralianShepherd.glb', expectedLongestMeters: 1.0 },
  { slug: 'beagle', source: 'dogs/Beagle/Beagle.glb', expectedLongestMeters: 0.85 },
  { slug: 'border-collie', source: 'dogs/Bordercollie/Bordercollie.glb', expectedLongestMeters: 1.05 },
  { slug: 'bulldog', source: 'dogs/Bulldog/Bulldog.glb', expectedLongestMeters: 0.7 },
  { slug: 'bull-terrier', source: 'dogs/BullTerrier/BullTerrier.glb', expectedLongestMeters: 0.85 },
  { slug: 'cane-corso-ar', source: 'dogs/Canecorso/Canecorso.glb', expectedLongestMeters: 1.1 },
  { slug: 'chihuahua', source: 'dogs/Chihuahua/Chihuahua.glb', expectedLongestMeters: 0.4 },
  { slug: 'chow-chow', source: 'dogs/Chowchow/Chowchow.glb', expectedLongestMeters: 1.0 },
  { slug: 'cocker-spaniel', source: 'dogs/Cockerspaniel/Cockerspaniel.glb', expectedLongestMeters: 0.85 },
  { slug: 'dachshund', source: 'dogs/Dachshund/Dachshund.glb', expectedLongestMeters: 1.0 },
  { slug: 'doberman', source: 'dogs/Doberman/Doberman.glb', expectedLongestMeters: 1.25 },
  { slug: 'german-shepherd', source: 'dogs/GermanShepherd/GermanShepherd.glb', expectedLongestMeters: 1.2 },
  { slug: 'great-dane', source: 'dogs/GreatDane/GreatDane.glb', expectedLongestMeters: 1.5 },
  { slug: 'jindo-dog', source: 'dogs/Jindodog/Jindodog.glb', expectedLongestMeters: 1.05 },
  { slug: 'labrador-retriever-2', source: 'dogs/LabradorRetriever/LabradorRetriever.glb', expectedLongestMeters: 1.15 },
  { slug: 'maltese', source: 'dogs/Maltese/Maltese.glb', expectedLongestMeters: 0.5 },
  { slug: 'pitbull', source: 'dogs/Pitbull/Pitbull.glb', expectedLongestMeters: 0.95 },
  { slug: 'poodle', source: 'dogs/Poodle/Poodle.glb', expectedLongestMeters: 0.9 },
  { slug: 'schnauzer-ar', source: 'dogs/Schnauzer/Schnauzer.glb', expectedLongestMeters: 0.95 },
  { slug: 'shiba-inu', source: 'dogs/Shibainu/Shibainu.glb', expectedLongestMeters: 0.9 },
  { slug: 'shih-tzu', source: 'dogs/Shihtzu/Shihtzu.glb', expectedLongestMeters: 0.6 },
  { slug: 'siberian-husky', source: 'dogs/Siberianhusky/Siberianhusky.glb', expectedLongestMeters: 1.05 },
  { slug: 'welsh-corgi', source: 'dogs/Welshcorgi/Welshcorgi.glb', expectedLongestMeters: 1.1 },
  { slug: 'yorkshire-terrier', source: 'dogs/Yorkshireterrier/Yorkshireterrier.glb', expectedLongestMeters: 0.45 },
  // Farm & rodent collection
  { slug: 'chipmunk', source: 'farm_rodent/Chipmunk/Chipmunk.glb', expectedLongestMeters: 0.28 },
  { slug: 'coyote', source: 'farm_rodent/Coyote/Coyote.glb', skip: 'byte-identical to the onboarded coyote source (sha256 match)' },
  { slug: 'donkey', source: 'farm_rodent/Donkey/Donkey.glb', expectedLongestMeters: 1.9 },
  { slug: 'fennec-fox', source: 'farm_rodent/Fennecfox/Fennecfox.glb', skip: 'byte-identical to the onboarded fennec-fox source (sha256 match)' },
  { slug: 'guinea-pig', source: 'farm_rodent/Guineapig/Guineapig.glb', expectedLongestMeters: 0.35 },
  { slug: 'hamster', source: 'farm_rodent/Hamster/Hamster.glb', expectedLongestMeters: 0.18 },
  { slug: 'milk-cow', source: 'farm_rodent/MilkCow/MilkCow.glb', expectedLongestMeters: 2.6 },
  { slug: 'ox-ar', source: 'farm_rodent/Ox/Ox.glb', expectedLongestMeters: 2.5 },
  { slug: 'pig', source: 'farm_rodent/Pig/Pig.glb', expectedLongestMeters: 1.6 },
  // Japanese insect collection
  { slug: 'atlas-beetle', source: 'insects/atlas_beetle/model.glb', expectedLongestMeters: 0.11 },
  { slug: 'atlas-moth', source: 'insects/atlas_moth/model.glb', expectedLongestMeters: 0.22 },
  { slug: 'brown-cicada', source: 'insects/brown_cicada/model.glb', expectedLongestMeters: 0.06 },
  { slug: 'dragonfly', source: 'insects/dragonfly/model.glb', expectedLongestMeters: 0.1 },
  { slug: 'evening-cicada', source: 'insects/evening_cicada/model.glb', expectedLongestMeters: 0.05 },
  { slug: 'firefly', source: 'insects/firefly/model.glb', expectedLongestMeters: 0.025 },
  { slug: 'giant-stag-beetle', source: 'insects/giant_stag/model.glb', expectedLongestMeters: 0.1 },
  { slug: 'grasshopper', source: 'insects/grasshopper/model.glb', expectedLongestMeters: 0.09, yawDegrees: 180 },
  { slug: 'hercules-beetle-ar', source: 'insects/hercules_beetle/model.glb', expectedLongestMeters: 0.17 },
  { slug: 'hornet', source: 'insects/hornet/model.glb', expectedLongestMeters: 0.05 },
  { slug: 'jewel-beetle', source: 'insects/jewel_beetle/model.glb', expectedLongestMeters: 0.045 },
  { slug: 'ladybug', source: 'insects/ladybug/model.glb', expectedLongestMeters: 0.02, yawDegrees: 180 },
  { slug: 'mantis', source: 'insects/mantis/model.glb', expectedLongestMeters: 0.1, yawDegrees: 180 },
  { slug: 'stag-beetle', source: 'insects/miyama_stag_beetle/model.glb', skip: 'byte-identical to the onboarded stag-beetle source (sha256 match)' },
  { slug: 'morpho-butterfly', source: 'insects/morpho/model.glb', expectedLongestMeters: 0.12 },
  { slug: 'periodical-cicada', source: 'insects/periodical_cicada/model.glb', expectedLongestMeters: 0.05 },
  { slug: 'rhinoceros-beetle', source: 'insects/rhinoceros_beetle/model.glb', expectedLongestMeters: 0.1 },
  { slug: 'robust-cicada', source: 'insects/robust_cicada/model.glb', expectedLongestMeters: 0.06 },
  { slug: 'rosalia-batesi', source: 'insects/rosalia_batesi/model.glb', expectedLongestMeters: 0.05 },
  { slug: 'shining-ball-scarab', source: 'insects/shining_ball_scarab_beetle/model.glb', expectedLongestMeters: 0.05 },
  { slug: 'stag-beetle-2', source: 'insects/stag_beetle/model.glb', expectedLongestMeters: 0.08, yawDegrees: 180 },
  { slug: 'swallowtail-butterfly', source: 'insects/swallowtail_butterfly/model.glb', expectedLongestMeters: 0.12 },
  { slug: 'walkers-cicada', source: 'insects/walkers_cicada/model.glb', expectedLongestMeters: 0.05 },
  // Mandalorian / mythical (fictional characters, kept as drafts)
  { slug: 'grogu', source: 'mandalorian/grogu/grogu.glb', expectedLongestMeters: 0.4 },
  { slug: 'dragon', source: 'mythical/Dragon/Dragon.glb', expectedLongestMeters: 4.5, yawDegrees: 180 },
  { slug: 'unicorn', source: 'mythical/Unicorn/Unicorn.glb', expectedLongestMeters: 2.4 },
]

export const DOWNLOADS_ROOT = 'https://storage.googleapis.com/ar-answers-in-search-models/static/'

export function sourceUrlFor(entry) {
  return `${DOWNLOADS_ROOT}${entry.source}`
}

/** Entries that will actually be onboarded (skips byte-identical duplicates). */
export function activeDownloads() {
  return DOWNLOADS.filter((entry) => !entry.skip)
}
