// import AutoImport from 'unplugin-auto-import/webpack';
// import Components from 'unplugin-vue-components/webpack';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'node:path';

import {defineConfig } from 'dumi'
export default ({
  mfsu: false,
  apiParser: {},
  resolve: {
    entryFile: './../boke-devops-vue/src/index.ts',
  },
  html2sketch: {},
  presets: [require.resolve('@dumijs/preset-vue')],
  // 默认重定向到子包的 src 文件夹
  monorepoRedirect: {
    srcDir: [ 'src', "./../boke-devops-vue/src"],

  },
  vue: {
    tsconfigPath: path.resolve(__dirname, './tsconfig.vue.json'),
    compiler: {
      babelStandaloneCDN: 'https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.22.17/babel.min.js'
    },
    checkerOptions: {
      externalSymbolLinkMappings: {
        typescript: {
          Promise:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        },
        '@vue/runtime-core': {
          VNodeChild:
            'https://github.com/vuejs/core/blob/main/packages/runtime-core/src/vnode.ts#L136',
        },
      },
    },
    
  },
  
  themeConfig: {
    nav: [
      { title: '首页', link: '/' },
      { title: '组件', link: '/components' },
      { title: '3rd party framework', link: '/framework-test' },
    ],
    name: "BOKE\rDEVOPS",
    logo: "/logo.png",
    footer: "Powered by ❤️"
  },
  chainWebpack(memo: any) {

    // memo.resolve.symlinks(false)
    memo.plugin('unplugin-element-plus').use(
      require('unplugin-element-plus/webpack')({
        useSource: true,
      }),
    );
    // memo.plugin('auto-import').use(AutoImport( {
    //   resolvers: [ElementPlusResolver()],
    // }));
    // memo.plugin('components').use(Components({
    //   resolvers: [ElementPlusResolver()],
    // }));
    return memo;
  },
})