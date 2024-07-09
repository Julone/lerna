---
hero:
  title: Boke-Devops-vue
  description: BokeDevops前端开发组件库，适配桌面端的组件库，适合在 vue3.x 技术栈项目中使用。
  actions:
    - text: 马上开始吧🚀
      link: /components/avatar
---
## 安装

:::code-group

```bash [npm]
npm install @devops/boke-devops-vue
```

```bash [yarn]
yarn add @devops/boke-devops-vue
```

```bash [pnpm]
pnpm add @devops/boke-devops-vue 
```
:::
## 使用

使用组件，具体使用方式如下
### 基础使用

基础使用会全量注册所有组件，如果您的项目大规模使用组件，请放心使用这种方式。

```js
import { createApp } from 'vue';
import devops from '@devops/boke-devops-vue';
import App from './app.vue';

// 引入组件库的少量全局样式变量
import '@devops/boke-devops-vue/dist/style.css'; // 必须导入

const app = createApp(App);
app.use(devops);
```
## 浏览器兼容性

| [<img src="https://tdesign.gtimg.com/docs/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> IE / Edge | [<img src="https://tdesign.gtimg.com/docs/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://tdesign.gtimg.com/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://tdesign.gtimg.com/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --- | --- | --- | --- |
| Edge >=84 | Firefox >=83 | Chrome >=84 | Safari >=14.1 |


详情参见[桌面端组件库浏览器兼容性说明](https://github.com/Tencent/tdesign/wiki/%E6%A1%8C%E9%9D%A2%E7%AB%AF%E7%BB%84%E4%BB%B6%E5%BA%93%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E8%AF%B4%E6%98%8E)