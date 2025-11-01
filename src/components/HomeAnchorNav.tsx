"use client";

import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about/about.module.scss";

interface AnchorItem {
  id: string;
  label: string;
}

interface HomeAnchorNavProps {
  items: AnchorItem[];
}

const HomeAnchorNav = ({ items }: HomeAnchorNavProps) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      s={{ hide: true }}
    >
      {items.map((item) => (
        <Flex
          key={item.id}
          cursor="interactive"
          className={styles.hover}
          gap="8"
          vertical="center"
          onClick={() => scrollTo(item.id, 80)}
        >
          <Flex height="1" minWidth="16" background="neutral-strong" />
          <Text>{item.label}</Text>
        </Flex>
      ))}
    </Column>
  );
};

export default HomeAnchorNav;

