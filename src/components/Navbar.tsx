import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/subscription' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-950/40 border-slate-900/50 text-white shadow-lg shadow-slate-950/10' 
        : 'bg-white/40 border-slate-200/40 text-slate-900 shadow-sm shadow-slate-200/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/logo.png" 
                  alt="ASRAX Logo" 
                  className="h-9 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
                theme === 'dark' ? 'text-white group-hover:text-brand-400' : 'text-slate-900 group-hover:text-brand-600'
              }`}>
                ASRAX
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-brand-500 relative py-1 px-1.5 rounded ${
                  location.pathname === link.path 
                    ? 'text-brand-500 font-semibold' 
                    : (theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950')
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[17px] left-1.5 right-1.5 h-0.5 bg-brand-500 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-200 focus:outline-none ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-yellow-400 hover:shadow-md hover:shadow-slate-950/20' 
                  : 'bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/40 hover:border-slate-300 text-slate-500 hover:text-slate-900'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a 
              href="mailto:support@asrax.in"
              className={`px-4.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-brand-500/10 border-brand-500/30 text-white hover:bg-brand-500/20 hover:border-brand-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                  : 'bg-slate-900 border-slate-950 text-white hover:bg-slate-800 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-200 focus:outline-none ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800 text-yellow-400' 
                  : 'bg-slate-100/40 border-slate-200/60 hover:bg-slate-200 text-slate-500'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-all duration-200 focus:outline-none ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800/60' 
                  : 'bg-slate-100/40 border-slate-200/60 text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden border-b backdrop-blur-xl transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-slate-950/80 border-slate-900/50 text-white' 
              : 'bg-white/80 border-slate-200/40 text-slate-900'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-brand-500/10 text-brand-500 font-semibold'
                    : (theme === 'dark' ? 'text-slate-300 hover:bg-slate-900/40 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:support@asrax.in"
              className={`w-full text-left block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                theme === 'dark' ? 'text-slate-300 hover:bg-slate-900/40 hover:text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

