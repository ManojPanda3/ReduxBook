import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      // Compression settings
      algorithm: 'gzip',
      threshold: 1024,
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:6000/',
    }
  }
});
