import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Side from "./components/side";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
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
