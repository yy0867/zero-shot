"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const handleSignInWithGoogle = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className={"w-full"}>
      <Button variant={"outline"} className={"w-full"} onClick={handleSignInWithGoogle}>
        {"Google로 로그인"}
      </Button>
    </div>
  );
};

export default Login;
