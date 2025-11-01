import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string | string[];
  tags?: string[];
  team: Team[];
  link?: string;
  demoLink?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory does not exist: ${dir}`);
    return [];
  }

  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    throw new Error(`MDX file not found: ${filePath}`);
  }

  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    tags: data.tags || [],
    team: data.team || [],
    link: data.link || "",
    demoLink: data.demoLink || "",
  };

    return { metadata, content };
  } catch (error) {
    console.error(`Error reading MDX file ${filePath}:`, error);
    throw error;
  }
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles
    .map((file) => {
      try {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
          metadata,
          slug,
          content,
        };
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
        return null;
      }
    })
    .filter((post) => post !== null);
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
