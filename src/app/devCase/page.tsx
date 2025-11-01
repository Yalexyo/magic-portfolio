import { baseURL } from "@/resources";
import { getPosts } from "@/utils/utils";
import { Column, Schema } from "@once-ui-system/core";
import DevCaseClient from "./DevCaseClient";

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

export default function DevCase() {
  // 从 MDX 文件加载案例数据（服务端）
  const posts = getPosts(["src", "app", "devCases", "posts"]);

  // 将 MDX 数据转换为案例格式
  const cases: DevCase[] = posts.map((post) => {
    const date = post.metadata.publishedAt;
    const month = date.substring(0, 7);

    return {
      slug: post.slug,
      title: post.metadata.title,
      description: post.metadata.summary,
      date: date,
      month: month,
      coverImage: post.metadata.images?.[0] || "/images/dev-cases/placeholder-1.jpg",
      tags: post.metadata.tags || [],
      caseLink: `/devCases/${post.slug}`,
      demoLink: post.metadata.demoLink || "#",
      projectLink: post.metadata.link || "#",
      team: post.metadata.team?.map((member: { avatar: string }) => ({ src: member.avatar })) || [],
    };
  });

  // 按日期降序排序
  cases.sort((a, b) => b.date.localeCompare(a.date));

  // 按月份分组
  const groupedByMonth: { [key: string]: DevCase[] } = {};
  for (const caseItem of cases) {
    if (!groupedByMonth[caseItem.month]) {
      groupedByMonth[caseItem.month] = [];
    }
    groupedByMonth[caseItem.month].push(caseItem);
  }

  // 生成时间轴导航项
  const timelineItems = Object.keys(groupedByMonth)
    .sort((a, b) => b.localeCompare(a))
    .map((month) => ({
      id: `month-${month}`,
      label: month,
    }));

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/devCase"
        title="开发案例"
        description="查看我们的开发案例作品集"
      />

      <DevCaseClient groupedByMonth={groupedByMonth} timelineItems={timelineItems} />
    </Column>
  );
}
