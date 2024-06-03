import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const AuthLayout = async (props: PropsWithChildren) => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <div className="min-h-screen flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default AuthLayout;
