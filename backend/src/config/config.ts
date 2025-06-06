import dotenv from "dotenv"
dotenv.config()

interface Config {
  PORT?: number,
  DB_USERNAME?: string,
  DB_PASSWORD?: string,
  DB_HOST?: string,
  DB_PORT?: number,
  DB_NAME?: string,
  DB_URL?: string,
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_NAME: process.env.DB_NAME,
  DB_URL: process.env.DB_URL
}

export default config
