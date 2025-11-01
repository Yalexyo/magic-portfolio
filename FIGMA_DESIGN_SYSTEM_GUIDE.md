# 📐 Figma 设计系统完整指南 - Once UI

> 包含分辨率、Grid、字体、颜色、间距等完整设计规范

## 🎯 设计分辨率规范

根据 Once UI 项目的响应式设计，严格按照以下分辨率制作 Figma 页面：

### 设备帧 (Frames) 尺寸

| 设备类型 | 宽度 (Width) | 高度 (Height) | Frame 名称 | 用途 |
|---------|------------|--------------|-----------|------|
| **Desktop** | 1440px | 1024px | Desktop Frame | 桌面端主视图 |
| **Tablet** | 1280px | 800px | Tablet Frame | 平板横屏 |
| **Mobile** | 390px | 844px | Mobile Frame | 手机竖屏（iPhone 13/14） |

### Grid 系统配置

**Desktop (1440px)**
```
Columns: 24
Gutter: 24px
Margin: 80px (左右各)
Type: Stretch
Color: #0066FF (10% opacity)
```

**Tablet (1280px)**
```
Columns: 8
Gutter: 24px
Margin: 64px (左右各)
Type: Stretch
Color: #0066FF (10% opacity)
```

**Mobile (390px)**
```
Columns: 4
Gutter: 16px
Margin: 16px (左右各)
Type: Stretch
Color: #0066FF (10% opacity)
```

---

## 🔤 Once UI 字体系统详解

### 字体家族 (Font Family)

项目使用 **Geist** 字体家族（Google Fonts）：

| 用途 | 字体 | CSS Variable | Figma 替代字体 |
|-----|------|--------------|---------------|
| Heading | Geist | `--font-heading` | Inter / SF Pro Display |
| Body | Geist | `--font-body` | Inter / Noto Sans SC |
| Label | Geist | `--font-label` | Inter |
| Code | Geist Mono | `--font-code` | JetBrains Mono / Fira Code |

**在 Figma 中使用**：
- **常规文字**: 使用 **Inter** 字体替代（Geist 在 Figma 中不可用）
- **中文**: 使用 **Noto Sans SC** 或 **PingFang SC**
- **代码**: 使用 **JetBrains Mono** 或 **Fira Code**（等宽字体）

---

## 📝 字体变体系统 (Typography Variants)

Once UI v1.5.2 提供 **50 种字体变体**（5 类型 × 2 字重 × 5 尺寸）

### 1️⃣ Display 系列 (超大标题)

| Variant | 用途 | Font Size | Line Height | Font Weight | Letter Spacing | 使用场景 |
|---------|------|-----------|-------------|-------------|----------------|---------|
| `display-strong-xl` | 超大加粗标题 | 48-64px | 120% | 600 (Semi Bold) | -2% | Hero 区域主标题 |
| `display-strong-l` | 大加粗标题 | 40-48px | 120% | 600 (Semi Bold) | -2% | 原备用首页标题 |
| `display-strong-m` | 中加粗标题 | 32-40px | 130% | 600 (Semi Bold) | -1.5% | Work/Blog 详情页标题 |
| `display-strong-s` | 小加粗标题 | 28-32px | 130% | 600 (Semi Bold) | -1% | About 页区块标题 |
| `display-default-xl` | 超大常规 | 48-64px | 120% | 400 (Regular) | -1.5% | 404 页面数字 |
| `display-default-xs` | 小常规 | 20-24px | 140% | 400 (Regular) | -0.5% | About 页副标题 |

**Figma 设置示例**:
```
Font: Inter / Noto Sans SC
Size: 48px (可根据响应式调整)
Weight: Semi Bold (600) 或 Regular (400)
Line Height: 120%-140%
Letter Spacing: -2% to -0.5%
```

---

### 2️⃣ Heading 系列 (标准标题)

| Variant | 用途 | Font Size | Line Height | Font Weight | Letter Spacing | 使用场景 |
|---------|------|-----------|-------------|-------------|----------------|---------|
| `heading-strong-xl` | 特大加粗标题 | 32-36px | 140% | 600 (Semi Bold) | -1.5% | 页面主标题、区块标题 |
| `heading-strong-l` | 大加粗标题 | 24-28px | 140% | 600 (Semi Bold) | -1% | 子标题、团队名称 |
| `heading-strong-m` | 中加粗标题 | 20-24px | 140% | 600 (Semi Bold) | -0.5% | 卡片标题、成员名字 |
| `heading-default-xl` | 特大常规 | 32-36px | 140% | 400 (Regular) | -1% | 原备用首页副标题 |
| `heading-default-l` | 大常规标题 | 24-28px | 140% | 400 (Regular) | -0.5% | 导航链接、次要标题 |
| `heading-default-xs` | 小常规标题 | 14-16px | 140% | 400 (Regular) | 0% | 时间戳、小标签 |

**Figma 设置示例**:
```
Font: Inter / Noto Sans SC
Size: 24-36px
Weight: Semi Bold (600) 或 Regular (400)
Line Height: 140%
Letter Spacing: -1.5% to 0%
```

---

### 3️⃣ Body 系列 (正文)

| Variant | 用途 | Font Size | Line Height | Font Weight | Letter Spacing | 使用场景 |
|---------|------|-----------|-------------|-------------|----------------|---------|
| `body-default-l` | 大正文 | 18-20px | 160% | 400 (Regular) | 0% | 引言、重要描述 |
| `body-default-m` | 中正文 | 16px | 160% | 400 (Regular) | 0% | 标准正文、列表项 |
| `body-default-s` | 小正文 | 14px | 150% | 400 (Regular) | 0% | 辅助文字、职位描述 |
| `body-default-xs` | 超小正文 | 12px | 150% | 400 (Regular) | 0% | 时间、日期、备注 |

**Figma 设置示例**:
```
Font: Inter / Noto Sans SC
Size: 14-20px
Weight: Regular (400)
Line Height: 150%-160%
Letter Spacing: 0%
```

---

### 4️⃣ Label 系列 (标签)

| Variant | 用途 | Font Size | Line Height | Font Weight | Letter Spacing | 使用场景 |
|---------|------|-----------|-------------|-------------|----------------|---------|
| `label-strong-m` | 中加粗标签 | 14-16px | 140% | 600 (Semi Bold) | 0.5% | 导航标签、分类 |
| `label-strong-s` | 小加粗标签 | 12-14px | 140% | 600 (Semi Bold) | 0.5% | Badge、小标签 |
| `label-default-m` | 中常规标签 | 14-16px | 140% | 400 (Regular) | 0.5% | 团队成员标签 |
| `label-default-s` | 小常规标签 | 12px | 140% | 400 (Regular) | 0.5% | 功能标签、徽章 |

**Figma 设置示例**:
```
Font: Inter
Size: 12-16px
Weight: Semi Bold (600) 或 Regular (400)
Line Height: 140%
Letter Spacing: 0.5%
```

---

### 5️⃣ Code 系列 (代码字体)

| Variant | 用途 | Font Size | Line Height | Font Weight | Letter Spacing | 使用场景 |
|---------|------|-----------|-------------|-------------|----------------|---------|
| `code-default-xl` | 超大代码 | 18-20px | 150% | 400 (Regular) | 0% | 大型代码展示 |
| `code-default-l` | 大代码 | 16-18px | 150% | 400 (Regular) | 0% | 代码块主体 |
| `code-default-m` | 中代码 | 14-16px | 150% | 400 (Regular) | 0% | 标准代码块 |
| `code-default-s` | 小代码 | 12-14px | 150% | 400 (Regular) | 0% | 内联代码 |
| `code-default-xs` | 超小代码 | 11-12px | 150% | 400 (Regular) | 0% | 注释、行号 |
| `code-strong-m` | 中加粗代码 | 14-16px | 150% | 600 (Semi Bold) | 0% | 强调代码片段 |
| `code-strong-s` | 小加粗代码 | 12-14px | 150% | 600 (Semi Bold) | 0% | 重要代码标识 |

**Figma 设置示例**:
```
Font: JetBrains Mono / Fira Code / Monaco / Menlo
Size: 12-20px
Weight: Regular (400) 或 Semi Bold (600)
Line Height: 150%
Letter Spacing: 0%
Text Case: 保持原样（区分大小写）
```

**在 Figma 中使用等宽字体**：
- **推荐**: JetBrains Mono, Fira Code (支持连字)
- **备选**: Monaco, Menlo, SF Mono, Courier New
- **特点**: 等宽字体，所有字符宽度相同，适合代码展示

---

## 🎨 项目实际使用示例

### 当前首页 (/)

#### 顶部导航区
```
"为什么选我们" (主选中)
├─ Heading as="h1"
├─ variant="heading-strong-xl"
├─ Figma: 32-36px, Semi Bold (600), -1.5% spacing

"设计案例" / "开发案例" / "个人作品集Gallery"
├─ Text
├─ variant="heading-default-l"
├─ Figma: 24-28px, Regular (400), -0.5% spacing
├─ Color: neutral-weak (次要颜色)
```

#### 区块标题
```
"总览" / "关于我们" / "团队介绍"
├─ Heading as="h2"
├─ variant="heading-strong-xl"
├─ Figma: 32-36px, Semi Bold (600), -1.5% spacing
```

#### 子标题
```
"开发团队" / "设计团队"
├─ Heading as="h3"
├─ variant="heading-strong-l"
├─ Figma: 24-28px, Semi Bold (600), -1% spacing
```

#### 成员卡片
```
成员名字
├─ Text
├─ variant="heading-strong-m"
├─ Figma: 20-24px, Semi Bold (600)

职位 Title
├─ Text
├─ variant="body-default-s"
├─ Figma: 14px, Regular (400)
├─ Color: neutral-weak
```

---

### Work 页面 (/work)

#### 页面标题
```
"Projects" 或项目标题
├─ Heading
├─ variant="heading-strong-xl"
├─ Figma: 32-36px, Semi Bold (600), Center aligned
```

#### 项目详情页标题
```
项目名称
├─ Heading
├─ variant="display-strong-m"
├─ Figma: 32-40px, Semi Bold (600), -1.5% spacing
```

#### 标签和时间
```
"Projects" 标签
├─ Text
├─ variant="label-strong-m"
├─ Figma: 14-16px, Semi Bold (600)

发布时间
├─ Text
├─ variant="body-default-xs"
├─ Figma: 12px, Regular (400)
├─ Color: neutral-weak
```

---

### About 页面 (/about)

#### 主标题
```
人名
├─ Heading
├─ variant="display-strong-xl"
├─ Figma: 48-64px, Semi Bold (600), -2% spacing
```

#### 副标题
```
职位描述
├─ Text
├─ variant="display-default-xs"
├─ Figma: 20-24px, Regular (400)
├─ Color: neutral-weak
```

#### 区块标题
```
"Work Experience" / "Studies" / "Technical skills"
├─ Heading as="h2"
├─ variant="display-strong-s"
├─ Figma: 28-32px, Semi Bold (600), -1% spacing
```

#### 公司名称 / 学校名称
```
├─ Text
├─ variant="heading-strong-l"
├─ Figma: 24-28px, Semi Bold (600)
```

#### 时间范围
```
"2022 - Present"
├─ Text
├─ variant="heading-default-xs"
├─ Figma: 14-16px, Regular (400)
├─ Color: neutral-weak
```

#### 职位名称
```
├─ Text
├─ variant="body-default-s"
├─ Figma: 14px, Regular (400)
├─ Color: brand-weak
```

#### 描述正文
```
├─ Text
├─ variant="body-default-m"
├─ Figma: 16px, Regular (400), 160% line height
```

---

### Blog 页面 (/blog) - 已禁用

> 注：当前项目中 Blog 路由已禁用（`/blog: false`）

#### 标题（参考）

#### 标题
```
"Blog" / 文章标题
├─ Heading
├─ variant="heading-strong-xl"
├─ Figma: 32-36px, Semi Bold (600)
```

#### 文章详情标题
```
├─ Heading
├─ variant="display-strong-m"
├─ Figma: 32-40px, Semi Bold (600)
```

#### 代码块
```
代码示例
├─ Text
├─ variant="code-default-m"
├─ Figma: JetBrains Mono 14px, Regular (400)
├─ Background: surface
├─ Padding: 16px
```

---

### 404 页面 (/not-found)

#### "404" 数字
```
├─ Text
├─ variant="display-strong-xl"
├─ Figma: 48-64px, Semi Bold (600)
```

#### "Page Not Found"
```
├─ Heading
├─ variant="display-default-xs"
├─ Figma: 20-24px, Regular (400)
```

---

## 🎯 Figma 制作步骤

### 1. 创建 Frame
```
1. 选择 Frame Tool (F)
2. 设置尺寸：
   - Desktop: 1440 × 1024
   - Tablet: 1280 × 800
   - Mobile: 390 × 844
3. 命名：Desktop / Tablet / Mobile
```

### 2. 设置 Grid
```
1. 选中 Frame
2. 点击右侧 Layout Grid
3. 添加 Grid：
   Desktop: 24 columns, 24px gutter, 80px margin
   Tablet: 8 columns, 24px gutter, 64px margin
   Mobile: 4 columns, 16px gutter, 16px margin
4. 设置颜色：#0066FF, 10% opacity
```

### 3. 应用字体系统
```
1. 创建 Text Styles：
   - 命名格式：Display/Strong/XL
   - 设置对应的 Size, Weight, Line Height
   - 保存为 Text Style

2. 对应关系：
   display-strong-xl  → Figma: Inter 48px, Semi Bold, 120% line
   heading-strong-xl  → Figma: Inter 36px, Semi Bold, 140% line
   heading-strong-l   → Figma: Inter 28px, Semi Bold, 140% line
   heading-strong-m   → Figma: Inter 24px, Semi Bold, 140% line
   body-default-m     → Figma: Inter 16px, Regular, 160% line
   body-default-s     → Figma: Inter 14px, Regular, 150% line
   label-strong-m     → Figma: Inter 14px, Semi Bold, 140% line
   code-default-m     → Figma: JetBrains Mono 14px, Regular, 150% line
```

### 4. 设置颜色系统
```
项目使用语义化颜色 tokens：

Text Colors:
- neutral-strong: 主要文字 (#18181B 或白色)
- neutral-weak: 次要文字 (50% opacity)
- brand-weak: 品牌色文字 (Cyan tint)

Backgrounds:
- surface: 卡片背景 (#FFFFFF / #1C1C1E)
- page: 页面背景 (#FAFAFA / #000000)
- neutral-weak: 占位符 (#E4E4E7)
```

---

## 📏 间距系统 (Spacing)

Once UI 使用标准间距单位：

| Token | 值 | Figma 使用 | 用途 |
|-------|---|-----------|------|
| `gap="4"` | 4px | 4px | 极小间距 |
| `gap="8"` | 8px | 8px | 小间距、标签间 |
| `gap="12"` | 12px | 12px | 卡片内元素间距 |
| `gap="16"` | 16px | 16px | 标准间距 |
| `gap="20"` | 20px | 20px | 中等间距 |
| `gap="24"` | 24px | 24px | 大间距 |
| `gap="32"` | 32px | 32px | 区块间距 |
| `gap="l"` | 24px | 24px | Large |
| `gap="xl"` | 32px | 32px | Extra Large |
| `padding="16"` | 16px | 16px | 卡片内边距 |

---

## ✅ 设计检查清单

制作 Figma 页面时，请确认：

- [ ] **分辨率正确**
  - Desktop: 1440×1024
  - Tablet: 1280×800
  - Mobile: 390×844

- [ ] **Grid 设置正确**
  - Desktop: 24列, 24px gutter, 80px margin
  - Tablet: 8列, 24px gutter, 64px margin
  - Mobile: 4列, 16px gutter, 16px margin

- [ ] **字体使用正确**
  - 使用 Inter 或 Noto Sans SC
  - 字重：Regular (400) 或 Semi Bold (600)
  - 行高：120%-160%
  - 字间距：-2% to 0.5%

- [ ] **字体层级清晰**
  - H1: heading-strong-xl (36px)
  - H2: heading-strong-xl (36px)
  - H3: heading-strong-l (28px)
  - Body: body-default-m (16px)
  - Small: body-default-s (14px)

- [ ] **颜色使用语义化**
  - 主要文字: neutral-strong
  - 次要文字: neutral-weak
  - 品牌文字: brand-weak

- [ ] **间距符合系统**
  - 使用 4 的倍数 (4, 8, 12, 16, 24, 32)
  - 卡片内边距: 16px
  - 区块间距: 32px

- [ ] **响应式考虑**
  - 字体大小适配不同设备
  - 布局列数适配：4→2→1

---

## 🔄 从 Figma 到代码的映射

| Figma 设置 | Once UI 代码 |
|-----------|-------------|
| Text Style: "Heading/Strong/XL" | `<Heading variant="heading-strong-xl">` |
| Font: Inter 36px Semi Bold | `variant="heading-strong-xl"` |
| Font: Inter 28px Semi Bold | `variant="heading-strong-l"` |
| Font: Inter 24px Semi Bold | `variant="heading-strong-m"` |
| Font: Inter 16px Regular | `variant="body-default-m"` |
| Color: #18181B (50%) | `onBackground="neutral-weak"` |
| Frame 1440px | `maxWidth="xl"` |
| Auto Layout Gap 24px | `gap="l"` |
| Padding 16px | `padding="16"` |
| Border Radius 12px | `radius="l"` |

---

## 📚 参考资源

- **Once UI 官方文档**: https://once-ui.com/docs
- **字体系统文档**: https://once-ui.com/docs/typography
- **设计 Tokens**: https://once-ui.com/docs/tokens
- **响应式设计**: https://once-ui.com/docs/responsive

---

## 🎉 完成！

现在你可以：
1. 在 Figma 中创建符合 Once UI 规范的设计
2. 使用正确的分辨率和 Grid 系统
3. 应用统一的字体层级
4. 确保设计可以准确转换为代码

**建议工作流程**：
1. 创建 Desktop Frame (1440×1024)
2. 设置 24 列 Grid
3. 应用 Text Styles
4. 完成 Desktop 设计
5. 复制到 Tablet/Mobile Frame
6. 调整响应式布局

祝设计愉快！ 🚀

