import { AnthropicAPI } from "@/lib/backend/shared/apis/anthropic.api";
import { prisma } from "@/prisma/prisma";

type LLMProvider = "ANTHROPIC";
const CURRENT_PROVIDER: LLMProvider = "ANTHROPIC";

export class LLMService {
  private static async getLLMClient() {
    if (CURRENT_PROVIDER === "ANTHROPIC") {
      return new AnthropicAPI();
    }
    return new AnthropicAPI();
  }

  private static fillTemplate(template: string, variables: Record<string, string>): string {
    let result = template;
    for (const [key, value] of Object.entries(variables)) {
      result = result.replace(`{${key}}`, value);
    }
    return result;
  }

  private static async logPrompt(projectId: string | null, type: string, prompt: string, response: unknown) {
    try {
      await prisma.llmPromptLog.create({
        data: {
          projectId,
          type,
          prompt,
          response: JSON.stringify(response),
          timestamp: new Date(),
          provider: CURRENT_PROVIDER,
        },
      });
    } catch (error) {
      console.error("Failed to log prompt:", error);
    }
  }
}
