"use client";

import { baseURL } from "@/resources";
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
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// 模拟案例数据 - 后续可以从 MDX 或 API 获取
const caseData = {
  title: "星环科技数据平台",
  date: "2026.02.02",
  tags: ["大数据", "云计算"],
  description:
    "星环科技数据平台通过构建企业级大数据基座，提供一站式数据挖掘开发、治理、分析与运营能力，助力企业实现数字化转型。该平台拥有一套通用的闭环数据管理流程，首先解决数据准确性的痛点，为企业业务的数据处理需求。",
  team: [
    { src: "/images/avatar.jpg" },
    { src: "/images/dev-cases/project-01/avatar-01.jpg" },
    { src: "/images/avatar.jpg" },
  ],
  demoLink: "https://once-ui.com/blocks/dashboard",
  coverImage: "/images/design-cases/placeholder-1.jpg",
  sections: [
    {
      id: "section-1",
      title: "段落标题",
      content: [
        "在星环科技数据平台的卓越性能背后，是其精密的架构设计和强大的技术支持。该平台采用了分布式计算框架，能够将海量数据分散到多个计算节点上进行并行处理，从而显著提高了数据处理的速度和效率。同时，平台还支持多种数据存储格式和计算模型，能够灵活适应不同行业和应用场景的需求。通过星环科技数据平台，企业可以更加高效地挖掘数据的价值，为业务决策提供有力支持。",
        "星环科技数据平台还注重数据的安全性和可靠性。平台提供了完善的数据权限管理机制，能够对不同用户和角色进行精细化的权限控制，确保数据的安全性。同时，平台还支持数据备份和恢复功能，能够有效地防止数据丢失和损坏。通过星环科技数据平台，企业可以更加放心地管理和使用数据，为业务发展保驾护航。",
      ],
      images: ["/images/placeholder-1.jpg", "/images/placeholder-2.jpg"],
    },
    {
      id: "section-2",
      title: "段落标题",
      content: [
        "在星环科技数据平台的卓越性能背后，是其精密的架构设计和强大的技术支持。该平台采用了分布式计算框架，能够将海量数据分散到多个计算节点上进行并行处理，从而显著提高了数据处理的速度和效率。同时，平台还支持多种数据存储格式和计算模型，能够灵活适应不同行业和应用场景的需求。通过星环科技数据平台，企业可以更加高效地挖掘数据的价值，为业务决策提供有力支持。",
        "星环科技数据平台还注重数据的安全性和可靠性。平台提供了完善的数据权限管理机制，能够对不同用户和角色进行精细化的权限控制，确保数据的安全性。同时，平台还支持数据备份和恢复功能，能够有效地防止数据丢失和损坏。通过星环科技数据平台，企业可以更加放心地管理和使用数据，为业务发展保驾护航。",
      ],
      images: ["/images/placeholder-3.jpg", "/images/placeholder-4.jpg"],
    },
    {
      id: "section-3",
      title: "段落标题",
      content: [
        "在星环科技数据平台的卓越性能背后，是其精密的架构设计和强大的技术支持。该平台采用了分布式计算框架，能够将海量数据分散到多个计算节点上进行并行处理，从而显著提高了数据处理的速度和效率。",
      ],
      images: ["/images/placeholder-5.jpg", "/images/placeholder-6.jpg"],
    },
    {
      id: "section-4",
      title: "段落标题",
      content: [
        "星环科技数据平台还注重数据的安全性和可靠性。平台提供了完善的数据权限管理机制，能够对不同用户和角色进行精细化的权限控制，确保数据的安全性。",
      ],
      images: [],
    },
  ],
};

export default function CaseStudy() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("section-1");

  // 监听滚动，更新当前激活的章节
  useEffect(() => {
    const handleScroll = () => {
      const sections = caseData.sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: section.id,
              top: rect.top,
              bottom: rect.bottom,
            };
          }
          return null;
        })
        .filter(Boolean);

      // 检查是否滚动到页面底部
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        // 如果在底部，高亮最后一个章节
        setActiveSection(caseData.sections[caseData.sections.length - 1].id);
      } else {
        // 找到当前在视窗中的章节
        const current = sections.find(
          (section) => section && section.top <= 200 && section.bottom > 200,
        );

        if (current) {
          setActiveSection(current.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 滚动到指定章节
  const scrollToSection = (sectionId: string) => {
    // 立即更新激活状态
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      // 如果是最后一个章节，滚动到页面底部
      const isLastSection = sectionId === caseData.sections[caseData.sections.length - 1].id;

      if (isLastSection) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } else {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 顶部导航 */}
      <Column
        fillWidth
        paddingX="l"
        paddingY="m"
        background="page"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Row gap="m" vertical="center" maxWidth="xl" style={{ margin: "0 auto" }}>
          <SmartLink
            href="/devCase"
            style={{ margin: 0, width: "fit-content", cursor: "pointer" }}
          >
            <Row gap="8" vertical="center">
              <Text variant="heading-strong-xl">←</Text>
            </Row>
          </SmartLink>
          <Heading as="h1" variant="heading-strong-xl">
            {caseData.title}
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
              {caseData.date}
            </Text>

            {/* 标签 */}
            <Row gap="12" wrap>
              {caseData.tags.map((tag) => (
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

            {/* 描述 */}
            <Text variant="body-default-l" onBackground="neutral-strong">
              {caseData.description}
            </Text>

            {/* 团队头像 */}
            {caseData.team.length > 0 && <AvatarGroup avatars={caseData.team} size="m" reverse />}

            {/* Demo 链接 */}
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={caseData.demoLink}
            >
              <Text variant="label-strong-m">Demo 2</Text>
            </SmartLink>
          </Column>

          {/* 封面图 */}
          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundColor: "var(--neutral-alpha-medium)",
              borderRadius: "8px",
            }}
          />

          {/* 内容段落 */}
          {caseData.sections.map((section, idx) => (
            <Column key={section.id} id={section.id} fillWidth gap="m" paddingY="l">
              {/* 段落标题 */}
              <Heading as="h2" variant="heading-strong-l">
                {section.title}
              </Heading>

              {/* 第一段文字 */}
              {section.content[0] && (
                <Text variant="body-default-m" onBackground="neutral-strong">
                  {section.content[0]}
                </Text>
              )}

              {/* 双图并排 */}
              {section.images.length >= 2 && (
                <Row gap="20" fillWidth>
                  <div
                    style={{
                      flex: 1,
                      height: "250px",
                      backgroundColor: "var(--neutral-alpha-medium)",
                      borderRadius: "8px",
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      height: "250px",
                      backgroundColor: "var(--neutral-alpha-medium)",
                      borderRadius: "8px",
                    }}
                  />
                </Row>
              )}

              {/* 第二段文字 */}
              {section.content[1] && (
                <Text variant="body-default-m" onBackground="neutral-strong">
                  {section.content[1]}
                </Text>
              )}
            </Column>
          ))}

          {/* 底部间距 */}
          <Column fillWidth paddingY="xl" />
        </Column>

        {/* 右侧固定导航 */}
        <Column
          gap="l"
          style={{
            position: "fixed",
            right: "80px",
            top: "150px",
            width: "120px",
          }}
        >
          {/* 进度指示器 */}
          <div
            style={{
              position: "absolute",
              left: "-30px",
              top: "8px",
              width: "4px",
              height: `${caseData.sections.length * 50}px`,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {caseData.sections.map((section, idx) => (
              <div
                key={section.id}
                style={{
                  flex: 1,
                  backgroundColor: "var(--neutral-border-strong)",
                  opacity: activeSection === section.id ? 1 : 0.2,
                  transition: "opacity 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* 章节链接 */}
          {caseData.sections.map((section, idx) => (
            <Text
              key={section.id}
              variant="heading-default-l"
              onBackground={activeSection === section.id ? "neutral-strong" : "neutral-weak"}
              style={{
                cursor: "pointer",
                fontWeight: activeSection === section.id ? 700 : 400,
                transition: "all 0.3s ease",
              }}
              onClick={() => scrollToSection(section.id)}
            >
              Section {idx + 1}
            </Text>
          ))}
        </Column>
      </Flex>
    </div>
  );
}
