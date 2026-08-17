# 首页改为动物分类选择页

## 概述
访问 `/zh-CN/`（及 `/en/`）时先显示 5 个分类卡片：**恐龙（含翼龙）、草原、冰川、海洋、昆虫**，点击后进入该分类的 3D 展馆（URL 带 `?category=<id>`，可分享/刷新）。采用客户端视图切换，不新增路由，SEO 预渲染页面改为分类选择页。以后加新动物/新分类只需在分类定义里补一条。

## 分类归属（基于现有 kind / atmosphere 字段自动匹配）
| 分类 | 匹配规则 | 动物 |
|---|---|---|
| dinosaur 恐龙 | kind 为 `dinosaur` 或 `pterosaur` | 10 只恐龙 + 4 只翼龙 |
| plains 草原 | atmosphere 为 `plains` | 尖角龙类等 6 只 |
| ice 冰川 | atmosphere 为 `ice` | 长毛猛犸象 |
| ocean 海洋 | atmosphere 为 `underwater` | 沧龙、巨齿鲨等 4 只 |
| insect 昆虫 | 显式 id 列表 `['meganeura']`（未来昆虫往里加） | 古蜻蜓 |

动物可同时属于多个分类（如三角龙同时在「恐龙」和「草原」），符合直觉。

## 改动文件

1. **`src/content/collections/categories.ts`（新建）** — 定义 `zoneCategories`：每个分类含 id、匹配器、展示顺序、默认动物（取该分类在 mainCollection 顺序中的第一只）；导出按分类解析好的动物 id 列表和 `zoneIdByAnimalId` 反查表（基于 `productionAnimals`）。

2. **`src/app-bootstrap.ts`** — `AppPageKind` 增加 `'zone-select'`。

3. **`app/(locale)/[locale]/page.tsx`** — initialState 的 `pageKind` 改为 `'zone-select'`（SSR 渲染分类选择页，水合确定性不变）。

4. **`src/components/ZoneSelect.tsx`（新建）** — 童趣分类卡片网格：每张卡含图标、本地化名称、动物数量、以该分类首只动物的 thumbnail 作卡片底图、每分类专属主题色；含语言切换入口；键盘可达（按钮语义）。

5. **`src/App.tsx`** — 核心状态机：
   - 新增 `activeZoneId` 状态；`pageKind === 'zone-select'` 时只渲染 ZoneSelect（不挂 ViewerStage，3D 加载协调器因无 controller 自然休眠）。
   - `enterZone(zoneId)`：切到 museum 视图、动物列表过滤为该分类、请求分类默认动物、`replaceState` 为 `./?category=<id>`。
   - 初始挂载时若 URL 带 `?category=`（或 e2e `fixtures=1`、`?animal=` 深链）则跳过选择页直接进入展馆（复用现有 `initialQueryAppliedRef` 模式）。
   - 分类视图下的底部动物导航栏（rail、上一只/下一只）只显示当前分类的动物；「全馆图鉴」仍显示所有动物，从中跨分类选择时同步切换 `activeZoneId`。
   - 故事面板操作区新增「返回分类」按钮 → 回到选择页并 `replaceState` 为 `./`。
   - 深链/动物详情页行为不变。

6. **`src/i18n/messages.ts`** — zh-CN 与 en 各加 `zoneSelect`（标题、副标题、进入话术、动物计数、返回按钮）和 `zones`（5 个分类的名称 + 一句话简介）文案。

7. **`src/styles.css`** — `.zone-select` / `.zone-card` 样式：按 `data-zone-id` 配渐变主题色、竖屏/横屏响应式、hover/focus、reduced-motion 兼容，风格与现有绘本感 UI 一致。

8. **`scripts/content-validation.ts`**（追加）— 校验：分类 id 唯一、每个分类至少含 1 只已发布动物、`insect` 显式列表中的 id 存在；防止以后加动物时分类悄悄变空。

## 验证
- `npm run lint`、`npm run typecheck`
- `npm run validate:content`
- `npm run dev` 手动验证：首页显示 5 分类 → 点击各分类进入对应展馆 → 刷新带 `?category=` 直接进入 → 「返回分类」→ `?animal=` 深链与动物详情页返回路径不回归。