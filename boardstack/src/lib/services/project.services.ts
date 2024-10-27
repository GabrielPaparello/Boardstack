import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";

export class Projects {
  static async getAll(userId: number) {
    try {
      const data = await db
        .selectFrom("proyectos")
        .selectAll()
        .where("proyectos.usuario_id", "=", userId)
        .execute();
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }

  static async insert(
    userId: number,
    name: string,
    description: string,
    date: Date
  ) {
    try {
      const data = await db
        .insertInto("proyectos")
        .values({
          id: Math.floor(Math.random() * 1000),
          usuario_id: userId,
          nombre: name,
          descripcion: description,
          fecha_creacion: date,
        })
        .returningAll()
        .execute();
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }

  static async delete(id: number) {
    try {
      const data = await db
        .deleteFrom("proyectos")
        .where("proyectos.id", "=", id)
        .returningAll()
        .execute();
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}
