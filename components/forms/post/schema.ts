import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Seu título precisar ter mais de 1 caracter."),
  category: z.string().min(1, 'Selecione um item'),
  slug: z.string().min(5, "Sua Descrição precisa ter no mínimo 5 caracteres."),
  content: z.string().min(15, "Seu texto precisa ter mais de 15 caracteres."),
});

export type schemaProps = z.infer<typeof schema>;
