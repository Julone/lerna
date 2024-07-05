import { BokeUserAvatar } from '@devops/boke-devops-vue';
import { defineComponent, ref } from 'vue';
import './demo.less';

export default defineComponent({
  setup() {
    const count = ref(0);
    const handleClick = (e: Event) => {
      count.value++;
    };
    return () => (
      <div class="demo">
        <BokeUserAvatar data={{ name: 'Julone', dept_name: '运维部', avatar:'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'}}>
          count {count.value}
        </BokeUserAvatar>
      </div>
    );
  },
});
