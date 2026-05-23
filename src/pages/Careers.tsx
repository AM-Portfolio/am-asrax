import { motion } from 'motion/react';
import { Briefcase, Heart, Cpu, Globe2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Careers() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const jobs: any[] = [];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      {/* Hero Section */}
      <section className={`pt-24 pb-16 overflow-hidden relative border-b transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 border-slate-200/50 text-slate-900'
      }`}>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-slate-300' 
                : 'bg-brand-50 border-brand-100 text-brand-750'
            }`}>
              Join ASRAX Technologies
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-black mb-4">
              Build the Future of Finance
            </h1>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              We're looking for passionate builders, thinkers, and innovators to join our mission in revolutionizing the Fintech industry with secure, scalable, and innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-950 border-b border-slate-900' : 'bg-white border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className={`text-2xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why Work With Us?</h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              At ASRAX Technologies, we believe in empowering our team to do their best work in an environment that fosters growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cpu className="text-brand-500" size={24} />,
                title: 'Cutting-Edge Tech',
                desc: 'Work with modern stacks and solve complex engineering challenges.'
              },
              {
                icon: <Heart className="text-rose-500" size={24} />,
                title: 'Health & Wellness',
                desc: 'Comprehensive health coverage and wellness programs for you and your family.'
              },
              {
                icon: <Globe2 className="text-emerald-500" size={24} />,
                title: 'Remote-First',
                desc: 'Work from anywhere with flexible hours and a supportive remote culture.'
              },
              {
                icon: <Briefcase className="text-amber-500" size={24} />,
                title: 'Career Growth',
                desc: 'Continuous learning opportunities, mentorship, and clear progression paths.'
              }
            ].map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-100 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  isDark ? 'bg-slate-800' : 'bg-white shadow-sm'
                }`}>
                  {perk.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{perk.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Placeholder */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-950/40' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="max-w-2xl">
              <h2 className={`text-2xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Open Positions</h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Explore our current openings. If you don't see a perfect fit, send us your resume anyway!
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="mailto:careers@asrax.in" className={`font-semibold flex items-center gap-2 text-sm transition-colors ${
                isDark ? 'text-brand-400 hover:text-brand-300' : 'text-brand-600 hover:text-brand-700'
              }`}>
                Email us your resume <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            {jobs.length > 0 ? (
              jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isDark 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-brand-500/30' 
                      : 'bg-white border-slate-200 hover:border-brand-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <h3 className={`text-lg font-bold group-hover:text-brand-600 transition-colors mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className={`px-2.5 py-0.5 rounded-full font-medium ${isDark ? 'bg-slate-850 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe2 size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block">
                    <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className={`text-center py-10 rounded-2xl border border-dashed transition-colors ${
                isDark ? 'bg-slate-900/30 border-slate-850' : 'bg-white border-slate-300'
              }`}>
                <p className="text-slate-500 font-medium text-sm">No open positions at the moment. Check back later!</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-500 italic text-[11px]">
              * Note: These are placeholder positions for the upcoming recruitment drive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

