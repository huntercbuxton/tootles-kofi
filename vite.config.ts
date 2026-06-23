/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import path from 'path';


export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "tootles-kofi",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts()],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts" 
  },
});
