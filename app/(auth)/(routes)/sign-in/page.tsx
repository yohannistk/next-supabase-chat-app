import React from "react";
import { OAuthButtons } from "../../oauth-providers";

const Signin = () => {
  return (
    <div className="flex justify-center h-full p-5 md:items-center">
      <div className="p-10 rounded-lg shadow-lg border space-y-3 max-w-lg w-full">
        <OAuthButtons />
      </div>
    </div>
  );
};

export default Signin;
