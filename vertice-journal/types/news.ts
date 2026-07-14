export type NewsCategory =
  | "Brasil"
  | "Mundo"
  | "Negócios"
  | "Tecnologia"
  | "Futebol"
  | "Política"
  | "Ciência"
  | "Saúde"
  | "Entretenimento";

export type NewsArticle = {
  id: string;
  slug: string;
  category: NewsCategory;
  title: string;
  subtitle: string;
  summary: string;
  paragraphs: string[];
  keyPoints: string[];
  image: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  generatedAt: string;
  featured?: boolean;
};
