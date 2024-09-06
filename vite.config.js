import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    compression({
      // Compression settings
      algorithm: 'gzip',
      threshold: 1024,
    }),
  ],
  server: {
    https: true,
    proxy: {
      '/api': {
        // target: 'https://redux-book-backend.vercel.app/',
        target: 'http://localhost:6000/',
        changeOrigin: true,
      },
    }
  }
});
