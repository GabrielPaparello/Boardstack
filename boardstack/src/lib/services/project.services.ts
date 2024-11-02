import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";

export class Projects {
  static async getAll(userId: number) {
    try {
      const projectData = await db
        .selectFrom("projects")
        .selectAll()
        .where("projects.user_id", "=", userId)
        .execute();
      return { projectData, status: 200 };
    } catch (error) {
      console.error(error);
      return { error: "Internal Server Error", status: 500 };
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
        .insertInto("projects")
        .values({
          user_id: userId,
          name: name,
          description: description,
          created_at: date,
        })
        .returningAll()
        .execute();
      return { data: data, status: 200 };
    } catch (error) {
      console.error(error);
      return { error: "Internal Server Error", status: 500 };
    }
  }

  static async delete(id: number) {
    try {
      const data = await db
        .deleteFrom("projects")
        .where("projects.id", "=", id)
        .returningAll()
        .execute();
      return { data: data, status: 200 };
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
