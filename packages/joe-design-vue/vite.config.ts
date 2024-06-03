import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: process.argv[2] === 'build' ? {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['Vue'],
      output: {
        globals: {
          omi: 'Vue',
        },
      },
    }
  } : {
    rollupOptions: {
      external: ['omi'],
      input: {
        index: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [dts()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`,
  }
})
