import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import SearchPopup from './SearchPopup.jsx';
import MobileDrawer from './MobileDrawer.jsx';
import ScrollTopButton from './ScrollTopButton.jsx';
import FloatingChatButton from './FloatingChatButton.jsx';

export default function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <SearchPopup />
      <MobileDrawer />
      <ScrollTopButton />
      <FloatingChatButton />
    </>
  );
}
