import { kernel } from "./kernel";
import { AIPlugin } from "@/plugins/ai";
import { NewsPlugin } from "@/plugins/news";

export function loadPlugins() {
  kernel.registerPlugin("ai", AIPlugin);
  kernel.registerPlugin("news", NewsPlugin);
}
