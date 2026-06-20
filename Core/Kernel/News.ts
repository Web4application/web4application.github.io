import { kernel } from "@/core/kernel";

export const NewsPlugin = {
  init(kernelInstance: any) {
    kernelInstance.on("news:fetch", async () => {
      console.log("Fetching news feed...");
    });
  }
};
