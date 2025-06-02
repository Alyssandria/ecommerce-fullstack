import { z } from "zod/v4";

export const Player = z.object({
  username: z.string(),
  xp: z.number()
});
