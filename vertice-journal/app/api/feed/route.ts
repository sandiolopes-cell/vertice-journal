import { NextRequest, NextResponse } from "next/server";
import { listNews } from "@/lib/news-store";
import type { NewsCategory } from "@/types/news";

export const dynamic = "force-dynamic";

const validCategories = new Set<NewsCategory>([
  "Brasil",
  "Mundo",
  "Negócios",
  "Tecnologia",
  "Futebol",
  "Política",
  "Ciência",
  "Saúde",
  "Entretenimento"
]);

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("categoria");
  const category =
    raw && validCategories.has(raw as NewsCategory)
      ? (raw as NewsCategory)
      : undefined;

  const items = await listNews({ category, limit: 60 });

  return NextResponse.json(
    {
      items,
      total: items.length,
      updatedAt: new Date().toISOString(),
      mode: "demo"
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
      }
    }
  );
}
