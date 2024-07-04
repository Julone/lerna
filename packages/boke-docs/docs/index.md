---
hero:
  title: Boke-Devops-vue
  description: BokeDevops前端开发组件库
  actions:
    - text: SFC
      link: /components/foo
    - text: JSX
      link: /components/button
features:
  - title: 非常快
    emoji: 🚀
    description: 考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
  - title: 非常快
    emoji: 🚀
    description: 考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
  - title: 非常快
    emoji: 🚀
    description: 考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
---

:::code-group

```bash [npm]
npm install -D dumi
```

```bash [yarn]
yarn add -D dumi
```

```bash [pnpm]
pnpm add -D dumi
```

```ts [.dumirc.ts] {3}
import { defineConfig } from 'dumi';

export default defineConfig({
  // ...
});
```
:::

## hello

代码块 demo

```jsx
import React from 'react';

export default () => <>Hello first code block demo!</>;
```

## world

---

inline demo

```jsx | inline
export default () => <button>inline</button>;
```

---
