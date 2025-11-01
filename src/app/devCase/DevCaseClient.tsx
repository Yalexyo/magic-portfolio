"use client";

import { HomeAnchorNav } from "@/components";
import {
  AvatarGroup,
  Column,
  Heading,
  RevealFx,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

// 开发案例数据类型
interface DevCase {
  slug: string;
  title: string;
  description: string;
  date: string;
  month: string;
  coverImage: string;
  tags: string[];
  caseLink: string;
  demoLink: string;
  projectLink: string;
  team?: Array<{ src: string }>;
}

interface DevCaseClientProps {
  groupedByMonth: { [key: string]: DevCase[] };
  timelineItems: Array<{ id: string; label: string }>;
}

export default function DevCaseClient({ groupedByMonth, timelineItems }: DevCaseClientProps) {
  return (
    <>
      {/* 左侧时间轴导航 */}
      <HomeAnchorNav items={timelineItems} />

      <Column fillWidth maxWidth="xl" paddingY="l" paddingX="l" gap="xl">
        {/* 按月份展示案例 */}
        {Object.keys(groupedByMonth)
          .sort((a, b) => b.localeCompare(a))
          .map((month, monthIndex) => (
            <Column key={month} id={`month-${month}`} fillWidth gap="l" paddingY="m">
              {/* 月份标题 */}
              <RevealFx translateY="8" delay={0.3 + monthIndex * 0.1}>
                <Heading as="h2" variant="heading-strong-l" onBackground="neutral-medium">
                  {month}
                </Heading>
              </RevealFx>

              {/* 该月的案例列表 */}
              <Column fillWidth gap="xl">
                {groupedByMonth[month].map((caseItem, index) => (
                  <RevealFx
                    key={caseItem.slug}
                    translateY="12"
                    delay={0.4 + monthIndex * 0.1 + index * 0.1}
                  >
                    <Row fillWidth gap="l" vertical="stretch" s={{ direction: "column" }}>
                      {/* 左侧：封面图片 */}
                      <div
                        style={{
                          flex: "1 1 50%",
                          height: "400px",
                          backgroundColor: "var(--neutral-alpha-medium)",
                          borderRadius: "8px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                        className="case-cover-image"
                      >
                        {/* 封面图片 */}
                        <img
                          src={caseItem.coverImage}
                          alt={caseItem.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />

                        {/* 日期标签 - 右上角 */}
                        <div
                          style={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            backgroundColor: "var(--neutral-solid-strong)",
                            color: "var(--neutral-on-solid-strong)",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {caseItem.date}
                        </div>
                      </div>

                      {/* 右侧：案例信息 */}
                      <Column gap="m" vertical="start" paddingTop="0" style={{ flex: "1 1 50%" }}>
                        {/* 标题 */}
                        <Heading as="h3" wrap="balance" variant="heading-strong-xl">
                          {caseItem.title}
                        </Heading>

                        {/* 标签 */}
                        {caseItem.tags && caseItem.tags.length > 0 && (
                          <Row gap="8" wrap>
                            {caseItem.tags.map((tag) => (
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
                        <div style={{ lineHeight: "1.2" }}>
                          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                            {caseItem.description}
                          </Text>
                        </div>

                        {/* 团队成员 */}
                        {caseItem.team && caseItem.team.length > 0 && (
                          <AvatarGroup avatars={caseItem.team} size="m" reverse />
                        )}

                        {/* 底部按钮 */}
                        <Row gap="24" wrap>
                          <SmartLink
                            suffixIcon="arrowRight"
                            style={{ margin: "0", width: "fit-content" }}
                            href={caseItem.caseLink}
                          >
                            <Text variant="body-default-s">案例详情</Text>
                          </SmartLink>
                          {caseItem.demoLink && caseItem.demoLink !== "#" && (
                            <SmartLink
                              suffixIcon="arrowRight"
                              style={{ margin: "0", width: "fit-content" }}
                              href={caseItem.demoLink}
                            >
                              <Text variant="body-default-s">查看 Demo</Text>
                            </SmartLink>
                          )}
                          {caseItem.projectLink && caseItem.projectLink !== "#" && (
                            <SmartLink
                              suffixIcon="arrowUpRightFromSquare"
                              style={{ margin: "0", width: "fit-content" }}
                              href={caseItem.projectLink}
                            >
                              <Text variant="body-default-s">查看项目</Text>
                            </SmartLink>
                          )}
                        </Row>
                      </Column>
                    </Row>
                  </RevealFx>
                ))}
              </Column>
            </Column>
          ))}

        {/* 底部间距 */}
        <Column fillWidth paddingY="xl" />
      </Column>
    </>
  );
}

