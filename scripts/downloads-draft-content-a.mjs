// Per-animal draft content for the model-downloads batch (part A: root-level
// single models). Consumed by scripts/generate-downloads-draft-packages.mjs.
// Facts follow family-friendly popular-science ranges; every uncertainty is
// echoed in editorial notes. English copy uses British spellings.
export const DOWNLOADS_CONTENT_A = [
  {
    slug: 'african-leopard',
    zhName: '非洲豹',
    enName: 'African Leopard',
    zhLabel: '大型猫科动物',
    enLabel: 'Big cat',
    zhVisible: '找找它身上的玫瑰花形斑点，那是每只豹都独一无二的花纹。',
    enVisible:
      'Look for the rosette-shaped spots on its coat — every leopard has its own unique pattern.',
    zhSentences: [
      '这是非洲豹，一位会把猎物搬上树的大猫。',
      '它满身玫瑰花形的斑点，帮它藏进草丛和树影里。',
    ],
    enSentences: [
      'This is the African leopard, a big cat that carries its prey up into trees.',
      'Its rosette spots help it hide among grass and tree shadows.',
    ],
    zhPron: 'fēi zhōu bào',
    enPron: 'AF-ri-can LE-pard',
    zhPeriod: '现代（豹属已延续数百万年）',
    enPeriod: 'Present day (leopard lineage millions of years old)',
    zhRegions: ['非洲撒哈拉以南', '亚洲部分地区'],
    enRegions: ['Sub-Saharan Africa', 'parts of Asia'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.9 },
    diet: 'carnivore',
    zhParent:
      '非洲豹是攀爬高手：强壮的肩膀和可伸缩的利爪让它能把比自身体重还重的猎物拖上树，避免被狮子和鬣狗抢走。它身上的“玫瑰花斑”不是纯圆点，而是一圈圈像花朵的空心图案，每只豹的斑纹都像指纹一样独一无二。豹还是全能猎手，会游泳、会爬树，也能在黑暗中看清猎物。',
    enParent:
      'African leopards are champion climbers: powerful shoulders and retractable claws let them haul prey heavier than themselves up into trees, safely away from lions and hyenas. Their “rosettes” are not plain dots but hollow, flower-like rings, and each leopard’s pattern is as unique as a fingerprint. Leopards are all-round hunters that swim, climb and see well in the dark.',
    sources: [
      {
        title: 'Leopard — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/leopard',
      },
      {
        title: 'Leopard — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/leopard',
      },
    ],
    zhUncertainties: [
      '体长区间为雌雄合计的头尾长度，雄豹通常比雌豹大约三分之一。',
      '“非洲豹”指非洲的豹种群；豹在整个非洲和亚洲都有分布。',
    ],
    enUncertainties: [
      'The size range covers head-to-tail length for both sexes; males are usually about a third larger than females.',
      '“African leopard” refers to Africa’s leopard populations; leopards live across Africa and Asia.',
    ],
    accent: { strong: '#a07b3f', soft: '#e8d5b0' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'alligator-ar',
    zhName: '美洲短吻鳄（AR 版）',
    enName: 'American Alligator (AR Model)',
    zhLabel: '大型爬行动物（短吻鳄科）',
    enLabel: 'Large reptile (alligator family)',
    zhVisible: '数数看，它笑的时候露出了多少颗圆锥形的牙齿。',
    enVisible:
      'Count how many cone-shaped teeth show when it rests with its mouth open.',
    zhSentences: [
      '这是美洲短吻鳄，一种喜欢趴在河边晒太阳的大爬行动物。',
      '它宽宽的吻部像一只长靴，牙齿是圆锥形的，用来咬住滑滑的鱼。',
    ],
    enSentences: [
      'This is the American alligator, a big reptile that loves sunbathing on riverbanks.',
      'Its broad snout is shaped like a boot, and its cone-shaped teeth are made for gripping slippery fish.',
    ],
    zhPron: 'měi zhōu duǎn wěn è',
    enPron: 'a-MER-i-can AL-i-gay-ter',
    zhPeriod: '现代（短吻鳄家族已延续约 8000 万年）',
    enPeriod: 'Present day (alligator family about 80 million years old)',
    zhRegions: ['美国东南部'],
    enRegions: ['south-eastern United States'],
    size: { kind: 'body-length', minMeters: 2.5, maxMeters: 4.0 },
    diet: 'carnivore',
    zhParent:
      '美洲短吻鳄是湿地里的“工程师”：它们挖出的水坑在旱季会成为鱼、龟和许多小鸟的避难所，所以保护短吻鳄也就是保护了整个湿地。短吻鳄的血亲可以追溯到恐龙时代，但它宽而圆的吻部与大尖牙的鳄鱼不同，咬住猎物后靠翻滚把肉撕下来。天冷时它会挖洞冬眠，洞口后来会长成新的小水塘。',
    enParent:
      'American alligators are wetland engineers: the ponds they dig become refuges for fish, turtles and birds in the dry season, so protecting alligators protects the whole wetland. Their family tree stretches back to the age of dinosaurs, but their broad, rounded snout differs from the long, pointy snouts of crocodiles. In cold weather they dig burrows to wait out winter, and old burrows often grow into new little ponds.',
    sources: [
      {
        title: 'American alligator — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/American-alligator',
      },
      {
        title: 'American alligator — 美国国家公园管理局（NPS）',
        url: 'https://www.nps.gov/subjects/reptiles/american-alligator.htm',
      },
    ],
    zhUncertainties: [
      '本条目与既有“鳄鱼（短吻鳄）”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长为成年雌雄合计区间；历史上记录过更长的个体。',
    ],
    enUncertainties: [
      'This entry and the existing “Alligator” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The size range covers adult females and males; longer historical individuals have been recorded.',
    ],
    accent: { strong: '#3f5245', soft: '#d3e0d4' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'alpine-goat',
    zhName: '阿尔卑斯山羊',
    enName: 'Alpine Goat',
    zhLabel: '家养山羊（阿尔卑斯品种）',
    enLabel: 'Domestic goat (Alpine breed)',
    zhVisible: '看看它向后弯曲的角和竖起的耳朵，那是登山高手的装备。',
    enVisible:
      'Look at its backward-curving horns and upright ears — the gear of a mountain athlete.',
    zhSentences: [
      '这是阿尔卑斯山羊，来自欧洲高山地区的家养山羊品种。',
      '它的蹄子像登山鞋一样，能在陡峭的岩壁上稳稳站立。',
    ],
    enSentences: [
      'This is the Alpine goat, a domestic goat breed from the high mountains of Europe.',
      'Its hooves work like climbing shoes, gripping steep rocky cliffs with ease.',
    ],
    zhPron: 'ā ěr bēi sī shān yáng',
    enPron: 'AL-pine GOHT',
    zhPeriod: '现代（家养历史数百年）',
    enPeriod: 'Present day (domesticated for hundreds of years)',
    zhRegions: ['欧洲阿尔卑斯山区', '世界各地牧场'],
    enRegions: ['European Alps', 'farms worldwide'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.4 },
    diet: 'herbivore',
    zhParent:
      '阿尔卑斯山羊是瑞士和法国阿尔卑斯山区培育出的著名奶山羊，能适应寒冷的高山气候，产奶量很大，所以被带到了世界各地的牧场。山羊的蹄子外硬内软，分成两瓣还能侧向张开，就像自带两双抓岩鞋。它们几乎什么都吃——草、嫩枝、树皮，连陡坡上的灌木也啃得干干净净。',
    enParent:
      'The Alpine goat is a famous dairy breed developed in the Swiss and French Alps, tough enough for cold mountain weather and such a generous milk-maker that farmers have carried it to pastures worldwide. A goat’s hoof is hard outside and soft inside, split in two and able to spread sideways, like built-in climbing shoes. Goats browse widely — grass, twigs, bark and even bushes clinging to steep slopes.',
    sources: [
      {
        title: 'Goat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/goat-mammal',
      },
      {
        title: 'Alpine goat — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Alpine_goat',
      },
    ],
    zhUncertainties: [
      '体长为成年羊的头尾长度；体重和体型随牧场选育差别较大。',
      '“阿尔卑斯山羊”既指家养奶羊品种，也常被用来称呼野生的阿尔卑斯野山羊（羱羊），本页以家养品种为准。',
    ],
    enUncertainties: [
      'The size range is adult head-to-tail length; weight and build vary a lot between farm lines.',
      '“Alpine goat” can also mean the wild Alpine ibex; this page follows the domestic dairy breed.',
    ],
    accent: { strong: '#7d6b52', soft: '#e3d8c4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'anglerfish',
    zhName: '鮟鱇鱼',
    enName: 'Anglerfish',
    zhLabel: '深海鱼类（鮟鱇目）',
    enLabel: 'Deep-sea fish (anglerfish order)',
    zhVisible: '找一找它头顶那根“钓鱼竿”，末端的小灯会一闪一闪。',
    enVisible:
      'Find the “fishing rod” on its head — the little light at the tip blinks in the dark.',
    zhSentences: [
      '这是鮟鱇鱼，住在黑漆漆的深海里的小小猎手。',
      '它头顶伸出一根钓鱼竿，竿尖的小灯会发光，把好奇的小鱼引过来。',
    ],
    enSentences: [
      'This is the anglerfish, a little hunter living in the pitch-black deep sea.',
      'A rod grows out of its head, and the glowing bulb at its tip lures curious little fish close.',
    ],
    zhPron: 'ān kāng yú',
    enPron: 'ANG-gler-fish',
    zhPeriod: '现代（深海鱼类，延续数千万年）',
    enPeriod: 'Present day (deep-sea lineage tens of millions of years old)',
    zhRegions: ['世界各大洋深海'],
    enRegions: ['deep oceans worldwide'],
    size: { kind: 'body-length', minMeters: 0.2, maxMeters: 1.0 },
    diet: 'carnivore',
    zhParent:
      '鮟鱇鱼头顶的“小灯笼”里住着会发光的细菌，光线其实是细菌制造的，这在漆黑的深海里就像一盏诱捕灯。它的大嘴里长着向内倒的长牙，猎物一旦被咬住就再也退不出去。深海寻找伴侣很难，有些种类的雄鱼会咬住雌鱼共同生活，成为海洋里最奇特的“一家人”。',
    enParent:
      'The anglerfish’s little lantern shelters glowing bacteria — the light itself is made by the microbes, working like a lure lamp in the pitch-dark deep sea. Long, backward-pointing teeth line its huge mouth, so prey that is bitten can never back out. Finding a partner in the deep sea is so hard that in some species the tiny male bites onto a female and stays there for life, one of the ocean’s strangest families.',
    sources: [
      {
        title: 'Anglerfish — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/anglerfish',
      },
      {
        title: 'Anglerfish — 美国国家海洋和大气管理局（NOAA）',
        url: 'https://oceanexplorer.noaa.gov/facts/anglerfish.html',
      },
    ],
    zhUncertainties: [
      '鮟鱇鱼是一个大家族，不同种类体型差别极大；本页给出常见深海种类的区间。',
      '发光细菌共生、雄鱼附着等行为仅见于部分种类，作为家族趣闻介绍。',
    ],
    enUncertainties: [
      'Anglerfishes are a large family with wildly different sizes; the range here covers common deep-sea species.',
      'Bacterial light and male attachment happen only in some species, presented as family-wide curiosities.',
    ],
    accent: { strong: '#24344d', soft: '#b8c8e0' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'arabian-horse',
    zhName: '阿拉伯马',
    enName: 'Arabian Horse',
    zhLabel: '家马（古老品种）',
    enLabel: 'Domestic horse (ancient breed)',
    zhVisible: '看它高高翘起的尾巴和精巧的头，跑起来像在跳舞。',
    enVisible:
      'Look at its high-carried tail and dainty head — it seems to dance when it runs.',
    zhSentences: [
      '这是阿拉伯马，世界上最古老的马品种之一。',
      '它体型轻盈，耐力惊人，古时候能穿越大沙漠传递消息。',
    ],
    enSentences: [
      'This is the Arabian horse, one of the oldest horse breeds in the world.',
      'Light and elegant, with astonishing stamina, it once crossed great deserts carrying messages.',
    ],
    zhPron: 'ā lā bó mǎ',
    enPron: 'a-RAY-bi-an HORS',
    zhPeriod: '现代（家养历史数千年）',
    enPeriod: 'Present day (domesticated for thousands of years)',
    zhRegions: ['阿拉伯半岛', '世界各地'],
    enRegions: ['Arabian Peninsula', 'worldwide'],
    size: { kind: 'shoulder-height', minMeters: 1.4, maxMeters: 1.6 },
    diet: 'herbivore',
    zhParent:
      '阿拉伯马在沙漠中与贝都因人共同生活了几千年，常被牵进帐篷躲避风沙，所以性格亲近人类、聪明又勇敢。它的高尾姿和凹鼻梁是全世界都认得出的标志，几乎所有现代赛马和骑乘马的血统书里都能找到它。宽大的鼻孔和肺让它特别擅长长距离奔跑，是耐力赛里的常胜将军。',
    enParent:
      'Arabian horses lived alongside Bedouin people in the desert for thousands of years, sometimes sheltering inside tents from sandstorms, so the breed grew people-friendly, clever and brave. Its high tail and dished face are recognised everywhere, and nearly every modern racehorse and riding breed traces back to Arabian blood. Wide nostrils and generous lungs make it a champion of long-distance endurance racing.',
    sources: [
      {
        title: 'Arabian horse — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Arabian-horse',
      },
      {
        title: 'Arabian horse — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Arabian_horse',
      },
    ],
    zhUncertainties: [
      '肩高为成年马区间；个别赛马个体更高。',
      '品种历史叙述基于贝都因口传传统，细节年代难以精确考证。',
    ],
    enUncertainties: [
      'The withers height covers typical adults; some racing individuals stand taller.',
      'Breed history follows Bedouin oral tradition, so exact dates are hard to pin down.',
    ],
    accent: { strong: '#97744a', soft: '#eedfc2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'ball-python',
    zhName: '球蟒',
    enName: 'Ball Python',
    zhLabel: '蛇类（蟒科）',
    enLabel: 'Snake (python family)',
    zhVisible: '看它一身棕金色的大斑块，遇到危险会把自己卷成一个球。',
    enVisible:
      'Look at its brown-and-gold blotches — when scared, it rolls itself into a ball.',
    zhSentences: [
      '这是球蟒，一种个子不大的温柔蟒蛇。',
      '它害怕时会把头藏在身体中间，卷成一个紧紧的球。',
    ],
    enSentences: [
      'This is the ball python, a gentle python that stays fairly small.',
      'When frightened, it hides its head in the middle of its coils and rolls into a tight ball.',
    ],
    zhPron: 'qiú mǎng',
    enPron: 'bawl PY-thon',
    zhPeriod: '现代（物种延续至今）',
    enPeriod: 'Present day',
    zhRegions: ['西非至中非'],
    enRegions: ['west and central Africa'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.5 },
    diet: 'carnivore',
    zhParent:
      '球蟒的名字来自它的“绝招”：受到惊扰时把身体盘成球，把脆弱的头护在最里面，天敌就无从下口。它是西非草原上的夜行猎手，靠热感应“颊窝”在黑暗里找到老鼠，先咬住再用身体温柔地缠紧。母球蟒会像母鸡一样盘住自己的一窝蛋，直到小蛇孵出为止。',
    enParent:
      'The ball python is named after its signature move: when disturbed it coils into a ball with its vulnerable head tucked safely in the middle, leaving a predator nowhere to bite. A night hunter of West African grasslands, it finds mice in the dark using heat-sensing pits, then holds on and gently constricts. Mother ball pythons wrap around their clutch of eggs like a hen until the babies hatch.',
    sources: [
      {
        title: 'Ball python — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/ball-python',
      },
      {
        title: 'Ball python — 圣地亚哥动物园（San Diego Zoo）',
        url: 'https://animals.sandiegozoo.org/animals/python',
      },
    ],
    zhUncertainties: [
      '体长以雌蛇为上限；雄蛇通常只有一米左右。',
      '“颊窝”热感应器官属于蚺科部分种类，表述以通俗介绍为主。',
    ],
    enUncertainties: [
      'The upper length is for females; males usually stay around one metre.',
      'Heat-sensing pits vary across python species, described here in general terms.',
    ],
    accent: { strong: '#6b5433', soft: '#dcc9a3' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'brown-bear',
    zhName: '棕熊（AR 版）',
    enName: 'Brown Bear (AR Model)',
    zhLabel: '大型熊科动物',
    enLabel: 'Large bear',
    zhVisible: '看它肩膀上鼓起的大肌肉包，那是挖洞和翻石头的“大力士肩膀”。',
    enVisible:
      'Look at the big muscle hump on its shoulders — the strongman shoulders it uses for digging.',
    zhSentences: [
      '这是棕熊，森林里的大力士，最爱蹲在河边捞鱼吃。',
      '冬天来之前，它会吃得胖胖的，然后钻进洞里睡上一整个冬天。',
    ],
    enSentences: [
      'This is the brown bear, the strong one of the forest, happiest fishing by a rushing river.',
      'Before winter it eats until it is plump, then curls up in a den and sleeps the winter away.',
    ],
    zhPron: 'zōng xióng',
    enPron: 'brown BAIR',
    zhPeriod: '现代（熊科延续约 2000 万年）',
    enPeriod: 'Present day (bear family about 20 million years old)',
    zhRegions: ['欧亚大陆北部', '北美洲西北部'],
    enRegions: ['northern Eurasia', 'north-western North America'],
    size: { kind: 'body-length', minMeters: 1.4, maxMeters: 2.8 },
    diet: 'omnivore',
    zhParent:
      '棕熊是杂食大胃王：浆果、坚果、草根、松果、鲑鱼，甚至飞蛾都是它的食物，秋天里一天能吃下几万卡路里。肩膀上的大肌肉是挖土专用的，挖老鼠、翻石头找虫都不在话下。它看起来笨重，短跑却能追上自行车；冬眠时心跳降到每分钟不到十次，靠夏天攒下的脂肪过冬。',
    enParent:
      'Brown bears are omnivorous gourmets: berries, nuts, roots, pine seeds, salmon and even moths are on the menu, and in autumn they can devour tens of thousands of calories a day. The mighty shoulder hump is digging muscle, perfect for unearthing rodents and flipping stones for insects. They look clumsy yet can outrun a bicycle in a sprint, and during hibernation their heartbeat drops below ten beats a minute as they live off summer fat.',
    sources: [
      {
        title: 'Brown bear — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/brown-bear',
      },
      {
        title: 'Brown bear — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/brown-bear',
      },
    ],
    zhUncertainties: [
      '本条目与既有“棕熊”草稿为同一种熊的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。',
      '体长区间涵盖各地区亚种；科迪亚克棕熊可以更长更重。',
    ],
    enUncertainties: [
      'This entry and the existing “Brown Bear” draft describe the same species from two different downloaded models; before publication one will be chosen or the two merged.',
      'The size range covers regional subspecies; Kodiak bears can grow longer and heavier.',
    ],
    accent: { strong: '#6f4f2e', soft: '#e0cba9' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'cheetah',
    zhName: '猎豹',
    enName: 'Cheetah',
    zhLabel: '大型猫科动物（极速猎手）',
    enLabel: 'Big cat (speed hunter)',
    zhVisible: '看看它眼睛下面两条黑色的“泪痕”，那是猎豹专属的防晒墨线。',
    enVisible:
      'Look at the two black “tear marks” under its eyes — cheetah-only built-in sunglasses.',
    zhSentences: [
      '这是猎豹，陆地上跑得最快的动物。',
      '它从眼睛到嘴巴有两条黑线，像运动员涂的防晒墨线，帮它盯紧猎物。',
    ],
    enSentences: [
      'This is the cheetah, the fastest runner on land.',
      'Black lines run from its eyes to its mouth like an athlete’s eye black, helping it keep prey in focus.',
    ],
    zhPron: 'liè bào',
    enPron: 'CHEE-tut',
    zhPeriod: '现代（猎豹属延续数百万年）',
    enPeriod: 'Present day (cheetah lineage millions of years old)',
    zhRegions: ['非洲', '伊朗（少量）'],
    enRegions: ['Africa', 'small population in Iran'],
    size: { kind: 'body-length', minMeters: 1.1, maxMeters: 1.5 },
    diet: 'carnivore',
    zhParent:
      '猎豹是纯粹的短跑机器：不能收回的爪子像跑鞋钉，长长的尾巴当舵用，灵活的脊柱让每一步都跨出七米远，三秒钟就能加速到时速一百公里。但它是“冲刺型选手”，全力跑几百米就得停下喘气，抓到的猎物还常被狮子和鬣狗抢走。小猎豹背上有一圈银色的鬃毛，跟着妈妈练习捕猎要一年多才能出师。',
    enParent:
      'The cheetah is a pure sprinting machine: non-retractable claws work like running spikes, the long tail serves as a rudder, and a flexible spine stretches each stride to seven metres — zero to one hundred kilometres an hour in three seconds. But it is a sprinter, not a marathoner; after a few hundred metres at full speed it must stop and pant, and lions or hyenas often steal its catch. Cubs wear a silvery mantle of hair and practise hunting with their mother for over a year.',
    sources: [
      {
        title: 'Cheetah — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cheetah-mammal',
      },
      {
        title: 'Cheetah — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/cheetah',
      },
    ],
    zhUncertainties: [
      '体长为头身长度，不算尾巴；连尾总长约 2 米。',
      '奔跑速度的数字来自人工测速，野外实际狩猎常低于峰值。',
    ],
    enUncertainties: [
      'The length covers head and body without the tail; total length with tail is about 2 metres.',
      'Top speed figures come from timed runs; hunts in the wild are usually slower.',
    ],
    accent: { strong: '#b08a3e', soft: '#f0e0b8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'common-octopus',
    zhName: '普通章鱼',
    enName: 'Common Octopus',
    zhLabel: '头足类动物（章鱼科）',
    enLabel: 'Cephalopod (octopus family)',
    zhVisible: '数一数它的八条腕，再看看皮肤上的小疙瘩——它会随时“换衣服”。',
    enVisible:
      'Count its eight arms, then watch the little bumps on its skin — it can change its “outfit” at any moment.',
    zhSentences: [
      '这是普通章鱼，海洋里最会变戏法的无脊椎动物。',
      '它有八条灵活的腕和三颗心脏，皮肤还能一秒变色。',
    ],
    enSentences: [
      'This is the common octopus, the ocean’s greatest invertebrate magician.',
      'It has eight bendy arms and three hearts, and its skin can change colour in a second.',
    ],
    zhPron: 'pǔ tōng zhāng yú',
    enPron: 'KOM-on OK-ta-pus',
    zhPeriod: '现代（章鱼类延续数亿年）',
    enPeriod: 'Present day (octopus lineage hundreds of millions of years old)',
    zhRegions: ['热带与温带海域'],
    enRegions: ['tropical and temperate seas'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.9 },
    diet: 'carnivore',
    zhParent:
      '普通章鱼是“深海爱因斯坦”：会开罐子、走迷宫、模仿其他动物，短期的记忆和学习能力让科学家惊叹。皮肤里密布着成千上万的色素细胞，配合能竖起的皮肤小乳突，几秒内就能和礁石融为一体。两颗心给鳃泵血，一颗心供应全身，血液里用含铜的蛋白质运氧，所以血是蓝色的。',
    enParent:
      'The common octopus is a deep-sea Einstein: it opens jars, solves mazes and mimics other animals, with memory and learning that astonish scientists. Thousands of colour cells dot its skin, and with raisable bumps called papillae it can melt into a reef in seconds. Two hearts pump blood through the gills while a third serves the body, and a copper-based protein carries the oxygen, making octopus blood blue.',
    sources: [
      {
        title: 'Octopus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/octopus-mollusk',
      },
      {
        title: 'Common octopus — 维基百科（Wikipedia）',
        url: 'https://en.wikipedia.org/wiki/Common_octopus',
      },
    ],
    zhUncertainties: [
      '体长区间以腕展开的“臂距”计，因个体差异很大，仅作家庭友好的近似。',
      '本条目与既有“章鱼”草稿为同类动物的不同模型，正式收录前将择一保留或合并。',
    ],
    enUncertainties: [
      'The size range refers to the arm-spread and varies hugely between individuals; treat it as a family-friendly approximation.',
      'This entry and the existing “Octopus” draft are different models of closely related animals; one will be kept or the two merged before publication.',
    ],
    accent: { strong: '#5c4668', soft: '#d8cbdf' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'emperor-penguin',
    zhName: '帝企鹅',
    enName: 'Emperor Penguin',
    zhLabel: '企鹅（南极最大种）',
    enLabel: 'Penguin (largest species, Antarctic)',
    zhVisible: '看看它耳朵旁边那一抹橙黄色，那是帝企鹅专有的“皇冠”。',
    enVisible:
      'Look at the orange-yellow patch near its ears — the emperor penguin’s private “crown”.',
    zhSentences: [
      '这是帝企鹅，企鹅家族里个子最高的成员。',
      '在南极冰天雪地里，企鹅爸爸把蛋放在脚背上，用肚子盖住保暖。',
    ],
    enSentences: [
      'This is the emperor penguin, the tallest member of the penguin family.',
      'On the Antarctic ice, penguin dads balance the egg on their feet and cover it with a warm belly flap.',
    ],
    zhPron: 'dì qǐ é',
    enPron: 'EM-per-or PEN-gwin',
    zhPeriod: '现代（企鹅家族延续数千万年）',
    enPeriod: 'Present day (penguin family tens of millions of years old)',
    zhRegions: ['南极洲'],
    enRegions: ['Antarctica'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.3 },
    diet: 'carnivore',
    zhParent:
      '帝企鹅在南极的严冬里繁殖：雌企鹅产下蛋后交给雄企鹅，自己去海里觅食；雄企鹅不吃不喝站立两个月，把蛋放在脚上用育雏皮囊盖住，靠囤积的脂肪挺过零下几十度的暴风雪。雏鸟孵出后挤成巨大的“托儿所”取暖，父母轮流从海边带回鱼和磷虾。它还是潜水冠军，能潜到五百多米深处捕鱼。',
    enParent:
      'Emperor penguins breed in the Antarctic winter: after the female lays the egg she hands it to the male and heads to sea, while he stands without eating for two months, balancing the egg on his feet under a brood pouch and living off stored fat through howling blizzards. Chicks huddle in giant crèches for warmth while parents take turns bringing fish and krill from the coast. Emperors are diving champions too, reaching depths beyond five hundred metres.',
    sources: [
      {
        title: 'Emperor penguin — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/emperor-penguin',
      },
      {
        title: 'Emperor penguin — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/emperor-penguin',
      },
    ],
    zhUncertainties: [
      '体长实为站立身高，是最高的企鹅种类。',
      '潜水深度记录来自科研追踪，不同个体与年份差异较大。',
    ],
    enUncertainties: [
      'The “length” is standing height; emperors are the tallest penguin species.',
      'Dive-depth records come from scientific tracking and vary between individuals and years.',
    ],
    accent: { strong: '#25405e', soft: '#c7d8e8' },
    habitat: 'land',
    atmosphere: 'ice',
  },
  {
    slug: 'european-hedgehog',
    zhName: '西欧刺猬',
    enName: 'European Hedgehog',
    zhLabel: '食虫小兽（猬科）',
    enLabel: 'Insect-eating mammal (hedgehog family)',
    zhVisible: '数数它背上成千上万根小刺，遇到危险就变成一个“刺球”。',
    enVisible:
      'Count the thousands of little spines on its back — it becomes a prickly ball when danger comes.',
    zhSentences: [
      '这是西欧刺猬，背着约五千根刺的夜行小兽。',
      '它走路呼呼作响，最爱在花园里找蜗牛和甲虫当夜宵。',
    ],
    enSentences: [
      'This is the European hedgehog, a night-walker carrying about five thousand spines.',
      'It snuffles along noisily, hunting snails and beetles for its midnight snack.',
    ],
    zhPron: 'xī ōu cì wei',
    enPron: 'yoor-o-PEE-an HEJ-hog',
    zhPeriod: '现代（刺猬类延续数千万年）',
    enPeriod: 'Present day (hedgehog lineage tens of millions of years old)',
    zhRegions: ['欧洲', '亚洲西部'],
    enRegions: ['Europe', 'western Asia'],
    size: { kind: 'body-length', minMeters: 0.2, maxMeters: 0.3 },
    diet: 'omnivore',
    zhParent:
      '西欧刺猬背上的刺是改造过的毛发，中空又带弹性；遇到危险时它先绷紧皮下肌肉，把身体缩成刺球，让狐狸无从下口。它是花园里的天然除虫队，一夜能吃掉几十克甲虫、蚯蚓和蜗牛，偶尔也啃浆果。秋末它吃得胖胖的，用树叶和枯草搭窝冬眠，春天醒来第一件事就是赶紧补一顿大餐。',
    enParent:
      'A European hedgehog’s spines are modified hairs — hollow, springy and about five thousand strong; when danger nears, it tenses the skin muscle beneath and rolls into a prickly ball that leaves a fox nowhere to bite. It is a garden pest-control team all by itself, eating dozens of grams of beetles, worms and snails each night plus the occasional berry. Late in autumn it fattens up, builds a nest of leaves and grass and hibernates, waking in spring for an immediate feast.',
    sources: [
      {
        title: 'Hedgehog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/hedgehog',
      },
      {
        title: 'European hedgehog — 英国野生动物信托（The Wildlife Trusts）',
        url: 'https://www.wildlifetrusts.org/wildlife-explorer/mammals/european-hedgehog',
      },
    ],
    zhUncertainties: [
      '刺的数量为成年个体的典型值，个体间有差异。',
      '虽以昆虫为主食，也吃鸟蛋和浆果，故按杂食介绍。',
    ],
    enUncertainties: [
      'The spine count is a typical adult figure and varies between individuals.',
      'Though mainly insectivorous, hedgehogs also eat eggs and berries, so they are introduced as omnivores.',
    ],
    accent: { strong: '#5b4634', soft: '#dcc9b0' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'french-bulldog',
    zhName: '法国斗牛犬',
    enName: 'French Bulldog',
    zhLabel: '家犬（伴侣犬品种）',
    enLabel: 'Domestic dog (companion breed)',
    zhVisible: '看看它像蝙蝠一样立着的大耳朵，还有扁扁的“小猪鼻子”。',
    enVisible:
      'Look at its big bat-like ears standing tall, and its flat little piggy nose.',
    zhSentences: [
      '这是法国斗牛犬，长着蝙蝠耳朵的小个子伙伴犬。',
      '它鼻子短短的，天热时会呼哧呼哧喘气给自己降温。',
    ],
    enSentences: [
      'This is the French bulldog, a small companion dog with bat ears.',
      'Its nose is so short that on hot days it pants to keep itself cool.',
    ],
    zhPron: 'fǎ guó dòu niú quǎn',
    enPron: 'french BULL-dog',
    zhPeriod: '现代（品种历史约两百年）',
    enPeriod: 'Present day (breed about two hundred years old)',
    zhRegions: ['法国（品种起源）', '世界各地家庭'],
    enRegions: ['France (breed origin)', 'homes worldwide'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.45 },
    diet: 'carnivore',
    zhParent:
      '法国斗牛犬的祖先是英国 laceworker 带到法国的小型斗牛犬，在巴黎街头和咖啡店里变成了万人迷的伴侣犬。它的短鼻子（倒扁脸）让它既怕热又不擅长游泳，夏天要靠空调和凉水过日子；打呼噜是它的“保留节目”，因为软腭较长。大而直立的蝙蝠耳是品种标志，性格温柔爱撒娇，是城市家庭的热门选择。',
    enParent:
      'French bulldogs descend from small bulldogs that English laceworkers carried to France, where Paris streets and cafés turned them into beloved companions. Their squashed faces make them both heat-sensitive and poor swimmers, so summers call for air conditioning and cool water; snoring is part of the package, thanks to a long soft palate. The upright bat ear is the breed’s emblem, and their sweet, clingy nature has made them city favourites.',
    sources: [
      {
        title: 'French bulldog — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/French-bulldog',
      },
      {
        title: 'French Bulldog — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/french-bulldog/',
      },
    ],
    zhUncertainties: [
      '体长为头尾长度；品种标准以体重为主要分级。',
      '健康问题（呼吸、难产）为品种普遍现象，个别血系有差异。',
    ],
    enUncertainties: [
      'The length is nose-to-tail; the breed standard classes dogs mainly by weight.',
      'Health issues such as breathing and whelping difficulties are breed-wide tendencies that vary by bloodline.',
    ],
    accent: { strong: '#7a6650', soft: '#e6d9c6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'giant-panda',
    zhName: '大熊猫',
    enName: 'Giant Panda',
    zhLabel: '熊科动物（竹子专家）',
    enLabel: 'Bear (bamboo specialist)',
    zhVisible: '找找它手腕上多出来的“第六根手指”，那是专门抓竹子的伪拇指。',
    enVisible:
      'Find the extra “sixth finger” on its wrist — a false thumb made just for gripping bamboo.',
    zhSentences: [
      '这是大熊猫，一天要吃几十公斤竹子的黑白熊。',
      '它的黑眼圈像一副墨镜，手腕上还有抓竹子的“伪拇指”。',
    ],
    enSentences: [
      'This is the giant panda, a black-and-white bear that eats tens of kilograms of bamboo a day.',
      'Its dark eye patches look like sunglasses, and a false thumb on its wrist helps it hold bamboo.',
    ],
    zhPron: 'dà xióng māo',
    enPron: 'JY-ant PAN-da',
    zhPeriod: '现代（大熊猫属延续数百万年）',
    enPeriod: 'Present day (panda lineage millions of years old)',
    zhRegions: ['中国四川、陕西、甘肃山区'],
    enRegions: ['mountains of Sichuan, Shaanxi and Gansu, China'],
    size: { kind: 'body-length', minMeters: 1.2, maxMeters: 1.9 },
    diet: 'herbivore',
    zhParent:
      '大熊猫的祖先是吃肉的熊，如今却把菜单换成了竹子：腕骨特化出的“伪拇指”能像大拇指一样握住竹竿，强壮的颌肌把坚硬的竹秆咬断。因为竹子营养少，它每天要花十几个小时进食，剩下的时间基本都在睡觉。黑白的毛色在雪地和阴影里都是保护色，新生宝宝却小得像一根粉笔，只有妈妈的九百分之一重。',
    enParent:
      'Giant pandas descend from meat-eating bears yet switched their menu to bamboo: a wrist bone evolved into a “false thumb” that grips stalks like a thumb, and powerful jaw muscles crunch the toughest culms. Because bamboo is low in calories, pandas feed for over half of each day and sleep through much of the rest. The black-and-white coat hides them in both snow and shadow, while a newborn cub is chalk-stick tiny — about one nine-hundredth of its mother’s weight.',
    sources: [
      {
        title: 'Giant panda — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/giant-panda',
      },
      {
        title: 'Giant panda — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/giant-panda',
      },
    ],
    zhUncertainties: [
      '体长为成年雌雄合计；野生与圈养个体体型差异明显。',
      '虽属食肉目，因几乎只吃竹子，按食草动物介绍。',
    ],
    enUncertainties: [
      'The length covers adult females and males; wild and zoo pandas differ noticeably in build.',
      'Classified in the order of carnivores, pandas are introduced as herbivores because bamboo forms nearly all of their diet.',
    ],
    accent: { strong: '#3a3a3a', soft: '#d9d9d9' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'golden-eagle',
    zhName: '金雕',
    enName: 'Golden Eagle',
    zhLabel: '大型猛禽（鹰科）',
    enLabel: 'Large raptor (eagle family)',
    zhVisible: '看看它金色的后颈羽毛和钩子一样的喙，那是天空猎手的标志。',
    enVisible:
      'Look at the golden feathers on its neck and its hook-shaped beak — the marks of a sky hunter.',
    zhSentences: [
      '这是金雕，山野上空最威风的大型猛禽。',
      '它俯冲下来的时候，脚上的利爪能一下抓住狐狸和野兔。',
    ],
    enSentences: [
      'This is the golden eagle, the grand raptor of open mountains.',
      'When it stoops from the sky, its powerful talons can seize a fox or a hare in one grab.',
    ],
    zhPron: 'jīn diāo',
    enPron: 'GOL-den EE-gl',
    zhPeriod: '现代（鹰类延续数千万年）',
    enPeriod: 'Present day (eagle lineage tens of millions of years old)',
    zhRegions: ['北半球山区与草原'],
    enRegions: ['mountains and steppes of the Northern Hemisphere'],
    size: { kind: 'wingspan', minMeters: 1.8, maxMeters: 2.3 },
    diet: 'carnivore',
    zhParent:
      '金雕的后颈羽毛在阳光下泛着金光，这也是它名字的由来。它是北半球分布最广的猛禽之一，捕猎时先在高空盘旋锁定目标，再收翅俯冲，时速可达两百多公里。抓到猎物时，四根脚趾同时发力，爪子的握力比人的手还大。很多国家都有驯养金雕的传统，金雕也因此成为草原文化里的图腾鸟。',
    enParent:
      'The golden nape feathers shine like metal in sunlight and give the bird its name. One of the most widespread eagles of the Northern Hemisphere, it hunts by circling high to mark its target, then folding its wings into a dive of well over two hundred kilometres an hour. At the strike, all eight talons close at once with a grip stronger than a human hand. Falconry traditions across the steppes have made it a totem bird of grassland cultures.',
    sources: [
      {
        title: 'Golden eagle — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/golden-eagle',
      },
      {
        title: 'Golden eagle — 康奈尔鸟类学实验室（Cornell Lab）',
        url: 'https://www.allaboutbirds.org/guide/Golden_Eagle',
      },
    ],
    zhUncertainties: [
      '翼展区间涵盖雌雄，雌鸟通常更大。',
      '俯冲速度的数字多来自观测估计，不同来源出入较大。',
    ],
    enUncertainties: [
      'The wingspan covers both sexes; females are usually larger.',
      'Dive speeds come mostly from observational estimates and differ between sources.',
    ],
    accent: { strong: '#8a6420', soft: '#eddcb0' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'golden-retriever',
    zhName: '金毛寻回犬',
    enName: 'Golden Retriever',
    zhLabel: '家犬（寻回猎犬品种）',
    enLabel: 'Domestic dog (retriever breed)',
    zhVisible: '摸摸想象中它金色的双层被毛，外层防水，内层像羽绒服。',
    enVisible:
      'Imagine stroking its golden double coat — a waterproof outer layer over a downy vest.',
    zhSentences: [
      '这是金毛寻回犬，嘴巴温柔到能衔住生鸡蛋的工作犬。',
      '它长着防水的金色被毛，天生就是游泳和捡回猎物的高手。',
    ],
    enSentences: [
      'This is the golden retriever, a working dog with a mouth so soft it can carry an egg unbroken.',
      'Its waterproof golden coat makes it a born swimmer and fetcher.',
    ],
    zhPron: 'jīn máo xún huí quǎn',
    enPron: 'GOL-den ri-TREE-ver',
    zhPeriod: '现代（品种历史一百五十余年）',
    enPeriod: 'Present day (breed over 150 years old)',
    zhRegions: ['苏格兰（品种起源）', '世界各地家庭'],
    enRegions: ['Scotland (breed origin)', 'homes worldwide'],
    size: { kind: 'body-length', minMeters: 0.9, maxMeters: 1.2 },
    diet: 'carnivore',
    zhParent:
      '金毛寻回犬在苏格兰培育，任务是跳进冰冷的湖里，把猎人打下的水鸟轻柔地衔回来——“软嘴”是选育的关键，不能在鸟身上留下牙印。双层被毛外层防水、内层保暖，脚趾间还有小蹼，天生爱游泳。如今它是最受欢迎的导盲犬、搜救犬和治疗犬之一，耐心和好脾气让它几乎成了“温柔”的代名词。',
    enParent:
      'Golden retrievers were bred in Scotland to leap into icy lochs and bring back downed waterfowl without a single tooth-mark — the “soft mouth” was the key trait breeders selected for. A waterproof outer coat over an insulating undercoat, plus slight webbing between the toes, makes them natural swimmers. Today they rank among the most trusted guide, search-and-rescue and therapy dogs, and their patience has practically made the breed a synonym for gentleness.',
    sources: [
      {
        title: 'Golden retriever — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/golden-retriever',
      },
      {
        title: 'Golden Retriever — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/golden-retriever/',
      },
    ],
    zhUncertainties: [
      '体长为头尾长度；品种标准以肩高和体重为准。',
      '“软嘴衔蛋”是流行的训练演示，用于说明咬合控制。',
    ],
    enUncertainties: [
      'The length is nose-to-tail; the breed standard relies on shoulder height and weight.',
      'Carrying an egg unbroken is a popular training demonstration of bite control.',
    ],
    accent: { strong: '#a4762c', soft: '#f0dcae' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'great-white-shark',
    zhName: '大白鲨',
    enName: 'Great White Shark',
    zhLabel: '大型鲨鱼（鼠鲨科）',
    enLabel: 'Large shark (mackerel shark family)',
    zhVisible: '看它嘴里一排排的三角牙，旧牙掉了后排的“备用牙”会立刻补上。',
    enVisible:
      'Look at the rows of triangular teeth — when one falls out, a spare from the row behind slides forward.',
    zhSentences: [
      '这是大白鲨，海洋里最有名的大鲨鱼。',
      '它有几百颗备用牙齿，一生要换掉成千上万颗。',
    ],
    enSentences: [
      'This is the great white shark, the most famous big shark in the ocean.',
      'It keeps hundreds of spare teeth and goes through thousands in a lifetime.',
    ],
    zhPron: 'dà bái shā',
    enPron: 'grayt wyt SHARK',
    zhPeriod: '现代（大白鲨谱系延续约 1600 万年）',
    enPeriod: 'Present day (lineage about 16 million years old)',
    zhRegions: ['全球温带与热带海域'],
    enRegions: ['temperate and tropical seas worldwide'],
    size: { kind: 'body-length', minMeters: 3.5, maxMeters: 6.0 },
    diet: 'carnivore',
    zhParent:
      '大白鲨是海洋的顶级猎手，牙齿像锯齿牛排刀，前排掉了后排随时补位，一生换牙数以千计。它体侧的肌肉让身体保持比海水更高的体温，游得更快更有力；鼻尖的小孔能感应猎物心跳发出的微弱电场。它最爱偷袭海豹：从深处加速冲上水面，有时整个身体跃出海水。尽管名声吓人，人类并不是它的猎物，它其实需要我们的保护。',
    enParent:
      'The great white is the ocean’s apex hunter, with serrated steak-knife teeth replaced conveyor-style from rows behind, thousands in a lifetime. Special muscles keep its body warmer than the surrounding sea for extra speed and power, and pores on its snout detect the faint electric fields of a prey animal’s heartbeat. Its favourite hunt is a stealth rush at a seal from below, sometimes launching its whole body clear of the water. Despite its fearsome fame, it does not hunt humans — and it needs our protection.',
    sources: [
      {
        title: 'Great white shark — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/great-white-shark',
      },
      {
        title: 'Great white shark — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/great-white-shark',
      },
    ],
    zhUncertainties: [
      '体长上限来自可靠的历史测量；绝大多数成鲨不足 5 米。',
      '谱系年代依据化石与分子估计，存在学术分歧。',
    ],
    enUncertainties: [
      'The upper length comes from well-documented historical records; most adults stay under 5 metres.',
      'Lineage age is based on fossil and molecular estimates and remains debated.',
    ],
    accent: { strong: '#41556b', soft: '#c9d6e2' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'green-sea-turtle',
    zhName: '绿海龟',
    enName: 'Green Sea Turtle',
    zhLabel: '大型海龟（海龟科）',
    enLabel: 'Large sea turtle (sea turtle family)',
    zhVisible: '看看它像盾牌一样的前鳍，划水时就像鸟儿扇动翅膀。',
    enVisible:
      'Look at its shield-like front flippers — they row through the water like wings.',
    zhSentences: [
      '这是绿海龟，能横穿整个大洋的远航家。',
      '它用前鳍像翅膀一样划水，累了就在海草床上吃素。',
    ],
    enSentences: [
      'This is the green sea turtle, a long-distance voyager that crosses whole oceans.',
      'It rows with wing-like front flippers and grazes on seagrass meadows.',
    ],
    zhPron: 'lǜ hǎi guī',
    enPron: 'green SEE TUR-tl',
    zhPeriod: '现代（海龟家族延续上亿年）',
    enPeriod: 'Present day (sea turtle family over 100 million years old)',
    zhRegions: ['全球热带与亚热带海域'],
    enRegions: ['tropical and subtropical seas worldwide'],
    size: { kind: 'body-length', minMeters: 0.8, maxMeters: 1.2 },
    diet: 'herbivore',
    zhParent:
      '绿海龟的名字来自它体内绿色的脂肪——成年龟几乎是“素食主义者”，专吃海草和海藻，像海底的割草机，让海草床保持健康。它们认路本领惊人：在茫茫大洋里游几十年，仍能回到出生的那片沙滩产蛋。孵出的性别由沙子的温度决定，天越热“女孩”越多，所以气候变暖也牵动着海龟家族的未来。',
    enParent:
      'The green sea turtle is named for the green fat beneath its shell — adults are nearly vegetarian, grazing seagrass and seaweed like undersea lawnmowers and keeping the meadows healthy. Their navigation is astonishing: after decades roaming the open ocean, females still find their way back to the very beach where they hatched to lay eggs. Sand temperature decides whether hatchlings are boys or girls, so a warming climate touches the whole family’s future.',
    sources: [
      {
        title: 'Green sea turtle — 美国国家海洋和大气管理局（NOAA）',
        url: 'https://www.fisheries.noaa.gov/species/green-turtle',
      },
      {
        title: 'Green turtle — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/green-turtle',
      },
    ],
    zhUncertainties: [
      '体长指背甲长度；幼龟会吃水母等小动物，成年后才转为吃素。',
      '本条目与既有“海龟”草稿为不同物种/不同模型，正式收录前将复核定名。',
    ],
    enUncertainties: [
      'The length is the shell (carapace) length; young turtles eat jellyfish and other animals before turning vegetarian.',
      'This entry and the existing “Sea Turtle” draft are different species and models; identification will be rechecked before publication.',
    ],
    accent: { strong: '#2e6b5e', soft: '#c6e2d9' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
]
