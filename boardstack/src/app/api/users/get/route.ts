// endpoint.ts (o donde estés definiendo tu endpoint)
import { db } from "@/lib/db/db";
import { UserService } from "@/lib/services/user.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!db) {
    return NextResponse.json(
      { error: "Database not available" },
      { status: 500 }
    );
  }
  if (userId === null) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    const { data, error, status } = await UserService.getUser(userId);

    if (error) {
      return NextResponse.json({ error }, { status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in GET endpoint:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
