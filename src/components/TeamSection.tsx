"use client";

import {
  Column,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Row,
  Line,
} from "@once-ui-system/core";
import { TeamMemberCard } from "./TeamMemberCard";

interface TeamMember {
  avatar: string;
  name: string;
  title: string;
  tags: string[];
  href?: string;
}

interface TeamSectionProps {
  devTeam?: TeamMember[];
  designTeam?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  devTeam = [],
  designTeam = [],
}) => {
  return (
    <Column fillWidth gap="xl" paddingY="xl">
      {/* 顶部导航 */}
      <Flex fillWidth horizontal="between" paddingX="l" wrap>
        <Heading as="h1" variant="display-strong-xl">
          为什么选我们
        </Heading>
        <Row gap="xl">
          <Text variant="display-default-l" onBackground="neutral-weak">
            设计案例
          </Text>
          <Text variant="display-default-l" onBackground="neutral-weak">
            开发案例
          </Text>
          <Text variant="display-default-l" onBackground="neutral-weak">
            个人作品集Gallery
          </Text>
        </Row>
      </Flex>

      {/* 总览区域 */}
      <Column fillWidth gap="l" paddingX="l">
        <Heading as="h2" variant="display-strong-l">
          总览
        </Heading>
        
        {/* 轮播图占位 */}
        <Column
          fillWidth
          background="neutral-weak"
          radius="l"
          style={{ height: "400px" }}
        />
        
        {/* 分页指示器 */}
        <Row fillWidth gap="m">
          <div style={{ flex: 1, height: "4px", background: "var(--neutral-solid-strong)" }} />
          <div style={{ flex: 1, height: "4px", background: "var(--neutral-alpha-weak)" }} />
          <div style={{ flex: 1, height: "4px", background: "var(--neutral-alpha-weak)" }} />
        </Row>
      </Column>

      {/* 社交媒体按钮 */}
      <Row fillWidth gap="l" paddingX="l" horizontal="center" wrap>
        <Button
          variant="secondary"
          size="l"
          label="微信"
          style={{ minWidth: "200px", borderRadius: "9999px" }}
        />
        <Button
          variant="secondary"
          size="l"
          label="小红书"
          style={{ minWidth: "200px", borderRadius: "9999px" }}
        />
        <Button
          variant="secondary"
          size="l"
          label="淘宝"
          style={{ minWidth: "200px", borderRadius: "9999px" }}
        />
      </Row>

      {/* 文本描述区域 */}
      <Column fillWidth gap="m" paddingX="l">
        <Line fillWidth background="neutral-weak" style={{ height: "20px" }} />
        <Line fillWidth background="neutral-weak" style={{ height: "20px" }} />
        <Line fillWidth background="neutral-weak" style={{ height: "20px", width: "60%" }} />
        <Line fillWidth background="neutral-weak" style={{ height: "20px" }} />
        <Line fillWidth background="neutral-weak" style={{ height: "20px" }} />
        <Line fillWidth background="neutral-weak" style={{ height: "20px", width: "80%" }} />
      </Column>

      {/* 团队介绍区块 */}
      <Column fillWidth gap="xl" paddingX="l" paddingY="xl" background="page" radius="l">
        <Heading as="h2" variant="display-strong-l">
          团队介绍
        </Heading>

        {/* 开发团队 */}
        {devTeam.length > 0 && (
          <Column fillWidth gap="l">
            <Heading as="h3" variant="heading-strong-xl">
              开发团队
            </Heading>
            <Column fillWidth gap="m">
              <Line fillWidth background="neutral-weak" style={{ height: "16px" }} />
              <Line fillWidth background="neutral-weak" style={{ height: "16px" }} />
              <Line fillWidth background="neutral-weak" style={{ height: "16px", width: "50%" }} />
            </Column>
            <Grid
              columns="4"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="l"
              fillWidth
            >
              {devTeam.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  avatar={member.avatar}
                  name={member.name}
                  title={member.title}
                  tags={member.tags}
                  href={member.href}
                />
              ))}
            </Grid>
          </Column>
        )}

        {/* 设计团队 */}
        {designTeam.length > 0 && (
          <Column fillWidth gap="l">
            <Heading as="h3" variant="heading-strong-xl">
              设计团队
            </Heading>
            <Column fillWidth gap="m">
              <Line fillWidth background="neutral-weak" style={{ height: "16px" }} />
              <Line fillWidth background="neutral-weak" style={{ height: "16px" }} />
              <Line fillWidth background="neutral-weak" style={{ height: "16px", width: "50%" }} />
            </Column>
            <Grid
              columns="4"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="l"
              fillWidth
            >
              {designTeam.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  avatar={member.avatar}
                  name={member.name}
                  title={member.title}
                  tags={member.tags}
                  href={member.href}
                />
              ))}
            </Grid>
          </Column>
        )}
      </Column>
    </Column>
  );
};

