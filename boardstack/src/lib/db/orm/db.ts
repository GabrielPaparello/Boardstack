import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { Database } from "./schema/schema";

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    }),
  }),
});
