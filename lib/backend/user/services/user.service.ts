import { getServerSession } from "next-auth";
import { User } from "@prisma/client";
import { authOptions } from "@/lib/backend/auth/auth.options";
import { prisma } from "@/prisma/prisma";

export class UserService {
  static async validateUserOrThrow(): Promise<User> {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      throw new Error("User not authenticated.");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user) {
      throw new Error(`User not found: ${session}`);
    }

    return user;
  }
}
