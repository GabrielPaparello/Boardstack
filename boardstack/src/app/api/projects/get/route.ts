import { db } from "@/lib/db/db";
import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = parseInt(searchParams.get("userId") || "", 10);

  if (!db) {
    return NextResponse.json(
      { error: "Database not available" },
      { status: 500 }
    );
  }

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
  }

  try {
    const proyectos = await Projects.getAll(userId);

    if (!proyectos.projectData || proyectos.projectData.length === 0) {
      return NextResponse.json(
        { message: "No hay proyectos disponibles." },
        { status: 404 }
      );
    }

    return NextResponse.json(proyectos.projectData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
