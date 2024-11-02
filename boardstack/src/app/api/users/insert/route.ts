import { db } from "@/lib/db/db";
import { UserService } from "@/lib/services/user.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!db) {
    return NextResponse.json(
      { error: "Database not available" },
      { status: 500 }
    );
  }
  try {
    const { userId, email, name, created_at } = await req.json();
    if (userId === null) {
      throw new Error("Missing userId", { cause: 400 });
    }
    const { data, error, status } = await UserService.insertUser(
      userId,
      email,
      name,
      created_at
    );
    if (error) {
      throw new Error(error, { cause: status });
    }
    return NextResponse.json(data, { status });
  } catch (error) {
    console.error("Error in POST endpoint:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
