import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { user_id, name, description, created_at } = await request.json();

  try {
    const data = await Projects.insert(
      user_id,
      name,
      description,
      new Date(created_at)
    );
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
