import { db } from "./connection";
import { categorias, cidades, tags } from "./schema";

export function seedDatabase() {
  const cidadesBase = [
    { nome: "Brasília", uf: "DF" },
    { nome: "Goiânia", uf: "GO" },
    { nome: "São Paulo", uf: "SP" }
  ];

  const categoriasBase = [
    { nome: "Política", descricao: "Notícias políticas" },
    { nome: "Tecnologia", descricao: "Notícias de tecnologia" },
    { nome: "Esportes", descricao: "Notícias esportivas" }
  ];

  const tagsBase = [
    { nome: "Urgente" },
    { nome: "Destaque" },
    { nome: "Local" }
  ];

  for (const cidade of cidadesBase) db.insert(cidades).values(cidade).onConflictDoNothing().run();
  for (const categoria of categoriasBase) db.insert(categorias).values(categoria).onConflictDoNothing().run();
  for (const tag of tagsBase) db.insert(tags).values(tag).onConflictDoNothing().run();
}
