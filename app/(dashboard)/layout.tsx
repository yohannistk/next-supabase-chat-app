import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import ChatList from "./components/chat-list";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
  }
  return (
    <main className="h-full flex">
      <ChatList />
      <div className="flex-1">{children}</div>
    </main>
  );
}
