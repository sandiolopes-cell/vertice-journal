import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NewsCard } from "@/components/NewsCard";
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

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const params = await searchParams;
  const category =
    params.categoria &&
    validCategories.has(params.categoria as NewsCategory)
      ? (params.categoria as NewsCategory)
      : undefined;

  const items = await listNews({ category, limit: 60 });
  const lead = items[0];
  const secondary = items.slice(1, 3);
  const remaining = items.slice(3);

  return (
    <main className="paper">
      <Header />

      <section className="breaking">
        <span>VÉRTICE V2</span>
        <strong>Base limpa e pronta para crescer</strong>
      </section>

      {!lead ? (
        <section className="empty">
          <h1>Nenhuma notícia encontrada</h1>
          <a href="/">Voltar para todos</a>
        </section>
      ) : (
        <>
          <section className="front-page">
            <article className="lead">
              <span className="kicker">{lead.category}</span>
              <h1>
                <a href={`/noticia/${lead.slug}`}>{lead.title}</a>
              </h1>
              <p>{lead.subtitle}</p>
              <a className="lead-image" href={`/noticia/${lead.slug}`}>
                {lead.image ? (
                  <img src={lead.image} alt={lead.title} />
                ) : (
                  <span>VÉRTICE JOURNAL</span>
                )}
              </a>
            </article>

            <aside className="secondary">
              {secondary.map((article) => (
                <article key={article.id}>
                  <span className="kicker">{article.category}</span>
                  <h2>
                    <a href={`/noticia/${article.slug}`}>
                      {article.title}
                    </a>
                  </h2>
                  <p>{article.summary}</p>
                </article>
              ))}
            </aside>
          </section>

          <div className="section-title">
            <span>{category ?? "Destaques da edição"}</span>
            <strong>{items.length} matérias</strong>
          </div>

          <section className="news-grid">
            {remaining.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
