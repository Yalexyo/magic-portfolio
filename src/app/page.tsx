import { HomeAnchorNav } from "@/components";
import { baseURL, person } from "@/resources";
import {
  Avatar,
  Button,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Meta,
  RevealFx,
  Row,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: "为什么选我们 - 专业的设计与开发团队",
    description: "认识我们的开发和设计团队，了解我们的服务和作品",
    baseURL: baseURL,
    path: "/",
  });
}

// 团队成员数据类型
interface TeamMember {
  avatar: string;
  name: string;
  title: string;
  tags: string[];
}

export default function Home() {
  // 开发团队数据
  const devTeam: TeamMember[] = [
    {
      avatar: "/images/avatar.jpg",
      name: "张三",
      title: "Frontend",
      tags: ["React", "Next.js"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "李四",
      title: "Backend",
      tags: ["Node.js", "API"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "王五",
      title: "Full Stack",
      tags: ["TypeScript", "DB"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "赵六",
      title: "DevOps",
      tags: ["Docker", "CI/CD"],
    },
  ];

  // 设计团队数据
  const designTeam: TeamMember[] = [
    {
      avatar: "/images/avatar.jpg",
      name: "孙七",
      title: "UI Designer",
      tags: ["Figma", "Design"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "周八",
      title: "UX Designer",
      tags: ["Research", "Flow"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "吴九",
      title: "Product",
      tags: ["Prototype", "Test"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "郑十",
      title: "Graphic",
      tags: ["Brand", "Visual"],
    },
  ];

  // 照片墙：两行，所有照片高度一致
  const photoHeight = "240px"; // 统一高度，可根据视觉再微调
  const photoRow1 = [
    { id: "r1-1", src: "/images/gallery/horizontal-1.jpg" },
    { id: "r1-2", src: "/images/gallery/horizontal-2.jpg" },
    { id: "r1-3", src: "/images/gallery/vertical-1.jpg" },
    { id: "r1-4", src: "/images/gallery/horizontal-3.jpg" },
  ];

  const photoRow2 = [
    { id: "r2-1", src: "/images/gallery/horizontal-4.jpg" },
    { id: "r2-2", src: "/images/gallery/vertical-2.jpg" },
    { id: "r2-3", src: "/images/gallery/horizontal-2.jpg" },
    { id: "r2-4", src: "/images/gallery/vertical-3.jpg" },
  ];

  // 锚点导航项
  const anchorItems = [
    { id: "about-us", label: "关于我们" },
    { id: "team-intro", label: "团队介绍" },
  ];

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title="为什么选我们"
        description="专业的设计与开发团队"
      />

      {/* 左侧锚点导航 */}
      <HomeAnchorNav items={anchorItems} />

      {/* 关于我们区块 */}
      <Column id="about-us" fillWidth maxWidth="xl" gap="l" paddingY="l">
        <RevealFx translateY="8" delay={0.4}>
          <Row fillWidth paddingX="l">
            <Heading as="h2" variant="heading-strong-xl">
              关于我们
            </Heading>
          </Row>
        </RevealFx>

        {/* 描述文字 */}
        <RevealFx translateY="8" delay={0.5}>
          <Column fillWidth gap="l" paddingX="l">
            <Text variant="body-default-l" onBackground="neutral-strong">
              在北上科技,我们不仅仅是一个团队,我们是由创新者、梦想家和问题解决者组成的集体,致力于将想法转化为现实。
              凭借对技术的热情和对卓越的承诺,我们努力提供前沿的解决方案,从而增强客户的能力并塑造未来。
            </Text>
          </Column>
        </RevealFx>

        {/* 图片展示区 - 两行照片墙，每行底部对齐 */}
        <RevealFx translateY="12" delay={0.6}>
          <Column paddingX="l" fillWidth gap="m">
            {/* 第一行 */}
            <Row fillWidth gap="m" style={{ alignItems: "flex-end" }}>
              {photoRow1.map((item) => (
                <Link
                  key={item.id}
                  href="/teamGallery"
                  style={{
                    flex: "1",
                    minWidth: 0,
                    height: photoHeight,
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    display: "block",
                  }}
                  className="photo-gallery-link"
                />
              ))}
            </Row>

            {/* 第二行 */}
            <Row fillWidth gap="m" style={{ alignItems: "flex-end" }}>
              {photoRow2.map((item) => (
                <Link
                  key={item.id}
                  href="/teamGallery"
                  style={{
                    flex: "1",
                    minWidth: 0,
                    height: photoHeight,
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    display: "block",
                  }}
                  className="photo-gallery-link"
                />
              ))}
            </Row>
          </Column>
        </RevealFx>
      </Column>

      {/* 团队介绍区块 */}
      <Column id="team-intro" fillWidth maxWidth="xl" gap="l" paddingY="l" paddingX="m">
        <RevealFx translateY="8" delay={0.7}>
          <Heading as="h2" variant="heading-strong-xl">
            团队介绍
          </Heading>
        </RevealFx>

        {/* 开发团队和设计团队并排布局 */}
        <Grid fillWidth columns="2" s={{ columns: 1 }} gap="l">
          {/* 开发团队 */}
          <Column
            fillWidth
            gap="l"
            padding="l"
            radius="l"
            background="brand-alpha-weak"
            style={{
              background:
                "linear-gradient(to bottom, var(--page-background) 0%, var(--brand-alpha-weak) 100%)",
            }}
          >
            <RevealFx translateY="8" delay={0.8}>
              <Heading as="h3" variant="heading-strong-l">
                开发团队
              </Heading>
            </RevealFx>

            <RevealFx translateY="8" delay={0.9}>
              <Text variant="body-default-m" onBackground="neutral-strong">
                我们的开发团队由来自世界各地的顶尖工程师和程序员组成。他们精通各种编程语言和开发框架,对技术充满热情,致力于构建稳定、高效和创新的软件解决方案。
              </Text>
            </RevealFx>

            <RevealFx translateY="12" delay={1.0}>
              <Grid columns="3" s={{ columns: 1 }} gap="l" fillWidth>
                {devTeam.map((member, index) => (
                  <RevealFx
                    key={`dev-${member.name}-${index}`}
                    translateY="8"
                    delay={1.1 + index * 0.1}
                  >
                    <Column fillWidth gap="4" horizontal="center">
                      {/* 圆形头像 */}
                      <Avatar
                        src={member.avatar}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "200px",
                        }}
                      />

                      {/* 名字和 Title */}
                      <Row horizontal="center" vertical="center" gap="8">
                        <Text variant="label-strong-m" onBackground="neutral-strong">
                          {member.name}
                        </Text>
                        <Text variant="label-default-s" onBackground="neutral-medium">
                          {member.title}
                        </Text>
                      </Row>

                      {/* 标签 */}
                      <Row gap="8" wrap horizontal="center">
                        {member.tags.map((tag) => (
                          <Tag
                            key={tag}
                            size="s"
                            variant="neutral"
                            style={{
                              borderWidth: "0.2px",
                              borderStyle: "solid",
                              borderColor: "var(--neutral-border-medium)",
                              paddingLeft: "var(--static-space-8)",
                              paddingRight: "var(--static-space-8)",
                              paddingTop: "var(--static-space-4)",
                              paddingBottom: "var(--static-space-4)",
                            }}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </Row>
                    </Column>
                  </RevealFx>
                ))}
              </Grid>
            </RevealFx>
          </Column>

          {/* 设计团队 */}
          <Column
            fillWidth
            gap="l"
            padding="l"
            radius="l"
            background="brand-alpha-weak"
            style={{
              background:
                "linear-gradient(to bottom, var(--page-background) 0%, var(--brand-alpha-weak) 100%)",
            }}
          >
            <RevealFx translateY="8" delay={1.5}>
              <Heading as="h3" variant="heading-strong-l">
                设计团队
              </Heading>
            </RevealFx>

            <RevealFx translateY="8" delay={1.6}>
              <Text variant="body-default-m" onBackground="neutral-strong">
                我们的设计团队是一群富有创造力和经验丰富的设计师。他们具有卓越的审美能力和用户体验洞察力,致力于为用户创造美观、直观和令人愉悦的界面。
              </Text>
            </RevealFx>

            <RevealFx translateY="12" delay={1.7}>
              <Grid columns="3" s={{ columns: 1 }} gap="l" fillWidth>
                {designTeam.map((member, index) => (
                  <RevealFx
                    key={`design-${member.name}-${index}`}
                    translateY="8"
                    delay={1.8 + index * 0.1}
                  >
                    <Column fillWidth gap="4" horizontal="center">
                      {/* 圆形头像 */}
                      <Avatar
                        src={member.avatar}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "200px",
                        }}
                      />

                      {/* 名字和 Title */}
                      <Row horizontal="center" vertical="center" gap="8">
                        <Text variant="label-strong-m" onBackground="neutral-strong">
                          {member.name}
                        </Text>
                        <Text variant="label-default-s" onBackground="neutral-medium">
                          {member.title}
                        </Text>
                      </Row>

                      {/* 标签 */}
                      <Row gap="8" wrap horizontal="center">
                        {member.tags.map((tag) => (
                          <Tag
                            key={tag}
                            size="s"
                            variant="neutral"
                            style={{
                              borderWidth: "0.2px",
                              borderStyle: "solid",
                              borderColor: "var(--neutral-border-medium)",
                              paddingLeft: "var(--static-space-8)",
                              paddingRight: "var(--static-space-8)",
                              paddingTop: "var(--static-space-4)",
                              paddingBottom: "var(--static-space-4)",
                            }}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </Row>
                    </Column>
                  </RevealFx>
                ))}
              </Grid>
            </RevealFx>
          </Column>
        </Grid>
      </Column>

      {/* 底部间距 */}
      <Column fillWidth paddingY="xl" />
      
      {/* 添加全局 CSS 样式用于 hover 效果 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .photo-gallery-link:hover {
              transform: scale(1.02) !important;
              opacity: 0.9 !important;
            }
          `,
        }}
      />
    </Column>
  );
}
