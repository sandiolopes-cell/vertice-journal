# Vértice Journal V2 — Início

Base limpa para Cloudflare Workers + Next.js.

## O que esta etapa entrega

- Projeto novo e compilável.
- Visual de jornal antigo nas cores bege, preto e vinho.
- Página inicial, editorias e página interna por slug.
- API `/api/health`.
- API `/api/feed`.
- Dados demonstrativos.
- Schema D1 pronto em `db/schema.sql`.
- Estrutura preparada para matérias completas e Instagram.

## Publicação na Cloudflare

Configuração oficial utilizada:

- Next.js no Cloudflare Workers com `@opennextjs/cloudflare`.
- `nodejs_compat`.
- Assets em `.open-next/assets`.

### Build command

```bash
npm run deploy
```

Ou configure:

```bash
npm run build
```

e depois o deploy conforme o Workers Build.

## Testes

- `/`
- `/api/health`
- `/api/feed`
- `/noticia/vertice-journal-inicia-nova-fase`

## Próxima etapa

1. Criar banco D1 `vertice-journal-db`.
2. Adicionar binding `DB`.
3. Aplicar `db/schema.sql`.
4. Trocar o armazenamento demonstrativo por D1.
5. Criar o atualizador RSS → fatos → Gemini → D1.
6. Depois integrar publicação no Instagram pela API oficial da Meta.

Não coloque token do Instagram ou chave Gemini em arquivos do GitHub. Use Secrets da Cloudflare.
