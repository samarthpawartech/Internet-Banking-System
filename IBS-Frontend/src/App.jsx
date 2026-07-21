import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import ScrollRestoration from './components/layout/ScrollRestoration.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollRestoration />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}
