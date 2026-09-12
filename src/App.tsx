import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Careers from './pages/Careers';
import Subscription from './pages/Subscription';

const SECTION_PATHS = new Set(['about', 'features', 'careers']);

/** Legacy `/#about` bookmarks → `/about` (and same for features/careers). */
function HashToPathRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    if (!hash || !SECTION_PATHS.has(hash)) return;
    navigate(`/${hash}`, { replace: true });
  }, [location.hash, navigate]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-navy-950 font-sans text-slate-100">
      <Navbar variant={isHome ? 'landing' : 'default'} />
      <HashToPathRedirect />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/careers" element={<Careers />} />
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
