// Per-animal draft content for the 1048 blend-source batch (23 animals).
// Consumed by scripts/generate-1048-draft-packages.mjs. Facts follow
// family-friendly popular-science ranges; every uncertainty is echoed in
// editorial notes.
export const CONTENT_C = [
  {
    slug: 'crow',
    zhName: '乌鸦',
    enName: 'Crow',
    zhLabel: '雀形目鸟类',
    enLabel: 'Songbird',
    zhVisible: '看它一身乌黑的羽毛，其实阳光下会闪出紫色和绿色的光。',
    enVisible:
      'Its feathers look plain black, but in sunlight they shimmer purple and green.',
    zhSentences: [
      '这是乌鸦，鸟类里出了名的“智多星”。',
      '它会用小树枝做工具取虫子，还记得住人的脸。',
    ],
    enSentences: [
      'This is the crow, the famous genius of the bird world.',
      'It can fashion tools from twigs to fetch insects — and it remembers human faces.',
    ],
    zhPron: 'wū yā',
    enPron: 'KROH',
    zhPeriod: '现代（约 1700 万年前分化至今）',
    enPeriod: 'Present day (lineage around 17 million years old)',
    zhRegions: ['全球（除南极洲）'],
    enRegions: ['Worldwide (except Antarctica)'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.55 },
    diet: 'omnivore',
    zhParent:
      '乌鸦（鸦科鸟类）是最聪明的鸟类之一：会藏食物并记住上千个藏点，会用石子升高瓶中水位，甚至会把自己的行为考虑进对手的计划。它们过群居生活，晚上成百上千只聚在一起过夜。黑色羽毛其实有结构色，在阳光下泛着紫绿光泽。',
    enParent:
      'Crows (corvids) are among the smartest birds: they cache food and remember thousands of hiding spots, drop stones to raise water levels, and can reason about what others know. Highly social, they gather in roosts of hundreds at dusk. Their “black” feathers carry structural colour that glints purple and green in sunlight.',
    sources: [
      {
        title: 'Crow — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/crow-bird',
      },
      {
        title: 'Corvid research — 华盛顿大学（UW）',
        url: 'https://corvidresearch.yolasite.com/',
      },
    ],
    zhUncertainties: [
      '本页以秃鼻乌鸦/短嘴鸦类群为代表，具体物种随地区不同。',
      '智力实验结论来自多个鸦科物种，作概括性介绍。',
    ],
    enUncertainties: [
      'This page features typical crows; exact species varies by region.',
      'Cognition findings span several corvid species and are summarised.',
    ],
    accent: { strong: '#3c3f4a', soft: '#d5d8e2' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'rabbit',
    zhName: '兔子',
    enName: 'Rabbit',
    zhLabel: '兔形目动物',
    enLabel: 'Lagomorph',
    zhVisible: '看它长长的耳朵，能像雷达一样转向声音的方向。',
    enVisible:
      'Look at its long ears — they swivel like radar dishes toward sounds.',
    zhSentences: [
      '这是兔子，长耳朵的跳跃高手。',
      '它的耳朵又长又会转，还能帮身体散热。',
    ],
    enSentences: [
      'This is the rabbit, a champion jumper with long ears.',
      'Its ears turn in every direction and also help it stay cool.',
    ],
    zhPron: 'tù zi',
    enPron: 'RAB-it',
    zhPeriod: '现代（兔科约 4000 万年前出现至今）',
    enPeriod: 'Present day (rabbit family around 40 million years old)',
    zhRegions: ['全球（家兔驯化自欧洲穴兔）'],
    enRegions: ['Worldwide (domestic rabbits descend from European rabbits)'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.5 },
    diet: 'herbivore',
    zhParent:
      '兔子几乎什么都怕，所以长了一整套“保命装备”：长耳朵收集四面八方的声音，大眼睛几乎能看到身后的景象，强有力的后腿让它能急转弯逃跑。兔子吃自己的软便便以再吸收营养。它们住在自己挖的洞穴里，群居生活。',
    enParent:
      'Rabbits are prey animals with a full survival kit: long ears gather sound from all directions, wide-set eyes see almost behind them, and powerful hind legs power zigzag escapes. They re-eat special soft droppings to absorb every last nutrient. European rabbits dig warrens and live in social groups.',
    sources: [
      {
        title: 'Rabbit — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/rabbit',
      },
      {
        title: 'House rabbit — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Oryctolagus_cuniculus/',
      },
    ],
    zhUncertainties: [
      '体长为欧洲穴兔/家兔常见区间。',
      '行为描述以穴兔为主，野兔习性有所不同。',
    ],
    enUncertainties: [
      'The size range covers typical European and domestic rabbits.',
      'Behaviour notes centre on European rabbits; hares differ.',
    ],
    accent: { strong: '#8a7d70', soft: '#eae0d3' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'pug',
    zhName: '哈巴狗',
    enName: 'Pug',
    zhLabel: '小型家犬',
    enLabel: 'Small dog breed',
    zhVisible: '看它扁扁的脸和圆圆的大眼睛，还有卷卷的尾巴。',
    enVisible:
      'Look at its flat face, big round eyes, and tightly curled tail.',
    zhSentences: [
      '这是哈巴狗，一种脸扁扁的小型犬。',
      '它卷卷的尾巴像一个小圈，开心的时候会摇个不停。',
    ],
    enSentences: [
      'This is the pug, a small dog with a wonderfully flat face.',
      'Its tail curls in a little spiral and wiggles like mad when it is happy.',
    ],
    zhPron: 'hǎ ba gǒu',
    enPron: 'PUG',
    zhPeriod: '现代（约 2000 年前育成至今）',
    enPeriod: 'Present day (breed around 2,000 years old)',
    zhRegions: ['全球（起源自中国）'],
    enRegions: ['Worldwide (originating in China)'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.55 },
    diet: 'omnivore',
    zhParent:
      '哈巴狗是中国古老犬种，曾是宫廷里的宝贝。它扁脸短鼻（短头颅）的形状让呼吸效率降低，夏天容易中暑，需要特别照顾。哈巴狗性格温和爱撒娇，体重容易超标，需要控制饮食。褶皱里要经常清洁保持干燥。',
    enParent:
      'The pug is an ancient Chinese breed once treasured in imperial courts. Its flat face and short nose (brachycephaly) make breathing less efficient, so pugs overheat easily and need extra care in summer. Gentle and affectionate, pugs gain weight easily and need measured meals; their wrinkles need regular cleaning.',
    sources: [
      {
        title: 'Pug — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/pug/',
      },
      {
        title: 'Dog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/dog',
      },
    ],
    zhUncertainties: [
      '体长为成年哈巴狗常见区间。',
      '育种史年代为近似估计。',
    ],
    enUncertainties: [
      'The size range covers typical adult pugs.',
      'Breed age is an approximation.',
    ],
    accent: { strong: '#9a795a', soft: '#f0e0cf' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'elephant',
    zhName: '大象',
    enName: 'Elephant',
    zhLabel: '长鼻目动物',
    enLabel: 'Elephant',
    zhVisible: '看它长长的鼻子，既是鼻子又是手，末端还有两片“嘴唇”。',
    enVisible:
      'Look at its long trunk — part nose, part hand, with two lip-like fingers at the tip.',
    zhSentences: [
      '这是大象，陆地上最大的动物。',
      '它的长鼻子能卷起整棵树枝，也会轻轻地捡起一颗花生。',
    ],
    enSentences: [
      'This is the elephant, the largest animal on land.',
      'Its trunk can rip a whole branch — or gently pick up a single peanut.',
    ],
    zhPron: 'dà xiàng',
    enPron: 'EL-uh-funt',
    zhPeriod: '现代（长鼻目约 5500 万年前出现至今）',
    enPeriod: 'Present day (proboscidean lineage around 55 million years old)',
    zhRegions: ['非洲撒哈拉以南', '南亚与东南亚'],
    enRegions: ['Sub-Saharan Africa', 'South and Southeast Asia'],
    size: { kind: 'body-length', minMeters: 5.5, maxMeters: 7.0 },
    diet: 'herbivore',
    zhParent:
      '大象的鼻子由上万块肌肉组成，既能拔树也能捡起硬币；鼻尖的“手指”敏感到能分辨硬币的正反面。大象用次声波在几公里外“聊天”，还能通过脚掌感知地面的震动。象群由年长的雌象带领，成员彼此照应数十年，是自然界最紧密的家庭之一。',
    enParent:
      'An elephant’s trunk packs tens of thousands of muscles, strong enough to uproot a tree yet delicate enough to pick up a coin — the finger-like tip can even tell heads from tails. Elephants “talk” in infrasound over kilometres and sense ground vibrations through their feet. Herds led by elder females stay close for decades, one of nature’s tightest families.',
    sources: [
      {
        title: 'Elephant — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/elephant',
      },
      {
        title: 'Elephant — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/elephant',
      },
    ],
    zhUncertainties: [
      '本页不区分非洲象与亚洲象，体长为大型雄性近似区间。',
      '认知与通讯研究仍在持续更新，作概括介绍。',
    ],
    enUncertainties: [
      'This page does not separate African and Asian species; the size range features large bulls.',
      'Cognition and communication research is ongoing and summarised.',
    ],
    accent: { strong: '#6f6a63', soft: '#e4ded4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'goat',
    zhName: '山羊',
    enName: 'Goat',
    zhLabel: '牛科家畜',
    enLabel: 'Domestic bovine',
    zhVisible: '看它弯弯的角和方方的瞳孔，爬起岩石来像走平地。',
    enVisible:
      'Look at its curved horns and rectangular pupils — it climbs rocks like flat ground.',
    zhSentences: [
      '这是山羊，最能爬高的家畜。',
      '它的瞳孔是横着的长方形，看得特别宽。',
    ],
    enSentences: [
      'This is the goat, the best climber among farm animals.',
      'Its wide rectangular pupils give it an amazing field of view.',
    ],
    zhPron: 'shān yáng',
    enPron: 'GOHT',
    zhPeriod: '现代（约 1 万年前驯化至今）',
    enPeriod: 'Present day (domesticated around 10,000 years ago)',
    zhRegions: ['全球（驯化自野山羊）'],
    enRegions: ['Worldwide (domesticated from the wild goat)'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.4 },
    diet: 'herbivore',
    zhParent:
      '山羊约一万年前在西亚被驯化，是“清道夫式”的食草动物——灌木、荆棘、树皮都吃，能踩着几乎垂直的岩壁找食物。它们的横长方形瞳孔视野接近 320°，随时发现天敌。山羊好奇心强，喜欢探索和攀高。',
    enParent:
      'Goats were domesticated in western Asia about ten thousand years ago and remain browsers rather than grazers — they happily eat shrubs, thorns and bark, and will balancing on near-vertical cliffs to reach them. Their rectangular pupils open a field of view near 320° for spotting predators. Curious by nature, goats love to explore and climb.',
    sources: [
      {
        title: 'Goat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/goat',
      },
      {
        title: 'Goat — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Capra_hircus/',
      },
    ],
    zhUncertainties: [
      '体长为成年山羊常见区间，品种差异大。',
      '瞳孔视野角度为研究近似值。',
    ],
    enUncertainties: [
      'The size range covers typical adults; breeds vary widely.',
      'Pupil field-of-view figures are research approximations.',
    ],
    accent: { strong: '#7d7566', soft: '#e6dfd0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'zebra',
    zhName: '斑马',
    enName: 'Zebra',
    zhLabel: '马科动物',
    enLabel: 'Wild equid',
    zhVisible: '看它黑白相间的条纹，每只斑马的花纹都不一样。',
    enVisible:
      'Look at its black-and-white stripes — no two zebras share the same pattern.',
    zhSentences: [
      '这是斑马，穿着条纹“外套”的马的亲戚。',
      '每只斑马的条纹都不相同，就像我们的指纹。',
    ],
    enSentences: [
      'This is the zebra, a horse relative wearing a striped coat.',
      'Every zebra’s stripes are unique, just like your fingerprints.',
    ],
    zhPron: 'bān mǎ',
    enPron: 'ZEE-bruh',
    zhPeriod: '现代（约 400 万年前分化至今）',
    enPeriod: 'Present day (lineage around 4 million years old)',
    zhRegions: ['非洲草原'],
    enRegions: ['African savannas'],
    size: { kind: 'body-length', minMeters: 2.2, maxMeters: 2.7 },
    diet: 'herbivore',
    zhParent:
      '斑马条纹的用途有好几种解释：让吸血虻眼花、在奔跑的群中迷惑捕食者、帮助彼此认出个体，也可能有散热作用。斑马家族由一只雄马带领，成员靠叫声和表情交流。它们跑得很快，也敢于踢打来保护自己。',
    enParent:
      'Zebra stripes have several proposed jobs: dazzling biting flies, confusing predators in a running herd, helping individuals recognise each other, and perhaps shedding heat. Family herds are led by one stallion, and members communicate with calls and expressions. Zebras run fast and will bite and kick to defend themselves.',
    sources: [
      {
        title: 'Zebra — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/zebra',
      },
      {
        title: 'Why do zebras have stripes? — 《科学美国人》（Scientific American）',
        url: 'https://www.scientificamerican.com/article/why-do-zebras-have-stripes/',
      },
    ],
    zhUncertainties: [
      '本页涵盖平原斑马等三种斑马，体长为近似区间。',
      '条纹功能仍是活跃的研究话题。',
    ],
    enUncertainties: [
      'This page covers the three zebra species together; sizes are approximate.',
      'Stripe function remains an active research topic.',
    ],
    accent: { strong: '#3f4348', soft: '#dadde2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'sphynx-cat',
    zhName: '斯芬克斯猫',
    enName: 'Sphynx Cat',
    zhLabel: '无毛家猫',
    enLabel: 'Hairless cat breed',
    zhVisible: '看它皱皱的无毛皮肤，摸起来像温暖的桃子。',
    enVisible:
      'Look at its wrinkled hairless skin — it feels like a warm peach.',
    zhSentences: [
      '这是斯芬克斯猫，一种几乎没有毛的猫。',
      '它的皮肤皱皱的，摸起来又暖又软。',
    ],
    enSentences: [
      'This is the Sphynx cat, a cat with almost no fur.',
      'Its wrinkly skin is warm and soft to the touch.',
    ],
    zhPron: 'sī fēn kè sī māo',
    enPron: 'SFINKS KAT',
    zhPeriod: '现代（1966 年育成至今）',
    enPeriod: 'Present day (breed founded in 1966)',
    zhRegions: ['全球（起源自加拿大）'],
    enRegions: ['Worldwide (originating in Canada)'],
    size: { kind: 'body-length', minMeters: 0.45, maxMeters: 0.6 },
    diet: 'carnivore',
    zhParent:
      '斯芬克斯猫源于 1966 年加拿大一窝天然基因突变的小猫。它们并非完全无毛，皮肤上覆盖着细软的绒毛。因为没有被毛保温，它们怕冷也怕晒，冬天要穿衣服、夏天要防晒；皮肤还会出油，需要定期擦洗。性格黏人爱热闹。',
    enParent:
      'The Sphynx traces back to a naturally mutated kitten born in Canada in 1966. They are not truly hairless — a fine peach-fuzz covers the skin. Without an insulating coat they chill and sunburn easily, needing jumpers in winter and shade in summer, and their oily skin requires regular bathing. Personality-wise they are devoted heat-seekers.',
    sources: [
      {
        title: 'Sphynx — 国际猫协会（TICA）',
        url: 'https://tica.org/breeds/browse-all-breeds?view=article&id=875:sphynx-breed&catid=8',
      },
      {
        title: 'Cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cat',
      },
    ],
    zhUncertainties: [
      '体长为成年斯芬克斯猫常见区间。',
      '护理建议为概括性介绍，个体情况请遵兽医意见。',
    ],
    enUncertainties: [
      'The size range covers typical adults.',
      'Care notes are general; follow veterinary advice for individuals.',
    ],
    accent: { strong: '#a58a78', soft: '#f0e2d6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'raccoon',
    zhName: '浣熊',
    enName: 'Raccoon',
    zhLabel: '浣熊科动物',
    enLabel: 'Procyonid',
    zhVisible: '看它黑色的“眼罩”和灵活的前爪，像戴着面具的小偷。',
    enVisible:
      'Look at its black eye mask and clever front paws — like a little masked bandit.',
    zhSentences: [
      '这是浣熊，戴着“眼罩”的机灵鬼。',
      '它的前爪特别灵活，能拧开瓶盖、摸出水里的食物。',
    ],
    enSentences: [
      'This is the raccoon, the clever creature in an eye mask.',
      'Its front paws are so nimble it can unscrew lids and feel for food underwater.',
    ],
    zhPron: 'huàn xióng',
    enPron: 'ra-KOON',
    zhPeriod: '现代（约 250 万年前分化至今）',
    enPeriod: 'Present day (lineage around 2.5 million years old)',
    zhRegions: ['北美洲', '引入欧洲与日本'],
    enRegions: ['North America', 'introduced to Europe and Japan'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.9 },
    diet: 'omnivore',
    zhParent:
      '浣熊的黑眼罩可能有助于减少眩光、方便夜间视物。它们的前爪感知极灵敏，湿润后更像“手”；浣熊常把食物在水里搓来搓去，因此得了“洗食物”的名声。浣熊聪明且适应力强，在城市里学会了翻垃圾桶和过马路。',
    enParent:
      'A raccoon’s dark eye mask may cut glare for night vision. Its front paws are extraordinarily sensitive and work even better when wet — the habit of dunking food earned it the name “washer bear” in several languages. Highly intelligent and adaptable, urban raccoons have learned to open bins and cross roads safely.',
    sources: [
      {
        title: 'Raccoon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/raccoon',
      },
      {
        title: 'Raccoon — 美国国家地理（National Geographic）',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/raccoon-facts',
      },
    ],
    zhUncertainties: [
      '眼罩功能的解释为学界假说之一。',
      '体长不含尾巴，城市个体常更胖。',
    ],
    enUncertainties: [
      'The glare-reduction role of the mask is one leading hypothesis.',
      'Length excludes the tail; urban animals are often heavier.',
    ],
    accent: { strong: '#5c5f68', soft: '#dde0e6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'sea-turtle',
    zhName: '海龟',
    enName: 'Sea Turtle',
    zhLabel: '海龟科爬行动物',
    enLabel: 'Marine turtle',
    zhVisible: '看它像船桨一样的鳍状四肢，在水里游得又稳又快。',
    enVisible:
      'Look at its flipper-like limbs — steady and swift in the water.',
    zhSentences: [
      '这是海龟，海洋里的远航旅行家。',
      '它的四肢变成了船桨的样子，游泳特别稳。',
    ],
    enSentences: [
      'This is the sea turtle, the long-distance sailor of the oceans.',
      'Its legs have turned into paddles, making it a strong swimmer.',
    ],
    zhPron: 'hǎi guī',
    enPron: 'SEE TUR-tl',
    zhPeriod: '现代（海龟类约 1.1 亿年前出现至今）',
    enPeriod: 'Present day (sea turtles around 110 million years old)',
    zhRegions: ['全球热带与温带海洋'],
    enRegions: ['Tropical and temperate seas worldwide'],
    size: { kind: 'body-length', minMeters: 0.8, maxMeters: 1.4 },
    diet: 'omnivore',
    zhParent:
      '海龟一生几乎都在海里，只有雌龟上岸产卵。它们靠地磁“地图”导航，能跨越整个大洋回到出生的海滩孵蛋。幼龟的性别由沙温决定——天越热雌龟越多。海龟寿命可达几十上百年，但塑料垃圾和渔网让它们面临危险。',
    enParent:
      'Sea turtles spend almost their whole lives at sea; only females come ashore to nest. They navigate with a magnetic “map” and cross entire oceans to nest on the beaches where they hatched. Sand temperature decides the hatchlings’ sex — warmer sands produce more females. Some live past a hundred years, though plastic and fishing nets now endanger them.',
    sources: [
      {
        title: 'Sea turtle — 美国国家海洋与大气局（NOAA）',
        url: 'https://www.fisheries.noaa.gov/sea-turtles',
      },
      {
        title: 'Sea turtle — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/sea-turtle',
      },
    ],
    zhUncertainties: [
      '本页涵盖绿海龟等大型海龟，体长为背甲直线长度近似区间。',
      '地磁导航机制仍在研究中。',
    ],
    enUncertainties: [
      'This page covers large species such as the green turtle; sizes are approximate carapace lengths.',
      'Magnetic-navigation mechanisms remain under study.',
    ],
    accent: { strong: '#4d6f66', soft: '#d3e5dd' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'hercules-beetle',
    zhName: '犀牛甲虫（长戟大兜虫）',
    enName: 'Hercules Beetle',
    zhLabel: '甲虫（金龟子科）',
    enLabel: 'Beetle (rhinoceros beetle family)',
    zhVisible: '看雄虫头上那根长长的“犀牛角”，是它摔跤比赛的武器。',
    enVisible:
      'Look at the long “rhinoceros horn” on the male — its wrestling weapon.',
    zhSentences: [
      '这是犀牛甲虫，世界上最大的甲虫之一。',
      '雄虫头上的长角用来和对手比力气。',
    ],
    enSentences: [
      'This is the Hercules beetle, one of the biggest beetles on Earth.',
      'The male’s long horn is used to wrestle rivals.',
    ],
    zhPron: 'xī niú jiǎ chóng',
    enPron: 'HUR-kyoo-leez BEE-tl',
    zhPeriod: '现代（约 1 亿年前出现至今）',
    enPeriod: 'Present day (around 100 million years ago to today)',
    zhRegions: ['中南美洲热带雨林'],
    enRegions: ['Central and South American rainforests'],
    size: { kind: 'body-length', minMeters: 0.1, maxMeters: 0.18 },
    diet: 'herbivore',
    zhParent:
      '长戟大兜虫按总体长算是最大的甲虫之一，雄虫的角几乎占身体一半。它们力气惊人，能举起自重数百倍的东西。幼虫在朽木里生活一到两年，成虫主要吃树汁和水果。角的大小差异很大，也受幼虫期营养影响。',
    enParent:
      'By total length the Hercules beetle is among the largest beetles; the male’s horn can be nearly half his body. Famously strong, they can lift several hundred times their own weight. Larvae live in rotting wood for a year or two, while adults feed on sap and fruit. Horn size varies widely and depends on larval nutrition.',
    sources: [
      {
        title: 'Hercules beetle — 内布拉斯加大学（UNL）昆虫系',
        url: 'https://entomology.unl.edu/k12/herculesbeetle.htm',
      },
      {
        title: 'Dynastes hercules — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Dynastes_hercules/',
      },
    ],
    zhUncertainties: [
      '体长含角；不含角时雄虫约 5–8 厘米。',
      '“举重数百倍”的倍数因研究而异。',
    ],
    enUncertainties: [
      'Lengths include the horn; body-only males reach roughly 5–8 cm.',
      'Strength multipliers vary across studies.',
    ],
    accent: { strong: '#4f4232', soft: '#e0d3ba' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'lion',
    zhName: '狮子',
    enName: 'Lion',
    zhLabel: '大型猫科动物',
    enLabel: 'Big cat',
    zhVisible: '看雄狮脖子上蓬松的鬃毛，像一圈天然的“围巾”。',
    enVisible:
      'Look at the male’s shaggy mane — a scarf gifted by nature.',
    zhSentences: [
      '这是狮子，草原上唯一群居的大猫。',
      '雄狮脖子上长着蓬松的鬃毛，吼声几公里外都能听到。',
    ],
    enSentences: [
      'This is the lion, the only big cat that lives in groups.',
      'The male wears a shaggy mane, and his roar carries for kilometres.',
    ],
    zhPron: 'shī zi',
    enPron: 'LY-un',
    zhPeriod: '现代（豹属约 300 万年前分化至今）',
    enPeriod: 'Present day (Panthera lineage around 3 million years old)',
    zhRegions: ['非洲撒哈拉以南', '印度吉尔森林'],
    enRegions: ['Sub-Saharan Africa', 'Gir Forest, India'],
    size: { kind: 'body-length', minMeters: 2.4, maxMeters: 3.3 },
    diet: 'carnivore',
    zhParent:
      '狮子是唯一真正群居的猫科动物，一群（骄傲）由几只雌狮和幼崽组成，雌狮负责大部分捕猎。雄狮的鬃毛既保护脖子也显示身体状态。狮子的吼声能传到 8 公里外，用来宣示领地。野外数量在过去百年大幅下降。',
    enParent:
      'Lions are the only truly social cats: a pride centres on related females and their cubs, and the lionesses do most of the hunting. A male’s mane protects his neck and signals his condition. Roars carry up to eight kilometres, advertising territory. Wild populations have declined steeply over the past century.',
    sources: [
      {
        title: 'Lion — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/lion',
      },
      {
        title: 'Lion — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/lion',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖雄狮与雌狮，雄狮更长。',
      '吼声传播距离随环境变化。',
    ],
    enUncertainties: [
      'The size range spans males and females; males run longer.',
      'Roar distances vary with terrain.',
    ],
    accent: { strong: '#a3742f', soft: '#f0dcb4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'kookaburra',
    zhName: '笑翠鸟',
    enName: 'Kookaburra',
    zhLabel: '翠鸟科鸟类',
    enLabel: 'Kingfisher',
    zhVisible: '听！它的叫声像人的大笑声，一唱一和响成一片。',
    enVisible:
      'Listen! Its call sounds like human laughter, rolling in chorus after chorus.',
    zhSentences: [
      '这是笑翠鸟，澳大利亚森林里的“大笑鸟”。',
      '它叫起来像人在哈哈大笑，其实是在宣布领地。',
    ],
    enSentences: [
      'This is the kookaburra, the “laughing bird” of Australian forests.',
      'Its call sounds like big human laughter — really it is announcing territory.',
    ],
    zhPron: 'xiào cuì niǎo',
    enPron: 'KOOK-uh-bur-uh',
    zhPeriod: '现代（翠鸟科约 3000 万年前分化至今）',
    enPeriod: 'Present day (kingfisher family around 30 million years old)',
    zhRegions: ['澳大利亚与新几内亚'],
    enRegions: ['Australia and New Guinea'],
    size: { kind: 'body-length', minMeters: 0.39, maxMeters: 0.47 },
    diet: 'carnivore',
    zhParent:
      '笑翠鸟是体型最大的翠鸟，但很少吃鱼——它们蹲在枝头猛扑蛇、蜥蜴和大型昆虫，甚至会捕蛇。清晨和黄昏，一群笑翠鸟齐声“大笑”（合唱宣示领地），是澳洲丛林的闹钟。它们在树洞里筑巢，家族成员会一起帮忙养幼鸟。',
    enParent:
      'Kookaburras are the largest kingfishers yet rarely fish — they perch and pounce on snakes, lizards and big insects, even tackling venomous snakes. At dawn and dusk family groups “laugh” in rolling choruses that proclaim territory, the bush’s natural alarm clock. They nest in tree hollows, with helpers joining the parents to raise chicks.',
    sources: [
      {
        title: 'Laughing kookaburra — 澳大利亚博物馆（Australian Museum）',
        url: 'https://australian.museum/learn/animals/birds/laughing-kookaburra/',
      },
      {
        title: 'Kookaburra — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/kookaburra',
      },
    ],
    zhUncertainties: [
      '本页以笑翠鸟（laughing kookaburra）为代表。',
      '食性为概括性介绍。',
    ],
    enUncertainties: [
      'This page features the laughing kookaburra.',
      'Diet notes are a general summary.',
    ],
    accent: { strong: '#5b6d8c', soft: '#d9e0ec' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'alpaca',
    zhName: '羊驼',
    enName: 'Alpaca',
    zhLabel: '骆驼科家畜',
    enLabel: 'Camelid',
    zhVisible: '看它毛茸茸的身体和香蕉形的脸，睫毛长长的特别可爱。',
    enVisible:
      'Look at its fluffy fleece and banana-shaped face, with adorably long lashes.',
    zhSentences: [
      '这是羊驼，安第斯山区的毛茸茸家畜。',
      '它的毛又软又暖，剪下来能织成漂亮的毛衣。',
    ],
    enSentences: [
      'This is the alpaca, the fluffy farm animal of the Andes.',
      'Its soft warm fleece is sheared and spun into beautiful knitwear.',
    ],
    zhPron: 'yáng tuó',
    enPron: 'al-PAK-uh',
    zhPeriod: '现代（约 6000 年前驯化至今）',
    enPeriod: 'Present day (domesticated around 6,000 years ago)',
    zhRegions: ['南美洲安第斯山区'],
    enRegions: ['Andes of South America'],
    size: { kind: 'body-length', minMeters: 1.2, maxMeters: 1.6 },
    diet: 'herbivore',
    zhParent:
      '羊驼约六千年前从原驼驯化而来，是安第斯文明重要的驮运和产毛动物。它们不驼峰、个头小，毛有 22 种天然色。羊驼靠啐口水表达不满，也会用耳朵和尾巴的姿势交流。群居，遇到威胁时发出警报声。',
    enParent:
      'Alpacas were domesticated from the vicuña about six thousand years ago and served Andean civilisations as pack animals and fleece providers. Humpless and compact, their wool comes in twenty-two natural colours. Alpacas express annoyance by spitting and communicate with ear and tail postures. They live in herds and sound alarms when threatened.',
    sources: [
      {
        title: 'Alpaca — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/alpaca',
      },
      {
        title: 'Alpaca facts — 昆士兰大学（UQ）',
        url: 'https://www.uq.edu.au/news/article/2020/05/four-facts-about-alpacas-and-why-you-need-them',
      },
    ],
    zhUncertainties: [
      '体长为成年羊驼常见区间。',
      '驯化年代为考古近似值。',
    ],
    enUncertainties: [
      'The size range covers typical adults.',
      'Domestication dates are archaeological approximations.',
    ],
    accent: { strong: '#8d7f8e', soft: '#ece3ee' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'snail',
    zhName: '蜗牛',
    enName: 'Snail',
    zhLabel: '腹足类软体动物',
    enLabel: 'Gastropod mollusc',
    zhVisible: '看它背着螺旋形的小房子，走哪儿都带着家。',
    enVisible:
      'Look at the spiral house on its back — home travels everywhere with it.',
    zhSentences: [
      '这是蜗牛，背着房子慢慢走的小动物。',
      '它爬过的地方会留下一条亮亮的痕迹。',
    ],
    enSentences: [
      'This is the snail, the little animal that carries its house along.',
      'It leaves a shiny trail wherever it slides.',
    ],
    zhPron: 'wō niú',
    enPron: 'SNAYL',
    zhPeriod: '现代（腹足类约 5 亿年前出现至今）',
    enPeriod: 'Present day (gastropods around 500 million years old)',
    zhRegions: ['全球'],
    enRegions: ['Worldwide'],
    size: { kind: 'body-length', minMeters: 0.02, maxMeters: 0.08 },
    diet: 'herbivore',
    zhParent:
      '蜗牛用“腹足”像波浪一样蠕动前进，分泌的黏液既保护身体又当胶水，甚至能倒着爬过刀刃不受伤。壳是它随身携带的骨骼和避难所，干燥时蜗牛会封住壳口睡长觉。大部分陆生蜗牛是雌雄同体，见面交换繁殖。',
    enParent:
      'A snail ripples its muscular foot forward on self-made slime that protects it, glues it to walls, and even lets it crawl upside down over a razor blade. The shell is a portable skeleton and shelter — in dry weather the snail seals the opening and sleeps long and deep. Most land snails are simultaneous hermaphrodites that mate mutually.',
    sources: [
      {
        title: 'Snail — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/snail',
      },
      {
        title: 'Snails and slugs — 澳大利亚博物馆（Australian Museum）',
        url: 'https://australian.museum/learn/animals/molluscs/gastropods/',
      },
    ],
    zhUncertainties: [
      '本页以常见庭园蜗牛为代表，巨型种类要大得多。',
      '食性描述以植食性陆生蜗牛为主。',
    ],
    enUncertainties: [
      'This page features common garden snails; giant species are far larger.',
      'Diet notes centre on herbivorous land snails.',
    ],
    accent: { strong: '#6f7a5c', soft: '#e3e8d2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'scorpion',
    zhName: '蝎子',
    enName: 'Scorpion',
    zhLabel: '蛛形纲节肢动物',
    enLabel: 'Arachnid',
    zhVisible: '看它翘起的带毒尾巴和一双大钳子，背部还会发蓝光。',
    enVisible:
      'Look at its raised venomous tail and big pincers — and its back glows blue under UV light.',
    zhSentences: [
      '这是蝎子，夜晚出来的蛛形纲小猎手。',
      '它在紫外灯下会发出蓝绿色的荧光。',
    ],
    enSentences: [
      'This is the scorpion, the little night hunter of the arachnids.',
      'Under ultraviolet light its armour glows blue-green.',
    ],
    zhPron: 'xiē zi',
    enPron: 'SKOR-pee-un',
    zhPeriod: '现代（约 4.3 亿年前出现至今）',
    enPeriod: 'Present day (around 430 million years ago to today)',
    zhRegions: ['全球温暖干旱地区'],
    enRegions: ['Warm and arid regions worldwide'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.2 },
    diet: 'carnivore',
    zhParent:
      '蝎子比恐龙古老得多，几亿年来几乎没变样。它们夜晚出来捕猎，用钳子抓住猎物、尾巴注入毒液。蝎子的外骨骼在紫外光下发荧光——科学家用紫光灯在沙漠里数蝎子。母蝎会把小蝎背在背上照顾，这在节肢动物里很少见。',
    enParent:
      'Scorpions are far older than dinosaurs and have barely changed in hundreds of millions of years. They hunt at night, gripping prey with pincers and injecting venom with their tail. Their exoskeleton fluoresces under ultraviolet light — researchers count scorpions in the desert with UV torches. Mothers carry their hatchlings on their backs, rare care among arthropods.',
    sources: [
      {
        title: 'Scorpion — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/scorpion',
      },
      {
        title: 'Scorpions — 亚利桑那-索诺拉沙漠博物馆（ASDM）',
        url: 'https://www.desertmuseum.org/kids/oz/long-fact-sheets/Scorpions.php',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖常见种类；帝王蝎等可达 20 厘米。',
      '毒性因种类而异，绝大多数对人不危险。',
    ],
    enUncertainties: [
      'The size range covers common species; emperor scorpions reach 20 cm.',
      'Venom potency varies; the vast majority are harmless to humans.',
    ],
    accent: { strong: '#6b4a2e', soft: '#e6cfae' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'python',
    zhName: '蟒蛇',
    enName: 'Python',
    zhLabel: '蟒科蛇类',
    enLabel: 'Python snake',
    zhVisible: '看它一身花纹的鳞片，下颌能像打开抽屉一样张开。',
    enVisible:
      'Look at its patterned scales — its lower jaw swings open like a drawer.',
    zhSentences: [
      '这是蟒蛇，会“抱”住猎物的大蛇。',
      '它的下巴能张开得特别大，吞下比头还粗的食物。',
    ],
    enSentences: [
      'This is the python, the big snake that hugs its prey.',
      'Its jaws swing open amazingly wide to swallow meals bigger than its head.',
    ],
    zhPron: 'mǎng shé',
    enPron: 'PY-thon',
    zhPeriod: '现代（蟒科约 5000 万年前出现至今）',
    enPeriod: 'Present day (python family around 50 million years old)',
    zhRegions: ['非洲', '亚洲', '澳大利亚'],
    enRegions: ['Africa', 'Asia', 'Australia'],
    size: { kind: 'body-length', minMeters: 1.5, maxMeters: 6.0 },
    diet: 'carnivore',
    zhParent:
      '蟒蛇没有毒，靠缠绕抱紧猎物使其窒息。它们的两片下颌骨只用韧带相连，可以各自移动，所以能吞下很粗的动物，几个月吃一顿也没问题。蟒蛇靠唇窝感知猎物的体温，捕猎像戴着“夜视镜”。有的母蟒会盘蛋孵卵并颤抖产热。',
    enParent:
      'Pythons are non-venomous constrictors that hug prey until it suffocates. The two halves of the lower jaw are joined only by stretchy ligaments and move independently, so they can swallow very wide meals and then fast for months. Heat-sensing pits along the lips work like night-vision for hunting. Some mothers coil around their eggs and shiver to keep them warm.',
    sources: [
      {
        title: 'Python — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/python-snake',
      },
      {
        title: 'Burmese python — 美国国家地理（National Geographic）',
        url: 'https://www.nationalgeographic.com/animals/reptiles/facts/burmese-python',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖多数蟒种；网纹蟒可超 6 米。',
      '卵育行为因种类而异。',
    ],
    enUncertainties: [
      'The size range spans most python species; reticulated pythons exceed 6 m.',
      'Egg-brooding behaviour varies by species.',
    ],
    accent: { strong: '#556042', soft: '#dde3cd' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'kangaroo',
    zhName: '袋鼠',
    enName: 'Kangaroo',
    zhLabel: '有袋类动物',
    enLabel: 'Marsupial',
    zhVisible: '看它强壮的大尾巴和后腿，跳起来又高又远。',
    enVisible:
      'Look at its powerful tail and hind legs — it bounds high and far.',
    zhSentences: [
      '这是袋鼠，澳大利亚的跳跃高手。',
      '袋鼠妈妈肚子上的口袋里，装着小袋鼠宝宝。',
    ],
    enSentences: [
      'This is the kangaroo, the jumping champion of Australia.',
      'Baby kangaroos ride inside a pouch on their mother’s tummy.',
    ],
    zhPron: 'dài shǔ',
    enPron: 'kang-guh-ROO',
    zhPeriod: '现代（袋鼠类约 1000 万年前分化至今）',
    enPeriod: 'Present day (macropods around 10 million years old)',
    zhRegions: ['澳大利亚与新几内亚'],
    enRegions: ['Australia and New Guinea'],
    size: { kind: 'body-length', minMeters: 1.3, maxMeters: 2.2 },
    diet: 'herbivore',
    zhParent:
      '红大袋鼠是现存最大的有袋动物。跳跃是最省力的奔跑方式——跳得越快越省劲，尾巴像第三条腿支撑身体。袋鼠宝宝（joey）只有软糖那么大就出生，爬进育儿袋里继续长几个月。袋鼠群叫“mob”，由最大的雄袋鼠带头。',
    enParent:
      'The red kangaroo is the largest living marsupial. Hopping is surprisingly efficient — the faster they go, the less energy each hop costs — and the tail works as a third leg for balance. A jellybean-sized joey is born unfinished and crawls into the pouch to grow for months. Groups, called mobs, are led by the biggest male.',
    sources: [
      {
        title: 'Kangaroo — 澳大利亚博物馆（Australian Museum）',
        url: 'https://australian.museum/learn/animals/mammals/red-kangaroo/',
      },
      {
        title: 'Kangaroo — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/kangaroo',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖东部灰袋鼠与红大袋鼠。',
      '跳跃能效研究基于 treadmill 实验，作概括介绍。',
    ],
    enUncertainties: [
      'The size range covers eastern grey and red kangaroos.',
      'Efficiency findings come from treadmill studies and are summarised.',
    ],
    accent: { strong: '#996643', soft: '#f0dcc7' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'schnauzer',
    zhName: '雪纳瑞犬',
    enName: 'Schnauzer',
    zhLabel: '家犬品种',
    enLabel: 'Dog breed',
    zhVisible: '看它的“眉毛”和“胡子”，像一位慈祥的小老头。',
    enVisible:
      'Look at its bushy brows and beard — like a kindly little grandpa.',
    zhSentences: [
      '这是雪纳瑞犬，长着胡子眉毛的小狗。',
      '它胡子上容易沾水和食物，饭后要擦“胡子”。',
    ],
    enSentences: [
      'This is the schnauzer, the little dog with a beard and eyebrows.',
      'Its beard collects water and crumbs, so it gets a wipe after meals.',
    ],
    zhPron: 'xuě nà ruì quǎn',
    enPron: 'SHNOW-tser',
    zhPeriod: '现代（约 500 年前育成至今）',
    enPeriod: 'Present day (breed around 500 years old)',
    zhRegions: ['全球（起源自德国）'],
    enRegions: ['Worldwide (originating in Germany)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.7 },
    diet: 'omnivore',
    zhParent:
      '雪纳瑞得名于德语“胡子”（Schnauze），15 世纪的德国农场里它是抓老鼠的全能帮手。标志性的眉毛和胡子其实有实际作用：保护脸部不受老鼠反咬和荆棘伤害。它警觉聪明、掉毛少，是不错的看家犬；三个体型（迷你/标准/巨型）其实是三个不同品种。',
    enParent:
      'The schnauzer is named after the German word for muzzle, Schnauze, and began as an all-round ratting dog on fifteenth-century German farms. Its famous brows and beard had a job too: shielding the face from rat bites and thorns. Alert, clever and lightly shedding, it makes a fine watchdog — and miniature, standard and giant are technically three separate breeds.',
    sources: [
      {
        title: 'Standard Schnauzer — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/standard-schnauzer/',
      },
      {
        title: 'Dog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/dog',
      },
    ],
    zhUncertainties: [
      '体长以标准雪纳瑞为主，迷你与巨型体型不同。',
      '育成年代为历史近似值。',
    ],
    enUncertainties: [
      'Sizes reflect the standard schnauzer; miniature and giant differ.',
      'Breed age is a historical approximation.',
    ],
    accent: { strong: '#5f5a52', soft: '#e0dcd4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'frog',
    zhName: '青蛙',
    enName: 'Frog',
    zhLabel: '两栖动物',
    enLabel: 'Amphibian',
    zhVisible: '看它鼓鼓的眼睛和长长的后腿，脚趾间有蹼。',
    enVisible:
      'Look at its bulging eyes and long hind legs with webbed toes.',
    zhSentences: [
      '这是青蛙，水陆两栖的跳跃能手。',
      '它小时候是蝌蚪，用鳃呼吸，长大后用肺和皮肤呼吸。',
    ],
    enSentences: [
      'This is the frog, the jumping champion that lives in water and on land.',
      'It starts as a gill-breathing tadpole, then grows lungs and breathes through skin too.',
    ],
    zhPron: 'qīng wā',
    enPron: 'FROG',
    zhPeriod: '现代（蛙类约 2 亿年前出现至今）',
    enPeriod: 'Present day (frogs around 200 million years old)',
    zhRegions: ['全球（除极地与部分海岛）'],
    enRegions: ['Worldwide (except polar and some island regions)'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.13 },
    diet: 'carnivore',
    zhParent:
      '青蛙的皮肤又薄又湿，能直接“呼吸”，也因此对污染特别敏感——青蛙多的地方，环境往往更健康。它们的眼睛帮助吞咽：眨眼时眼球下压把食物推进喉咙。雄蛙靠鸣囊放声歌唱吸引配偶。蝌蚪变青蛙的“变身”是自然界最神奇的发育过程之一。',
    enParent:
      'A frog’s thin, moist skin breathes directly — which also makes frogs sensitive to pollution, so healthy frog choruses signal healthy environments. Their eyes help swallowing: each blink pushes food down the throat. Males sing with vocal sacs to attract mates, and a tadpole’s transformation into a frog is one of nature’s greatest makeovers.',
    sources: [
      {
        title: 'Frog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/frog',
      },
      {
        title: 'Frogs — 美国自然历史博物馆（AMNH）',
        url: 'https://www.amnh.org/explore/ology/biodiversity/frogs',
      },
    ],
    zhUncertainties: [
      '体长区间以常见蛙类为主；巨蛙可达 30 厘米。',
      '环境指示作用的说法为概括性科普。',
    ],
    enUncertainties: [
      'The size range covers common frogs; goliath frogs reach 30 cm.',
      'The indicator-species framing is a general science note.',
    ],
    accent: { strong: '#4f7a3f', soft: '#d8e8c9' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'horse',
    zhName: '马',
    enName: 'Horse',
    zhLabel: '马科家畜',
    enLabel: 'Equine',
    zhVisible: '看它飘动的鬃毛和大大的眼睛，眼睛长在两侧视野特别宽。',
    enVisible:
      'Look at its flowing mane and huge side-set eyes — an almost wrap-around view.',
    zhSentences: [
      '这是马，人类最老的四轮朋友。',
      '它站着也能睡觉，跑起来又快又稳。',
    ],
    enSentences: [
      'This is the horse, humankind’s oldest engine on four legs.',
      'It can sleep standing up, and it runs fast and steady.',
    ],
    zhPron: 'mǎ',
    enPron: 'HORS',
    zhPeriod: '现代（约 5500 年前驯化至今）',
    enPeriod: 'Present day (domesticated around 5,500 years ago)',
    zhRegions: ['全球（驯化自中亚野马）'],
    enRegions: ['Worldwide (domesticated from steppe wild horses)'],
    size: { kind: 'shoulder-height', minMeters: 1.4, maxMeters: 1.8 },
    diet: 'herbivore',
    zhParent:
      '马的眼睛是陆地哺乳动物中最大的，长在头两侧几乎看到全景；耳朵能 180° 转动听声辨位。马腿里有“锁定机关”（stay apparatus），所以能站着打盹。它们用耳朵和尾巴传递心情。人类约五千五百年前在中亚草原驯化马，从此改变了交通、农耕和战争。',
    enParent:
      'Horses have the largest eyes of any land mammal, placed for near-panoramic vision, while their ears rotate 180° to localise sounds. A stay-apparatus locks their legs, so they doze standing up. Ears and tails broadcast mood. Domesticated on the Central Asian steppe around 5,500 years ago, horses transformed travel, farming and war.',
    sources: [
      {
        title: 'Horse — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/horse',
      },
      {
        title: 'Horse domestication — 《科学》（Science）期刊报道',
        url: 'https://www.science.org/content/article/ancient-dna-shows-horse-herders-botai-were-not-first-domesticate-horses',
      },
    ],
    zhUncertainties: [
      '肩高为常见家马区间，矮种马与重型马差异大。',
      '驯化时间与地点仍有新的考古与基因研究更新。',
    ],
    enUncertainties: [
      'Shoulder heights cover common breeds; ponies and draft horses differ.',
      'Domestication timing and place are still being refined by ancient-DNA work.',
    ],
    accent: { strong: '#7a5b3e', soft: '#ecdcc8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'alligator',
    zhName: '鳄鱼（短吻鳄）',
    enName: 'Alligator',
    zhLabel: '鳄目爬行动物',
    enLabel: 'Crocodilian',
    zhVisible: '看它宽宽的嘴巴，闭嘴时牙齿都藏在嘴唇后面。',
    enVisible:
      'Look at its broad snout — when its mouth closes, the teeth hide behind the lips.',
    zhSentences: [
      '这是短吻鳄，像活化石一样的古老爬行动物。',
      '它闭嘴时看不到牙齿，这和尖嘴鳄鱼不一样。',
    ],
    enSentences: [
      'This is the alligator, a living-fossil reptile from a very ancient line.',
      'Its teeth hide when its mouth shuts — unlike its pointy-snouted cousins.',
    ],
    zhPron: 'è yú',
    enPron: 'AL-uh-gay-ter',
    zhPeriod: '现代（鳄类约 8300 万年前出现至今）',
    enPeriod: 'Present day (crocodilians around 83 million years old)',
    zhRegions: ['美国东南部', '中国长江流域'],
    enRegions: ['Southeastern United States', 'Yangtze basin, China'],
    size: { kind: 'body-length', minMeters: 2.5, maxMeters: 4.0 },
    diet: 'carnivore',
    zhParent:
      '短吻鳄和恐龙是远房亲戚，两亿年来身体几乎没变。它们咬合力惊人，却是“温柔的父母”：妈妈守巢孵蛋，把孵出的小鳄鱼含在嘴里送去水里。短吻鳄宽吻闭嘴不露牙，尖吻的鳄（crocodile）闭嘴露出下牙——这是最简单的区分方法。',
    enParent:
      'Alligators are distant cousins of dinosaurs and have kept nearly the same body for 200 million years. Despite a colossal bite, they are gentle parents: mothers guard nests and carry hatchlings to water inside their jaws. Broad snouts with hidden teeth separate alligators from pointy-snouted crocodiles, whose lower teeth show even when closed.',
    sources: [
      {
        title: 'Alligator — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/alligator',
      },
      {
        title: 'American alligator — 美国国家地理（National Geographic）',
        url: 'https://www.nationalgeographic.com/animals/reptiles/facts/american-alligator',
      },
    ],
    zhUncertainties: [
      '体长以美洲短吻鳄为代表，扬子鳄更小。',
      '咬合力数值因研究方法而异。',
    ],
    enUncertainties: [
      'Sizes feature the American alligator; the Chinese alligator is smaller.',
      'Bite-force figures vary by study method.',
    ],
    accent: { strong: '#3f5245', soft: '#d3e0d4' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'emu',
    zhName: '鸸鹋',
    enName: 'Emu',
    zhLabel: '平胸鸟类',
    enLabel: 'Ratite bird',
    zhVisible: '看它细长的脖子和毛茸茸的“头发”，翅膀小得像装饰品。',
    enVisible:
      'Look at its long thin neck and shaggy “hair” — its wings are barely more than decoration.',
    zhSentences: [
      '这是鸸鹋，澳大利亚不会飞的大鸟。',
      '它虽然不会飞，跑起来却比人快得多。',
    ],
    enSentences: [
      'This is the emu, Australia’s giant flightless bird.',
      'It cannot fly, but it outruns any human.',
    ],
    zhPron: 'ér miáo',
    enPron: 'EE-myoo',
    zhPeriod: '现代（鸸鹋属约 100 万年前至今）',
    enPeriod: 'Present day (genus around 1 million years old)',
    zhRegions: ['澳大利亚大陆'],
    enRegions: ['Mainland Australia'],
    size: { kind: 'body-length', minMeters: 1.5, maxMeters: 1.9 },
    diet: 'omnivore',
    zhParent:
      '鸸鹋是世界第二大的鸟（仅次于鸵鸟），翅膀退化到只有巴掌大，双腿却强健有力，冲刺可达 50 公里/小时。它的羽毛像头发一样松散，不防水却隔热。鸸鹋爸爸是“模范父亲”：妈妈产蛋后离开，爸爸孵蛋两个月不吃不喝，再独自带大雏鸟。',
    enParent:
      'The emu is the world’s second-largest bird after the ostrich. Its wings have shrunk to hand-size, while powerful legs sprint at 50 km/h. The loose, hair-like feathers shed no water but insulate well. Emu dads are model fathers: after the female lays and leaves, he incubates the clutch for two months without eating, then raises the chicks alone.',
    sources: [
      {
        title: 'Emu — 澳大利亚博物馆（Australian Museum）',
        url: 'https://australian.museum/learn/animals/birds/emu/',
      },
      {
        title: 'Emu — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/emu',
      },
    ],
    zhUncertainties: [
      '体长区间以身高近似（1.5–1.9 米）。',
      '奔跑速度为野外记录近似值。',
    ],
    enUncertainties: [
      'Sizes reflect standing height (1.5–1.9 m).',
      'Running speeds are approximate field records.',
    ],
    accent: { strong: '#7c6a4c', soft: '#e9ddc4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'deer',
    zhName: '鹿',
    enName: 'Deer',
    zhLabel: '鹿科动物',
    enLabel: 'Deer',
    zhVisible: '看它头顶的角，像树枝一样，每年都会脱落再长新的。',
    enVisible:
      'Look at the antlers on its head — branched like tree limbs and regrown every year.',
    zhSentences: [
      '这是鹿，头顶长“树枝”的优雅动物。',
      '鹿角每年都会掉一次，再重新长出来。',
    ],
    enSentences: [
      'This is the deer, the graceful animal that wears branches on its head.',
      'Its antlers fall off every year and grow all over again.',
    ],
    zhPron: 'lù',
    enPron: 'DEER',
    zhPeriod: '现代（鹿科约 2000 万年前出现至今）',
    enPeriod: 'Present day (deer family around 20 million years old)',
    zhRegions: ['亚洲', '欧洲', '美洲'],
    enRegions: ['Asia', 'Europe', 'the Americas'],
    size: { kind: 'body-length', minMeters: 1.4, maxMeters: 2.0 },
    diet: 'herbivore',
    zhParent:
      '鹿角是唯一能整支年年再生的哺乳动物器官，长角期间每天能长两厘米，是生物学研究再生的宝藏。只有鹿（除驯鹿雌性也长角）长角，角用来比武争配偶。鹿的嗅觉和听觉极灵敏，遇到危险会竖起尾巴白斑警示同伴。',
    enParent:
      'Antlers are the only mammalian organs that regenerate whole each year, growing up to two centimetres a day — a treasure trove for regeneration biology. Grown by males (except reindeer), they serve in rutting contests. Deer rely on keen smell and hearing, and flash the white underside of the tail to warn the herd of danger.',
    sources: [
      {
        title: 'Deer — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/deer',
      },
      {
        title: 'Antler regeneration — 纽约州立大学（SUNY）Cobleskill 校区',
        url: 'https://www.cobleskill.edu/about/news/antlers-regeneration',
      },
    ],
    zhUncertainties: [
      '本页以中型鹿（如白尾鹿/梅花鹿）为代表，小型与大型鹿差异大。',
      '角再生速度因种类与年龄而异。',
    ],
    enUncertainties: [
      'This page features medium-sized deer such as white-tailed and sika deer.',
      'Antler growth rates vary by species and age.',
    ],
    accent: { strong: '#8c6a45', soft: '#eedfc8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
]
