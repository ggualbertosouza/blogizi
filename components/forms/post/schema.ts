import { z } from "zod";

enum category {
  react = "React",
  nextjs = "NextJs",
  typescript = "Typescript",
  estruturaDeDados = "Estrutura de dados",
  csharp = "C#",
}

export const schema = z.object({
  title: z.string().min(1, "Seu título precisar ter mais de 1 caracter."),
  slug: z.enum([
    category.csharp,
    category.estruturaDeDados,
    category.nextjs,
    category.react,
    category.typescript,
  ]).optional(),
  description: z
    .string()
    .min(5, "Sua Descrição precisa ter no mínimo 5 caracteres."),
});

export type schemaProps = z.infer<typeof schema>;
