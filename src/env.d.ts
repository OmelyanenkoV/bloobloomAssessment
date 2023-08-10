/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'demo' | 'stage' | 'prod' | 'uat';
  }
}

declare global {
  interface Window {
    _config: any
  }
}

export {}
