import { defineConfig, splitVendorChunkPlugin } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    splitVendorChunkPlugin() 
  ],
  build: {
    minify: "esbuild",
    lib: {
      entry: resolve("src", "index.ts"),
      name: "DesignSystem",
      formats: ["es", "umd"],
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "translation", "moment"],
      output: {
        // inlineDynamicImports: false,
        // manualChunks: {
        //   "charts-lib": ["apexcharts", "react-apexcharts"],
        // },
        globals: {
          react: "React",
          "translation" :"translation-system",
          moment: "moment"
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
