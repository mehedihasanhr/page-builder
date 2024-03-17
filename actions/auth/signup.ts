"use server";

import bcrypt from "bcryptjs";
import z from "zod";
import { signupSchema } from "@/schemas/signupSchema";
import { db } from "@/lib/db";
import { login } from "@/actions/auth/login";

export const register = async (
  values: z.infer<typeof signupSchema>
): Promise<{ error: string } | { success: string }> => {
  const validatedFields = signupSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) return { error: "Email already taken!" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  await login(values);

  return { success: "A confirmation code sent to your email." };
};
