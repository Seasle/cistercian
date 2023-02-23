import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cistercian/' : '/',
  plugins: [react(), splitVendorChunkPlugin()],
}));
