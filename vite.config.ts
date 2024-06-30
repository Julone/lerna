/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vitest/config";
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [
    VueMacros({
      setupComponent: true,
      setupSFC: true,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
});
