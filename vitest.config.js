import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import path from 'node:path'

export default mergeConfig(
  viteConfig,

  defineConfig({
    chainWebpack: (config) => {
        config.resolve.symlinks(false)
      },
    test: {
      testTransformMode:"web",
      environment: 'jsdom',
      setupFiles: path.resolve(__dirname, "./test-setup-env.js"),
      // setupFiles: resolve(__dirname, "./test-setup.js"),
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      globals:true,
      disableConsoleIntercept:true,
      alias: {
        "@devops/boke-devops-vue": path.resolve(__dirname, 'packages/boke-devops-vue/src'),
      }
    }
  })
)
