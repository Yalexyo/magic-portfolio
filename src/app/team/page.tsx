import { TeamSection } from "@/components";
import { baseURL } from "@/resources";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: "团队介绍",
    description: "认识我们的开发和设计团队",
    baseURL: baseURL,
    path: "/team",
  });
}

export default function TeamPage() {
  // 开发团队成员数据
  const devTeam = [
    {
      avatar: "/images/avatar.jpg",
      name: "张三",
      title: "Frontend Dev",
      tags: ["React", "Next.js"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "李四",
      title: "Backend Dev",
      tags: ["Node.js", "TypeScript"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "王五",
      title: "Full Stack",
      tags: ["React", "API"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "赵六",
      title: "DevOps",
      tags: ["Docker", "CI/CD"],
    },
  ];

  // 设计团队成员数据
  const designTeam = [
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
      tags: ["Research", "User Flow"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "吴九",
      title: "Product Designer",
      tags: ["Prototyping", "Testing"],
    },
    {
      avatar: "/images/avatar.jpg",
      name: "郑十",
      title: "Graphic Designer",
      tags: ["Branding", "Visual"],
    },
  ];

  return <TeamSection devTeam={devTeam} designTeam={designTeam} />;
}
