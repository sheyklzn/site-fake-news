import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const cidades = sqliteTable("cidades", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  uf: text("uf").notNull(),
  dataCriacao: text("data_criacao").default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const categorias = sqliteTable("categorias", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull().unique(),
  descricao: text("descricao"),
  dataCriacao: text("data_criacao").default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const noticias = sqliteTable("noticias", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titulo: text("titulo").notNull(),
  texto: text("texto").notNull(),
  cidadeId: integer("cidade_id").notNull().references(() => cidades.id),
  categoriaId: integer("categoria_id").references(() => categorias.id),
  dataCriacao: text("data_criacao").default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull().unique(),
  dataCriacao: text("data_criacao").default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const noticiaTags = sqliteTable("noticia_tag", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  noticiaId: integer("noticia_id").notNull().references(() => noticias.id),
  tagId: integer("tag_id").notNull().references(() => tags.id),
  dataCriacao: text("data_criacao").default(sql`CURRENT_TIMESTAMP`).notNull()
});
