import type { NewsArticle } from "@/types/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="news-card">
      <a href={`/noticia/${article.slug}`} className="news-image">
        {article.image ? (
          <img src={article.image} alt={article.title} loading="lazy" />
        ) : (
          <span>VÉRTICE</span>
        )}
      </a>

      <div className="news-copy">
        <span className="kicker">{article.category}</span>
        <h3>
          <a href={`/noticia/${article.slug}`}>{article.title}</a>
        </h3>
        <p>{article.summary}</p>
        <footer>
          <strong>{article.source}</strong>
          <time dateTime={article.publishedAt}>
            {new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "short"
            }).format(new Date(article.publishedAt))}
          </time>
        </footer>
      </div>
    </article>
  );
}
