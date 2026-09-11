import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';
import { APP_URL } from '../landing/content/products';

interface NavbarProps {
  variant?: 'default' | 'landing';
}

type SectionId = 'home' | 'about' | 'features' | 'careers';

const links: { name: string; hash: string; id: SectionId }[] = [
  { name: 'Home', hash: '', id: 'home' },
  { name: 'About', hash: 'about', id: 'about' },
  { name: 'Features', hash: 'features', id: 'features' },
  { name: 'Careers', hash: 'careers', id: 'careers' },
];

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '/');
    return;
  }
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${hash}`);
  }
}

/** Which page section is in view — drives the nav underline. */
function useActiveSection(enabled: boolean): SectionId {
  const [active, setActive] = useState<SectionId>('home');

  useEffect(() => {
    if (!enabled) return;

    const sectionIds: SectionId[] = ['about', 'features', 'careers'];

    const pick = () => {
      const y = window.scrollY + 120; // below fixed nav
      let current: SectionId = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (y >= top) current = id;
      }

      // Still in the cinematic pin / hero → Home
      const about = document.getElementById('about');
      if (about && window.scrollY + window.innerHeight * 0.35 < about.offsetTop) {
        current = 'home';
      }

      setActive(current);
    };

    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    // Pin layout settles late
    const t1 = window.setTimeout(pick, 200);
    const t2 = window.setTimeout(pick, 800);
    return () => {
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [enabled]);

  return active;
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const overlay = variant === 'landing' || isHome;
  const activeSection = useActiveSection(isHome);

  const onNavClick = (e: MouseEvent, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    setIsOpen(false);
    scrollToHash(hash);
  };

  return (
    <nav
      className={`${
        overlay ? 'fixed inset-x-0 top-0' : 'sticky top-0'
      } z-50 border-b transition-all duration-300 ${
        overlay
          ? 'border-transparent bg-gradient-to-b from-navy-950/80 to-transparent text-white shadow-none'
          : 'border-white/5 bg-navy-950/90 text-white shadow-lg shadow-navy-950/20 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToHash('');
                }
              }}
              className="group flex items-center gap-2.5"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14 }}
              >
                <img
                  src="/brand-a.png"
                  alt="ASRAX"
                  className="h-10 w-10 rounded-[10px] object-cover shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                  width={40}
                  height={40}
                  decoding="async"
                />
              </motion.div>
              <span className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-electric-sky">
                ASRAX
              </span>
            </Link>
          </div>

          <div className="hidden items-center space-x-6 md:flex">
            {links.map((link) => {
              const href = link.hash ? `/#${link.hash}` : '/';
              const isActive = isHome && activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  to={href}
                  onClick={(e) => onNavClick(e, link.hash)}
                  className={`relative rounded px-1.5 py-1 text-sm font-medium transition-all duration-200 hover:text-electric-sky ${
                    isActive
                      ? 'font-semibold text-electric-sky'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[17px] left-1.5 right-1.5 h-0.5 rounded-full bg-electric-sky"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-electric-sky px-4.5 py-1.5 text-xs font-bold text-navy-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-200 hover:bg-soft-cyan"
            >
              Login
            </a>
            <a
              href="mailto:admin@asrax.in"
              className="rounded-full border border-electric-sky/40 bg-electric-sky/15 px-4.5 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-electric-sky/25"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-2 text-slate-300 transition-all hover:bg-slate-800/60 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-slate-900/50 bg-navy-950/95 text-white backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  to={link.hash ? `/#${link.hash}` : '/'}
                  onClick={(e) => onNavClick(e, link.hash)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                    isActive
                      ? 'bg-electric-sky/10 font-semibold text-electric-sky'
                      : 'text-slate-300 hover:bg-slate-900/40 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-electric-sky transition-all hover:bg-electric-sky/10"
            >
              Login
            </a>
            <a
              href="mailto:admin@asrax.in"
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 transition-all hover:bg-slate-900/40 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
