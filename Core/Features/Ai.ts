import { kernel } from "@/core/kernel";

export const AIPlugin = {
  init(kernelInstance: typeof kernel) {
    kernelInstance.on("ai:query", async (prompt: string) => {
      console.log("AI request:", prompt);

      // later connect OpenAI / local LLM here
    });
  }
};
