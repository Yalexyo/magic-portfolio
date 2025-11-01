"use client";

import { Card, Column, Avatar, Text, Row, Flex, Tag } from "@once-ui-system/core";

interface TeamMemberCardProps {
  avatar?: string;
  name: string;
  title: string;
  tags?: string[];
  href?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  avatar,
  name,
  title,
  tags = [],
  href,
}) => {
  return (
    <Card
      href={href}
      fillWidth
      direction="column"
      gap="12"
      padding="16"
      radius="l"
      border="neutral-medium"
      background="surface"
      transition="micro-medium"
    >
      {/* 圆形头像 */}
      <Avatar
        src={avatar}
        size="xl"
        style={{ width: "100%", aspectRatio: "1/1" }}
      />
      
      {/* 名字和 Title */}
      <Column fillWidth gap="4">
        <Text variant="heading-strong-m" onBackground="neutral-strong">
          {name}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {title}
        </Text>
      </Column>
      
      {/* 标签 */}
      {tags.length > 0 && (
        <Flex gap="8" wrap>
          {tags.map((tag) => (
            <Tag
              key={tag}
              size="s"
              variant="neutral"
            >
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
    </Card>
  );
};

