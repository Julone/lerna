/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import createVuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build:
    process.argv[2] === "build"
      ? {
          lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "index",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format}.js`,
          },
          rollupOptions: {
            external: ["vue", "lodash"],
            output: {
              globals: {
                vue: "Vue",
                lodash: "Lodash",
              },
            },
            
          },
        }
      : {
          rollupOptions: {
            external: ["omi"],
            input: {
              index: resolve(__dirname, "index.html"),
            },
          },
        },
  plugins: [
    createVuePlugin(),
    dts({
      rollupTypes: true
    }),
    vueJsx(),
    visualizer({
      emitFile: false,
      filename: "./vite-analysis-build-chart.html", // 分析图生成的文件名
      open: true, // 如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  esbuild: {
    // jsxFactory: "h",
    // jsxFragment: "h.f",
    // jsxInject: `import { h } from 'omi'`,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./demo"),
      "boke-devops-ui": resolve(__dirname, "./src/index"),
    },
    dedupe: ["vue", "lodash"],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
        },
        math: "strict",
        javascriptEnabled: true,
      },
    },
  },

  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  test: {
    
  }
});
