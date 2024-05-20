import React from "react";
import { OAuthButtons } from "../../oauth-providers";

const Signin = () => {
  return (
    <div className="flex justify-center h-full p-5 md:items-center">
      <div className="p-5 rounded-lg shadow-lg border space-y-3 max-w-lg w-full">
        <h2 className="text-xl text-center">Login To Your Account</h2>
        <OAuthButtons />
      </div>
    </div>
  );
};

export default Signin;
