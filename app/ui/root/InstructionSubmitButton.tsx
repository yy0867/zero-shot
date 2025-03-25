"use client";

import { useFormStatus } from "react-dom";
import { LoaderCircle, WandSparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { Button } from "@/components/ui/button";

const InstructionSubmitButton = () => {
  const router = useRouter();
  const { status } = useSession();
  const { pending } = useFormStatus();

  const checkAuth = (event: MouseEvent) => {
    if (status === "unauthenticated") {
      router.push("/login");
      event.preventDefault();
    }
  };

  return (
    <Button
      className={"hover:border-purple-300 hover:bg-purple-100 hover:text-purple-800"}
      variant={"outline"}
      size={"icon"}
      disabled={pending}
      onClick={checkAuth}
    >
      {!pending && <WandSparkles />}
      {pending && <LoaderCircle className={"animate-spin"} />}
    </Button>
  );
};

export default InstructionSubmitButton;
