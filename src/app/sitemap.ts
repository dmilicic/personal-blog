import { BASE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/api";

export default async function sitemap() {
  let blogs = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
