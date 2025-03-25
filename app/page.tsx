import InstructionForm from "@/app/ui/root/InstructionForm";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className={"flex h-full w-full flex-col items-center"}>
      <p className={cn("mt-24 text-4xl font-extrabold")}>{"웹 사이트 생성"}</p>
      <div className={"mt-4 w-[600px]"}>
        <InstructionForm />
      </div>
    </div>
  );
};

export default Page;
