"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <Button variant={"ghost"} className={"flex w-full items-center justify-start"} onClick={handleLogOut}>
      <LogOut />
      {"로그아웃"}
    </Button>
  );
};

export default LogOutButton;
