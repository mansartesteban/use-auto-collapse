import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      name: "use-auto-collapse",
      entry: path.resolve(__dirname, "src/index.js"),
    },
    outDir: "./dist",
  },
});
