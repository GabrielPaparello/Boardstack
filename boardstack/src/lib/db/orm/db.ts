import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { Database } from "./schema/schema";

const connectionString = process.env.POSTGRES_URL;

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString,
    }),
  }),
});
