import { Routes, Route, Outlet } from 'react-router-dom';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import AccountsPage from '@/pages/dashboard/AccountsPage';
import TransferPage from '@/pages/dashboard/TransferPage';

function DashboardLayout() {
  return (
    <DashboardShell>
      <Outlet />
    </DashboardShell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="transfer" element={<TransferPage />} />
      </Route>
    </Routes>
  );
}
