# 团队展示组件使用指南

## 📦 已创建的组件

根据 Figma 设计和 Once UI 组件映射表，我已经创建了以下组件：

### 1. TeamMemberCard 组件
**文件位置**: `src/components/TeamMemberCard.tsx`

**Figma → Once UI 映射**:
- Avatar / Profile Pic → `@Avatar` (圆形头像)
- Container / Card → `@Card` (卡片容器)
- Text → `@Text` (名字和职位)
- Tag / Chip → `@Tag` (技能标签)

**Props**:
```typescript
interface TeamMemberCardProps {
  avatar?: string;        // 头像图片路径
  name: string;          // 成员名字
  title: string;         // 职位 Title
  tags?: string[];       // 标签数组 (如: ["React", "TypeScript"])
  href?: string;         // 可选的链接
}
```

**使用示例**:
```tsx
<TeamMemberCard
  avatar="/images/avatar.jpg"
  name="张三"
  title="Frontend Developer"
  tags={["React", "Next.js", "TypeScript"]}
/>
```

---

### 2. TeamSection 组件
**文件位置**: `src/components/TeamSection.tsx`

**Figma → Once UI 映射**:
- Frame / Section → `@Column` / `@Flex` (整体布局)
- Nav Bar / Header → `@Row` + `@Heading` + `@Text` (顶部导航)
- Button / Primary CTA → `@Button` (社交媒体按钮)
- Grid of Cards → `@Grid` (团队成员网格)
- Progress / Loading → `@Line` (占位符和分隔线)

**Props**:
```typescript
interface TeamMember {
  avatar: string;
  name: string;
  title: string;
  tags: string[];
  href?: string;
}

interface TeamSectionProps {
  devTeam?: TeamMember[];      // 开发团队成员数组
  designTeam?: TeamMember[];   // 设计团队成员数组
}
```

**使用示例**:
```tsx
<TeamSection
  devTeam={[
    {
      avatar: "/images/dev1.jpg",
      name: "张三",
      title: "Frontend Dev",
      tags: ["React", "Next.js"]
    },
    // ... 更多成员
  ]}
  designTeam={[
    {
      avatar: "/images/designer1.jpg",
      name: "李四",
      title: "UI Designer",
      tags: ["Figma", "Design System"]
    },
    // ... 更多成员
  ]}
/>
```

---

## 🎨 设计还原度

根据 Figma 设计，组件包含以下元素：

### ✅ 已实现的功能
1. **顶部导航栏**: "为什么选我们"、"设计案例"、"开发案例"、"个人作品集Gallery"
2. **总览区域**: 包含占位符和轮播分页指示器
3. **社交媒体按钮**: 微信、小红书、淘宝（圆角按钮样式）
4. **文本描述区域**: 使用 Line 组件作为占位符
5. **团队介绍区块**:
   - 开发团队 / 设计团队分栏
   - 4列网格布局（响应式）
   - 团队成员卡片：圆形头像 + 姓名 + Title + 标签

### 📱 响应式设计
- **桌面端**: 4列网格
- **平板端**: 2列网格
- **移动端**: 1列堆叠

---

## 🚀 快速开始

### 步骤 1: 访问演示页面
项目已创建演示页面：`src/app/team/page.tsx`

运行项目后访问：`http://localhost:3000/team`

### 步骤 2: 自定义数据
在页面中修改团队成员数据：

```tsx
const devTeam = [
  {
    avatar: "/images/your-avatar.jpg",  // 替换为真实头像
    name: "你的名字",
    title: "你的职位",
    tags: ["技能1", "技能2"],
  },
];
```

### 步骤 3: 集成到现有页面
在任何页面中导入并使用：

```tsx
import { TeamSection } from "@/components";

export default function YourPage() {
  return <TeamSection devTeam={devTeam} designTeam={designTeam} />;
}
```

---

## 🎯 Figma → Once UI 组件映射对照

| Figma 设计元素 | Once UI 组件 | 在项目中的使用 |
|--------------|-------------|--------------|
| 顶部导航文字 | `@Row` + `@Heading` + `@Text` | TeamSection 顶部 |
| 轮播图占位 | `@Column` + `background` | 总览区域 |
| 分页指示器 | `@Row` + `<div>` (自定义) | 轮播下方 |
| 社交媒体按钮 | `@Button` (radius="9999px") | 微信/小红书/淘宝 |
| 文本占位符 | `@Line` | 描述区域 |
| 团队网格 | `@Grid` (columns="4") | 成员卡片布局 |
| 成员卡片 | `@Card` | TeamMemberCard |
| 圆形头像 | `@Avatar` | 成员头像 |
| 标签 | `@Tag` | 技能标签 |
| 区块背景 | `@Column` (background="page") | 团队介绍背景 |

---

## 💡 自定义建议

### 1. 添加轮播功能
目前轮播区域是占位符，你可以使用 Once UI 的 `@Carousel` 组件：

```tsx
import { Carousel } from "@once-ui-system/core";

<Carousel
  items={[
    { slide: "/images/slide1.jpg", alt: "Slide 1" },
    { slide: "/images/slide2.jpg", alt: "Slide 2" },
  ]}
/>
```

### 2. 自定义字体大小
Figma 设计中使用了超大字号，可以在组件中添加自定义样式：

```tsx
<Heading 
  variant="display-strong-xl"
  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
>
  为什么选我们
</Heading>
```

### 3. 添加动画效果
使用 Once UI 的动画组件：

```tsx
import { RevealFx } from "@once-ui-system/core";

<RevealFx>
  <TeamMemberCard {...props} />
</RevealFx>
```

---

## 📚 相关文档

- [Once UI 官方文档](https://once-ui.com/docs)
- [Grid 组件文档](https://once-ui.com/docs/grid)
- [Card 组件文档](https://once-ui.com/docs/card)
- [Avatar 组件文档](https://once-ui.com/docs/avatar)
- [Button 组件文档](https://once-ui.com/docs/button)

---

## ✨ 组件特点

1. **完全使用 Once UI 组件** - 无需额外 CSS
2. **响应式设计** - 自动适配移动端、平板、桌面
3. **类型安全** - 完整的 TypeScript 类型定义
4. **可复用** - 组件可在项目任何地方使用
5. **符合项目规范** - 遵循现有代码风格和模式

---

## 🎉 完成！

现在你可以：
1. 运行 `npm run dev` 启动项目
2. 访问 `/team` 查看效果
3. 根据需要自定义数据和样式
4. 在其他页面中复用这些组件

祝开发愉快！ 🚀

