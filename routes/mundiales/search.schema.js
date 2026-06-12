import { z } from "zod";

const schema = z.object({
  text: z
    .string()
    .trim()
    .min(3, "El texto de busqueda debe tener al menos 3 caracteres")
    .max(100, "El texto de busqueda no puede superar los 100 caracteres"),
});

export default schema;