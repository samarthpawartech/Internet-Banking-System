import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ScrollRestoration from './components/layout/ScrollRestoration.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <ScrollRestoration />
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
