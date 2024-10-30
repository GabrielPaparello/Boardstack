import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, name, description, date } = await request.json();

  try {
    const data = await Projects.insert(
      userId,
      name,
      description,
      new Date(date)
    );
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
