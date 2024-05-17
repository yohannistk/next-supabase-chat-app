"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { TOAuthProvider } from "../oauth-providers";
import { signInWithOAuth } from "../actions";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "@/components/ui/loading-spinner";

interface Props {
  oAuthProvider: TOAuthProvider;
}
const OAuthButton = (props: Props) => {
  const { oAuthProvider } = props;
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant="outline"
      className="cursor-pointer w-full gap-2"
    >
      {pending ? <LoadingSpinner /> : oAuthProvider.icon}
      {oAuthProvider.displayName}
    </Button>
  );
};

export default OAuthButton;
