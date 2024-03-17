import { z } from "zod";

// Sign Up form schema
export const signupSchema = z
  .object({
    name: z.string({
      required_error: "Please write your full name!",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),

    password: z.string({ required_error: "Password required!" }),
    confirm_password: z.string().optional(),
  })
  .refine((data) => data.password && data.password === data.confirm_password, {
    message: "Password not match",
    path: ["confirm_password"],
  });
