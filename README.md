# CLI TypeScript + Drizzle ORM + SQLite

Projeto de linha de comando para gerenciamento de notícias, agora com a entidade **TAG** e a tabela associativa **NOTICIA_TAG**, mantendo as funcionalidades principais da atividade anterior.

## Funcionalidades
- Cadastrar notícia
- Listar notícias
- Buscar notícia por ID
- Atualizar notícia
- Excluir notícia
- Cadastrar tags
- Listar tags
- Buscar tags por ID
- Atualizar tags
- Excluir tags
- Relacionar várias tags a várias notícias

## Tecnologias
- TypeScript
- SQLite
- Drizzle ORM
- prompt-sync

## Como executar
```bash
npm install
npm run dev
```

## Como gerar build
```bash
npm run build
npm start
```

## Banco de dados
O arquivo `fake_news.db` será criado automaticamente na raiz do projeto.

## Observações
- O campo `data_criacao` é preenchido automaticamente com `CURRENT_TIMESTAMP`.
- A estrutura foi organizada para facilitar manutenção, leitura e apresentação.
