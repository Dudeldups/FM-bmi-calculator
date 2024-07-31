import { defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default defineConfig({
  ...mergeConfig(viteConfig, {
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./test/vitest-setup.ts"],
    },
  }),
});
