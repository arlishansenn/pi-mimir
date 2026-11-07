import { createRequire } from "node:module";

export function ensureDependenciesInstalled(): void {
  // Fleet releases install the locked tool dependencies before activation, never in a running skill.
  createRequire(import.meta.url).resolve("commander");
}
