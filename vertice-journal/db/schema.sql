CREATE TABLE IF NOT EXISTS news_articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  summary TEXT NOT NULL DEFAULT '',
  article_json TEXT NOT NULL DEFAULT '[]',
  key_points_json TEXT NOT NULL DEFAULT '[]',
  image TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL,
  source_url TEXT NOT NULL,
  published_at TEXT NOT NULL,
  generated_at TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'published'
);

CREATE INDEX IF NOT EXISTS idx_news_category
ON news_articles(category);

CREATE INDEX IF NOT EXISTS idx_news_published_at
ON news_articles(published_at DESC);

CREATE INDEX IF NOT EXISTS idx_news_status
ON news_articles(status);
