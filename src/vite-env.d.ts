/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LANDING_CINEMATIC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
