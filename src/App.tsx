import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subscription from './pages/Subscription';

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') return;
    const hash = location.hash.replace('#', '');
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-navy-950 font-sans text-slate-100">
      <Navbar variant={isHome ? 'landing' : 'default'} />
      <ScrollToHash />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/features" element={<Navigate to="/#features" replace />} />
          <Route path="/careers" element={<Navigate to="/#careers" replace />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
