import { Outlet } from 'react-router-dom';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/staff', label: 'Dashboard', icon: 'House' },
  { path: '/staff/customers', label: 'Customer Management', icon: 'Users' },
  { path: '/staff/accounts', label: 'Account Operations', icon: 'UserCog' },
  { path: '/staff/transactions', label: 'Transactions', icon: 'ListChecks' },
  { path: '/staff/reports', label: 'Reports', icon: 'ChartColumn' },
];

export default function StaffLayout() {
  const { session, logout } = useAuth();
  return (
    <DashboardShell navItems={navItems} roleLabel="Employee Portal" roleIcon="UserCog" userName={session?.name} onLogout={logout}>
      <Outlet />
    </DashboardShell>
  );
}
