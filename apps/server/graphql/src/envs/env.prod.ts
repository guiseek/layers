import { config } from 'dotenv'

config()

const env = process.env

export const environment = {
  production: true,
  db: {
    type: env.DB_TYPE,
    host: env.DB_HOST,
    port: +env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    entities: [],
    synchronize: true,
  },
}
