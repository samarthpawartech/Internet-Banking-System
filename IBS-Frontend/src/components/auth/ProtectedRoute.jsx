import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const LOGIN_PATHS = { customer: '/customer-login', employee: '/staff-login', admin: '/admin-login' };

export default function ProtectedRoute({ role }) {
  const { session, ready } = useAuth();
  if (!ready) return null;
  if (!session || session.role !== role) {
    return <Navigate to={LOGIN_PATHS[role]} replace />;
  }
  return <Outlet />;
}
