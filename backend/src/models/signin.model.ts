import { z } from "zod";

export const signinModel = z.object({
  username: z.string().min(2, { message: "Username must be more than 2 characters" }),
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, { message: "Password must be more than 8 characters" })
})
