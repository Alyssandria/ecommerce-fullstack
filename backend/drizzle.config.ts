import { defineConfig } from "drizzle-kit";
import CONFIG from "./src/config/config";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: CONFIG.DB_URL!
  },
  out: "./src/db/migrations/",
  schema: "./src/db/schema.ts"
})
