import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa'; // Импортируем плагин

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Автоматическое обновление PWA
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // Файлы, которые нужно включить
      manifest: {
        name: 'My Vite PWA', // Название вашего приложения
        short_name: 'VitePWA', // Короткое название
        description: 'A simple PWA using Vite and React', // Описание
        theme_color: '#ffffff', // Цвет темы
        icons: [
          {
            src: 'pwa-192x192.png', // Путь к иконке 192x192
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Путь к иконке 512x512
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Масштабируемая иконка
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    sourcemap: true,
  },
});
