# 用户头像

## Functional Component

```tsx
/**
 * compact: true
 */
import { defineComponent } from 'vue';
import { BokeUserAvatar } from '@devops/boke-devops-vue';
export default defineComponent({
  setup() {
    return () => <BokeUserAvatar     is_highlight={true}
           tag
           data={{ name: 'Julone', dept_name: '运维部', avatar:'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp' }}
 ></BokeUserAvatar>;
  },
});
```

## Button API

### Props
