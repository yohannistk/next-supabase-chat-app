import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Side from "./components/side";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/sign-in");
  // }
  return (
    <main className="h-full overflow-hidden flex">
      <Side
        className={cn(
          "w-full flex flex-col md:w-96 border h-full overflow-hidden",
          {}
        )}
      />
      <div className={cn("hidden md:flex md:flex-1", {})}>{children}</div>
    </main>
  );
}
