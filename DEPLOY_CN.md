# 国内访问部署指南

本项目已配置为支持多种国内可直接访问的部署平台。

## ✅ 已配置的平台

### 1. GitHub Pages（免费，国内可访问）

**特点：**
- ✅ 国内可直接访问（速度：快）
- ✅ 完全免费
- ✅ 支持自定义域名
- ✅ 自动部署

**使用方法：**

1. 在 GitHub 仓库设置中启用 Pages：
   - 访问：https://github.com/Yalexyo/magic-portfolio/settings/pages
   - Source: 选择 "GitHub Actions"

2. 推送代码到 GitHub：
```bash
git add .
git commit -m "启用静态导出"
git push origin main
```

3. GitHub Actions 会自动构建和部署
4. 访问地址：`https://yalexyo.github.io/magic-portfolio/`

### 2. Cloudflare Pages（推荐，国内可访问）

**特点：**
- ✅ 国内可直接访问（速度：非常快）
- ✅ 全球 CDN 加速
- ✅ 完全免费
- ✅ 支持自定义域名
- ✅ 自动部署

**使用方法：**

1. 访问 Cloudflare 仪表盘：https://dash.cloudflare.com
2. 点击 "Workers & Pages" → "Create application" → "Pages"
3. 连接你的 GitHub 仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: `20`
5. 点击 "Save and Deploy"
6. 自动部署完成！

### 3. Vercel（需 VPN，已有配置）

当前已部署到 Vercel，但需要 VPN 访问。

## 🔄 本地测试静态导出

在部署之前，可以在本地测试：

```bash
npm run build
```

构建完成后，会生成 `out` 文件夹，可以用本地服务器测试：

```bash
npx serve out
```

## 📝 注意事项

- 静态导出后，不支持服务端功能（如 API routes）
- 图片需要设置为 `unoptimized: true`
- 需要添加 `trailingSlash: true` 用于 GitHub Pages

## 🎯 推荐方案

**最佳选择：Cloudflare Pages**
- 国内访问速度快
- 全球 CDN 覆盖
- 完全免费
- 自动部署

**备选：GitHub Pages**
- 免费稳定
- 配置简单
- 集成 GitHub

