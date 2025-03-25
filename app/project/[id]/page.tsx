import { PathParams } from "@/lib/frontend/shared/types/props";
import ChatSection from "@/app/ui/chat/ChatSection";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Suspense } from "react";

const Page = async ({ params }: PathParams<{ id: string }>) => {
  const { id: projectId } = await params;

  return (
    <ResizablePanelGroup direction={"horizontal"}>
      <ResizablePanel defaultSize={20}>
        <Suspense fallback={<ChatSection.Skeleton />}>
          <ChatSection projectId={projectId} />
        </Suspense>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={30} maxSize={80} defaultSize={80}>
        <p>{projectId}</p>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
