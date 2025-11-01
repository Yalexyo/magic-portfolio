import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/utils/utils";

export const dynamic = "force-static";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "devCase", "projects"]).map((post) => ({
    url: `${baseURL}/devCase/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const designCases = getPosts(["src", "app", "designCases", "posts"]).map((post) => ({
    url: `${baseURL}/designCases/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const devCases = getPosts(["src", "app", "devCases", "posts"]).map((post) => ({
    url: `${baseURL}/devCases/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works, ...designCases, ...devCases];
}
