import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import RemoteAssets from 'vite-plugin-remote-assets';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), RemoteAssets()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
