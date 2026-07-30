import { Outlet } from 'react-router-dom';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/customer', label: 'Overview', icon: 'House' },
  { path: '/customer/statement', label: 'Statement', icon: 'FileText' },
  { path: '/customer/transfer', label: 'Transfer Money', icon: 'Send' },
  { path: '/customer/beneficiaries', label: 'Beneficiaries', icon: 'Users' },
  { path: '/customer/bills', label: 'Bills & Recharge', icon: 'Receipt' },
  { path: '/customer/cards', label: 'Card Services', icon: 'CreditCard' },
  { path: '/customer/profile', label: 'Profile', icon: 'User' },
];

export default function CustomerLayout() {
  const { session, logout } = useAuth();
  return (
    <DashboardShell navItems={navItems} roleLabel="Customer Portal" roleIcon="UserCheck" userName={session?.name} onLogout={logout}>
      <Outlet />
    </DashboardShell>
  );
}
