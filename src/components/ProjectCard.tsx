"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  publishedAt?: string;
  tags?: string[];
  demoLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  publishedAt,
  tags,
  demoLink,
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(publishedAt || tags?.length || avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {/* 日期 */}
            {publishedAt && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {publishedAt}
              </Text>
            )}

            {/* 标签 */}
            {tags && tags.length > 0 && (
              <Row gap="12" wrap>
                {tags.map((tag) => (
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
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}

            {/* 团队头像 */}
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}

            {/* 链接 */}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="label-strong-m">案例详情</Text>
                </SmartLink>
              )}
              {demoLink && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={demoLink}
                >
                  <Text variant="label-strong-m">查看 Demo</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="label-strong-m">查看项目</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
