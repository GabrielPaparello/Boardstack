import { db } from "@/lib/db/db";
import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function GET(userId: number) {
  if (!db) {
    return NextResponse.json(
      { error: "Database not available " },
      { status: 500 }
    );
  }

  try {
    const proyectos = await Projects.getAll(userId);
    return NextResponse.json(proyectos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
