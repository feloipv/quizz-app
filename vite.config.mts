import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

const PORT = Number(process.env.PORT) || 8000;

export default defineConfig({
  server: {
    port: PORT,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/app.ts",
      exportName: "viteNodeApp",
      initAppOnBoot: false,
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
});
