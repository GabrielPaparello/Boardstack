import { Projects } from "@/lib/services/project.services";
import { NextResponse } from "next/server";

export async function POST(
  userId: number,
  name: string,
  description: string,
  date: Date
) {
  try {
    const data = await Projects.insert(userId, name, description, date);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
