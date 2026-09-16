import type { AnimalSizeFact, Diet } from '@/src/content/types'
import type { Locale } from '@/src/i18n/locale'

const zhCN = {
  museumName: 'WonZoo',
  creatorBrand: 'Leon做了个',
  todayMeet: '今天认识',
  localReview: '本地评审',
  documentTitle: 'WonZoo | 亲子 3D 史前动物展',
  seo: {
    description: (count: number) =>
      `和孩子一起走进 3D WonZoo，观察 ${count} 位来自陆地、天空与水中的史前朋友。`,
    socialImageAlt: 'WonZoo亲子 3D 展馆',
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
  returnToMuseum: '返回并打开全馆图鉴',
  returnToMuseumShort: '返回',
  returnToCategory: '返回分类页面',
  returnToCategoryShort: '返回分类',
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
    return: '返回',
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
    traditionalChinese: '繁體中文',
    japanese: '日本語',
    english: 'English',
    chineseShort: '中',
    traditionalChineseShort: '繁',
    japaneseShort: '日',
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
    sky: {
      name: '天空',
      tagline: '飞上蓝天，和鸟儿、翼龙一起翱翔',
    },
  },
  collection: {
    friends: (count: number) => `${count} 位史前朋友`,
    zoneFriends: (count: number, zoneName: string) => `${count} 位${zoneName}朋友`,
    title: '全馆图鉴',
    intro: '选一位朋友，马上前往它的 3D 展台。',
    back: '返回',
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
  config: {
    title: '设置',
    intro: '调整界面语言，查看版本信息；更多功能正在路上。',
    close: '关闭并返回首页',
    languageTitle: '语言',
    languageHint: '选择界面使用的语言，切换后立即生效。',
    appearanceTitle: '外观',
    darkMode: '深色模式',
    appearanceHint: '深色主题正在准备中，先在这里留好位置。',
    accountTitle: '账号',
    accountAction: '登录账号',
    accountHint: '登录与同步功能正在准备中。',
    aboutTitle: '关于',
    versionLabel: '版本号',
    comingSoon: '敬请期待',
    privacyTitle: '隐私',
    privacyAction: '隐私政策',
    privacyHint: '查看我们如何收集、使用和保护信息。',
    supportTitle: '支持',
    supportAction: '技术支持',
    supportHint: '查看常见问题与设备要求，或联系我们。',
  },
  toolbar: {
    label: '工具',
    reset: '恢复原样',
    info: '动物信息',
    collection: '全馆图鉴',
    height: '动物身高',
    weight: '动物体重',
    weightUnavailable: '暂无体重数据',
  },
  size: {
    eyebrow: '一起比比看',
    heightDialogTitle: '动物身高',
    heightClose: '关闭身高',
    weightDialogTitle: '动物体重',
    weightClose: '关闭体重',
    weight: '体重',
    weightUnavailable: '暂无体重数据',
    heightTitle: '有多高？',
    balanceTitle: '有多重？',
    adult: '成年人',
    weightUnits: {
      apple: '个苹果',
      child: '个小朋友',
      adult: '个成年人',
      car: '辆小汽车',
      bus: '辆公交车',
    },
    heightCompare: (times: string, reference: string) =>
      `大约是${reference}的 ${times} 倍`,
    balanceEquals: (count: string, unit: string) =>
      `大约相当于 ${count} ${unit}`,
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
  zoo: {
    documentTitle: 'WonZoo 史前动物园 | 3D 亲子探索游戏',
    title: '史前动物园',
    subtitle: '走进 320 米宽的黏土山谷，认识 18 位真人大小的史前朋友',
    start: '开始探险',
    loadingTitle: '正在准备动物园',
    hints: {
      drag: '拖动旋转视角 · 滚轮缩放',
      walk: 'WASD / 方向键 行走 · Shift 快跑',
      tap: '点击地面前往 · 点击动物打招呼',
    },
    loading: {
      ground: '正在铺开山谷…',
      plants: '正在种下森林…',
      trails: '正在画探险小路…',
      exhibits: '正在布置展区…',
      friends: '正在请动物朋友入场',
      ready: '大门打开啦！',
    },
    hud: {
      book: '认识的朋友',
      tour: '自动导览',
      tourStop: '停止导览',
      overview: '俯瞰全景 (M)',
      overviewExit: '回到地面 (M)',
      labels: '显示 / 隐藏标签 (L)',
      sound: '声音',
      soundOn: '打开声音',
      soundOff: '关闭声音',
      help: '怎么玩',
      reset: '恢复视角 (R)',
      collection: '探险手册',
      speak: '听介绍',
      speaking: '正在介绍…',
      stopSpeak: '停下来',
      meet: '打个招呼',
      close: '关闭',
      travelling: '正在赶来…',
    },
    embed: {
      badge: '可走动的 3D 园区',
      fullscreen: '全屏',
      exitFullscreen: '退出全屏',
      close: '关闭园区',
      intro:
        '18 位史前朋友就住在这条 320 米宽的山谷里，每个模型都是真实大小：霸王龙 12 米，迷惑龙 22 米。',
      controls: 'W A S D 行走 · Shift 快跑 · 点地面前往 · 点动物打招呼',
      ownPage: '在单独页面打开',
      frameTitle: '史前动物园 3D 园区',
      open: '在这里打开园区',
    },
    card: {
      zone: '展区',
      period: '年代',
      regions: '发现地',
      diet: '食性',
      size: '体型',
      classification: '分类',
      feature: '看一看',
      hint: '走近它，就能认识它',
      met: '已经认识',
      unmet: '还没认识',
      travel: '带我去',
    },
    collection: {
      title: '探险手册',
      hint: '点一位朋友，就能直接走到它面前。',
      reset: '重新开始记录',
      empty: '还没有认识任何朋友，走出大门去找找看吧！',
    },
    celebrate: {
      title: '探险完成！',
      body: '你认识了全部 18 位史前朋友！',
      close: '继续玩',
    },
    help: {
      title: '怎么玩',
      lines: [
        '🚶 W A S D 或方向键行走，Shift 快跑',
        '👆 点击地面，小探险家会自己走过去',
        '🖱️ 按住拖动旋转视角，滚轮或双指缩放',
        '🦕 走近动物就会认识它；点一下，它会跟你打招呼并介绍自己',
        '🤖 点右下角的无人机，开始全园自动导览',
        '🗺️ 按 M 飞到空中，看清整座动物园',
        '🏷️ 按 L 显示或隐藏头顶的名字牌',
        '🔊 用声音按钮开关全部介绍与音效',
      ],
      close: '知道啦',
    },
    toasts: {
      discovered: (name: string, found: number, total: number) =>
        `认识了 ${name}！（${found}/${total}）`,
      blocked: '这边过不去，换个方向试试。',
      narrationFailed: '这段介绍没有成功播放。',
      noExhibitNearby: '附近还没有动物朋友，再走近一点吧。',
      narrationMissing: '这只动物还没有准备好介绍音频。',
      soundOn: '声音已打开。',
      soundOff: '声音已关闭。',
      labelsOn: '名字牌已显示。',
      labelsOff: '名字牌已隐藏，鼠标悬停时仍会显示。',
      overviewOn: '飞到空中了，按 M 回到地面。',
      overviewOff: '回到地面。',
      travel: (name: string) => `来到了 ${name} 面前。`,
      progressReset: '探险手册已经清空。',
    },
    errors: {
      webgl: '这台设备暂时不能运行 3D 动物园，需要支持 WebGL 的浏览器。',
      model: '有一只动物的模型没有成功加载。',
    },
    zones: {
      meadow: { name: '中央草甸', tagline: '山谷正中，小路从这里出发' },
      plains: { name: '草原', tagline: '干燥的草地上走着长脖子的大家伙' },
      forest: { name: '森林', tagline: '树影深处传来沉重的脚步声' },
      ice: { name: '冰川', tagline: '冷风里站着披着长毛的巨兽' },
      lagoon: { name: '潟湖', tagline: '潜进暖水，和海里的巨兽一起游' },
      ridge: { name: '断崖', tagline: '高高的崖顶是翼龙的停机坪' },
    },
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

// Traditional Chinese shares the zh-CN copy structure verbatim; animal names
// and narration still come from the zh-CN content packages (no per-animal
// Traditional translations exist yet).
const zhTW: MuseumMessages = {
  museumName: 'WonZoo',
  creatorBrand: 'Leon做了個',
  todayMeet: '今天認識',
  localReview: '本地評審',
  documentTitle: 'WonZoo | 親子 3D 史前動物展',
  seo: {
    description: (count: number) =>
      `和孩子一起走進 3D WonZoo，觀察 ${count} 位來自陸地、天空與水中的史前朋友。`,
    socialImageAlt: 'WonZoo親子 3D 展館',
  },
  stageLabel: (animal: string) => `${animal}模型展臺`,
  navigationLabel: '動物選擇',
  reviewNavigationLabel: '本地評審動物選擇',
  previousAnimal: '上一隻動物',
  nextAnimal: '下一隻動物',
  viewAnimal: (animal: string, review = '', failed = false) =>
    `查看${animal}${review ? `，本地評審，${review}` : ''}${
      failed ? '，載入失敗，點擊重試' : ''
    }`,
  narration: {
    listen: '聽它的介紹',
    pause: '暫停介紹',
    unavailable: '介紹準備中',
    listenShort: '聽介紹',
    pauseShort: '暫停',
    unavailableShort: '暫無語音',
    playing: (animal: string) => `正在播放${animal}的介紹。`,
    paused: (animal: string) => `${animal}的介紹已暫停。`,
  },
  parentInfo: '給家長的資料',
  parentInfoShort: '家長資料',
  openCollection: '打開全館圖鑑',
  returnToMuseum: '返回並打開全館圖鑑',
  returnToMuseumShort: '返回',
  returnToCategory: '返回分類頁面',
  returnToCategoryShort: '返回分類',
  collectionShort: '全館',
  resetView: '恢復初始視角',
  resetDone: '已經恢復初始視角。',
  storyCollapse: '收起介紹',
  storyExpand: '展開介紹',
  focusView: '專注看模型',
  focusEntered: '已進入模型專注模式，輕點畫面或按 Escape 返回完整介面。',
  focusReturnHint: '輕點畫面即可返回',
  exitFocus: '退出模型專注模式',
  focusExited: '已經回到完整的博物館介面。',
  care: {
    feed: '餵食物',
    bathe: '洗澡',
    play: '打球',
    walk: '走一走',
    shake: '搖搖頭',
    walked: (animal: string) => `${animal}邁著小碎步走過來啦！`,
    shook: (animal: string) => `${animal}搖了搖頭。`,
    fedMeat: (animal: string) => `${animal}大口大口吃起肉來，吃得好香！`,
    fedLeaves: (animal: string) => `${animal}唰唰地吃起了樹葉！`,
    refused: (animal: string) => `${animal}搖了搖頭，好像不愛吃這個。`,
    feedPrompt: '它吃什麼呢？點一個碗餵餵看！',
    closePicker: '關閉餵食選擇',
    bowlLeaf: '樹葉碗',
    bowlMeat: '肉肉碗',
    bathed: (animal: string) => `${animal}洗得乾乾淨淨，泡泡亮晶晶！`,
    played: (animal: string) => `和${animal}一起玩球，它開心地把球踢了回來！`,
  },
  notFound: {
    code: '404',
    title: '頁面沒有找到',
    body: '這條參觀路線暫時走不通，也許展品還在布置中。',
    return: '返回',
  },
  loading: {
    preparingExhibit: '正在準備新的動物展臺。',
    retryingExhibit: '正在重新準備展臺。',
    initialExhibit: (animal: string) => `正在準備${animal}展臺。`,
    opening: '正在打開…',
    inviting: '正在請它出來…',
    downloading: (percent: number) => `下載中 · ${percent}%`,
    retry: '點我再試',
    failed: '它暫時沒準備好，再點一次試試。',
    arrived: (animal: string) => `${animal}已經來到展臺。`,
    failedRetry: (animal: string) =>
      `${animal}暫時沒準備好，可以點擊它的卡片重試。`,
    backgroundPending: (animal: string) =>
      `${animal}的場景還在準備，先保留上一幅畫面。`,
    unknownAnimal: '這隻動物',
  },
  dataNotice: {
    dismissLabel: '關閉模型流量提示',
    dismiss: '知道了',
    wifi: '這裡的 3D 動物會使用一些流量，連接 Wi‑Fi 時觀看會更順暢。',
    largeModel: (animal: string, size: string) =>
      `${animal}的 3D 模型約 ${size}，第一次下載的資料量較大，載入可能會久一點。`,
  },
  viewerFallbackAnnouncement: (animal: string) =>
    `三維展臺暫時不可用，已經換成${animal}的靜態模型圖。`,
  language: {
    buttonLabel: '切換語言，目前繁體中文',
    menuLabel: '選擇介面語言',
    system: '跟隨系統',
    systemResolved: (language: string) => `跟隨系統（目前：${language}）`,
    chinese: '簡體中文',
    traditionalChinese: '繁體中文',
    japanese: '日本語',
    english: 'English',
    chineseShort: '简',
    traditionalChineseShort: '繁',
    japaneseShort: '日',
    englishShort: 'EN',
  },
  viewer: {
    modelLabel: (animal: string) => `${animal}三維模型，可拖動旋轉並縮放`,
    webglUnavailable: '這個瀏覽器現在不能顯示 3D 模型。',
    contextLost: 'WebGL 繪圖環境暫時不可用。',
    stillAlt: (animal: string) => `${animal}的透明背景靜態模型圖`,
    preparing: '正在打開 3D 模型…',
    downloading: '正在下載 3D 模型…',
    downloadingPercent: (percent: number) => `正在下載 3D 模型 · ${percent}%`,
    checkingCache: '正在尋找 3D 模型…',
    invitingFirst: '正在請第一位朋友出來……',
    progressLabel: '3D 模型載入進度',
    gestureHint: '拖動旋轉，滾動或雙指縮放',
    fallbackTitle: '今天先看看它的靜態模型吧',
    retry: '重新載入模型',
  },
  zoneSelect: {
    title: '今天想去看誰？',
    subtitle: '選一個展區，裡面的動物朋友都在等你。',
    enter: (zone: string) => `進入${zone}展區`,
    enterShort: '進入',
    friends: (count: number) => `${count} 位朋友`,
    backToZones: '返回展區選擇',
    backToZonesShort: '展區',
  },
  zones: {
    dinosaur: {
      name: '恐龍',
      tagline: '大地的王者，還有會飛的翼龍夥伴',
    },
    plains: {
      name: '草原',
      tagline: '寬闊的草地上住著成群的大家伙',
    },
    forest: {
      name: '森林',
      tagline: '茂密的樹林裡藏著大家伙的腳印',
    },
    ice: {
      name: '冰川',
      tagline: '冰冰涼涼的冰雪世界',
    },
    ocean: {
      name: '海洋',
      tagline: '潛進大海，和巨獸一起游泳',
    },
    insect: {
      name: '昆蟲',
      tagline: '小小身體藏著大大的秘密',
    },
    sky: {
      name: '天空',
      tagline: '飛上藍天，和鳥兒、翼龍一起翱翔',
    },
  },
  collection: {
    friends: (count: number) => `${count} 位史前朋友`,
    zoneFriends: (count: number, zoneName: string) => `${count} 位${zoneName}朋友`,
    title: '全館圖鑑',
    intro: '選一位朋友，馬上前往它的 3D 展臺。',
    back: '返回',
    close: '關閉全館圖鑑',
    cardLabel: (animal: string, current: boolean) =>
      `${current ? '目前展臺，' : ''}前往${animal}展臺`,
    current: '目前',
    opening: '正在打開',
    preparing: '準備中',
    downloading: (percent: number) => `下載中 ${percent}%`,
  },
  modern: {
    title: '現代動物朋友',
    intro: '它們還沒有 3D 展臺，先看看圖片認識一下吧。',
    categories: {
      grassland: '草原',
      ocean: '海洋',
      sky: '天空',
      forest: '森林',
    },
    soon: '圖片展示',
    locked: '暫時沒有 3D 展臺',
  },
  config: {
    title: '設定',
    intro: '調整介面語言，查看版本資訊；更多功能正在路上。',
    close: '關閉並返回首頁',
    languageTitle: '語言',
    languageHint: '選擇介面使用的語言，切換後立即生效。',
    appearanceTitle: '外觀',
    darkMode: '深色模式',
    appearanceHint: '深色主題正在準備中，先在這裡留好位置。',
    accountTitle: '帳號',
    accountAction: '登入帳號',
    accountHint: '登入與同步功能正在準備中。',
    aboutTitle: '關於',
    versionLabel: '版本號',
    comingSoon: '敬請期待',
    privacyTitle: '隱私',
    privacyAction: '隱私權政策',
    privacyHint: '查看我們如何收集、使用和保護資訊。',
    supportTitle: '支援',
    supportAction: '技術支援',
    supportHint: '查看常見問題與設備要求，或聯絡我們。',
  },
  toolbar: {
    label: '工具',
    reset: '恢復原樣',
    info: '動物資訊',
    collection: '全館圖鑑',
    height: '動物身高',
    weight: '動物體重',
    weightUnavailable: '暫無體重資料',
  },
  size: {
    eyebrow: '一起比比看',
    heightDialogTitle: '動物身高',
    heightClose: '關閉身高',
    weightDialogTitle: '動物體重',
    weightClose: '關閉體重',
    weight: '體重',
    weightUnavailable: '暫無體重資料',
    heightTitle: '有多高？',
    balanceTitle: '有多重？',
    adult: '成年人',
    weightUnits: {
      apple: '顆蘋果',
      child: '個小朋友',
      adult: '個成年人',
      car: '輛小汽車',
      bus: '輛公車',
    },
    heightCompare: (times: string, reference: string) =>
      `大約是${reference}的 ${times} 倍`,
    balanceEquals: (count: string, unit: string) =>
      `大約相當於 ${count} ${unit}`,
  },
  parent: {
    eyebrow: '一起了解更多',
    title: '給家長的資料',
    close: '關閉家長資料',
    period: '生活時期',
    regions: '發現地區',
    diet: '食性',
    classification: '分類提示',
    narration: '旁白文字',
    sources: '參考來源',
    credits: '3D 模型與素材來源',
    licensing: '開源與授權',
    licensingBody:
      '本專案程式碼採用 AGPL-3.0；原創科普文案與專案視覺採用 CC BY-NC-SA 4.0 非商業共享；品牌僅用於防止冒充官方，第三方素材沿用原授權。',
    fullLicensing: '查看完整授權說明',
    moreHint: '資料還可以繼續向上滑動。',
    more: '向上滑動查看更多',
    joinRegions: (regions: readonly string[]) => regions.join('、'),
  },
  ar: {
    open: 'AR',
    title: 'AR 擴增實境',
    requestingCamera: '正在請求攝影機…',
    cameraDenied: '沒有攝影機權限，請在瀏覽器設定裡允許後重試。',
    unsupported:
      '這台設備暫時不能使用 AR，需要支援攝影機與 WebGL 的安全（HTTPS）頁面。',
    scanning: '正在啟動 AR…',
    found: (animal: string) => `${animal} 出現了！`,
    error: 'AR 出了點問題，關閉後再試一次。',
    close: '退出 AR',
    xrSearching: '正在把動物帶到你面前…',
    xrPlaced: '出現啦！輕點螢幕可以換位置，點右上角退出。',
    cameraMode: '雙指捏合可以放大縮小，輕點畫面讓它回到面前。',
    switchAnimal: '換一隻動物',
  },
  zoo: {
    documentTitle: 'WonZoo 史前動物園 | 3D 親子探索遊戲',
    title: '史前動物園',
    subtitle: '走進 320 公尺寬的黏土山谷，認識 18 位真人大小的史前朋友',
    start: '開始探險',
    loadingTitle: '正在準備動物園',
    hints: {
      drag: '拖動旋轉視角 · 滾輪縮放',
      walk: 'WASD / 方向鍵 行走 · Shift 快跑',
      tap: '點擊地面前往 · 點擊動物打招呼',
    },
    loading: {
      ground: '正在鋪開山谷…',
      plants: '正在種下森林…',
      trails: '正在畫探險小路…',
      exhibits: '正在佈置展區…',
      friends: '正在請動物朋友入場',
      ready: '大門打開啦！',
    },
    hud: {
      book: '認識的朋友',
      tour: '自動導覽',
      tourStop: '停止導覽',
      overview: '俯瞰全景 (M)',
      overviewExit: '回到地面 (M)',
      labels: '顯示 / 隱藏標籤 (L)',
      sound: '聲音',
      soundOn: '打開聲音',
      soundOff: '關閉聲音',
      help: '怎麼玩',
      reset: '恢復視角 (R)',
      collection: '探險手冊',
      speak: '聽介紹',
      speaking: '正在介紹…',
      stopSpeak: '停下來',
      meet: '打個招呼',
      close: '關閉',
      travelling: '正在趕來…',
    },
    embed: {
      badge: '可走動的 3D 園區',
      fullscreen: '全螢幕',
      exitFullscreen: '退出全螢幕',
      close: '關閉園區',
      intro:
        '18 位史前朋友就住在這條 320 公尺寬的山谷裡，每個模型都是真實大小：霸王龍 12 公尺，迷惑龍 22 公尺。',
      controls: 'W A S D 行走 · Shift 快跑 · 點地面前往 · 點動物打招呼',
      ownPage: '在單獨頁面打開',
      frameTitle: '史前動物園 3D 園區',
      open: '在這裡打開園區',
    },
    card: {
      zone: '展區',
      period: '年代',
      regions: '發現地',
      diet: '食性',
      size: '體型',
      classification: '分類',
      feature: '看一看',
      hint: '走近它，就能認識它',
      met: '已經認識',
      unmet: '還沒認識',
      travel: '帶我去',
    },
    collection: {
      title: '探險手冊',
      hint: '點一位朋友，就能直接走到牠面前。',
      reset: '重新開始記錄',
      empty: '還沒有認識任何朋友，走出大門去找找看吧！',
    },
    celebrate: {
      title: '探險完成！',
      body: '你認識了全部 18 位史前朋友！',
      close: '繼續玩',
    },
    help: {
      title: '怎麼玩',
      lines: [
        '🚶 W A S D 或方向鍵行走，Shift 快跑',
        '👆 點擊地面，小探險家會自己走過去',
        '🖱️ 按住拖動旋轉視角，滾輪或雙指縮放',
        '🦕 走近動物就會認識牠；點一下，牠會跟你打招呼並介紹自己',
        '🤖 點右下角的無人機，開始全園自動導覽',
        '🗺️ 按 M 飛到空中，看清整座動物園',
        '🏷️ 按 L 顯示或隱藏頭頂的名字牌',
        '🔊 用聲音按鈕開關全部介紹與音效',
      ],
      close: '知道啦',
    },
    toasts: {
      discovered: (name: string, found: number, total: number) =>
        `認識了 ${name}！（${found}/${total}）`,
      blocked: '這邊過不去，換個方向試試。',
      narrationFailed: '這段介紹沒有成功播放。',
      noExhibitNearby: '附近還沒有動物朋友，再走近一點吧。',
      narrationMissing: '這隻動物還沒有準備好介紹音訊。',
      soundOn: '聲音已打開。',
      soundOff: '聲音已關閉。',
      labelsOn: '名字牌已顯示。',
      labelsOff: '名字牌已隱藏，滑鼠移過去時仍會顯示。',
      overviewOn: '飛到空中了，按 M 回到地面。',
      overviewOff: '回到地面。',
      travel: (name: string) => `來到了 ${name} 面前。`,
      progressReset: '探險手冊已經清空。',
    },
    errors: {
      webgl: '這台設備暫時不能執行 3D 動物園，需要支援 WebGL 的瀏覽器。',
      model: '有一隻動物的模型沒有成功載入。',
    },
    zones: {
      meadow: { name: '中央草甸', tagline: '山谷正中，小路從這裡出發' },
      plains: { name: '草原', tagline: '乾燥的草地上走著長脖子的大家伙' },
      forest: { name: '森林', tagline: '樹影深處傳來沉重的腳步聲' },
      ice: { name: '冰川', tagline: '冷風裡站著披著長毛的巨獸' },
      lagoon: { name: '潟湖', tagline: '潛進暖水，和海裡的巨獸一起游' },
      ridge: { name: '斷崖', tagline: '高高的崖頂是翼龍的停機坪' },
    },
  },
}

// Japanese shares the zh-CN copy structure; animal names and narration still
// come from the en content packages (no per-animal Japanese translations
// exist yet), so the ja interface falls back to English animal content.
const ja: MuseumMessages = {
  museumName: 'WonZoo',
  creatorBrand: 'Leon Made This',
  todayMeet: 'きょうのなかま',
  localReview: 'ローカルレビュー',
  documentTitle: 'WonZoo | 親子で楽しむ 3D 恐竜・動物図鑑',
  seo: {
    description: (count: number) =>
      `お子さまと一緒に 3D WonZoo で、陸・空・海の ${count} 体の先史時代の仲間たちを観察しましょう。`,
    socialImageAlt: 'WonZoo 親子向け 3D ミュージアム',
  },
  stageLabel: (animal: string) => `${animal}の展示ステージ`,
  navigationLabel: '動物を選ぶ',
  reviewNavigationLabel: 'ローカルレビュー用の動物を選ぶ',
  previousAnimal: '前の動物',
  nextAnimal: '次の動物',
  viewAnimal: (animal: string, review = '', failed = false) =>
    `${animal}を見る${review ? `、ローカルレビュー、${review}` : ''}${
      failed ? '、読み込みに失敗しました。タップして再試行' : ''
    }`,
  narration: {
    listen: '紹介を聞く',
    pause: '紹介を一時停止',
    unavailable: '紹介を準備中です',
    listenShort: '聞く',
    pauseShort: '一時停止',
    unavailableShort: '音声はまだありません',
    playing: (animal: string) => `${animal}の紹介を再生中です。`,
    paused: (animal: string) => `${animal}の紹介を一時停止しました。`,
  },
  parentInfo: '保護者向けガイド',
  parentInfoShort: '保護者ガイド',
  openCollection: '全コレクション図鑑を開く',
  returnToMuseum: '戻って全コレクション図鑑を開く',
  returnToMuseumShort: '戻る',
  returnToCategory: 'カテゴリーページに戻る',
  returnToCategoryShort: 'カテゴリーに戻る',
  collectionShort: '全館',
  resetView: '初期表示に戻す',
  resetDone: '初期表示に戻しました。',
  storyCollapse: '紹介を閉じる',
  storyExpand: '紹介を開く',
  focusView: 'モデルに集中する',
  focusEntered:
    'モデル集中モードです。画面をタップするか Escape キーで戻ります。',
  focusReturnHint: '画面をタップすると戻ります',
  exitFocus: 'モデル集中モードを終了',
  focusExited: 'ミュージアム全体の表示に戻りました。',
  care: {
    feed: 'ごはんをあげる',
    bathe: 'お風呂に入れる',
    play: 'ボールで遊ぶ',
    walk: 'お散歩する',
    shake: '首を振る',
    walked: (animal: string) => `${animal}が小さな足でトコトコ歩いてきた！`,
    shook: (animal: string) => `${animal}が首を振りました。`,
    fedMeat: (animal: string) => `${animal}がお肉をもりもり食べた！おいしそう！`,
    fedLeaves: (animal: string) => `${animal}が葉っぱをシャクシャク食べた！`,
    refused: (animal: string) => `${animal}が首を振った。これは好きじゃないみたい。`,
    feedPrompt: '何を食べるかな？お椀を選んでみよう！',
    closePicker: 'えさ選びを閉じる',
    bowlLeaf: '葉っぱのお椀',
    bowlMeat: 'お肉のお椀',
    bathed: (animal: string) => `${animal}がピカピカになった！泡がきらきら！`,
    played: (animal: string) => `${animal}とボール遊び。うれしそうに蹴り返してきた！`,
  },
  notFound: {
    code: '404',
    title: 'ページが見つかりません',
    body: 'この見学ルートは今は通れません。展示はまだ準備中かもしれません。',
    return: '戻る',
  },
  loading: {
    preparingExhibit: '新しい動物の展示を準備しています。',
    retryingExhibit: '展示を準備し直しています。',
    initialExhibit: (animal: string) => `${animal}の展示を準備しています。`,
    opening: '開いています…',
    inviting: '呼び出しています…',
    downloading: (percent: number) => `ダウンロード中 · ${percent}%`,
    retry: 'タップしてもう一度',
    failed: '今は準備ができていません。もう一度タップしてみてください。',
    arrived: (animal: string) => `${animal}が展示ステージに来ました。`,
    failedRetry: (animal: string) =>
      `${animal}は今は準備ができていません。カードをタップして再試行できます。`,
    backgroundPending: (animal: string) =>
      `${animal}の背景をまだ準備中です。前の画面を表示しています。`,
    unknownAnimal: 'この動物',
  },
  dataNotice: {
    dismissLabel: 'モデルの通信量のお知らせを閉じる',
    dismiss: 'わかりました',
    wifi: '3D 動物は通信量を使います。Wi-Fi 接続だとよりスムーズに観覧できます。',
    largeModel: (animal: string, size: string) =>
      `${animal}の 3D モデルは約 ${size} です。初回ダウンロードは大きめなので、読み込みに少し時間がかかることがあります。`,
  },
  viewerFallbackAnnouncement: (animal: string) =>
    `3D 展示が利用できないため、${animal}の静止画像を表示しています。`,
  language: {
    buttonLabel: '言語を切り替え、現在日本語',
    menuLabel: '表示言語を選ぶ',
    system: 'システムに従う',
    systemResolved: (language: string) => `システムに従う（現在：${language}）`,
    chinese: '簡体中文',
    traditionalChinese: '繁體中文',
    japanese: '日本語',
    english: 'English',
    chineseShort: '中',
    traditionalChineseShort: '繁',
    japaneseShort: '日',
    englishShort: 'EN',
  },
  viewer: {
    modelLabel: (animal: string) =>
      `${animal}の 3D モデル。ドラッグで回転、スクロールまたはピンチで拡大縮小`,
    webglUnavailable: 'このブラウザでは今 3D モデルを表示できません。',
    contextLost: '3D 描画環境が一時的に利用できません。',
    stillAlt: (animal: string) => `透明背景の${animal}の静止画像`,
    preparing: '3D モデルを開いています…',
    downloading: '3D モデルをダウンロード中…',
    downloadingPercent: (percent: number) =>
      `3D モデルをダウンロード中 · ${percent}%`,
    checkingCache: '3D モデルを探しています…',
    invitingFirst: '最初のお友達を呼んでいます……',
    progressLabel: '3D モデルの読み込み進捗',
    gestureHint: 'ドラッグで回転、スクロールまたはピンチで拡大縮小',
    fallbackTitle: '今日は静止画像で見てみよう',
    retry: 'モデルを再読み込み',
  },
  zoneSelect: {
    title: '今日は誰に会いに行く？',
    subtitle: 'ゾーンを選んでね。動物のお友達が待っているよ。',
    enter: (zone: string) => `${zone}ゾーンに入る`,
    enterShort: '入る',
    friends: (count: number) => `${count} 人のお友達`,
    backToZones: 'ゾーン選択に戻る',
    backToZonesShort: 'ゾーン',
  },
  zones: {
    dinosaur: {
      name: '恐竜',
      tagline: '大地の王者と、空を飛ぶ翼竜の仲間たち',
    },
    plains: {
      name: '草原',
      tagline: '広い草原に群れの大きな動物たちが暮らす',
    },
    forest: {
      name: '森',
      tagline: '深い森に大きな足あとが隠れている',
    },
    ice: {
      name: '氷河',
      tagline: 'ひんやり冷たい氷の世界',
    },
    ocean: {
      name: '海',
      tagline: '海に潜って、巨獣と一緒に泳ごう',
    },
    insect: {
      name: '昆虫',
      tagline: '小さな体に大きな秘密が隠れている',
    },
    sky: {
      name: '空',
      tagline: '青空へ飛び立ち、鳥や翼竜と一緒に舞い上がろう',
    },
  },
  collection: {
    friends: (count: number) => `${count} 人の先史時代のお友達`,
    zoneFriends: (count: number, zoneName: string) =>
      `${count} 人の${zoneName}のお友達`,
    title: '全コレクション図鑑',
    intro: 'お友達を選んで、すぐに 3D 展示へ。',
    back: '戻る',
    close: '全コレクション図鑑を閉じる',
    cardLabel: (animal: string, current: boolean) =>
      `${current ? '現在の展示、' : ''}${animal}の展示へ`,
    current: '現在',
    opening: '開いています',
    preparing: '準備中',
    downloading: (percent: number) => `ダウンロード中 ${percent}%`,
  },
  modern: {
    title: '現代の動物のお友達',
    intro: 'まだ 3D 展示はないけれど、写真でごあいさつしよう。',
    categories: {
      grassland: '草原',
      ocean: '海',
      sky: '空',
      forest: '森',
    },
    soon: '写真のみ',
    locked: '3D 展示はまだありません',
  },
  config: {
    title: '設定',
    intro:
      '表示言語を変更したり、バージョンを確認したりできます。機能はこれから増えます。',
    close: '閉じてホームに戻る',
    languageTitle: '言語',
    languageHint: '表示に使う言語を選びます。切り替えるとすぐに反映されます。',
    appearanceTitle: '外観',
    darkMode: 'ダークモード',
    appearanceHint: 'ダークテーマは準備中です。ここに場所を確保しています。',
    accountTitle: 'アカウント',
    accountAction: 'ログイン',
    accountHint: 'ログインと同期機能は準備中です。',
    aboutTitle: 'このアプリについて',
    versionLabel: 'バージョン',
    comingSoon: '近日公開',
    privacyTitle: 'プライバシー',
    privacyAction: 'プライバシーポリシー',
    privacyHint: '情報の収集・利用・保護の方法をご確認ください。',
    supportTitle: 'サポート',
    supportAction: 'テクニカルサポート',
    supportHint: 'よくある質問と必要な環境をご確認いただくか、お問い合わせください。',
  },
  toolbar: {
    label: 'ツール',
    reset: '元に戻す',
    info: '動物情報',
    collection: '全コレクション図鑑',
    height: '動物の身長',
    weight: '動物の体重',
    weightUnavailable: '体重データはまだありません',
  },
  size: {
    eyebrow: '大きさを比べてみよう',
    heightDialogTitle: '動物の身長',
    heightClose: '身長を閉じる',
    weightDialogTitle: '動物の体重',
    weightClose: '体重を閉じる',
    weight: '体重',
    weightUnavailable: '体重データはまだありません',
    heightTitle: 'たかさくらべ',
    balanceTitle: 'おもさくらべ',
    adult: 'おとな',
    weightUnits: {
      apple: 'りんご',
      child: '子ども',
      adult: 'おとな',
      car: 'くるま',
      bus: 'バス',
    },
    heightCompare: (times: string, reference: string) =>
      `${reference}の 約${times}倍`,
    balanceEquals: (count: string, unit: string) =>
      `${unit} ${count} つ分くらい`,
  },
  parent: {
    eyebrow: '一緒にもっと知る',
    title: '保護者向けガイド',
    close: '保護者向けガイドを閉じる',
    period: '生きた時代',
    regions: '化石の発見地域',
    diet: '食べ物',
    classification: '分類のヒント',
    narration: 'ナレーションの文字起こし',
    sources: '参考資料',
    credits: '3D モデルと素材のクレジット',
    licensing: 'オープンソースとライセンス',
    licensingBody:
      '本プロジェクトのコードは AGPL-3.0、オリジナルの科学解説とビジュアルは CC BY-NC-SA 4.0（非営利共有）です。ブランドは公式のなりすまし防止のみに使用し、第三者素材は元のライセンスに従います。',
    fullLicensing: 'ライセンスの全文を見る',
    moreHint: '下にさらに情報があります。',
    more: '上にスワイプしてもっと見る',
    joinRegions: (regions: readonly string[]) => regions.join('、'),
  },
  ar: {
    open: 'AR',
    title: 'AR（拡張現実）',
    requestingCamera: 'カメラをリクエストしています…',
    cameraDenied:
      'カメラの許可がありません。ブラウザ設定で許可してからもう一度お試しください。',
    unsupported:
      'この端末では今 AR を利用できません。カメラと WebGL に対応した安全な（HTTPS）ページが必要です。',
    scanning: 'AR を起動しています…',
    found: (animal: string) => `${animal}が現れました！`,
    error: 'AR で問題が起きました。閉じてもう一度お試しください。',
    close: 'AR を終了',
    xrSearching: '動物をあなたの前に呼び出しています…',
    xrPlaced: '現れました！画面をタップして位置を変えられます。右上で終了します。',
    cameraMode: '2 本指のピンチで拡大縮小、画面をタップすると手前に戻ります。',
    switchAnimal: '別の動物に替える',
  },
  zoo: {
    documentTitle: 'WonZoo 先史動物園 | 3D 親子探検ゲーム',
    title: '先史動物園',
    subtitle:
      '幅 320 m の粘土の谷を歩いて、実物大の先史動物 18 匹に会いに行こう',
    start: '探検をはじめる',
    loadingTitle: '動物園を準備しています',
    hints: {
      drag: 'ドラッグで視点を回す · ホイールでズーム',
      walk: 'WASD / 矢印キーで歩く · Shift で走る',
      tap: '地面をタップで移動 · 動物をタップでごあいさつ',
    },
    loading: {
      ground: '谷をひろげています…',
      plants: '森を植えています…',
      trails: '探検の小道を引いています…',
      exhibits: '展示エリアを整えています…',
      friends: '動物たちを呼んでいます',
      ready: '門が開きました！',
    },
    hud: {
      book: 'なかま',
      tour: '自動ガイド',
      tourStop: 'ガイドを止める',
      overview: '上空から見る (M)',
      overviewExit: '地上に戻る (M)',
      labels: '名前札の表示 (L)',
      sound: '音',
      soundOn: '音を出す',
      soundOff: '音を消す',
      help: 'あそびかた',
      reset: '視点を戻す (R)',
      collection: '探検ノート',
      speak: 'しょうかいを聞く',
      speaking: 'しょうかい中…',
      stopSpeak: '止める',
      meet: 'ごあいさつ',
      close: '閉じる',
      travelling: '向かっています…',
    },
    embed: {
      badge: '歩ける 3D パーク',
      fullscreen: '全画面',
      exitFullscreen: '全画面をやめる',
      close: 'パークを閉じる',
      intro:
        '幅 320 m の谷に先史動物が 18 匹住んでいます。模型はすべて実物大で、ティラノサウルスは 12 m、アパトサウルスは 22 m です。',
      controls:
        'WASD で歩く · Shift で走る · 地面をタップで移動 · 動物をタップでごあいさつ',
      ownPage: '別ページでひらく',
      frameTitle: '先史動物園 3D パーク',
      open: 'ここでパークをひらく',
    },
    card: {
      zone: 'エリア',
      period: '時代',
      regions: '発見地',
      diet: '食性',
      size: '大きさ',
      classification: '分類',
      feature: '見どころ',
      hint: '近づくと なかまになれるよ',
      met: 'なかまになった',
      unmet: 'まだ',
      travel: 'そこへ行く',
    },
    collection: {
      title: '探検ノート',
      hint: 'なかまをタップすると、その前に歩いていきます。',
      reset: '記録をリセット',
      empty: 'まだ誰にも会っていません。門を出て探してみよう！',
    },
    celebrate: {
      title: '探検かんりょう！',
      body: '先史動物 18 匹ぜんぶと なかまになったよ！',
      close: 'まだ遊ぶ',
    },
    help: {
      title: 'あそびかた',
      lines: [
        '🚶 WASD か矢印キーで歩く。Shift で走る',
        '👆 地面をタップすると、探検家が自分で歩いていくよ',
        '🖱️ ドラッグで視点を回す。ホイールか 2 本指でズーム',
        '🦕 近づくと なかまになれるよ。タップすると挨拶してしょうかいしてくれる',
        '🤖 右下のドローンをタップすると、園内の自動ガイドが始まるよ',
        '🗺️ M キーで上空へ。動物園ぜんたいを見わたせる',
        '🏷️ L キーで名前札の表示を切り替え',
        '🔊 音ボタンで しょうかいと効果音をまとめてオンオフ',
      ],
      close: 'わかった',
    },
    toasts: {
      discovered: (name: string, found: number, total: number) =>
        `${name}と なかまになったよ！（${found}/${total}）`,
      blocked: 'そこは通れないみたい。別の方向へ行ってみよう。',
      narrationFailed: 'しょうかいを再生できませんでした。',
      noExhibitNearby: '近くに動物はいません。もう少し近づいてみよう。',
      narrationMissing: 'この動物のしょうかい音声はまだありません。',
      soundOn: '音を出します。',
      soundOff: '音を消しました。',
      labelsOn: '名前札を表示します。',
      labelsOff: '名前札を隠しました。マウスを重ねると出ます。',
      overviewOn: '上空に来ました。M で地上に戻ります。',
      overviewOff: '地上に戻りました。',
      travel: (name: string) => `${name}の前に来ました。`,
      progressReset: '探検ノートをリセットしました。',
    },
    errors: {
      webgl:
        'この端末では 3D 動物園を動かせません。WebGL に対応したブラウザが必要です。',
      model: '1 匹のモデルを読み込めませんでした。',
    },
    zones: {
      meadow: {
        name: 'まんなかの草原',
        tagline: '谷の中央、小道はここから始まる',
      },
      plains: { name: '草原', tagline: 'かわいた草地を 長い首の巨人が歩く' },
      forest: { name: '森', tagline: '木かげの奥から 重い足音が聞こえる' },
      ice: { name: '氷河', tagline: '冷たい風の中に 長い毛の巨獣が立つ' },
      lagoon: {
        name: 'ラグーン',
        tagline: 'あたたかい水にもぐって 海の大獣と泳ごう',
      },
      ridge: { name: 'がけ', tagline: '高い崖の上は 翼竜の駐機場' },
    },
  },
}

const en = {
  museumName: 'WonZoo',
  creatorBrand: 'Leon Made This',
  todayMeet: 'Meet today’s friend',
  localReview: 'Local review',
  documentTitle: 'WonZoo | A 3D Family Adventure',
  seo: {
    description: (count) =>
      `Explore ${count} prehistoric animals from land, sky and sea in a gentle 3D museum made for young children and their grown-ups.`,
    socialImageAlt:
      'WonZoo, a 3D family adventure by Leon Made This',
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
  returnToMuseum: 'Back and open the full guide',
  returnToMuseumShort: 'Back',
  returnToCategory: 'Back to the category page',
  returnToCategoryShort: 'Back to category',
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
    return: 'Back',
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
    traditionalChinese: '繁體中文',
    japanese: '日本語',
    english: 'English',
    chineseShort: '中',
    traditionalChineseShort: '繁',
    japaneseShort: '日',
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
    sky: {
      name: 'Sky',
      tagline: 'Take wing and soar with feathered friends',
    },
  },
  collection: {
    friends: (count) => `${count} prehistoric friends`,
    zoneFriends: (count, zoneName) => `${count} ${zoneName} friends`,
    title: 'Museum guide',
    intro: 'Choose a friend and go straight to its 3D exhibit.',
    back: 'Back',
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
  config: {
    title: 'Settings',
    intro: 'Adjust the interface language and check the app version — more is on the way.',
    close: 'Close and return to the homepage',
    languageTitle: 'Language',
    languageHint: 'Choose the interface language. It applies right away.',
    appearanceTitle: 'Appearance',
    darkMode: 'Dark mode',
    appearanceHint: 'A dark theme is being prepared — this spot is reserved.',
    accountTitle: 'Account',
    accountAction: 'Sign in',
    accountHint: 'Sign-in and sync are being prepared.',
    aboutTitle: 'About',
    versionLabel: 'Version',
    comingSoon: 'Coming soon',
    privacyTitle: 'Privacy',
    privacyAction: 'Privacy Policy',
    privacyHint: 'Read how we collect, use and protect information.',
    supportTitle: 'Support',
    supportAction: 'Technical Support',
    supportHint: 'Read the FAQ and device requirements, or contact us.',
  },
  toolbar: {
    label: 'Tools',
    reset: 'Reset view',
    info: 'Animal info',
    collection: 'Museum guide',
    height: 'Animal height',
    weight: 'Animal weight',
    weightUnavailable: 'No weight data yet',
  },
  size: {
    eyebrow: 'How big is it?',
    heightDialogTitle: 'Animal height',
    heightClose: 'Close height',
    weightDialogTitle: 'Animal weight',
    weightClose: 'Close weight',
    weight: 'Weight',
    weightUnavailable: 'No weight data yet',
    heightTitle: 'How tall?',
    balanceTitle: 'How heavy?',
    adult: 'a grown-up',
    weightUnits: {
      apple: 'apples',
      child: 'kids',
      adult: 'grown-ups',
      car: 'small cars',
      bus: 'buses',
    },
    heightCompare: (times, reference) => `About ${times}× ${reference}`,
    balanceEquals: (count, unit) => `About the same as ${count} ${unit}`,
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
  zoo: {
    documentTitle: 'WonZoo Prehistoric Park | A 3D family exploration game',
    title: 'Prehistoric Park',
    subtitle:
      'Walk a 320 m clay valley and meet eighteen life-size prehistoric animals',
    start: 'Start exploring',
    loadingTitle: 'Preparing the park',
    hints: {
      drag: 'Drag to look around · scroll to zoom',
      walk: 'WASD or arrow keys to walk · Shift to run',
      tap: 'Tap the ground to walk · tap an animal to say hello',
    },
    loading: {
      ground: 'Laying out the valley…',
      plants: 'Planting the woodland…',
      trails: 'Painting the trail…',
      exhibits: 'Setting up the exhibits…',
      friends: 'Inviting the animals in',
      ready: 'The gate is open!',
    },
    hud: {
      book: 'Friends met',
      tour: 'Guided tour',
      tourStop: 'Stop the tour',
      overview: 'See the whole park (M)',
      overviewExit: 'Back to the ground (M)',
      labels: 'Show or hide name cards (L)',
      sound: 'Sound',
      soundOn: 'Turn sound on',
      soundOff: 'Turn sound off',
      help: 'How to play',
      reset: 'Reset the view (R)',
      collection: 'Field notebook',
      speak: 'Hear the introduction',
      speaking: 'Introducing…',
      stopSpeak: 'Stop',
      meet: 'Say hello',
      close: 'Close',
      travelling: 'On the way…',
    },
    embed: {
      badge: 'Walkable 3D park',
      fullscreen: 'Full screen',
      exitFullscreen: 'Leave full screen',
      close: 'Close the park',
      intro:
        'All eighteen prehistoric friends live in this 320 m valley, every model at life size: a 12 m Tyrannosaurus rex, a 22 m Apatosaurus.',
      controls:
        'W A S D to walk · Shift to run · tap the ground to move · tap an animal to say hello',
      ownPage: 'Open on its own page',
      frameTitle: 'Prehistoric Park, walkable 3D',
      open: 'Open the park here',
    },
    card: {
      zone: 'Zone',
      period: 'Period',
      regions: 'Found in',
      diet: 'Diet',
      size: 'Size',
      classification: 'Group',
      feature: 'Look for',
      hint: 'Walk closer to meet them',
      met: 'Met',
      unmet: 'Not met yet',
      travel: 'Take me there',
    },
    collection: {
      title: 'Field notebook',
      hint: 'Tap a friend to walk straight to their viewpoint.',
      reset: 'Start the notebook again',
      empty: 'No friends met yet — head out through the gate!',
    },
    celebrate: {
      title: 'Park complete!',
      body: 'You have met all eighteen prehistoric friends!',
      close: 'Keep exploring',
    },
    help: {
      title: 'How to play',
      lines: [
        '🚶 Walk with W A S D or the arrow keys; hold Shift to run',
        '👆 Tap the ground and the explorer walks there on their own',
        '🖱️ Drag to look around; scroll or pinch to zoom',
        '🦕 Walk up to an animal to meet it; tap one and it greets you and introduces itself',
        '🤖 Tap the drone in the corner to start the guided tour of the whole park',
        '🗺️ Press M to fly up and see the entire park',
        '🏷️ Press L to show or hide the name cards overhead',
        '🔊 The sound button turns every introduction and sound effect on or off',
      ],
      close: 'Got it',
    },
    toasts: {
      discovered: (name: string, found: number, total: number) =>
        `You met ${name}! (${found}/${total})`,
      blocked: 'That way is closed — try another direction.',
      narrationFailed: 'That introduction would not play.',
      noExhibitNearby: 'No animals nearby yet — walk a little closer.',
      narrationMissing: 'This animal has no introduction audio yet.',
      soundOn: 'Sound is on.',
      soundOff: 'Sound is off.',
      labelsOn: 'Name cards are showing.',
      labelsOff: 'Name cards are hidden; hovering still shows one.',
      overviewOn: 'You are above the park — press M to come back down.',
      overviewOff: 'Back on the ground.',
      travel: (name: string) => `You are standing in front of ${name}.`,
      progressReset: 'The field notebook is empty again.',
    },
    errors: {
      webgl:
        'This device cannot run the 3D park; a WebGL-capable browser is needed.',
      model: 'One animal model failed to load.',
    },
    zones: {
      meadow: {
        name: 'Central meadow',
        tagline: 'The trail leaves from the middle of the valley',
      },
      plains: { name: 'Plains', tagline: 'Long-necked giants cross the dry grass' },
      forest: { name: 'Forest', tagline: 'Heavy footfalls come from deep in the shade' },
      ice: { name: 'Ice field', tagline: 'A shaggy giant stands in the cold wind' },
      lagoon: {
        name: 'Lagoon',
        tagline: 'Swim with the great beasts of the warm water',
      },
      ridge: {
        name: 'Escarpment',
        tagline: 'The high crest is a pterosaur landing strip',
      },
    },
  },
} satisfies MuseumMessages

export function messagesFor(locale: Locale): MuseumMessages {
  switch (locale) {
    case 'zh-CN':
      return zhCN
    case 'zh-TW':
      return zhTW
    case 'ja':
      return ja
    default:
      return en
  }
}

export function dietLabel(diet: Diet, locale: Locale): string {
  const labels =
    locale === 'ja'
      ? {
          herbivore: '草食',
          carnivore: '肉食',
          omnivore: '雑食',
          unknown: '未確定',
        }
      : locale === 'zh-TW'
        ? {
            herbivore: '植食',
            carnivore: '肉食',
            omnivore: '雜食',
            unknown: '尚不確定',
          }
        : locale === 'zh-CN'
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
  const intlLocale =
    locale === 'ja'
      ? 'ja-JP'
      : locale === 'zh-TW'
        ? 'zh-TW'
        : locale === 'zh-CN'
          ? 'zh-CN'
          : 'en-GB'
  return new Intl.NumberFormat(intlLocale, {
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
  const isChinese = locale === 'zh-CN' || locale === 'zh-TW'
  const label =
    size.kind === 'wingspan'
      ? locale === 'ja'
        ? '翼幅'
        : isChinese
          ? '翼展'
          : 'Wingspan'
      : size.kind === 'shoulder-height'
        ? locale === 'ja'
          ? '肩高'
          : isChinese
            ? '肩高'
            : 'Shoulder height'
        : size.kind === 'group-range'
          ? locale === 'ja'
            ? 'グループの大きさ'
            : locale === 'zh-TW'
              ? '類群體型'
              : locale === 'zh-CN'
                ? '类群体型'
                : 'Group size range'
          : locale === 'ja'
            ? '体長'
            : locale === 'zh-TW'
              ? '體長'
              : locale === 'zh-CN'
                ? '体长'
                : 'Body length'

  const metric = isChinese ? `${metres} 米（约）` : `${metres} m`
  const imperial = same
    ? `about ${formatFeet(size.minMeters)} ft`
    : `about ${formatFeet(size.minMeters)}–${formatFeet(size.maxMeters)} ft`
  const range = isChinese ? metric : `${metric} (${imperial})`
  return {
    label,
    value:
      size.kind === 'group-range'
        ? `${size.note}${isChinese ? '；' : '; '}${range}`
        : range,
  }
}

/**
 * Formats an approximate mass range for the kid-facing balance comparison.
 * Units scale with the animal: grams under 1 kg, kilograms under a tonne,
 * tonnes above, with both ends of a range sharing the max end's unit.
 */
export function formatWeightFact(
  weight: { readonly minKg: number; readonly maxKg: number },
  locale: Locale,
): string {
  const isChinese = locale === 'zh-CN' || locale === 'zh-TW'
  const { multiply, unit } =
    weight.maxKg < 1
      ? {
          multiply: 1000,
          unit: locale === 'ja' ? 'グラム' : isChinese ? '克' : 'g',
        }
      : weight.maxKg < 1000
        ? { multiply: 1, unit: locale === 'ja' ? 'kg' : isChinese ? '千克' : 'kg' }
        : {
            multiply: 0.001,
            unit:
              locale === 'ja'
                ? 'トン'
                : locale === 'zh-TW'
                  ? '噸'
                  : locale === 'zh-CN'
                    ? '吨'
                    : 'tonnes',
          }
  const format = (kg: number) => formatNumber(kg * multiply, locale)
  const range =
    weight.minKg === weight.maxKg
      ? format(weight.minKg)
      : `${format(weight.minKg)}–${format(weight.maxKg)}`
  const prefix = locale === 'ja' ? '約 ' : isChinese ? '约 ' : 'about '
  return `${prefix}${range} ${unit}`
}
