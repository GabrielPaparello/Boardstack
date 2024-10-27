import { db } from "@/lib/db/orm/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  req.json();
  if (!db) {
    return NextResponse.json(
      { error: "Database not available on client side" },
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
