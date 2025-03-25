import { Chat } from "@prisma/client";
import { cn } from "@/lib/utils";

interface ChatCardProps {
  chat: Chat;
}

const ChatCard = ({ chat }: ChatCardProps) => {
  return <div className={cn("w-full border-b p-2")}>{chat.message}</div>;
};

export default ChatCard;
