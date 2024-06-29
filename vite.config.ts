/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vitest/config";
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: resolve("./node_modules/vue"),
      },
    },
  },
  test: {
    environment: "jsdom",
    // setupFiles: resolve(__dirname, "./test-setup.js"),
    testTimeout: 5000,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
});
