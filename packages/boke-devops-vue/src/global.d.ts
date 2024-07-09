import { HTMLAttributes } from 'vue';

// eslint-disable-next-line no-unused-vars
declare const PKG_VERSION: string;

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


//以下是jsx - ts 类型申明
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [emit: string]: any;
    }
  }
  interface Window {
    $wujie: {
      [key: string]: any
    }
  }
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [attr: string]: any;
  }

  interface CSSProperties {
    [attr: string]: any;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // todo
    [x: string]: any;
  }
}
