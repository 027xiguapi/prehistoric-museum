// Per-animal draft content for the 1048 batch. Consumed by
// scripts/generate-1048-draft-packages.mjs. Facts follow family-friendly
// popular-scence ranges; every uncertainty is echoed in editorial notes.
export const CONTENT_A = [
  {
    slug: 'saber-toothed-tiger',
    zhName: '剑齿虎',
    enName: 'Saber-Toothed Cat',
    zhLabel: '史前大型猫科动物',
    enLabel: 'Prehistoric big cat',
    zhVisible: '看看它嘴边露出的两根长牙，像两把弯刀一样锋利。',
    enVisible:
      'Look at the two long teeth curving out of its mouth — sharp like a pair of sabers.',
    zhSentences: [
      '这是剑齿虎，一种生活在冰河时代的史前大猫。',
      '它嘴里有两根像弯刀一样的大长牙，是它最有名的标志。',
    ],
    enSentences: [
      'This is the saber-toothed cat, a prehistoric big cat from the Ice Age.',
      'Its two long, curved teeth — its sabers — are its most famous feature.',
    ],
    zhPron: 'jiàn chǐ hǔ',
    enPron: 'SAY-ber toothd cat',
    zhPeriod: '更新世（约 250 万年前 — 约 1 万年前）',
    enPeriod: 'Pleistocene (about 2.5 million to 10,000 years ago)',
    zhRegions: ['南北美洲'],
    enRegions: ['North and South America'],
    size: { kind: 'body-length', minMeters: 1.5, maxMeters: 2.0 },
    diet: 'carnivore',
    zhParent:
      '剑齿虎并不是现代老虎的祖先，而是猫科中一个早已灭绝的分支。它最著名的两根上犬齿长达二十多厘米，像弯刀一样，适合切割猎物柔软的腹部。它四肢粗壮、擅长扑抱，可能以当时的大地懒和野牛类为食。冰河时代结束时，气候和猎物都发生了变化，剑齿虎也随之灭绝。',
    enParent:
      'Saber-toothed cats were not ancestors of today’s tigers — they were a separate, extinct branch of the cat family. Their famous upper canine teeth grew over twenty centimetres long and worked like curved blades for cutting into prey. With thick, powerful limbs built for pouncing and holding, they likely hunted the sloths and wild cattle of their time. As the Ice Age ended, climates and prey changed, and the saber-toothed cats disappeared.',
    sources: [
      {
        title: 'Smilodon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Smilodon',
      },
      {
        title: 'Sabre-toothed cats — 英国自然历史博物馆',
        url: 'https://www.nhm.ac.uk/discover/sabre-toothed-cats.html',
      },
    ],
    zhUncertainties: [
      '剑齿虎是对整个剑齿猫族类的通称，本页以最著名的属种（Smilodon，刃齿虎）为代表介绍。',
      '体长区间为属种近似范围，面向家庭阅读，不作为精确测量值。',
    ],
    enUncertainties: [
      '“Saber-toothed cat” covers a whole group; this page focuses on the best-known genus, Smilodon.',
      'The size range is a family-friendly approximation across species, not an exact measurement.',
    ],
    accent: { strong: '#9a7b4f', soft: '#ead9bd' },
    habitat: 'land',
    atmosphere: 'ice',
  },
  {
    slug: 'red-panda',
    zhName: '小熊猫',
    enName: 'Red Panda',
    zhLabel: '小熊猫科动物',
    enLabel: 'Red panda family',
    zhVisible: '看它红棕色的毛和又粗又长的尾巴，走路时尾巴帮它保持平衡。',
    enVisible:
      'Look at its reddish fur and big bushy tail — it helps the red panda keep its balance.',
    zhSentences: [
      '这是小熊猫，住在亚洲高山竹林里的小小攀爬高手。',
      '它有着红棕色的毛和一条带环纹的大尾巴，最爱吃竹子。',
    ],
    enSentences: [
      'This is the red panda, a tiny climbing champion in the mountain bamboo forests of Asia.',
      'It wears reddish fur and a big ringed tail, and bamboo is its favourite food.',
    ],
    zhPron: 'xiǎo xióng māo',
    enPron: 'red PAN-da',
    zhPeriod: '现代（数百万年前延续至今）',
    enPeriod: 'Present day (lineage millions of years old)',
    zhRegions: ['亚洲（喜马拉雅山区）'],
    enRegions: ['Asia (Himalayas)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.6 },
    diet: 'omnivore',
    zhParent:
      '小熊猫和大熊猫名字相似，但其实不是一家：它自成一科，和浣熊、鼬是远亲。它大部分时间在树上度过，用弯曲的爪子牢牢抓住树枝，几乎只吃竹子，偶尔也吃鸟蛋和昆虫。红棕色的厚毛帮它在高山上保暖，尾巴睡觉时还能当围巾盖在身上。',
    enParent:
      'Despite the shared name, red pandas are not close cousins of giant pandas — they form their own family, loosely related to raccoons and weasels. They spend most of their lives in trees, gripping branches with curved claws, eating almost nothing but bamboo plus the occasional egg or insect. Their thick reddish coats keep them warm in the mountains, and at night they wrap their tails around themselves like a blanket.',
    sources: [
      {
        title: 'Red Panda — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/red-panda',
      },
      {
        title: 'Red panda — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/red-panda',
      },
    ],
    zhUncertainties: [
      '体长为头尾全长的大致区间，尾巴几乎和身体一样长。',
      '本页按草稿呈现，模型中附带南瓜等装饰道具，正式发布前会复核场景道具。',
    ],
    enUncertainties: [
      'The size range is a family-friendly approximation of total length; the tail is nearly as long as the body.',
      'Draft model includes decorative pumpkin props; scene props will be reviewed before any release.',
    ],
    accent: { strong: '#b3452c', soft: '#f2c9b4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'kitten',
    zhName: '小猫',
    enName: 'Kitten',
    zhLabel: '家猫幼崽',
    enLabel: 'Domestic cat youngster',
    zhVisible: '数数它背上的条纹，再看它圆圆的大眼睛。',
    enVisible: 'Count the stripes on its back, then look at its big round eyes.',
    zhSentences: [
      '这是一只小猫，家猫的宝宝，从小就想当厉害的猎手。',
      '它的眼睛又大又亮，耳朵会转向声音的方向。',
    ],
    enSentences: [
      'This is a kitten — a baby domestic cat, already practising to be a great little hunter.',
      'Its eyes are big and bright, and its ears turn toward every sound.',
    ],
    zhPron: 'xiǎo māo',
    enPron: 'KIT-n',
    zhPeriod: '现代（约 1 万年前驯化至今）',
    enPeriod: 'Present day (domesticated about 10,000 years ago)',
    zhRegions: ['全球（源自非洲野猫）'],
    enRegions: ['Worldwide (descended from African wildcats)'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.5 },
    diet: 'carnivore',
    zhParent:
      '家猫的祖先是非洲野猫，大约一万年前开始在人类村落附近生活，帮忙守护粮仓。小猫出生时眼睛还没睁开，几周后就开始追逐打闹——这些游戏其实是在练习捕猎。猫的胡须非常敏感，能帮它在黑暗里判断缝隙能不能钻过去。',
    enParent:
      'Domestic cats descend from African wildcats that began living near human villages about ten thousand years ago, guarding grain stores from rodents. Kittens are born with their eyes closed, and within weeks their play-fights turn into hunting practice. A cat’s whiskers are so sensitive they can tell, even in the dark, whether a gap is wide enough to squeeze through.',
    sources: [
      {
        title: 'Cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cat',
      },
      {
        title: 'Domestic cat — 国家地理（Nat Geo）',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat',
      },
    ],
    zhUncertainties: [
      '体长不含尾巴，为家猫幼崽到成猫的近似区间。',
      '品种与个体差异很大，本页以普通虎斑幼猫为例。',
    ],
    enUncertainties: [
      'Body length excludes the tail and spans kitten to adult as a friendly approximation.',
      'Breeds and individuals vary a lot; this page uses an ordinary tabby kitten as the example.',
    ],
    accent: { strong: '#cf7a33', soft: '#f5d9b8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'cane-corso',
    zhName: '卡斯罗犬',
    enName: 'Cane Corso',
    zhLabel: '意大利獒犬',
    enLabel: 'Italian mastiff breed',
    zhVisible: '看它宽大的嘴巴和结实的胸膛，它是很强壮的工作犬。',
    enVisible:
      'Look at its broad muzzle and strong chest — this is a very powerful working dog.',
    zhSentences: [
      '这是卡斯罗犬，来自意大利的大个子守卫犬。',
      '它有结实的身体和聪明的眼神，很久以前还陪罗马人一起工作。',
    ],
    enSentences: [
      'This is the Cane Corso, a big guard dog from Italy.',
      'It has a sturdy body and clever eyes, and long ago it even worked alongside the Romans.',
    ],
    zhPron: 'kǎ sī luó quǎn',
    enPron: 'KAY-nay KOR-so',
    zhPeriod: '现代（约 2000 年前起源至今）',
    enPeriod: 'Present day (breed roots about 2,000 years old)',
    zhRegions: ['意大利'],
    enRegions: ['Italy'],
    size: { kind: 'shoulder-height', minMeters: 0.58, maxMeters: 0.7 },
    diet: 'omnivore',
    zhParent:
      '卡斯罗犬是意大利的古老獒犬，名字来自拉丁语“看护者”。它曾是农场里赶牛、护卫的好帮手，力气大又忠诚。像所有大狗一样，它需要足够的运动和负责任的训练；对小主人温柔、对陌生人警惕是它的天性。',
    enParent:
      'The Cane Corso is an ancient Italian mastiff whose name comes from the Latin for “guardian.” For centuries it helped on farms, driving cattle and protecting property, prized for both strength and loyalty. Like every big dog it needs plenty of exercise and responsible training; it is naturally gentle with its family and watchful with strangers.',
    sources: [
      {
        title: 'Cane Corso — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/cane-corso/',
      },
      {
        title: 'Dog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/dog',
      },
    ],
    zhUncertainties: [
      '肩高为成年犬的大致区间，个体差异较大。',
      '品种历史说法多样，本页采用通行的简述。',
    ],
    enUncertainties: [
      'Shoulder height is a typical adult range; individual dogs vary.',
      'Breed history has several tellings; this page keeps the common short version.',
    ],
    accent: { strong: '#4a4a55', soft: '#c9c9d4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'norwegian-forest-cat',
    zhName: '挪威森林猫',
    enName: 'Norwegian Forest Cat',
    zhLabel: '长毛家猫品种',
    enLabel: 'Longhaired cat breed',
    zhVisible: '找找它脖子上像“围脖”一样的长毛，那是它过冬的装备。',
    enVisible:
      'Find the fluffy “scarf” of long fur around its neck — that is its winter gear.',
    zhSentences: [
      '这是挪威森林猫，披着厚厚“外套”的北欧大猫。',
      '它耳朵里和脚趾间都长着毛，踩在雪地上也不怕冷。',
    ],
    enSentences: [
      'This is the Norwegian Forest Cat, a big Nordic cat wearing a thick coat.',
      'It grows fur inside its ears and between its toes, so snowy ground does not bother it.',
    ],
    zhPron: 'nuó wēi sēn lín māo',
    enPron: 'nor-WEE-jun FOR-ist cat',
    zhPeriod: '现代（品种历史悠久）',
    enPeriod: 'Present day (an old natural breed)',
    zhRegions: ['北欧（挪威）'],
    enRegions: ['Northern Europe (Norway)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.6 },
    diet: 'carnivore',
    zhParent:
      '挪威森林猫在斯堪的纳维亚的森林里生活了几个世纪，传说中它还是北欧神话里女神托尔的车夫。它有一身防水的双层厚毛，春天会褪去厚外套变得清爽。它是爬树高手，也能从高处头朝下慢慢爬下来。',
    enParent:
      'Norwegian Forest Cats have lived in Scandinavian forests for centuries, and legend says they even pulled the goddess Freyja’s chariot in Norse myth. Their thick, water-shedding double coat is shed each spring for a lighter summer look. They are expert climbers and can descend a tree head-first, slowly and safely.',
    sources: [
      {
        title: 'Cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cat',
      },
      {
        title: 'Domestic cat — 国家地理儿童版（Nat Geo Kids）',
        url: 'https://kids.nationalgeographic.com/animals/mammals/facts/domestic-cat',
      },
    ],
    zhUncertainties: [
      '体长不含尾巴；长毛让体型看起来更大。',
      '品种起源传说与史料并存，本页采用通行介绍。',
    ],
    enUncertainties: [
      'Body length excludes the tail; all that fur makes the cat look even bigger.',
      'Origin stories mix legend and history; this page keeps the common introduction.',
    ],
    accent: { strong: '#7d8a6a', soft: '#d9e0cd' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'bull',
    zhName: '公牛',
    enName: 'Bull',
    zhLabel: '牛科家畜',
    enLabel: 'Domestic bovine',
    zhVisible: '看它头上弯弯的浅色角和结实的肩膀。',
    enVisible: 'Look at its curved pale horns and its strong shoulders.',
    zhSentences: [
      '这是一头公牛，牛群里的大家伙。',
      '它有弯弯的角和发达的肌肉，主要吃草，一天要花很多时间进食。',
    ],
    enSentences: [
      'This is a bull, the big fellow of the cattle herd.',
      'With curved horns and powerful muscles, it eats grass and spends much of the day feeding.',
    ],
    zhPron: 'gōng niú',
    enPron: 'BULL',
    zhPeriod: '现代（约 8000–10000 年前驯化至今）',
    enPeriod: 'Present day (domesticated 8,000–10,000 years ago)',
    zhRegions: ['全球（驯化自原牛）'],
    enRegions: ['Worldwide (domesticated from aurochs)'],
    size: { kind: 'body-length', minMeters: 2.2, maxMeters: 2.5 },
    diet: 'herbivore',
    zhParent:
      '家牛的祖先是已经灭绝的原牛——一种肩高接近两米的巨大野牛。人类大约一万年前开始在近东驯化它们，从此牛为人类提供牛奶、牛肉并帮助耕田。牛是反刍动物：会把吞下的草再送回嘴里慢慢咀嚼，一天可以“倒嚼”好几个小时。',
    enParent:
      'Cattle descend from the extinct aurochs, a huge wild ox that stood nearly two metres at the shoulder. People began domesticating them in the Near East about ten thousand years ago, and since then cattle have given us milk, meat and ploughing power. They are ruminants: they bring swallowed grass back up to chew again, “cud-chewing” for hours every day.',
    sources: [
      {
        title: 'Cattle — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cattle',
      },
      {
        title: 'Bos taurus — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Bos_taurus/',
      },
    ],
    zhUncertainties: [
      '体长为常见成年公牛头尾区间，品种间差异很大。',
      '斗牛活动的相关习俗不在本页讨论范围。',
    ],
    enUncertainties: [
      'Length spans typical adult bulls; breeds differ quite a bit.',
      'Bullfighting traditions are outside this page’s scope.',
    ],
    accent: { strong: '#37342f', soft: '#c9c4bc' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'persian-cat',
    zhName: '波斯猫',
    enName: 'Persian Cat',
    zhLabel: '长毛家猫品种',
    enLabel: 'Longhaired cat breed',
    zhVisible: '看它扁扁的小脸和又长又软的白毛。',
    enVisible: 'Look at its flat little face and its long, soft white fur.',
    zhSentences: [
      '这是波斯猫，猫中有名的“长毛贵族”。',
      '它的毛又长又软，需要每天梳理，性格也安安静静。',
    ],
    enSentences: [
      'This is the Persian cat, the famous “long-haired aristocrat” of cats.',
      'Its fur is long and silky and needs daily brushing, and its personality is calm and quiet.',
    ],
    zhPron: 'bō sī māo',
    enPron: 'PER-zhun cat',
    zhPeriod: '现代（约 400 年前有记录至今）',
    enPeriod: 'Present day (recorded for about 400 years)',
    zhRegions: ['伊朗（波斯）起源，全球饲养'],
    enRegions: ['Origin: Iran (Persia); bred worldwide'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.5 },
    diet: 'carnivore',
    zhParent:
      '波斯猫是最古老的人工培育猫种之一，长毛祖先经由丝路来到欧洲。它标志性的扁脸是近代育种的结果；大而圆的眼睛、长长的被毛和温顺的脾气让它几百年来一直受欢迎。因为毛又长又密，它需要主人每天帮忙梳理。',
    enParent:
      'The Persian is one of the oldest purpose-bred cat breeds, with longhaired ancestors that travelled the Silk Road into Europe. Its famous flat face is the result of modern breeding; round eyes, a flowing coat and a gentle temper have kept it popular for centuries. That dense fur means it needs a daily brush from its humans.',
    sources: [
      {
        title: 'Cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cat',
      },
      {
        title: 'Domestic cat — 国家地理（Nat Geo）',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat',
      },
    ],
    zhUncertainties: [
      '体长不含尾巴，为该品种常见区间。',
      '毛色多样，本页以模型中的白色长毛个体为例。',
    ],
    enUncertainties: [
      'Body length excludes the tail and reflects the breed’s common range.',
      'Coat colours vary widely; this page shows the white long-haired individual from the model.',
    ],
    accent: { strong: '#b08fa2', soft: '#ecdde7' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'pirate-shepherd-dog',
    zhName: '德国牧羊犬',
    enName: 'German Shepherd',
    zhLabel: '大型工作犬',
    enLabel: 'Large working dog',
    zhVisible: '看它头上的海盗帽！其实它是一只戴着道具的德国牧羊犬。',
    enVisible:
      'Look at the pirate hat! It is really a German shepherd wearing a costume prop.',
    zhSentences: [
      '这是一只德国牧羊犬，只是戴了一顶海盗帽子道具。',
      '它是聪明又勇敢的工作犬，经常帮助警察和救援队。',
    ],
    enSentences: [
      'This is a German shepherd — it just happens to wear a pirate-hat prop.',
      'It is a clever, brave working dog that often helps police and rescue teams.',
    ],
    zhPron: 'dé guó mù yáng quǎn',
    enPron: 'JUR-mun SHEF-erd',
    zhPeriod: '现代（1899 年育成至今）',
    enPeriod: 'Present day (breed founded in 1899)',
    zhRegions: ['德国'],
    enRegions: ['Germany'],
    size: { kind: 'shoulder-height', minMeters: 0.55, maxMeters: 0.65 },
    diet: 'omnivore',
    zhParent:
      '德国牧羊犬在 1899 年由马克斯·冯·施特凡尼茨定向培育，目标是造出最理想的工作犬。它学得快、胆子大，如今在搜救、警务、导盲等岗位上都很出色。家里养的德牧同样需要“工作”——每天的奔跑、嗅闻游戏和训练会让它快乐。',
    enParent:
      'The German shepherd was shaped from 1899 by Max von Stephanitz, who wanted to breed the ideal working dog. Quick to learn and brave by nature, it now excels at search-and-rescue, police and guide work. A family German shepherd still needs a “job” — daily runs, sniffing games and training keep it happy.',
    sources: [
      {
        title: 'German Shepherd Dog — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/german-shepherd-dog/',
      },
      {
        title: 'Dog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/dog',
      },
    ],
    zhUncertainties: [
      '肩高为成年犬常见区间。',
      '模型中的海盗帽为素材自带道具，正式场景将移除或说明。',
    ],
    enUncertainties: [
      'Shoulder height reflects typical adults.',
      'The pirate hat ships with the source model as a prop; the final scene will remove or explain it.',
    ],
    accent: { strong: '#6b4f3a', soft: '#e0ccb9' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'bear',
    zhName: '棕熊',
    enName: 'Brown Bear',
    zhLabel: '大型熊科动物',
    enLabel: 'Large bear',
    zhVisible: '看它圆圆的耳朵和小眼睛，还有一身厚厚的棕毛。',
    enVisible: 'Look at its round ears, small eyes, and thick brown fur.',
    zhSentences: [
      '这是棕熊，陆地上最大的捕食者之一。',
      '它有厚厚的毛和有力的爪子，冬天会钻进洞里冬眠。',
    ],
    enSentences: [
      'This is the brown bear, one of the biggest land predators on Earth.',
      'With thick fur and strong claws, it curls up in a den and sleeps through winter.',
    ],
    zhPron: 'zōng xióng',
    enPron: 'brown BAIR',
    zhPeriod: '现代（约 50 万年前至今）',
    enPeriod: 'Present day (lineage about 500,000 years old)',
    zhRegions: ['亚洲、欧洲、北美洲'],
    enRegions: ['Asia, Europe, North America'],
    size: { kind: 'body-length', minMeters: 1.7, maxMeters: 2.2 },
    diet: 'omnivore',
    zhParent:
      '棕熊虽是熊类中的“大块头”，但主食常常是浆果、坚果和鲑鱼，秋天会拼命进食储存脂肪。它的肩膀隆起一块肌肉，让前臂挖土、翻石头时特别有力。冬眠时心率大幅下降，靠脂肪过冬，春天再带着小熊走出洞穴。',
    enParent:
      'Brown bears are the giants of the bear world, yet much of their menu is berries, nuts and salmon — they spend autumn eating non-stop to store fat. The hump on their shoulders is pure muscle, powering strong arms that flip rocks and dig. During hibernation their heartbeat slows way down; they live off that fat and emerge in spring with new cubs.',
    sources: [
      {
        title: 'Brown bear — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/brown-bear',
      },
      {
        title: 'Grizzly bear — 美国国家野生动物联合会（NWF）',
        url: 'https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Grizzly-Bear',
      },
    ],
    zhUncertainties: [
      '体长为成年棕熊的常见区间，不同地区差异大。',
      '亚种（如灰熊、科迪亚克棕熊）体型差异未展开。',
    ],
    enUncertainties: [
      'Length reflects typical adults; regional differences are large.',
      'Subspecies such as grizzlies and Kodiak bears are not detailed here.',
    ],
    accent: { strong: '#7a5230', soft: '#e6d2b8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'fennec-fox',
    zhName: '耳廓狐',
    enName: 'Fennec Fox',
    zhLabel: '沙漠小型犬科动物',
    enLabel: 'Small desert fox',
    zhVisible: '看它大大的耳朵！在沙漠里，大耳朵能帮它散热、听到地下的小虫。',
    enVisible:
      'Look at those huge ears! In the desert they release heat and even hear insects underground.',
    zhSentences: [
      '这是耳廓狐，撒哈拉沙漠里最小的狐狸。',
      '它的大耳朵像小雷达，厚厚的毛脚掌踩在热沙上也不怕烫。',
    ],
    enSentences: [
      'This is the fennec fox, the smallest fox of the Sahara Desert.',
      'Its giant ears work like little radars, and thick furry paws let it walk on burning sand.',
    ],
    zhPron: 'ěr kuò hú',
    enPron: 'FEN-ik fox',
    zhPeriod: '现代',
    enPeriod: 'Present day',
    zhRegions: ['北非（撒哈拉沙漠）'],
    enRegions: ['North Africa (Sahara Desert)'],
    size: { kind: 'body-length', minMeters: 0.24, maxMeters: 0.4 },
    diet: 'omnivore',
    zhParent:
      '耳廓狐比家猫还小，却能在昼夜温差极大的沙漠里过得很好：白天躲在地洞里，夜里出来找虫子、蜥蜴和果子。大耳朵既是“散热器”又是“雷达”；奶白色的毛在月光下的沙地上正好隐蔽。它几乎不用专门喝水，食物里的水分就够用了。',
    enParent:
      'Smaller than a house cat, the fennec fox thrives in a desert that swings between scorching days and chilly nights: it hides in burrows by day and hunts insects, lizards and fruit by night. Those huge ears work as both radiators and radars, and its creamy coat blends into moonlit sand. It rarely needs to drink — its food provides enough water.',
    sources: [
      {
        title: 'Fennec — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/fennec',
      },
      {
        title: 'Fennec fox — 国家地理（Nat Geo）',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/fennec-fox',
      },
    ],
    zhUncertainties: [
      '体长不含尾巴，为头体长区间。',
      '夜行习性等描述为概览，具体行为随种群与环境变化。',
    ],
    enUncertainties: [
      'Body length excludes the tail (head-and-body range).',
      'Behaviour notes are a general overview and vary between populations.',
    ],
    accent: { strong: '#d19a4e', soft: '#f7e3c4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'owl',
    zhName: '猫头鹰',
    enName: 'Owl',
    zhLabel: '夜行性猛禽',
    enLabel: 'Nocturnal raptor',
    zhVisible: '看它展开的翅膀，猫头鹰的羽毛边缘有锯齿，飞起来几乎没有声音。',
    enVisible:
      'Look at its spread wings — saw-toothed feather edges make an owl’s flight almost silent.',
    zhSentences: [
      '这是猫头鹰，夜晚出动的安静猎手。',
      '它的脸像小雷达，能听清雪地下老鼠的动静。',
    ],
    enSentences: [
      'This is an owl, the quiet hunter of the night.',
      'Its dish-shaped face works like a radar dish, catching the tiniest rustle of a mouse.',
    ],
    zhPron: 'māo tóu yīng',
    enPron: 'OWL',
    zhPeriod: '现代（约 5500 万年前至今）',
    enPeriod: 'Present day (lineage about 55 million years old)',
    zhRegions: ['全球（除南极洲）'],
    enRegions: ['Worldwide (except Antarctica)'],
    groupRangeZh:
      '猫头鹰家族种类很多，小的只有麻雀的两倍大，最大的雕鸮接近 70 厘米高。',
    groupRange: { minMeters: 0.15, maxMeters: 0.7 },
    groupRangeEn:
      'Owls come in many sizes — some barely bigger than a sparrow, while big eagle-owls stand almost 70 centimetres tall.',
    diet: 'carnivore',
    zhParent:
      '猫头鹰的眼睛长在正前方，就像望远镜一样适合判断距离；脖子却特别灵活，能转过大半圈。它飞行时羽毛边缘的锯齿打散气流声，猎物几乎听不到它靠近。多数猫头鹰在夜里活动，白天躲在树洞或枝叶间休息。',
    enParent:
      'An owl’s forward-facing eyes work like binoculars, perfect for judging distance, while its remarkably flexible neck can turn most of the way around. Saw-toothed feather edges break up turbulence, so prey barely hears it coming. Most owls hunt at night and spend the day hidden in tree holes or foliage.',
    sources: [
      {
        title: 'Owl — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/owl',
      },
      {
        title: 'Strigiformes — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Strigiformes/',
      },
    ],
    zhUncertainties: [
      '本页介绍猫头鹰这一类群，模型的具体种类待专家复核。',
      '体型以类群区间描述，不做单一精确值。',
    ],
    enUncertainties: [
      'This page introduces owls as a group; the exact species of the model awaits expert review.',
      'Size is described as a family range rather than a single measurement.',
    ],
    accent: { strong: '#82694f', soft: '#e3d6c2' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'octopus',
    zhName: '章鱼',
    enName: 'Octopus',
    zhLabel: '头足纲软体动物',
    enLabel: 'Cephalopod mollusc',
    zhVisible: '数数它的腕足有几条？章鱼有八条，每条内侧都有吸盘。',
    enVisible: 'Count its arms — an octopus has eight, each lined underneath with suckers.',
    zhSentences: [
      '这是章鱼，海洋里的“八爪魔法师”。',
      '它会变色、会喷墨汁，还是无脊椎动物里的解题高手。',
    ],
    enSentences: [
      'This is the octopus, the eight-armed magician of the sea.',
      'It can change colour, squirt ink, and solve puzzles better than any other animal without a backbone.',
    ],
    zhPron: 'zhāng yú',
    enPron: 'OK-tuh-pus',
    zhPeriod: '现代（约 3 亿年前至今）',
    enPeriod: 'Present day (lineage about 300 million years old)',
    zhRegions: ['世界各海洋'],
    enRegions: ['Oceans worldwide'],
    groupRangeZh:
      '章鱼种类很多，小型种腕展只有十几厘米，最大的太平洋巨型章鱼腕展可达 3 米以上。',
    groupRange: { minMeters: 0.12, maxMeters: 3.0 },
    groupRangeEn:
      'Octopus species vary hugely — small species span just a dozen centimetres, while the giant Pacific octopus can stretch its arms over 3 metres.',
    diet: 'carnivore',
    zhParent:
      '章鱼有三颗心脏和蓝色的血液，八条腕足上各有上百个吸盘，能各自“尝”味道。它的皮肤布满色素细胞，几秒钟就能改变颜色和花纹。遇到危险时喷出墨汁迷惑对手，还能钻进比自己身体小得多的缝隙——因为章鱼全身没有硬骨头。',
    enParent:
      'An octopus has three hearts, blue blood, and hundreds of suckers that can each “taste” what they touch. Colour-changing cells in its skin let it repaint itself in seconds. When trouble comes, it squirts an ink cloud and can squeeze through gaps far smaller than itself — because an octopus has no hard bones at all.',
    sources: [
      {
        title: 'Octopus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/octopus',
      },
      {
        title: 'Octopus — 国家地理（Nat Geo）',
        url: 'https://www.nationalgeographic.com/animals/invertebrates/facts/octopus',
      },
    ],
    zhUncertainties: [
      '本页介绍章鱼类群，模型具体种类待复核。',
      '体型以腕展描述类群区间，不作单一精确值。',
    ],
    enUncertainties: [
      'This page introduces octopuses as a group; the model’s exact species awaits review.',
      'Size uses arm span across the family rather than a single measurement.',
    ],
    accent: { strong: '#7a4f68', soft: '#e0c8d8' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'sheep',
    zhName: '绵羊',
    enName: 'Sheep',
    zhLabel: '牛科家畜',
    enLabel: 'Domestic bovine',
    zhVisible: '看它卷卷的厚羊毛，像穿了一件云朵外套。',
    enVisible: 'Look at its thick, curly wool — like a coat made of clouds.',
    zhSentences: [
      '这是绵羊，人类最早驯养的动物之一。',
      '它的羊毛一年年生长，春天剪下来能纺成暖暖的毛线。',
    ],
    enSentences: [
      'This is the sheep, one of the first animals humans ever tamed.',
      'Its wool grows all year, and each spring the fleece is sheared and spun into warm yarn.',
    ],
    zhPron: 'mián yáng',
    enPron: 'SHEEP',
    zhPeriod: '现代（约 8000–11000 年前驯化至今）',
    enPeriod: 'Present day (domesticated 8,000–11,000 years ago)',
    zhRegions: ['全球（驯化自亚洲野羊）'],
    enRegions: ['Worldwide (domesticated from Asian mouflon)'],
    size: { kind: 'body-length', minMeters: 1.2, maxMeters: 1.4 },
    diet: 'herbivore',
    zhParent:
      '绵羊的祖先生活在亚洲的山地，大约一万年前被人类驯化。它们是反刍动物，有四个胃室把草慢慢消化；瞳孔是横长的长方形，视野特别宽，方便随时发现危险。绵羊认得同伴的脸，群体里彼此照应。',
    enParent:
      'Sheep descend from wild mountain sheep of Asia and were domesticated about ten thousand years ago. They are ruminants with four stomach chambers that slowly digest grass, and their wide, rectangular pupils give them a huge field of view for spotting danger. Sheep recognise each other’s faces and look out for one another in the flock.',
    sources: [
      {
        title: 'Sheep — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/sheep',
      },
      {
        title: 'Ovis aries — 动物多样性网（ADW）',
        url: 'https://animaldiversity.org/accounts/Ovis_aries/',
      },
    ],
    zhUncertainties: [
      '体长为成年绵羊常见区间，品种间差异较大。',
      '羊毛用途描述为通用介绍。',
    ],
    enUncertainties: [
      'Length reflects typical adults; breeds vary considerably.',
      'Wool-use notes are a general introduction.',
    ],
    accent: { strong: '#8d8578', soft: '#e8e2d6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
]
