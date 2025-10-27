# 如何更新作品集内容

本指南将帮助你自定义和替换作品集中的项目内容。

## 📁 作品集文件结构

```
src/app/work/projects/
├── building-once-ui-a-customizable-design-system.mdx
├── automate-design-handovers-with-a-figma-to-code-pipeline.mdx
└── simple-portfolio-builder.mdx
```

## 🎨 创建一个新项目

### 步骤 1: 创建新的 MDX 文件

在 `src/app/work/projects/` 目录下创建一个新的 `.mdx` 文件，文件名会作为 URL slug。

```bash
# 例如：我的项目名为 "web-design-portfolio"
# 文件名：web-design-portfolio.mdx
```

**文件命名规范：**
- 使用小写字母
- 使用连字符 `-` 分隔单词
- 例如：`my-web-portfolio.mdx`

### 步骤 2: 添加项目元数据

在文件开头添加 front matter（前置元数据）：

```mdx
---
title: "你的项目标题"
publishedAt: "2024-01-15"  # 发布日期（YYYY-MM-DD 格式）
summary: "项目的简短描述，会显示在项目卡片上"
images:
  - "/images/projects/my-project/cover-01.jpg"
  - "/images/projects/my-project/cover-02.jpg"
  - "/images/projects/my-project/cover-03.jpg"
team:
  - name: "你的名字"
    role: "你的角色"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/yourprofile"
  - name: "团队成员"
    role: "角色"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/teammate"
link: "https://myproject.com"  # 可选：项目的外部链接
---

## 项目概述

这里写你的项目描述...

## 主要功能

- **功能 1**: 描述
- **功能 2**: 描述
- **功能 3**: 描述

## 使用的技术

- **Next.js**: 用于构建
- **React**: 用于 UI

## 挑战和学习

描述在项目中遇到的挑战和学到的东西...

## 成果

描述项目的成果和影响...
```

### 元数据字段说明

| 字段 | 必需 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 项目标题 | `"我的网站项目"` |
| `publishedAt` | ✅ | 发布日期 | `"2024-01-15"` |
| `summary` | ✅ | 简短描述 | `"一个响应式设计项目"` |
| `images` | ✅ | 项目图片数组 | `["/images/projects/..."]` |
| `team` | ❌ | 团队成员 | `[...]` |
| `link` | ❌ | 项目外部链接 | `"https://myproject.com"` |

### 图片要求

1. **图片尺寸**：建议使用 16:9 的横向图片
2. **图片位置**：放在 `public/images/projects/your-project/` 目录下
3. **命名规范**：使用有意义的名称，如 `cover-01.jpg`, `image-01.jpg`

**实际项目目录结构：**
```
public/images/projects/
└── project-01/              ← 这就是当前示例项目使用的目录
    ├── avatar-01.jpg        ← 团队成员头像
    ├── cover-01.jpg         ← 项目封面图
    ├── cover-02.jpg
    ├── cover-03.jpg
    ├── cover-04.jpg
    ├── image-01.jpg         ← 项目细节图
    ├── image-02.jpg
    ├── image-03.jpg
    └── video-01.mp4         ← 视频文件
```

**在你的项目中：**
```
public/images/projects/
└── 你的项目名称/            ← 新建文件夹，命名用小写和连字符
    ├── cover-01.jpg         ← 你的封面图
    ├── cover-02.jpg
    └── cover-03.jpg
```

### 步骤 3: 编写项目内容

使用 Markdown 格式编写项目详细内容：

```mdx
## 概述

项目的主要介绍...

## 主要功能

- **功能名称**: 详细描述
- **另一个功能**: 详细描述

## 使用的技术

列出使用的技术和框架...

## 挑战和学习

项目过程中遇到的挑战...

## 成果

项目的最终成果和影响...
```

## 🔄 更新现有项目

### 替换项目内容

1. 找到要修改的 `.mdx` 文件
2. 修改 front matter 中的元数据
3. 修改 Markdown 内容
4. 替换项目图片（如果需要）

### 删除项目

直接删除对应的 `.mdx` 文件即可，它们会自动从作品列表中移除。

### 修改项目顺序

项目按 `publishedAt` 日期降序排列，修改日期可以改变显示顺序。

## 🖼️ 更新项目图片

### 替换现有项目的图片

1. **准备新图片**
   - 建议尺寸：1920x1080px（16:9）
   - 格式：JPG、PNG、WebP
   - 优化图片大小以提升加载速度

2. **替换图片文件**

   **选项 A：替换现有图片（保持文件名不变）**
   ```bash
   # 直接替换，保持相同的文件名
   # 例如：替换 public/images/projects/project-01/cover-01.jpg
   ```

   **选项 B：使用新图片（需要更新 MDX）**
   ```bash
   # 1. 将新图片放入对应项目的目录
   # 例如：放入 public/images/projects/project-01/
   # 重命名为：cover-01.jpg, cover-02.jpg 等
   ```

3. **更新 MDX 文件中的图片路径**
   
   打开对应的 `.mdx` 文件，修改 `images` 数组：
   ```mdx
   ---
   images:
     - "/images/projects/project-01/cover-01.jpg"  ← 修改这里的路径
     - "/images/projects/project-01/cover-02.jpg"
     - "/images/projects/project-01/cover-03.jpg"
   ---
   ```
   
   ⚠️ **注意**：路径以 `/images/` 开头，因为在 `public/` 目录下的文件会自动映射到网站根目录

### 📍 图片路径说明

假设你的图片在 `public/images/projects/my-project/cover.jpg`，  
在 MDX 中应该写为：`/images/projects/my-project/cover.jpg`  
（去掉 `public`，保留 `/images/`）

## 📝 内容编写建议

### 1. 项目标题（title）
- 简洁明了
- 突出项目核心
- 5-10 个字为佳

### 2. 项目摘要（summary）
- 1-2 句话概括项目
- 突出重点成就
- 吸引用户点击查看详情

### 3. 项目内容
- **概述**：项目背景和目标
- **主要功能**：核心功能点
- **使用的技术**：技术栈
- **挑战和学习**：遇到的问题和解决方案
- **成果**：最终效果和影响

### 4. 团队信息（team）
```mdx
team:
  - name: "名字"
    role: "角色（如：设计师、开发者）"
    avatar: "/images/avatar.jpg"
    linkedIn: "LinkedIn 链接"
```

## 🎯 完整示例

创建一个完整的项目示例：

```mdx
---
title: "电子商务平台设计"
publishedAt: "2024-12-01"
summary: "为中小企业打造的全功能电商平台，提升用户体验和销售转化率"
images:
  - "/images/projects/ecommerce-platform/cover-01.jpg"
  - "/images/projects/ecommerce-platform/cover-02.jpg"
  - "/images/projects/ecommerce-platform/cover-03.jpg"
team:
  - name: "张三"
    role: "UI/UX 设计师"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/zhangsan"
  - name: "李四"
    role: "前端工程师"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/lisi"
link: "https://example-ecommerce.com"
---

## 概述

这是一个为中小企业量身定制的电子商务平台项目，旨在提供流畅的用户体验和高转化率的购物流程。

## 主要功能

- **响应式设计**: 适配手机、平板和桌面端，确保所有设备上的一致体验
- **智能搜索**: 支持模糊搜索、分类过滤和搜索建议
- **购物车优化**: 简化结账流程，降低购物车放弃率
- **用户中心**: 订单管理、个人设置和收藏功能
- **商家后台**: 完整的产品管理、订单处理和数据分析功能

## 使用的技术

- **Next.js**: 用于构建高性能的前端应用
- **React**: 用于创建交互式 UI 组件
- **TypeScript**: 提供类型安全和更好的开发体验
- **Tailwind CSS**: 用于快速样式开发
- **MongoDB**: 作为数据库存储

## 设计挑战

主要挑战是如何在大量商品信息中保持界面的清晰和导航的直观性。通过卡片式布局和清晰的信息层级解决了这个问题。

## 成果

- 用户注册率提升 35%
- 购物车转化率提升 42%
- 页面加载速度提升 60%
- 用户满意度评分 4.8/5.0
```

## 🚀 更新后的部署

修改完成后，推送到 GitHub：

```bash
git add .
git commit -m "更新作品集内容"
git push origin main
```

如果已经配置了 Vercel 或 Cloudflare Pages，修改会自动部署。

## 💡 提示

1. **预览修改**：在本地运行 `npm run dev` 查看效果
2. **图片优化**：使用工具如 [TinyPNG](https://tinypng.com) 压缩图片
3. **内容质量**：确保内容清晰、专业，展示你的技能和经验
4. **定期更新**：保持作品集内容的新鲜度，展示最新的项目

## ❓ 常见问题

**Q: 如何添加视频？**
A: 在 `images` 数组中添加 `.mp4` 文件路径：
```mdx
images:
  - "/images/projects/my-project/video.mp4"
```

**Q: 如何隐藏某个项目？**
A: 删除对应的 `.mdx` 文件或暂时移动到其他目录。

**Q: 如何添加外部链接？**
A: 可以在 front matter 中添加 `link` 字段，或在内容中使用 Markdown 链接。

**Q: 最多可以添加多少个项目？**
A: 没有限制，建议保持精选（5-10 个最有代表性的项目）。

## 📚 参考资源

- [MDX 文档](https://mdxjs.com/)
- [Markdown 语法](https://www.markdownguide.org/)
- 查看现有项目文件了解格式

