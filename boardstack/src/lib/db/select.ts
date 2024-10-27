import { db } from "./orm/db";

export const usuarios = async () => {
  await db.selectFrom("usuarios").selectAll().execute();
};
