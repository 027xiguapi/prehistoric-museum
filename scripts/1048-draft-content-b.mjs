// Per-animal draft content for the 1048 batch (part 2: 13 animals, from
// stag-beetle through ox). Consumed by scripts/generate-1048-draft-packages.mjs.
// Facts follow family-friendly popular-science ranges; every uncertainty is
// echoed in editorial notes.
export const CONTENT_B = [
  {
    slug: 'stag-beetle',
    zhName: '锹甲',
    enName: 'Stag Beetle',
    zhLabel: '甲虫（锹甲科）',
    enLabel: 'Beetle (stag beetle family)',
    zhVisible: '看它头上那对像鹿角一样的大颚，那是雄锹甲的“宝剑”。',
    enVisible:
      'Look at the pair of antler-like jaws on its head — the male stag beetle’s “swords”.',
    zhSentences: [
      '这是锹甲，一种长着大颚的甲虫。',
      '雄锹甲的大颚像鹿角，主要用来和对手比摔跤。',
    ],
    enSentences: [
      'This is the stag beetle, a beetle with giant jaws.',
      'The male’s jaws look like deer antlers and are used mainly to wrestle rivals.',
    ],
    zhPron: 'qiāo jiǎ',
    enPron: 'STAG BEE-tl',
    zhPeriod: '现代（约 1 亿年前出现至今）',
    enPeriod: 'Present day (around 100 million years ago to today)',
    zhRegions: ['亚洲东部', '欧洲'],
    enRegions: ['East Asia', 'Europe'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.08 },
    diet: 'herbivore',
    zhParent:
      '锹甲的大颚并不是用来咬人的，而是雄虫之间争夺树汁和地盘的“摔跤武器”。它们小时候以腐朽的木头为食，要在树洞里住上好几年才变成甲虫。因为依赖老树，锹甲成了森林健康的“指示物种”——有锹甲的地方，说明森林里有足够多的老树和枯木。',
    enParent:
      'A stag beetle’s huge jaws are not for biting people — they are wrestling weapons males use to contest tree sap and territory. Their larvae eat decaying wood and live inside dead trunks for several years before emerging as beetles. Because they depend on old trees, stag beetles are an indicator of forest health: where they thrive, the forest still keeps enough old and dead wood.',
    sources: [
      {
        title: 'Stag beetle — 英国野生动物信托（The Wildlife Trusts）',
        url: 'https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/beetles/stag-beetle',
      },
      {
        title: 'Lucanidae — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/stag-beetle',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖常见雄性个体；雌性没有大颚且更小。',
      '幼虫在朽木中生活的年数随气候与树种变化，为近似描述。',
    ],
    enUncertainties: [
      'The size range covers typical males; females lack the big jaws and are smaller.',
      'Larval years in dead wood vary with climate and tree species; given as an approximation.',
    ],
    accent: { strong: '#4a3b2a', soft: '#d9c9a8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'mouse',
    zhName: '小家鼠',
    enName: 'House Mouse',
    zhLabel: '啮齿动物',
    enLabel: 'Rodent',
    zhVisible: '看它圆圆的大耳朵和细细的尾巴，它的门牙会一直生长。',
    enVisible:
      'Look at its round ears and thin tail — its front teeth never stop growing.',
    zhSentences: [
      '这是小家鼠，世界上陪伴人类最久的小动物之一。',
      '它的门牙一辈子都在长，所以要不停地啃东西来磨牙。',
    ],
    enSentences: [
      'This is the house mouse, one of the small animals that has lived alongside humans the longest.',
      'Its front teeth grow all its life, so it gnaws constantly to keep them worn down.',
    ],
    zhPron: 'xiǎo jiā shǔ',
    enPron: 'hows MOUS',
    zhPeriod: '现代（约 1.5 万年前伴随人类定居至今）',
    enPeriod: 'Present day (living alongside humans for about 15,000 years)',
    zhRegions: ['全球（除南极洲）'],
    enRegions: ['Worldwide (except Antarctica)'],
    size: { kind: 'body-length', minMeters: 0.07, maxMeters: 0.1 },
    diet: 'omnivore',
    zhParent:
      '小家鼠原产于西亚和南亚，随人类的粮仓和船只走遍了世界。它是夜行动物，靠胡须“摸”路，靠灵敏的嗅觉和听觉找食物、躲天敌。小鼠也是医学研究中最重要的实验动物之一，帮助人类理解基因和疾病。',
    enParent:
      'House mice originated in western and southern Asia and travelled the world aboard human grain stores and ships. They are nocturnal, feel their way with whiskers, and rely on sharp smell and hearing to find food and avoid predators. The house mouse is also the most important laboratory animal, helping scientists understand genes and disease.',
    sources: [
      {
        title: 'House mouse — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/house-mouse',
      },
      {
        title: 'Mus musculus — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Mus_musculus/',
      },
    ],
    zhUncertainties: [
      '体长不含尾巴；不同地区种群体型略有差异。',
      '与人类共居的年份数为考古学近似估计。',
    ],
    enUncertainties: [
      'Body length excludes the tail; wild populations vary slightly by region.',
      'The timing of commensal life with humans is an archaeological approximation.',
    ],
    accent: { strong: '#6d6a75', soft: '#e3dfe8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'centipede',
    zhName: '蜈蚣',
    enName: 'Centipede',
    zhLabel: '多足类节肢动物',
    enLabel: 'Many-legged arthropod',
    zhVisible: '数数它身体两侧的腿——每一节都有一对，跑起来像波浪。',
    enVisible:
      'Count the legs along its sides — one pair per body segment, rippling like waves when it runs.',
    zhSentences: [
      '这是蜈蚣，一种有很多很多条腿的小猎人。',
      '它每一节身体都长着一对腿，走路时腿像波浪一样依次摆动。',
    ],
    enSentences: [
      'This is the centipede, a little hunter with very many legs.',
      'Each body segment carries one pair of legs, and they ripple in waves as it walks.',
    ],
    zhPron: 'wú gōng',
    enPron: 'SEN-ti-peed',
    zhPeriod: '现代（约 4 亿年前出现至今）',
    enPeriod: 'Present day (around 400 million years ago to today)',
    zhRegions: ['全球温暖地区'],
    enRegions: ['Warm regions worldwide'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.3 },
    diet: 'carnivore',
    zhParent:
      '蜈蚣是夜行的小型捕食者，用有毒的“毒颚”制服昆虫和蜘蛛。它名字里虽有“百足”，但大多数蜈蚣只有几十条腿；每一节身体恰好一对腿，这是辨认蜈蚣和马陆的关键——马陆每节有两对。蜈蚣喜欢潮湿的落叶层和石块下，是森林里重要的“清道夫”。',
    enParent:
      'Centipedes are nocturnal mini-hunters that subdue insects and spiders with venomous forcipules. Despite the name “hundred feet”, most centipedes have only a few dozen legs — one pair per segment, which is the key difference from millipedes that carry two pairs. Centipedes favour damp leaf litter and stones, and are important recyclers in the forest.',
    sources: [
      {
        title: 'Centipede — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/centipede',
      },
      {
        title: 'Centipedes — 澳大利亚博物馆（Australian Museum）',
        url: 'https://australian.museum/learn/animals/centipedes/',
      },
    ],
    zhUncertainties: [
      '体长区间覆盖常见科属；热带巨型蜈蚣可更长。',
      '“每一节一对腿”适用于绝大多数蜈蚣，少数类群有例外。',
    ],
    enUncertainties: [
      'The size range covers common families; tropical giants can be longer.',
      'One leg pair per segment holds for almost all centipedes, with a few exceptions.',
    ],
    accent: { strong: '#7a3b2e', soft: '#e6c9b8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'crab',
    zhName: '螃蟹',
    enName: 'Crab',
    zhLabel: '甲壳动物（短尾下目）',
    enLabel: 'Crustacean (brachyuran crab)',
    zhVisible: '看它横着走路的样子——八条腿加上两只大钳子。',
    enVisible:
      'Watch it walk sideways — eight legs plus two big pincers.',
    zhSentences: [
      '这是螃蟹，穿着硬硬“盔甲”的甲壳动物。',
      '它走路横着走，两只大钳子用来找吃的和保卫自己。',
    ],
    enSentences: [
      'This is a crab, a crustacean in a suit of armour.',
      'It walks sideways, and its two big pincers are used for feeding and defence.',
    ],
    zhPron: 'páng xiè',
    enPron: 'KRAB',
    zhPeriod: '现代（约 2 亿年前出现至今）',
    enPeriod: 'Present day (around 200 million years ago to today)',
    zhRegions: ['全球海洋与海岸'],
    enRegions: ['Oceans and coasts worldwide'],
    size: { kind: 'body-length', minMeters: 0.05, maxMeters: 0.25 },
    diet: 'omnivore',
    zhParent:
      '螃蟹的外骨骼像盔甲一样保护身体，但因为盔甲不会长大，它必须定期蜕壳换新装。大多数螃蟹横着走，因为它们的腿关节适合左右摆动。螃蟹几乎什么都吃——藻类、贝壳、碎屑，是海岸边的“清道夫”。最大的螃蟹是日本蜘蛛蟹，螯足展开可达 3 米多。',
    enParent:
      'A crab’s exoskeleton works like armour, and because the armour cannot grow, crabs must moult regularly for a bigger shell. Most crabs walk sideways because their leg joints swing best side-to-side. They eat almost anything — algae, shellfish, debris — making them the clean-up crew of the shore. The largest is the Japanese spider crab, whose claw span can top three metres.',
    sources: [
      {
        title: 'Crab — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/crab',
      },
      {
        title: 'Japanese spider crab — 英国自然历史博物馆（NHM）',
        url: 'https://www.nhm.ac.uk/discover/news/2017/may/facts-japanese-spider-crab.html',
      },
    ],
    zhUncertainties: [
      '体长为常见蟹类的近似区间，不含螯足。',
      '“横着走”适用于多数蟹类，泳蟹等少数类群可以前后移动。',
    ],
    enUncertainties: [
      'The size range covers common familiar crabs and excludes the claws.',
      'Most crabs walk sideways, though a few groups such as swimming crabs can move forward.',
    ],
    accent: { strong: '#b0432f', soft: '#f0cfc2' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'coyote',
    zhName: '郊狼',
    enName: 'Coyote',
    zhLabel: '犬科动物',
    enLabel: 'Wild canid',
    zhVisible: '看它竖起的耳朵和蓬松的尾巴，长得像一只精瘦的狼。',
    enVisible:
      'Look at its upright ears and bushy tail — like a lean, small wolf.',
    zhSentences: [
      '这是郊狼，北美洲荒野里最机灵的猎手之一。',
      '它比狼小一些，却更能适应城市和乡村的变化。',
    ],
    enSentences: [
      'This is the coyote, one of the cleverest hunters of North American wilds.',
      'It is smaller than a wolf, yet adapts to cities and countryside even better.',
    ],
    zhPron: 'jiāo láng',
    enPron: 'ky-OH-tee',
    zhPeriod: '现代（犬科演化历史数百万年至今）',
    enPeriod: 'Present day (canid lineage several million years old)',
    zhRegions: ['北美洲与中美洲'],
    enRegions: ['North and Central America'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.35 },
    diet: 'omnivore',
    zhParent:
      '郊狼是北美洲的原住民犬科动物，从草原到城市公园都能安家。它们主食小型猎物和果实，也吃腐肉，是生态里的多面手。郊狼以叫声闻名，晚上此起彼伏的“歌声”其实是同伴之间的联络。在狼和美洲狮减少的地方，郊狼反而扩大了分布范围。',
    enParent:
      'Coyotes are native North American canids at home everywhere from grassland to city parks. They hunt small prey, eat fruit and carrion, and are ecological generalists. Famous for their howls, the rising and falling night “songs” are long-distance calls between companions. Where wolves and cougars declined, coyotes quietly expanded their range.',
    sources: [
      {
        title: 'Coyote — 美国国家地理（National Geographic）',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/coyote-facts',
      },
      {
        title: 'Coyote — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/coyote',
      },
    ],
    zhUncertainties: [
      '体长区间为成年郊狼近似值，不含尾巴。',
      '食性描述为概括性介绍，不同地区差异较大。',
    ],
    enUncertainties: [
      'Length is a typical adult range and excludes the tail.',
      'Diet notes are a broad summary; regional variation is large.',
    ],
    accent: { strong: '#8a7250', soft: '#eadfc9' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'arabian-leopard',
    zhName: '阿拉伯豹',
    enName: 'Arabian Leopard',
    zhLabel: '大型猫科动物',
    enLabel: 'Big cat',
    zhVisible: '看它满身玫瑰花结状的斑点，每个斑点图案都独一无二。',
    enVisible:
      'Look at its rosette spots — every leopard’s pattern is one of a kind.',
    zhSentences: [
      '这是阿拉伯豹，世界上最稀有的豹之一。',
      '它身上的玫瑰花结斑点能藏进岩石的影子里。',
    ],
    enSentences: [
      'This is the Arabian leopard, one of the rarest leopards on Earth.',
      'Its rosette spots let it melt into the shadows of the rocks.',
    ],
    zhPron: 'ā lā bó bào',
    enPron: 'uh-RAY-bee-in LEH-perd',
    zhPeriod: '现代（约 50 万年前分化至今）',
    enPeriod: 'Present day (lineage around 500,000 years old)',
    zhRegions: ['阿拉伯半岛'],
    enRegions: ['Arabian Peninsula'],
    size: { kind: 'body-length', minMeters: 1.1, maxMeters: 1.6 },
    diet: 'carnivore',
    zhParent:
      '阿拉伯豹是豹的小型亚种，住在阿拉伯半岛的山地和荒漠边缘，主要在夜间捕猎山羊、瞪羚和蹄兔。它是半岛上最大的猫科动物，却极度濒危——据估计野外仅存约两百只。豹还是攀爬高手，能把猎物拖上树安全存放。',
    enParent:
      'The Arabian leopard is a small, desert-adapted leopard subspecies of the Arabian Peninsula’s mountains, hunting gazelles, wild goats and hyraxes mostly at night. It is the peninsula’s biggest cat yet critically endangered — perhaps only around two hundred remain in the wild. Leopards are also master climbers and can haul prey up trees to keep it safe.',
    sources: [
      {
        title: 'Arabian leopard — 世界自然保护联盟（IUCN）',
        url: 'https://www.iucnredlist.org/species/26461/212810598',
      },
      {
        title: 'Leopard — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/leopard',
      },
    ],
    zhUncertainties: [
      '野生数量为近年调查的粗略估计，变化较大。',
      '亚种划分在学界仍有讨论，可能提升为独立种。',
    ],
    enUncertainties: [
      'Wild population figures are rough recent estimates and change over time.',
      'Subspecies status is still debated and may be raised to full species.',
    ],
    accent: { strong: '#a4854f', soft: '#efdfc0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'tortoise',
    zhName: '陆龟',
    enName: 'Giant Tortoise',
    zhLabel: '陆栖龟类',
    enLabel: 'Tortoise',
    zhVisible: '看它高高隆起的背甲，像一座会走路的小山丘。',
    enVisible:
      'Look at its high, domed shell — like a little walking hill.',
    zhSentences: [
      '这是陆龟，背着“房子”慢慢走路的爬行动物。',
      '它的壳和骨头长在一起，一辈子都背着走。',
    ],
    enSentences: [
      'This is a tortoise, a reptile that slowly walks with a house on its back.',
      'Its shell is fused to its skeleton, and it carries that house for life.',
    ],
    zhPron: 'lù guī',
    enPron: 'TOR-tis',
    zhPeriod: '现代（龟类约 2 亿年前出现至今）',
    enPeriod: 'Present day (turtle lineage around 200 million years old)',
    zhRegions: ['加拉帕戈斯群岛', '印度洋岛屿', '非洲大陆'],
    enRegions: ['Galápagos Islands', 'Indian Ocean islands', 'mainland Africa'],
    size: { kind: 'body-length', minMeters: 1.2, maxMeters: 1.8 },
    diet: 'herbivore',
    zhParent:
      '巨型陆龟只生活在海岛和非洲的干旱地带，背甲高高的圆顶有助于在凉爽季节保存热量。它们能活过一百岁，一顿饭消化要好几天。龟壳并非“盔甲外套”，而是与肋骨和脊椎长在一起的骨骼。加拉帕戈斯的陆龟帮助达尔文思考出了进化论。',
    enParent:
      'Giant tortoises survive only on islands and in arid Africa; their tall domed shells help store warmth in the cool season. They can live past a hundred years and take days to digest a meal. The shell is not detachable armour — it is bone fused to ribs and spine. The Galápagos tortoises famously helped Darwin think his way toward evolution.',
    sources: [
      {
        title: 'Galápagos tortoise — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Galapagos-tortoise',
      },
      {
        title: 'Tortoise — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/tortoise',
      },
    ],
    zhUncertainties: [
      '本页以巨型陆龟为代表；常见宠物陆龟要小得多。',
      '寿命与消化速度为近似描述，随物种与环境变化。',
    ],
    enUncertainties: [
      'This page features giant tortoises; common pet tortoises are far smaller.',
      'Lifespan and digestion times are approximations varying by species and climate.',
    ],
    accent: { strong: '#5d6b46', soft: '#dee5c8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'salmon',
    zhName: '鲑鱼',
    enName: 'Salmon',
    zhLabel: '洄游性鱼类',
    enLabel: 'Migratory fish',
    zhVisible: '看它流线型的银色身体，天生适合长距离游泳。',
    enVisible:
      'Look at its streamlined silver body — built for long journeys.',
    zhSentences: [
      '这是鲑鱼，一位了不起的旅行家。',
      '它在河里出生，游到大海长大，再游回出生的河流产卵。',
    ],
    enSentences: [
      'This is the salmon, a remarkable traveller.',
      'It is born in rivers, grows up at sea, then swims back to its home river to spawn.',
    ],
    zhPron: 'guī yú',
    enPron: 'SAM-un',
    zhPeriod: '现代（鲑科鱼类约 1 亿年前出现至今）',
    enPeriod: 'Present day (salmon family around 100 million years old)',
    zhRegions: ['北大西洋', '北太平洋沿岸河流'],
    enRegions: ['North Atlantic', 'North Pacific rim rivers'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 1.5 },
    diet: 'carnivore',
    zhParent:
      '鲑鱼的一生是自然界最壮观的旅行之一：幼鱼顺流而下入海，几年后凭借嗅觉记住故乡河流的气味，逆流而上、甚至跃上瀑布回到出生地产卵。洄游的鲑鱼还把海洋的营养带回森林，喂养了熊、鹰和两岸的树木。',
    enParent:
      'A salmon’s life is one of nature’s great journeys: juveniles ride the current to the sea, and years later, guided by the remembered smell of their home river, they swim upstream — even leaping waterfalls — to spawn where they hatched. Migrating salmon also carry ocean nutrients back to the forest, feeding bears, eagles and the riverside trees.',
    sources: [
      {
        title: 'Atlantic salmon — 美国国家海洋与大气局（NOAA）',
        url: 'https://www.fisheries.noaa.gov/species/atlantic-salmon',
      },
      {
        title: 'Salmon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/salmon',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖大西洋鲑与大鳞大马哈鱼的常见个体。',
      '“凭嗅觉回乡”是主流解释，鲑鱼可能还利用磁场等线索。',
    ],
    enUncertainties: [
      'The size range covers typical Atlantic and Chinook salmon.',
      'Smell-guided homing is the leading explanation; magnetic cues may also help.',
    ],
    accent: { strong: '#7a6a8e', soft: '#e2dcec' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'shark',
    zhName: '鲨鱼',
    enName: 'Shark',
    zhLabel: '软骨鱼类',
    enLabel: 'Cartilaginous fish',
    zhVisible: '看它流线型的身体和竖起的背鳍，游泳时悄无声息。',
    enVisible:
      'Look at its torpedo body and upright dorsal fin — it swims in perfect silence.',
    zhSentences: [
      '这是鲨鱼，海洋里最古老的猎手之一。',
      '它的骨骼是软骨，身上还覆盖着小小的“皮肤牙齿”。',
    ],
    enSentences: [
      'This is the shark, one of the ocean’s oldest hunters.',
      'Its skeleton is made of cartilage, and its skin is covered in tiny “skin teeth”.',
    ],
    zhPron: 'shā yú',
    enPron: 'SHARK',
    zhPeriod: '现代（约 4.5 亿年前出现至今）',
    enPeriod: 'Present day (around 450 million years ago to today)',
    zhRegions: ['全球海洋'],
    enRegions: ['Oceans worldwide'],
    size: { kind: 'body-length', minMeters: 2.0, maxMeters: 4.0 },
    diet: 'carnivore',
    zhParent:
      '鲨鱼比恐龙还要古老，已经在海洋里游了四亿多年。它们的骨骼由轻巧的软骨构成，皮肤上覆盖着盾鳞——和牙齿同源的细小结构，摸起来像砂纸。鲨鱼还有叫“洛伦兹壶腹”的感应器官，能感知猎物发出的微弱电场。',
    enParent:
      'Sharks are older than dinosaurs and have patrolled the oceans for over 400 million years. Their skeletons are built from light cartilage, and their skin is covered with dermal denticles — tooth-like scales that feel like sandpaper. Special sense organs called ampullae of Lorenzini let sharks detect the faint electric fields of hidden prey.',
    sources: [
      {
        title: 'Shark — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/shark',
      },
      {
        title: 'Shark — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/shark',
      },
    ],
    zhUncertainties: [
      '体长区间以大型掠食性鲨（如大白鲨）为代表；鲨类整体差异极大。',
      '感官与皮肤描述为概括性科普。',
    ],
    enUncertainties: [
      'The size range features large predatory sharks such as the great white; sharks as a group vary enormously.',
      'Sense-organ and skin notes are a general introduction.',
    ],
    accent: { strong: '#3f5a73', soft: '#cfdde9' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'duck',
    zhName: '鸭子',
    enName: 'Duck',
    zhLabel: '水鸟（雁形目）',
    enLabel: 'Waterbird (waterfowl)',
    zhVisible: '看它扁平的嘴巴和防水羽毛，游泳时水珠会滚下来。',
    enVisible:
      'Look at its flat bill and waterproof feathers — water rolls right off.',
    zhSentences: [
      '这是鸭子，最喜欢在水里玩的水鸟。',
      '它用扁扁的嘴过滤水里的食物，尾巴一翘一翘地游泳。',
    ],
    enSentences: [
      'This is the duck, a waterbird that loves to play on ponds.',
      'It strains food from the water with its flat bill, bobbing its tail as it paddles.',
    ],
    zhPron: 'yā zi',
    enPron: 'DUK',
    zhPeriod: '现代（绿头鸭数百万年前分化至今）',
    enPeriod: 'Present day (mallard lineage several million years old)',
    zhRegions: ['全球（驯化自绿头鸭）'],
    enRegions: ['Worldwide (domesticated from the mallard)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.65 },
    diet: 'omnivore',
    zhParent:
      '家鸭主要驯化自绿头鸭。鸭子尾部的腺体会分泌油脂，它用嘴把油抹到羽毛上，所以游泳也不湿身。扁嘴边缘有梳齿状的栉板，能在水中滤食小虫和种子。鸭子走路摇摆，是因为腿长在身体很靠后的位置，游泳时却像装了船桨。',
    enParent:
      'Domestic ducks descend mostly from the mallard. A gland near the tail makes oil that the duck works through its feathers with its bill, keeping it dry while swimming. Comb-like lamellae along the flat bill strain insects and seeds from the water. Ducks waddle because their legs sit far back on the body — the same design that makes them powerful paddlers.',
    sources: [
      {
        title: 'Duck — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/duck',
      },
      {
        title: 'Mallard — 康奈尔鸟类学实验室（Cornell Lab）',
        url: 'https://www.allaboutbirds.org/guide/Mallard/',
      },
    ],
    zhUncertainties: [
      '体长为家鸭与绿头鸭常见区间。',
      '驯化史因地区和品种而异，为概括性介绍。',
    ],
    enUncertainties: [
      'The size range covers typical domestic ducks and mallards.',
      'Domestication history varies by region and breed; given in summary.',
    ],
    accent: { strong: '#4f6b45', soft: '#dce8cf' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'pigeon',
    zhName: '鸽子',
    enName: 'Pigeon',
    zhLabel: '城市常见鸟类',
    enLabel: 'Urban bird',
    zhVisible: '看它脖子上的彩虹光泽，灰色羽毛会闪出绿色和紫色。',
    enVisible:
      'Look at the rainbow sheen on its neck — grey feathers flashing green and purple.',
    zhSentences: [
      '这是鸽子，最熟悉人类的城市鸟。',
      '它脖子上的羽毛在阳光下会闪出彩虹一样的光。',
    ],
    enSentences: [
      'This is the pigeon, the city bird that knows humans best.',
      'Its neck feathers flash rainbow colours in the sunlight.',
    ],
    zhPron: 'gē zi',
    enPron: 'PIJ-un',
    zhPeriod: '现代（约 5000 年前驯化至今）',
    enPeriod: 'Present day (domesticated around 5,000 years ago)',
    zhRegions: ['全球城市'],
    enRegions: ['Cities worldwide'],
    size: { kind: 'body-length', minMeters: 0.29, maxMeters: 0.37 },
    diet: 'omnivore',
    zhParent:
      '城市里的鸽子是驯化家鸽的后代，祖先原鸽生活在海边的悬崖上——所以它们爱在楼房立面上筑巢。鸽子能认路回家，靠的是记忆地标、感知磁场和嗅闻气味。幼鸽喝的不是普通食物，而是亲鸽嗉囊分泌的“鸽乳”。',
    enParent:
      'City pigeons are descendants of domestic birds whose wild ancestors, rock doves, nested on sea cliffs — which is why pigeons love building ledges. They find their way home using memorised landmarks, a magnetic sense and smell. Pigeon chicks are fed not seeds but “crop milk”, a nutritious fluid from their parents’ crops.',
    sources: [
      {
        title: 'Rock pigeon — 康奈尔鸟类学实验室（Cornell Lab）',
        url: 'https://www.allaboutbirds.org/guide/Rock_Pigeon/',
      },
      {
        title: 'Pigeon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pigeon',
      },
    ],
    zhUncertainties: [
      '体长为原鸽/家鸽常见区间。',
      '导航机制是多种线索的综合，学界仍在研究中。',
    ],
    enUncertainties: [
      'The size range covers typical rock and domestic pigeons.',
      'Navigation combines several cues and remains an active research topic.',
    ],
    accent: { strong: '#5a6478', soft: '#dbe0ec' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'sparrow',
    zhName: '麻雀',
    enName: 'Sparrow',
    zhLabel: '雀形目小鸟',
    enLabel: 'Small songbird',
    zhVisible: '看它圆圆的小脑袋和棕色的背，脸颊上有一块黑斑。',
    enVisible:
      'Look at its round head and brown back, with a dark patch on its cheek.',
    zhSentences: [
      '这是麻雀，我们身边最常见的小鸟。',
      '它胖乎乎的，喜欢成群在灌木和屋檐间蹦来蹦去。',
    ],
    enSentences: [
      'This is the sparrow, the little bird we see every day.',
      'Round and plump, it hops about in flocks among bushes and eaves.',
    ],
    zhPron: 'má què',
    enPron: 'SPAR-oh',
    zhPeriod: '现代（约数百万年前分化至今）',
    enPeriod: 'Present day (lineage several million years old)',
    zhRegions: ['欧亚大陆', '非洲', '被引入美洲与澳洲'],
    enRegions: ['Eurasia', 'Africa', 'introduced to the Americas and Australia'],
    size: { kind: 'body-length', minMeters: 0.14, maxMeters: 0.18 },
    diet: 'omnivore',
    zhParent:
      '家麻雀和树麻雀几乎完全跟随人类生活：在城市吃面包屑和残渣，在农田吃杂草种子，繁殖期捕虫喂雏。它们是留鸟，冬天也不迁徙，傍晚常成群聚在树上叽叽喳喳“开会”。麻雀数量在一些大城市正在下降，科学家仍在寻找原因。',
    enParent:
      'House and tree sparrows live almost entirely alongside people: in cities they take crumbs and scraps, on farms they eat weed seeds, and in summer they catch insects for their chicks. They are resident birds that do not migrate, gathering in noisy communal roosts at dusk. Sparrow numbers are declining in some big cities, and scientists are still working out why.',
    sources: [
      {
        title: 'House sparrow — 康奈尔鸟类学实验室（Cornell Lab）',
        url: 'https://www.allaboutbirds.org/guide/House_Sparrow/',
      },
      {
        title: 'House sparrow — 英国皇家鸟类保护协会（RSPB）',
        url: 'https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/house-sparrow/',
      },
    ],
    zhUncertainties: [
      '本页介绍家麻雀/树麻雀这类伴人麻雀，不含其他“雀”类。',
      '城市种群下降的原因尚无定论。',
    ],
    enUncertainties: [
      'This page covers human-associated house and tree sparrows, not other “sparrow” birds.',
      'Causes of urban declines remain unsettled.',
    ],
    accent: { strong: '#7a6248', soft: '#e8dccb' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'ox',
    zhName: '黄牛',
    enName: 'Ox',
    zhLabel: '牛科家畜',
    enLabel: 'Domestic bovine',
    zhVisible: '看它弯弯的大角和壮实的身体，脖子上还有一圈结实的肌肉。',
    enVisible:
      'Look at its curved horns and sturdy body, with a thick ridge of muscle along the neck.',
    zhSentences: [
      '这是黄牛，人类耕种田地最老的好帮手。',
      '它头上有一对弯弯的角，力气大到能拉动犁。',
    ],
    enSentences: [
      'This is the ox, humanity’s oldest partner in the field.',
      'It wears a pair of curved horns and is strong enough to pull a plough.',
    ],
    zhPron: 'huáng niú',
    enPron: 'OKS',
    zhPeriod: '现代（约 8000–10000 年前驯化至今）',
    enPeriod: 'Present day (domesticated 8,000–10,000 years ago)',
    zhRegions: ['全球（驯化自野生原牛）'],
    enRegions: ['Worldwide (domesticated from the wild aurochs)'],
    size: { kind: 'shoulder-height', minMeters: 1.2, maxMeters: 1.5 },
    diet: 'herbivore',
    zhParent:
      '黄牛的祖先是已经灭绝的巨大原牛，最后一头原牛在 1627 年死去。牛是反刍动物，四个胃室里的微生物帮它把草变成营养。专门阉割、训练用来拉犁拉车的公牛才叫“役牛（ox）”。牛能认出自己的名字，研究还发现它们记得彼此、会为同伴的困境紧张。',
    enParent:
      'Cattle descend from the extinct, mighty aurochs; the last aurochs died in 1627. Cattle are ruminants whose four stomach chambers host microbes that turn grass into nourishment. An “ox” strictly means a castrated, trained working male used for ploughing and haulage. Cattle can learn their own names, and studies show they remember one another and feel tense when herdmates are stressed.',
    sources: [
      {
        title: 'Cattle — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cattle',
      },
      {
        title: 'Aurochs — 英国自然历史博物馆（NHM）',
        url: 'https://www.nhm.ac.uk/discover/news/2015/november/how-the-aurochs-was-lost.html',
      },
    ],
    zhUncertainties: [
      '肩高为常见役用/肉用黄牛区间，品种差异大。',
      '行为研究样本有限，作概括性介绍。',
    ],
    enUncertainties: [
      'Shoulder height covers common breeds; variation is wide.',
      'Behaviour findings come from limited studies and are summarised.',
    ],
    accent: { strong: '#6e4a33', soft: '#e7d2bd' },
    habitat: 'land',
    atmosphere: 'plains',
  },
]
