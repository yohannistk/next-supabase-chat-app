import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  const userName = payload["userName"];
  const users = await prisma.user.findMany({
    where: { userName },
  });
  return NextResponse.json({ users }, { status: 200 });
}
