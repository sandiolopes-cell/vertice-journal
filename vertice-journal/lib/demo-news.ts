import type { NewsArticle } from "@/types/news";

const now = new Date().toISOString();

export const demoNews: NewsArticle[] = [
  {
    id: "v2-001",
    slug: "vertice-journal-inicia-nova-fase",
    category: "Tecnologia",
    title: "Vértice Journal inicia nova fase com base mais rápida e organizada",
    subtitle:
      "O portal passa a separar coleta, edição por IA, armazenamento e publicação.",
    summary:
      "A nova arquitetura foi criada para reduzir falhas, melhorar o desempenho e permitir a produção automática de matérias completas.",
    paragraphs: [
      "O Vértice Journal iniciou uma nova etapa de desenvolvimento com foco em estabilidade, velocidade e organização editorial.",
      "A nova base separa a coleta de notícias, o tratamento dos dados, a produção por inteligência artificial e a publicação no portal.",
      "Essa divisão permite que o leitor abra matérias já preparadas, sem aguardar a geração do conteúdo no momento do clique.",
      "A primeira versão desta nova estrutura funciona com dados demonstrativos. Na próxima etapa, o sistema será conectado ao Cloudflare D1.",
      "Depois da integração com o banco, as notícias serão coletadas, reescritas, armazenadas e exibidas automaticamente.",
    ],
    keyPoints: [
      "Arquitetura limpa",
      "Matérias pré-geradas",
      "Página interna por notícia",
      "Base pronta para automação"
    ],
    image: "",
    source: "Vértice Journal",
    sourceUrl: "/",
    publishedAt: now,
    generatedAt: now,
    featured: true
  },
  {
    id: "v2-002",
    slug: "editorias-organizam-cobertura",
    category: "Brasil",
    title: "Editorias passam a organizar toda a cobertura do portal",
    subtitle:
      "Brasil, Mundo, Negócios, Tecnologia e outras áreas terão blocos próprios.",
    summary:
      "A página inicial mantém a aparência de jornal antigo, com mais destaques e melhor distribuição das matérias.",
    paragraphs: [
      "A nova página inicial do Vértice Journal foi estruturada como uma edição de jornal.",
      "Cada editoria poderá receber notícias automaticamente e apresentar seus principais destaques.",
      "O modelo foi desenhado para suportar até 60 matérias por atualização sem transformar a página em um blog comum."
    ],
    keyPoints: [
      "Nove editorias",
      "Mais destaques",
      "Visual de papel",
      "Até 60 notícias"
    ],
    image: "",
    source: "Vértice Journal",
    sourceUrl: "/",
    publishedAt: now,
    generatedAt: now
  },
  {
    id: "v2-003",
    slug: "instagram-sera-proxima-automacao",
    category: "Entretenimento",
    title: "Automação do Instagram será conectada às matérias do jornal",
    subtitle:
      "As reportagens poderão gerar legendas, artes e carrosséis para publicação.",
    summary:
      "Depois da base editorial, o sistema será preparado para transformar matérias em conteúdo para Instagram.",
    paragraphs: [
      "A automação social será construída depois que o motor editorial estiver estável.",
      "Cada matéria poderá gerar uma legenda, uma chamada curta e um conjunto de textos para carrossel.",
      "A publicação usará a API oficial da Meta e respeitará os limites e permissões da plataforma."
    ],
    keyPoints: [
      "Legendas automáticas",
      "Carrosséis",
      "API oficial da Meta",
      "Publicação baseada nas matérias"
    ],
    image: "",
    source: "Vértice Journal",
    sourceUrl: "/",
    publishedAt: now,
    generatedAt: now
  }
];
