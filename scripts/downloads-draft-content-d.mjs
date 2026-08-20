// Per-animal draft content for the model-downloads batch (part D: dog breeds,
// farm and rodent mammals, Japanese insects and fictional characters).
// Consumed by scripts/generate-downloads-draft-packages.mjs.
// Facts follow family-friendly popular-science ranges; every uncertainty is
// echoed in editorial notes. English copy uses British spellings.
export const DOWNLOADS_CONTENT_D = [
  {
    slug: 'akita',
    zhName: '秋田犬',
    enName: 'Akita',
    zhLabel: '日本大型犬',
    enLabel: 'Large Japanese dog',
    zhVisible: '看它卷在背上的蓬松尾巴和像熊一样的脑袋——这是日本古老的雪国犬。',
    enVisible:
      'Look at the fluffy tail curled over its back and the bear-like head — an ancient snow-country dog from Japan.',
    zhSentences: [
      '这是秋田犬，日本最著名的大型犬。',
      '忠犬八公就是一只秋田犬，它的铜像立在东京涩谷车站前。',
    ],
    enSentences: [
      'This is the Akita, Japan’s most famous large dog.',
      'Hachikō, the dog who waited years for his owner, was an Akita — his statue stands outside Tokyo’s Shibuya Station.',
    ],
    zhPron: 'qiū tián quǎn',
    enPron: 'a-KEE-ta',
    zhPeriod: '现代（品种有数百年历史，1931 年被列为日本天然纪念物）',
    enPeriod: 'Present day (centuries-old breed; made a Japanese Natural Monument in 1931)',
    zhRegions: ['日本秋田县（品种发源地）'],
    enRegions: ['Akita Prefecture, Japan (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.9, maxMeters: 1.1 },
    diet: 'carnivore',
    zhParent:
      '秋田犬发源于日本北部多雪的秋田县，最初协助猎人追踪熊和野猪，也担任护卫。它体格魁梧、双层被毛御寒，性格沉稳忠诚，对陌生犬有戒心。忠犬八公在主人去世后九年里每天到涩谷车站等候，成为忠诚的象征；海伦·凯勒访日时获赠的“卡米卡兹号”则把秋田犬带到了美国。秋田犬需要经验丰富的主人、早期社会化和每日运动。',
    enParent:
      'The Akita comes from snowy Akita Prefecture in northern Japan, where it once helped hunters track bear and boar and served as a guard. Powerful and double-coated, it is dignified and loyal but reserved with strange dogs. Hachikō, who kept coming to Shibuya Station for nine years after his owner died, became the world’s symbol of canine loyalty, and Helen Keller’s gift dog Kamikaze-go carried the breed to America. Akitas need experienced owners, early socialisation and daily exercise.',
    sources: [
      {
        title: 'Akita — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/akita/',
      },
      {
        title: 'Akita (dog breed) — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Akita_(dog_breed)',
      },
    ],
    zhUncertainties: [
      '体长区间不含卷尾；日系秋田与美式秋田体型标准不同。',
      '对陌生人的容忍度个体差异较大，与早期社会化密切相关。',
    ],
    enUncertainties: [
      'The size excludes the curled tail; Japanese and American Akita types differ in build.',
      'Tolerance of strangers varies individually and depends heavily on early socialisation.',
    ],
    accent: { strong: '#9c6b30', soft: '#ecdcbe' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'australian-shepherd',
    zhName: '澳大利亚牧羊犬',
    enName: 'Australian Shepherd',
    zhLabel: '牧羊犬（其实来自美国）',
    enLabel: 'Herding dog (actually American)',
    zhVisible: '看它的陨石色斑纹——名字里有“澳大利亚”，它却是在美国培育的。',
    enVisible:
      'Look at the merle pattern — despite the name, this breed was developed in the United States.',
    zhSentences: [
      '这是澳大利亚牧羊犬，牛仔牧场上最忙碌的狗。',
      '它会用眼神和快速的移动把羊群赶到一起。',
    ],
    enSentences: [
      'This is the Australian Shepherd, the busiest dog on the ranch.',
      'It gathers sheep with its gaze and quick, darting movements.',
    ],
    zhPron: 'ào dà lì yà mù yáng quǎn',
    enPron: 'os-TRAYL-yan SHEP-erd',
    zhPeriod: '现代（19 世纪在美国西部定型）',
    enPeriod: 'Present day (standardised in the American West in the 19th century)',
    zhRegions: ['美国西部（品种定型地）'],
    enRegions: ['the western United States (where the breed was standardised)'],
    size: { kind: 'body-length', minMeters: 0.8, maxMeters: 1.0 },
    diet: 'carnivore',
    zhParent:
      '澳大利亚牧羊犬的名字是个误会：19 世纪从澳大利亚来到美国的巴斯克牧羊人带着他们的牧羊犬，美国人便把这些狗叫作“澳大利亚牧羊犬”，而真正定型这个品种的是美国西部的牧场。它聪明、精力无穷，以“会管理牲畜”著称，还常在牛仔竞技表演和飞盘比赛中亮相。常见陨石色（merle）斑纹可能伴随眼部遗传问题，负责任的繁育需要做基因检测。它需要大量运动和脑力工作，不适合久坐的家庭。',
    enParent:
      'The name is a mix-up: in the 19th century Basque shepherds arrived in America by way of Australia with their herding dogs, and Americans labelled the dogs “Australian shepherds” — the breed itself was standardised on ranches in the American West. Brilliant and tireless, it is famous for managing livestock and stars in rodeo shows and frisbee competitions. The popular merle pattern can carry inherited eye defects, so responsible breeders run genetic tests. This dog needs heavy daily exercise and mental work, and is a poor fit for sedentary homes.',
    sources: [
      {
        title: 'Australian Shepherd — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/australian-shepherd/',
      },
      {
        title: 'Australian Shepherd — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Australian_Shepherd',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；部分个体天生短尾。',
      '“产自澳大利亚”是历史上的误传，品种定型发生在美国。',
    ],
    enUncertainties: [
      'The size excludes the tail; some individuals are born with a natural bobtail.',
      'The “Australian origin” is a historical misunderstanding — the breed was fixed in the United States.',
    ],
    accent: { strong: '#4f5f77', soft: '#d5dbe6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'beagle',
    zhName: '比格犬',
    enName: 'Beagle',
    zhLabel: '嗅觉猎犬',
    enLabel: 'Scent hound',
    zhVisible: '看它耷拉着的大耳朵——大耳朵能把地上的气味“扫”向鼻子。',
    enVisible:
      'Look at the long drooping ears — they sweep scents from the ground up towards the nose.',
    zhSentences: [
      '这是比格犬，靠鼻子工作的猎犬。',
      '它的鼻子有两亿多个嗅觉感受器，是人类的四十多倍。',
    ],
    enSentences: [
      'This is the Beagle, a hound that works by nose.',
      'Its nose carries over 200 million scent receptors — more than forty times ours.',
    ],
    zhPron: 'bǐ gé quǎn',
    enPron: 'BEE-gul',
    zhPeriod: '现代（现代品种定型于 19 世纪的英国）',
    enPeriod: 'Present day (modern breed fixed in 19th-century Britain)',
    zhRegions: ['英国（品种定型地）'],
    enRegions: ['United Kingdom (where the modern breed was fixed)'],
    size: { kind: 'body-length', minMeters: 0.55, maxMeters: 0.7 },
    diet: 'carnivore',
    zhParent:
      '比格犬是猎兔的小型猎犬：猎人徒步跟在欢叫的比格犬群后面追兔子，所以它天生嗓门洪亮、合群、耐力强。它的嗅觉仅次于寻血猎犬，机场检疫里常见它嗅查行李中的食物。史努比的原型就是比格犬。它性格友善、和孩子相处融洽，但“鼻子一开机就听不见你叫它”，出门必须牵绳。贪吃天性也让它容易发胖，需要控制食量。',
    enParent:
      'The Beagle is a small hound bred for hare hunting on foot, which made it vocal, sociable and enduring. Its nose is second only to the bloodhound’s, and airport “beagle brigades” sniff luggage for hidden food. Snoopy is a Beagle. Friendly and child-proof in temperament, it famously “turns its ears off” when the nose switches on, so a lead is essential outdoors — and its love of food makes portion control a must.',
    sources: [
      {
        title: 'Beagle — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/beagle/',
      },
      {
        title: 'Beagle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Beagle',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '嗅觉感受器数量是文献中的约数，不同资料口径不一。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The receptor count is a literature approximation and varies between sources.',
    ],
    accent: { strong: '#8a5a2b', soft: '#e8d4b4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'border-collie',
    zhName: '边境牧羊犬',
    enName: 'Border Collie',
    zhLabel: '牧羊犬（“最聪明”的犬种）',
    enLabel: 'Herding dog (the “cleverest” breed)',
    zhVisible: '看它俯身注视的姿势——这叫“眼神控制”，是牧羊犬赶羊的秘密武器。',
    enVisible:
      'Look at the crouched, staring pose — that is “the eye”, the collie’s secret weapon for moving sheep.',
    zhSentences: [
      '这是边境牧羊犬，被公认为最聪明的犬种。',
      '一只叫“追逐者”的边境牧羊犬记住了一千多个玩具的名字。',
    ],
    enSentences: [
      'This is the Border Collie, widely considered the cleverest dog breed.',
      'One famous collie, Chaser, learnt the names of over a thousand toys.',
    ],
    zhPron: 'biān jìng mù yáng quǎn',
    enPron: 'BOR-der KOL-ee',
    zhPeriod: '现代（19 世纪定型于英格兰与苏格兰边境）',
    enPeriod: 'Present day (fixed in the 19th century on the England–Scotland border)',
    zhRegions: ['英国（英格兰与苏格兰边境地区）'],
    enRegions: ['the border country of England and Scotland'],
    size: { kind: 'body-length', minMeters: 0.75, maxMeters: 0.9 },
    diet: 'carnivore',
    zhParent:
      '边境牧羊犬得名于英格兰与苏格兰的边境山区，那里的牧羊人世代选育“会工作的狗”。现代边牧的血统大多可追溯到 1893 年一只名叫 Old Hemp 的传奇种犬。它用压低身体、紧盯羊群的“眼神”控制羊的走向，学习能力惊人：心理学家斯坦利·科伦把它列为工作服从智力第一的品种，边牧“追逐者”能识别 1022 个玩具的名称。旺盛的精力意味着它把“追移动的东西”当成天职——追孩子的自行车、扫地机器人都在列，需要大量运动和任务。',
    enParent:
      'The Border Collie is named for the hill country on the England–Scotland border, where shepherds bred purely for working ability. Most modern collies descend from a legendary 1893 dog called Old Hemp. It steers sheep by crouching and fixing them with “the eye”, and its learning power is famous: psychologist Stanley Coren ranked it first for working intelligence, and the collie Chaser recognised 1,022 toy names. That energy has to go somewhere — herding the children’s bicycles is a favourite — so this breed needs serious daily exercise and jobs to do.',
    sources: [
      {
        title: 'Border Collie — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/border-collie/',
      },
      {
        title: 'Border Collie — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Border_Collie',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“最聪明”指的是工作服从智力排名，犬类智力有多种衡量方式。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      '“Cleverest” refers to working and obedience rankings — canine intelligence has many dimensions.',
    ],
    accent: { strong: '#3b3b3b', soft: '#dadada' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'bulldog',
    zhName: '英国斗牛犬',
    enName: 'Bulldog',
    zhLabel: '中型伴侣犬',
    enLabel: 'Medium companion dog',
    zhVisible: '看它皱巴巴的脸和宽大的下巴——这个品种早已告别斗牛场，成了沙发上的哲学家。',
    enVisible:
      'Look at the wrinkled face and wide jaw — this breed left the bull ring long ago and became a sofa philosopher.',
    zhSentences: [
      '这是英国斗牛犬，一脸严肃其实脾气很温和。',
      '它打呼噜的声音像一台小拖拉机。',
    ],
    enSentences: [
      'This is the Bulldog — a serious face hiding a gentle nature.',
      'Its snore sounds like a tiny tractor.',
    ],
    zhPron: 'dòu niú quǎn',
    enPron: 'BUL-dog',
    zhPeriod: '现代（斗牛运动 1835 年被禁后转型为伴侣犬）',
    enPeriod: 'Present day (reinvented as a companion after bull-baiting was banned in 1835)',
    zhRegions: ['英国（品种发源地）'],
    enRegions: ['United Kingdom (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.5, maxMeters: 0.65 },
    diet: 'carnivore',
    zhParent:
      '斗牛犬最初为残酷的“纵犬咬牛”娱乐培育：矮壮的身形让牛难以挑翻，宽大的下颌负责死死咬住。1835 年英国禁止这项运动后，繁育者把它改造成温顺的伴侣犬，如今它是英国的国家象征之一，也是耶鲁大学等多所大学的吉祥物。短鼻子带来耐热差、呼吸音重等问题（短吻品种通病），夏天要特别注意防暑。它性格恋家、对孩子宽容，运动量需求低。',
    enParent:
      'The Bulldog was first bred for the cruel sport of bull-baiting: a low-slung body made it hard for the bull to toss, and the wide jaws locked on. After Britain banned the sport in 1835, breeders rebuilt it into a gentle companion; today it is a national symbol of Britain and the mascot of Yale and many other universities. The short muzzle means poor heat tolerance and noisy breathing (typical of flat-faced breeds), so summer heat is dangerous. Affectionate, tolerant of children and modest in exercise needs, it is above all a homebody.',
    sources: [
      {
        title: 'Bulldog — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/bulldog/',
      },
      {
        title: 'Bulldog — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bulldog',
      },
    ],
    zhUncertainties: [
      '体长区间不含短尾。',
      '短吻品种普遍存在呼吸与散热问题，饲养前应了解相关福利争议。',
    ],
    enUncertainties: [
      'The size excludes the short tail.',
      'Flat-faced breeds commonly suffer breathing and heat-regulation problems; the welfare debate should be understood before ownership.',
    ],
    accent: { strong: '#8f6a4a', soft: '#e8d8c2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'bull-terrier',
    zhName: '牛头梗',
    enName: 'Bull Terrier',
    zhLabel: '梗犬（“蛋形头”）',
    enLabel: 'Terrier (the “egg head”)',
    zhVisible: '看它从侧面圆圆隆起的头顶——这是犬类中独一无二的“蛋形头”。',
    enVisible:
      'Look at the smoothly domed head in profile — the “egg head” is unique in the dog world.',
    zhSentences: [
      '这是牛头梗，长着一颗蛋形脑袋的梗犬。',
      '它肌肉发达又爱玩，外号“穿着狗装的孩子”。',
    ],
    enSentences: [
      'This is the Bull Terrier, the terrier with an egg-shaped head.',
      'Muscular and mischievous, it is nicknamed “the kid in a dog suit”.',
    ],
    zhPron: 'niú tóu gěng',
    enPron: 'bul TER-ee-er',
    zhPeriod: '现代（19 世纪中期在英国定型）',
    enPeriod: 'Present day (fixed in mid-19th-century Britain)',
    zhRegions: ['英国（品种定型地）'],
    enRegions: ['United Kingdom (where the breed was fixed)'],
    size: { kind: 'body-length', minMeters: 0.55, maxMeters: 0.7 },
    diet: 'carnivore',
    zhParent:
      '牛头梗由斗牛犬与已灭绝的英国白梗等杂交而来，最初用于斗犬；19 世纪中叶繁育者詹姆斯·欣克斯把它改造成白色的“绅士伴侣犬”，独特的蛋形头部轮廓在此过程中逐渐形成。它精力旺盛、贪玩、对家人极度忠诚，但固执又冲动，需要坚定而温和的训练和充分的运动。白色个体有较明显的先天性耳聋风险，繁育筛查很重要。',
    enParent:
      'The Bull Terrier descends from bulldog–terrier crosses made for dog fighting; around the 1850s breeder James Hinks refashioned it into a white “gentleman’s companion”, and the egg-shaped head profile emerged over the following decades. Exuberant, clownish and fiercely loyal to family, it is also stubborn and impulsive, needing firm but kind training and plenty of exercise. White dogs carry a notable risk of congenital deafness, so breeding screening matters.',
    sources: [
      {
        title: 'Bull Terrier — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/bull-terrier/',
      },
      {
        title: 'Bull Terrier — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bull_Terrier',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“蛋形头”是逐步选育出的极端特征，20 世纪中期才完全定型。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The egg-shaped head is an extreme trait selected gradually and only fully fixed in the 20th century.',
    ],
    accent: { strong: '#9a9186', soft: '#e8e3da' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'cane-corso-ar',
    zhName: '卡斯罗犬（AR 版）',
    enName: 'Cane Corso (AR Model)',
    zhLabel: '意大利护卫犬',
    enLabel: 'Italian guardian dog',
    zhVisible: '看它宽阔的头和结实的身体——名字来自拉丁语“守护犬”。',
    enVisible:
      'Look at the broad head and powerful body — the breed name comes from Latin for “guardian dog”.',
    zhSentences: [
      '这是卡斯罗犬，意大利古老的护卫犬和农场犬。',
      '它的祖先可以追溯到古罗马的战争犬。',
    ],
    enSentences: [
      'This is the Cane Corso, an ancient Italian guardian and farm dog.',
      'Its ancestors are traced back to the war dogs of ancient Rome.',
    ],
    zhPron: 'kǎ sī luó quǎn',
    enPron: 'KAH-nay KOR-so',
    zhPeriod: '现代（品种传统可溯至古罗马，20 世纪 80 年代复兴）',
    enPeriod: 'Present day (tradition traced to ancient Rome; revived in the 1980s)',
    zhRegions: ['意大利南部（品种发源地）'],
    enRegions: ['southern Italy (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.2 },
    diet: 'carnivore',
    zhParent:
      '卡斯罗的名字通常被追溯到拉丁语“cohors”（护卫、庭院卫队）。它曾在意大利南部的农场里看守牲畜、驱赶野猪、护卫家园，第二次世界大战后几乎灭绝，20 世纪 80 年代爱好者重新收集乡间残存的犬只复兴了这个品种。它沉稳、专注、对家人忠诚，但护卫本能强，必须由有经验的主人进行系统的社会化训练。',
    enParent:
      'The name Cane Corso is usually traced to the Latin “cohors”, meaning guardian or courtyard watch. It worked on southern Italian farms guarding stock, driving boar and protecting the homestead, then nearly vanished after the Second World War; in the 1980s enthusiasts gathered the remaining country dogs and rebuilt the breed. Steady, focused and devoted to family, it has strong guardian instincts and needs an experienced owner and systematic socialisation.',
    sources: [
      {
        title: 'Cane Corso — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/cane-corso/',
      },
      {
        title: 'Cane Corso — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cane_Corso',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只意大利敖犬（卡斯罗）模型，二者来源不同；发布前需决定去留或合并。',
      '“直系源自古罗马战犬”是品种传统叙述，缺乏连续谱系证据。',
    ],
    enUncertainties: [
      'Another Cane Corso model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'Direct descent from Roman war dogs is breed tradition, not a documented pedigree.',
    ],
    accent: { strong: '#4a4038', soft: '#d6cfc4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'chihuahua',
    zhName: '吉娃娃',
    enName: 'Chihuahua',
    zhLabel: '最小的犬种',
    enLabel: 'Smallest dog breed',
    zhVisible: '看它大大的耳朵和眼睛——它是世界上最小的犬种，体重常常不到两千克。',
    enVisible:
      'Look at the huge ears and eyes — this is the world’s smallest dog breed, often under two kilograms.',
    zhSentences: [
      '这是吉娃娃，口袋大小的墨西哥犬。',
      '个子虽小，它却觉得自己是一只大狗。',
    ],
    enSentences: [
      'This is the Chihuahua, a pocket-sized dog from Mexico.',
      'Tiny as it is, it believes itself to be a very big dog.',
    ],
    zhPron: 'jí wá wa',
    enPron: 'chi-WAH-wa',
    zhPeriod: '现代（血统可追溯到古代中美洲伴侣犬）',
    enPeriod: 'Present day (descended from ancient Central American companion dogs)',
    zhRegions: ['墨西哥（奇瓦瓦州，品种得名地）'],
    enRegions: ['Mexico (Chihuahua state, the breed’s namesake)'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.45 },
    diet: 'carnivore',
    zhParent:
      '吉娃娃因墨西哥奇瓦瓦州得名，祖先常被认为是古代托尔特克人饲养的“泰奇奇”伴侣犬。它脑袋呈苹果形，头顶常有终生不闭合的囟门（像婴儿的软头顶），需要避免磕碰。性格黏人、警觉、爱叫，对主人忠诚度极高，对陌生人多疑。因为太小，它容易低血糖、怕冷，冬天常需要穿衣服。',
    enParent:
      'The Chihuahua takes its name from the Mexican state of Chihuahua, and its ancestor is usually identified as the Techichi, a companion dog of the ancient Toltecs. The head is apple-domed and many keep a soft spot (molera) for life, like a baby’s fontanelle, so bumps must be avoided. Clingy, alert and vocal, it bonds fiercely with its person and suspects strangers. Being tiny brings real vulnerabilities — low blood sugar and cold intolerance — so winter jumpers are a genuine need.',
    sources: [
      {
        title: 'Chihuahua — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/chihuahua/',
      },
      {
        title: 'Chihuahua (dog breed) — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“直系源自泰奇奇犬”是主流叙述，缺乏完整的谱系证据链。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'Direct descent from the Techichi is the standard account, but the pedigree chain is undocumented.',
    ],
    accent: { strong: '#b98a5a', soft: '#f0e0c8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'chow-chow',
    zhName: '松狮犬',
    enName: 'Chow Chow',
    zhLabel: '中国古老犬种',
    enLabel: 'Ancient Chinese breed',
    zhVisible: '看它的舌头——蓝黑色的舌头是松狮犬独一无二的标志。',
    enVisible:
      'Look at its tongue — a blue-black tongue is the Chow Chow’s unique signature.',
    zhSentences: [
      '这是松狮犬，来自中国的古老犬种。',
      '它走路像踩着高跷，是因为后腿膝盖几乎不弯曲。',
    ],
    enSentences: [
      'This is the Chow Chow, an ancient breed from China.',
      'It walks as if on stilts because its hind knees barely bend.',
    ],
    zhPron: 'sōng shī quǎn',
    enPron: 'chow chow',
    zhPeriod: '现代（中国两千多年前已有类似记载）',
    enPeriod: 'Present day (Chow-like dogs recorded in China over two thousand years ago)',
    zhRegions: ['中国北方（品种发源地）'],
    enRegions: ['northern China (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.7, maxMeters: 0.85 },
    diet: 'carnivore',
    zhParent:
      '松狮犬是中国最古老的犬种之一，汉代的陶俑中就有它的形象。它曾承担狩猎、拉橇和看护的工作。蓝黑色的舌头来自高浓度的黑色素沉积，幼犬出生时舌头是粉色的，几周后才变深。后腿几乎直立的“踩高跷”步态来自角度很小的膝关节。它性格独立、像猫一样爱干净、对家人忠诚但对陌生人冷淡，双层厚被毛需要定期梳理，夏天怕热。',
    enParent:
      'The Chow Chow is one of China’s oldest breeds — pottery figurines from the Han dynasty already show its outline. It worked as a hunter, hauler and guard. The blue-black tongue comes from dense melanin pigment; puppies are born with pink tongues that darken within weeks. The stilted gait comes from unusually straight hind knees. Independent, almost cat-clean and loyal to family but aloof with strangers, it wears a thick double coat that needs regular grooming — and it suffers in summer heat.',
    sources: [
      {
        title: 'Chow Chow — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/chow-chow/',
      },
      {
        title: 'Chow Chow — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Chow_Chow',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“两千多年历史”来自陶俑等间接证据，确切的品种谱系无法追溯那么久远。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The “two thousand years” claim rests on figurines and similar indirect evidence; the exact pedigree cannot be traced that far.',
    ],
    accent: { strong: '#8a5a30', soft: '#e8d0b0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'cocker-spaniel',
    zhName: '可卡犬',
    enName: 'Cocker Spaniel',
    zhLabel: '猎鹬犬',
    enLabel: 'Woodcock spaniel',
    zhVisible: '看它绸缎一样的长耳朵——“可卡”这个名字来自它最擅长猎的丘鹬。',
    enVisible:
      'Look at the silky long ears — the name “cocker” comes from the woodcock it was bred to flush.',
    zhSentences: [
      '这是可卡犬，曾经专门在灌木丛里惊起丘鹬的猎犬。',
      '它摇尾巴的速度在犬界数一数二。',
    ],
    enSentences: [
      'This is the Cocker Spaniel, a hunting dog bred to flush woodcock from cover.',
      'Its tail wags at one of the fastest rates in the dog world.',
    ],
    zhPron: 'kě kǎ quǎn',
    enPron: 'KOK-er SPAN-yel',
    zhPeriod: '现代（19 世纪在英国从西班牙猎犬中分化定型）',
    enPeriod: 'Present day (separated from other spaniels in 19th-century Britain)',
    zhRegions: ['英国（品种定型地）'],
    enRegions: ['United Kingdom (where the breed was fixed)'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '西班牙猎犬家族按猎物分工：体型较小、专门惊起丘鹬（woodcock）的一支就成了“Cocker”。它钻进茂密灌木把鸟轰出来，再在射手命中后把猎物衔回。长耳朵与绸缎被毛是标志，但长耳朵也容易藏污纳垢、引发耳炎，需要经常清洁。可卡犬性格甜美、爱玩爱叫，是优秀的家庭犬；美国可卡与英国可卡现已分为两个品种。',
    enParent:
      'Spaniels were divided by quarry: the smaller dogs specialising in woodcock became “cockers”. A cocker drives into thick cover to flush the bird, then retrieves it after the shot. The long silky ears are the breed signature — and a trap for dirt and infection, so ears need regular cleaning. Sweet-natured, playful and vocal, it makes a fine family dog; American and English Cocker Spaniels are now separate breeds.',
    sources: [
      {
        title: 'Cocker Spaniel — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/cocker-spaniel/',
      },
      {
        title: 'English Cocker Spaniel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/English_Cocker_Spaniel',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；英卡与美卡体型有差异。',
      '长毛型耳朵与眼睑的护理需求因个体而异。',
    ],
    enUncertainties: [
      'The size excludes the tail; English and American cockers differ in build.',
      'Ear- and eye-care needs of the long coat vary by individual.',
    ],
    accent: { strong: '#6e4f30', soft: '#e0cfb8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'dachshund',
    zhName: '腊肠犬',
    enName: 'Dachshund',
    zhLabel: '獾穴猎犬（长身短腿）',
    enLabel: 'Badger hound (long body, short legs)',
    zhVisible: '看它又长又低的身体——这身“腊肠”造型是为了钻进獾洞而设计的。',
    enVisible:
      'Look at the long, low body — the “sausage” shape was designed for going down badger setts.',
    zhSentences: [
      '这是腊肠犬，德语名字的意思是“獾狗”。',
      '它敢钻进地洞里独自面对比它大的獾。',
    ],
    enSentences: [
      'This is the Dachshund — the German name literally means “badger dog”.',
      'It was bred to dive into burrows and face a badger alone underground.',
    ],
    zhPron: 'là cháng quǎn',
    enPron: 'DAKS-hund',
    zhPeriod: '现代（数百年历史，19 世纪在德国定型）',
    enPeriod: 'Present day (centuries old; standardised in 19th-century Germany)',
    zhRegions: ['德国（品种定型地）'],
    enRegions: ['Germany (where the breed was standardised)'],
    size: { kind: 'body-length', minMeters: 0.55, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '腊肠犬的长身体、大肺活量、铲形前爪和粗尾巴都是“地下工作装备”：钻进獾洞后，猎人可以拽着尾巴把它拉出来。它按体型分标准型和迷你型，按被毛分短毛、长毛和刚毛三种。勇敢到近乎鲁莽的性格来自獾洞里的单挑传统。长长的脊椎是它最大的弱点——跳沙发、爬楼梯都可能损伤椎间盘，家里最好准备宠物坡道。1972 年慕尼黑奥运会的吉祥物“瓦尔迪”就是一只腊肠犬。',
    enParent:
      'The Dachshund’s long body, big lungs, paddle-shaped front paws and sturdy tail are underground work gear: the hunter could haul the dog back out of the sett by its tail. It comes in standard and miniature sizes and in smooth, long and wire coats. The reckless courage is a legacy of one-on-one badger fights in the dark. That long spine is the breed’s weak point — jumping off sofas and climbing stairs can damage its discs, so ramps help. “Waldi”, mascot of the 1972 Munich Olympics, was a dachshund.',
    sources: [
      {
        title: 'Dachshund — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/dachshund/',
      },
      {
        title: 'Dachshund — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dachshund',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；标准型与迷你型差异较大。',
      '椎间盘疾病风险显著高于一般犬种，饲养前应了解。',
    ],
    enUncertainties: [
      'The size excludes the tail; standard and miniature sizes differ considerably.',
      'The breed’s risk of disc disease is well above average and should be understood before ownership.',
    ],
    accent: { strong: '#7a4a2b', soft: '#e4d0ba' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'doberman',
    zhName: '杜宾犬',
    enName: 'Doberman',
    zhLabel: '护卫犬',
    enLabel: 'Guard dog',
    zhVisible: '看它修长结实的身体和警觉的站姿——这是为护卫工作而设计的犬种。',
    enVisible:
      'Look at the sleek, athletic body and alert stance — a breed designed from scratch for protection work.',
    zhSentences: [
      '这是杜宾犬，以它的培育者路易斯·杜伯曼命名。',
      '它又快又壮，是世界上最优秀的护卫犬之一。',
    ],
    enSentences: [
      'This is the Doberman, named after its creator, Louis Dobermann.',
      'Fast and powerful, it ranks among the world’s finest protection dogs.',
    ],
    zhPron: 'dù bīn quǎn',
    enPron: 'DOH-ber-man',
    zhPeriod: '现代（约 1890 年由路易斯·杜伯曼在德国培育）',
    enPeriod: 'Present day (developed around 1890 by Louis Dobermann in Germany)',
    zhRegions: ['德国图林根州（品种发源地）'],
    enRegions: ['Thuringia, Germany (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.95, maxMeters: 1.15 },
    diet: 'carnivore',
    zhParent:
      '19 世纪末，德国阿波尔达镇的税务官路易斯·杜伯曼需要一只能在收税路上保护他的狗，便用当地的牧牛犬、猎犬等犬种混育出杜宾犬。它集速度、力量和警觉于一身，二战中曾作为美国海军陆战队的军犬服役。现代繁育更强调稳定温和的气质：杜宾犬对家人极其依恋，被称为“粘人护卫”。传统的立耳和断尾是人为整形，如今在许多国家已被禁止。',
    enParent:
      'In the late 19th century Louis Dobermann, a tax collector in Apolda, Germany, wanted a dog to protect him on his rounds and built the breed from local cattle dogs, hounds and others. The result combined speed, power and vigilance, and Dobermans served with the US Marine Corps in the Second World War. Modern breeding favours a steadier, gentler temperament, and the breed is famously attached to its people — the “velcro guardian”. The traditional cropped ears and docked tail are cosmetic surgeries now banned in many countries.',
    sources: [
      {
        title: 'Doberman Pinscher — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/doberman-pinscher/',
      },
      {
        title: 'Dobermann — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dobermann',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；模型若呈立耳断尾造型，属传统整形外观。',
      '确切的基础犬种配方没有留下完整记录。',
    ],
    enUncertainties: [
      'The size excludes the tail; if the model shows cropped ears and a docked tail, that is the traditional cosmetic look.',
      'The exact recipe of foundation breeds was never fully recorded.',
    ],
    accent: { strong: '#3f3630', soft: '#d4ccc2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'german-shepherd',
    zhName: '德国牧羊犬',
    enName: 'German Shepherd',
    zhLabel: '全能工作犬',
    enLabel: 'All-round working dog',
    zhVisible: '看它竖立的耳朵和黑黄相间的被毛——这是世界上最出名的警犬。',
    enVisible:
      'Look at the upright ears and black-and-tan coat — the world’s most famous police dog.',
    zhSentences: [
      '这是德国牧羊犬，警察、军队和救援队的好帮手。',
      '电影明星“任丁丁”让全世界认识了这种狗。',
    ],
    enSentences: [
      'This is the German Shepherd, partner to police, armies and rescue teams.',
      'The film star Rin Tin Tin made the breed famous worldwide.',
    ],
    zhPron: 'dé guó mù yáng quǎn',
    enPron: 'JER-man SHEP-erd',
    zhPeriod: '现代（1899 年在德国登记定型）',
    enPeriod: 'Present day (registered in Germany in 1899)',
    zhRegions: ['德国（品种发源地）'],
    enRegions: ['Germany (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.95, maxMeters: 1.15 },
    diet: 'carnivore',
    zhParent:
      '1899 年，骑兵上尉马克斯·冯·施特芬尼茨在犬展上买下一只名叫霍兰德的牧羊犬，以此为基础创立德国牧羊犬协会，目标是培育“以工作为本”的犬种。今天它遍布警犬、军犬、搜救犬和导盲犬岗位。一战后英美因忌讳“德国”字样曾改称“阿尔萨斯狼犬”。需要注意的是，现代展示系选育出的过度倾斜背线（“青蛙腿”站姿）与髋关节疾病相关，工作系的背线则更平直。',
    enParent:
      'In 1899 cavalry captain Max von Stephanitz bought a herding dog named Horand at a show and founded the German Shepherd society, aiming above all for a working dog. Today the breed serves as police, army, search-and-rescue and guide dogs. After the First World War, Britain and America briefly renamed it the “Alsatian” to avoid the word “German”. One caution: show-line selection for an extremely sloped back (the “frog-dog” stance) is linked to hip problems, while working lines keep a flatter back.',
    sources: [
      {
        title: 'German Shepherd Dog — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/german-shepherd-dog/',
      },
      {
        title: 'German Shepherd — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/German_Shepherd',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '展示系与工作系在外观和髋关节健康上差异明显。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'Show lines and working lines differ clearly in outline and hip health.',
    ],
    accent: { strong: '#6b5636', soft: '#ded2b4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'great-dane',
    zhName: '大丹犬',
    enName: 'Great Dane',
    zhLabel: '巨型犬（“温柔的巨人”）',
    enLabel: 'Giant dog (the “gentle giant”)',
    zhVisible: '看它的个头——前腿直立站起来的大丹犬比很多人都高。',
    enVisible:
      'Look at the size of it — standing on its hind legs, a Great Dane is taller than most people.',
    zhSentences: [
      '这是大丹犬，世界上最高的犬种。',
      '它性格温和，不知道自己有多大，总想当一只“膝盖上的小狗”。',
    ],
    enSentences: [
      'This is the Great Dane, the tallest dog breed in the world.',
      'Gentle and unaware of its size, it keeps trying to be a lap dog.',
    ],
    zhPron: 'dà dān quǎn',
    enPron: 'grayt dayn',
    zhPeriod: '现代（数百年历史，19 世纪在德国定型）',
    enPeriod: 'Present day (centuries old; standardised in 19th-century Germany)',
    zhRegions: ['德国（品种定型地）'],
    enRegions: ['Germany (where the breed was standardised)'],
    size: { kind: 'body-length', minMeters: 1.1, maxMeters: 1.3 },
    diet: 'carnivore',
    zhParent:
      '大丹犬名字里有“丹麦”，其实是德国培育的猎野猪犬，后来转型为宫廷护卫和伴侣犬。肩高纪录保持者“宙斯”站立时肩高 1.118 米。高个子代价不小：大丹犬平均寿命只有 7–10 年，并高发胃扭转（进食后剧烈运动是诱因），需要少食多餐。它对孩子和其他动物宽容友善，史酷比的原型就是大丹犬。',
    enParent:
      'Despite the name, the Great Dane was developed in Germany to hunt wild boar and later became a court guardian and companion. The tallest on record, Zeus, stood 1.118 metres at the shoulder. Size has its price: the breed averages only 7–10 years of life and is prone to stomach torsion (bloat), triggered by vigorous exercise around meals, so several small meals a day are advised. Tolerant and friendly with children and other animals, it is the model for Scooby-Doo.',
    sources: [
      {
        title: 'Great Dane — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/great-dane/',
      },
      {
        title: 'Great Dane — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Great_Dane',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；肩高常超过 80 厘米。',
      '胃扭转是该品种的头号急症风险，饲养前应了解。',
    ],
    enUncertainties: [
      'The size excludes the tail; shoulder height often exceeds 80 centimetres.',
      'Bloat is the breed’s leading emergency risk and should be understood before ownership.',
    ],
    accent: { strong: '#5d6166', soft: '#d8dbdf' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'jindo-dog',
    zhName: '珍岛犬',
    enName: 'Jindo Dog',
    zhLabel: '韩国本土犬种',
    enLabel: 'Korean native dog',
    zhVisible: '看它竖起的耳朵和镰刀形的尾巴——珍岛犬以对主人的忠诚闻名。',
    enVisible:
      'Look at the pricked ears and sickle tail — the Jindo is famous for devotion to its owner.',
    zhSentences: [
      '这是珍岛犬，来自韩国珍岛的猎犬。',
      '它一生只认一个主人，是韩国“忠诚”的代名词。',
    ],
    enSentences: [
      'This is the Jindo, a hunting dog from Korea’s Jindo Island.',
      'It bonds to one person for life — in Korea its name means loyalty itself.',
    ],
    zhPron: 'zhēn dǎo quǎn',
    enPron: 'JIN-doh dog',
    zhPeriod: '现代（岛屿血统有数百年以上历史，1962 年被列为韩国天然纪念物）',
    enPeriod: 'Present day (island stock centuries old; made a Korean Natural Monument in 1962)',
    zhRegions: ['韩国珍岛（品种发源地）'],
    enRegions: ['Jindo Island, South Korea (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.75, maxMeters: 0.9 },
    diet: 'carnivore',
    zhParent:
      '珍岛犬在韩国西南端的珍岛上相对隔离地繁育了数百年，用于协助猎鹿和兔子。岛屿环境塑造了它极强的归巢本能：韩国流传着许多珍岛犬跋涉数百公里回到原主人家中的真实记录。它爱干净得像猫，会自己梳理，几乎不在家里乱排泄；对家人温顺，对陌生人和陌生犬保持警惕，需要耐心的社会化训练。',
    enParent:
      'The Jindo was bred in relative isolation for centuries on Jindo Island off Korea’s south-west coast, helping to hunt deer and rabbits. Island life fixed a legendary homing instinct: there are well-documented Korean stories of Jindos travelling hundreds of kilometres back to their original owners. Almost cat-like, it grooms itself and is naturally clean indoors; gentle with family but wary of strangers and other dogs, it needs patient socialisation.',
    sources: [
      {
        title: 'Korean Jindo — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Korean_Jindo',
      },
      {
        title: 'Korean Jindo Dog — 美国养犬俱乐部基金会（AKC FSS）',
        url: 'https://www.akc.org/dog-breeds/korean-jindo-dog/',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“只认一个主人”是品种传统说法，个体差异很大。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'The “one-person dog” claim is breed tradition; individuals vary widely.',
    ],
    accent: { strong: '#b8a06a', soft: '#eee4c8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'labrador-retriever-2',
    zhName: '拉布拉多寻回犬（模型二）',
    enName: 'Labrador Retriever (Model Two)',
    zhLabel: '寻回犬（最受欢迎的家庭犬）',
    enLabel: 'Retriever (the favourite family dog)',
    zhVisible: '看它水獭一样的粗尾巴——那是游泳时的“船舵”。',
    enVisible:
      'Look at the thick otter-like tail — it works as a rudder when swimming.',
    zhSentences: [
      '这是拉布拉多寻回犬，连续多年蝉联全球最受欢迎犬种。',
      '它的祖先在纽芬兰帮渔民捡回渔网和鱼。',
    ],
    enSentences: [
      'This is the Labrador Retriever, for years the world’s most popular dog breed.',
      'Its ancestors helped Newfoundland fishermen retrieve nets and fish.',
    ],
    zhPron: 'lā bù lā duō xún huí quǎn',
    enPron: 'LAB-ra-dor ri-TREE-ver',
    zhPeriod: '现代（19 世纪在英国定型，祖先来自纽芬兰）',
    enPeriod: 'Present day (fixed in 19th-century Britain from Newfoundland stock)',
    zhRegions: ['英国（品种定型地）', '加拿大纽芬兰（祖先来源地）'],
    enRegions: ['United Kingdom (where the breed was fixed)', 'Newfoundland, Canada (ancestral homeland)'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.2 },
    diet: 'carnivore',
    zhParent:
      '拉布拉多的祖先并非来自拉布拉多半岛，而是纽芬兰岛上的“小水犬”，协助渔民收网、捡回落水的鱼。19 世纪初被带到英国后定型为寻回猎犬。它的被毛短而致密、有防水油脂层，脚蹼状的脚趾和舵形尾巴都是游泳装备。性格贪吃、亲人、爱玩，是最常见的导盲犬与缉毒犬之一；肥胖是这个品种最大的健康敌人。',
    enParent:
      'The Labrador’s ancestors came not from Labrador but from Newfoundland, where the “lesser water dog” hauled nets and fetched escaped fish. Brought to Britain in the early 19th century, it was fixed as a retrieving gundog. Its short, dense, oily coat sheds water, and webbed toes plus the rudder tail are swimming gear. Food-loving, people-oriented and playful, it is the commonest guide-dog and detection-dog breed; obesity is its great health enemy.',
    sources: [
      {
        title: 'Labrador Retriever — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/labrador-retriever/',
      },
      {
        title: 'Labrador Retriever — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Labrador_Retriever',
      },
    ],
    zhUncertainties: [
      '本批次中有两个不同的拉布拉多模型，此为模型二；发布前需决定去留或合并。',
      '体长区间不含尾巴。',
    ],
    enUncertainties: [
      'This batch contains two different Labrador models and this is the second; before publication one will be chosen or the two merged.',
      'The size excludes the tail.',
    ],
    accent: { strong: '#8a6a3b', soft: '#e9d9b8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'maltese',
    zhName: '马尔济斯犬',
    enName: 'Maltese',
    zhLabel: '玩具犬（白色长毛）',
    enLabel: 'Toy dog (long white coat)',
    zhVisible: '看它拖到地上的白色长毛——这是有着两千多年“宠物史”的古老犬种。',
    enVisible:
      'Look at the floor-length white coat — a breed with more than two thousand years of history as a pet.',
    zhSentences: [
      '这是马尔济斯犬，古罗马贵妇怀里的“袖珍犬”。',
      '它的毛像人的头发一样不停生长，几乎不掉毛。',
    ],
    enSentences: [
      'This is the Maltese, the “sleeve dog” of Roman ladies.',
      'Its coat grows continuously like human hair and barely sheds.',
    ],
    zhPron: 'mǎ ěr jì sī quǎn',
    enPron: 'MOL-teez',
    zhPeriod: '现代（地中海地区两千多年前已有记载）',
    enPeriod: 'Present day (recorded in the Mediterranean over two thousand years ago)',
    zhRegions: ['地中海地区（传统与马耳他岛相关联）'],
    enRegions: ['the Mediterranean (traditionally linked to Malta)'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.5 },
    diet: 'carnivore',
    zhParent:
      '马尔济斯犬是欧洲最古老的玩具犬之一：古希腊作家亚里士多德就曾描述过这种“梅利塔犬”，古罗马贵妇把它藏在衣袖里随身携带。纯白丝滑的长毛是它的标志，需要每天梳理或修剪成短装。它性格活泼亲人、爱叫，别看个子小，胆量可不小。传统上认为它来自马耳他岛，但现代研究对此存疑。',
    enParent:
      'The Maltese is among Europe’s oldest toy breeds: Aristotle described this “Melita dog”, and Roman ladies carried it in their sleeves. The pure white silky coat is its signature, needing daily brushing or a short pet trim. Lively, affectionate and vocal, it is braver than its size suggests. Tradition places its origin on Malta, though modern research is less certain.',
    sources: [
      {
        title: 'Maltese — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/maltese/',
      },
      {
        title: 'Maltese dog — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Maltese_dog',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴与拖地的饰毛。',
      '“产自马耳他岛”是传统说法，古代文献指向地中海多个地点。',
    ],
    enUncertainties: [
      'The size excludes the tail and floor-length furnishings.',
      'Origin on Malta is traditional; ancient sources point to several Mediterranean locations.',
    ],
    accent: { strong: '#9a9186', soft: '#f0ece2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pitbull',
    zhName: '美国比特斗牛梗',
    enName: 'American Pit Bull Terrier',
    zhLabel: '斗牛犬类（争议犬种）',
    enLabel: 'Bull-and-terrier type (a debated breed)',
    zhVisible: '看它结实的肌肉和宽大的头部——力量和温柔可以共存于同一只狗身上。',
    enVisible:
      'Look at the solid muscle and broad head — strength and gentleness can live in the same dog.',
    zhSentences: [
      '这是美国比特斗牛梗，充满争议的强壮犬种。',
      '它对家人的感情深厚，但需要非常负责任的主人。',
    ],
    enSentences: [
      'This is the American Pit Bull Terrier, a strong breed surrounded by debate.',
      'It loves its family deeply — and it needs an exceptionally responsible owner.',
    ],
    zhPron: 'bǐ tè quǎn',
    enPron: 'pit bul TER-ee-er',
    zhPeriod: '现代（19 世纪由英爱传入美国后定型）',
    enPeriod: 'Present day (standardised in America from 19th-century British and Irish stock)',
    zhRegions: ['美国（品种定型地）'],
    enRegions: ['United States (where the breed was fixed)'],
    size: { kind: 'body-length', minMeters: 0.65, maxMeters: 0.85 },
    diet: 'carnivore',
    zhParent:
      '比特斗牛梗的祖先是 19 世纪英国斗牛犬与梗犬的混血，传入美国后被培育得更高大。它曾被称为“保姆犬”，因为对家庭特别是孩子表现出极强的耐心；但因斗犬历史和强壮体格，它在许多国家受到饲养限制。需要特别说明：没有可靠的品种咬合力统计数据支持“比特犬咬合力锁死”的传言，那是都市传说。这个品种的经历恰好说明：主人的训练和社会的管理，比犬种标签更重要。',
    enParent:
      'The pit bull descends from 19th-century British bulldog–terrier crosses, bred taller after arriving in America. It was once nicknamed the “nanny dog” for its patience with children, yet its fighting history and power have brought ownership restrictions in many countries. One important clarification: the tale of a “locking jaw” with unbeatable bite force is an urban legend unsupported by any measurement. The breed’s story shows how much training and management matter more than labels.',
    sources: [
      {
        title: 'American Pit Bull Terrier — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/American_Pit_Bull_Terrier',
      },
      {
        title: 'Pit bull — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pit-bull-terrier',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '该犬种在多地属于限养或禁养犬种；收录与展示前应评估地域合规问题。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'This breed is restricted or banned in many jurisdictions; regional compliance should be reviewed before publication.',
    ],
    accent: { strong: '#7a6a5c', soft: '#ded6cc' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'poodle',
    zhName: '贵宾犬',
    enName: 'Poodle',
    zhLabel: '水猎犬（三种体型）',
    enLabel: 'Water retriever (three sizes)',
    zhVisible: '看它的“狮子装”修剪——那些毛球本来是为了保护关节和心脏不受冷水刺激。',
    enVisible:
      'Look at the “lion clip” — those pompoms were originally left to protect joints and organs from icy water.',
    zhSentences: [
      '这是贵宾犬，游泳健将出身的聪明犬。',
      '它在犬类智商排行榜上常年名列第二。',
    ],
    enSentences: [
      'This is the Poodle, a clever dog bred as a water retriever.',
      'It regularly ranks second in canine intelligence lists.',
    ],
    zhPron: 'guì bīn quǎn',
    enPron: 'POO-dul',
    zhPeriod: '现代（数百年历史；法国把它定为国犬）',
    enPeriod: 'Present day (centuries old; the national dog of France)',
    zhRegions: ['德国（名称与祖先来源）', '法国（品种定型与标准化）'],
    enRegions: ['Germany (name and ancestry)', 'France (standardisation)'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.9 },
    diet: 'carnivore',
    zhParent:
      '贵宾犬的英文名 Poodle 来自德语“pudeln”（扑水），祖先是欧洲的水猎犬，负责从冷水中衔回鸭子。标志性的修剪其实是工作服：胸部和关节处的毛球保暖，其余部位剃短以便游泳。法国把它发展成马戏团明星和国犬。贵宾犬按体型分标准型、迷你型和玩具型，卷毛几乎不掉落，常被称为“低致敏”犬——但对狗过敏源自皮屑而非毛发本身，没有任何犬种完全不过敏。',
    enParent:
      'The name Poodle comes from the German “pudeln”, to splash: the breed descends from European water retrievers that fetched ducks from icy water. The famous clip was working gear — pompoms left over the chest and joints for warmth, the rest clipped short for swimming. France turned it into a circus star and its national dog. Poodles come in standard, miniature and toy sizes, and the curly coat barely sheds, earning a “hypoallergenic” reputation — though dog allergy is triggered by dander, not hair, so no breed is truly allergy-free.',
    sources: [
      {
        title: 'Poodle — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/poodle-standard/',
      },
      {
        title: 'Poodle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Poodle',
      },
    ],
    zhUncertainties: [
      '体长区间对应标准型；迷你型与玩具型明显更小。',
      '“低致敏”是流行说法，医学上不存在完全不过敏的犬种。',
    ],
    enUncertainties: [
      'The size range covers the standard poodle; miniature and toy varieties are much smaller.',
      '“Hypoallergenic” is a popular claim — medically, no dog is completely non-allergenic.',
    ],
    accent: { strong: '#8a8078', soft: '#e6e0d8' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'schnauzer-ar',
    zhName: '雪纳瑞犬（AR 版）',
    enName: 'Schnauzer (AR Model)',
    zhLabel: '德国梗犬（大胡子）',
    enLabel: 'German farm dog (the bearded one)',
    zhVisible: '看它浓密的眉毛和大胡子——名字 Schnauzer 在德语里就是“大胡子”。',
    enVisible:
      'Look at the bushy eyebrows and beard — “Schnauzer” is German for “whiskered snout”.',
    zhSentences: [
      '这是雪纳瑞犬，长着大胡子的德国农场犬。',
      '它曾经在农场上抓老鼠、看门、赶牲畜。',
    ],
    enSentences: [
      'This is the Schnauzer, the bearded farm dog from Germany.',
      'It once earned its keep catching rats, guarding yards and driving stock.',
    ],
    zhPron: 'xuě nà ruì quǎn',
    enPron: 'SHNOW-zer',
    zhPeriod: '现代（中世纪德国农场犬，19 世纪末定型）',
    enPeriod: 'Present day (a medieval German farm type, standardised in the late 19th century)',
    zhRegions: ['德国（品种发源地）'],
    enRegions: ['Germany (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '雪纳瑞是德国南部的古老农场犬，胡须能在抓老鼠时保护口鼻。它分迷你型、标准型和巨型三种体型，模型接近标准型。刚毛被毛需要定期手工拔毛或修剪来保持质感。性格警觉、爱叫、忠诚，是出色的看家犬；腊肠嘴造型使它总像在思考人生。',
    enParent:
      'The Schnauzer is an old farm breed from southern Germany whose whiskers guarded its muzzle while ratting. It comes in miniature, standard and giant sizes — the model matches the standard. The wiry coat needs regular hand-stripping or clipping to keep its texture. Alert, vocal and loyal, it makes an excellent watchdog, and the bearded muzzle gives it a permanently thoughtful look.',
    sources: [
      {
        title: 'Standard Schnauzer — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/standard-schnauzer/',
      },
      {
        title: 'Standard Schnauzer — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Standard_Schnauzer',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只雪纳瑞模型，二者来源不同；发布前需决定去留或合并。',
      '体长区间对应标准型，且不含尾巴。',
    ],
    enUncertainties: [
      'Another schnauzer model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'The size covers the standard variety and excludes the tail.',
    ],
    accent: { strong: '#5a5f68', soft: '#d8dbdf' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'shiba-inu',
    zhName: '柴犬',
    enName: 'Shiba Inu',
    zhLabel: '日本古老猎犬',
    enLabel: 'Ancient Japanese hunter',
    zhVisible: '看它机警的三角耳和卷曲的尾巴——柴犬是网络表情“Doge”的原型。',
    enVisible:
      'Look at the alert triangular ears and curled tail — the Shiba is the dog behind the “Doge” meme.',
    zhSentences: [
      '这是柴犬，日本最古老的犬种之一。',
      '它爱干净得像猫，还会发出独特的“柴犬尖叫”。',
    ],
    enSentences: [
      'This is the Shiba Inu, one of Japan’s oldest breeds.',
      'Cat-clean and dramatic, it is famous for the piercing “Shiba scream”.',
    ],
    zhPron: 'chái quǎn',
    enPron: 'SHEE-ba EE-noo',
    zhPeriod: '现代（血统有数千年历史，1936 年被列为日本天然纪念物）',
    enPeriod: 'Present day (stock thousands of years old; a Japanese Natural Monument since 1936)',
    zhRegions: ['日本（品种发源地）'],
    enRegions: ['Japan (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.6, maxMeters: 0.75 },
    diet: 'carnivore',
    zhParent:
      '柴犬的血统可追溯到随古人迁入日本列岛的犬，数千年间在山地协助猎捕小鸟和小兽。“柴”字一说来自它红褐色的毛像柴枝，一说来自它穿梭的灌木丛（日语“柴”意为灌木）。它独立、爱干净、有领地意识，兴奋或不情愿时会发出惊人的高音尖叫。第二次世界大战后柴犬一度濒临灭绝，如今是日本饲养最多的本土犬，还成了加密货币狗狗币的标志形象。',
    enParent:
      'The Shiba’s line goes back to dogs that arrived in Japan with ancient settlers, and for millennia it flushed small birds and game in the mountains. The name “shiba” may refer to its brushwood-red coat or to the brushwood scrub where it hunted. Independent, fastidiously clean and territorial, it emits a startling high-pitched “Shiba scream” when excited or displeased. Nearly extinct after the Second World War, it is now Japan’s most popular native dog — and the face of the Dogecoin cryptocurrency.',
    sources: [
      {
        title: 'Shiba Inu — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/shiba-inu/',
      },
      {
        title: 'Shiba Inu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Shiba_Inu',
      },
    ],
    zhUncertainties: [
      '体长区间不含卷尾。',
      '“柴”字的语源有两种说法，均未完全确证。',
    ],
    enUncertainties: [
      'The size excludes the curled tail.',
      'Two etymologies for “shiba” exist and neither is fully proven.',
    ],
    accent: { strong: '#b3702e', soft: '#eedcbe' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'shih-tzu',
    zhName: '西施犬',
    enName: 'Shih Tzu',
    zhLabel: '中国宫廷伴侣犬',
    enLabel: 'Chinese palace companion',
    zhVisible: '看它华丽的长毛和短短的鼻子——名字的意思是“小狮子”。',
    enVisible:
      'Look at the flowing coat and short nose — the name means “little lion”.',
    zhSentences: [
      '这是西施犬，中国皇宫里养大的伴侣犬。',
      '它的任务不是工作，而是陪伴主人上千年。',
    ],
    enSentences: [
      'This is the Shih Tzu, a companion dog raised in Chinese palaces.',
      'Its only job for a thousand years has been to keep people company.',
    ],
    zhPron: 'xī shī quǎn',
    enPron: 'SHEE-dzoo',
    zhPeriod: '现代（唐宋以来宫廷绘画中已有形象）',
    enPeriod: 'Present day (depicted in Chinese court art for over a thousand years)',
    zhRegions: ['中国（品种发源地，经西藏宫廷犬繁育而成）'],
    enRegions: ['China (developed in the palace from Tibetan court dogs)'],
    size: { kind: 'body-length', minMeters: 0.4, maxMeters: 0.55 },
    diet: 'carnivore',
    zhParent:
      '西施犬由西藏献给中国皇室的宫廷犬繁育而来，在明清宫廷中备受宠爱。“西施”是英文 Shih Tzu（狮子）的中文译名——佛教传说里佛陀出门常有小狮子相随，它因此被视为祥瑞。20 世纪这个品种一度只剩十几只，现代所有西施犬都是那 14 只犬的后代。长毛需要每日梳理；短鼻使它不耐热，夏天要避免中暑。',
    enParent:
      'The Shih Tzu descends from Tibetan court dogs presented to Chinese emperors and was treasured in Ming and Qing palaces. The Chinese rendering “Xishi” translates the English name Shih Tzu, meaning lion — in Buddhist legend a little lion followed the Buddha, so the dog was an auspicious emblem. In the 20th century the breed dwindled to a handful of dogs, and every modern Shih Tzu descends from just 14 survivors. The long coat needs daily brushing, and the short nose makes heat dangerous in summer.',
    sources: [
      {
        title: 'Shih Tzu — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/shih-tzu/',
      },
      {
        title: 'Shih Tzu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Shih_Tzu',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴与饰毛。',
      '“14 只幸存者”是现代品种谱系研究的通行说法。',
    ],
    enUncertainties: [
      'The size excludes the tail and furnishings.',
      'The “fourteen survivors” figure is the standard account from modern pedigree research.',
    ],
    accent: { strong: '#9a7a55', soft: '#e8dcc4' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'siberian-husky',
    zhName: '西伯利亚哈士奇',
    enName: 'Siberian Husky',
    zhLabel: '雪橇犬',
    enLabel: 'Sled dog',
    zhVisible: '看它的蓝眼睛和厚实的双层毛——这身装备是为西伯利亚的严寒准备的。',
    enVisible:
      'Look at the blue eyes and thick double coat — equipment for the Siberian deep freeze.',
    zhSentences: [
      '这是西伯利亚哈士奇，能拉着雪橇跑上百公里的雪橇犬。',
      '它精力过剩、爱“唱歌”，还是著名的“越狱大师”。',
    ],
    enSentences: [
      'This is the Siberian Husky, a sled dog built to run hundreds of kilometres.',
      'Bursting with energy, it howls rather than barks and is a famous escape artist.',
    ],
    zhPron: 'xī bó lì yà hā shì qí',
    enPron: 'sy-BEER-ee-an HUS-kee',
    zhPeriod: '现代（楚科奇人驯养数百年以上）',
    enPeriod: 'Present day (kept by the Chukchi people for many centuries)',
    zhRegions: ['西伯利亚东北部（楚科奇半岛）'],
    enRegions: ['north-eastern Siberia (the Chukchi Peninsula)'],
    size: { kind: 'body-length', minMeters: 0.85, maxMeters: 1.05 },
    diet: 'carnivore',
    zhParent:
      '哈士奇由西伯利亚的楚科奇人培育，以惊人的耐力拉着轻载雪橇长途运输。1925 年白喉血清接力事件中，雪橇犬队穿越暴风雪把救命血清送到诺姆镇，领头犬“多哥”和“巴尔托”成为传奇——纽约中央公园至今立着巴尔托的铜像。哈士奇热爱奔跑和群居，几乎不吠叫但爱嚎叫“聊天”；旺盛的精力如果无处释放，拆家和翻墙都是常规操作。它能耐受零下几十度的严寒，却很不耐热。',
    enParent:
      'The Husky was bred by the Chukchi people of Siberia to pull light loads over enormous distances. In the 1925 serum run, sled teams relayed diphtheria antitoxin through a blizzard to save the town of Nome; the lead dogs Togo and Balto became legends, and Balto’s statue stands in New York’s Central Park. Huskies live to run and to be with their pack; they rarely bark but love to howl. Bored huskies remodel gardens and scale fences — and while they shrug off deep cold, they wilt in summer heat.',
    sources: [
      {
        title: 'Siberian Husky — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/siberian-husky/',
      },
      {
        title: 'Siberian Husky — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siberian_Husky',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴。',
      '“蓝眼睛”并非全部个体具备，也有棕眼或鸳鸯眼。',
    ],
    enUncertainties: [
      'The size excludes the tail.',
      'Not all huskies have blue eyes — brown and odd-eyed combinations are common.',
    ],
    accent: { strong: '#5f6a75', soft: '#d9e0e6' },
    habitat: 'land',
    atmosphere: 'ice',
  },
  {
    slug: 'welsh-corgi',
    zhName: '威尔士柯基犬',
    enName: 'Welsh Corgi',
    zhLabel: '牧牛犬（短腿）',
    enLabel: 'Cattle herder (short legs)',
    zhVisible: '看它的短腿和长腿身——低矮的身材正好能躲过牛踢。',
    enVisible:
      'Look at the short legs and long body — built low so kicking cows miss.',
    zhSentences: [
      '这是柯基犬，个子小小却能牧牛的“牧牛犬”。',
      '英国女王伊丽莎白二世一生养了三十多只柯基。',
    ],
    enSentences: [
      'This is the Corgi, a cattle-herding dog in a small, low package.',
      'Queen Elizabeth II kept more than thirty of them during her life.',
    ],
    zhPron: 'wēi ěr shì kē jī quǎn',
    enPron: 'welsh KOR-gee',
    zhPeriod: '现代（威尔士的牧牛犬传统有上千年）',
    enPeriod: 'Present day (a Welsh cattle-herding tradition a thousand years old)',
    zhRegions: ['英国威尔士（品种发源地）'],
    enRegions: ['Wales, United Kingdom (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.65, maxMeters: 0.8 },
    diet: 'carnivore',
    zhParent:
      '柯基在威尔士语里意为“矮狗”。它牧牛的办法是咬牛的后脚跟，牛踢来时它贴地一趴就能躲开。柯基分卡迪根和彭布罗克两个品种：卡迪根有长尾巴，彭布罗克传统上尾巴很短。1933 年起柯基成为英国王室标志，女王的第一只柯基叫“苏珊”。短腿长身带来的椎间盘问题需要注意，还要控制体重。',
    enParent:
      '“Corgi” is Welsh for “dwarf dog”. It herds cattle by nipping their heels and dropping flat when a hoof flies back. There are two breeds: the Cardigan, which keeps a long tail, and the Pembroke, traditionally born or docked short-tailed. Corgis became royal icons from 1933, and the Queen’s first was named Susan. The long spine on short legs makes disc problems a real risk, and weight control matters.',
    sources: [
      {
        title: 'Pembroke Welsh Corgi — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/pembroke-welsh-corgi/',
      },
      {
        title: 'Welsh Corgi — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Welsh_Corgi',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；卡迪根与彭布罗克两个品种略有差异。',
      '模型接近彭布罗克型。',
    ],
    enUncertainties: [
      'The size excludes the tail; Cardigan and Pembroke varieties differ slightly.',
      'The model follows the Pembroke type.',
    ],
    accent: { strong: '#b3772e', soft: '#eedcba' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'yorkshire-terrier',
    zhName: '约克夏梗',
    enName: 'Yorkshire Terrier',
    zhLabel: '玩具梗犬（钢蓝色丝毛）',
    enLabel: 'Toy terrier (steel-blue silk coat)',
    zhVisible: '看它拖到地上的丝滑长毛——这身“钢蓝大衣”的祖先却是工厂里的捕鼠工。',
    enVisible:
      'Look at the floor-length silky coat — yet its ancestors worked as rat catchers in the mills.',
    zhSentences: [
      '这是约克夏梗，工人阶级出身的迷你犬。',
      '它个子小，胆子却比很多大狗都大。',
    ],
    enSentences: [
      'This is the Yorkshire Terrier, a tiny dog with working-class roots.',
      'Small as it is, it is braver than many dogs ten times its size.',
    ],
    zhPron: 'yuē kè xià gěng',
    enPron: 'YORK-sheer TER-ee-er',
    zhPeriod: '现代（19 世纪中后期在英国约克郡定型）',
    enPeriod: 'Present day (fixed in mid-to-late 19th-century Yorkshire, England)',
    zhRegions: ['英国约克郡（品种发源地）'],
    enRegions: ['Yorkshire, England (where the breed arose)'],
    size: { kind: 'body-length', minMeters: 0.3, maxMeters: 0.45 },
    diet: 'carnivore',
    zhParent:
      '约克夏梗诞生于工业革命时期的约克郡：苏格兰织工带来小梗犬，在纺织厂和矿坑里捕捉老鼠，后来被维多利亚时代的上流社会发现，摇身一变成为客厅宠儿。它的被毛像人的头发一样不断生长、质地如丝，钢蓝色与棕褐色是标准配色。它胆大、爱叫、依恋主人，是著名的“口袋伴侣”；迷你体型带来的低血糖和牙齿拥挤问题需要留意。',
    enParent:
      'The Yorkshire Terrier was born in Industrial-Revolution Yorkshire: Scottish weavers brought small terriers that caught rats in the textile mills and mines, until Victorian society discovered the little dog and moved it into the parlour. Its coat grows continuously like human hair, silky to the touch, in the standard steel-blue and tan. Bold, vocal and devoted, it is the classic “purse companion”; the tiny frame makes low blood sugar and crowded teeth worth watching.',
    sources: [
      {
        title: 'Yorkshire Terrier — 美国养犬俱乐部（AKC）',
        url: 'https://www.akc.org/dog-breeds/yorkshire-terrier/',
      },
      {
        title: 'Yorkshire Terrier — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Yorkshire_Terrier',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴与饰毛。',
      '幼犬出生时为黑色，钢蓝色随成长逐渐显现。',
    ],
    enUncertainties: [
      'The size excludes the tail and furnishings.',
      'Puppies are born black; the steel-blue shade develops with age.',
    ],
    accent: { strong: '#6e5a45', soft: '#e0d4c2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'chipmunk',
    zhName: '花栗鼠',
    enName: 'Chipmunk',
    zhLabel: '颊囊小松鼠',
    enLabel: 'Cheek-pouch squirrel',
    zhVisible: '看它鼓起来的腮帮子——那两个“口袋”能塞进一整把坚果。',
    enVisible:
      'Look at those puffed cheeks — each pouch can hold a whole handful of nuts.',
    zhSentences: [
      '这是花栗鼠，背着五条深色条纹的小松鼠。',
      '它把坚果塞进腮帮子里，运回地洞储藏过冬。',
    ],
    enSentences: [
      'This is the chipmunk, a small striped ground squirrel.',
      'It packs nuts into its cheek pouches and carries them home to its burrow for winter.',
    ],
    zhPron: 'huā lì shǔ',
    enPron: 'CHIP-munk',
    zhPeriod: '现代（松鼠科延续数千万年）',
    enPeriod: 'Present day (squirrel family tens of millions of years old)',
    zhRegions: ['北美洲东部森林', '亚洲北部（西伯利亚花栗鼠）'],
    enRegions: ['forests of eastern North America', 'northern Asia (the Siberian chipmunk)'],
    size: { kind: 'body-length', minMeters: 0.18, maxMeters: 0.3 },
    diet: 'omnivore',
    zhParent:
      '花栗鼠是住在地洞里的小松鼠，背上的五条深色条纹是标志。它的颊囊撑到极限时头能大三倍，一次最多能搬运几十颗橡子。秋天它疯狂储存食物——一个洞穴的存粮可以多达几千颗。它吃坚果、种子、蘑菇、鸟蛋和小昆虫，属于杂食。冬眠时它不是一觉睡到底，而是每隔几天醒来吃点存粮。',
    enParent:
      'The chipmunk is a small ground squirrel that sleeps in a burrow, marked by five dark stripes down its back. Stuffed full, its cheek pouches can make its head look three times wider and carry dozens of acorns per trip. In autumn it hoards frantically — one burrow may hold thousands of seeds. An omnivore, it eats nuts, seeds, mushrooms, eggs and small insects. Its hibernation is not one long sleep: it wakes every few days to snack on the pantry.',
    sources: [
      {
        title: 'Chipmunk — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/chipmunk',
      },
      {
        title: 'Chipmunk — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Chipmunk',
      },
    ],
    zhUncertainties: [
      '体长区间含尾巴。',
      '亚洲只有西伯利亚花栗鼠一种，其余二十多种都在北美洲。',
    ],
    enUncertainties: [
      'The size range includes the tail.',
      'Asia has only the Siberian chipmunk; all other twenty-odd species live in North America.',
    ],
    accent: { strong: '#8a5a30', soft: '#e8d2b2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'donkey',
    zhName: '驴',
    enName: 'Donkey',
    zhLabel: '家畜（驮运好手）',
    enLabel: 'Domestic animal (the great pack carrier)',
    zhVisible: '看它的长耳朵——驴的耳朵比马长得多，能听到很远的同伴叫声。',
    enVisible:
      'Look at the long ears — much longer than a horse’s, and able to pick up a companion’s call far away.',
    zhSentences: [
      '这是驴，人类驯化了五千多年的好帮手。',
      '它能在崎岖的山路上驮运重物，比马更稳当。',
    ],
    enSentences: [
      'This is the donkey, a helper humans domesticated over five thousand years ago.',
      'It carries heavy loads over rough mountain paths more surely than a horse.',
    ],
    zhPron: 'lǘ',
    enPron: 'DON-kee',
    zhPeriod: '现代（约五千至七千年前在非洲驯化）',
    enPeriod: 'Present day (domesticated in Africa roughly five to seven thousand years ago)',
    zhRegions: ['东北非（驯化地）', '今遍布全世界'],
    enRegions: ['north-eastern Africa (domestication)', 'worldwide today'],
    size: { kind: 'shoulder-height', minMeters: 0.8, maxMeters: 1.4 },
    diet: 'herbivore',
    zhParent:
      '驴的祖先是非洲野驴，在炎热干旱的环境里练就了超强的耐渴能力和高效消化粗饲料的本领。它的“倔强”其实是谨慎：感到危险时先站住评估，而不是像马那样立刻逃跑——这在山路驮运中反而是优点。驴每天要吃大量干草和秸秆，叫声能传三公里远。全球仍有数千万头驴承担运输工作；驴皮制品贸易导致的过度扑杀正威胁部分地区的驴群。',
    enParent:
      'The donkey descends from the African wild ass and is superbly adapted to hot, dry country: it tolerates thirst and thrives on coarse forage. Its famous “stubbornness” is really caution — a donkey stops to assess danger instead of bolting like a horse, which is precisely what you want on a cliff path. It needs plenty of hay and straw, and its bray can carry three kilometres. Tens of millions of donkeys still work worldwide, and some populations are now threatened by the hide trade.',
    sources: [
      {
        title: 'Donkey — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/donkey',
      },
      {
        title: 'Donkey — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Donkey',
      },
    ],
    zhUncertainties: [
      '肩高区间覆盖常见家驴；迷你驴与大型驮驴超出此范围。',
      '驯化时间窗口较宽，取决于对考古证据的不同解读。',
    ],
    enUncertainties: [
      'The height range covers common domestic donkeys; miniature and mammoth types fall outside it.',
      'The domestication window is wide because the archaeological evidence allows several readings.',
    ],
    accent: { strong: '#7a7268', soft: '#dedad2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'guinea-pig',
    zhName: '豚鼠',
    enName: 'Guinea Pig',
    zhLabel: '家养啮齿动物',
    enLabel: 'Domestic rodent',
    zhVisible: '看它没有尾巴的圆身子——豚鼠一生都在发出各种“吹口哨”的声音。',
    enVisible:
      'Look at the round tailless body — guinea pigs chatter, whistle and purr almost constantly.',
    zhSentences: [
      '这是豚鼠，又叫“荷兰猪”，来自南美洲的安第斯山区。',
      '它高兴时会原地蹦起来，这个动作叫“爆米花跳”。',
    ],
    enSentences: [
      'This is the guinea pig, a rodent from the Andes of South America.',
      'When happy, it hops straight up — a move called “popcorning”.',
    ],
    zhPron: 'tún shǔ',
    enPron: 'GIN-ee pig',
    zhPeriod: '现代（约三千至五千年前在安第斯驯化）',
    enPeriod: 'Present day (domesticated in the Andes roughly three to five thousand years ago)',
    zhRegions: ['南美洲安第斯山区（驯化地）'],
    enRegions: ['the Andes of South America (domestication)'],
    size: { kind: 'body-length', minMeters: 0.2, maxMeters: 0.3 },
    diet: 'herbivore',
    zhParent:
      '豚鼠的祖先不是猪而是南美野生的豚鼠属啮齿动物，被安第斯人驯化为肉食和仪式用途，16 世纪由欧洲水手带回后成为宠物。“几内亚”一名来源成谜，可能来自转运港口或价格讹传。它出生时就毛茸茸、睁着眼，几小时后就能跟着妈妈跑。豚鼠和人类一样不能自己合成维生素 C，必须通过新鲜蔬果补充。它吃草、干草和蔬菜，需要同伴陪伴。',
    enParent:
      'The guinea pig descends from wild South American cavies, domesticated in the Andes for meat and ritual, and carried to Europe by sailors in the 16th century as an exotic pet. Why “guinea” is a mystery — perhaps a transit port or a garbled price. Babies are born furred, eyes open, running within hours. Like humans, guinea pigs cannot make their own vitamin C and need fresh vegetables every day. Grass-eaters and herd animals, they must never live alone.',
    sources: [
      {
        title: 'Guinea pig — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/guinea-pig',
      },
      {
        title: 'Guinea pig — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Guinea_pig',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴——豚鼠没有外露的尾巴。',
      '“几内亚”得名原因有多种说法，均无定论。',
    ],
    enUncertainties: [
      'The size has no tail to exclude — guinea pigs are tailless.',
      'Several theories explain the “guinea” name; none is settled.',
    ],
    accent: { strong: '#9a7a50', soft: '#eaddc2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'hamster',
    zhName: '仓鼠',
    enName: 'Hamster',
    zhLabel: '穴居啮齿动物',
    enLabel: 'Burrowing rodent',
    zhVisible: '看它鼓鼓的颊囊——“仓鼠”的名字来自德语“囤积者”。',
    enVisible:
      'Look at the bulging cheek pouches — the word “hamster” comes from a German word for “hoarder”.',
    zhSentences: [
      '这是仓鼠，把食物藏在腮帮子里的穴居小兽。',
      '它在野外的地洞能分出卧室、粮仓和卫生间。',
    ],
    enSentences: [
      'This is the hamster, a burrowing rodent that hoards food in its cheeks.',
      'Its wild burrows have separate rooms for sleeping, storing food and even a toilet.',
    ],
    zhPron: 'cāng shǔ',
    enPron: 'HAM-ster',
    zhPeriod: '现代（黄金仓鼠 1930 年代起成为宠物）',
    enPeriod: 'Present day (the golden hamster became a pet in the 1930s)',
    zhRegions: ['叙利亚及周边（黄金仓鼠原产地）'],
    enRegions: ['Syria and neighbours (home of the golden hamster)'],
    size: { kind: 'body-length', minMeters: 0.12, maxMeters: 0.18 },
    diet: 'omnivore',
    zhParent:
      '宠物仓鼠大多是黄金仓鼠（叙利亚仓鼠）：1930 年在叙利亚沙漠边缘捕获的一窝母仔，几乎成了全世界宠物仓鼠的共同祖先。仓鼠的颊囊能塞进相当于身体一半体积的食物，运回洞中粮仓。它是夜行性独居动物，白天睡觉夜里跑轮，一晚能跑几公里；野生仓鼠在冬季会浅度冬眠。野外黄金仓鼠如今是易危物种，而欧洲的原仓鼠更是极危。',
    enParent:
      'Most pet hamsters are golden (Syrian) hamsters: nearly all descend from a single mother and litter caught near the Syrian desert in 1930. The cheek pouches can carry half its body volume in food back to the burrow pantry. Nocturnal and solitary, it sleeps all day and runs kilometres on a wheel at night; wild hamsters enter shallow hibernation in winter. The golden hamster is now classed Vulnerable in the wild, and the European hamster is critically endangered.',
    sources: [
      {
        title: 'Hamster — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/hamster',
      },
      {
        title: 'Golden hamster — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Golden_hamster',
      },
    ],
    zhUncertainties: [
      '体长区间对应黄金仓鼠；侏儒仓鼠更小。',
      '“所有宠物仓鼠源自 1930 年那窝”是通行说法，个别实验室品系有少量其他来源。',
    ],
    enUncertainties: [
      'The size covers the golden hamster; dwarf species are smaller.',
      'The single-litter origin is the standard account; a few laboratory lines add minor other stock.',
    ],
    accent: { strong: '#b98a50', soft: '#f0dfbe' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'milk-cow',
    zhName: '奶牛',
    enName: 'Dairy Cow',
    zhLabel: '家畜（荷斯坦奶牛）',
    enLabel: 'Domestic cattle (Holstein dairy cow)',
    zhVisible: '看它黑白花的大块头——这是世界上产奶量最高的奶牛品种。',
    enVisible:
      'Look at the big black-and-white frame — the highest-yielding dairy breed in the world.',
    zhSentences: [
      '这是荷斯坦奶牛，一杯牛奶背后每天要吃几十千克草料。',
      '牛有四个胃，会把吃下去的草再呕回嘴里细细嚼。',
    ],
    enSentences: [
      'This is the Holstein dairy cow — every glass of milk costs her dozens of kilograms of feed a day.',
      'Cows have four stomachs and chew their food twice, bringing it back up for a second go.',
    ],
    zhPron: 'nǎi niú',
    enPron: 'DAIR-ee kow',
    zhPeriod: '现代（家牛约一万年前驯化；荷斯坦品种两千年选育史）',
    enPeriod: 'Present day (cattle domesticated about ten thousand years ago; Holstein bred over two thousand years)',
    zhRegions: ['荷兰与德国北部（荷斯坦品种发源地）'],
    enRegions: ['the Netherlands and northern Germany (Holstein homeland)'],
    size: { kind: 'body-length', minMeters: 2.4, maxMeters: 2.7 },
    diet: 'herbivore',
    zhParent:
      '黑白花的荷斯坦-弗里赛奶牛是全球奶牛的主力，一头高产奶牛一年能产上万升牛奶。牛是反刍动物：草先粗粗咽下，闲下来时送回嘴里细嚼慢咽，一天反刍八小时左右。奶牛也有最好的朋友——研究发现牛群中普遍存在固定的“闺蜜”关系，分开后心率都会升高。现代奶牛业也带来甲烷排放与动物福利的讨论，值得边吃边想。',
    enParent:
      'The black-and-white Holstein-Friesian is the world’s dairy workhorse, and a top cow gives over ten thousand litres of milk a year. Cattle are ruminants: grass is swallowed half-chewed, then brought back up and rechewed at leisure — about eight hours of cud-chewing a day. Cows also have best friends: studies show pairs form lasting bonds, and separation raises their heart rate. Modern dairying raises real questions about methane and welfare, worth thinking over with your next glass of milk.',
    sources: [
      {
        title: 'Holstein-Friesian — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/Holstein-Friesian',
      },
      {
        title: 'Dairy cattle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dairy_cattle',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；不同奶牛品种体型差异大。',
      '产奶量随品种、饲养和地区差异极大。',
    ],
    enUncertainties: [
      'The size excludes the tail; dairy breeds differ greatly in build.',
      'Milk yields vary enormously with breed, feeding and region.',
    ],
    accent: { strong: '#4a4a4a', soft: '#e6e6e6' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'ox-ar',
    zhName: '黄牛（AR 版）',
    enName: 'Ox / Cattle (AR Model)',
    zhLabel: '家畜（耕作与驮运）',
    enLabel: 'Domestic cattle (draught and pack work)',
    zhVisible: '看它温厚的眼神——几千年来，黄牛一直是东亚农田里最重要的劳力。',
    enVisible:
      'Look at the patient eyes — for thousands of years, cattle were the most important working power on East Asian farms.',
    zhSentences: [
      '这是黄牛，耕田拉车的老牛是农耕文明的大功臣。',
      '“老黄牛精神”就是形容任劳任怨的品格。',
    ],
    enSentences: [
      'This is cattle as a working ox — ploughing fields and pulling carts powered farming civilisations.',
      'In Chinese culture, the “old yellow ox” is the symbol of tireless, uncomplaining work.',
    ],
    zhPron: 'huáng niú',
    enPron: 'oks',
    zhPeriod: '现代（家牛约一万年前驯化）',
    enPeriod: 'Present day (cattle domesticated about ten thousand years ago)',
    zhRegions: ['东亚（农耕区）', '世界各地'],
    enRegions: ['East Asia (farming regions)', 'worldwide'],
    size: { kind: 'body-length', minMeters: 2.0, maxMeters: 2.5 },
    diet: 'herbivore',
    zhParent:
      '黄牛是对东亚普通家牛的传统称呼，祖先是野生的原牛。套上轭的牛（“轭牛/阉牛”即 ox）曾是犁地、运输、磨面的主力动力，中国农业文明的发展离不开它们，因此古代许多朝代禁止宰杀耕牛。牛是反刍动物，一天花八小时咀嚼反刍的食物，吃饱后安静卧着反刍的样子，是田园诗里的经典画面。',
    enParent:
      '“Yellow cattle” is the traditional East Asian name for ordinary domestic cattle, descendants of the wild aurochs. Yoked as oxen, they ploughed fields, hauled carts and drove millstones — so vital that many Chinese dynasties banned slaughtering farm cattle. Like all cattle they are ruminants, spending about eight hours a day rechewing their food, and the sight of a resting ox quietly chewing the cud is a classic of pastoral poetry.',
    sources: [
      {
        title: 'Cattle — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/cattle-mammal',
      },
      {
        title: 'Ox — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Ox',
      },
    ],
    zhUncertainties: [
      '本馆“1048 批次”中另有一只黄牛模型，二者来源不同；发布前需决定去留或合并。',
      '体长区间不含尾巴；不同黄牛品种体型差异较大。',
    ],
    enUncertainties: [
      'Another cattle model from the “1048 batch” exists in this collection; before publication one will be chosen or the two merged.',
      'The size excludes the tail; cattle breeds vary widely in build.',
    ],
    accent: { strong: '#8a5a2b', soft: '#e6d2ae' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'pig',
    zhName: '家猪',
    enName: 'Domestic Pig',
    zhLabel: '家畜（聪明的杂食者）',
    enLabel: 'Domestic animal (the clever omnivore)',
    zhVisible: '看它的拱鼻——那是个超级灵敏的“铲子鼻子”，能闻出埋在地下的食物。',
    enVisible:
      'Look at the snout — a super-sensitive shovel-nose that can smell food buried underground.',
    zhSentences: [
      '这是家猪，聪明程度在农场动物里数一数二。',
      '它打滚不是不爱干净，而是在给自己涂防晒霜。',
    ],
    enSentences: [
      'This is the domestic pig, among the cleverest of all farm animals.',
      'It rolls in mud not from dirtiness but to put on sunscreen.',
    ],
    zhPron: 'jiā zhū',
    enPron: 'do-MES-tik pig',
    zhPeriod: '现代（约九千年前在多地分别驯化）',
    enPeriod: 'Present day (domesticated independently in several places about nine thousand years ago)',
    zhRegions: ['欧亚多地驯化', '今遍布全世界'],
    enRegions: ['domesticated across Eurasia', 'worldwide today'],
    size: { kind: 'body-length', minMeters: 1.0, maxMeters: 1.8 },
    diet: 'omnivore',
    zhParent:
      '家猪由野猪驯化而来，在东亚和中东被独立驯化。它是农场里最聪明的动物之一：能学会走迷宫、照镜子找食物，甚至用操纵杆玩简单的电子游戏。猪没有汗腺，靠泥浆降温防晒，拱泥也是觅食天性。它的鼻子灵敏度堪比缉毒犬，欧洲人至今仍用猪寻找地下的松露。杂食的猪几乎什么都吃，这也是它能遍布全球的原因。',
    enParent:
      'The domestic pig descends from the wild boar and was domesticated independently in East Asia and the Middle East. It is one of the cleverest farm animals — pigs learn mazes, use mirrors to find hidden food, and have even been taught to play simple video games with a joystick. With few sweat glands, a pig cools and sunproofs itself in mud, and rooting is natural foraging. Its nose rivals a detection dog’s, which is why pigs are still used to hunt buried truffles. As an omnivore it eats almost anything — one reason it conquered the world.',
    sources: [
      {
        title: 'Pig — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/pig-mammal',
      },
      {
        title: 'Domestic pig — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Domestic_pig',
      },
    ],
    zhUncertainties: [
      '体长区间不含尾巴；不同品种体型差异极大。',
      '驯化中心的具体数量（两个还是多个）学界仍在讨论。',
    ],
    enUncertainties: [
      'The size excludes the tail; breeds vary enormously in build.',
      'The exact number of domestication centres (two or more) is still discussed.',
    ],
    accent: { strong: '#c4937a', soft: '#f2dcd2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'atlas-beetle',
    zhName: '亚特拉斯南洋大兜虫',
    enName: 'Atlas Beetle',
    zhLabel: '大型兜虫（东南亚）',
    enLabel: 'Giant rhinoceros beetle (South-East Asia)',
    zhVisible: '看它头顶和胸前的三根长角——雄性用角当杠杆，把对手从树枝上撬下去。',
    enVisible:
      'Look at the three long horns — males use them as levers to pry rivals off branches.',
    zhSentences: [
      '这是亚特拉斯南洋大兜虫，东南亚森林里的大力士。',
      '它的幼虫在腐木里住上一两年，才变成威武的甲虫。',
    ],
    enSentences: [
      'This is the Atlas beetle, a heavyweight of the South-East Asian forests.',
      'Its grub lives inside rotting logs for a year or two before becoming this armoured adult.',
    ],
    zhPron: 'yà tè lā sī nán yáng dà dōu chóng',
    enPron: 'AT-las BEE-tul',
    zhPeriod: '现代（金龟总科延续上亿年）',
    enPeriod: 'Present day (scarab lineage over 100 million years old)',
    zhRegions: ['东南亚（马来西亚、印度尼西亚等地）'],
    enRegions: ['South-East Asia (Malaysia, Indonesia and neighbours)'],
    size: { kind: 'body-length', minMeters: 0.05, maxMeters: 0.09 },
    diet: 'herbivore',
    zhParent:
      '亚特拉斯南洋大兜虫（Chalcosoma atlas）是亚洲最大的甲虫之一，雄虫可以长到九厘米。三根角里两根长在胸前、一根长在头顶，战斗方式像摔跤：钻到对手身下把它掀翻。成虫吸食树汁和过熟的果实，幼虫（蛴螬）吃腐殖土和朽木，脾气出了名地暴躁。兜虫的“大力”不是传说——甲虫类能搬动数十倍于体重的物体。',
    enParent:
      'The Atlas beetle (Chalcosoma atlas) is among Asia’s largest beetles, males reaching nine centimetres. Two of its three horns project from the thorax and one from the head, and fights are pure wrestling: get under the rival and flip him off the branch. Adults sip tree sap and over-ripe fruit, while the grubs eat rotting wood and leaf mould and have famously short tempers. The beetle “strongman” reputation is no myth — scarabs can shift loads dozens of times their own weight.',
    sources: [
      {
        title: 'Atlas beetle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Atlas_beetle',
      },
      {
        title: 'Chalcosoma atlas — 台湾生命大百科',
        url: 'https://taieol.tw/pages/33412',
      },
    ],
    zhUncertainties: [
      '体长区间含角；雌虫没有角且明显更小。',
      '中文俗名众多（南洋大兜、亚特拉斯兜虫等），以学名为准。',
    ],
    enUncertainties: [
      'The size includes the horns; females are hornless and much smaller.',
      'Common names vary by region; the scientific name is the reliable identifier.',
    ],
    accent: { strong: '#4a3524', soft: '#d8c8b4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'atlas-moth',
    zhName: '乌桕大蚕蛾',
    enName: 'Atlas Moth',
    zhLabel: '最大的蛾类之一',
    enLabel: 'One of the largest moths',
    zhVisible: '看它翅膀尖上的“蛇头”花纹——那是吓唬鸟类的保护色。',
    enVisible:
      'Look at the “snake head” patterns on the wingtips — camouflage to scare off birds.',
    zhSentences: [
      '这是乌桕大蚕蛾，翅膀展开比你的手掌还大得多。',
      '它的成虫口器退化，一生不吃不喝，只为了繁殖。',
    ],
    enSentences: [
      'This is the Atlas moth, with wings far wider than your hand.',
      'The adult’s mouth is sealed shut — it never eats and lives only to reproduce.',
    ],
    zhPron: 'wū jiù dà cán é',
    enPron: 'AT-las moth',
    zhPeriod: '现代（蚕蛾科延续数千万年）',
    enPeriod: 'Present day (silk-moth family tens of millions of years old)',
    zhRegions: ['南亚与东南亚', '中国南方'],
    enRegions: ['South and South-East Asia', 'southern China'],
    size: { kind: 'wingspan', minMeters: 0.24, maxMeters: 0.3 },
    diet: 'herbivore',
    zhParent:
      '乌桕大蚕蛾是世界上翅展最大的蛾类之一，最大个体翅展接近 30 厘米。翅膀尖端的透明“小窗”和蛇头状斑纹能在停歇时迷惑捕食者。幼虫取食乌桕、樟树、肉桂等叶片，茧丝坚韧，在印度被收集制成耐用的“野蚕丝”。成虫口器完全退化，靠幼虫期储存的脂肪度过约一到两周的成虫寿命，全部能量都用于交配和产卵。',
    enParent:
      'The Atlas moth is among the largest moths on Earth, with a wingspan approaching 30 centimetres. The transparent “windows” and snake-head wingtips confuse predators while it rests. Caterpillars feed on tallow tree, camphor, cinnamon and similar leaves, and their tough cocoons are gathered in India for durable “fagara” silk. The adult moth’s mouthparts are non-functional: it lives about one to two weeks on fat stored as a caterpillar, spending everything on mating and egg-laying.',
    sources: [
      {
        title: 'Atlas moth — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Attacus_atlas',
      },
      {
        title: 'Attacus atlas — 台湾生命大百科',
        url: 'https://taieol.tw/pages/13380',
      },
    ],
    zhUncertainties: [
      '翅展区间为大个体范围；常见个体略小。',
      '“世界最大”与赫克力士长戟大蚕蛾等在面积和翅展上各有领先，说法不一。',
    ],
    enUncertainties: [
      'The wingspan range reflects large individuals; typical adults are smaller.',
      '“World’s largest” depends on the measure — wing area and wingspan favour different giant moths.',
    ],
    accent: { strong: '#a06633', soft: '#ecd4ae' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'brown-cicada',
    zhName: '油蝉',
    enName: 'Large Brown Cicada',
    zhLabel: '夏蝉（日本常见种）',
    enLabel: 'Summer cicada (common Japanese species)',
    zhVisible: '看它透明的翅膀和鼓鼓的眼睛——盛夏的“知了知了”就来自它。',
    enVisible:
      'Look at the glassy wings and bulging eyes — this is the voice of high summer in Japan.',
    zhSentences: [
      '这是油蝉，日本夏天最有代表性的蝉鸣“ミーン、ミーン”就来自它。',
      '雄蝉腹部的鼓膜振动发声，是昆虫世界的大嗓门。',
    ],
    enSentences: [
      'This is the large brown cicada, whose “miin miin” song defines Japanese summer.',
      'Males sing with drumming plates on the abdomen — among the loudest insects on Earth.',
    ],
    zhPron: 'yóu chán',
    enPron: 'larj brown si-KAY-da',
    zhPeriod: '现代（蝉科延续数千万年）',
    enPeriod: 'Present day (cicada family tens of millions of years old)',
    zhRegions: ['日本', '东亚部分地区'],
    enRegions: ['Japan', 'parts of East Asia'],
    size: { kind: 'body-length', minMeters: 0.05, maxMeters: 0.06 },
    diet: 'herbivore',
    zhParent:
      '油蝉（アブラゼミ）是日本最常见的蝉之一，盛夏正午的蝉鸣多半来自它。只有雄蝉会鸣叫：腹部基部的鼓膜器每秒振动上百次，中空的腹腔充当共鸣箱。蝉的若虫在地下生活三到六年，用刺吸式口器吸食树根汁液，夏夜爬出地面羽化，成虫寿命只有几周。雌蝉会把卵产在枯枝里，卵孵化后若虫落地入土，开始下一轮地下生活。',
    enParent:
      'The large brown cicada (abura-zemi) is among Japan’s commonest cicadas, the main voice of a midsummer noon. Only males sing: drum plates at the base of the abdomen buckle hundreds of times a second, and the hollow belly amplifies the sound. Nymphs spend three to six years underground sipping root sap, then climb out on summer nights to moult into adults that live just a few weeks. Females lay eggs in twigs, and the hatched nymphs drop to the soil to begin the cycle again.',
    sources: [
      {
        title: 'Graptopsaltria nigrofuscata — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Graptopsaltria_nigrofuscata',
      },
      {
        title: 'アブラゼミ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/aburazemi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含翅膀；若虫地下生活年限为估计范围。',
      '“油蝉”中文也叫大油蝉，不同地区俗称不一。',
    ],
    enUncertainties: [
      'The size excludes the wings; the underground period is an estimated range.',
      'Common names for this cicada vary across regions.',
    ],
    accent: { strong: '#6b5638', soft: '#e0d4ba' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'dragonfly',
    zhName: '黄蜻',
    enName: 'Wandering Glider Dragonfly',
    zhLabel: '蜻蜓（迁徙能手）',
    enLabel: 'Dragonfly (globe-trotting migrant)',
    zhVisible: '看它四片平展的透明翅膀——蜻蜓是世界上飞得最好的昆虫之一。',
    enVisible:
      'Look at the four glassy wings held flat — dragonflies are among the finest fliers in the insect world.',
    zhSentences: [
      '这是黄蜻，全世界分布最广的蜻蜓。',
      '它能乘着季风跨海迁徙，一代接力飞几千公里。',
    ],
    enSentences: [
      'This is the wandering glider, the most widespread dragonfly on Earth.',
      'Riding monsoon winds across oceans, its migrations span thousands of kilometres over several generations.',
    ],
    zhPron: 'huáng qīng',
    enPron: 'WON-der-ing GLY-der',
    zhPeriod: '现代（蜻蜓目延续三亿多年）',
    enPeriod: 'Present day (dragonfly order over 300 million years old)',
    zhRegions: ['全世界的温暖地区'],
    enRegions: ['warm regions worldwide'],
    size: { kind: 'wingspan', minMeters: 0.08, maxMeters: 0.1 },
    diet: 'carnivore',
    zhParent:
      '黄蜻（Pantala flavescens）可能是地球上迁徙距离最长的昆虫之一：研究发现它的种群跨越印度洋在非洲与印度之间季节性往返。蜻蜓的飞行肌直接驱动四片翅膀，能悬停、倒飞、急转弯，捕食成功率高达九成以上。它的稚虫（水虿）生活在水里，用可弹出的“面罩”下唇捕捉猎物，也是凶猛的水中小猎手。',
    enParent:
      'The wandering glider (Pantala flavescens) may be the longest-migrating insect known: genetic and tracking studies link populations that ride monsoon winds between Africa and India across the Indian Ocean. Dragonfly flight muscles drive all four wings directly, allowing hovering, backwards flight and hairpin turns, and hunting success rates above ninety per cent. Its aquatic nymphs are fierce underwater hunters, snatching prey with a hinged lower lip that shoots out like a spear gun.',
    sources: [
      {
        title: 'Pantala flavescens — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Pantala_flavescens',
      },
      {
        title: 'Wandering glider — 大英百科全书（Britannica）相关条目',
        url: 'https://www.britannica.com/animal/dragonfly',
      },
    ],
    zhUncertainties: [
      '模型按常见“蜻蜓”通称处理，此条目以黄蜻为参照种。',
      '迁徙路线的细节仍在追踪研究中。',
    ],
    enUncertainties: [
      'The model follows the generic “dragonfly”; this entry uses the wandering glider as the reference species.',
      'Details of the migration route are still being tracked.',
    ],
    accent: { strong: '#3f7a8a', soft: '#cfe4ea' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'evening-cicada',
    zhName: '蜩（日暮蝉）',
    enName: 'Evening Cicada',
    zhLabel: '暮蝉（日本秋季物候）',
    enLabel: 'Evening cicada (a sign of autumn in Japan)',
    zhVisible: '看它深色的身体和半透明的翅膀——傍晚的“カナカナ”声就来自它。',
    enVisible:
      'Look at the dark body and smoky wings — the “kana-kana” chorus at dusk is this cicada.',
    zhSentences: [
      '这是蜩，日本文学里代表初秋的蝉。',
      '它多在清晨和傍晚鸣叫，叫声像“かなかな”的风铃声。',
    ],
    enSentences: [
      'This is the higurashi, the cicada that signals early autumn in Japanese poetry.',
      'It sings mostly at dawn and dusk, a chiming “kana-kana” like tiny bells.',
    ],
    zhPron: 'tiáo',
    enPron: 'EEV-ning si-KAY-da',
    zhPeriod: '现代（蝉科延续数千万年）',
    enPeriod: 'Present day (cicada family tens of millions of years old)',
    zhRegions: ['日本', '东亚部分地区'],
    enRegions: ['Japan', 'parts of East Asia'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.035 },
    diet: 'herbivore',
    zhParent:
      '蜩（ヒグラシ，汉字也作“日暮”）是日本俳句中的初秋季节词：在油蝉喧闹的正夏之后，它清澈而略带哀愁的“カナカナ”声标志着季节转换。与多数蝉喜欢正午烈日不同，它常在清晨和傍晚、甚至阴天鸣叫。若虫在地下吸食树根汁液数年，夏末秋初羽化。日本著名游戏与动画《寒蝉鸣泣之时》的名字就来自这种蝉。',
    enParent:
      'The higurashi (literally “evening cicada”) is an early-autumn season word in Japanese poetry: after the midsummer roar of other cicadas, its clear, slightly mournful “kana-kana” marks the turning year. Unlike most cicadas it favours dawn, dusk and overcast days over blazing noon. Nymphs spend years underground sipping root sap before emerging in late summer. The anime and game series “Higurashi: When They Cry” takes its name from this insect.',
    sources: [
      {
        title: 'Tanna japonensis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Tanna_japonensis',
      },
      {
        title: 'ヒグラシ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/higurashi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含翅膀。',
      '中文“蜩”泛指多种蝉，此处按日文ヒグラシ对应种介绍。',
    ],
    enUncertainties: [
      'The size excludes the wings.',
      'Chinese usage of the character is broader; this entry follows the Japanese higurashi species.',
    ],
    accent: { strong: '#5a6b4a', soft: '#d8dfc8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'firefly',
    zhName: '萤火虫',
    enName: 'Firefly',
    zhLabel: '发光甲虫',
    enLabel: 'Glowing beetle',
    zhVisible: '看它腹部的发光器——萤火虫的光是几乎不发热量的“冷光”。',
    enVisible:
      'Look at the light organ on its abdomen — firefly light is “cold light” that wastes almost no energy as heat.',
    zhSentences: [
      '这是萤火虫，夏夜里提着小灯笼的甲虫。',
      '它一闪一闪，是在用光信号寻找伴侣。',
    ],
    enSentences: [
      'This is the firefly, the little lantern beetle of summer nights.',
      'Each flash is a coded signal for finding a mate.',
    ],
    zhPron: 'yíng huǒ chóng',
    enPron: 'FY-er-fly',
    zhPeriod: '现代（萤科延续上亿年）',
    enPeriod: 'Present day (firefly family over 100 million years old)',
    zhRegions: ['东亚（日本、中国等地的清洁水边）'],
    enRegions: ['East Asia (clean streamsides in Japan, China and neighbours)'],
    size: { kind: 'body-length', minMeters: 0.01, maxMeters: 0.02 },
    diet: 'carnivore',
    zhParent:
      '萤火虫其实是甲虫：腹部的发光细胞里，荧光素在荧光素酶催化下与氧气反应发光，能量转化效率接近百分之百，远超白炽灯。每种萤火虫的闪光节奏都不同，雄虫边飞边闪，雌虫在草丛中按密码回应。幼虫生活在水边，捕食蜗牛和螺类，是凶猛的小猎手。萤火虫对水质和黑暗环境极其敏感，光污染和河道水泥化使它们越来越少见。',
    enParent:
      'Fireflies are actually beetles: in light-producing cells of the abdomen, the chemical luciferin reacts with oxygen in front of an enzyme to make light at nearly one hundred per cent efficiency — far better than an incandescent bulb. Each species flashes its own rhythm: males signal on the wing and females answer from the grass with the correct code. The larvae live by streams and are fierce little hunters of snails. Because fireflies need clean water and real darkness, light pollution and concrete riverbanks have made them rare.',
    sources: [
      {
        title: 'Firefly — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/firefly-insect',
      },
      {
        title: 'Firefly — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Firefly',
      },
    ],
    zhUncertainties: [
      '体长区间按常见水生萤火虫；不同种类差异较大。',
      '“发光效率百分之百”指化学能到光能的转化，是约数。',
    ],
    enUncertainties: [
      'The size covers common aquatic fireflies; species differ considerably.',
      'The near-100 per cent figure is chemical-to-light efficiency, an approximation.',
    ],
    accent: { strong: '#8a8a2b', soft: '#ececc8' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'giant-stag-beetle',
    zhName: '大锹形虫',
    enName: 'Giant Stag Beetle',
    zhLabel: '大型锹甲（日本）',
    enLabel: 'Giant stag beetle (Japan)',
    zhVisible: '看它巨大的颚——像鹿角一样的上颚是雄性决斗的武器。',
    enVisible:
      'Look at the huge jaws — the antler-like mandibles are a male’s duelling weapons.',
    zhSentences: [
      '这是大锹形虫，日本最大的锹甲。',
      '雄虫用大颚夹住对手，把他从树干上扔下去。',
    ],
    enSentences: [
      'This is the giant stag beetle, the largest stag beetle in Japan.',
      'Males grip rivals in their great jaws and hurl them off the tree trunk.',
    ],
    zhPron: 'dà qiāo xíng chóng',
    enPron: 'JY-ant stag BEE-tul',
    zhPeriod: '现代（锹甲科延续数千万年）',
    enPeriod: 'Present day (stag-beetle family tens of millions of years old)',
    zhRegions: ['日本', '东亚部分地区'],
    enRegions: ['Japan', 'parts of East Asia'],
    size: { kind: 'body-length', minMeters: 0.05, maxMeters: 0.075 },
    diet: 'herbivore',
    zhParent:
      '大锹形虫（オオクワガタ）是日本锹甲中的王者，深受昆虫爱好者喜爱，一只大个体曾被视作“昆虫界的黑钻石”。雄虫的大颚长度可超过身体的一半，颚内侧的齿突形状能判断产地。幼虫以阔叶树的朽木为食，在木头里生活两三年；成虫夏夜聚集在流汁液的栎树等树干上吸食树汁。雌虫颚小得多，负责在朽木里产卵。',
    enParent:
      'The giant stag beetle (Dorcus hopei) is king of Japan’s stag beetles and a favourite of insect keepers — large males were once nicknamed “black diamonds” of the insect world. Its mandibles can exceed half the body length, and the pattern of inner teeth hints at where the beetle came from. Larvae eat rotten hardwood for two or three years; adults gather on summer nights at sap flows on oak trunks. The smaller-jawed females lay eggs inside decaying wood.',
    sources: [
      {
        title: 'Dorcus hopei — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dorcus_hopei',
      },
      {
        title: 'オオクワガタ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/ookuwagata.htm',
      },
    ],
    zhUncertainties: [
      '体长区间含大颚；雌虫明显更小。',
      '中文名在不同资料中也作“大锹甲”“大锹形虫”，以日文汉字名为准。',
    ],
    enUncertainties: [
      'The size includes the mandibles; females are much smaller.',
      'Chinese common names vary; the Japanese kanji name is the reliable identifier.',
    ],
    accent: { strong: '#3a2f28', soft: '#d0c6bc' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'grasshopper',
    zhName: '蚱蜢',
    enName: 'Grasshopper',
    zhLabel: '直翅目昆虫（跳跃能手）',
    enLabel: 'Grasshopper (champion jumper)',
    zhVisible: '看它发达的后腿——一蹬能跳出体长二十倍的距离。',
    enVisible:
      'Look at the powerful hind legs — one kick launches it twenty body-lengths away.',
    zhSentences: [
      '这是蚱蜢，草丛里的跳远冠军。',
      '它的耳朵长在肚子上，不在头上。',
    ],
    enSentences: [
      'This is the grasshopper, the long-jump champion of the grass.',
      'Its ears sit on its belly, not on its head.',
    ],
    zhPron: 'zhà měng',
    enPron: 'GRAS-hop-er',
    zhPeriod: '现代（蝗总科延续上亿年）',
    enPeriod: 'Present day (grasshopper lineage over 100 million years old)',
    zhRegions: ['全世界的草地'],
    enRegions: ['grasslands worldwide'],
    size: { kind: 'body-length', minMeters: 0.05, maxMeters: 0.08 },
    diet: 'herbivore',
    zhParent:
      '蚱蜢的后腿像弹簧：腿节里的弹性蛋白储能后瞬间释放，把它弹射出去，配合翅膀可以飞出很远。它的听器长在第一腹节两侧，雄虫用后腿摩擦翅膀发声求偶。蚱蜢吃草和禾本科植物，是草原食物链的重要一环——鸟类、蜘蛛、螳螂都以它为食。它与蝗虫是近亲，某些种类密度大增时会聚集成群迁飞成灾。',
    enParent:
      'A grasshopper’s hind legs are springs: elastic protein stores energy and releases it in one explosive kick, and the wings take over from there. Its ears are patches on the sides of the first abdominal segment, and males sing by rasping a leg against a wing. Grass-eaters themselves, grasshoppers are a key link in the food chain, feeding birds, spiders and mantises. Close relatives include locusts, which gather into devastating swarms when crowded.',
    sources: [
      {
        title: 'Grasshopper — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/grasshopper-insect',
      },
      {
        title: 'Grasshopper — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Grasshopper',
      },
    ],
    zhUncertainties: [
      '体长区间按常见种类；不同种差异较大。',
      '模型按通称“蚱蜢”处理，未必对应单一物种。',
    ],
    enUncertainties: [
      'The size covers common species; the group varies widely.',
      'The model is a generic grasshopper and may not match one exact species.',
    ],
    accent: { strong: '#6b7a3a', soft: '#dde4c0' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'hercules-beetle-ar',
    zhName: '长戟大兜虫（AR 版）',
    enName: 'Hercules Beetle (AR Model)',
    zhLabel: '最大的兜虫之一（美洲）',
    enLabel: 'One of the largest beetles (the Americas)',
    zhVisible: '看它的超长双角——连角算在内，它是最长的甲虫之一。',
    enVisible:
      'Look at the extra-long double horns — counted with the horns, it is among the longest beetles alive.',
    zhSentences: [
      '这是长戟大兜虫，以希腊神话的大力神赫拉克勒斯命名。',
      '雄虫的角能占到体长的三分之二。',
    ],
    enSentences: [
      'This is the Hercules beetle, named after the mythological strongman.',
      'A male’s horns can make up two-thirds of his total length.',
    ],
    zhPron: 'cháng jǐ dà dōu chóng',
    enPron: 'HER-kyoo-leez BEE-tul',
    zhPeriod: '现代（金龟总科延续上亿年）',
    enPeriod: 'Present day (scarab lineage over 100 million years old)',
    zhRegions: ['中美洲与南美洲北部的热带雨林'],
    enRegions: ['rainforests of Central and northern South America'],
    size: { kind: 'body-length', minMeters: 0.07, maxMeters: 0.17 },
    diet: 'herbivore',
    zhParent:
      '长戟大兜虫（Dynastes hercules）是最长的甲虫之一，最大雄虫连角可达 17 厘米。两根角一长一短像钳子：胸角极长，头角向下弯曲，决斗时夹住对手高举重摔。幼虫在腐木里生活一到两年，化蛹前体重可达一百克以上。成虫吸食树汁和水果，能活三到六个月。传说它能搬动体重 850 倍的重物——那是夸大其词，但兜虫确实是昆虫界的大力士。',
    enParent:
      'The Hercules beetle (Dynastes hercules) is among the longest beetles, big males reaching 17 centimetres with horns. The long thoracic horn and downward-curving head horn work like pincers: grip the rival, lift and slam. Larvae live one to two years in rotting logs, passing 100 grams before pupating. Adults feed on sap and fruit and live three to six months. The tale that it carries 850 times its weight is an exaggeration — but these beetles are genuine strongmen.',
    sources: [
      {
        title: 'Hercules beetle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Hercules_beetle',
      },
      {
        title: 'Hercules beetle — 大英百科全书（Britannica）相关条目',
        url: 'https://www.britannica.com/animal/rhinoceros-beetle-insect',
      },
    ],
    zhUncertainties: [
      '体长区间含角；雌虫无角且明显更小。',
      '“850 倍体重”的说法流传广泛但缺乏严谨测量支持。',
    ],
    enUncertainties: [
      'The size includes the horns; females are hornless and much smaller.',
      'The 850-times-body-weight claim circulates widely without rigorous measurement.',
    ],
    accent: { strong: '#5c4632', soft: '#dccfbc' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'hornet',
    zhName: '日本大黄蜂',
    enName: 'Asian Giant Hornet',
    zhLabel: '最大的胡蜂',
    enLabel: 'Largest hornet',
    zhVisible: '看它黄色的头部和强大的颚——这是世界上最大的胡蜂。',
    enVisible:
      'Look at the yellow head and powerful jaws — this is the world’s largest hornet.',
    zhSentences: [
      '这是日本大黄蜂，最大的胡蜂，毒性很强，要远远观察。',
      '蜜蜂对付它的办法是几十只一拥而上，用体温“煮熟”入侵者。',
    ],
    enSentences: [
      'This is the Asian giant hornet — the largest hornet, with a potent sting; observe from afar.',
      'Honeybees fight back by mobbing it in a hot bee-ball that cooks the invader.',
    ],
    zhPron: 'rì běn dà huáng fēng',
    enPron: 'AY-zhan JY-ant HOR-net',
    zhPeriod: '现代（胡蜂科延续数千万年）',
    enPeriod: 'Present day (hornet family tens of millions of years old)',
    zhRegions: ['东亚与东北亚（日本、中国、朝鲜半岛等）'],
    enRegions: ['East and North-East Asia (Japan, China, Korea)'],
    size: { kind: 'body-length', minMeters: 0.035, maxMeters: 0.055 },
    diet: 'omnivore',
    zhParent:
      '日本大黄蜂（スズメバチ）体长可达五厘米，毒针长达六毫米，攻击性集中在守护蜂巢的秋季，务必远离。它是蜜蜂的天敌：几只大黄蜂就能摧毁一个蜜蜂巢。日本本土蜜蜂演化出惊人对策——侦察蜂一出现，数百只蜜蜂把它团团围住振动产热，把球心温度升到近 50 度热死大黄蜂。大黄蜂也捕食害虫，森林里不能没有它，人与蜂保持距禽最重要。',
    enParent:
      'The Asian giant hornet reaches five centimetres with a six-millimetre sting; its aggression peaks around nests in autumn, so distance is essential. It preys on honeybees — a handful of hornets can destroy a hive. Japanese honeybees have evolved a remarkable defence: hundreds of workers engulf the scout in a tight ball and vibrate, cooking the hornet at nearly 50 degrees. Hornets also eat pest insects and belong in the forest; the rule for people is simply to keep a respectful distance.',
    sources: [
      {
        title: 'Asian giant hornet — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Asian_giant_hornet',
      },
      {
        title: 'オオスズメバチ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/oosuzumebachi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含针与翅膀；蜂后明显大于工蜂。',
      '蜜蜂热球防御主要在日本蜜蜂中观察到，西方蜜蜂不掌握这招。',
    ],
    enUncertainties: [
      'The size excludes wings and sting; queens are clearly larger than workers.',
      'The bee-ball defence is documented chiefly in Japanese honeybees; western honeybees cannot do it.',
    ],
    accent: { strong: '#8a5a1f', soft: '#ecd8ae' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'jewel-beetle',
    zhName: '彩虹吉丁虫',
    enName: 'Jewel Beetle',
    zhLabel: '吉丁虫科（金属光泽）',
    enLabel: 'Jewel beetle (metallic sheen)',
    zhVisible: '看它彩虹般的金属光泽——这种颜色不是色素，而是壳层结构反射出来的。',
    enVisible:
      'Look at the rainbow metallic shine — that colour comes from light-bending shell layers, not pigment.',
    zhSentences: [
      '这是彩虹吉丁虫，会发光的“飞行宝石”。',
      '日本的法隆寺曾用几万片吉丁虫鞘翅装饰佛龛。',
    ],
    enSentences: [
      'This is the jewel beetle, a flying gemstone.',
      'In Japan, tens of thousands of jewel-beetle wing cases once decorated a temple shrine.',
    ],
    zhPron: 'cǎi hóng jí dīng chóng',
    enPron: 'JOO-el BEE-tul',
    zhPeriod: '现代（吉丁虫科延续上亿年）',
    enPeriod: 'Present day (jewel-beetle family over 100 million years old)',
    zhRegions: ['日本', '东亚森林'],
    enRegions: ['Japan', 'forests of East Asia'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.04 },
    diet: 'herbivore',
    zhParent:
      '吉丁虫的彩虹色来自鞘翅表层的纳米级多层结构，光在层间反射干涉产生金属光泽，所以即使制成标本也永不褪色——日本奈良法隆寺的玉虫厨子佛龛就用上万片玉虫鞘翅镶嵌。幼虫蛀食枯木或衰弱木的木质部，成虫盛夏访花吸汁。有些吉丁虫能探测森林火灾的红外线，专门飞往刚烧毁的林地产卵。',
    enParent:
      'A jewel beetle’s rainbow is structural: nanometre-thin layers in the wing cases interfere with light, so the metallic shine never fades — Nara’s Hōryū-ji temple inlaid tens of thousands of wing cases into its Tamamushi Shrine. Larvae tunnel in dead or weakened wood, and adults visit summer flowers for sap and pollen. Some jewel beetles detect forest fires by infrared and fly straight to freshly burned woodland to lay eggs.',
    sources: [
      {
        title: 'Buprestidae — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Buprestidae',
      },
      {
        title: '玉虫（タマムシ）— 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/tamamushi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间按常见吉丁虫；科内差异较大。',
      '“法隆寺玉虫厨子”的装饰数量与细节在史料中记载不一。',
    ],
    enUncertainties: [
      'The size covers common jewel beetles; the family varies widely.',
      'The exact wing-case count on the Tamamushi Shrine differs between historical sources.',
    ],
    accent: { strong: '#2e6e5e', soft: '#c8e0d8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'ladybug',
    zhName: '七星瓢虫',
    enName: 'Seven-spot Ladybird',
    zhLabel: '益虫（蚜虫克星）',
    enLabel: 'Helpful beetle (aphid hunter)',
    zhVisible: '数一数它背上的黑点——不多不少正好七颗。',
    enVisible:
      'Count the black spots on its back — exactly seven, no more, no less.',
    zhSentences: [
      '这是七星瓢虫，背上有七颗星的迷你甲虫。',
      '它一天能吃掉上百只蚜虫，是花园的免费保镖。',
    ],
    enSentences: [
      'This is the seven-spot ladybird, a tiny beetle with seven stars on its back.',
      'It can eat over a hundred aphids a day — a free bodyguard for the garden.',
    ],
    zhPron: 'qī xīng piáo chóng',
    enPron: 'SEV-en-spot LAY-dee-bird',
    zhPeriod: '现代（瓢虫科延续数千万年）',
    enPeriod: 'Present day (ladybird family tens of millions of years old)',
    zhRegions: ['欧洲、亚洲与北美洲'],
    enRegions: ['Europe, Asia and North America'],
    size: { kind: 'body-length', minMeters: 0.007, maxMeters: 0.01 },
    diet: 'carnivore',
    zhParent:
      '七星瓢虫只有指甲盖大小，却是蚜虫的噩梦：成虫和幼虫都以蚜虫为食，一只瓢虫一生能吃掉几千只。遇到危险时，它会从腿关节处渗出黄色的苦液（“反射性出血”），让捕食者难以下口。鲜艳的红黑配色是警告色：“我有难吃的化学物质，别碰我。”冬天它们成百上千聚在一起越冬，春天再散开产卵——卵总是产在蚜虫群附近。',
    enParent:
      'The seven-spot ladybird is fingernail-sized yet an aphid’s nightmare: adults and larvae alike eat aphids, and one ladybird can devour several thousand in its life. When threatened it oozes bitter yellow fluid from its leg joints — “reflex bleeding” that puts predators off. The bold red-and-black coat is a warning: “I taste terrible.” Hundreds huddle together through winter, then scatter in spring to lay eggs right beside aphid colonies.',
    sources: [
      {
        title: 'Seven-spot ladybird — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Coccinella_septempunctata',
      },
      {
        title: 'Ladybird — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/ladybug',
      },
    ],
    zhUncertainties: [
      '体长为毫米级，模型会被大幅放大展示。',
      '“七星”是该种的固定特征，但瓢虫科其他种类斑点数差异很大。',
    ],
    enUncertainties: [
      'The size is in millimetres and the model is shown greatly enlarged.',
      'Seven spots are fixed for this species, but other ladybirds carry very different counts.',
    ],
    accent: { strong: '#b03030', soft: '#f0cccc' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'mantis',
    zhName: '中华大刀螳',
    enName: 'Chinese Mantis',
    zhLabel: '捕食性昆虫（镰刀前足）',
    enLabel: 'Predatory insect (raptorial forelegs)',
    zhVisible: '看它举起的“大刀”——那对前足上的刺能牢牢锁住猎物。',
    enVisible:
      'Look at the raised “knives” — the spined forelegs lock prey in an inescapable grip.',
    zhSentences: [
      '这是中华大刀螳，举着大刀等待猎物的伏击高手。',
      '它是唯一能把头转过肩膀向后看的昆虫。',
    ],
    enSentences: [
      'This is the Chinese mantis, an ambush hunter waiting with blades raised.',
      'It is the only insect that can turn its head to look over its shoulder.',
    ],
    zhPron: 'zhōng huá dà dāo táng',
    enPron: 'CHY-neez MAN-tis',
    zhPeriod: '现代（螳螂目延续上亿年）',
    enPeriod: 'Present day (mantis order over 100 million years old)',
    zhRegions: ['东亚', '作为入侵种引入北美'],
    enRegions: ['East Asia', 'introduced in North America'],
    size: { kind: 'body-length', minMeters: 0.07, maxMeters: 0.1 },
    diet: 'carnivore',
    zhParent:
      '中华大刀螳是体型最大的螳螂之一，三角形的头能灵活转动，复眼盯着移动的猎物。它的捕捉足折起来像在“祈祷”，展开时锯齿相扣，猎物几乎无法逃脱，从苍蝇、蚱蜢到小蜥蜴都在菜单上。雌螳螂有时会在交配后吃掉雄螳螂——但这是在圈养紧张环境下更常见的行为，野外并不普遍。它产的卵块（螵蛸）能安全过冬，春天一次孵化上百只小螳螂。',
    enParent:
      'The Chinese mantis is one of the largest mantises, with a mobile triangular head and compound eyes locked on anything that moves. Folded, its forelegs look like praying hands; opened, the interlocking spines trap flies, grasshoppers and even small lizards. Females sometimes eat their mates — but that behaviour is far commoner under laboratory stress than in the wild. Its foam egg case (ootheca) survives the winter and hatches a hundred tiny mantises in spring.',
    sources: [
      {
        title: 'Chinese mantis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Chinese_mantis',
      },
      {
        title: 'オオカマキリ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/ookamakiri.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含细长的腹部末端与翅膀尖。',
      '“性食同类”被流行文化夸大，野外发生率有限。',
    ],
    enUncertainties: [
      'The size excludes the wingtips and the tip of the abdomen.',
      '“Sexual cannibalism” is exaggerated by pop culture; wild rates are modest.',
    ],
    accent: { strong: '#5e7a3a', soft: '#d8e4c2' },
    habitat: 'land',
    atmosphere: 'plains',
  },
  {
    slug: 'morpho-butterfly',
    zhName: '大蓝闪蝶',
    enName: 'Blue Morpho Butterfly',
    zhLabel: '雨林蝴蝶（结构色）',
    enLabel: 'Rainforest butterfly (structural blue)',
    zhVisible: '看它翅膀正面的亮蓝色——那不是颜料，是千万片鳞片折射出来的光。',
    enVisible:
      'Look at the brilliant blue upper wings — not paint, but light refracted by millions of scales.',
    zhSentences: [
      '这是大蓝闪蝶，中南美雨林里的“会飞的蓝宝石”。',
      '它翅膀背面是朴实的褐色，合起翅膀就隐身了。',
    ],
    enSentences: [
      'This is the blue morpho, a flying sapphire of the American rainforest.',
      'The underside of its wings is dull brown — close them and it vanishes.',
    ],
    zhPron: 'dà lán shǎn dié',
    enPron: 'bloo MOR-foh',
    zhPeriod: '现代（蛺蝶科延续数千万年）',
    enPeriod: 'Present day (brush-footed butterfly family tens of millions of years old)',
    zhRegions: ['中美洲与南美洲的热带雨林'],
    enRegions: ['rainforests of Central and South America'],
    size: { kind: 'wingspan', minMeters: 0.12, maxMeters: 0.15 },
    diet: 'herbivore',
    zhParent:
      '大蓝闪蝶的蓝是结构色：鳞片表面有圣诞树状的纳米结构，只反射蓝色波长的光，所以角度一变颜色就变，用水沾湿还会暂时变暗。这种闪烁的飞行让捕食者难以锁定。成虫口器只能吸食液体，食谱是发酵烂果、树汁甚至动物尸体渗出的液体。幼虫吃豆科植物，身上的细毛会刺激皮肤。雨林部落曾把闪蝶翅膀镶嵌成工艺品。',
    enParent:
      'The morpho’s blue is structural: Christmas-tree-shaped nanostructures on the scales reflect only blue wavelengths, so the colour shifts with angle and darkens when wet. That flashing flight makes it hard for predators to track. Adults can only drink — their menu is fermenting fruit, tree sap and juices from carrion. Caterpillars feed on legumes and wear irritating hairs. Indigenous artisans have long set morpho wings into jewellery and crafts.',
    sources: [
      {
        title: 'Morpho — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Morpho',
      },
      {
        title: 'Blue morpho — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/animal/morpho-butterfly',
      },
    ],
    zhUncertainties: [
      '翅展区间按大蓝闪蝶；闪蝶属不同种差异较大。',
      '工艺品贸易如今多来自人工养殖，而非野外捕捉。',
    ],
    enUncertainties: [
      'The wingspan covers the blue morpho; other Morpho species differ.',
      'The butterfly-wing craft trade today relies largely on farmed butterflies.',
    ],
    accent: { strong: '#2b5cb8', soft: '#c8d8f0' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'periodical-cicada',
    zhName: '十七年蝉',
    enName: 'Periodical Cicada',
    zhLabel: '周期蝉（北美）',
    enLabel: 'Periodical cicada (North America)',
    zhVisible: '看它红色的眼睛——它们在地下等了十七年才见到阳光。',
    enVisible:
      'Look at the red eyes — these cicadas waited seventeen years underground for this summer.',
    zhSentences: [
      '这是十七年蝉，在地下生活十七年才羽化的“时间胶囊”昆虫。',
      '同一批蝉会约好一样在同一年倾巢而出，多达数十亿只。',
    ],
    enSentences: [
      'This is the periodical cicada, a time-capsule insect that spends seventeen years underground.',
      'A whole brood emerges in the same year — billions of cicadas at once.',
    ],
    zhPron: 'shí qī nián chán',
    enPron: 'PEER-ee-OD-ik-al si-KAY-da',
    zhPeriod: '现代（周期蝉属延续数百万年）',
    enPeriod: 'Present day (Magicicada lineage millions of years old)',
    zhRegions: ['北美洲东部'],
    enRegions: ['eastern North America'],
    size: { kind: 'body-length', minMeters: 0.025, maxMeters: 0.035 },
    diet: 'herbivore',
    zhParent:
      '周期蝉是自然界的数学谜题：它们在地下吸食树根汁液十三年或十七年，然后数十亿只同时钻出地面羽化。为什么是 13 和 17？因为它们都是质数——任何天敌的生命周期都难以与它们同步。这种“饱和策略”让捕食者吃撑了也吃不完，幸存的蝉得以繁殖。不同年份羽化的种群被编号为不同的“窝”（brood）。它们寿命短暂而喧闹，是北美东部的自然奇观。',
    enParent:
      'Periodical cicadas are a mathematical mystery: they sip root sap underground for thirteen or seventeen years, then billions surface in the same few weeks. Why 13 and 17? Both are prime numbers, so no predator’s life cycle can easily synchronise with them. The swarm overwhelms every predator and still has survivors left to breed — “predator satiation”. Broods are numbered by emergence year, and their brief, deafening summers are a natural wonder of eastern America.',
    sources: [
      {
        title: 'Periodical cicadas — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Periodical_cicadas',
      },
      {
        title: 'Magicicada — 大英百科全书（Britannica）相关条目',
        url: 'https://www.britannica.com/animal/cicada',
      },
    ],
    zhUncertainties: [
      '体长区间不含翅膀。',
      '质数周期躲避天敌是最流行的解释，但并非唯一假说。',
    ],
    enUncertainties: [
      'The size excludes the wings.',
      'Prime-numbered cycles as predator evasion is the leading explanation, not the only hypothesis.',
    ],
    accent: { strong: '#6b4a2e', soft: '#e2d2bc' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'rhinoceros-beetle',
    zhName: '独角仙',
    enName: 'Japanese Rhinoceros Beetle',
    zhLabel: '兜虫（日本国民昆虫）',
    enLabel: 'Rhinoceros beetle (Japan’s favourite insect)',
    zhVisible: '看它分叉的头角——像迷你犀牛的角，能把对手挑起来摔出去。',
    enVisible:
      'Look at the forked horn — a miniature rhino’s horn that scoops rivals up and throws them off.',
    zhSentences: [
      '这是独角仙，日本孩子夏天最想抓到的昆虫。',
      '它能举起比自己重几十倍的东西，是昆虫界的大力士。',
    ],
    enSentences: [
      'This is the Japanese rhinoceros beetle, the insect every child in Japan wants to catch in summer.',
      'It can lift dozens of times its own weight — a true insect strongman.',
    ],
    zhPron: 'dú jiǎo xiān',
    enPron: 'JAP-a-neez RY-no-se-ros BEE-tul',
    zhPeriod: '现代（金龟总科延续上亿年）',
    enPeriod: 'Present day (scarab lineage over 100 million years old)',
    zhRegions: ['日本', '东亚森林'],
    enRegions: ['Japan', 'forests of East Asia'],
    size: { kind: 'body-length', minMeters: 0.04, maxMeters: 0.08 },
    diet: 'herbivore',
    zhParent:
      '独角仙（カブトムシ）的名字来自武士头盔（兜），雄虫的头角向前分叉、胸角短而上翘，打架时钻到对手身下把它举起来扔下树。幼虫（蛴螬）在腐殖土里生活约一年，吃腐叶和朽木；成虫夏夜聚集在麻栎等流汁液的树干上。独角仙在日本是国民级昆虫，孩子们养它、商店夏天卖它；雌虫没有角，负责在腐殖土里产卵。',
    enParent:
      'The rhinoceros beetle is named “kabuto-mushi” after the samurai helmet. The male’s forked head horn slides under a rival and catapults him off the trunk. Larvae spend about a year in humus eating rotten leaves and wood, while adults gather at oozing oak sap on summer nights. It is Japan’s national insect — children raise them and shops sell them every summer. Females have no horn and lay eggs in the leaf mould.',
    sources: [
      {
        title: 'Japanese rhinoceros beetle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Japanese_rhinoceros_beetle',
      },
      {
        title: 'カブトムシ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/kabutomushi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间含角；雌虫无角且明显更小。',
      '本馆“1048 批次”中有犀牛甲虫模型，可能同属近缘；发布前需核对。',
    ],
    enUncertainties: [
      'The size includes the horn; females are hornless and much smaller.',
      'The “1048 batch” of this collection includes a rhinoceros-beetle model that may be a close relative; check before publication.',
    ],
    accent: { strong: '#3f3226', soft: '#d2c6b6' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'robust-cicada',
    zhName: '鸣鸣蝉',
    enName: 'Robust Cicada',
    zhLabel: '秋蝉（“ミンミン”鸣声）',
    enLabel: 'Cicada (the “min-min” song)',
    zhVisible: '看它半透明的翅膀收拢在背上——日本夏末的“ミンミン”声就是它。',
    enVisible:
      'Look at the glassy wings folded over its back — this is the “min-min” singer of late Japanese summer.',
    zhSentences: [
      '这是鸣鸣蝉，夏末初秋“ミンミン”高歌的蝉。',
      '它的歌声明亮急促，越热叫得越欢。',
    ],
    enSentences: [
      'This is the robust cicada, singing “min-min” at the end of summer.',
      'Its song is bright and urgent, and it sings loudest on the hottest days.',
    ],
    zhPron: 'míng míng chán',
    enPron: 'roh-BUST si-KAY-da',
    zhPeriod: '现代（蝉科延续数千万年）',
    enPeriod: 'Present day (cicada family tens of millions of years old)',
    zhRegions: ['日本', '东亚与东南亚部分地区'],
    enRegions: ['Japan', 'parts of East and South-East Asia'],
    size: { kind: 'body-length', minMeters: 0.035, maxMeters: 0.045 },
    diet: 'herbivore',
    zhParent:
      '鸣鸣蝉（ミンミンゼミ）以急促明亮的“ミーン、ミンミン”声得名，是夏末秋初的代表性蝉鸣。与油蝉相比它出现稍晚，喜欢在山林边缘的树上鸣叫。若虫在地下吸食树根汁液多年，夏末爬出羽化。蝉发音的原理像用手捏响空的易拉罐——雄蝉腹部的鼓膜每秒弯折数百次，中空的体腔把声音放大到百米可闻。',
    enParent:
      'The robust cicada (min-min-zemi) is named for its urgent “meen, min-min” song, the signature sound of late summer and early autumn. It appears later than the large brown cicada and favours trees at the forest edge. Nymphs spend years underground on root sap before emerging at summer’s end. A cicada sings like a clicked drinks can: the male’s abdominal drum buckles hundreds of times a second and the hollow body carries the sound a hundred metres.',
    sources: [
      {
        title: 'Hyalessa maculaticollis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Hyalessa_maculaticollis',
      },
      {
        title: 'ミンミンゼミ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/minminzemi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含翅膀。',
      '中文名“鸣鸣蝉”为日文名的直译，并非正式中文学名。',
    ],
    enUncertainties: [
      'The size excludes the wings.',
      'The Chinese common name is a calque of the Japanese name rather than a formal name.',
    ],
    accent: { strong: '#5c5c4a', soft: '#dcdcc8' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'rosalia-batesi',
    zhName: '琉璃星天牛',
    enName: 'Rosalia Batesi Longicorn Beetle',
    zhLabel: '天牛（蓝色丝绒）',
    enLabel: 'Longhorn beetle (blue velvet)',
    zhVisible: '看它蓝灰色的身体和极长的触角——天牛的触角常常比身体还长。',
    enVisible:
      'Look at the blue-grey body and extremely long antennae — longhorn antennae often outgrow the body.',
    zhSentences: [
      '这是琉璃星天牛，披着蓝色丝绒的天牛。',
      '它的超长触角是探测树木气味的“天线”。',
    ],
    enSentences: [
      'This is Rosalia batesi, a longhorn beetle dressed in blue velvet.',
      'Its extra-long antennae are aerials for sniffing out the right tree.',
    ],
    zhPron: 'liú lí xīng tiān niú',
    enPron: 'roh-ZAY-lee-a BAYTS-ee-eye',
    zhPeriod: '现代（天牛科延续上亿年）',
    enPeriod: 'Present day (longhorn family over 100 million years old)',
    zhRegions: ['日本的山地森林'],
    enRegions: ['mountain forests of Japan'],
    size: { kind: 'body-length', minMeters: 0.02, maxMeters: 0.035 },
    diet: 'herbivore',
    zhParent:
      '琉璃星天牛（ルリボシカミキリ）是日本山毛榉林中最美丽的甲虫之一：蓝灰色丝绒般的身体上散布着黑斑，触角一节黑一节蓝。它以英国昆虫学家贝茨命名，夏季成虫出现在山毛榉等阔叶树上，雌虫把卵产在衰弱木的树皮缝里，幼虫蛀食木质部两三年才羽化。因为山地森林的减少，它在日本被列为近危物种。',
    enParent:
      'Rosalia batesi is among the most beautiful beetles of Japan’s beech forests: a blue-grey velvet body scattered with black spots, and antennae banded black and blue. Named after the British entomologist Henry Walter Bates, the adults appear in summer on beech and other broadleaf trees, and the female lays eggs in bark crevices of weakened trees; the wood-boring larvae take two or three years to emerge. With mountain forests shrinking, it is classed Near Threatened in Japan.',
    sources: [
      {
        title: 'Rosalia batesi — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Rosalia_batesi',
      },
      {
        title: 'ルリボシカミキリ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/ruriboshikamikiri.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含触角；触角可达体长两倍以上。',
      '中文名为日文汉字名的直译，非正式中文学名。',
    ],
    enUncertainties: [
      'The size excludes the antennae, which can exceed twice the body length.',
      'The Chinese name is a calque of the Japanese kanji name rather than a formal name.',
    ],
    accent: { strong: '#3a5a8a', soft: '#ccdcec' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'shining-ball-scarab',
    zhName: '虹彩粪金龟',
    enName: 'Shining Dung Scarab',
    zhLabel: '粪金龟（彩虹光泽）',
    enLabel: 'Dung scarab (rainbow sheen)',
    zhVisible: '看它彩虹色的圆润外壳——这是一只美丽的“便便搬运工”。',
    enVisible:
      'Look at the rainbow-domed shell — a beautiful beetle whose job is moving dung.',
    zhSentences: [
      '这是虹彩粪金龟，把动物粪便滚成球搬走的清道夫。',
      '它处理粪便是在帮草原“打扫卫生”。',
    ],
    enSentences: [
      'This is the shining dung scarab, a cleaner that rolls animal droppings into balls.',
      'By burying dung it keeps the grassland clean and fertilised.',
    ],
    zhPron: 'hóng cǎi fèn jīn guī',
    enPron: 'SHY-ning dung SKA-rab',
    zhPeriod: '现代（金龟总科延续上亿年）',
    enPeriod: 'Present day (scarab lineage over 100 million years old)',
    zhRegions: ['日本', '东亚森林与草地'],
    enRegions: ['Japan', 'forests and grasslands of East Asia'],
    size: { kind: 'body-length', minMeters: 0.015, maxMeters: 0.025 },
    diet: 'omnivore',
    zhParent:
      '虹彩粪金龟（センチコガネ）外表像一颗会移动的彩虹珠子，工作却是处理动物粪便：它把粪球滚走、埋进土里当食物或育儿房。这份“脏活”对生态极其重要——粪便被迅速分解，养分回到土壤，寄生虫和苍蝇也被抑制。古埃及人崇拜的圣甲虫就是粪金龟的亲戚，把粪球比作太阳、把滚粪球的甲虫比作推动太阳的神。',
    enParent:
      'The shining dung scarab looks like a moving rainbow bead, yet its work is handling animal droppings: it rolls dung into balls and buries them as food or nurseries. That dirty job is ecologically vital — dung is broken down quickly, nutrients return to the soil, and parasites and flies are suppressed. The sacred scarab of ancient Egypt was a relative: the dung ball stood for the sun, and the beetle for the god who pushes the sun across the sky.',
    sources: [
      {
        title: 'Phelotrupes laevistriatus — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Phelotrupes_laevistriatus',
      },
      {
        title: 'センチコガネ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/sentikogane.htm',
      },
    ],
    zhUncertainties: [
      '体长为毫米级，模型会被大幅放大展示。',
      '食性以腐殖质与粪便为主，按杂食处理。',
    ],
    enUncertainties: [
      'The size is in millimetres and the model is shown greatly enlarged.',
      'The diet of dung and humus is recorded here as omnivory.',
    ],
    accent: { strong: '#4a6b4f', soft: '#ccdcce' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'stag-beetle-2',
    zhName: '锹形虫（模型二）',
    enName: 'Stag Beetle (Model Two)',
    zhLabel: '锹甲（雄性大颚）',
    enLabel: 'Stag beetle (male mandibles)',
    zhVisible: '看它发达的上颚——锹甲的名字来自武士头盔上的“锹形”装饰。',
    enVisible:
      'Look at the oversized jaws — stag beetles are named in Japanese after the “kuwagata” horns on samurai helmets.',
    zhSentences: [
      '这是锹形虫，雄虫用大颚决斗，争夺吸食树汁的地盘。',
      '被它的大颚夹住并不会太痛——大颚主要是用来“举”对手的。',
    ],
    enSentences: [
      'This is the stag beetle: males duel with their great jaws over the best sap flows.',
      'A pinch from those jaws barely hurts — they are built for lifting rivals, not biting.',
    ],
    zhPron: 'qiāo xíng chóng',
    enPron: 'stag BEE-tul',
    zhPeriod: '现代（锹甲科延续数千万年）',
    enPeriod: 'Present day (stag-beetle family tens of millions of years old)',
    zhRegions: ['东亚与东南亚森林'],
    enRegions: ['forests of East and South-East Asia'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.08 },
    diet: 'herbivore',
    zhParent:
      '锹甲科有一千三百多种，雄虫的大颚用于同类决斗：把对手夹住、举起、摔下树干，赢者占据流汁液的树洞。大颚看似吓人，咬合力却不如雌虫的小颚。幼虫在朽木或腐殖土里生活一到数年，成虫寿命只有一个夏天。锹甲的体型与幼年期吃到的腐木量密切相关——同一窝幼虫养出的成虫，大颚长度能差好几倍。',
    enParent:
      'The stag-beetle family holds more than 1,300 species. Males duel with their mandibles — grip, lift, and throw the rival off the trunk — for access to oozing sap. The jaws look frightening but bite far more weakly than the female’s small ones. Larvae spend one to several years in rotten wood or leaf mould, while adults live for a single summer. Adult size depends on how much rotting wood the grub could eat: brothers from one clutch can differ several-fold in jaw length.',
    sources: [
      {
        title: 'Stag beetle — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Stag_beetle',
      },
      {
        title: 'クワガタムシ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/',
      },
    ],
    zhUncertainties: [
      '本批次中有两个锹甲模型，此为模型二；具体物种未在模型数据中标注。',
      '体长区间含大颚；雌虫明显更小。',
    ],
    enUncertainties: [
      'This batch contains two stag-beetle models and this is the second; the exact species is not labelled in the model data.',
      'The size includes the mandibles; females are much smaller.',
    ],
    accent: { strong: '#4a3a2e', soft: '#d8ccba' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'swallowtail-butterfly',
    zhName: '金凤蝶',
    enName: 'Swallowtail Butterfly',
    zhLabel: '凤蝶（燕尾形后翅）',
    enLabel: 'Swallowtail butterfly (tailed hindwings)',
    zhVisible: '看它后翅上尖尖的“尾巴”——凤蝶的名字就来自这对燕尾。',
    enVisible:
      'Look at the pointed “tails” on the hindwings — they give the swallowtail its name.',
    zhSentences: [
      '这是金凤蝶，拖着燕尾的大蝴蝶。',
      '它的毛毛虫遇到危险时会伸出橙色的“臭角”吓退敌人。',
    ],
    enSentences: [
      'This is the swallowtail, the big butterfly with a forked tail.',
      'Its caterpillar puffs out a bright orange stink-horn when threatened.',
    ],
    zhPron: 'jīn fèng dié',
    enPron: 'SWOL-oh-tayl',
    zhPeriod: '现代（凤蝶科延续数千万年）',
    enPeriod: 'Present day (swallowtail family tens of millions of years old)',
    zhRegions: ['欧亚大陆与北美洲'],
    enRegions: ['Eurasia and North America'],
    size: { kind: 'wingspan', minMeters: 0.08, maxMeters: 0.1 },
    diet: 'herbivore',
    zhParent:
      '金凤蝶（Papilio machaon）是分布最广的凤蝶之一，幼虫吃胡萝卜、芹菜等伞形科植物，头后有可翻出的橙色臭角（臭腺），能释放驱敌的气味。化蛹时它用一根丝线把蛹斜挂在枝条上，像一个悬空的吊床。后翅的“尾巴”能转移鸟类攻击，让蝴蝶只损失一点翅尖就逃走。成虫访花吸蜜，是重要的传粉者。',
    enParent:
      'The Old World swallowtail (Papilio machaon) is among the most widespread swallowtails; its caterpillar feeds on carrot-family plants and can evert a bright orange stink-horn (osmeterium) that releases a deterrent smell. The chrysalis hangs slung from a stem by a silk girdle, like a tiny hammock. The hindwing tails deflect bird strikes, so the butterfly escapes at the cost of a wingtip. Adults drink nectar and are important pollinators.',
    sources: [
      {
        title: 'Old World swallowtail — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Papilio_machaon',
      },
      {
        title: 'キアゲハ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/kiageha.htm',
      },
    ],
    zhUncertainties: [
      '翅展区间按常见个体；不同亚种差异较大。',
      '模型按“凤蝶”通称处理，以金凤蝶为参照种。',
    ],
    enUncertainties: [
      'The wingspan covers typical individuals; subspecies differ.',
      'The model is a generic swallowtail, presented here via the Old World species.',
    ],
    accent: { strong: '#c9a32b', soft: '#f0e4b8' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'walkers-cicada',
    zhName: '节节蝉',
    enName: 'Walker’s Cicada',
    zhLabel: '秋蝉（“ツクツク”鸣声）',
    enLabel: 'Cicada (the “tsuku-tsuku” song)',
    zhVisible: '看它细长的身体和透明的翅膀——日本夏末的“ツクツクボウシ”就是它。',
    enVisible:
      'Look at the slim body and clear wings — this is the “tsuku-tsuku-boushi” of late Japanese summer.',
    zhSentences: [
      '这是节节蝉，夏末唱“ツクツクボウシ”的蝉。',
      '它的歌声先升调再降调，像在数着夏天剩下的日子。',
    ],
    enSentences: [
      'This is Walker’s cicada, singing “tsuku-tsuku-boushi” at summer’s end.',
      'Its song rises, plateaus and falls — as if counting down the last days of summer.',
    ],
    zhPron: 'jié jié chán',
    enPron: 'WAW-kerz si-KAY-da',
    zhPeriod: '现代（蝉科延续数千万年）',
    enPeriod: 'Present day (cicada family tens of millions of years old)',
    zhRegions: ['日本', '东亚部分地区'],
    enRegions: ['Japan', 'parts of East Asia'],
    size: { kind: 'body-length', minMeters: 0.03, maxMeters: 0.04 },
    diet: 'herbivore',
    zhParent:
      '节节蝉（ツクツクボウシ）的日文名是把鸣声“ツクツク”和“法师（ボウシ）”拼起来的拟声名，中文常译作“节节蝉”或按学名称作“沃氏蝉”。它的鸣声节奏感极强：先是加速的“唧唧”，进入高亢的“ツクツク”段，最后缓缓收尾，被日本人视为夏去秋来的声音风景。若虫在地下生活数年，八月下旬到九月是它的舞台。',
    enParent:
      'The Japanese name tsuku-tsuku-boushi mimics the song and adds “boushi” (a monk). Its rhythm is unmistakable: quickening chirps, a sustained ringing “tsuku-tsuku” middle, then a slow fade — a soundscape of late summer turning to autumn. Nymphs spend years underground, and the adult’s season runs from late August into September.',
    sources: [
      {
        title: 'Meimuna opalifera — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Meimuna_opalifera',
      },
      {
        title: 'ツクツクボウシ — 日本昆虫数据库',
        url: 'https://www.mushinavi.com/navi-insect/data-insect/tsukutsukubousi.htm',
      },
    ],
    zhUncertainties: [
      '体长区间不含翅膀。',
      '中文名“节节蝉”为拟声意译，并非正式中文学名。',
    ],
    enUncertainties: [
      'The size excludes the wings.',
      'The Chinese common name is an onomatopoeic rendering rather than a formal name.',
    ],
    accent: { strong: '#7a6b4a', soft: '#e2d8bc' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'grogu',
    zhName: '古古（《曼达洛人》角色）',
    enName: 'Grogu (The Mandalorian Character)',
    zhLabel: '虚构角色（星球大战）',
    enLabel: 'Fictional character (Star Wars)',
    zhVisible: '看它的大耳朵和大眼睛——这个五十岁的“孩子”来自星球大战的宇宙。',
    enVisible:
      'Look at the big ears and eyes — this fifty-year-old “child” comes from the Star Wars universe.',
    zhSentences: [
      '这是古古，星战剧集《曼达洛人》里最受欢迎的角色。',
      '观众也叫他“小尤达”，因为他的种族和尤达大师一样神秘。',
    ],
    enSentences: [
      'This is Grogu, the breakout star of The Mandalorian.',
      'Fans first called him “Baby Yoda” because his species is as mysterious as Yoda’s.',
    ],
    zhPron: 'gǔ gǔ',
    enPron: 'GROH-goo',
    zhPeriod: '虚构（剧集 2019 年起播出）',
    enPeriod: 'Fictional (the series began streaming in 2019)',
    zhRegions: ['虚构宇宙（星球大战）'],
    enRegions: ['fictional universe (Star Wars)'],
    size: { kind: 'body-length', minMeters: 0.35, maxMeters: 0.45 },
    diet: 'omnivore',
    zhParent:
      '古古是《曼达洛人》的主角之一：五十岁的婴儿模样，种族名称在设定中至今保密，能使用原力举起巨石、治愈伤口。剧中他爱吃青蛙状的生物和蓝色的蛋——所以这里把食性记为杂食。这个模型的版权归卢卡斯影业/迪士尼所有，与史前动物不同，正式发布需要权利方授权与品牌审核，在此之前它保持草稿状态。',
    enParent:
      'Grogu is a lead character of The Mandalorian: fifty years old and still a toddler, his species name still officially secret, able to lift boulders and heal wounds with the Force. On screen he snacks on frog-like creatures and blue eggs — hence the omnivore label. The character belongs to Lucasfilm/Disney, and unlike the prehistoric animals this entry can only be published with the rights holder’s licence and a brand review, so it stays a draft.',
    sources: [
      {
        title: 'Grogu — 星球大战官网',
        url: 'https://www.starwars.com/databank/grogu',
      },
      {
        title: 'Grogu — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Grogu',
      },
    ],
    zhUncertainties: [
      '这是虚构角色而非动物条目，版权归卢卡斯影业/迪士尼所有；发布前需要权利方授权与品牌审核。',
      '体长区间按剧中形象估计，官方未公布精确身高。',
    ],
    enUncertainties: [
      'This is a fictional character, not an animal; the rights belong to Lucasfilm/Disney and publication requires their licence plus brand review.',
      'The size is estimated from the show; no official height has been published.',
    ],
    accent: { strong: '#7a8a4a', soft: '#dfe6c4' },
    habitat: 'land',
    atmosphere: 'forest',
  },
  {
    slug: 'dragon',
    zhName: '龙（传说生物）',
    enName: 'Dragon (Mythical Creature)',
    zhLabel: '神话生物',
    enLabel: 'Mythical creature',
    zhVisible: '看它的翅膀和尖角——这是欧洲传说里喷火守宝的龙。',
    enVisible:
      'Look at the wings and horns — the fire-breathing, treasure-guarding dragon of European legend.',
    zhSentences: [
      '这是龙，欧洲传说里守护宝藏的会飞的巨兽。',
      '中国的龙象征吉祥和水，与西方的喷火龙完全不同。',
    ],
    enSentences: [
      'This is the dragon of European legend, a flying beast guarding treasure.',
      'Chinese dragons are completely different — symbols of luck and water, not fire.',
    ],
    zhPron: 'lóng',
    enPron: 'DRAG-on',
    zhPeriod: '传说（古代神话，东西方各有数千年历史）',
    enPeriod: 'Legend (thousands of years of mythology, East and West)',
    zhRegions: ['欧洲与亚洲的传说'],
    enRegions: ['legends of Europe and Asia'],
    size: { kind: 'body-length', minMeters: 4, maxMeters: 8 },
    diet: 'unknown',
    zhParent:
      '龙是世界各地独立产生的神话生物：欧洲的龙多是喷火、守宝、与骑士决斗的巨兽，而中国的龙能兴云布雨，是皇权和吉祥的象征，两者的形象几乎没有共同点。古生物学家猜想，龙的部分灵感可能来自古人发现的恐龙或大象化石——巨大的头骨很容易被想象成怪兽。这个模型采用欧洲式带翼喷火龙的形象。作为传说生物，它的体型和习性都没有科学数据，这里的数字纯属想象。',
    enParent:
      'Dragons arose independently in mythologies worldwide: the European dragon is a fire-breathing treasure-guarder for knights to duel, while the Chinese dragon brings rain and stands for good fortune and the emperor — the two share almost nothing. Palaeontologists suspect dragon myths were partly inspired by fossil finds: a huge dinosaur or elephant skull is easily read as a monster. This model follows the European winged, fire-breathing form. As a creature of legend, none of its measurements or habits have scientific data — the numbers here are pure imagination.',
    sources: [
      {
        title: 'Dragon — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/topic/dragon-mythological-creature',
      },
      {
        title: 'Dragon — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dragon',
      },
    ],
    zhUncertainties: [
      '这是传说生物而非真实动物；体型数据为文艺作品中的常见想象。',
      '食性标注为“未知”，因为传说中龙的食性描述彼此矛盾。',
    ],
    enUncertainties: [
      'This is a mythical creature, not a real animal; the size figures are common fictional convention.',
      'Diet is marked “unknown” because legends contradict one another about what dragons eat.',
    ],
    accent: { strong: '#7a3a2e', soft: '#eccfbe' },
    habitat: 'air',
    atmosphere: 'air',
  },
  {
    slug: 'unicorn',
    zhName: '独角兽（传说生物）',
    enName: 'Unicorn (Mythical Creature)',
    zhLabel: '神话生物',
    enLabel: 'Mythical creature',
    zhVisible: '看它额头上的螺旋独角——传说只有最纯洁的心灵才能接近它。',
    enVisible:
      'Look at the spiral horn on its forehead — legend says only the pure of heart can approach it.',
    zhSentences: [
      '这是独角兽，欧洲传说里额生独角的白色骏马。',
      '现实中的“独角兽角”其实是独角鲸的长牙。',
    ],
    enSentences: [
      'This is the unicorn, the white horse of European legend with a single horn.',
      'Real “unicorn horns” sold in history were actually narwhal tusks.',
    ],
    zhPron: 'dú jiǎo shòu',
    enPron: 'YOO-ni-korn',
    zhPeriod: '传说（古希腊文献已有记载）',
    enPeriod: 'Legend (recorded since ancient Greek writers)',
    zhRegions: ['欧洲传说（形象源于对印度等地的传闻）'],
    enRegions: ['European legend (from traveller’s tales of India and beyond)'],
    size: { kind: 'shoulder-height', minMeters: 1.4, maxMeters: 1.8 },
    diet: 'herbivore',
    zhParent:
      '独角兽的记载可追溯到古希腊：历史学家克特西亚斯描述过印度的“独角野驴”。中世纪欧洲人相信独角兽的角（alicorn）能解百毒，王公贵族高价收购“独角兽角”——这些角其实来自北极的独角鲸，16 世纪才被揭穿。传说独角兽野性难驯，只会向纯洁的人靠近。它是苏格兰的国家象征，与英格兰的狮子相对。作为传说生物，体型按马估计。',
    enParent:
      'The unicorn can be traced to ancient Greece: the historian Ctesias described a one-horned wild ass of India. In medieval Europe the horn (“alicorn”) was believed to neutralise poison, and kings paid fortunes for unicorn horns — which were in truth narwhal tusks, a fact exposed only in the 16th century. Legend held the unicorn untameable except by the pure of heart. It is the national animal of Scotland, counterpart to England’s lion. Being mythical, its size simply follows a horse.',
    sources: [
      {
        title: 'Unicorn — 大英百科全书（Britannica）',
        url: 'https://www.britannica.com/topic/unicorn',
      },
      {
        title: 'Unicorn — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Unicorn',
      },
    ],
    zhUncertainties: [
      '这是传说生物而非真实动物；体型按马估计。',
      '食性按马类推，因为传说中未明确描述。',
    ],
    enUncertainties: [
      'This is a mythical creature, not a real animal; the size simply follows a horse.',
      'Diet follows the horse, as legends never describe it.',
    ],
    accent: { strong: '#8a7ab8', soft: '#e2dcf2' },
    habitat: 'land',
    atmosphere: 'forest',
  },
]
