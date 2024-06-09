import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Side from "./components/side";
import { currentUser } from "@clerk/nextjs/server";
import { Conversation } from "@prisma/client";
import prisma from "@/lib/db";

const loadConversations = async (userId: string): Promise<Conversation[]> => {
  const conversations = await prisma.conversation.findMany({
    where: { OR: [{ user1Id: userId }, { user2Id: userId }] },
  });
  return conversations;
};

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const conversations = await loadConversations(user.id);

  return (
    <main className="h-full overflow-hidden flex">
      <Side conversations={conversations} />
      <div className={cn("hidden md:flex md:flex-1")}>{children}</div>
    </main>
  );
}
