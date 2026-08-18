import type { AnimalSizeFact, Diet } from '../content/types'
import type { Locale } from './locale'

const zhCN = {
  museumName: '动物园科普网站',
  creatorBrand: 'Leon做了个',
  todayMeet: '今天认识',
  localReview: '本地评审',
  documentTitle: '动物园科普网站 | 亲子 3D 史前动物展',
  seo: {
    description: (count: number) =>
      `和孩子一起走进 3D 动物园科普网站，观察 ${count} 位来自陆地、天空与水中的史前朋友。`,
    socialImageAlt: '动物园科普网站亲子 3D 展馆',
  },
  stageLabel: (animal: string) => `${animal}模型展台`,
  navigationLabel: '动物选择',
  reviewNavigationLabel: '本地评审动物选择',
  previousAnimal: '上一只动物',
  nextAnimal: '下一只动物',
  viewAnimal: (animal: string, review = '', failed = false) =>
    `查看${animal}${review ? `，本地评审，${review}` : ''}${
      failed ? '，加载失败，点击重试' : ''
    }`,
  narration: {
    listen: '听它的介绍',
    pause: '暂停介绍',
    unavailable: '介绍准备中',
    listenShort: '听介绍',
    pauseShort: '暂停',
    unavailableShort: '暂无语音',
    playing: (animal: string) => `正在播放${animal}的介绍。`,
    paused: (animal: string) => `${animal}的介绍已暂停。`,
  },
  parentInfo: '给家长的资料',
  parentInfoShort: '家长资料',
  openCollection: '打开全馆图鉴',
  returnToMuseum: '返回博物馆并打开全馆图鉴',
  returnToMuseumShort: '返回全馆',
  collectionShort: '全馆',
  resetView: '恢复初始视角',
  resetDone: '已经恢复初始视角。',
  storyCollapse: '收起介绍',
  storyExpand: '展开介绍',
  focusView: '专注看模型',
  focusEntered: '已进入模型专注模式，轻点画面或按 Escape 返回完整界面。',
  focusReturnHint: '轻点画面即可返回',
  exitFocus: '退出模型专注模式',
  focusExited: '已经回到完整的博物馆界面。',
  care: {
    feed: '喂食物',
    bathe: '洗澡',
    play: '打球',
    walk: '走一走',
    shake: '摇摇头',
    walked: (animal: string) => `${animal}迈着小碎步走过来啦！`,
    shook: (animal: string) => `${animal}摇了摇头。`,
    fedMeat: (animal: string) => `${animal}大口大口吃起肉来，吃得好香！`,
    fedLeaves: (animal: string) => `${animal}唰唰地吃起了树叶！`,
    refused: (animal: string) => `${animal}摇了摇头，好像不爱吃这个。`,
    feedPrompt: '它吃什么呢？点一个碗喂喂看！',
    closePicker: '关闭喂食选择',
    bowlLeaf: '树叶碗',
    bowlMeat: '肉肉碗',
    bathed: (animal: string) => `${animal}洗得干干净净，泡泡亮晶晶！`,
    played: (animal: string) => `和${animal}一起玩球，它开心地把球踢了回来！`,
  },
  notFound: {
    code: '404',
    title: '页面没有找到',
    body: '这条参观路线暂时走不通，也许展品还在布置中。',
    return: '返回博物馆',
  },
  loading: {
    preparingExhibit: '正在准备新的动物展台。',
    retryingExhibit: '正在重新准备展台。',
    initialExhibit: (animal: string) => `正在准备${animal}展台。`,
    opening: '正在打开…',
    inviting: '正在请它出来…',
    downloading: (percent: number) => `下载中 · ${percent}%`,
    retry: '点我再试',
    failed: '它暂时没准备好，再点一次试试。',
    arrived: (animal: string) => `${animal}已经来到展台。`,
    failedRetry: (animal: string) =>
      `${animal}暂时没准备好，可以点击它的卡片重试。`,
    backgroundPending: (animal: string) =>
      `${animal}的场景还在准备，先保留上一幅画面。`,
    unknownAnimal: '这只动物',
  },
  dataNotice: {
    dismissLabel: '关闭模型流量提示',
    dismiss: '知道了',
    wifi: '这里的 3D 动物会使用一些流量，连接 Wi‑Fi 时观看会更顺畅。',
    largeModel: (animal: string, size: string) =>
      `${animal}的 3D 模型约 ${size}，第一次下载的数据量较大，加载可能会久一点。`,
  },
  viewerFallbackAnnouncement: (animal: string) =>
    `三维展台暂时不可用，已经换成${animal}的静态模型图。`,
  language: {
    buttonLabel: '切换语言，当前简体中文',
    menuLabel: '选择界面语言',
    system: '跟随系统',
    systemResolved: (language: string) => `跟随系统（当前：${language}）`,
    chinese: '简体中文',
    english: 'English',
    chineseShort: '中',
    englishShort: 'EN',
  },
  viewer: {
    modelLabel: (animal: string) => `${animal}三维模型，可拖动旋转并缩放`,
    webglUnavailable: '这个浏览器现在不能显示 3D 模型。',
    contextLost: 'WebGL 绘图环境暂时不可用。',
    stillAlt: (animal: string) => `${animal}的透明背景静态模型图`,
    preparing: '正在打开 3D 模型…',
    downloading: '正在下载 3D 模型…',
    downloadingPercent: (percent: number) => `正在下载 3D 模型 · ${percent}%`,
    checkingCache: '正在查找 3D 模型…',
    invitingFirst: '正在请第一位朋友出来……',
    progressLabel: '3D 模型加载进度',
    gestureHint: '拖动旋转，滚动或双指缩放',
    fallbackTitle: '今天先看看它的静态模型吧',
    retry: '重新加载模型',
  },
  zoneSelect: {
    title: '今天想去看谁？',
    subtitle: '选一个展区，里面的动物朋友都在等你。',
    enter: (zone: string) => `进入${zone}展区`,
    enterShort: '进入',
    friends: (count: number) => `${count} 位朋友`,
    backToZones: '返回展区选择',
    backToZonesShort: '展区',
  },
  zones: {
    dinosaur: {
      name: '恐龙',
      tagline: '大地的王者，还有会飞的翼龙伙伴',
    },
    plains: {
      name: '草原',
      tagline: '宽阔的草地上住着成群的大家伙',
    },
    forest: {
      name: '森林',
      tagline: '茂密的树林里藏着大家伙的脚印',
    },
    ice: {
      name: '冰川',
      tagline: '冰冰凉凉的冰雪世界',
    },
    ocean: {
      name: '海洋',
      tagline: '潜进大海，和巨兽一起游泳',
    },
    insect: {
      name: '昆虫',
      tagline: '小小身体藏着大大的秘密',
    },
  },
  collection: {
    friends: (count: number) => `${count} 位史前朋友`,
    title: '全馆图鉴',
    intro: '选一位朋友，马上前往它的 3D 展台。',
    back: '回到博物馆',
    close: '关闭全馆图鉴',
    cardLabel: (animal: string, current: boolean) =>
      `${current ? '当前展台，' : ''}前往${animal}展台`,
    current: '当前',
    opening: '正在打开',
    preparing: '准备中',
    downloading: (percent: number) => `下载中 ${percent}%`,
  },
  modern: {
    title: '现代动物朋友',
    intro: '它们还没有 3D 展台，先看看图片认识一下吧。',
    categories: {
      grassland: '草原',
      ocean: '海洋',
      sky: '天空',
      forest: '森林',
    },
    soon: '图片展示',
    locked: '暂时没有 3D 展台',
  },
  parent: {
    eyebrow: '一起了解更多',
    title: '给家长的资料',
    close: '关闭家长资料',
    period: '生活时期',
    regions: '发现地区',
    diet: '食性',
    classification: '分类提示',
    narration: '旁白文字',
    sources: '参考来源',
    credits: '3D 模型与素材来源',
    licensing: '开源与许可',
    licensingBody:
      '本项目代码采用 AGPL-3.0；原创科普文案与项目视觉采用 CC BY-NC-SA 4.0 非商业共享；品牌只独立防止冒充官方，第三方素材沿用原许可。',
    fullLicensing: '查看完整许可说明',
    moreHint: '资料还可以继续向上滑动。',
    more: '向上滑动查看更多',
    joinRegions: (regions: readonly string[]) => regions.join('、'),
  },
  ar: {
    open: 'AR',
    title: 'AR 增强现实',
    requestingCamera: '正在请求摄像头…',
    cameraDenied: '没有摄像头权限，请在浏览器设置里允许后重试。',
    unsupported:
      '这台设备暂时不能使用 AR，需要支持摄像头与 WebGL 的安全（HTTPS）页面。',
    scanning: '正在启动 AR…',
    found: (animal: string) => `${animal} 出现了！`,
    error: 'AR 出了点问题，关闭后再试一次。',
    close: '退出 AR',
    xrSearching: '正在把动物带到你面前…',
    xrPlaced: '出现啦！轻点屏幕可以换位置，点右上角退出。',
    cameraMode: '双指捏合可以放大缩小，轻点画面让它回到面前。',
    switchAnimal: '换一只动物',
  },
} as const

type WidenMessages<Value> = Value extends string
  ? string
  : Value extends (...arguments_: infer Arguments) => infer Result
    ? (...arguments_: Arguments) => Result
    : Value extends readonly (infer Item)[]
      ? readonly WidenMessages<Item>[]
      : Value extends object
        ? { readonly [Key in keyof Value]: WidenMessages<Value[Key]> }
        : Value

export type MuseumMessages = WidenMessages<typeof zhCN>

const en = {
  museumName: 'Zoo Animal Science Website',
  creatorBrand: 'Leon Made This',
  todayMeet: 'Meet today’s friend',
  localReview: 'Local review',
  documentTitle: 'Zoo Animal Science Website | A 3D Family Adventure',
  seo: {
    description: (count) =>
      `Explore ${count} prehistoric animals from land, sky and sea in a gentle 3D museum made for young children and their grown-ups.`,
    socialImageAlt:
      'Zoo Animal Science Website, a 3D family adventure by Leon Made This',
  },
  stageLabel: (animal) => `${animal} 3D exhibit`,
  navigationLabel: 'Choose an animal',
  reviewNavigationLabel: 'Choose a local review animal',
  previousAnimal: 'Previous animal',
  nextAnimal: 'Next animal',
  viewAnimal: (animal, review = '', failed = false) =>
    `View ${animal}${review ? `, local review, ${review}` : ''}${
      failed ? ', loading failed, activate to try again' : ''
    }`,
  narration: {
    listen: 'Listen to its introduction',
    pause: 'Pause introduction',
    unavailable: 'Narration is being prepared',
    listenShort: 'Listen',
    pauseShort: 'Pause',
    unavailableShort: 'No audio yet',
    playing: (animal) => `Playing the introduction to ${animal}.`,
    paused: (animal) => `The introduction to ${animal} is paused.`,
  },
  parentInfo: 'Guide for grown-ups',
  parentInfoShort: 'Guide',
  openCollection: 'Open the full museum guide',
  returnToMuseum: 'Return to the museum and open the full guide',
  returnToMuseumShort: 'Back to museum',
  collectionShort: 'All',
  resetView: 'Reset the view',
  resetDone: 'The view has been reset.',
  storyCollapse: 'Hide the introduction',
  storyExpand: 'Show the introduction',
  focusView: 'Focus on the model',
  focusEntered:
    'Model focus mode is open. Tap the scene or press Escape to return.',
  focusReturnHint: 'Tap the scene to return',
  exitFocus: 'Exit model focus mode',
  focusExited: 'The complete museum view is back.',
  care: {
    feed: 'Feed',
    bathe: 'Bath time',
    play: 'Play ball',
    walk: 'Take a walk',
    shake: 'Shake head',
    walked: (animal) => `${animal} trots over on little legs!`,
    shook: (animal) => `${animal} shakes its head.`,
    fedMeat: (animal) => `${animal} tucks into the meat — yum!`,
    fedLeaves: (animal) => `${animal} happily munches the leaves!`,
    refused: (animal) => `${animal} shakes its head — that’s not its food.`,
    feedPrompt: 'What does it eat? Pick a bowl to try!',
    closePicker: 'Close the food picker',
    bowlLeaf: 'Leaf bowl',
    bowlMeat: 'Meat bowl',
    bathed: (animal) => `${animal} is sparkling clean — shiny bubbles!`,
    played: (animal) => `You play ball with ${animal} — kicked right back!`,
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    body: 'The trail ends here — this exhibit may still be under construction.',
    return: 'Return to the museum',
  },
  loading: {
    preparingExhibit: 'Preparing a new animal exhibit.',
    retryingExhibit: 'Preparing the exhibit again.',
    initialExhibit: (animal) => `Preparing the ${animal} exhibit.`,
    opening: 'Opening…',
    inviting: 'Coming to the exhibit…',
    downloading: (percent) => `Downloading · ${percent}%`,
    retry: 'Try again',
    failed: 'This animal is not ready just now. Try again.',
    arrived: (animal) => `${animal} is now in the exhibit.`,
    failedRetry: (animal) =>
      `${animal} is not ready just now. Activate its card to try again.`,
    backgroundPending: (animal) =>
      `${animal}’s scene is still being prepared, so the previous scene remains for now.`,
    unknownAnimal: 'This animal',
  },
  dataNotice: {
    dismissLabel: 'Close the model data notice',
    dismiss: 'Got it',
    wifi: 'The 3D animals use some data. A Wi-Fi connection may feel smoother.',
    largeModel: (animal, size) =>
      `${animal}’s 3D model is about ${size}. Its first download may take a little longer.`,
  },
  viewerFallbackAnnouncement: (animal) =>
    `The 3D exhibit is unavailable, so a still model of ${animal} is shown instead.`,
  language: {
    buttonLabel: 'Change language, current English',
    menuLabel: 'Choose interface language',
    system: 'Follow system',
    systemResolved: (language) => `Follow system (currently ${language})`,
    chinese: '简体中文',
    english: 'English',
    chineseShort: '中',
    englishShort: 'EN',
  },
  viewer: {
    modelLabel: (animal) =>
      `${animal} 3D model. Drag to rotate; scroll or pinch to zoom.`,
    webglUnavailable: 'This browser cannot display the 3D model right now.',
    contextLost: 'The 3D drawing surface is temporarily unavailable.',
    stillAlt: (animal) => `Still model of ${animal} on a transparent background`,
    preparing: 'Opening the 3D model…',
    downloading: 'Downloading the 3D model…',
    downloadingPercent: (percent) => `Downloading the 3D model · ${percent}%`,
    checkingCache: 'Looking for the 3D model…',
    invitingFirst: 'Inviting our first prehistoric friend…',
    progressLabel: '3D model loading progress',
    gestureHint: 'Drag to turn · scroll or pinch to zoom',
    fallbackTitle: 'Let’s look at its still model for now',
    retry: 'Reload the model',
  },
  zoneSelect: {
    title: 'Who shall we visit today?',
    subtitle: 'Pick a zone — the animal friends are waiting for you.',
    enter: (zone) => `Enter the ${zone} zone`,
    enterShort: 'Enter',
    friends: (count) => `${count} friends`,
    backToZones: 'Back to zone selection',
    backToZonesShort: 'Zones',
  },
  zones: {
    dinosaur: {
      name: 'Dinosaurs',
      tagline: 'Giants of the land, plus flying pterosaur pals',
    },
    plains: {
      name: 'Grassland',
      tagline: 'Big herds roaming the wide open plains',
    },
    forest: {
      name: 'Forest',
      tagline: 'Deep woods hiding giant footprints',
    },
    ice: {
      name: 'Ice Age',
      tagline: 'A cool, frosty world of snow',
    },
    ocean: {
      name: 'Ocean',
      tagline: 'Dive in and swim with sea giants',
    },
    insect: {
      name: 'Insects',
      tagline: 'Tiny bodies with big secrets',
    },
  },
  collection: {
    friends: (count) => `${count} prehistoric friends`,
    title: 'Museum guide',
    intro: 'Choose a friend and go straight to its 3D exhibit.',
    back: 'Back to the museum',
    close: 'Close the museum guide',
    cardLabel: (animal, current) =>
      `${current ? 'Current exhibit, ' : ''}go to the ${animal} exhibit`,
    current: 'Current',
    opening: 'Opening',
    preparing: 'Preparing',
    downloading: (percent) => `Downloading ${percent}%`,
  },
  modern: {
    title: 'Modern animal friends',
    intro: 'No 3D exhibits yet — enjoy their photos for now.',
    categories: {
      grassland: 'Grassland',
      ocean: 'Ocean',
      sky: 'Sky',
      forest: 'Forest',
    },
    soon: 'Photo only',
    locked: 'No 3D exhibit yet',
  },
  parent: {
    eyebrow: 'Explore together',
    title: 'Guide for grown-ups',
    close: 'Close the guide for grown-ups',
    period: 'When it lived',
    regions: 'Where fossils were found',
    diet: 'Diet',
    classification: 'What kind of animal?',
    narration: 'Narration transcript',
    sources: 'Sources',
    credits: '3D model and asset credits',
    licensing: 'Open source and licensing',
    licensingBody:
      'The code is licensed under AGPL-3.0. Original science writing and project artwork use CC BY-NC-SA 4.0 for non-commercial sharing. The brand policy prevents impersonation, and third-party assets keep their original licences.',
    fullLicensing: 'Read the full licensing notes',
    moreHint: 'More information is available below.',
    more: 'Swipe up for more',
    joinRegions: (regions) => regions.join(', '),
  },
  ar: {
    open: 'AR',
    title: 'Augmented reality',
    requestingCamera: 'Requesting the camera…',
    cameraDenied:
      'Camera permission was denied. Allow it in your browser settings and try again.',
    unsupported:
      'This device can’t use AR right now. It needs a secure (HTTPS) page with a camera and WebGL.',
    scanning: 'Starting AR…',
    found: (animal) => `${animal} appeared!`,
    error: 'Something went wrong with AR. Close and try again.',
    close: 'Exit AR',
    xrSearching: 'Bringing the animal to you…',
    xrPlaced: 'It’s here! Tap the screen to move it; ✕ to exit.',
    cameraMode:
      'Pinch with two fingers to resize it; tap the view to bring it back in front.',
    switchAnimal: 'Choose another animal',
  },
} satisfies MuseumMessages

export function messagesFor(locale: Locale): MuseumMessages {
  return locale === 'zh-CN' ? zhCN : en
}

export function dietLabel(diet: Diet, locale: Locale): string {
  const labels =
    locale === 'zh-CN'
      ? {
          herbivore: '植食',
          carnivore: '肉食',
          omnivore: '杂食',
          unknown: '尚不确定',
        }
      : {
          herbivore: 'Plant-eater',
          carnivore: 'Meat-eater',
          omnivore: 'Plants and meat',
          unknown: 'Not yet certain',
        }
  return labels[diet]
}

function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'zh-CN' ? 'zh-CN' : 'en-GB', {
    maximumFractionDigits: 2,
  }).format(value)
}

function formatFeet(metres: number): string {
  const feet = metres * 3.28084
  return new Intl.NumberFormat('en-GB', {
    maximumFractionDigits: feet < 3 ? 1 : 0,
  }).format(feet)
}

export function formatSizeFact(
  size: AnimalSizeFact,
  locale: Locale,
): { readonly label: string; readonly value: string } {
  const same = size.minMeters === size.maxMeters
  const metres = same
    ? formatNumber(size.minMeters, locale)
    : `${formatNumber(size.minMeters, locale)}–${formatNumber(size.maxMeters, locale)}`
  const label =
    size.kind === 'wingspan'
      ? locale === 'zh-CN'
        ? '翼展'
        : 'Wingspan'
      : size.kind === 'shoulder-height'
        ? locale === 'zh-CN'
          ? '肩高'
          : 'Shoulder height'
        : size.kind === 'group-range'
          ? locale === 'zh-CN'
            ? '类群体型'
            : 'Group size range'
          : locale === 'zh-CN'
            ? '体长'
            : 'Body length'

  const metric = locale === 'zh-CN' ? `${metres} 米（约）` : `${metres} m`
  const imperial = same
    ? `about ${formatFeet(size.minMeters)} ft`
    : `about ${formatFeet(size.minMeters)}–${formatFeet(size.maxMeters)} ft`
  const range = locale === 'zh-CN' ? metric : `${metric} (${imperial})`
  return {
    label,
    value:
      size.kind === 'group-range' ? `${size.note}${locale === 'zh-CN' ? '；' : '; '}${range}` : range,
  }
}
