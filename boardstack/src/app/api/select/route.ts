import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  if (!db) {
    return NextResponse.json(
      { error: "Database not available " },
      { status: 500 }
    );
  }

  try {
    const usuarios = await db.selectFrom("usuarios").selectAll().execute();
    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
