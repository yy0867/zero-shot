"use server";

import { UserService } from "@/lib/backend/user/services/user.service";
import { ProjectService } from "@/lib/backend/project/services/project.service";
import { Project } from "@prisma/client";
import { ChatService } from "@/lib/backend/chat/services/chat.service";

export const createProject = async (formData: FormData): Promise<Project> => {
  const user = await UserService.validateUserOrThrow();
  const instruction = formData.get("instruction") as string;

  const project = await ProjectService.createProject(instruction, user);
  await ChatService.createChat(instruction, project);

  return project;
};
