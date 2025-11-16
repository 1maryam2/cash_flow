// vite.config.ts - ПОЛНАЯ И ПРАВИЛЬНАЯ ВЕРСИЯ

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // <<< 1. Импортируем плагин для PWA

export default defineConfig({
  // <<< 2. Настройка для GitHub Pages >>>
  // Укажите здесь ТОЧНОЕ НАЗВАНИЕ вашего репозитория на GitHub.
  // Например, если ваш репозиторий `https://github.com/YourName/cashflow-frontend`,
  // то здесь должно быть '/cashflow-frontend/'.
  base: '/<ИМЯ-ВАШЕГО-РЕПОЗИТОРИЯ>/',

  plugins: [
    react(),
    // <<< 3. Настройка плагина PWA >>>
    VitePWA({
      registerType: 'autoUpdate', // Автоматически обновлять приложение у пользователя
      manifest: {
        // Это "паспорт" вашего приложения, который увидит телефон
        name: 'CashFlow - Учет финансов',
        short_name: 'CashFlow',
        description: 'Приложение для анализа и прогнозирования денежных потоков.',
        theme_color: '#2E2E38', // Цвет шапки браузера на мобильных
        icons: [
          // Иконки для рабочего стола. Их нужно создать и положить в папку `public`.
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

  // Ваши настройки прокси остаются без изменений
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