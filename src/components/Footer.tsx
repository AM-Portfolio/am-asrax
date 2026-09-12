import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const LINKEDIN_URL =
  'https://www.linkedin.com/company/asrax-technologies-private-limited/';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/5 bg-navy-950/90 py-12 text-slate-400 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="group mb-4 flex items-center gap-2.5">
              <img
                src="/brand-a.png"
                alt="ASRAX Logo"
                className="h-10 w-10 rounded-[10px] object-cover opacity-95 shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-opacity group-hover:opacity-100"
                width={40}
                height={40}
                decoding="async"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-electric-sky">
                ASRAX Technologies
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400/90">
              Building the next generation of Fintech applications. We empower businesses with
              secure, scalable, and innovative financial technology solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ASRAX on X (Twitter)"
                className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-500 transition-all hover:border-slate-700 hover:bg-slate-800/60 hover:text-electric-sky"
              >
                <Twitter size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ASRAX on LinkedIn"
                className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-500 transition-all hover:border-slate-700 hover:bg-slate-800/60 hover:text-electric-sky"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-slate-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="mailto:admin@asrax.in"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  admin@asrax.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ASRAX Technologies Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
