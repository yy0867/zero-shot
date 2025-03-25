import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const LogInButton = () => {
  return (
    <Link href={"/login"}>
      <Button className={"w-full justify-between"}>
        {"로그인"}
        <ChevronRight />
      </Button>
    </Link>
  );
};

export default LogInButton;
