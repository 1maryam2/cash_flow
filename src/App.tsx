// src/App.tsx

import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage'; 
import { AccountsListPage } from './pages/AccountsListPage/AccountsListPage'; 
import { AccountPage } from './pages/AccountPage/AccountPage';

// Создаем роутер
export const router = createBrowserRouter(
  // 1. Описываем структуру маршрутов
  createRoutesFromElements(
    // Здесь basename НЕ указывается
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="accounts" element={<AccountsListPage />} />
      <Route path="account/:id" element={<AccountPage />} />
    </Route>
  ),
  // 2. Вторым аргументом передаем опции, включая basename
  {
    basename: "/cash_flow/",
  }
);

// Компонент App.tsx больше не используется для роутинга
function App() {
  return <div>App component is no longer used for routing.</div>;
}

export default App;