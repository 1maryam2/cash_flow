import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
const base = '/cash_flow/';

export default defineConfig({
  base: base, 
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(base)
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      manifest: { 
        name: 'CashFlow - Учет финансов',
        short_name: 'CashFlow',
        description: 'Приложение для анализа и прогнозирования денежных потоков.',
        theme_color: '#2E2E38', 
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/cashflow-images': {
        target: 'http://localhost:9000',
        changeOrigin: true,
      },
    },
  },
});