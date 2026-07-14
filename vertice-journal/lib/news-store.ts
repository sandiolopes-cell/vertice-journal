import { demoNews } from "@/lib/demo-news";
import type { NewsArticle, NewsCategory } from "@/types/news";

export async function listNews(options?: {
  category?: NewsCategory;
  limit?: number;
}): Promise<NewsArticle[]> {
  const limit = Math.max(1, Math.min(options?.limit ?? 60, 60));
  const filtered = options?.category
    ? demoNews.filter((item) => item.category === options.category)
    : demoNews;

  return filtered.slice(0, limit);
}

export async function getNewsBySlug(
  slug: string
): Promise<NewsArticle | null> {
  return demoNews.find((item) => item.slug === slug) ?? null;
}
