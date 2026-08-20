// Per-animal draft content for the model-downloads batch (part B: root-level
// single models, continued). Consumed by scripts/generate-downloads-draft-packages.mjs.
// Facts follow family-friendly popular-science ranges; every uncertainty is
// echoed in editorial notes. English copy uses British spellings.
export const DOWNLOADS_CONTENT_B = [
  {
    slug: 'labrador-retriever',
    zhName: '拉布拉多寻回犬',
    enName: 'Labrador Retriever',
    zhLabel: '家犬（寻回犬品种）',
    enLabel: 'Domestic dog (retriever breed)',
    zhVisible: '看它的尾巴——又粗又圆，像一支毛茸茸的船舵。',
    enVisible:
      'Look at its tail — thick and round, like a furry rudder.',
    zhSentences: [
      '这是拉布拉多寻回犬，全世界最受欢迎的狗狗之一。',
      '它脚趾间有蹼，天生就是游泳好手，最爱帮忙捡东西。',
    ],
    enSentences: [
      'This is the Labrador retriever, one of the most popular dogs in the world.',
      'Webbed toes make it a natural swimmer that loves fetching things for people.',
    ],
    zhPron: 'lā bù lā duō xún huí quǎn',
    enPron: 'LAB-ra-dor ri-TREE-ver',
    zhPeriod: '现代（品种培育约 200 年）',
    enPeriod: 'Present day (breed developed about 200 years ago)',
    zhRegions: ['加拿大纽芬兰', '世界各地'],
    enRegions: ['Newfoundland, Canada', 'worldwide'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.2 },
    diet: 'omnivore',
    zhParent:
      '拉布拉多的祖先是纽芬兰渔民的“圣约翰水犬”，帮忙把逃掉的鱼和渔网拖回船上，所以它天生爱水。它的嘴“软”得出奇——训练过的拉布拉多能叼着一枚生鸡蛋走完整条走廊而不咬破。今天它是最常见的导盲犬、搜救犬和治疗犬，黑、黄、巧克力三个颜色都出自同一品种。',
    enParent:
      'Labradors descend from the fishermen’s St John’s water dogs of Newfoundland, which hauled escaped fish and nets back to the boats — hence the breed’s love of water. Their mouths are famously “soft”: a trained Labrador can carry a raw egg down a hallway without cracking it. Today it is the most common guide, search-and-rescue and therapy dog, and black, yellow and chocolate all belong to the same breed.',
    sources: [
      {
        title: 'Labrador Retriever — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Labrador-retriever',
      },
      {
        title: 'Labrador Retriever — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Labrador_Retriever',
      },
    ],
    zhUncertainties: [
      '体长为头尾长度；公犬普遍比母犬大一圈。',
      '本批模型含两个不同的拉布拉多模型（另一见“二号”条目），正式收录前将择一保留或合并。',
    ],
    enUncertainties: [
      'The size covers nose-to-tail length; males are usually noticeably bigger than females.',
      'This batch contains two different Labrador models (see the “Model Two” entry); before publication one will be kept or the two merged.',
    ],
    accent: { strong: '#8a6a3b', soft: '#e9d9b8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'lion-ar',
    zhName: '狮子（AR 版）',
    enName: 'Lion (AR Model)',
    zhLabel: '大型猫科动物（群居）',
    enLabel: 'Big cat (the social one)',
    zhVisible: '数数它尾巴末端的深色绒球——狮子用尾巴尖和同伴“打招呼”。',
    enVisible:
      'Count the dark tuft on its tail tip — lions “talk” to pride-mates with those tufts.',
    zhSentences: [
      '这是狮子，唯一过着大家族生活的猫科动物。',
      '雌狮们一起合作打猎，雄狮的鬃毛是它威风的“围巾”。',
    ],
    enSentences: [
      'This is the lion, the only cat that lives in a big family group.',
      'Lionesses hunt as a team, while the male’s mane is his regal “scarf”.',
    ],
    zhPron: 'shī zi',
    enPron: 'LY-un',
    zhPeriod: '现代（狮属延续数百万年）',
    enPeriod: 'Present day (lion lineage millions of years old)',
    zhRegions: ['非洲撒哈拉以南', '印度（少量）'],
    enRegions: ['Sub-Saharan Africa', 'a small population in India'],
    size: { kind: 'body-length', minMeters: 2.5, maxMeters: 3.3 },
    diet: 'carnivore',
    zhParent:
      '狮子是猫科动物里唯一的“社交达人”：一个狮群通常由几只有血缘关系的雌狮、它们的幼崽和一两头雄狮组成。雌狮们排成扇形围猎，把角马和斑马赶向埋伏的同伴。雄狮那圈鬃毛不只是装饰——研究显示深色浓密的鬃毛能“告诉”对手自己很强壮。夜幕降临后，狮子的吼声能传到八公里外，宣示这片领地的主人。',
    enParent:
      'Lions are the only truly sociable cats: a pride usually gathers several related lionesses, their cubs and one or two males. The lionesses hunt in a fan formation, driving wildebeest and zebra towards hidden companions. A male’s mane is more than decoration — studies suggest a dark, thick mane “tells” rivals he is strong. After dark, a lion’s roar carries eight kilometres, announcing who owns the land.',
    sources: [
      {
        title: 'Lion — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/lion',
      },
      {
        title: 'Lion — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/lion',
      },
    ],
    zhUncertainties: [
      '本条目与既有“狮子”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长为头尾合计；雄狮比雌狮长，鬃毛让它显得更大。',
    ],
    enUncertainties: [
      'This entry and the existing “Lion” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The range covers head-to-tail length; males run longer than females and look larger still under the mane.',
    ],
    accent: { strong: '#a8763c', soft: '#efd7a7' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'macaw',
    zhName: '金刚鹦鹉',
    enName: 'Macaw',
    zhLabel: '大型鹦鹉（金刚鹦鹉族）',
    enLabel: 'Large parrot (macaw)',
    zhVisible: '看它弯弯的大嘴像一把胡桃钳，连最硬的坚果也能夹开。',
    enVisible:
      'Look at its hooked beak — a nutcracker strong enough for the hardest nuts.',
    zhSentences: [
      '这是金刚鹦鹉，中南美洲雨林里的大个子鹦鹉。',
      '它披着一身彩虹羽毛，还常常和伴侣并肩飞成一列。',
    ],
    enSentences: [
      'This is the macaw, the big parrot of Central and South American rainforests.',
      'It wears rainbow feathers and often flies in a line, wing to wing with its partner.',
    ],
    zhPron: 'jīn gāng yīng wǔ',
    enPron: 'ma-KAW',
    zhPeriod: '现代（鹦鹉家族延续数千万年）',
    enPeriod: 'Present day (parrot lineage tens of millions of years old)',
    zhRegions: ['中南美洲热带雨林'],
    enRegions: ['tropical forests of Central and South America'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 1.0 },
    diet: 'herbivore',
    zhParent:
      '金刚鹦鹉的喙能咬开棕榈坚果，可种子里的毒素也一并下肚——于是它和同伴飞到河边的“黏土崖”，吃一口泥土来中和毒素，像随身携带的“解药”。它和伴侣常常一夫一妻相伴多年，连叫声都是彼此配合的“二重唱”。聪明的它抓食物时会固定用左脚或右脚，就像人有惯用手。',
    enParent:
      'A macaw’s beak can crack palm nuts, but the seeds inside come with toxins — so flocks visit riverside “clay licks” and eat earth that buffers the poison, a built-in antidote. Macaws usually pair for years, and partners sing matching duets of calls. Clever birds, they grab food with a favoured left or right foot, much as people are left- or right-handed.',
    sources: [
      {
        title: 'Macaw — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/macaw',
      },
      {
        title: 'Macaw — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Macaw',
      },
    ],
    zhUncertainties: [
      '体长含长尾；不同种类大小差别很大，区间以常见大型种类为准。',
      '黏土崖的作用以解毒假说为主流解释，学界仍有讨论。',
    ],
    enUncertainties: [
      'The length includes the long tail; species vary greatly in size, so the range covers familiar large macaws.',
      'Clay licks are explained mainly by the detoxification hypothesis, which scientists still debate.',
    ],
    accent: { strong: '#a83232', soft: '#f0c8c0' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'mallard-duck',
    zhName: '绿头鸭',
    enName: 'Mallard',
    zhLabel: '野鸭（绿头鸭）',
    enLabel: 'Wild duck (mallard)',
    zhVisible: '找找亮绿色的脑袋——只有鸭先生才有，鸭小姐穿一身斑纹“迷彩服”。',
    enVisible:
      'Find the glossy green head — only “Mr. Duck” has one; the female wears speckled camouflage.',
    zhSentences: [
      '这是绿头鸭，全世界最常见的野鸭，也是家鸭的祖先。',
      '它吃东西时会屁股朝天倒插进水里，样子滑稽极了。',
    ],
    enSentences: [
      'This is the mallard, the most familiar wild duck on Earth and the ancestor of farm ducks.',
      'It feeds by tipping tail-up into the water — a wonderfully silly sight.',
    ],
    zhPron: 'lǜ tóu yā',
    enPron: 'MAL-ard',
    zhPeriod: '现代（鸭属延续数百万年）',
    enPeriod: 'Present day (duck lineage millions of years old)',
    zhRegions: ['北半球温带', '世界各地公园'],
    enRegions: ['temperate Northern Hemisphere', 'parks worldwide'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.65 },
    diet: 'omnivore',
    zhParent:
      '公园里“嘎嘎”叫的几乎都是绿头鸭妈妈——雌鸭嗓门洪亮，雄鸭的叫声却像悄悄话。绿头鸭是“水面倒立”觅食的高手：尾巴翘上天，脖子在水下够水草和小虫。小鸭出壳当天就会离巢——鸭妈妈把窝筑在高处，绒毛球一样的宝宝们勇敢地往下蹦，然后跟着妈妈走向池塘。几乎所有家鸭都是绿头鸭驯化来的后代。',
    enParent:
      'Nearly every park “quack” comes from a mother mallard — females call loudly while the male’s voice is a whisper. Mallards are dabbling experts, tipping tail-up to reach waterweed and insects below. Ducklings leave the nest on day one: the mother builds high up, and the downy chicks bravely tumble down, then march after her to the water. Nearly every farm duck descends from the mallard.',
    sources: [
      {
        title: 'Mallard — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/mallard',
      },
      {
        title: 'Mallard — 康奈尔鸟类学实验室（Cornell Lab）',
        url: 'https://www.allaboutbirds.org/guide/Mallard/',
      },
    ],
    zhUncertainties: [
      '本条目（野生绿头鸭）与既有“鸭子”草稿为不同模型，正式收录前将统一处理。',
      '体长含尾；城市公园的绿头鸭常与家鸭杂交，羽色变化很多。',
    ],
    enUncertainties: [
      'This wild mallard entry and the existing “Duck” draft are different models; before publication the pair will be reconciled.',
      'The length includes the tail; town-park mallards often mix with domestic ducks, so plumage varies widely.',
    ],
    accent: { strong: '#2e5e46', soft: '#cfe3d6' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'pomeranian',
    zhName: '博美犬',
    enName: 'Pomeranian',
    zhLabel: '小型家犬（狐狸犬家族）',
    enLabel: 'Small domestic dog (spitz family)',
    zhVisible: '它像一团会跳的棉花糖，脸却像一只小狐狸。',
    enVisible:
      'It looks like a bouncing marshmallow with the face of a little fox.',
    zhSentences: [
      '这是博美犬，个头最小却气场十足的“小狐狸”。',
      '它有两层毛，天冷时蓬起来就像穿了一件羽毛斗篷。',
    ],
    enSentences: [
      'This is the Pomeranian, the tiniest dog with the biggest personality.',
      'Its double coat fluffs up in cold weather like a feathered cloak.',
    ],
    zhPron: 'bó měi quǎn',
    enPron: 'POM-er-AY-nee-an',
    zhPeriod: '现代（品种培育数百年）',
    enPeriod: 'Present day (breed developed over centuries)',
    zhRegions: ['欧洲波美拉尼亚地区', '世界各地'],
    enRegions: ['Pomerania, northern Europe', 'worldwide'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.45 },
    diet: 'omnivore',
    zhParent:
      '博美犬的名字来自波罗的海边的波美拉尼亚地区，祖先是拉雪橇的大个头狐狸犬。英国维多利亚女王养过一只特别小的博美，从此全欧洲都开始追捧“口袋尺寸”，一百年间它从二十多公斤的雪橇犬伙伴变成了两三公斤的掌上明珠。别看它小，嗓门和胆量都是超大号，是最尽职的“门铃犬”。',
    enParent:
      'The Pomeranian is named after Pomerania on the Baltic coast, and its ancestors were much bigger sledge spitz dogs. Queen Victoria kept a particularly small one, and after that all Europe wanted the “pocket size”; in a century the breed shrank from a twenty-kilo hauler to a two-kilo darling. Small as it is, its bark and courage are extra-large — a devoted little doorbell of a dog.',
    sources: [
      {
        title: 'Pomeranian — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Pomeranian',
      },
      {
        title: 'Pomeranian dog — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Pomeranian_dog',
      },
    ],
    zhUncertainties: [
      '蓬松的被毛让体型显大，体长按实际骨骼计。',
      '体重通常约 1.5–3.5 公斤；早期品种更大。',
    ],
    enUncertainties: [
      'The fluffy coat makes the dog look bigger; the length follows the actual frame.',
      'Adults usually weigh about 1.5–3.5 kilograms; early Pomeranians were much heavier.',
    ],
    accent: { strong: '#b3762f', soft: '#f2ddbb' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pony',
    zhName: '矮种马',
    enName: 'Pony',
    zhLabel: '小型马（矮种马）',
    enLabel: 'Small horse (pony)',
    zhVisible: '看看它又密又长的鬃毛和尾巴，像披了一件厚斗篷。',
    enVisible:
      'Look at its thick mane and tail — like wearing a shaggy cloak.',
    zhSentences: [
      '这是矮种马，不是小马驹，而是一辈子都长不高的马品种。',
      '它虽然个子小，力气却大得能驮起大人。',
    ],
    enSentences: [
      'This is a pony — not a foal, but a breed that stays small for life.',
      'It may be little, yet it is strong enough to carry a grown-up.',
    ],
    zhPron: 'ǎi zhǒng mǎ',
    enPron: 'POH-nee',
    zhPeriod: '现代（驯化历史数千年）',
    enPeriod: 'Present day (domesticated for thousands of years)',
    zhRegions: ['英国设得兰群岛', '世界各地牧场'],
    enRegions: ['Shetland Islands, Scotland', 'farms worldwide'],
    size: { kind: 'shoulder-height', minMeters: 0.7, maxMeters: 1.45 },
    diet: 'herbivore',
    zhParent:
      '矮种马的经典标准是肩高不超过 1.47 米，比这高的才算“大马”。设得兰矮种马出生在风大草少的海岛，练出了双层保暖毛、宽蹄子和“吃得少干得多”的本领，能拉动是自己体重两倍的车。历史上它们曾在矿井里拉煤；今天它们是许多孩子学骑马的第一位“马老师”。',
    enParent:
      'A pony is classically any horse standing under 1.47 metres at the shoulder — anything taller counts as a “big horse”. Shetland ponies were shaped by windy, grass-poor islands: a double coat, broad hooves and a thrifty “eat little, work hard” engine that lets one pull twice its own weight. Ponies once hauled coal in mines; today they are often a child’s first riding teacher.',
    sources: [
      {
        title: 'Pony — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pony',
      },
      {
        title: 'Pony — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Pony',
      },
    ],
    zhUncertainties: [
      '“矮种马”包含许多品种，本模型接近设特兰类型；肩高以传统 1.47 米分界为上限。',
      '不同品种体重差异很大，约从 100 公斤到 400 公斤不等。',
    ],
    enUncertainties: [
      '“Pony” covers many breeds; this model resembles a Shetland type, and the range tops out at the traditional 1.47-metre dividing line.',
      'Weights vary hugely between breeds, roughly from 100 to 400 kilograms.',
    ],
    accent: { strong: '#8f6a4a', soft: '#e6d2b8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pug-ar',
    zhName: '哈巴狗（AR 版）',
    enName: 'Pug (AR Model)',
    zhLabel: '小型家犬（巴哥犬）',
    enLabel: 'Small domestic dog (pug)',
    zhVisible: '找找它额头上的褶皱——许多哈巴狗的额头上有一个“王子印记”。',
    enVisible:
      'Find the wrinkles on its forehead — many pugs carry a “prince mark” there.',
    zhSentences: [
      '这是哈巴狗，一张扁扁的“黑脸”配一对圆眼睛。',
      '它打起呼噜来像小猪，是天生的沙发伙伴。',
    ],
    enSentences: [
      'This is the pug, with its squashed dark face and big round eyes.',
      'It snores like a tiny piglet — a sofa companion born and bred.',
    ],
    zhPron: 'hā ba gǒu',
    enPron: 'PUG',
    zhPeriod: '现代（品种逾两千年）',
    enPeriod: 'Present day (breed over two thousand years old)',
    zhRegions: ['中国（起源）', '世界各地'],
    enRegions: ['China (origin)', 'worldwide'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.55 },
    diet: 'omnivore',
    zhParent:
      '哈巴狗在中国宫廷里当了两千多年的“皇家伴侣”，后来沿着商路漂洋过海，成了欧洲王室的心头好。传说荷兰起义领袖威廉一世曾因宠物哈巴狗的狂吠而躲过夜袭，从此哈巴狗成了奥兰治王室的“吉祥物”。它扁扁的鼻腔让它爱打呼噜、也怕热，夏天要记得帮它降温。',
    enParent:
      'Pugs spent more than two thousand years as royal companions in Chinese palaces before travelling the trade routes into European courts. Legend says a pet pug’s frantic barking saved William of Orange from a night ambush, and the breed became the House of Orange’s mascot. Its flattened airway brings the famous snore and a poor tolerance of heat, so summer days call for a cool room.',
    sources: [
      {
        title: 'Pug — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pug',
      },
      {
        title: 'Pug — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Pug',
      },
    ],
    zhUncertainties: [
      '本条目与既有“哈巴狗”草稿为同一品种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '“威廉一世夜袭”为流传的王室传说，细节难以考证。',
    ],
    enUncertainties: [
      'This entry and the existing “Pug” draft describe the same breed from two different downloaded models; before publication one will be chosen or the two merged.',
      'The William of Orange ambush story is a court legend whose details cannot be verified.',
    ],
    accent: { strong: '#c9a66b', soft: '#f2e4c9' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'rabbit-ar',
    zhName: '兔子（AR 版）',
    enName: 'Rabbit (AR Model)',
    zhLabel: '兔科动物（欧洲兔）',
    enLabel: 'Rabbit family (European rabbit)',
    zhVisible: '看它的耳朵像雷达一样转来转去，连身后的声音也逃不掉。',
    enVisible:
      'Watch its ears swivel like radar dishes — not even a sound behind it escapes.',
    zhSentences: [
      '这是兔子，长耳朵和大后腿的跳跃高手。',
      '它的眼睛长在头两侧，几乎能看到一整圈的风景。',
    ],
    enSentences: [
      'This is the rabbit, a hopping champion with long ears and mighty hind legs.',
      'Its eyes sit on the sides of its head, letting it see almost all the way round.',
    ],
    zhPron: 'tù zi',
    enPron: 'RAB-it',
    zhPeriod: '现代（兔科延续数千万年）',
    enPeriod: 'Present day (rabbit lineage tens of millions of years old)',
    zhRegions: ['欧洲（起源）', '世界各地'],
    enRegions: ['Europe (origin)', 'worldwide'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.5 },
    diet: 'herbivore',
    zhParent:
      '兔子的两只耳朵可以各自独立转动，像两台微型雷达同时监听不同方向。遇到危险时它用后腿重重跺地，给地下洞穴里的邻居们发“地震警报”。它的牙齿一生都在生长，所以要不停啃草磨牙；开心到极点时还会突然原地起跳扭身，养兔子的人管这叫“开心蹦跳”。',
    enParent:
      'A rabbit’s two ears rotate independently, like twin radars tracking different directions at once. When danger appears, it thumps the ground with a hind foot — an “earthquake alarm” for neighbours down the warren. Its teeth grow all its life, so it must keep grazing to wear them down; and when a rabbit is overjoyed it leaps straight up and twists in mid-air, what keepers call a “binky”.',
    sources: [
      {
        title: 'Rabbit — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/rabbit',
      },
      {
        title: 'European rabbit — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/European_rabbit',
      },
    ],
    zhUncertainties: [
      '本条目与既有“兔子”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长含尾；家兔品种之间体型差异明显。',
    ],
    enUncertainties: [
      'This entry and the existing “Rabbit” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The length includes the tail; domestic breeds vary noticeably in size.',
    ],
    accent: { strong: '#9b8a76', soft: '#ece3d6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'raccoon-ar',
    zhName: '浣熊（AR 版）',
    enName: 'Raccoon (AR Model)',
    zhLabel: '浣熊科动物（北美浣熊）',
    enLabel: 'Raccoon family (common raccoon)',
    zhVisible: '找找它脸上的黑色“蒙面巾”，像戴着眼罩的小海盗。',
    enVisible:
      'Find the black “bandit mask” on its face — like a little pirate wearing an eye mask.',
    zhSentences: [
      '这是浣熊，北美洲最会“洗东西”的小机灵鬼。',
      '它把食物放进水里搓来搓去，小手灵活得能打开瓶盖。',
    ],
    enSentences: [
      'This is the raccoon, North America’s cleverest little “food-washer”.',
      'It dunks food in water and rubs it clean, and its clever paws can even undo bottle caps.',
    ],
    zhPron: 'huàn xióng',
    enPron: 'ra-KOON',
    zhPeriod: '现代（浣熊科延续数百万年）',
    enPeriod: 'Present day (raccoon lineage millions of years old)',
    zhRegions: ['北美洲（起源）', '欧洲与日本（引入）'],
    enRegions: ['North America (origin)', 'Europe and Japan (introduced)'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 1.0 },
    diet: 'omnivore',
    zhParent:
      '浣熊的黑眼罩不只是“妆容”：深色毛发能减少反光，帮它在夜里看清东西。它的前爪极其灵敏，沾水后更像人的手指，“洗食物”其实是用小手摸清食物的形状和能不能吃。它还是城市生存冠军，开垃圾桶、翻后院样样精通；科学家做过测试，浣熊能记住打开复杂锁扣的方法长达三年。',
    enParent:
      'A raccoon’s dark eye mask is more than make-up: the dark fur cuts glare and helps it see at night. Its front paws are extraordinarily sensitive — wet, they work almost like human fingers — and “washing” food is really a way of feeling what it is. Raccoons are city-survival champions that open bins and unclip latches; in one study they remembered how to undo a tricky latch for up to three years.',
    sources: [
      {
        title: 'Raccoon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/raccoon',
      },
      {
        title: 'Raccoon — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Raccoon',
      },
    ],
    zhUncertainties: [
      '本条目与既有“浣熊”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长含尾；城市里的浣熊常比野外个体更胖。',
    ],
    enUncertainties: [
      'This entry and the existing “Raccoon” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The length includes the tail; city raccoons often run plumper than their country cousins.',
    ],
    accent: { strong: '#5a5f68', soft: '#d6d9dd' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'rottweiler',
    zhName: '罗威纳犬',
    enName: 'Rottweiler',
    zhLabel: '家犬（工作犬品种）',
    enLabel: 'Domestic dog (working breed)',
    zhVisible: '看看它黑亮的“西装外套”和胸口的棕色“围兜”。',
    enVisible:
      'Look at its glossy black “suit” with the tan “bib” on its chest.',
    zhSentences: [
      '这是罗威纳犬，历史最悠久的工作犬之一。',
      '古罗马时代它的祖先赶着牛群行军，后来又拉着屠夫的肉车上街。',
    ],
    enSentences: [
      'This is the Rottweiler, one of the oldest working dogs.',
      'Its ancestors drove cattle for Roman legions, and later it pulled butchers’ meat carts to market.',
    ],
    zhPron: 'luó wēi nà quǎn',
    enPron: 'ROT-wy-ler',
    zhPeriod: '现代（血统传统可溯至古罗马，品种定型逾百年）',
    enPeriod: 'Present day (breed tradition traces to ancient Rome; formalised over a century ago)',
    zhRegions: ['德国罗特韦尔（品种定型）', '世界各地'],
    enRegions: ['Rottweil, Germany (breed formalised)', 'worldwide'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.3 },
    diet: 'omnivore',
    zhParent:
      '罗威纳犬的名字来自德国小镇罗特韦尔：中世纪的屠夫带着它赶牛进城、看守钱箱，它因此被叫作“屠夫犬”。它力量大、性格沉稳，对家人格外温柔，训练得当后是出色的警犬、搜救犬和治疗犬。养一只罗威纳需要充足的运动和耐心的教导，它会用一辈子的忠诚回报你。',
    enParent:
      'The Rottweiler takes its name from the German town of Rottweil, where butchers used the dogs to drive cattle to market and guard the money box — hence the nickname “butcher’s dog”. Powerful and steady-natured, it is remarkably gentle with its family, and well-trained Rottweilers serve as police, search-and-rescue and therapy dogs. The breed needs plenty of exercise and patient teaching, and repays both with lifelong loyalty.',
    sources: [
      {
        title: 'Rottweiler — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Rottweiler',
      },
      {
        title: 'Rottweiler — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/rottweiler/',
      },
    ],
    zhUncertainties: [
      '体长为头尾长度；公犬明显大于母犬。',
      '“罗马赶牛犬”血统是品种传统叙述，早期细节难以直接考证。',
    ],
    enUncertainties: [
      'The length covers nose to tail; males are clearly larger than females.',
      'The “Roman cattle dog” ancestry is a breed tradition whose early details cannot be directly verified.',
    ],
    accent: { strong: '#3f3630', soft: '#cfc2b2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'santa-claus',
    zhName: '圣诞老人',
    enName: 'Santa Claus',
    zhLabel: '节日传说角色',
    enLabel: 'Festive legend character',
    zhVisible: '看看他雪白的胡子和红色套装，再找找腰带上亮亮的大方扣。',
    enVisible:
      'Look at his snowy beard and red suit, then find the big shiny buckle on his belt.',
    zhSentences: [
      '这是圣诞老人，传说中平安夜给孩子们送礼物的白胡子爷爷。',
      '据说他驾着驯鹿雪橇，一夜之间跑遍全世界。',
    ],
    enSentences: [
      'This is Santa Claus, the white-bearded grandfather who, legend says, delivers presents on Christmas Eve.',
      'He is said to fly a reindeer sleigh around the whole world in a single night.',
    ],
    zhPron: 'shèng dàn lǎo rén',
    enPron: 'SAN-ta KLAWZ',
    zhPeriod: '传说角色（原型为 4 世纪主教，现代形象定型于 19 世纪）',
    enPeriod: 'Legendary figure (4th-century bishop origins; modern image settled in the 19th century)',
    zhRegions: ['故事源于欧洲', '形象流行于全世界'],
    enRegions: ['story origins in Europe', 'known worldwide'],
    size: { kind: 'body-length', minMeters: 1.6, maxMeters: 1.9 },
    diet: 'omnivore',
    zhParent:
      '圣诞老人的原型是 4 世纪小亚细亚米拉城的主教圣尼古拉斯，传说他喜欢悄悄送礼物给需要的人。荷兰人把他叫作“圣塔克劳斯”，随移民漂洋过海到了美洲；1823 年的诗《圣尼古拉斯来访》为他配上了驯鹿雪橇和烟囱，19 世纪的插画又给他穿上了红衣白边的大棉袄。今天他成了全世界孩子圣诞节最期待的客人。',
    enParent:
      'Santa Claus began as Saint Nicholas, a 4th-century bishop of Myra in Asia Minor who, tradition says, secretly gave gifts to people in need. Dutch settlers knew him as Sinterklaas and carried the story to the Americas; the 1823 poem “A Visit from St. Nicholas” gave him a reindeer sleigh and a chimney, and 19th-century illustrators dressed him in a red suit trimmed with white fur. Today he is the guest children all over the world look forward to most at Christmas.',
    sources: [
      {
        title: 'Santa Claus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/topic/Santa-Claus',
      },
      {
        title: 'Santa Claus — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Santa_Claus',
      },
    ],
    zhUncertainties: [
      '本条目为非动物的虚构节日角色，仅作草稿展示；正式收录需要单独的版权与品牌审查。',
      '“可口可乐广告创造了红衣圣诞老人”是常见误解，红衣形象在广告出现前已有，广告只是让它更加深入人心。',
    ],
    enUncertainties: [
      'This entry is a fictional festive character rather than an animal and stays a draft; publication would need its own rights and branding review.',
      'The claim that Coca-Cola advertising invented the red suit is a common misconception — the suit predates the adverts, which only made it more famous.',
    ],
    accent: { strong: '#a8232b', soft: '#f2dcd8' },
    habitat: 'land',
    atmosphere: 'ice',
  },
  {
    slug: 'short-haired-cat',
    zhName: '短毛猫',
    enName: 'Domestic Shorthair',
    zhLabel: '家猫（短毛类型）',
    enLabel: 'Domestic cat (shorthair type)',
    zhVisible: '看它一身紧致的短毛和一对亮晶晶的眼睛，像随时准备起跳的小猎手。',
    enVisible:
      'Look at its sleek short coat and shining eyes — a little hunter always ready to pounce.',
    zhSentences: [
      '这是短毛猫，不是某一个品种，而是千千万万只“混血”家猫的统称。',
      '短毛好打理，跳跃和捕鼠的本领也一点不含糊。',
    ],
    enSentences: [
      'This is the domestic shorthair — not a single breed, but the name for millions of mixed-ancestry house cats.',
      'The easy-care coat comes with full-strength pouncing and mousing skills.',
    ],
    zhPron: 'duǎn máo māo',
    enPron: 'duh-MES-tik SHORT-hair',
    zhPeriod: '现代（家猫驯化约一万年）',
    enPeriod: 'Present day (cats domesticated about ten thousand years ago)',
    zhRegions: ['世界各地家庭'],
    enRegions: ['homes worldwide'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '家猫的祖先是非洲野猫，大约一万年前在近东的农田边和人类结缘——谷仓里的老鼠是最好的“介绍信”。短毛是猫的“原始款”，长毛是后来才出现的突变。猫的胡须是精密的“触角”，能判断缝隙能不能钻过去；它的耳朵还能转到将近 180 度，听见人耳完全听不到的细小声音。',
    enParent:
      'House cats descend from the African wildcat, befriending humans about ten thousand years ago at Near Eastern farmyards — the mice in the grain stores made the best introduction. Short hair is the cat’s “original edition”, with long coats appearing later as a mutation. A cat’s whiskers are sensitive aerials that judge whether a gap is wide enough, and its ears swivel almost 180 degrees to catch sounds far too faint for human ears.',
    sources: [
      {
        title: 'Cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cat',
      },
      {
        title: 'Domestic short-haired cat — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Domestic_short-haired_cat',
      },
    ],
    zhUncertainties: [
      '体长含尾；不同个体之间体型差异很大。',
      '“短毛猫”指毛长类型而非品种，本模型的花色只是其中一种。',
    ],
    enUncertainties: [
      'The length includes the tail; sizes vary a great deal between individuals.',
      '“Domestic shorthair” names a coat type, not a breed; this model’s pattern is just one of many.',
    ],
    accent: { strong: '#6f6257', soft: '#e2d8d0' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'tiger-ar',
    zhName: '老虎（AR 版）',
    enName: 'Tiger (AR Model)',
    zhLabel: '大型猫科动物（虎）',
    enLabel: 'Big cat (tiger)',
    zhVisible: '看看它身上的条纹——连皮肤上都有，而且每一只的图案都不一样。',
    enVisible:
      'Look at its stripes — they are printed on the skin too, and no two tigers share the same pattern.',
    zhSentences: [
      '这是老虎，世界上最大的猫科动物。',
      '它和大多数猫不一样，特别爱游泳，天热时整天泡在河里。',
    ],
    enSentences: [
      'This is the tiger, the largest cat in the world.',
      'Unlike most cats it loves swimming and will soak in a river all day in hot weather.',
    ],
    zhPron: 'lǎo hǔ',
    enPron: 'TY-ger',
    zhPeriod: '现代（虎属延续约 200 万年）',
    enPeriod: 'Present day (tiger lineage about 2 million years old)',
    zhRegions: ['亚洲的森林与草地'],
    enRegions: ['forests and grasslands of Asia'],
    size: { kind: 'body-length', minMeters: 2.5, maxMeters: 3.5 },
    diet: 'carnivore',
    zhParent:
      '老虎是独来独往的丛林之王：它身上的条纹不只是毛上的花纹，皮肤上也有，就像人的指纹一样独一无二。别看它块头大，走路几乎不出声——利爪平时收在肉垫里。它还是猫科里的游泳健将，能横渡宽阔的河流。每只老虎都有自己的领地，用抓树痕和气味做“界碑”，吼叫声能传到两公里外。',
    enParent:
      'The tiger is the lone king of the jungle: its stripes are not merely coat-deep but printed on the skin, unique to every individual like a fingerprint. Huge as it is, it walks almost silently on paws with retractable claws, and it is the cat family’s champion swimmer, crossing wide rivers with ease. Each tiger patrols its own territory, marking borders with claw scratches and scent, and its roar carries two kilometres.',
    sources: [
      {
        title: 'Tiger — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/tiger',
      },
      {
        title: 'Tiger — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/tiger',
      },
    ],
    zhUncertainties: [
      '本条目与既有“老虎”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长含尾，亚种之间差异很大：苏门答腊虎最小，东北虎最大。',
    ],
    enUncertainties: [
      'This entry and the existing “Tiger” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The length includes the tail and varies widely between subspecies, from the small Sumatran tiger to the huge Siberian tiger.',
    ],
    accent: { strong: '#b3591f', soft: '#f3d6b5' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'timber-wolf',
    zhName: '森林狼',
    enName: 'Timber Wolf',
    zhLabel: '灰狼（北美森林种群）',
    enLabel: 'Grey wolf (North American forest population)',
    zhVisible: '看它竖起的耳朵和蓬松的大尾巴——它就是家狗的野生近亲。',
    enVisible:
      'Look at its pricked ears and bushy tail — this is the wild cousin of every pet dog.',
    zhSentences: [
      '这是森林狼，生活在北美森林里的灰狼。',
      '狼群其实是一个家庭：狼爸爸、狼妈妈和不同年龄的孩子。',
    ],
    enSentences: [
      'This is the timber wolf, the grey wolf of North American forests.',
      'A wolf pack is really a family: father, mother and children of different ages.',
    ],
    zhPron: 'sēn lín láng',
    enPron: 'TIM-ber WUULF',
    zhPeriod: '现代（灰狼延续数十万年）',
    enPeriod: 'Present day (grey wolf hundreds of thousands of years old)',
    zhRegions: ['北美洲北部森林'],
    enRegions: ['northern forests of North America'],
    size: { kind: 'body-length', minMeters: 1.2, maxMeters: 2.0 },
    diet: 'carnivore',
    zhParent:
      '森林狼是灰狼的北美森林种群。狼群是温暖的大家庭，由一对狼父母和它们的孩子组成，捕猎时分工合作，围追鹿和驼鹿。它们用嗥叫互相联络、集合队伍，一声嗥叫在森林里能传好几公里。所有的家狗——从吉娃娃到大丹犬——都是灰狼驯化而来的后代。1995 年狼群重返黄石公园后，河边的柳树重新长起来，整个山谷的生态都活跃了起来。',
    enParent:
      'Timber wolves are the grey wolves of North American forests. A pack is a close family built around a parent pair and their children, who cooperate to hunt deer and moose. Wolves howl to keep in touch and gather the team, and a howl carries for kilometres through the trees. Every pet dog, from Chihuahua to Great Dane, descends from the grey wolf. After wolves returned to Yellowstone in 1995, willows grew back along the rivers and the whole valley’s web of life livened up.',
    sources: [
      {
        title: 'Wolf — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/wolf',
      },
      {
        title: 'Gray wolf — 美国国家公园管理局（NPS）',
        url: 'https://www.nps.gov/subjects/wolves/index.htm',
      },
    ],
    zhUncertainties: [
      '“森林狼”通常指北美的灰狼种群，并非独立物种，体型随地区变化。',
      '黄石公园的“狼群效应”在学界仍有讨论，河道变化还受其他因素影响。',
    ],
    enUncertainties: [
      '“Timber wolf” usually means North American grey wolf populations rather than a separate species, and size varies by region.',
      'Yellowstone’s “wolf effect” is still debated by scientists, as river changes involve other factors too.',
    ],
    accent: { strong: '#5d6166', soft: '#d9dcdf' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'mei-panda',
    zhName: '小美（红熊猫形态）',
    enName: 'Mei (Red Panda Form)',
    zhLabel: '动画角色（《青春变形记》）',
    enLabel: 'Animated character (Turning Red)',
    zhVisible: '看看她蓬松的红棕色绒毛和圆圆的耳朵，再找找她有点不好意思的表情。',
    enVisible:
      'Look at her fluffy red-brown fur and round ears, then find her slightly embarrassed expression.',
    zhSentences: [
      '这是小美，电影《青春变形记》里一激动就会变成红熊猫的女孩。',
      '变身后的她毛茸茸、软乎乎，连烦恼也跟着“膨胀”。',
    ],
    enSentences: [
      'This is Mei, the girl from the film Turning Red who turns into a red panda whenever her feelings boil over.',
      'In panda form she is big, fluffy and soft — and so are her troubles.',
    ],
    zhPron: 'xiǎo měi',
    enPron: 'MAY',
    zhPeriod: '虚构角色（电影 2022 年上映）',
    enPeriod: 'Fictional character (film released in 2022)',
    zhRegions: ['虚构故事（加拿大多伦多）'],
    enRegions: ['fictional story (set in Toronto, Canada)'],
    size: { kind: 'body-length', minMeters: 1.8, maxMeters: 2.5 },
    diet: 'omnivore',
    zhParent:
      '在皮克斯电影《青春变形记》里，13 岁的李小美一激动就会变成一只巨大的红熊猫——这是家族女性代代相传的“成长考验”。电影用毛茸茸的变身讲每个孩子都会遇到的事：大情绪来了怎么办？导演石之予把自己华人家庭的成长记忆放进了故事。现实中的红熊猫是喜马拉雅山里濒危的小动物，电影走红后，更多人开始关注它们的保护。',
    enParent:
      'In Pixar’s Turning Red, thirteen-year-old Mei Lee turns into a giant red panda whenever her emotions boil over — a coming-of-age “test” passed down through the women of her family. The fluffy transformation tells a story every child knows: what to do when big feelings arrive. Director Domee Shi wove in memories of her own Chinese-Canadian upbringing. The real red panda is an endangered Himalayan animal, and the film’s fame has brought new attention to protecting it.',
    sources: [
      {
        title: 'Turning Red — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Turning_Red',
      },
      {
        title: 'Turning Red — 互联网电影数据库（IMDb）',
        url: 'https://www.imdb.com/title/tt8097060/',
      },
    ],
    zhUncertainties: [
      '本条目为迪士尼/皮克斯动画的虚构角色，仅作草稿展示；正式收录需要版权方授权与品牌审查。',
      '电影中红熊猫形态远高于成年人，本模型为较小的可爱版本，尺寸按模型近似。',
    ],
    enUncertainties: [
      'This entry is a fictional character from a Disney/Pixar film and stays a draft; publication would need the rights holder’s licence and brand review.',
      'In the film the panda form towers over adults; this model is a smaller, cuddlier version, so the size follows the model.',
    ],
    accent: { strong: '#b5482e', soft: '#f3cfc2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'white-tailed-deer',
    zhName: '白尾鹿',
    enName: 'White-tailed Deer',
    zhLabel: '鹿科动物（白尾鹿）',
    enLabel: 'Deer family (white-tailed deer)',
    zhVisible: '看它尾巴的背面——受惊逃跑时会高高竖起，露出一面白色“小旗帜”。',
    enVisible:
      'Look at the underside of its tail — when it bolts, the tail goes up like a little white flag.',
    zhSentences: [
      '这是白尾鹿，北美洲最常见的鹿。',
      '刚出生的小鹿身上有白色斑点，像撒了一层糖霜。',
    ],
    enSentences: [
      'This is the white-tailed deer, the most common deer of North America.',
      'Newborn fawns wear white spots like a dusting of sugar.',
    ],
    zhPron: 'bái wěi lù',
    enPron: 'WYT-tayld DEER',
    zhPeriod: '现代（鹿科延续数千万年）',
    enPeriod: 'Present day (deer family tens of millions of years old)',
    zhRegions: ['北美洲', '南美洲北部'],
    enRegions: ['North America', 'northern South America'],
    size: { kind: 'body-length', minMeters: 1.5, maxMeters: 2.1 },
    diet: 'herbivore',
    zhParent:
      '白尾鹿受惊时会高高竖起尾巴，露出雪白的尾底，像一面小旗子给身后的同伴“报警”。刚出生的小鹿趴在草丛里一动不动，白色斑点是它的“隐身衣”。公鹿的鹿角每年冬天脱落、春天重新长出，是动物界长得最快的骨头之一。它的弹跳力惊人，能跃过两米高的障碍，一口气跳出八九米远。',
    enParent:
      'When a white-tailed deer bolts, it hoists its tail to show the snowy underside — a little flag warning every deer behind it. Newborn fawns freeze among the grass, their white spots working as camouflage. Bucks shed their antlers each winter and regrow them in spring; antlers are among the fastest-growing bones in the animal kingdom. Their jumping is astonishing: a deer can clear a two-metre obstacle and bound eight or nine metres in one leap.',
    sources: [
      {
        title: 'White-tailed deer — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/white-tailed-deer',
      },
      {
        title: 'White-tailed deer — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/White-tailed_deer',
      },
    ],
    zhUncertainties: [
      '本条目与既有“鹿”草稿为不同物种的不同模型，正式收录前将复核种类区分。',
      '体型南北差异很大，北方种群通常更大。',
    ],
    enUncertainties: [
      'This entry and the existing “Deer” draft are different species and different models; the identification split will be rechecked before publication.',
      'Size varies greatly across its range, with northern populations usually larger.',
    ],
    accent: { strong: '#8a6b47', soft: '#e8d8c2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'arctic-fox',
    zhName: '北极狐',
    enName: 'Arctic Fox',
    zhLabel: '犬科动物（北极狐）',
    enLabel: 'Canine family (Arctic fox)',
    zhVisible: '看它小小的圆耳朵——耳朵小是为了在冰天雪地里少散失热量。',
    enVisible:
      'Look at its small rounded ears — they stay small to lose less heat in the ice and snow.',
    zhSentences: [
      '这是北极狐，冬天一身雪白、夏天换成灰褐色的“换装大师”。',
      '它蓬松的大尾巴睡觉时正好当被子盖。',
    ],
    enSentences: [
      'This is the Arctic fox, a master of costume change: snow-white in winter, grey-brown in summer.',
      'It wraps its big fluffy tail around itself like a quilt when it sleeps.',
    ],
    zhPron: 'běi jí hú',
    enPron: 'ARK-tik FOKS',
    zhPeriod: '现代（北极狐延续数十万年）',
    enPeriod: 'Present day (Arctic fox hundreds of thousands of years old)',
    zhRegions: ['北极圈周边的冻原'],
    enRegions: ['tundra around the Arctic Circle'],
    size: { kind: 'body-length', minMeters: 0.75, maxMeters: 1.1 },
    diet: 'carnivore',
    zhParent:
      '北极狐的冬装和夏装是两件完全不同的“外套”：冬天的白毛既保暖又是雪地里的迷彩，夏天的灰褐色则融入冻原的岩石和苔藓。它的毛皮保暖本领在哺乳动物里数一数二，能扛住零下五十度的严寒；尾巴又大又厚，睡觉时正好当被子。它还是“捾漏专家”，常跟着北极熊吃剩饭，也会跳起来砸进雪里抓旅鼠。',
    enParent:
      'The Arctic fox owns two completely different coats: winter white that insulates and hides it in snow, and summer grey-brown that melts into tundra rock and lichen. Its fur is among the best insulations in the mammal world, shrugging off fifty degrees of frost, and its thick tail doubles as a quilt at night. It is also a great scavenger, following polar bears for leftovers and diving nose-first into snow to catch lemmings.',
    sources: [
      {
        title: 'Arctic fox — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Arctic-fox',
      },
      {
        title: 'Arctic fox — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/arctic-fox',
      },
    ],
    zhUncertainties: [
      '体长含尾；旅鼠多的年份一窝可生十几只幼崽，旅鼠少时几乎不繁殖。',
      '部分种群的北极狐冬季会迁徙数百公里，行为差异很大。',
    ],
    enUncertainties: [
      'The length includes the tail; in good lemming years a litter can hold more than a dozen cubs, while in lean years foxes may barely breed.',
      'Some populations migrate hundreds of kilometres each winter, so behaviour varies widely.',
    ],
    accent: { strong: '#7d8a94', soft: '#e7edf0' },
    habitat: 'land',
    atmosphere: 'ice',
  },
  {
    slug: 'bumblebee',
    zhName: '熊蜂',
    enName: 'Bumblebee',
    zhLabel: '蜜蜂科（熊蜂属）',
    enLabel: 'Bee family (bumblebee)',
    zhVisible: '听听它嗡嗡的“发动机声”——它靠振动把花粉从花朵里摇出来。',
    enVisible:
      'Listen to its buzzing “engine” — it shakes pollen out of flowers by vibrating its muscles.',
    zhSentences: [
      '这是熊蜂，圆滚滚、毛茸茸的“飞行小暖炉”。',
      '它能把身体预热到四十度，凉爽的清晨它是花丛里第一个开工的。',
    ],
    enSentences: [
      'This is the bumblebee, a round, fluffy “little flying stove”.',
      'It can warm its body to forty degrees, making it the first to work on a cool morning.',
    ],
    zhPron: 'xióng fēng',
    enPron: 'BUM-bal-bee',
    zhPeriod: '现代（熊蜂属延续约三千万年）',
    enPeriod: 'Present day (bumblebees about 30 million years old)',
    zhRegions: ['北半球温带与山地'],
    enRegions: ['temperate and mountain regions of the Northern Hemisphere'],
    size: { kind: 'body-length', minMeters: 0.015, maxMeters: 0.04 },
    diet: 'herbivore',
    zhParent:
      '熊蜂浑身覆盖着厚绒毛，起飞前先靠颤抖把飞行肌加热到四十度左右，所以凉飕飕的清晨它是花丛里最早的客人。它会“嗡嗡授粉”：抓住花朵快速振动，把番茄、草莓这类植物藏在管子里的花粉摇出来——温室里农民专门请熊蜂干这份活。和蜜蜂的常年大王国不同，熊蜂的家族一年一换，只有蜂后能钻进土里过冬，来年春天重新开张。',
    enParent:
      'Wrapped in thick velvet, a bumblebee shivers its flight muscles up to about forty degrees before take-off, which makes it the earliest visitor to flowers on a chilly morning. It “buzz-pollinates”: gripping a bloom and vibrating fast to shake pollen out of tubes — so greenhouse farmers hire bumblebees for tomatoes and strawberries. Unlike the honeybee’s year-round kingdom, a bumblebee colony lasts a single season; only the queen overwinters underground to found a new family in spring.',
    sources: [
      {
        title: 'Bumblebee — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/bumblebee',
      },
      {
        title: 'Bumblebee — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Bumblebee',
      },
    ],
    zhUncertainties: [
      '体长区间涵盖蜂后与工蜂；全球约 250 种熊蜂，本条目按属介绍。',
      '“熊蜂不该飞得起来”是流传的误解，它的飞行完全符合空气动力学。',
    ],
    enUncertainties: [
      'The size range covers queens and workers; about 250 bumblebee species exist worldwide, so this entry describes the genus.',
      'The old claim that “bumblebees shouldn’t be able to fly” is a myth — their flight fits the laws of aerodynamics perfectly.',
    ],
    accent: { strong: '#c9a227', soft: '#f2e7bd' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'lynx',
    zhName: '猞猁',
    enName: 'Eurasian Lynx',
    zhLabel: '猫科动物（猞猁属）',
    enLabel: 'Wild cat (lynx family)',
    zhVisible: '看它耳朵尖上那两撮黑色的“天线毛”，那是猞猁的名片。',
    enVisible:
      'Look at the two black “antenna tufts” on its ear tips — the lynx’s calling card.',
    zhSentences: [
      '这是猞猁，北欧森林里神出鬼没的大脚猫。',
      '它宽大的脚掌像雪地靴，能悄悄走过深雪不陷下去。',
    ],
    enSentences: [
      'This is the lynx, the shadowy big-footed cat of northern forests.',
      'Its broad paws work like snowshoes, letting it tiptoe across deep snow.',
    ],
    zhPron: 'shē lì',
    enPron: 'YOOR-ay-zhun LINX',
    zhPeriod: '现代（猞猁属延续数百万年）',
    enPeriod: 'Present day (lynx lineage millions of years old)',
    zhRegions: ['欧洲与亚洲北部森林'],
    enRegions: ['forests of northern Europe and Asia'],
    size: { kind: 'body-length', minMeters: 0.8, maxMeters: 1.3 },
    diet: 'carnivore',
    zhParent:
      '猞猁是害羞的独行猎手，耳朵尖的黑色长毛像两根天线，帮它精确判断声音的方位。它的脚掌又宽又厚，像自带雪地靴，在深雪上追野兔时轻快得像滑冰。欧洲不少国家曾把猞猁捕到绝迹，近几十年重新引进后森林慢慢恢复了平衡——它是守护森林的“隐形猫”。',
    enParent:
      'The lynx is a shy, solitary hunter; the long black hairs on its ear tips work like antennas, helping it pinpoint exactly where a sound comes from. Its wide, thickly furred paws act as built-in snowshoes, letting it skim over deep snow in pursuit of hares. Many European countries once hunted the lynx to extinction, and decades of reintroduction are slowly returning balance to the forests — it is the invisible cat that guards them.',
    sources: [
      {
        title: 'Lynx — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/lynx-mammal',
      },
      {
        title: 'Eurasian lynx — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Eurasian_lynx',
      },
    ],
    zhUncertainties: [
      '本模型属北欧合集，应为欧亚猞猁；与加拿大猞猁外形相近，正式收录前将复核。',
      '猎物构成随地区变化：北欧以狍和野兔为主。',
    ],
    enUncertainties: [
      'This model comes from the Nordic collection and should be the Eurasian lynx; it resembles the Canadian lynx, so identification will be rechecked before publication.',
      'Prey varies by region; in northern Europe roe deer and hares dominate.',
    ],
    accent: { strong: '#8a7a63', soft: '#e6dece' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'porpoise',
    zhName: '鼠海豚',
    enName: 'Harbour Porpoise',
    zhLabel: '齿鲸（鼠海豚科）',
    enLabel: 'Toothed whale (porpoise family)',
    zhVisible: '看它小小的三角形背鳍，像一把小铲子立在背上。',
    enVisible:
      'Look at its small triangular dorsal fin — like a little spade standing on its back.',
    zhSentences: [
      '这是鼠海豚，北欧海域里害羞的小鲸鱼。',
      '它很少跳出海面，换气时只轻轻冒头，像海里的“小幽灵”。',
    ],
    enSentences: [
      'This is the harbour porpoise, the shy little whale of northern seas.',
      'It seldom leaps; it just surfaces quietly for a breath, like a tiny ghost of the sea.',
    ],
    zhPron: 'shǔ hǎi tún',
    enPron: 'HAR-ber POR-pus',
    zhPeriod: '现代（鼠海豚科延续数百万年）',
    enPeriod: 'Present day (porpoise family millions of years old)',
    zhRegions: ['北大西洋与北太平洋沿岸冷水海域'],
    enRegions: ['cold coastal waters of the North Atlantic and North Pacific'],
    size: { kind: 'body-length', minMeters: 1.4, maxMeters: 1.9 },
    diet: 'carnivore',
    zhParent:
      '鼠海豚是最小的鲸类之一，和海豚是表亲却大不相同：个子更小、嘴更短，牙齿像小铲子而不是圆锥。它生性害羞，几乎不跳跃、不追船，浮出水面时只发出轻轻的喷气声，水手们叫它“海里的猪哼哼”。它用回声定位在浑浊的近海找小鱼小虾。渔网缠绕是它最大的威胁，许多渔船已经开始使用声学警报器帮它躲开。',
    enParent:
      'The harbour porpoise is one of the smallest whales, a cousin of the dolphins but built differently: smaller, with a shorter beak and spade-shaped teeth instead of conical ones. Shy by nature, it hardly ever leaps or rides bow waves, surfacing with a soft puff that earned it the sailor’s nickname “sea pig”. It hunts small fish in murky coastal waters using echolocation. Nets are its greatest danger, and many fishing fleets now fit acoustic pingers to help it steer clear.',
    sources: [
      {
        title: 'Porpoise — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/porpoise',
      },
      {
        title: 'Harbour porpoise — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Harbour_porpoise',
      },
    ],
    zhUncertainties: [
      '本模型的源文件曾出现蒙皮权重缺陷，转换时已做确定性修复；正式收录前将复核动画效果。',
      '北大西洋、黑海等不同种群体型和习性有差异。',
    ],
    enUncertainties: [
      'This model’s source file carried a skin-weights defect that was repaired deterministically during conversion; the animation will be rechecked before publication.',
      'Populations from the North Atlantic to the Black Sea differ in size and habits.',
    ],
    accent: { strong: '#3f5d70', soft: '#c6d6e1' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'woodpecker',
    zhName: '啄木鸟',
    enName: 'Woodpecker',
    zhLabel: '鸟类（啄木鸟科）',
    enLabel: 'Bird (woodpecker family)',
    zhVisible: '看它像凿子一样直直的嘴，和撑在树干上当“第三条腿”的硬尾巴。',
    enVisible:
      'Look at its chisel-straight beak and the stiff tail feathers propped against the trunk like a “third leg”.',
    zhSentences: [
      '这是啄木鸟，森林里的“树木医生”。',
      '它每秒能敲树二十下，脑袋自带“安全帽”。',
    ],
    enSentences: [
      'This is the woodpecker, the forest’s “tree doctor”.',
      'It can drum a tree twenty times a second, thanks to a built-in crash helmet.',
    ],
    zhPron: 'zhuó mù niǎo',
    enPron: 'WUUD-pek-er',
    zhPeriod: '现代（啄木鸟科延续数千万年）',
    enPeriod: 'Present day (woodpecker family tens of millions of years old)',
    zhRegions: ['欧洲、亚洲与北美洲的森林'],
    enRegions: ['forests of Europe, Asia and North America'],
    size: { kind: 'body-length', minMeters: 0.2, maxMeters: 0.25 },
    diet: 'omnivore',
    zhParent:
      '啄木鸟敲树时的冲击力相当于火箭发射的好几倍，但它的头骨里藏着“安全帽”：海绵状骨头和一条绕过头骨的长舌头像安全带一样吸走冲击。它的两根脚趾朝前、两根朝后，像钳子一样扣住树皮，硬尾巴撑住身体。它啄出的树洞第二年往往成了猫头鹰和松鼠的新家——啄木鸟是森林里的“首席施工队”。',
    enParent:
      'A woodpecker’s drumming hits with several times the g-force of a rocket launch, yet inside its skull sits a crash helmet: spongy bone and an extra-long tongue that wraps round the head work like a seat belt to soak up the shock. Two toes point forward and two back, gripping bark like pliers, while a stiff tail props up the body. Old woodpecker holes often become next year’s homes for owls and squirrels — the woodpecker is the forest’s chief construction crew.',
    sources: [
      {
        title: 'Woodpecker — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/woodpecker',
      },
      {
        title: 'Woodpecker — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Woodpecker',
      },
    ],
    zhUncertainties: [
      '本模型近似大斑啄木鸟，种类鉴定以视觉复核为准。',
      '敲击频率与冲击力的数字来自高速摄影研究，不同研究略有差异。',
    ],
    enUncertainties: [
      'This model resembles the great spotted woodpecker; the species will be confirmed visually before publication.',
      'Drumming-rate and g-force figures come from high-speed studies and vary between measurements.',
    ],
    accent: { strong: '#2f2b33', soft: '#ded6da' },
    habitat: 'air',
    atmosphere: 'air',
  },
]
