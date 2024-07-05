# JSX Support

## Lightweight Demo + Composition API + JSX

```jsx
/**
 * title: jsx
 */
import { defineComponent } from 'vue';
import { Button } from '@devops/boke-docs';

export default defineComponent({
  setup() {
    function handleClick() {
      alert('Using defineComponent API');
    }
    return () => <Button onClick={handleClick}>Click me</Button>;
  },
});
```

## Lightweight Inline Demo + Options API + JSX

```jsx | inline
import { Button } from '@devops/boke-docs';

export default {
  data() {
    return {
      msg: 'Using Options API',
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
  render() {
    return <Button onClick={this.handleClick}>Click me</Button>;
  },
};
```

## External Demo + TSX

<code src="./demos/Demo.tsx"></code>

## Functional Component

```tsx
/**
 * compact: true
 */
import { defineComponent } from 'vue';
import { BokeUserAvatar } from '@devops/boke-devops-vue';
// function ArticleWrapper() {
//   return <BokeUserAvatar     is_highlight={true}
//           tag
//           data={{ name: 'Julone', dept_name: '运维部', avatar:'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp' }}
// ></BokeUserAvatar>;
// }

// export default ArticleWrapper;

export default defineComponent({
  setup() {
    function handleClick() {
      alert('Using defineComponent AP地方I');
    }
    return () => <BokeUserAvatar     is_highlight={true}
           tag
           data={{ name: 'Julone', dept_name: '运维部', avatar:'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp' }}
 ></BokeUserAvatar>;
  },
});
```

## Button API

### Props
