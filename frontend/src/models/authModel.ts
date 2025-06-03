import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  })
});

export const signinSchema = z.object({
  email: z.string().email({
    message: "Invalid email address"
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  }),
  confirm: z.string()
}).refine(val => val.password === val.confirm, {
  message: "Password must match",
  path: ["confirm"],
})
