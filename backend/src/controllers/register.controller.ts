import { type Request, type Response, type NextFunction } from "express"
import { DB } from "../db/db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { signinModel } from "../models/signin.model";
import bcrypt from "bcrypt";

export const registerController = async (req: Request, res: Response, next: NextFunction) => {

  const validate = signinModel.safeParse(req.body);

  if (!validate.success) {
    res.status(400).json({ success: false, error: validate.error, })
  }

  try {
    const { username, email, password } = req.body;
    const existingUsers = await DB.select().from(users).where(eq(users.email, email))

    if (existingUsers.length > 0) throw "Email Already exists";

    const hashedPw = await bcrypt.hash(password, 12);

    await DB.insert(users).values({
      username,
      email,
      password: hashedPw
    })

    res.status(200).json({
      success: true,
      data: {
        message: "User Successfully registered"
      }
    })
  } catch (error) {
  }

  next();
}
