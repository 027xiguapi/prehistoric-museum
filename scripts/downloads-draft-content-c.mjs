// Per-animal draft content for the model-downloads batch (part C: Olympic
// athlete motion captures, African endangered mammals, Australian animals,
// cat breeds and dinosaur AR captures). Consumed by
// scripts/generate-downloads-draft-packages.mjs.
// Facts follow family-friendly popular-science ranges; every uncertainty is
// echoed in editorial notes. English copy uses British spellings.
export const DOWNLOADS_CONTENT_C = [
  {
    slug: 'alexander-massialas-touch',
    zhName: '亚历山大·马西亚拉斯（击剑得分）',
    enName: 'Alexander Massialas (Fencing Touch)',
    zhLabel: '击剑运动员（花剑）',
    enLabel: 'Fencer (foil)',
    zhVisible: '看他身体前倾、手臂伸直的那一瞬间——剑尖碰到对手就能得分。',
    enVisible:
      'Watch the moment he leans forward with his arm fully extended — a touch of the sword tip scores the point.',
    zhSentences: [
      '这是美国击剑运动员亚历山大·马西亚拉斯，他正在做一次漂亮的进攻得分。',
      '花剑比赛里，只有剑尖碰到对方躯干才算得分。',
    ],
    enSentences: [
      'This is American fencer Alexander Massialas, scoring a clean touch on the attack.',
      'In foil fencing, only the tip of the sword touching the opponent’s torso scores.',
    ],
    zhPron: 'yà lì shān dà · mǎ xī yà lā sī',
    enPron: 'al-ex-AN-der mas-ee-AH-las',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['美国'],
    enRegions: ['United States'],
    size: { kind: 'body-length', minMeters: 1.85, maxMeters: 1.95 },
    diet: 'omnivore',
    zhParent:
      '亚历山大·马西亚拉斯是美国男子花剑名将：2016 年里约奥运会个人银牌、团体铜牌得主，父亲格雷格·马西亚拉斯曾是他的国家队教练。花剑是三种击剑武器之一，讲究“进攻权”规则——先发动正确进攻的一方在同时亮灯时得分。这个模型来自谷歌为搜索结果制作的运动员动作捕捉系列，捕捉的是剑尖触及对手的得分瞬间。',
    enParent:
      'Alexander Massialas is a leading American foil fencer: individual silver and team bronze medallist at the Rio 2016 Olympics, coached by his father Greg, a former national-team fencer. Foil is one of fencing’s three weapons and uses “right of way” rules — when both fencers hit together, the fencer who started the correct attack scores. This model comes from Google’s athlete motion-capture series for search results and shows the scoring moment as the blade lands.',
    sources: [
      {
        title: 'Alexander Massialas — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/alexander-massialas',
      },
      {
        title: 'Alexander Massialas — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Alexander_Massialas',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '身高为公开资料的约数；动作捕捉的具体采集时间未公开。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'The height is approximate from public sources; the exact capture date is unpublished.',
    ],
    accent: { strong: '#3c4f8c', soft: '#d3daec' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'caeleb-dressel-butterfly',
    zhName: '凯勒布·德雷塞尔（蝶泳）',
    enName: 'Caeleb Dressel (Butterfly)',
    zhLabel: '游泳运动员（蝶泳）',
    enLabel: 'Swimmer (butterfly stroke)',
    zhVisible: '看他的双臂同时出水向前扑——蝶泳是四种泳姿里最费力的一种。',
    enVisible:
      'Watch both arms sweep out of the water together — butterfly is the most demanding of the four strokes.',
    zhSentences: [
      '这是美国游泳名将凯勒布·德雷塞尔，他正在游蝶泳。',
      '蝶泳的双臂要同时划水，像海豚一样上下起伏。',
    ],
    enSentences: [
      'This is American swimming star Caeleb Dressel swimming the butterfly.',
      'In butterfly, both arms recover over the water together while the body rolls like a dolphin’s.',
    ],
    zhPron: 'kǎi lè bù · dé léi sài ěr',
    enPron: 'KAY-leb DRES-el',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['美国'],
    enRegions: ['United States'],
    size: { kind: 'body-length', minMeters: 1.85, maxMeters: 1.95 },
    diet: 'omnivore',
    zhParent:
      '凯勒布·德雷塞尔是美国短距离自由泳和蝶泳名将，在东京 2020 奥运会上独得五枚金牌，并保持着男子 100 米蝶泳世界纪录（49 秒 45）。蝶泳于 20 世纪 30 年代从蛙泳中分化出来，要求双臂同时移臂、双腿做海豚式打水，对肩背力量要求极高。这个模型捕捉的是他蝶泳途中的一次完整划臂周期。',
    enParent:
      'Caeleb Dressel is an American sprint freestyle and butterfly star who won five gold medals at the Tokyo 2020 Olympics and holds the 100-metre butterfly world record (49.45 seconds). Butterfly split off from breaststroke in the 1930s and demands simultaneous over-water arm recovery with a dolphin kick, making it hugely demanding on the shoulders and back. This model captures one full butterfly stroke cycle.',
    sources: [
      {
        title: 'Caeleb Dressel — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/caeleb-dressel',
      },
      {
        title: 'Caeleb Dressel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Caeleb_Dressel',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有自由泳和出发跳水两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same swimmer exist (freestyle and dive start); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#1f6fb0', soft: '#cfe3f2' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'caeleb-dressel-freestyle',
    zhName: '凯勒布·德雷塞尔（自由泳）',
    enName: 'Caeleb Dressel (Freestyle)',
    zhLabel: '游泳运动员（自由泳）',
    enLabel: 'Swimmer (freestyle)',
    zhVisible: '看他的双臂轮流划水、双腿快速打水——自由泳其实指的是速度最快的爬泳。',
    enVisible:
      'Watch his arms take turns pulling while the legs flutter-kick — “freestyle” racing almost always means front crawl, the fastest stroke.',
    zhSentences: [
      '这是凯勒布·德雷塞尔在游自由泳，双臂像风车一样交替划水。',
      '自由泳比赛中大家都选最快的爬泳，所以它成了“自由泳”的代名词。',
    ],
    enSentences: [
      'Here is Caeleb Dressel swimming freestyle, his arms turning over like a windmill.',
      'In freestyle races everyone chooses front crawl because it is fastest, so the words have become interchangeable.',
    ],
    zhPron: 'kǎi lè bù · dé léi sài ěr',
    enPron: 'KAY-leb DRES-el',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['美国'],
    enRegions: ['United States'],
    size: { kind: 'body-length', minMeters: 1.85, maxMeters: 1.95 },
    diet: 'omnivore',
    zhParent:
      '爬泳是四种竞技泳姿中最快的：双臂交替划水，双腿上下打腿，头侧向转动呼吸。德雷塞尔在 50 米和 100 米自由泳上都是世界顶尖水平，东京奥运会上包揽这两个项目的金牌。这个模型与蝶泳、出发跳水两个模型属于同一运动员的动作捕捉系列。',
    enParent:
      'Front crawl is the fastest of the four racing strokes: alternating arm pulls, a flutter kick and breathing to the side. Dressel is world-class in the 50- and 100-metre freestyle and won both events at the Tokyo Olympics. This model belongs to the same athlete capture series as his butterfly and dive-start models.',
    sources: [
      {
        title: 'Caeleb Dressel — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/caeleb-dressel',
      },
      {
        title: 'Caeleb Dressel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Caeleb_Dressel',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有蝶泳和出发跳水两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same swimmer exist (butterfly and dive start); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#1f6fb0', soft: '#cfe3f2' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'caeleb-dressel-start',
    zhName: '凯勒布·德雷塞尔（出发跳水）',
    enName: 'Caeleb Dressel (Dive Start)',
    zhLabel: '游泳运动员（出发跳水）',
    enLabel: 'Swimmer (dive start)',
    zhVisible: '看他从出发台上腾空而起——顶尖选手的出发能占到整场比赛的胜负。',
    enVisible:
      'Watch him launch off the starting block — at the top level, the start alone can decide a race.',
    zhSentences: [
      '这是凯勒布·德雷塞尔从出发台跃入水中的瞬间。',
      '游泳比赛的出发要在哨声后极短时间内蹬台起跳，反应快零点几秒都很关键。',
    ],
    enSentences: [
      'Here is Caeleb Dressel diving in from the starting block.',
      'Racing starts demand an explosive jump within a split second of the signal — hundredths of a second matter.',
    ],
    zhPron: 'kǎi lè bù · dé léi sài ěr',
    enPron: 'KAY-leb DRES-el',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['美国'],
    enRegions: ['United States'],
    size: { kind: 'body-length', minMeters: 1.85, maxMeters: 1.95 },
    diet: 'omnivore',
    zhParent:
      '现代游泳出发采用“蹲踞式”起跳：运动员双手扣住出发台前沿，一腿在前一腿在后蓄力，蹬台后身体呈流线型入水，并在水下做一段海豚式打腿。规则要求出发反应时间不得短于 0.1 秒，否则按抢跳犯规处理。这个模型捕捉的是德雷塞尔腾空入水的姿态。',
    enParent:
      'Modern racing starts use a “track start”: the swimmer grips the front of the block, loads one leg forward and one back, then drives off and enters the water in a tight streamline with an underwater dolphin-kick phase. Reaction times under 0.1 seconds are judged false starts. This model captures Dressel mid-flight on the way into the water.',
    sources: [
      {
        title: 'Caeleb Dressel — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/caeleb-dressel',
      },
      {
        title: 'Caeleb Dressel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Caeleb_Dressel',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有蝶泳和自由泳两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same swimmer exist (butterfly and freestyle); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#1f6fb0', soft: '#cfe3f2' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'dina-asher-smith-sprint',
    zhName: '迪娜·阿舍-史密斯（短跑冲刺）',
    enName: 'Dina Asher-Smith (Sprint)',
    zhLabel: '短跑运动员',
    enLabel: 'Sprinter',
    zhVisible: '看她大步流星地向前冲——她是英国历史上跑得最快的女运动员。',
    enVisible:
      'Watch her stride at full speed — she is the fastest British woman in history.',
    zhSentences: [
      '这是英国短跑运动员迪娜·阿舍-史密斯在全力冲刺。',
      '短跑运动员冲线时的速度可以超过每小时 40 公里。',
    ],
    enSentences: [
      'This is British sprinter Dina Asher-Smith at full speed.',
      'Elite sprinters reach more than 40 kilometres per hour at the finish.',
    ],
    zhPron: 'dí nà · ā shě-shǐ mì sī',
    enPron: 'DEE-na ASH-er-smith',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['英国'],
    enRegions: ['United Kingdom'],
    size: { kind: 'body-length', minMeters: 1.6, maxMeters: 1.7 },
    diet: 'omnivore',
    zhParent:
      '迪娜·阿舍-史密斯是 2019 年世锦赛女子 200 米冠军、100 米亚军，保持着 100 米 10.83 秒的英国国家纪录，被称为“英国最快的女人”。她大学主修历史，还热心为女性运动员权益发声。这个模型捕捉的是她最高速度阶段的跑姿，同一系列还有起跑和途中跑两个模型。',
    enParent:
      'Dina Asher-Smith is the 2019 world 200-metre champion and 100-metre silver medallist, holding the British 100-metre record of 10.83 seconds — the fastest British woman ever. She studied history at university and is a prominent voice for women in sport. This model captures her maximum-velocity sprinting; block-start and stride models from the same series also exist.',
    sources: [
      {
        title: 'Dina Asher-Smith — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/dina-asher-smith',
      },
      {
        title: 'Dina Asher-Smith — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dina_Asher-Smith',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有起跑和途中跑两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same sprinter exist (block start and stride); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#8c1f3f', soft: '#ecd2da' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'dina-asher-smith-start',
    zhName: '迪娜·阿舍-史密斯（起跑）',
    enName: 'Dina Asher-Smith (Block Start)',
    zhLabel: '短跑运动员（起跑）',
    enLabel: 'Sprinter (block start)',
    zhVisible: '看她从起跑器上弹射而出——短跑的起跑要用到“各就位、预备、跑”三个口令。',
    enVisible:
      'Watch her explode out of the starting blocks — sprint starts follow the commands “on your marks, set, go”.',
    zhSentences: [
      '这是迪娜·阿舍-史密斯从起跑器上起跑的瞬间。',
      '起跑器像两块小踏板，帮助运动员用力蹬地冲出去。',
    ],
    enSentences: [
      'This is Dina Asher-Smith driving out of the starting blocks.',
      'Starting blocks are two small foot plates that let sprinters push off with maximum force.',
    ],
    zhPron: 'dí nà · ā shě-shǐ mì sī',
    enPron: 'DEE-na ASH-er-smith',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['英国'],
    enRegions: ['United Kingdom'],
    size: { kind: 'body-length', minMeters: 1.6, maxMeters: 1.7 },
    diet: 'omnivore',
    zhParent:
      '短跑起跑分为“各就位”（双脚抵住起跑器）、“预备”（臀部抬起、重心前移）和鸣枪起跑三个阶段。反应时间低于 0.1 秒会被判为抢跑，因为科学研究表明人类不可能更快地对枪声做出反应。这个模型捕捉的是阿舍-史密斯蹬离起跑器的加速瞬间。',
    enParent:
      'A sprint start has three phases: “on your marks” (feet set against the blocks), “set” (hips raised, weight forward) and the gun. Reaction times under 0.1 seconds count as false starts because research shows humans cannot respond to the gun any faster. This model captures Asher-Smith in the first driving strides away from the blocks.',
    sources: [
      {
        title: 'Dina Asher-Smith — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/dina-asher-smith',
      },
      {
        title: 'Dina Asher-Smith — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dina_Asher-Smith',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有冲刺和途中跑两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same sprinter exist (sprint and stride); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#8c1f3f', soft: '#ecd2da' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'dina-asher-smith-stride',
    zhName: '迪娜·阿舍-史密斯（途中跑）',
    enName: 'Dina Asher-Smith (Stride)',
    zhLabel: '短跑运动员（途中跑）',
    enLabel: 'Sprinter (stride)',
    zhVisible: '看她高高抬起的膝盖和用力摆动的双臂——跑步可不只是腿在动。',
    enVisible:
      'Watch her high knee lift and powerful arm swing — sprinting is a whole-body action, not just legs.',
    zhSentences: [
      '这是迪娜·阿舍-史密斯途中跑的一步，膝盖抬得很高。',
      '短跑时双臂用力前后摆动，能帮助腿跑得更快。',
    ],
    enSentences: [
      'This is Dina Asher-Smith mid-stride, knees driving high.',
      'Sprinters pump their arms hard front to back — the arm action helps the legs go faster.',
    ],
    zhPron: 'dí nà · ā shě-shǐ mì sī',
    enPron: 'DEE-na ASH-er-smith',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['英国'],
    enRegions: ['United Kingdom'],
    size: { kind: 'body-length', minMeters: 1.6, maxMeters: 1.7 },
    diet: 'omnivore',
    zhParent:
      '途中跑阶段，短跑运动员的步幅可以超过两米，脚每次触地只有约十分之一秒。为了跑得更快，运动员要保持高重心、膝盖高抬、前脚掌落地，双臂成直角大幅摆动。这个模型定格了阿舍-史密斯途中跑的一个完整步态周期。',
    enParent:
      'At top speed a sprinter’s stride can exceed two metres, with each foot touching the ground for about a tenth of a second. Sprinters stay tall, lift the knees, land on the ball of the foot and swing the arms through big right-angled arcs. This model freezes one full stride cycle of Asher-Smith’s running form.',
    sources: [
      {
        title: 'Dina Asher-Smith — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/dina-asher-smith',
      },
      {
        title: 'Dina Asher-Smith — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dina_Asher-Smith',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有起跑和冲刺两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same sprinter exist (block start and sprint); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#8c1f3f', soft: '#ecd2da' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'megan-rapinoe-dribble',
    zhName: '梅根·拉皮诺埃（带球过人）',
    enName: 'Megan Rapinoe (Dribble)',
    zhLabel: '足球运动员',
    enLabel: 'Footballer',
    zhVisible: '看她脚下的足球——带球过人的秘诀是让球一直贴着脚边滚动。',
    enVisible:
      'Watch the ball at her feet — the secret of dribbling is keeping the ball close with every touch.',
    zhSentences: [
      '这是美国女足名将梅根·拉皮诺埃在带球过人。',
      '她曾两次捧起女足世界杯冠军奖杯。',
    ],
    enSentences: [
      'This is American football star Megan Rapinoe dribbling the ball.',
      'She has lifted the Women’s World Cup trophy twice.',
    ],
    zhPron: 'méi gēn · lā pí nuò āi',
    enPron: 'MEG-an ra-PEE-noh',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['美国'],
    enRegions: ['United States'],
    size: { kind: 'body-length', minMeters: 1.65, maxMeters: 1.75 },
    diet: 'omnivore',
    zhParent:
      '梅根·拉皮诺埃是美国女子足球的标志性人物：2015 年和 2019 年女足世界杯冠军、2012 年奥运会金牌得主，2019 年还获得女子金球奖。她以精准的传中和任意球闻名，标志性的紫色短发和进球后张开双臂的庆祝动作广为人知。这个模型捕捉的是她控球推进的带球动作。',
    enParent:
      'Megan Rapinoe is an icon of American women’s football: World Cup winner in 2015 and 2019, Olympic gold medallist in 2012 and winner of the 2019 Ballon d’Or Féminin. She is famous for pinpoint crosses, free kicks, her purple hair and the arms-wide goal celebration. This model captures her dribbling the ball at speed.',
    sources: [
      {
        title: 'Megan Rapinoe — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/megan-rapinoe',
      },
      {
        title: 'Megan Rapinoe — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Megan_Rapinoe',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '身高为公开资料的约数；动作捕捉的具体采集时间未公开。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'The height is approximate from public sources; the exact capture date is unpublished.',
    ],
    accent: { strong: '#2e6b4f', soft: '#d2e5db' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'niklas-kaul-longjump',
    zhName: '尼克拉斯·考尔（跳远）',
    enName: 'Niklas Kaul (Long Jump)',
    zhLabel: '十项全能运动员（跳远）',
    enLabel: 'Decathlete (long jump)',
    zhVisible: '看他腾空跃起的姿势——跳远运动员要在空中“走”好几步才落入沙坑。',
    enVisible:
      'Watch his take-off posture — long jumpers seem to “walk” through the air before landing in the sand.',
    zhSentences: [
      '这是德国十项全能运动员尼克拉斯·考尔在跳远。',
      '十项全能要连续比十个项目，被称为“田径之王”。',
    ],
    enSentences: [
      'This is German decathlete Niklas Kaul competing in the long jump.',
      'The decathlon packs ten events into two days and its winner is called the “king of athletics”.',
    ],
    zhPron: 'ní kè lā sī · kǎo ěr',
    enPron: 'NIK-las kowl',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['德国'],
    enRegions: ['Germany'],
    size: { kind: 'body-length', minMeters: 1.8, maxMeters: 1.9 },
    diet: 'omnivore',
    zhParent:
      '尼克拉斯·考尔在 2019 年多哈世锦赛上夺得十项全能冠军，成为该项目历史上最年轻的世锦赛冠军。十项全能包括 100 米、跳远、铅球、跳高、400 米、110 米栏、铁饼、撑竿跳高、标枪和 1500 米，两天比完，对速度、力量和耐力都是极限考验。跳远是其中的第二天第一项之外的第二个项目，要求助跑后单脚起跳、双脚落入沙坑。',
    enParent:
      'Niklas Kaul won decathlon gold at the 2019 Doha World Championships, the youngest decathlon world champion in history. The decathlon comprises the 100 metres, long jump, shot put, high jump, 400 metres, 110-metre hurdles, discus, pole vault, javelin and 1500 metres over two days — an extreme test of speed, strength and endurance. In the long jump athletes sprint down a runway, take off from one foot and land feet-first in a sand pit.',
    sources: [
      {
        title: 'Niklas Kaul — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/niklas-kaul',
      },
      {
        title: 'Niklas Kaul — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Niklas_Kaul',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '身高为公开资料的约数；动作捕捉的具体采集时间未公开。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'The height is approximate from public sources; the exact capture date is unpublished.',
    ],
    accent: { strong: '#b8862e', soft: '#eedfbe' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pv-sindhu-rally',
    zhName: '普·文·辛杜（多拍相持）',
    enName: 'P. V. Sindhu (Rally)',
    zhLabel: '羽毛球运动员',
    enLabel: 'Badminton player',
    zhVisible: '看她前后左右快速移动接球——羽毛球是世界上最快的球拍运动。',
    enVisible:
      'Watch her move in every direction to return the shuttle — badminton is the fastest racket sport in the world.',
    zhSentences: [
      '这是印度羽毛球名将辛杜在进行多拍来回。',
      '羽毛球的球速可以超过每小时 400 公里，比高铁还快！',
    ],
    enSentences: [
      'This is Indian badminton star P. V. Sindhu in the middle of a rally.',
      'A smashed shuttlecock can travel over 400 kilometres per hour — faster than a bullet train!',
    ],
    zhPron: 'pǔ · wén · xīn dù',
    enPron: 'P V SIN-doo',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['印度'],
    enRegions: ['India'],
    size: { kind: 'body-length', minMeters: 1.75, maxMeters: 1.83 },
    diet: 'omnivore',
    zhParent:
      '普萨拉·文卡塔·辛杜是印度最伟大的羽毛球运动员之一：2016 年里约奥运会银牌、2020 年东京奥运会铜牌得主，2019 年世锦赛冠军，也是印度第一位羽毛球世界冠军。她身高臂长，扣杀威力惊人。羽毛球用的“球”是插在软木托上的 16 根鹅毛，因为空气阻力大，飞行轨迹与网球完全不同。这个模型捕捉的是她前后移动接球的多拍相持。',
    enParent:
      'Pusarla Venkata Sindhu is one of India’s greatest badminton players: silver at Rio 2016, bronze at Tokyo 2020 and 2019 world champion — the first Indian to win a badminton world title. Her height and long reach make her smash fearsome. A shuttlecock is 16 goose feathers set into a cork base, and its strong air drag gives it a flight path unlike any tennis ball. This model captures her mid-rally footwork.',
    sources: [
      {
        title: 'P V Sindhu — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/pv-sindhu',
      },
      {
        title: 'P. V. Sindhu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/P._V._Sindhu',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有击球和扣杀两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same player exist (shots and smash); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#d97a26', soft: '#f5dfc6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pv-sindhu-shots',
    zhName: '普·文·辛杜（击球组合）',
    enName: 'P. V. Sindhu (Shots)',
    zhLabel: '羽毛球运动员',
    enLabel: 'Badminton player',
    zhVisible: '看她变换不同的击球手法——羽毛球有高远球、吊球、搓球等几十种打法。',
    enVisible:
      'Watch her switch between different strokes — badminton has dozens of shots, from clears to drops to net spins.',
    zhSentences: [
      '这是辛杜在演示不同的羽毛球击球动作。',
      '高手打球时会不断变化节奏，让对手猜不到下一拍。',
    ],
    enSentences: [
      'Here is P. V. Sindhu demonstrating different badminton strokes.',
      'Top players keep changing pace and shot choice so opponents cannot guess what comes next.',
    ],
    zhPron: 'pǔ · wén · xīn dù',
    enPron: 'P V SIN-doo',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['印度'],
    enRegions: ['India'],
    size: { kind: 'body-length', minMeters: 1.75, maxMeters: 1.83 },
    diet: 'omnivore',
    zhParent:
      '羽毛球的基本击球包括打到对方后场的高远球、轻吊网前的吊球、贴网而过的搓球和斜线劈杀等。辛杜的正手进攻尤其出色，她的教练是印尼名将的弟子、印度教练戈比昌德。这个模型与多拍相持、扣杀两个模型属于同一运动员的动作捕捉系列。',
    enParent:
      'Core badminton strokes include the deep clear, the soft drop, the tumbling net shot and the cross-court slice. Sindhu’s forehand attack is especially feared; her coach Pullela Gopichand is himself a former All England champion. This model belongs to the same athlete capture series as her rally and smash models.',
    sources: [
      {
        title: 'P V Sindhu — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/pv-sindhu',
      },
      {
        title: 'P. V. Sindhu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/P._V._Sindhu',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有多拍相持和扣杀两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same player exist (rally and smash); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#d97a26', soft: '#f5dfc6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pv-sindhu-smash',
    zhName: '普·文·辛杜（扣杀）',
    enName: 'P. V. Sindhu (Smash)',
    zhLabel: '羽毛球运动员',
    enLabel: 'Badminton player',
    zhVisible: '看她高高跃起、全力下压——扣杀是羽毛球里最有威力的得分手段。',
    enVisible:
      'Watch her leap and strike downwards with full power — the smash is badminton’s most devastating winning shot.',
    zhSentences: [
      '这是辛杜跳起来扣杀羽毛球的瞬间。',
      '扣杀时羽毛球像箭一样射向对方场地，时速能超过 400 公里。',
    ],
    enSentences: [
      'This is P. V. Sindhu leaping for a smash.',
      'A smashed shuttle flies down like an arrow at over 400 kilometres per hour.',
    ],
    zhPron: 'pǔ · wén · xīn dù',
    enPron: 'P V SIN-doo',
    zhPeriod: '现代（约 2020 年发布的动作捕捉模型）',
    enPeriod: 'Present day (motion-capture model published around 2020)',
    zhRegions: ['印度'],
    enRegions: ['India'],
    size: { kind: 'body-length', minMeters: 1.75, maxMeters: 1.83 },
    diet: 'omnivore',
    zhParent:
      '扣杀要求运动员在最高点击球，手臂像鞭子一样甩动，把球向下压入对方场地。吉尼斯纪录认可的最快扣杀时速超过 490 公里。辛杜身高约 1.79 米，起跳后的击球点极高，是她标志性的得分武器。这个模型捕捉的是她腾空扣杀的瞬间。',
    enParent:
      'A smash is struck at the highest possible point, the arm whipping through to drive the shuttle steeply down into the opponent’s court. The fastest recorded smashes exceed 490 kilometres per hour. Sindhu stands about 1.79 metres tall and hits from an exceptionally high contact point — her signature weapon. This model captures her mid-air at the moment of the smash.',
    sources: [
      {
        title: 'P V Sindhu — Olympics.com',
        url: 'https://www.olympics.com/en/athletes/pv-sindhu',
      },
      {
        title: 'P. V. Sindhu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/P._V._Sindhu',
      },
    ],
    zhUncertainties: [
      '这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。',
      '同一名运动员另有多拍相持和击球组合两个模型，发布前需决定保留或合并方式。',
    ],
    enUncertainties: [
      'This is a motion capture of a real athlete, not an animal entry; publication needs brand and image-rights review.',
      'Two other models of the same player exist (rally and shots); decide whether to keep or merge before publication.',
    ],
    accent: { strong: '#d97a26', soft: '#f5dfc6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'giraffe',
    zhName: '长颈鹿',
    enName: 'Giraffe',
    zhLabel: '最高的陆生动物',
    enLabel: 'Tallest land animal',
    zhVisible: '数一数它身上的斑块——每只长颈鹿的花纹都是独一无二的。',
    enVisible:
      'Count the patches on its coat — every giraffe’s pattern is completely unique.',
    zhSentences: [
      '这是长颈鹿，世界上最高的陆生动物。',
      '它的舌头又长又灵活，能够到高高的金合欢树叶。',
    ],
    enSentences: [
      'This is the giraffe, the tallest land animal in the world.',
      'Its long, nimble tongue reaches acacia leaves high above the ground.',
    ],
    zhPron: 'cháng jǐng lù',
    enPron: 'ji-RAF',
    zhPeriod: '现代（长颈鹿属延续数百万年）',
    enPeriod: 'Present day (giraffe lineage millions of years old)',
    zhRegions: ['非洲撒哈拉以南的稀树草原'],
    enRegions: ['savannas of Sub-Saharan Africa'],
    size: { kind: 'body-length', minMeters: 3.8, maxMeters: 4.7 },
    diet: 'herbivore',
    zhParent:
      '长颈鹿站立时高 4–6 米，仅脖子就可达两米，但它的颈椎和人类一样只有 7 块，只是每块都特别长。深蓝色的舌头长达 45 厘米，可以卷住带刺的金合欢枝叶。长颈鹿的心脏重量超过 10 千克，用极高的血压把血液泵上长脖子。每只长颈鹿的斑纹都像指纹一样独特；研究还表明“长颈鹿”可能不止一个物种。',
    enParent:
      'Standing 4–6 metres tall, a giraffe’s neck alone can reach two metres — yet it has only seven neck bones, the same number as humans, each one greatly elongated. The dark blue-purple tongue extends up to 45 centimetres and wraps around thorny acacia branches. A giraffe’s heart weighs over 10 kilograms and pumps blood up the long neck at very high pressure. Coat patterns are as unique as fingerprints, and recent research suggests “the giraffe” may actually be several species.',
    sources: [
      {
        title: 'Giraffe — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/giraffe',
      },
      {
        title: 'Giraffe — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/giraffe',
      },
    ],
    zhUncertainties: [
      '体长为躯干前后长度；站立高度（4–6 米）远大于体长。',
      '长颈鹿的物种划分仍有争议：可能是一个物种，也可能是多个物种。',
    ],
    enUncertainties: [
      'The size is body length; standing height (4–6 metres) is far greater.',
      'Giraffe taxonomy is debated — one species with subspecies, or several distinct species.',
    ],
    accent: { strong: '#b8862e', soft: '#f0ddb4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'hippo',
    zhName: '河马',
    enName: 'Hippopotamus',
    zhLabel: '大型半水生哺乳动物',
    enLabel: 'Large semi-aquatic mammal',
    zhVisible: '看它的大嘴巴——河马张嘴时能张开将近 180 度。',
    enVisible:
      'Look at that huge mouth — a hippo can open its jaws nearly 180 degrees wide.',
    zhSentences: [
      '这是河马，白天泡在水里、晚上上岸吃草的大块头。',
      '别看它胖，它跑起来比人快得多。',
    ],
    enSentences: [
      'This is the hippopotamus, a heavyweight that soaks in water by day and grazes on land at night.',
      'Despite its bulk, a hippo can run much faster than a human.',
    ],
    zhPron: 'hé mǎ',
    enPron: 'hip-po-POT-a-mus',
    zhPeriod: '现代（河马科延续数千万年）',
    enPeriod: 'Present day (hippo family tens of millions of years old)',
    zhRegions: ['非洲撒哈拉以南的河流与湖泊'],
    enRegions: ['rivers and lakes of Sub-Saharan Africa'],
    size: { kind: 'body-length', minMeters: 3.3, maxMeters: 5.0 },
    diet: 'herbivore',
    zhParent:
      '河马是仅次于大象和白犀的第三大陆生动物，体重可达 1.5–3 吨。它们白天成群泡在河流湖泊里防晒，眼睛、耳朵和鼻孔都长在头顶，身体沉入水中时只露出这三样。傍晚河马上岸吃草，一晚能走几公里、吃掉约 40 千克草。河马汗液呈粉红色，像天然防晒霜。它们的领地意识极强，是非洲最危险的动物之一。',
    enParent:
      'The hippopotamus is the third-largest land animal after elephants and white rhinos, weighing 1.5–3 tonnes. Hippos spend the day huddled in rivers and lakes to avoid sunburn, with eyes, ears and nostrils all on top of the head so the rest of the body can stay submerged. At dusk they come ashore to graze, walking kilometres and eating about 40 kilograms of grass a night. Hippo sweat is pinkish and acts like natural sunscreen. Highly territorial, they are among Africa’s most dangerous animals.',
    sources: [
      {
        title: 'Hippopotamus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/hippopotamus-mammal',
      },
      {
        title: 'Hippopotamus — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/hippopotamus',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；体重 1.5–3 吨因性别和个体差异很大。',
      '河马几乎只吃草，但偶有啃食尸体的记录，学界视为罕见异常行为。',
    ],
    enUncertainties: [
      'The size excludes the small tail; weights of 1.5–3 tonnes vary widely by sex and individual.',
      'Hippos graze almost exclusively on grass, though rare carcass-chewing has been recorded.',
    ],
    accent: { strong: '#7a6f75', soft: '#ded5da' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'saola',
    zhName: '中南大羚',
    enName: 'Saola',
    zhLabel: '极危牛科动物（“亚洲独角兽”）',
    enLabel: 'Critically endangered antelope (“Asian unicorn”)',
    zhVisible: '看它脸上白色的斑纹和两只并排的尖角——从侧面看两只角会叠成一只。',
    enVisible:
      'Look for the white face markings and the two parallel horns — from the side they overlap and look like one.',
    zhSentences: [
      '这是中南大羚，1992 年才被科学界发现的神秘动物。',
      '因为它的两只角从侧面看像独角，人们叫它“亚洲独角兽”。',
    ],
    enSentences: [
      'This is the saola, a mysterious animal only described by science in 1992.',
      'Its two horns merge into one when seen in profile, earning it the name “Asian unicorn”.',
    ],
    zhPron: 'zhōng nán dà líng',
    enPron: 'SOW-la',
    zhPeriod: '现代（1992 年首次科学描述）',
    enPeriod: 'Present day (first described by science in 1992)',
    zhRegions: ['越南与老挝交界的安南山脉'],
    enRegions: ['Annamite Mountains on the Vietnam–Laos border'],
    size: { kind: 'body-length', minMeters: 1.4, maxMeters: 1.6 },
    diet: 'herbivore',
    zhParent:
      '中南大羚是 20 世纪最惊人的动物学发现之一：1992 年科学家根据猎人保存的角和头骨确认了这个新物种，此前外界完全不知道它的存在。它只生活在越南与老挝边境潮湿的安南山地森林，以无花果叶等植物为食，性情安静。因为极难遇见（野外目击屈指可数），它被称为“亚洲独角兽”。目前它被世界自然保护联盟列为极危物种，估计野外仅存几十到几百只，主要威胁是盗猎者下的钢丝套。',
    enParent:
      'The saola was one of the most spectacular zoological finds of the 20th century: in 1992 scientists described it as a new species from hunters’ horns and skulls, an animal completely unknown to science before. It lives only in the wet mountain forests of the Annamite range on the Vietnam–Laos border, browsing quietly on fig leaves and other vegetation. Sightings are so rare that it is nicknamed the “Asian unicorn”. It is critically endangered — perhaps only tens to a few hundred survive — threatened mainly by wire snares set by poachers.',
    sources: [
      {
        title: 'Saola — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/saola',
      },
      {
        title: 'Saola — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Saola',
      },
    ],
    zhUncertainties: [
      '野外数量极不确定，估计从几十只到几百只不等。',
      '它不是真正的“羚羊亚科”，分类上属于牛亚科，与家牛关系更近。',
    ],
    enUncertainties: [
      'Wild population estimates are highly uncertain, from tens to a few hundred animals.',
      'Despite the “antelope” label it belongs to the cattle subfamily, closer to cows than to true antelopes.',
    ],
    accent: { strong: '#6d5b3e', soft: '#ddd0b4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'zebra-ar',
    zhName: '平原斑马（AR 版）',
    enName: 'Plains Zebra (AR Model)',
    zhLabel: '马科动物（条纹迷彩）',
    enLabel: 'Horse-family grazer (striped camouflage)',
    zhVisible: '仔细看条纹：每只斑马的条纹图案都不一样，还能让狮子眼花缭乱。',
    enVisible:
      'Study the stripes: every zebra’s pattern is different, and a herd’s stripes can dazzle a watching lion.',
    zhSentences: [
      '这是平原斑马，非洲草原上黑白条纹的“马”。',
      '科学家认为条纹可以迷惑吸血蝇虫，让它们不敢降落。',
    ],
    enSentences: [
      'This is the plains zebra, the black-and-white striped “horse” of the African savanna.',
      'Scientists think the stripes confuse biting flies and stop them landing.',
    ],
    zhPron: 'píng yuán bān mǎ',
    enPron: 'playnz ZEE-bra',
    zhPeriod: '现代（马科延续数千万年）',
    enPeriod: 'Present day (horse family tens of millions of years old)',
    zhRegions: ['非洲东部与南部的草原'],
    enRegions: ['grasslands of eastern and southern Africa'],
    size: { kind: 'body-length', minMeters: 2.2, maxMeters: 2.6 },
    diet: 'herbivore',
    zhParent:
      '平原斑马是三种斑马中数量最多的一种，成群生活在非洲东部和南部的草原上，以草为食，每天要迁徙寻找水源。条纹的功能争论了一百多年：目前最有力的证据是它干扰舌蝇、虻等吸血昆虫的视觉定位，同时也可能帮助同伴互相识别、让捕食者难以锁定个体。斑马的皮肤其实是黑色的，条纹是黑底上长出的白毛。',
    enParent:
      'The plains zebra is the most numerous of the three zebra species, grazing in herds across the grasslands of eastern and southern Africa and migrating long distances to water. The purpose of the stripes has been debated for over a century; the strongest current evidence is that they disrupt the visual systems of tsetse flies and horseflies, with possible side benefits for individual recognition and predator confusion. A zebra’s skin is actually black — the stripes are white hairs growing from it.',
    sources: [
      {
        title: 'Plains zebra — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/plains-zebra',
      },
      {
        title: 'Plains zebra — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Plains_zebra',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只斑马模型，二者来源不同；发布前需决定去留或合并。',
      '条纹防蝇说是当前主流假说，但学界仍在继续验证其他解释。',
    ],
    enUncertainties: [
      'Another zebra model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'The fly-deterrent explanation is the leading hypothesis, but research into other stripe functions continues.',
    ],
    accent: { strong: '#3a3a3a', soft: '#e0e0e0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'echidna',
    zhName: '针鼹',
    enName: 'Echidna',
    zhLabel: '会下蛋的哺乳动物',
    enLabel: 'Egg-laying mammal',
    zhVisible: '看它满身的尖刺和长长的嘴巴——它是会下蛋的哺乳动物。',
    enVisible:
      'Look at the spiny coat and long snout — this mammal lays eggs.',
    zhSentences: [
      '这是针鼹，全世界仅有的两种会下蛋的哺乳动物之一。',
      '它用长长的舌头舔食蚂蚁和白蚁。',
    ],
    enSentences: [
      'This is the echidna, one of only two kinds of egg-laying mammals.',
      'It licks up ants and termites with a long, sticky tongue.',
    ],
    zhPron: 'zhēn yǎn',
    enPron: 'i-KID-na',
    zhPeriod: '现代（单孔目延续上亿年）',
    enPeriod: 'Present day (monotreme lineage over 100 million years old)',
    zhRegions: ['澳大利亚', '新几内亚'],
    enRegions: ['Australia', 'New Guinea'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.5 },
    diet: 'carnivore',
    zhParent:
      '针鼹和鸭嘴兽同属单孔目——地球上最原始的哺乳动物，会像爬行动物一样下蛋，又像哺乳动物一样分泌乳汁哺育幼崽。遇到危险时，针鼹会蜷成刺球，或者用强壮的爪子飞快刨土，几分钟内就钻进地里只露出刺尖。它没有牙齿，靠口腔里的角质垫磨碎蚂蚁和白蚁，舌头能伸出 18 厘米。',
    enParent:
      'Echidnas and platypuses are monotremes — the most primitive living mammals, laying eggs like reptiles yet nursing their young with milk. When threatened, an echidna curls into a spiky ball or digs straight down with powerful claws, vanishing into the soil in minutes. It has no teeth; instead, horny pads grind up ants and termites, gathered by a tongue that extends 18 centimetres.',
    sources: [
      {
        title: 'Echidna — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/echidna-monotreme',
      },
      {
        title: 'Short-beaked echidna — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Short-beaked_echidna',
      },
    ],
    zhUncertainties: [
      '体长为常见短吻针鼹的范围；新几内亚的长吻针鼹体型更大且极度濒危。',
      '“食虫”按食性分类归入肉食性。',
    ],
    enUncertainties: [
      'The size covers the common short-beaked echidna; New Guinea’s long-beaked echidnas are larger and critically endangered.',
      'Insect-eating is classified here as carnivory.',
    ],
    accent: { strong: '#7a5230', soft: '#e0c9a8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'emu-ar',
    zhName: '鸸鹋（AR 版）',
    enName: 'Emu (AR Model)',
    zhLabel: '大型不会飞的鸟',
    enLabel: 'Large flightless bird',
    zhVisible: '看它长长的脖子和三条脚趾的大脚——鸸鹋跑起来时速可达 50 公里。',
    enVisible:
      'Look at the long neck and big three-toed feet — an emu can sprint at 50 kilometres per hour.',
    zhSentences: [
      '这是鸸鹋，澳大利亚最大的鸟，个子仅次于鸵鸟。',
      '它虽然不会飞，却是个长跑健将。',
    ],
    enSentences: [
      'This is the emu, Australia’s largest bird, second in height only to the ostrich.',
      'It cannot fly, but it is a champion runner.',
    ],
    zhPron: 'ér miáo',
    enPron: 'EE-myoo',
    zhPeriod: '现代（鸸鹋属延续数百万年）',
    enPeriod: 'Present day (emu lineage millions of years old)',
    zhRegions: ['澳大利亚大部分地区'],
    enRegions: ['most of mainland Australia'],
    size: { kind: 'body-length', minMeters: 1.4, maxMeters: 1.9 },
    diet: 'omnivore',
    zhParent:
      '鸸鹋是世界第二高的鸟，站立高度可达 1.9 米。它的羽毛蓬松得像枯草，小翅膀退化成只有手指大小。鸸鹋爸爸负责孵蛋和带娃：它会在巢上守约八周，期间几乎不吃不喝。鸸鹋是机会主义杂食者，吃种子、果实、花朵、昆虫和小蜥蜴，还常吞石头帮助磨碎食物。它与袋鼠一起出现在澳大利亚国徽上——据说因为它们都“只能向前、不会后退”。',
    enParent:
      'The emu is the world’s second-tallest bird, standing up to 1.9 metres. Its shaggy feathers look like dried grass and its wings have shrunk to finger-sized stubs. Emu fathers do all the childcare, sitting on the eggs for about eight weeks and barely eating or drinking. Emus are opportunistic omnivores — seeds, fruit, flowers, insects and small lizards — and swallow stones to grind their food. The emu appears on Australia’s coat of arms beside the kangaroo, supposedly because neither can walk backwards.',
    sources: [
      {
        title: 'Emu — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/emu',
      },
      {
        title: 'Emu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Emu',
      },
    ],
    zhUncertainties: [
      '体长为嘴尖到尾端长度；站立高度可达 1.9 米。',
      '国徽上“不会后退”的说法是流传的解释，并非官方记载的选定理由。',
    ],
    enUncertainties: [
      'The size is beak-to-tail length; standing height reaches 1.9 metres.',
      'The “cannot walk backwards” coat-of-arms story is a popular explanation rather than a documented official reason.',
    ],
    accent: { strong: '#6b5638', soft: '#e0d0b4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'kangaroo-ar',
    zhName: '红袋鼠（AR 版）',
    enName: 'Red Kangaroo (AR Model)',
    zhLabel: '最大的有袋动物',
    enLabel: 'Largest marsupial',
    zhVisible: '看它强壮的后腿和粗尾巴——尾巴是它跳跃时的“平衡杆”。',
    enVisible:
      'Look at the powerful hind legs and thick tail — the tail works as a counterbalance when hopping.',
    zhSentences: [
      '这是红袋鼠，世界上最大的有袋动物。',
      '它跳一步能跨过 8 米，相当于两辆小汽车的长度！',
    ],
    enSentences: [
      'This is the red kangaroo, the largest marsupial in the world.',
      'A single hop can cover 8 metres — about the length of two small cars!',
    ],
    zhPron: 'hóng dài shǔ',
    enPron: 'red kang-ga-ROO',
    zhPeriod: '现代（袋鼠科延续数千万年）',
    enPeriod: 'Present day (kangaroo family tens of millions of years old)',
    zhRegions: ['澳大利亚内陆干旱草原与荒漠'],
    enRegions: ['arid grasslands and deserts of inland Australia'],
    size: { kind: 'body-length', minMeters: 1.3, maxMeters: 1.6 },
    diet: 'herbivore',
    zhParent:
      '红袋鼠是最大的有袋动物：雄性能长到 90 千克，跳跃时速可达 60 公里，而且跳得越快反而越省力。刚出生的小袋鼠只有一颗花生米那么大，会自己爬进妈妈的育儿袋里继续发育几个月。袋鼠不能向后移动后腿，所以它们几乎不会倒着走。它们以草和嫩叶为食，内陆干旱时能长时间不喝水，靠食物中的水分维持。',
    enParent:
      'The red kangaroo is the largest marsupial: males reach 90 kilograms and can hop at 60 kilometres per hour, and hopping actually becomes more energy-efficient as they speed up. A newborn joey is the size of a peanut and crawls into its mother’s pouch to finish developing over several months. Kangaroos cannot move their hind legs independently backwards, so they rarely walk in reverse. They graze on grasses and leaves and can go long periods without drinking, drawing moisture from their food.',
    sources: [
      {
        title: 'Red kangaroo — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/red-kangaroo',
      },
      {
        title: 'Red kangaroo — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Red_kangaroo',
      },
    ],
    zhUncertainties: [
      '体长为头身长度，不含几乎等长的大尾巴。',
      '本批模型以红袋鼠为原型；其他袋鼠属种类体型明显更小。',
    ],
    enUncertainties: [
      'The size is head-and-body length; the muscular tail nearly doubles the total length.',
      'This model follows the red kangaroo; other kangaroo species are noticeably smaller.',
    ],
    accent: { strong: '#a06633', soft: '#eccfa8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'koala',
    zhName: '考拉',
    enName: 'Koala',
    zhLabel: '树栖有袋动物',
    enLabel: 'Tree-dwelling marsupial',
    zhVisible: '看它毛茸茸的大耳朵和圆鼻子——考拉一天要睡 18 到 22 个小时。',
    enVisible:
      'Look at the fluffy ears and round nose — koalas sleep 18 to 22 hours a day.',
    zhSentences: [
      '这是考拉，住在桉树上的澳大利亚有袋动物。',
      '它几乎只吃桉树叶，这种叶子对别的动物来说可是有毒的。',
    ],
    enSentences: [
      'This is the koala, an Australian marsupial that lives in eucalyptus trees.',
      'It eats almost nothing but eucalyptus leaves, which are poisonous to most other animals.',
    ],
    zhPron: 'kǎo lā',
    enPron: 'koh-AH-la',
    zhPeriod: '现代（考拉科延续数千万年）',
    enPeriod: 'Present day (koala family tens of millions of years old)',
    zhRegions: ['澳大利亚东部与东南部的桉树林'],
    enRegions: ['eucalyptus forests of eastern and south-eastern Australia'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.85 },
    diet: 'herbivore',
    zhParent:
      '考拉不是熊——它是有袋动物，和袋鼠一样把宝宝装在育儿袋里。桉树叶热量低、有毒素，考拉的肝脏能解毒，长长的盲肠负责发酵纤维，但代价是必须长时间睡觉节能。每只考拉只肯吃几十种桉树里的几种叶子。因为栖息地丧失和山火，考拉在 2022 年被澳大利亚政府列为濒危物种。',
    enParent:
      'The koala is not a bear — it is a marsupial, carrying its joey in a pouch like a kangaroo. Eucalyptus leaves are low in calories and laced with toxins; a koala’s liver detoxifies them and an enormous caecum ferments the fibre, but the price is sleeping up to 22 hours a day to save energy. Individual koalas accept leaves from only a handful of eucalyptus species. Habitat loss and bushfires led the Australian government to list the koala as endangered in 2022.',
    sources: [
      {
        title: 'Koala — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/koala',
      },
      {
        title: 'Koala — 世界自然基金会（WWF）',
        url: 'https://www.worldwildlife.org/species/koala',
      },
    ],
    zhUncertainties: [
      '体长区间不含极短的尾巴；南部个体明显大于北部个体。',
      '“濒危”为澳大利亚部分辖区的法定状态，全球红色名录目前列为易危。',
    ],
    enUncertainties: [
      'The size excludes the vestigial tail; southern koalas are markedly larger than northern ones.',
      '“Endangered” is its legal status in parts of Australia; the global Red List currently rates it Vulnerable.',
    ],
    accent: { strong: '#8b8f94', soft: '#e2e4e6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'kookaburra-ar',
    zhName: '笑翠鸟（AR 版）',
    enName: 'Laughing Kookaburra (AR Model)',
    zhLabel: '大型翠鸟（“笑声”闻名）',
    enLabel: 'Giant kingfisher (famous “laugh”)',
    zhVisible: '看它又大又长的喙——笑翠鸟会叼着猎物往树枝上摔打。',
    enVisible:
      'Look at the long, heavy beak — kookaburras whack their prey against a branch before swallowing it.',
    zhSentences: [
      '这是笑翠鸟，叫声像人大笑的翠鸟。',
      '它不捕鱼，专吃蜥蜴、蛇和昆虫。',
    ],
    enSentences: [
      'This is the laughing kookaburra, a kingfisher whose call sounds like human laughter.',
      'It hunts lizards, snakes and insects rather than fish.',
    ],
    zhPron: 'xiào cuì niǎo',
    enPron: 'KUK-a-bur-ra',
    zhPeriod: '现代（翠鸟科延续数千万年）',
    enPeriod: 'Present day (kingfisher family tens of millions of years old)',
    zhRegions: ['澳大利亚东部与西南部'],
    enRegions: ['eastern and south-western Australia'],
    size: { kind: 'body-length', minMeters: 0.28, maxMeters: 0.42 },
    diet: 'carnivore',
    zhParent:
      '笑翠鸟是世界上最大的翠鸟科成员，却几乎不靠近水边：它站在枝头俯视地面，发现蜥蜴、蛇、老鼠或大昆虫后俯冲下去，把猎物摔打在树枝上再整条吞下。全家会在黎明和黄昏齐声“大笑”，用来宣示领地，这串笑声也是电影里“丛林背景音”的常客——哪怕电影演的根本不是澳大利亚。笑翠鸟是一夫一妻制，哥哥姐姐会帮父母喂养弟弟妹妹。',
    enParent:
      'The laughing kookaburra is the world’s largest kingfisher, yet it rarely goes near water: it perches watching the ground, then dives on lizards, snakes, mice or large insects and beats the prey against a branch before swallowing it whole. Families chorus their “laugh” at dawn and dusk to defend their territory — the same laugh Hollywood often dubs over jungle scenes set nowhere near Australia. Kookaburras pair for life, and older siblings help raise the chicks.',
    sources: [
      {
        title: 'Kookaburra — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/kookaburra',
      },
      {
        title: 'Laughing kookaburra — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Laughing_kookaburra',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只笑翠鸟模型，二者来源不同；发布前需决定去留或合并。',
      '体长区间含较长的尾部。',
    ],
    enUncertainties: [
      'Another kookaburra model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'The size range includes the fairly long tail.',
    ],
    accent: { strong: '#7b5c36', soft: '#e8d9bc' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'platypus',
    zhName: '鸭嘴兽',
    enName: 'Platypus',
    zhLabel: '会下蛋的哺乳动物',
    enLabel: 'Egg-laying mammal',
    zhVisible: '看它鸭子般的扁嘴和海狸似的尾巴——它爸爸的脚踝上还藏着毒刺。',
    enVisible:
      'Look at the duck-like bill and beaver-like tail — males even carry venomous spurs on their ankles.',
    zhSentences: [
      '这是鸭嘴兽，会下蛋的哺乳动物，长得像是把几种动物拼在了一起。',
      '它闭着眼睛和鼻子潜水，靠扁嘴感应猎物发出的微弱电流。',
    ],
    enSentences: [
      'This is the platypus, an egg-laying mammal that looks stitched together from several animals.',
      'It dives with eyes and ears shut, using its bill to sense the faint electricity of prey.',
    ],
    zhPron: 'yā zuǐ shòu',
    enPron: 'PLAT-i-pus',
    zhPeriod: '现代（单孔目延续上亿年）',
    enPeriod: 'Present day (monotreme lineage over 100 million years old)',
    zhRegions: ['澳大利亚东部', '塔斯马尼亚'],
    enRegions: ['eastern Australia', 'Tasmania'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.6 },
    diet: 'carnivore',
    zhParent:
      '1799 年第一只鸭嘴兽标本运到英国时，科学家以为是谁把鸭嘴缝在了海狸身上。鸭嘴兽妈妈下蛋后把蛋抱在肚皮上孵化，幼崽舔食母亲腹部渗出的乳汁。它的“鸭嘴”其实是柔软的电感应器官，上面布满数万个电感受器，能在漆黑的水底定位虾和水生昆虫。雄性后脚踝的毒刺能让人剧痛数周。2020 年的研究还发现鸭嘴兽的皮毛在紫外线下会发出蓝绿色荧光。',
    enParent:
      'When the first platypus specimen reached Britain in 1799, scientists suspected a hoax — a duck’s bill sewn onto a beaver’s body. The mother incubates her eggs against her belly, and the hatchlings lap milk that seeps through her skin. The “bill” is a soft electro-sensory organ covered in tens of thousands of receptors that pinpoint shrimp and aquatic insects in pitch-black water. Males carry venomous ankle spurs that cause weeks of pain in humans. In 2020 researchers even found that platypus fur glows blue-green under ultraviolet light.',
    sources: [
      {
        title: 'Platypus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/platypus',
      },
      {
        title: 'Platypus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Platypus',
      },
    ],
    zhUncertainties: [
      '体长含扁平尾巴；雄性明显大于雌性。',
      '生物荧光现象只有少量研究报道，其功能尚不明确。',
    ],
    enUncertainties: [
      'The size includes the flat tail; males are clearly larger than females.',
      'The biofluorescence finding rests on a small number of studies and its function is unknown.',
    ],
    accent: { strong: '#6e4f3a', soft: '#dcc9b8' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'quokka',
    zhName: '短尾矮袋鼠',
    enName: 'Quokka',
    zhLabel: '小型有袋动物（“微笑天使”）',
    enLabel: 'Small marsupial (the “smiling” quokka)',
    zhVisible: '看它的嘴角——天生上扬的嘴角让它看起来总在微笑。',
    enVisible:
      'Look at its mouth — naturally upturned corners make the quokka look as if it is always smiling.',
    zhSentences: [
      '这是短尾矮袋鼠，被称为“世界上最快乐的动物”。',
      '它只生活在澳大利亚西南角的几座小岛和一小块大陆上。',
    ],
    enSentences: [
      'This is the quokka, often called the “world’s happiest animal”.',
      'It lives only on a few islands and one small corner of mainland south-western Australia.',
    ],
    zhPron: 'duǎn wěi ǎi dài shǔ',
    enPron: 'KWOK-a',
    zhPeriod: '现代（袋鼠科延续数千万年）',
    enPeriod: 'Present day (kangaroo family tens of millions of years old)',
    zhRegions: ['澳大利亚西南部', '罗特尼斯岛等近海岛屿'],
    enRegions: ['south-western Australia', 'offshore islands such as Rottnest Island'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.55 },
    diet: 'herbivore',
    zhParent:
      '短尾矮袋鼠是袋鼠的迷你亲戚，大小和家猫差不多，吃草、树叶和嫩枝，能很长时间不喝水。罗特尼斯岛的名字就来自它：1696 年荷兰船长把满岛的短尾矮袋鼠当成了大老鼠，把岛命名为“老鼠窝岛”（Rotte nest）。它的“微笑”来自天生的面部结构，加上不怕人的性格，使它成了自拍明星——但与野生动物合影时不能触摸或喂食。受狐狸、野猫和栖息地丧失威胁，它被列为易危物种。',
    enParent:
      'The quokka is a miniature cousin of the kangaroo, about the size of a house cat, browsing grasses, leaves and stems and going for long stretches without drinking. Rottnest Island is named after it: in 1696 a Dutch captain mistook the island’s quokkas for giant rats and called the place “Rotte nest” — rat’s nest. The famous “smile” comes from its natural facial shape, and its fearless nature has made it a selfie celebrity — though visitors must never touch or feed wildlife. Threatened by foxes, feral cats and habitat loss, the quokka is listed as Vulnerable.',
    sources: [
      {
        title: 'Quokka — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/quokka',
      },
      {
        title: 'Quokka — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Quokka',
      },
    ],
    zhUncertainties: [
      '“最快乐的动物”是媒体昵称，并非科学结论；上扬嘴角只是面部结构。',
      '体长区间不含尾巴。',
    ],
    enUncertainties: [
      '“Happiest animal” is a media nickname, not a scientific finding; the smile is simply facial anatomy.',
      'The size range excludes the tail.',
    ],
    accent: { strong: '#8a6b4a', soft: '#e6d6bd' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'wombat',
    zhName: '袋熊',
    enName: 'Wombat',
    zhLabel: '穴居有袋动物',
    enLabel: 'Burrowing marsupial',
    zhVisible: '看它矮壮的身体和有力的爪子——袋熊是挖洞高手，还拉方形的便便。',
    enVisible:
      'Look at the stocky body and strong claws — wombats are champion diggers that produce cube-shaped droppings.',
    zhSentences: [
      '这是袋熊，考拉的近亲，住在自己挖的地洞里。',
      '它是世界上唯一会拉出方形便便的动物。',
    ],
    enSentences: [
      'This is the wombat, a close relative of the koala that lives in burrows it digs itself.',
      'It is the only animal in the world that produces cube-shaped droppings.',
    ],
    zhPron: 'dài xióng',
    enPron: 'WOM-bat',
    zhPeriod: '现代（袋熊科延续数千万年）',
    enPeriod: 'Present day (wombat family tens of millions of years old)',
    zhRegions: ['澳大利亚东南部', '塔斯马尼亚'],
    enRegions: ['south-eastern Australia', 'Tasmania'],
    size: { kind: 'body-length', minMeters: 0.7, maxMeters: 1.2 },
    diet: 'herbivore',
    zhParent:
      '袋熊是圆滚滚的穴居有袋动物，一晚能吃三到八小时的草和树根。它的育儿袋开口朝后，这样挖洞时泥土不会掉进袋里埋住宝宝。方形便便是怎么来的？科学家发现袋熊肠道的弹性不均匀，消化物在肠道后段被塑成了方块——这能帮它把便便叠在石头上标记领地而不滚走。袋熊的地道网络最长可达 30 米，山火时其他动物也曾躲进袋熊洞避难。',
    enParent:
      'The wombat is a roly-poly burrowing marsupial that grazes on grasses and roots for three to eight hours a night. Its pouch opens backwards so soil cannot fall in onto the joey while it digs. How does it make cubic droppings? Researchers found the wombat’s intestine has uneven stiffness, which shapes the contents into cubes near the end — handy for stacking droppings on rocks as territory markers that will not roll away. Wombat tunnel networks can reach 30 metres, and other animals have been found sheltering in wombat burrows during bushfires.',
    sources: [
      {
        title: 'Wombat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/wombat',
      },
      {
        title: 'Wombat — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Wombat',
      },
    ],
    zhUncertainties: [
      '体长为三种袋熊的综合范围；袋熊没有外露的尾巴。',
      '“山火中主动救助其他动物”的说法流传很广，但科学记录只确认其他动物使用过袋熊洞。',
    ],
    enUncertainties: [
      'The size spans all three wombat species; wombats have no visible tail.',
      'The story that wombats “herd” other animals into burrows during fires is folklore — only burrow sharing is documented.',
    ],
    accent: { strong: '#7a6a58', soft: '#dfd5c6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'bengal-cat',
    zhName: '孟加拉猫',
    enName: 'Bengal Cat',
    zhLabel: '家猫品种（豹纹被毛）',
    enLabel: 'Cat breed (leopard-spotted coat)',
    zhVisible: '看它身上像小豹子一样的玫瑰花斑——这个品种带有野生猫的血统。',
    enVisible:
      'Look at the leopard-style rosettes — this breed descends partly from a wild cat.',
    zhSentences: [
      '这是孟加拉猫，长着豹纹的家猫。',
      '它精力旺盛，很多个体还喜欢玩水。',
    ],
    enSentences: [
      'This is the Bengal, a domestic cat with a wild leopard look.',
      'It is athletic and energetic, and many Bengals actually enjoy water.',
    ],
    zhPron: 'mèng jiā lā māo',
    enPron: 'BEN-gal kat',
    zhPeriod: '现代（品种培育始于 20 世纪 60–80 年代）',
    enPeriod: 'Present day (breed developed from the 1960s–80s)',
    zhRegions: ['美国（品种培育地）'],
    enRegions: ['United States (where the breed was developed)'],
    size: { kind: 'body-length', minMeters: 0.45, maxMeters: 0.65 },
    diet: 'carnivore',
    zhParent:
      '孟加拉猫由家猫与亚洲豹猫杂交培育而来，1983 年获得品种协会正式承认。它的被毛短而浓密，带有玫瑰花斑或大理石纹，部分个体的毛尖还带有独特的“金沙”光泽。杂交最初几代（F1–F3）野性较强，通常从第四代起才作为宠物猫出售。孟加拉猫聪明好动，喜欢攀爬和玩水，需要大量运动和互动，不太适合没时间陪伴的家庭。',
    enParent:
      'The Bengal was developed by crossing domestic cats with the Asian leopard cat and gained formal breed recognition in 1983. Its short, dense coat carries rosettes or marbled swirls, and some cats glitter as if dusted with gold. The first hybrid generations (F1–F3) are too wild for most homes, so pet Bengals are normally four or more generations removed. Bengals are clever, athletic climbers that often like playing in water — they need plenty of exercise and attention.',
    sources: [
      {
        title: 'Bengal cat — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bengal_cat',
      },
      {
        title: 'Bengal — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/bengal/',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；雄性通常比雌性大。',
      '部分司法辖区对豹猫杂交代数有饲养限制，饲养前需查询当地法规。',
    ],
    enUncertainties: [
      'The size excludes the tail; males are usually larger than females.',
      'Some jurisdictions restrict early-generation leopard-cat hybrids, so local rules should be checked before ownership.',
    ],
    accent: { strong: '#b07a3a', soft: '#eed8b0' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'maine-coon',
    zhName: '缅因猫',
    enName: 'Maine Coon',
    zhLabel: '家猫品种（巨型长毛猫）',
    enLabel: 'Cat breed (giant longhair)',
    zhVisible: '看它耳朵尖上的“猞猁毛”和蓬松的大尾巴——它是最大的家猫品种之一。',
    enVisible:
      'Look at the lynx-like ear tufts and the huge bushy tail — this is one of the biggest domestic cat breeds.',
    zhSentences: [
      '这是缅因猫，体型巨大却性格温柔的“温柔巨人”。',
      '它的大爪子像雪鞋，是雪地行走的 native 装备。',
    ],
    enSentences: [
      'This is the Maine Coon, the “gentle giant” of cat breeds.',
      'Its big tufted paws work like snowshoes in winter.',
    ],
    zhPron: 'miǎn yīn māo',
    enPron: 'mayn KOON',
    zhPeriod: '现代（品种形成于 19 世纪的美国）',
    enPeriod: 'Present day (breed established in 19th-century America)',
    zhRegions: ['美国缅因州（品种发源地）'],
    enRegions: ['Maine, United States (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 1.0 },
    diet: 'carnivore',
    zhParent:
      '缅因猫是美国最古老的自然品种之一，也是缅因州的“州猫”。它骨架粗大、被毛防水、耳朵和脚趾间都有御寒的毛簇，雄性体重可达 8–12 千克。缅因猫性格温和、叫声轻柔，爱跟着人走来走去，许多个体还保留着祖先在农船上捕鼠的敏捷身手。吉尼斯“最长家猫”纪录多次由缅因猫保持——鼻子到尾巴尖超过 1.2 米。',
    enParent:
      'The Maine Coon is one of America’s oldest natural breeds and the official state cat of Maine. It has a heavy bone structure, a water-resistant coat, and tufts of fur in its ears and between its toes against the cold; males can weigh 8–12 kilograms. Gentle and quietly vocal, Maine Coons tend to follow their people from room to room, and many keep the quick mousing reflexes of their farm-and-ship ancestors. The record for the world’s longest domestic cat — over 1.2 metres from nose to tail tip — has repeatedly been held by Maine Coons.',
    sources: [
      {
        title: 'Maine Coon — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Maine_Coon',
      },
      {
        title: 'Maine Coon — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/maine-coon-cat/',
      },
    ],
    zhUncertainties: [
      '体长区间上限含极长个体（鼻到尾尖可超 1.2 米）；下限为较短雌性。',
      '“源自浣熊杂交”的民间传说在生物学上不成立。',
    ],
    enUncertainties: [
      'The upper range reflects exceptionally long individuals (over 1.2 metres including the tail); the lower end covers smaller females.',
      'The folk tale of raccoon ancestry is biologically impossible.',
    ],
    accent: { strong: '#6e5a44', soft: '#dfd2ba' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'ragdoll',
    zhName: '布偶猫',
    enName: 'Ragdoll',
    zhLabel: '家猫品种（温顺大型猫）',
    enLabel: 'Cat breed (gentle, large)',
    zhVisible: '看它蓝色的眼睛和软软的身子——被抱起来时会像布娃娃一样放松。',
    enVisible:
      'Look at the blue eyes and floppy body — a Ragdoll goes limp like a cloth doll when picked up.',
    zhSentences: [
      '这是布偶猫，被抱起来会全身放松的“布娃娃”猫。',
      '它性格温顺，喜欢跟在主人身后。',
    ],
    enSentences: [
      'This is the Ragdoll, a cat that relaxes completely when you hold it.',
      'It is famously gentle and loves following its people around.',
    ],
    zhPron: 'bù ǒu māo',
    enPron: 'RAG-dol',
    zhPeriod: '现代（品种培育于 20 世纪 60 年代的美国）',
    enPeriod: 'Present day (breed developed in 1960s America)',
    zhRegions: ['美国加利福尼亚州（品种培育地）'],
    enRegions: ['California, United States (where the breed was developed)'],
    size: { kind: 'body-length', minMeters: 0.45, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '布偶猫由育种者安·贝克在 20 世纪 60 年代的加州培育，因被抱起时像布娃娃一样瘫软而得名。它是半长毛的大型猫，雄性可达 6–9 千克，重点色的脸、耳朵和尾巴配上蓝眼睛。布偶猫成熟很慢，要到 3–4 岁才完全长大。它们对人依恋度高、忍耐力强，但也因此不适合户外放养——温顺的性格使它们在户外容易受伤。',
    enParent:
      'The Ragdoll was bred by Ann Baker in 1960s California and named for its habit of going limp in your arms. It is a large, semi-longhaired cat — males reach 6–9 kilograms — with colourpoint face, ears and tail and striking blue eyes. Ragdolls mature slowly, reaching full size at three to four years old. Their trusting, placid nature makes them poor candidates for free-roaming outdoor life; they do best as indoor cats.',
    sources: [
      {
        title: 'Ragdoll — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Ragdoll',
      },
      {
        title: 'Ragdoll — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/ragdoll/',
      },
    ],
    zhUncertainties: [
      '体长区间不含蓬松的尾巴；雄性明显大于雌性。',
      '“被抱即瘫软”的程度因个体而异，并非每只猫都完全放松。',
    ],
    enUncertainties: [
      'The size excludes the plumed tail; males are clearly larger than females.',
      'The famous “flop” varies by individual — not every Ragdoll goes fully limp.',
    ],
    accent: { strong: '#9a7f68', soft: '#eadfd2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'russian-blue',
    zhName: '俄罗斯蓝猫',
    enName: 'Russian Blue',
    zhLabel: '家猫品种（银蓝短毛）',
    enLabel: 'Cat breed (silver-blue shorthair)',
    zhVisible: '看它蓝灰色的短毛在光线下泛着银色光泽——毛尖像撒了一层银粉。',
    enVisible:
      'Look at the blue-grey coat shimmering with silver — the guard hairs are tipped as if dusted with silver.',
    zhSentences: [
      '这是俄罗斯蓝猫，披着银蓝色“双层大衣”的猫。',
      '它安静又聪明，嘴角上翘像在微笑。',
    ],
    enSentences: [
      'This is the Russian Blue, wrapped in a silvery “double coat”.',
      'It is quiet and clever, with upturned mouth corners like a permanent smile.',
    ],
    zhPron: 'é luó sī lán māo',
    enPron: 'RUSH-an bloo',
    zhPeriod: '现代（品种记载始于 19 世纪末）',
    enPeriod: 'Present day (recorded as a breed from the late 19th century)',
    zhRegions: ['俄罗斯（传说发源地）', '英国与斯堪的纳维亚（品种培育地）'],
    enRegions: ['Russia (traditional origin)', 'Britain and Scandinavia (where the breed was developed)'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.6 },
    diet: 'carnivore',
    zhParent:
      '俄罗斯蓝猫的起源笼罩在传说中：据说 19 世纪水手把它从俄国阿尔汉格尔斯克港带到英国，1875 年起出现在伦敦猫展上。它的被毛是罕见的“双层被毛”，外层护毛尖端银化，摸起来像天鹅绒。绿色的杏仁眼加上嘴角自然上翘，构成著名的“蒙娜丽莎微笑”。它性格安静敏感，对家人忠诚，对陌生人矜持，通常能与孩子和其他宠物相处融洽。',
    enParent:
      'The Russian Blue’s origins are wrapped in legend: sailors supposedly brought it from the Russian port of Arkhangelsk to Britain, and it appeared at London cat shows from 1875. Its rare double coat has silver-tipped guard hairs that feel like velvet. Green almond eyes and naturally upturned mouth corners form the famous “Mona Lisa smile”. Quiet, sensitive and loyal to family, it tends to be reserved with strangers and usually lives happily with children and other pets.',
    sources: [
      {
        title: 'Russian Blue — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Russian_Blue',
      },
      {
        title: 'Russian Blue — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/russian-blue/',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '俄罗斯起源来自传说和早期记载，缺乏直接证据链。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The Russian origin rests on legend and early show records rather than a documented chain of evidence.',
    ],
    accent: { strong: '#5f7285', soft: '#d2dce4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'scottish-fold',
    zhName: '苏格兰折耳猫',
    enName: 'Scottish Fold',
    zhLabel: '家猫品种（折耳）',
    enLabel: 'Cat breed (folded ears)',
    zhVisible: '看它向前折叠的耳朵——这个可爱特征其实来自一种软骨基因突变。',
    enVisible:
      'Look at the forward-folded ears — the cute trait comes from a cartilage gene mutation.',
    zhSentences: [
      '这是苏格兰折耳猫，耳朵像小帽子一样折在头上。',
      '它喜欢像人一样端坐着，被叫做“佛陀坐姿”。',
    ],
    enSentences: [
      'This is the Scottish Fold, whose ears fold forward like a little cap.',
      'It loves sitting upright like a human, a pose nicknamed the “Buddha sit”.',
    ],
    zhPron: 'sū gé lán zhé ěr māo',
    enPron: 'SKOT-ish fohld',
    zhPeriod: '现代（品种源自 1961 年苏格兰的一只农场猫）',
    enPeriod: 'Present day (breed traces to a Scottish farm cat found in 1961)',
    zhRegions: ['苏格兰（品种发源地）'],
    enRegions: ['Scotland (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.6 },
    diet: 'carnivore',
    zhParent:
      '1961 年，苏格兰一只名叫苏西的白色农场猫被发现天生折耳，这个品种由此开始。折耳来自影响软骨的显性基因突变（TRPV4 相关），所有折耳猫出生时耳朵是直的，约三周后才折下。需要特别注意：这个基因也会影响全身软骨，可能导致疼痛的关节病（骨软骨发育不良），因此负责任的繁育者只让折耳猫与立耳猫配对，而一些国家已禁止繁育折耳猫。',
    enParent:
      'In 1961 a white farm cat named Susie was found in Scotland with naturally folded ears, and the breed descends from her. The fold comes from a dominant gene mutation (linked to TRPV4) affecting cartilage; all kittens are born with straight ears that fold at about three weeks old. Importantly, the same gene affects cartilage throughout the body and can cause a painful joint disease (osteochondrodysplasia), so responsible breeders only mate folds with straight-eared cats, and several countries have banned breeding them altogether.',
    sources: [
      {
        title: 'Scottish Fold — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Scottish_Fold',
      },
      {
        title: 'Scottish Fold — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/scottish-fold/',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '折耳基因的健康风险存在程度差异；发布前建议补充动物福利视角的说明。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The severity of the fold gene’s health effects varies; an animal-welfare note should be reviewed before publication.',
    ],
    accent: { strong: '#8a7a6a', soft: '#e5dbd0' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'siamese',
    zhName: '暹罗猫',
    enName: 'Siamese Cat',
    zhLabel: '家猫品种（重点色）',
    enLabel: 'Cat breed (colourpoint)',
    zhVisible: '看它的脸、耳朵和尾巴颜色比身体深——这些深色“重点”是天生的温度地图。',
    enVisible:
      'Look how the face, ears and tail are darker than the body — those “points” are a built-in temperature map.',
    zhSentences: [
      '这是暹罗猫，来自泰国的古老猫种。',
      '它爱“说话”，叫声又响又特别。',
    ],
    enSentences: [
      'This is the Siamese, an ancient breed from Thailand.',
      'It is famously talkative, with a loud, distinctive voice.',
    ],
    zhPron: 'xiān luó māo',
    enPron: 'sy-a-MEEZ',
    zhPeriod: '现代（泰国古代手稿已有记载，19 世纪传入西方）',
    enPeriod: 'Present day (depicted in old Thai manuscripts; reached the West in the 19th century)',
    zhRegions: ['泰国（古称暹罗，品种发源地）'],
    enRegions: ['Thailand (formerly Siam, where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.55 },
    diet: 'carnivore',
    zhParent:
      '暹罗猫的名字来自泰国的古称“暹罗”，14–18 世纪的泰国《猫之诗》手稿里就有重点色猫的插图。1878 年美国驻曼谷领事把一只暹罗猫送给海斯总统的家人，使它成为最早进入西方的东方猫种之一。重点色的成因是温度敏感型酪氨酸酶突变：身体较冷的部位（脸、耳朵、四肢、尾巴）合成更多黑色素，所以幼猫出生时几乎是白色的，深色随成长慢慢显现。暹罗猫极度亲人、好奇心强，响亮的“低音炮”叫声常被比作婴儿啼哭。',
    enParent:
      'The Siamese takes its name from Siam, the old name for Thailand, and colourpoint cats appear in the Thai “Cat-Book Poems” manuscripts of the 14th–18th centuries. In 1878 the American consul in Bangkok sent one to President Hayes’s family, making it among the first Asian breeds in the West. The points come from a temperature-sensitive enzyme: cooler body parts (face, ears, legs, tail) produce more pigment, so kittens are born almost white and darken as they grow. Siamese are intensely people-oriented and inquisitive, with a loud, low-pitched voice often compared to a baby’s cry.',
    sources: [
      {
        title: 'Siamese cat — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Siamese-cat',
      },
      {
        title: 'Siamese cat — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siamese_cat',
      },
    ],
    zhUncertainties: [
      '体长区间不含细长的尾巴。',
      '现代“楔头”暹罗与传统“苹果头”体型差异较大，模型更接近传统型。',
    ],
    enUncertainties: [
      'The size excludes the long, slim tail.',
      'Modern “wedge-head” and traditional “apple-head” Siamese differ in build; the model is closer to the traditional type.',
    ],
    accent: { strong: '#7c5f43', soft: '#ece0c9' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'sphynx-cat-ar',
    zhName: '斯芬克斯猫（AR 版）',
    enName: 'Sphynx Cat (AR Model)',
    zhLabel: '家猫品种（无毛）',
    enLabel: 'Cat breed (hairless)',
    zhVisible: '摸摸看（想象）：它的皮肤像温热的桃子，覆盖着极细的绒毛。',
    enVisible:
      'Imagine the touch: its skin feels like a warm peach, covered in the finest down.',
    zhSentences: [
      '这是斯芬克斯猫，天生几乎没有毛的猫。',
      '因为没有毛保暖，它最喜欢钻被窝和晒太阳。',
    ],
    enSentences: [
      'This is the Sphynx, a cat born nearly hairless.',
      'With no fur coat to keep it warm, it loves duvets and sunny spots.',
    ],
    zhPron: 'sī fēn kè sī māo',
    enPron: 'SFINKS kat',
    zhPeriod: '现代（品种培育始于 20 世纪 60 年代的加拿大）',
    enPeriod: 'Present day (breed developed from the 1960s in Canada)',
    zhRegions: ['加拿大（品种培育地）'],
    enRegions: ['Canada (where the breed was developed)'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.55 },
    diet: 'carnivore',
    zhParent:
      '斯芬克斯猫并非埃及原产——1966 年一只加拿大无毛猫的后代与后来发现的几个无毛个体共同奠定了这个品种，命名只是因为无毛让人想起埃及的斯芬克斯雕像。它其实有一层桃子绒般的细毛，皮肤因没有毛覆盖而皱纹明显。无毛带来特别的照料需求：皮肤油脂没有毛吸收，需要定期温水洗澡；体温流失快，食量比普通猫大，还要注意防晒防寒。它性格外向黏人，常被形容为“狗一样的猫”。',
    enParent:
      'The Sphynx is not Egyptian — the breed descends from hairless cats found in Canada in 1966 and later in Minnesota, and the name merely evokes Egypt’s Sphinx. It actually wears a fine peach-fuzz down, and its uncovered skin shows characterful wrinkles. Hairlessness brings special care: skin oils have no fur to wick into, so regular warm baths are needed; body heat escapes quickly, so Sphynxes eat more than furred cats and need protection from sun and cold. Outgoing and people-glued, they are often called “dog-like cats”.',
    sources: [
      {
        title: 'Sphynx cat — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Sphynx_cat',
      },
      {
        title: 'Sphynx — 国际爱猫联合会（CFA）',
        url: 'https://cfa.org/breed/sphynx/',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只斯芬克斯猫模型，二者来源不同；发布前需决定去留或合并。',
      '体长区间不含尾巴。',
    ],
    enUncertainties: [
      'Another sphynx-cat model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'The size excludes the tail.',
    ],
    accent: { strong: '#b08968', soft: '#efdcc8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'ankylosaurus',
    zhName: '甲龙',
    enName: 'Ankylosaurus',
    zhLabel: '甲龙类恐龙（尾锤）',
    enLabel: 'Armoured dinosaur (tail club)',
    zhVisible: '看它尾巴末端的大骨锤——挥动起来足以砸断袭击者的骨头。',
    enVisible:
      'Look at the bony club at the end of the tail — one swing could break an attacker’s bones.',
    zhSentences: [
      '这是甲龙，全身披着骨甲、尾巴末端长着大锤子的恐龙。',
      '它用尾锤保护自己，连霸王龙也不敢轻易招惹。',
    ],
    enSentences: [
      'This is Ankylosaurus, a dinosaur in bony armour with a club at the end of its tail.',
      'The tail club was such a good defence that even Tyrannosaurus would think twice.',
    ],
    zhPron: 'jiǎ lóng',
    enPron: 'ang-KY-lo-sor-us',
    zhPeriod: '晚白垩世（约 6800 万–6600 万年前）',
    enPeriod: 'Late Cretaceous (about 68–66 million years ago)',
    zhRegions: ['北美洲西部（美国、加拿大）'],
    enRegions: ['western North America (United States, Canada)'],
    size: { kind: 'body-length', minMeters: 6, maxMeters: 8 },
    diet: 'herbivore',
    zhParent:
      '甲龙是甲龙类中最大、最晚出现的成员，与霸王龙生活在同一时代的北美洲。它的背部和头部覆盖着紧密排列的骨质甲板，甲板里还嵌着尖刺，腹部是唯一的软肋，所以它遇到袭击时会趴低身体。尾锤由几块愈合的大骨瘤构成，计算机模拟显示全力挥击可以造成粉碎性骨折。它用喙状嘴切断低矮植物，肠道庞大，一天要吃掉大量蕨类和灌木叶。',
    enParent:
      'Ankylosaurus was the largest and last of the ankylosaurs, sharing Late Cretaceous North America with Tyrannosaurus. Its back and head were paved with interlocking bony plates studded with spikes, leaving only the belly soft — so it probably crouched low when attacked. The tail club, made of fused bony knobs, could shatter bone according to computer simulations. It snipped low plants with a beaked mouth and processed huge volumes of ferns and shrub leaves in a roomy gut.',
    sources: [
      {
        title: 'Ankylosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Ankylosaurus',
      },
      {
        title: 'Ankylosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Ankylosaurus',
      },
    ],
    zhUncertainties: [
      '体长估计来自不完整骨架，范围较宽。',
      '尾锤能造成何种程度的伤害依据的是力学模拟，而非直接观察。',
    ],
    enUncertainties: [
      'The length is estimated from incomplete skeletons, so the range is wide.',
      'The club’s destructive power comes from mechanical simulations, not direct observation.',
    ],
    accent: { strong: '#5f6b4f', soft: '#d6dcc4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'brachiosaurus',
    zhName: '腕龙',
    enName: 'Brachiosaurus',
    zhLabel: '蜥脚类恐龙（前腿更长）',
    enLabel: 'Sauropod (longer front legs)',
    zhVisible: '看它的前腿比后腿长——这让它的肩膀高高耸起，像一台活的吊车。',
    enVisible:
      'Notice the front legs are longer than the back ones — that lifts the shoulders high, like a living crane.',
    zhSentences: [
      '这是腕龙，能吃到十几米高树叶的长脖子恐龙。',
      '它的名字意思是“手臂蜥蜴”，因为它的前腿特别长。',
    ],
    enSentences: [
      'This is Brachiosaurus, a long-necked dinosaur that browsed leaves more than ten metres up.',
      'Its name means “arm lizard” because of those unusually long front legs.',
    ],
    zhPron: 'wàn lóng',
    enPron: 'BRAK-ee-o-sor-us',
    zhPeriod: '晚侏罗世（约 1.54 亿–1.5 亿年前）',
    enPeriod: 'Late Jurassic (about 154–150 million years ago)',
    zhRegions: ['北美洲（美国科罗拉多州等地）'],
    enRegions: ['North America (Colorado region, United States)'],
    size: { kind: 'body-length', minMeters: 18, maxMeters: 22 },
    diet: 'herbivore',
    zhParent:
      '腕龙是侏罗纪北美洲最高的植食恐龙之一：大多数蜥脚类前腿比后腿短，腕龙却相反，使它的背部向上倾斜，头部能探到约 9–13 米高。它的鼻孔开口在头顶的隆起上，早期复原因此把它画成潜水生活的样子，现代研究早已否定了这种看法。成年腕龙体重估计 30–40 吨，每天要吃几百千克树叶。《侏罗纪公园》里第一只震撼出场的恐龙就是腕龙。',
    enParent:
      'Brachiosaurus was among the tallest plant-eaters of Jurassic North America: unlike most sauropods its front legs were longer than its hind legs, tilting the back upwards so the head could reach perhaps 9–13 metres high. Its nostrils sat on a dome on top of the head, which once led artists to paint it wading underwater — an idea modern research has rejected. Adults are estimated at 30–40 tonnes and needed hundreds of kilograms of leaves a day. It was the first awe-inspiring dinosaur seen in the film Jurassic Park.',
    sources: [
      {
        title: 'Brachiosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/brachiosaurus',
      },
      {
        title: 'Brachiosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Brachiosaurus',
      },
    ],
    zhUncertainties: [
      '腕龙化石稀少，体重与体长估计范围较宽。',
      '东非的“布氏腕龙”现已独立为长颈鹿巨龙属，本条目指北美腕龙。',
    ],
    enUncertainties: [
      'Brachiosaurus fossils are scarce, so length and mass estimates carry wide margins.',
      'The East African “Brachiosaurus” brancai is now placed in its own genus, Giraffatitan; this entry covers the North American animal.',
    ],
    accent: { strong: '#6a7a5a', soft: '#d9e0c8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'dilophosaurus-ar',
    zhName: '双脊龙（AR 版）',
    enName: 'Dilophosaurus (AR Model)',
    zhLabel: '早期肉食恐龙（双冠）',
    enLabel: 'Early meat-eating dinosaur (twin crests)',
    zhVisible: '看它头顶上两片薄薄的骨冠——那是它的招牌，不是用来打架的。',
    enVisible:
      'Look at the two thin crests on its head — they were for display, not for fighting.',
    zhSentences: [
      '这是双脊龙，头顶长着两片并排骨冠的早期肉食恐龙。',
      '真实的它不会喷毒，也没有伞状领圈——那是电影编的。',
    ],
    enSentences: [
      'This is Dilophosaurus, an early meat-eater with a pair of crests side by side on its head.',
      'The real animal could not spit venom and had no neck frill — the film invented that.',
    ],
    zhPron: 'shuāng jǐ lóng',
    enPron: 'dy-LOF-o-sor-us',
    zhPeriod: '早侏罗世（约 1.93 亿年前）',
    enPeriod: 'Early Jurassic (about 193 million years ago)',
    zhRegions: ['北美洲（美国亚利桑那州）'],
    enRegions: ['North America (Arizona, United States)'],
    size: { kind: 'body-length', minMeters: 6, maxMeters: 7 },
    diet: 'carnivore',
    zhParent:
      '双脊龙生活在恐龙时代刚开始不久的早侏罗世，是当时北美洲最大的陆地掠食者之一。它头骨细长，两片半圆形的骨冠薄而易碎，古生物学家认为那是用于展示识别或求偶的装饰。1993 年电影《侏罗纪公园》把它塑造成会张开领圈、喷射毒液的小怪物——真实的双脊龙长 6–7 米，远比电影里大，而且没有任何证据表明它有领圈或毒腺。它上颌前端有一个缺口，可能帮助它撕咬鱼类或小动物。',
    enParent:
      'Dilophosaurus lived in the Early Jurassic, when the age of dinosaurs was just beginning, and ranked among the largest land predators of its time in North America. Its snout was long and narrow, and the two semicircular crests were thin and fragile — palaeontologists read them as display structures for recognition or courtship. The 1993 film Jurassic Park turned it into a small monster with a rattling frill and venom spit; the real animal was 6–7 metres long and there is no evidence for either feature. A notch at the front of the upper jaw may have helped it grip fish or small prey.',
    sources: [
      {
        title: 'Dilophosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Dilophosaurus',
      },
      {
        title: 'Dilophosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dilophosaurus',
      },
    ],
    zhUncertainties: [
      '本馆已有正式收录的双脊龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。',
      '骨冠的功能是推断，无法从化石直接证实。',
    ],
    enUncertainties: [
      'This collection already has a published dilophosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.',
      'The crests’ function is inferred and cannot be proven from fossils.',
    ],
    accent: { strong: '#7a5c3a', soft: '#e2d2b8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'parasaurolophus',
    zhName: '副栉龙',
    enName: 'Parasaurolophus',
    zhLabel: '鸭嘴龙类恐龙（长头冠）',
    enLabel: 'Duck-billed dinosaur (long crest)',
    zhVisible: '看它脑袋后面拖着的长管子——那是一支天生的“低音号”。',
    enVisible:
      'Look at the long tube trailing behind its head — a built-in trombone.',
    zhSentences: [
      '这是副栉龙，头顶拖着一根长长的空心冠管。',
      '它用这根管子发出低沉的鸣叫，声音能传很远。',
    ],
    enSentences: [
      'This is Parasaurolophus, with a long hollow crest tube on its head.',
      'It used the tube to trumpet deep calls that carried across the landscape.',
    ],
    zhPron: 'fù zhì lóng',
    enPron: 'pa-ra-SAW-ro-LOF-us',
    zhPeriod: '晚白垩世（约 7650 万–7300 万年前）',
    enPeriod: 'Late Cretaceous (about 76.5–73 million years ago)',
    zhRegions: ['北美洲西部（美国、加拿大）'],
    enRegions: ['western North America (United States, Canada)'],
    size: { kind: 'body-length', minMeters: 7.5, maxMeters: 10 },
    diet: 'herbivore',
    zhParent:
      '副栉龙是鸭嘴龙科中头冠最夸张的成员，空心冠管从鼻孔一直延伸到脑后，长度可以超过一米。科学家用 CT 扫描重建冠管内部并模拟吹奏，得到的音调低沉悠长，类似长号——这种叫声可能用于群体联络或求偶。它的嘴里有数百颗不断替换的牙齿，组成“牙齿电池”来研磨坚韧的植物。副栉龙平时四足行走，逃跑时可以只用两条后腿奔跑。',
    enParent:
      'Parasaurolophus carried the most extravagant crest of any duck-billed dinosaur: a hollow tube running from the nostrils over a metre beyond the back of the head. Scientists CT-scanned the crest and modelled the sound — deep, resonant notes like a trombone, probably used to keep herds in touch or to court mates. Its jaws held hundreds of continuously replaced teeth forming a grinding “dental battery” for tough plants. It usually walked on all fours but could break into a two-legged run when fleeing.',
    sources: [
      {
        title: 'Parasaurolophus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Parasaurolophus',
      },
      {
        title: 'Parasaurolophus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Parasaurolophus',
      },
    ],
    zhUncertainties: [
      '叫声重建来自计算机模拟，实际音域可能更宽。',
      '已知物种的头冠长度差异很大，本条目按最长的沃氏副栉龙描述。',
    ],
    enUncertainties: [
      'The call reconstruction is a computer model; the real vocal range may have been wider.',
      'Crest length varies greatly between species; this entry describes the long-crested P. walkeri.',
    ],
    accent: { strong: '#8a6d45', soft: '#e6d8bd' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pteranodon-ar',
    zhName: '无齿翼龙（AR 版）',
    enName: 'Pteranodon (AR Model)',
    zhLabel: '翼龙（会飞的爬行动物，不是恐龙）',
    enLabel: 'Pterosaur (a flying reptile, not a dinosaur)',
    zhVisible: '看它向后翘的头冠和没有牙齿的长喙——翼龙不是恐龙，是会飞的爬行动物。',
    enVisible:
      'Look at the backward-pointing crest and the long toothless beak — pterosaurs were flying reptiles, not dinosaurs.',
    zhSentences: [
      '这是无齿翼龙，在恐龙时代的天空中滑翔的大翼龙。',
      '它的翼展比一辆小汽车还长，却没有一颗牙齿。',
    ],
    enSentences: [
      'This is Pteranodon, a great pterosaur that soared over the seas of the dinosaur age.',
      'Its wingspan was longer than a small car, yet it had no teeth at all.',
    ],
    zhPron: 'wú chǐ yì lóng',
    enPron: 'te-RAN-o-don',
    zhPeriod: '晚白垩世（约 8600 万–8450 万年前）',
    enPeriod: 'Late Cretaceous (about 86–84.5 million years ago)',
    zhRegions: ['北美洲内陆海道（美国堪萨斯州等地）'],
    enRegions: ['the inland sea of North America (Kansas region, United States)'],
    size: { kind: 'wingspan', minMeters: 5, maxMeters: 7 },
    diet: 'carnivore',
    zhParent:
      '无齿翼龙生活在晚白垩世的北美内陆海道上空，像今天的信天翁一样借助海上气流长时间滑翔，以俯冲捕鱼为食。它的头冠形状因性别而异——雄性头冠大而向上，可能用于展示。翅膀由一根极度延长的第四指撑起皮膜构成，骨骼中空，体重只有十几到几十千克。在陆地上它可能四肢着地行走。注意：翼龙是会飞的爬行动物，与恐龙是近亲但不是恐龙。',
    enParent:
      'Pteranodon soared over the Late Cretaceous inland sea that split North America, riding ocean winds like an albatross and swooping down to catch fish. Crest shape differed between the sexes — males had the larger, upswept crest, probably for display. Each wing was a membrane supported by one hugely elongated fourth finger, and the hollow bones kept weight down to tens of kilograms. On the ground it probably walked on all fours. Remember: pterosaurs were flying reptiles, close cousins of dinosaurs but not dinosaurs themselves.',
    sources: [
      {
        title: 'Pteranodon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pteranodon',
      },
      {
        title: 'Pteranodon — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Pteranodon',
      },
    ],
    zhUncertainties: [
      '本馆已有正式收录的无齿翼龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。',
      '翼展区间主要按雄性估计，雌性明显更小。',
    ],
    enUncertainties: [
      'This collection already has a published pteranodon entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.',
      'The wingspan range chiefly reflects males; females were markedly smaller.',
    ],
    accent: { strong: '#5a6a7a', soft: '#d4dbe2' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'spinosaurus',
    zhName: '棘龙',
    enName: 'Spinosaurus',
    zhLabel: '半水生肉食恐龙（帆背）',
    enLabel: 'Semi-aquatic predator (sail back)',
    zhVisible: '看它背上高高的“帆”和鳄鱼一样的长嘴——棘龙是最会游泳的大型肉食恐龙。',
    enVisible:
      'Look at the tall “sail” on its back and the crocodile-like snout — Spinosaurus was the most water-loving of the big meat-eaters.',
    zhSentences: [
      '这是棘龙，背上长着帆、爱吃鱼的大型肉食恐龙。',
      '它比霸王龙还长，是目前已知最长的肉食恐龙。',
    ],
    enSentences: [
      'This is Spinosaurus, a sail-backed giant that loved catching fish.',
      'Longer even than Tyrannosaurus, it is the longest meat-eating dinosaur known.',
    ],
    zhPron: 'jí lóng',
    enPron: 'SPY-no-sor-us',
    zhPeriod: '晚白垩世（约 9900 万–9350 万年前）',
    enPeriod: 'Late Cretaceous (about 99–93.5 million years ago)',
    zhRegions: ['北非（摩洛哥、埃及）'],
    enRegions: ['North Africa (Morocco, Egypt)'],
    size: { kind: 'body-length', minMeters: 14, maxMeters: 15 },
    diet: 'carnivore',
    zhParent:
      '棘龙的背帆由长达 1.7 米的脊椎棘支撑，可能用于展示或调节体温。2014 年和 2020 年的新化石彻底改写了它的形象：短后腿、宽大的爪子、桨状的尾巴，说明它大半生泡在北非的河流里，像巨型鹭鸶一样捕食鱼类和锯鳐。圆锥形的牙齿适合咬住滑溜的猎物，鼻孔后移让它能边泡在水里边呼吸。关于它到底是“游泳健将”还是“涉水渔夫”，科学家仍在争论。',
    enParent:
      'Spinosaurus wore a sail supported by vertebral spines up to 1.7 metres tall, perhaps for display or temperature control. Fossils revealed in 2014 and 2020 rewrote its image completely: short hind legs, broad claws and a paddle-shaped tail show it spent much of its life in North African rivers, hunting fish and sawfish like a giant heron. Cone-shaped teeth gripped slippery prey, and its nostrils sat far back so it could breathe while mostly submerged. Whether it was an active swimmer or a wading “fisherman” is still hotly debated.',
    sources: [
      {
        title: 'Spinosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/spinosaurus',
      },
      {
        title: 'Spinosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Spinosaurus',
      },
    ],
    zhUncertainties: [
      '最长肉食恐龙的说法基于不完整的化石，估计仍在修正。',
      '“主动游泳”还是“岸边涉水”的生态复原在学界有持续争论。',
    ],
    enUncertainties: [
      'The “longest meat-eater” claim rests on incomplete fossils and estimates keep being revised.',
      'Whether it swam actively or waded at the shore remains an active scientific debate.',
    ],
    accent: { strong: '#4f6b6b', soft: '#cfdddd' },
    habitat: 'water',
    atmosphere: 'underwater',
  },
  {
    slug: 'stegosaurus-ar',
    zhName: '剑龙（AR 版）',
    enName: 'Stegosaurus (AR Model)',
    zhLabel: '装甲恐龙（骨板与尾刺）',
    enLabel: 'Armoured dinosaur (plates and tail spikes)',
    zhVisible: '看它背上两排骨板和尾巴上的四根尖刺——尾巴是武器，骨板可能是“广告牌”。',
    enVisible:
      'Look at the two rows of back plates and the four tail spikes — the tail was a weapon, the plates may have been billboards.',
    zhSentences: [
      '这是剑龙，背着两排大骨板的植食恐龙。',
      '它的脑袋只有小狗那么大，尾巴上的尖刺却能赶跑掠食者。',
    ],
    enSentences: [
      'This is Stegosaurus, a plant-eater carrying two rows of huge plates.',
      'Its brain was dog-sized, but the spikes on its tail could see off predators.',
    ],
    zhPron: 'jiàn lóng',
    enPron: 'STEG-o-sor-us',
    zhPeriod: '晚侏罗世（约 1.55 亿–1.5 亿年前）',
    enPeriod: 'Late Jurassic (about 155–150 million years ago)',
    zhRegions: ['北美洲西部', '葡萄牙'],
    enRegions: ['western North America', 'Portugal'],
    size: { kind: 'body-length', minMeters: 6.5, maxMeters: 9 },
    diet: 'herbivore',
    zhParent:
      '剑龙背上 17–22 块骨板里布满血管沟槽，可能用来展示识别、威吓敌人，也可能帮助散热。尾巴末端四根 60–90 厘米的尖刺有个绰号叫“死神的尾巴”（thagomizer）——这个名字竟然源自漫画《远岸》的一个笑话，后来被科学家正式采用。有化石证据显示异特龙的尾椎曾被剑龙的尾刺刺穿。剑龙的脑容量是出名的笑话素材，但“尾巴里还有第二个大脑”的说法并不正确。',
    enParent:
      'Stegosaurus carried 17–22 plates riddled with blood-vessel grooves — probably for display and recognition, and possibly for shedding heat. The four 60–90-centimetre spikes on its tail are nicknamed the “thagomizer”, a joke name from a Far Side cartoon that scientists cheerfully adopted. One fossil Allosaurus tail bone bears a puncture matching a stegosaur spike. The tiny brain made Stegosaurus a byword for dimness, but the old claim of a “second brain in the hips” is a myth.',
    sources: [
      {
        title: 'Stegosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Stegosaurus',
      },
      {
        title: 'Stegosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Stegosaurus',
      },
    ],
    zhUncertainties: [
      '本馆已有正式收录的剑龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。',
      '骨板的具体功能（展示、识别、散热）难以从化石直接证实。',
    ],
    enUncertainties: [
      'This collection already has a published stegosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.',
      'The exact function of the plates (display, recognition, cooling) cannot be proven directly from fossils.',
    ],
    accent: { strong: '#6b5f4a', soft: '#dcd5c2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'triceratops-ar',
    zhName: '三角龙（AR 版）',
    enName: 'Triceratops (AR Model)',
    zhLabel: '角龙类恐龙（三只角）',
    enLabel: 'Horned dinosaur (three horns)',
    zhVisible: '数它脸上的角：眼睛上方两根长角，鼻子上还有一根短角。',
    enVisible:
      'Count the horns on its face: two long ones above the eyes and a short one on the nose.',
    zhSentences: [
      '这是三角龙，长着三只角和大颈盾的植食恐龙。',
      '它和霸王龙生活在同一时代，是霸王龙的猎物之一。',
    ],
    enSentences: [
      'This is Triceratops, the plant-eater with three horns and a great frilled shield.',
      'It lived at the same time and place as Tyrannosaurus — and was on its menu.',
    ],
    zhPron: 'sān jiǎo lóng',
    enPron: 'try-SER-a-tops',
    zhPeriod: '晚白垩世（约 6800 万–6600 万年前）',
    enPeriod: 'Late Cretaceous (about 68–66 million years ago)',
    zhRegions: ['北美洲西部（美国、加拿大）'],
    enRegions: ['western North America (United States, Canada)'],
    size: { kind: 'body-length', minMeters: 8, maxMeters: 9 },
    diet: 'herbivore',
    zhParent:
      '三角龙是非鸟恐龙灭绝前最后出现的角龙类之一，化石在地狱溪组非常丰富，是科学家了解最透彻的恐龙之一。颈盾由两块颅骨向后延伸而成，年轻个体的颈盾边缘骨片朝外翘起，长大后逐渐与颈盾融合——牛角龙一度被认为是独立属，现在主流观点认为它只是三角龙的老年形态。三角龙用喙状嘴剪断低矮的蕨类和灌木，数百颗牙齿组成的齿系不断替换。有带咬痕的化石显示它确实与霸王龙交过手。',
    enParent:
      'Triceratops was among the last horned dinosaurs before the extinction, and its fossils are so common in the Hell Creek Formation that it is one of the best-understood dinosaurs. The frill is an extension of the skull; in youngsters its edge bones point outwards, fusing as the animal matures — the genus Torosaurus, once thought separate, is now widely read as the elderly form of Triceratops. It cropped low ferns and shrubs with a beak, and its hundreds of teeth formed ever-replaced batteries. Bite-marked fossils confirm real battles with Tyrannosaurus.',
    sources: [
      {
        title: 'Triceratops — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Triceratops',
      },
      {
        title: 'Triceratops — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Triceratops',
      },
    ],
    zhUncertainties: [
      '本馆已有正式收录的三角龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。',
      '“牛角龙即老年三角龙”是主流但仍在争论的假说。',
    ],
    enUncertainties: [
      'This collection already has a published triceratops entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.',
      '“Torosaurus is old Triceratops” is the leading but still debated hypothesis.',
    ],
    accent: { strong: '#7a6a55', soft: '#ded6c6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'tyrannosaurus-rex-ar',
    zhName: '霸王龙（AR 版）',
    enName: 'Tyrannosaurus Rex (AR Model)',
    zhLabel: '大型肉食恐龙（“恐龙之王”）',
    enLabel: 'Giant predator (the “dinosaur king”)',
    zhVisible: '看它香蕉大小的牙齿和短短的前肢——小短手其实非常强壮。',
    enVisible:
      'Look at the banana-sized teeth and the tiny arms — those little arms were surprisingly strong.',
    zhSentences: [
      '这是霸王龙，陆地上咬合力最强的动物之一。',
      '它的名字意思是“暴君蜥蜴王”。',
    ],
    enSentences: [
      'This is Tyrannosaurus rex, with one of the strongest bites of any land animal ever.',
      'Its name means “tyrant lizard king”.',
    ],
    zhPron: 'bà wáng lóng',
    enPron: 'ti-RAN-o-sor-us REKS',
    zhPeriod: '晚白垩世（约 6800 万–6600 万年前）',
    enPeriod: 'Late Cretaceous (about 68–66 million years ago)',
    zhRegions: ['北美洲西部（美国、加拿大）'],
    enRegions: ['western North America (United States, Canada)'],
    size: { kind: 'body-length', minMeters: 12, maxMeters: 13 },
    diet: 'carnivore',
    zhParent:
      '霸王龙是恐龙时代落幕前的顶级掠食者：体重 8–9 吨，咬合力估计 3–6 吨，足以咬碎骨头——它的粪便化石里确实含有骨渣。锯齿状牙齿像铁钉一样粗，断了还能再长。前肢虽短得够不着嘴，却有两根指头和粗壮的肌肉，可能在起身或近身缠斗时派上用场。它的嗅觉极其灵敏，双眼朝前提供立体视觉。幼年霸王龙可能长着一层绒毛状羽毛，成年个体是否有羽毛仍在争论。',
    enParent:
      'Tyrannosaurus rex was the apex predator of the end-Cretaceous world: 8–9 tonnes in weight with a bite estimated at 3–6 tonnes — enough to pulverise bone, and its fossil droppings do contain bone fragments. The serrated teeth were as thick as railway spikes and regrew when lost. The two-fingered arms were too short to reach the mouth but heavily muscled, perhaps used when rising or grappling prey at close quarters. It had an excellent sense of smell and forward-facing eyes for depth perception. Hatchlings may have worn downy feathers; whether adults kept any plumage is still debated.',
    sources: [
      {
        title: 'Tyrannosaurus — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Tyrannosaurus',
      },
      {
        title: 'Tyrannosaurus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Tyrannosaurus',
      },
    ],
    zhUncertainties: [
      '本馆已有正式收录的霸王龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。',
      '成年个体是否有羽毛、咬合力具体数值，均为持续研究中的问题。',
    ],
    enUncertainties: [
      'This collection already has a published tyrannosaurus entry; this model is the Google AR capture, so before publication one will be chosen or the two merged.',
      'Adult plumage and the precise bite-force figure remain open research questions.',
    ],
    accent: { strong: '#5c4a3a', soft: '#d8cec0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'velociraptor',
    zhName: '伶盗龙',
    enName: 'Velociraptor',
    zhLabel: '驰龙类恐龙（羽毛与镰刀爪）',
    enLabel: 'Raptor dinosaur (feathers and sickle claw)',
    zhVisible: '看它后腿上翘起的镰刀爪——真实的伶盗龙只有火鸡那么大，还长着羽毛。',
    enVisible:
      'Look at the raised sickle claw on each foot — the real Velociraptor was turkey-sized and feathered.',
    zhSentences: [
      '这是伶盗龙，电影里被放大成“迅猛龙”的原型。',
      '真实的它浑身长羽，大小和一只火鸡差不多。',
    ],
    enSentences: [
      'This is Velociraptor, the real animal behind the movie “raptor”.',
      'In life it was feathered all over and about the size of a turkey.',
    ],
    zhPron: 'líng dào lóng',
    enPron: 've-LOS-i-rap-tor',
    zhPeriod: '晚白垩世（约 7500 万–7100 万年前）',
    enPeriod: 'Late Cretaceous (about 75–71 million years ago)',
    zhRegions: ['蒙古', '中国内蒙古'],
    enRegions: ['Mongolia', 'Inner Mongolia, China'],
    size: { kind: 'body-length', minMeters: 1.5, maxMeters: 2.0 },
    diet: 'carnivore',
    zhParent:
      '伶盗龙是沙漠中的小型猎手：骨骼轻盈、后腿修长，每只脚的第二趾长着约 6.5 厘米的镰刀爪，用来按住或刺击猎物。2007 年科学家在它的前臂骨上发现了羽茎瘤——羽毛附着的“纽扣”，证明它真的有羽毛（羽毛最初用于保暖和展示，而非飞行）。著名的“搏斗中的恐龙”化石定格了一只伶盗龙与原角龙搏斗的瞬间。《侏罗纪公园》里那些高大的“迅猛龙”其实参考的是恐爪龙，而且去掉了羽毛。',
    enParent:
      'Velociraptor was a light, long-legged hunter of the desert, with a 6.5-centimetre sickle claw on the second toe of each foot for pinning or piercing prey. In 2007 scientists found quill knobs — the “buttons” where feathers anchor — on its forearm bone, proving it really was feathered (feathers evolved for warmth and display, not flight). The famous “Fighting Dinosaurs” fossil captures a Velociraptor locked in combat with a Protoceratops. The towering movie raptors were actually modelled on the larger Deinonychus — and stripped of feathers.',
    sources: [
      {
        title: 'Velociraptor — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Velociraptor',
      },
      {
        title: 'Velociraptor — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Velociraptor',
      },
    ],
    zhUncertainties: [
      '体长区间大部分来自细长的尾巴；体重仅约 15–20 千克。',
      '本模型延续电影式无毛/低羽复原，与科学证据不符，发布前需在文案中明确说明。',
    ],
    enUncertainties: [
      'Much of the length is tail; body mass was only about 15–20 kilograms.',
      'The model follows the film-style scaly restoration, which the fossil evidence contradicts — the copy must say so clearly before publication.',
    ],
    accent: { strong: '#6b5a3f', soft: '#ddd2b8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
]
