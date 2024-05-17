import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AuthRootLayout({ children }: PropsWithChildren) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  console.log(error);
  if (data?.user) {
    redirect("/");
  }
  return <main className="h-full">{children}</main>;
}
