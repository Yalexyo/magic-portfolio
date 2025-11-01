import { getPosts } from "@/utils/utils";
import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
/* eslint-disable react/no-danger */
import { notFound } from "next/navigation";

// 案例元数据类型
type CaseMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  images: string[];
  tags?: string[];
  team?: Array<{
    name: string;
    role: string;
    avatar: string;
    linkedIn?: string;
  }>;
  demoLink?: string;
  link?: string;
};

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 从 MDX 文件读取案例数据
  const posts = getPosts(["src", "app", "designCases", "posts"]);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* 顶部导航 */}
        <Column
          fillWidth
          paddingX="l"
          paddingY="m"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          <Row gap="m" vertical="center" maxWidth="xl" style={{ margin: "0 auto" }}>
            <SmartLink
              href="/designCase"
              style={{ margin: 0, width: "fit-content", cursor: "pointer" }}
            >
              <Row gap="8" vertical="center">
                <Text variant="heading-strong-xl">←</Text>
              </Row>
            </SmartLink>
            <Heading as="h1" variant="heading-strong-xl">
              {metadata.title}
            </Heading>
          </Row>
        </Column>

        <Flex fillWidth horizontal="center" style={{ position: "relative" }}>
          {/* 主内容区 */}
          <Column fillWidth maxWidth="m" paddingX="l" paddingY="xl" gap="xl" style={{ flex: 1 }}>
            {/* 案例头部信息 */}
            <Column fillWidth gap="m">
              {/* 日期 */}
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {metadata.publishedAt}
              </Text>

              {/* 标签 */}
              {metadata.tags && metadata.tags.length > 0 && (
                <Row gap="12" wrap>
                  {metadata.tags.map((tag) => (
                    <Tag
                      key={tag}
                      size="m"
                      variant="neutral"
                      style={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "var(--neutral-border-medium)",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Row>
              )}

              {/* 描述 */}
              <Text variant="body-default-l" onBackground="neutral-strong">
                {metadata.summary}
              </Text>

              {/* 团队头像 */}
              {metadata.team && metadata.team.length > 0 && (
                <AvatarGroup
                  avatars={metadata.team.map((member) => ({
                    src: member.avatar,
                  }))}
                  size="m"
                  reverse
                />
              )}

              {/* Demo 链接 */}
              {metadata.demoLink && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={metadata.demoLink}
                >
                  <Text variant="label-strong-m">查看 Demo</Text>
                </SmartLink>
              )}

              {/* 项目链接 */}
              {metadata.link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={metadata.link}
                >
                  <Text variant="label-strong-m">查看项目</Text>
                </SmartLink>
              )}
            </Column>

            {/* 封面图 */}
            {metadata.images && metadata.images.length > 0 && (
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "var(--neutral-alpha-medium)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={metadata.images[0]}
                  alt={metadata.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            {/* Markdown 内容 - 简单文本渲染 */}
            <Column fillWidth gap="m" paddingY="l">
              <article
                className="mdx-content"
                dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }}
              />
            </Column>

            {/* 底部间距 */}
            <Column fillWidth paddingY="xl" />
          </Column>
        </Flex>
      </div>

      {/* 全局 CSS 样式 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mdx-content h2 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 32px;
            margin-bottom: 16px;
            color: var(--neutral-on-background-strong);
          }

          .mdx-content h3 {
            font-size: 20px;
            font-weight: 600;
            margin-top: 24px;
            margin-bottom: 12px;
            color: var(--neutral-on-background-strong);
          }

          .mdx-content p {
            margin-bottom: 16px;
            line-height: 1.7;
          }

          .mdx-content ul,
          .mdx-content ol {
            margin-bottom: 16px;
            padding-left: 24px;
          }

          .mdx-content li {
            margin-bottom: 8px;
          }

          .mdx-content strong {
            font-weight: 600;
            color: var(--neutral-on-background-strong);
          }

          .mdx-content code {
            background-color: var(--neutral-alpha-weak);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 14px;
          }

          .mdx-content pre {
            background-color: var(--neutral-alpha-weak);
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 16px;
          }

          .mdx-content pre code {
            background-color: transparent;
            padding: 0;
          }

          .mdx-content a {
            color: var(--brand-on-background-strong);
            text-decoration: underline;
          }

          .mdx-content a:hover {
            opacity: 0.8;
          }

          .mdx-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 16px 0;
          }
        `,
        }}
      />
    </>
  );
}

// 简单的 Markdown 转 HTML 函数
function convertMarkdownToHTML(markdown: string): string {
  let html = markdown;

  // 图片（需要在标题之前处理，避免被标题规则影响）
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // 标题
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // 粗体
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // 列表项
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");

  // 将 li 包裹在 ul 中
  const lines = html.split("\n");
  const result: string[] = [];
  let inList = false;

  for (const line of lines) {
    if (line.trim().startsWith("<li>")) {
      if (!inList) {
        result.push("<ul>");
        inList = true;
      }
      result.push(line);
    } else {
      if (inList) {
        result.push("</ul>");
        inList = false;
      }
      result.push(line);
    }
  }

  if (inList) {
    result.push("</ul>");
  }

  html = result.join("\n");

  // 段落 - 按空行分段
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed && !trimmed.match(/^<[hul]/)) {
        return `<p>${trimmed}</p>`;
      }
      return block;
    })
    .join("\n\n");

  // 清理空段落
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p>\s*<\/p>/g, "");

  return html;
}

// 生成静态参数
export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "designCases", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
