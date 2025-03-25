import { Chat, Project } from "@prisma/client";
import { prisma } from "@/prisma/prisma";

export class ChatService {
  static async createChat(initialInstruction: string, project: Project): Promise<Chat> {
    return prisma.chat.create({
      data: {
        message: initialInstruction,
        role: "user",
        projectId: project.id,
      },
    });
  }
}
