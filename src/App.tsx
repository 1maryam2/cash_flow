import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage'; 
import { AccountsListPage } from './pages/AccountsListPage/AccountsListPage'; 
import { AccountPage } from './pages/AccountPage/AccountPage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} /> 
          <Route path="accounts" element={<AccountsListPage />} />
          <Route path="account/:id" element={<AccountPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;