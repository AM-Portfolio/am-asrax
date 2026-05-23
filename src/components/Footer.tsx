import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`border-t py-12 mt-auto backdrop-blur-xl relative z-10 transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-950/20 border-slate-900/50 text-slate-400 shadow-[0_-8px_32px_0_rgba(0,0,0,0.2)]' 
        : 'bg-white/20 border-slate-200/40 text-slate-600 shadow-[0_-8px_32px_0_rgba(31,38,135,0.02)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src="/logo.png" 
                alt="ASRAX Logo" 
                className="h-9 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
                theme === 'dark' ? 'text-white group-hover:text-brand-400' : 'text-slate-900 group-hover:text-brand-600'
              }`}>
                ASRAX Technologies
              </span>
            </Link>
            <p className={`text-sm max-w-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400/90' : 'text-slate-500/90'}`}>
              Building the next generation of Fintech applications. We empower businesses with secure, scalable, and innovative financial technology solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className={`p-2 rounded-full border transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-500 hover:text-brand-400' 
                  : 'bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/40 hover:border-slate-300 text-slate-400 hover:text-brand-600'
              }`}>
                <Twitter size={18} />
              </a>
              <a href="#" className={`p-2 rounded-full border transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-500 hover:text-brand-400' 
                  : 'bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/40 hover:border-slate-300 text-slate-400 hover:text-brand-600'
              }`}>
                <Linkedin size={18} />
              </a>
              <a href="#" className={`p-2 rounded-full border transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-500 hover:text-brand-400' 
                  : 'bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/40 hover:border-slate-300 text-slate-400 hover:text-brand-600'
              }`}>
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`text-sm font-bold tracking-wider uppercase mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>About Us</Link>
              </li>
              <li>
                <Link to="/careers" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>Careers</Link>
              </li>
              <li>
                <a href="mailto:support@asrax.in" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>support@asrax.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-sm font-bold tracking-wider uppercase mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>Privacy Policy</a>
              </li>
              <li>
                <a href="#" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
          theme === 'dark' ? 'border-slate-900/50' : 'border-slate-200/40'
        }`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-450'}`}>
            &copy; {new Date().getFullYear()} ASRAX Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  );
}

