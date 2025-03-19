import { cn } from "@/lib/shared/utils/utils";
import { Button } from "@/lib/shared/components/button/Button";
import { Loader, WandSparkles } from "lucide-react";
import { useTransition } from "react";
import { createWebsite } from "@/app/actions/website";

const InstructionForm = () => {
  const [isSubmitting, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      await createWebsite(formData);
    });
  };

  return (
    <form className={"flex w-full flex-col items-center"} action={handleSubmit}>
      <div
        className={cn(
          "mt-8 w-full rounded-lg border border-gray-200 shadow-md",
          "transition-colors duration-100 focus-within:border-purple-400 focus-within:shadow-lg",
        )}
      >
        <textarea
          name={"description"}
          className={"field-sizing-content max-h-[200px] w-full resize-none px-3 py-2.5 focus:outline-none"}
          placeholder={"웹사이트 설명과 디자인을 입력해주세요."}
          autoFocus
          required
        />
        <div className={"flex items-center justify-end p-2"}>
          <Button
            className={"hover:border-purple-300 hover:bg-purple-100 hover:text-purple-800"}
            variant={"outline"}
            size={"icon"}
            disabled={isSubmitting}
          >
            {!isSubmitting && <WandSparkles />}
            {isSubmitting && <Loader />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InstructionForm;
