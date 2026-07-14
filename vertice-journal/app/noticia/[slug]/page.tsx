import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getNewsBySlug } from "@/lib/news-store";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) notFound();

  return (
    <main className="paper">
      <Header />

      <article className="article-page">
        <span className="kicker">{article.category}</span>
        <h1>{article.title}</h1>
        <p className="article-subtitle">{article.subtitle}</p>

        <div className="article-meta">
          <strong>Redação Vértice</strong>
          <span>Fonte-base: {article.source}</span>
          <time dateTime={article.publishedAt}>
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "long",
              timeStyle: "short"
            }).format(new Date(article.publishedAt))}
          </time>
        </div>

        <div className="article-hero">
          {article.image ? (
            <img src={article.image} alt={article.title} />
          ) : (
            <span>VÉRTICE JOURNAL</span>
          )}
        </div>

        <aside className="key-points">
          <h2>Em resumo</h2>
          <ul>
            {article.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>

        <section className="article-content">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <footer className="source-note">
          <a href={article.sourceUrl}>Consultar fonte-base →</a>
        </footer>
      </article>

      <Footer />
    </main>
  );
}
