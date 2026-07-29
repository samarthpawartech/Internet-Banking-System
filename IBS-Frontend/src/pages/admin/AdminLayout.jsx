import { Outlet } from 'react-router-dom';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: 'House' },
  { path: '/admin/employees', label: 'Employee Management', icon: 'UserCog' },
  { path: '/admin/admins', label: 'Admin Management', icon: 'ShieldCheck' },
  { path: '/admin/customers', label: 'Customer Management', icon: 'Users' },
  { path: '/admin/settings', label: 'Banking Settings', icon: 'Settings' },
  { path: '/admin/security', label: 'Security', icon: 'Lock' },
  { path: '/admin/reports', label: 'Reports', icon: 'ChartColumn' },
];

export default function AdminLayout() {
  const { session, logout } = useAuth();
  return (
    <DashboardShell navItems={navItems} roleLabel="Admin Console" roleIcon="ShieldCheck" userName={session?.name} onLogout={logout}>
      <Outlet />
    </DashboardShell>
  );
}
