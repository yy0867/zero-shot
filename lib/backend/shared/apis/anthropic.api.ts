import Anthropic from "@anthropic-ai/sdk";

type Model = Anthropic.Model;

export class AnthropicAPI {
  private readonly client: Anthropic;
  private readonly defaultModel: Model;

  constructor() {
    this.defaultModel = "claude-3-7-sonnet-latest";
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  async generate(options: {
    prompt: string;
    temperature?: number;
    maxTokens?: number;
    model?: Model;
  }): Promise<string> {
    const response = await this.client.messages.create({
      model: options.model || this.defaultModel,
      max_tokens: options.maxTokens || 8000,
      temperature: options.temperature || 0.7,
      system:
        "You are an expert web developer and software architect specializing in Next.js and React applications. Your task is to design and generate code for web applications based on user requirements. Respond in JSON format only.",
      messages: [{ role: "user", content: options.prompt }],
    });

    if (response.content[0].type !== "text") {
      throw new Error(`Failed to generate text: Response type is not "text"`);
    }

    return response.content[0].text;
  }
}
