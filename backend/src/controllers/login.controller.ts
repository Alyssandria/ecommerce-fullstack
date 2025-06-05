import { type Request, type Response, type NextFunction } from "express"
export const loginController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
  } catch (error) {
  }

  next();
}
