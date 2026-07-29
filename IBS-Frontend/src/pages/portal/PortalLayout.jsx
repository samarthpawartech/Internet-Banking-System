import { Outlet } from 'react-router-dom';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/portal', label: 'Overview', icon: 'House' },
  { path: '/portal/statement', label: 'Statement', icon: 'FileText' },
  { path: '/portal/transfer', label: 'Transfer Money', icon: 'Send' },
  { path: '/portal/beneficiaries', label: 'Beneficiaries', icon: 'Users' },
  { path: '/portal/bills', label: 'Bills & Recharge', icon: 'Receipt' },
  { path: '/portal/cards', label: 'Card Services', icon: 'CreditCard' },
  { path: '/portal/profile', label: 'Profile', icon: 'User' },
];

export default function PortalLayout() {
  const { session, logout } = useAuth();
  return (
    <DashboardShell navItems={navItems} roleLabel="Customer Portal" roleIcon="UserCheck" userName={session?.name} onLogout={logout}>
      <Outlet />
    </DashboardShell>
  );
}
