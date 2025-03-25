import InstructionSubmitButton from "@/app/ui/root/InstructionSubmitButton";
import { createProject } from "@/lib/backend/project/actions/website-actions";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const InstructionForm = () => {
  const handleCreateProject = async (formData: FormData) => {
    "use server";

    const project = await createProject(formData);
    redirect(`/project/${project.id}`);
  };

  return (
    <form className={"flex w-full flex-col items-center"} action={handleCreateProject}>
      <div
        className={cn(
          "mt-8 w-full rounded-lg border border-gray-200 shadow-md",
          "transition-colors duration-100 focus-within:border-purple-400 focus-within:shadow-lg",
        )}
      >
        <textarea
          name={"instruction"}
          className={"field-sizing-content max-h-[200px] w-full resize-none px-3 py-2.5 focus:outline-none"}
          placeholder={"웹사이트 설명과 디자인을 입력해주세요."}
          autoFocus
          required
        />
        <div className={"flex items-center justify-end p-2"}>
          <InstructionSubmitButton />
        </div>
      </div>
    </form>
  );
};

export default InstructionForm;
