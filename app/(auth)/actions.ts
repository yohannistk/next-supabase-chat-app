"use server";

import { getURL } from "@/utils/helpers";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWithOAuth = async (provider: Provider) => {
  const supabase = createClient();
  const origin = headers().get("origin");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });
  if (error) {
    redirect(`/sign-in?message=${error.message}`);
  }
  redirect(data.url);
};
