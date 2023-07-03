import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgrPlugin from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
const config = {
  plugins: [react(), vanillaExtractPlugin(), viteSvgrPlugin()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
};

export default defineConfig(config);
