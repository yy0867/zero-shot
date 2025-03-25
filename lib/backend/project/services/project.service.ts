import { Project, User } from "@prisma/client";
import { prisma } from "@/prisma/prisma";

export class ProjectService {
  static async createProject(instruction: string, user: User): Promise<Project> {
    const name = "새 웹사이트";
    return prisma.project.create({
      data: {
        name,
        description: instruction,
        components: {},
        userId: user.id,
      },
    });
  }
}
