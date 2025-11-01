"use client";

import { Card, Column, Avatar, Text, Row } from "@once-ui-system/core";

interface UserCardProps {
  avatar?: string;
  nickname: string;
  description?: string;
  href?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  avatar,
  nickname,
  description,
  href,
}) => {
  return (
    <Card
      href={href}
      fillWidth
      direction="column"
      gap="16"
      padding="16"
      radius="l"
      border="neutral-medium"
      background="surface"
      transition="micro-medium"
    >
      <Row gap="16" vertical="center">
        {avatar && (
          <Avatar
            src={avatar}
            size="m"
          />
        )}
        <Column gap="4" flex={1}>
          <Text variant="heading-strong-m" onBackground="neutral-strong">
            {nickname}
          </Text>
          {description && (
            <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
              {description}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
};
