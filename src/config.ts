// Мы говорим TypeScript: "В объекте window МОЖЕТ быть свойство __TAURI__"
declare global {
  interface Window {
    __TAURI__?: object;
  }
}
const isTauri = !!window.__TAURI__;

const TAURI_API_URL = 'http://localhost:8081'; 
const TAURI_IMAGE_URL = 'http://localhost:9000';

// Экспортируем правильные URL
export const API_BASE_URL = isTauri ? TAURI_API_URL : '';
export const IMAGE_BASE_URL = isTauri ? TAURI_IMAGE_URL : '';