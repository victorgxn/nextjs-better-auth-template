import z from "zod";

export const passwordSchema = z
  .string()
  .min(1, { message: "La contraseña es obligatoria" })
  .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
  .regex(/[^A-Za-z0-9]/, {
    message: "La contraseña debe contener al menos un carácter especial",
  });
