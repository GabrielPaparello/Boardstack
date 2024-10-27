import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function DELETE(id: number) {
  try {
    const data = await Projects.delete(id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
