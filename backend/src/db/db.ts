import { drizzle } from "drizzle-orm/node-postgres";
import CONFIG from "../config/config";
import * as schema from "./schema";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: CONFIG.DB_URL
})

export const DB = drizzle({ client: pool, schema });



