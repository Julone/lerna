import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,

  defineConfig({
    chainWebpack: (config) => {
        config.resolve.symlinks(false)
      },
    test: {
      testTransformMode:"web",
      environment: 'jsdom',
      // setupFiles: resolve(__dirname, "./test-setup.js"),
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      globals:true,
      disableConsoleIntercept:true
    }
  })
)
