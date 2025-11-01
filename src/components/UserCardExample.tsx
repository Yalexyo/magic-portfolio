"use client";

import { Column } from "@once-ui-system/core";
import { UserCard } from "./UserCard";
import { person } from "@/resources";

/**
 * UserCard 使用示例
 * 可以直接使用静态数据或通过 context7 获取动态数据
 */
export const UserCardExample: React.FC = () => {
  // 示例：使用静态数据
  const staticUser = {
    avatar: person.avatar,
    nickname: person.name,
    description: `${person.role} from ${person.location}`,
  };

  // 示例：如果需要使用 context7 获取数据
  // const { data, loading } = useContext7('user-profile');
  
  return (
    <Column maxWidth="s" gap="16" fillWidth>
      <UserCard
        avatar={staticUser.avatar}
        nickname={staticUser.nickname}
        description={staticUser.description}
      />
      
      {/* 也可以不提供头像 */}
      <UserCard
        nickname="示例用户"
        description="这是一个没有头像的用户信息卡片示例"
      />
      
      {/* 带链接的卡片 */}
      <UserCard
        avatar={staticUser.avatar}
        nickname={staticUser.nickname}
        description={staticUser.description}
        href="/designCase"
      />
    </Column>
  );
};











