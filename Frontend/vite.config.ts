import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint2';

const root = resolve(__dirname, 'src');

export default defineConfig({
  base: './',

  plugins: [react(), eslint({ fix: true })],
  resolve: {
    alias: {
      '@': resolve(root),
    },
  },
  server: {
    port: 5174,
  },
});
