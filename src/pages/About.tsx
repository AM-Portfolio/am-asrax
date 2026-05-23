import { motion } from 'motion/react';
import { Target, Users, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
            <h1 className="text-4xl lg:text-5xl font-display font-black mb-4">
              About ASRAX Technologies
            </h1>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Building the next generation of Fintech applications. We empower businesses with secure, scalable, and innovative financial technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-950 border-b border-slate-900' : 'bg-white border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-2xl border backdrop-blur-sm ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                isDark ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20' : 'bg-brand-100 text-brand-600'
              }`}>
                <Target size={22} />
              </div>
              <h2 className={`text-2xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Mission</h2>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                To democratize access to advanced financial tools by building secure, scalable, and innovative technology solutions that empower businesses to thrive in the digital economy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-2xl border backdrop-blur-sm ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                isDark ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-100 text-amber-600'
              }`}>
                <Lightbulb size={22} />
              </div>
              <h2 className={`text-2xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Vision</h2>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                To become the global standard for financial technology infrastructure, fostering a world where financial operations are seamless, transparent, and universally accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-950/40' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className={`text-2xl font-display font-bold mb-3 tracking-wider uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>Leadership</h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Meet the minds behind ASRAX Technologies.</p>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {[
              { name: 'ABHIMANYOU KUMAR', title: 'Director' },
              { name: 'SHIKHA SWARUP DEVANSHI', title: 'Director' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className={`rounded-2xl p-6 text-center border backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-100'
                }`}
              >
                <div className={`w-24 h-24 mx-auto rounded-full mb-4 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ${
                  isDark ? 'bg-slate-800' : 'bg-brand-50'
                }`}>
                  <Users className="text-brand-600" size={36} />
                </div>
                <h3 className={`text-lg font-bold mb-1 transition-colors group-hover:text-brand-600 ${isDark ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <p className="text-brand-600 font-semibold mb-3 text-xs">{member.title}</p>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Leading ASRAX Technologies with a focus on innovation and excellence in the Fintech landscape.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

