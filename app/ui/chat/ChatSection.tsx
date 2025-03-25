import { prisma } from "@/prisma/prisma";
import ChatCard from "@/lib/frontend/chat/components/ChatCard";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatSectionProps {
  projectId: string;
}

const ChatSection = async ({ projectId }: ChatSectionProps) => {
  const chats = await prisma.chat.findMany({
    where: {
      projectId: projectId,
    },
  });

  return (
    <div className={"h-full w-full"}>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatCard chat={chat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatSectionSkeleton = () => (
  <div className={"flex flex-col gap-4 p-5"}>
    <Skeleton className={"h-20 w-full"} />
    <Skeleton className={"h-20 w-full"} />
    <Skeleton className={"h-20 w-full"} />
  </div>
);

ChatSection.Skeleton = ChatSectionSkeleton;

export default ChatSection;
