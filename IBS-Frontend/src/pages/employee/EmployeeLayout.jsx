import { Outlet } from 'react-router-dom';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/employee', label: 'Dashboard', icon: 'House' },
  { path: '/employee/customers', label: 'Customer Management', icon: 'Users' },
  { path: '/employee/accounts', label: 'Account Operations', icon: 'UserCog' },
  { path: '/employee/transactions', label: 'Transactions', icon: 'ListChecks' },
  { path: '/employee/reports', label: 'Reports', icon: 'ChartColumn' },
];

export default function EmployeeLayout() {
  const { session, logout } = useAuth();
  return (
    <DashboardShell navItems={navItems} roleLabel="Employee Portal" roleIcon="UserCog" userName={session?.name} onLogout={logout}>
      <Outlet />
    </DashboardShell>
  );
}
