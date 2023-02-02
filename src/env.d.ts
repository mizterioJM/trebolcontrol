/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PHONE: string;
  readonly PHONE_TWO: string;
  readonly EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
