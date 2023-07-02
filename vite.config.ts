import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
const config = {
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
};

export default defineConfig(config);
