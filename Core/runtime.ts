import { loadPlugins } from "./registry";

export function bootKernel() {
  console.log("Booting Web4 Kernel...");

  loadPlugins();

  console.log("Kernel online.");
}
