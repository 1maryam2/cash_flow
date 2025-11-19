import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage'; 
import { AccountsListPage } from './pages/AccountsListPage/AccountsListPage'; 
import { AccountPage } from './pages/AccountPage/AccountPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="accounts" element={<AccountsListPage />} />
      <Route path="account/:id" element={<AccountPage />} />
    </Route>
  )
);

function App() {
  return <div>App component is no longer used for routing.</div>;
}

export default App;