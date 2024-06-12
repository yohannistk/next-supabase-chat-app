import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const payload = await req.json();
  const userName = payload["userName"];
  const users = await prisma.user.findMany({
    where: { userName },
  });
  const conversations = await prisma.conversation.findMany({
    where: { OR: [{ user1: { clerkId: "" } }, { user1: { clerkId: "" } }] },
    include: { user1: true, user2: true, lastMessage: true },
  });
  return NextResponse.json({ users }, { status: 200 });
}
