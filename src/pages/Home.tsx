import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      {/* Hero Section */}
      <section className={`relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-gradient-to-br from-brand-50 via-slate-50 to-white border-slate-200/50'
      }`}>
        {/* Animated glowing orbs in the background (pastel/light theme) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 30, -30, 0], 
              y: [0, -30, 30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute -top-1/3 left-1/4 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-60 ${
              isDark ? 'bg-brand-600/10 mix-blend-screen' : 'bg-blue-200/40 mix-blend-multiply'
            }`}
          />
          <motion.div
            animate={{ 
              x: [0, -25, 25, 0], 
              y: [0, 25, -25, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-50 ${
              isDark ? 'bg-purple-600/10 mix-blend-screen' : 'bg-purple-200/30 mix-blend-multiply'
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300' 
                    : 'bg-brand-50 border-brand-100 text-brand-700'
                }`}>
                  <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                  Innovating Fintech Solutions
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className={`text-4xl lg:text-6xl font-display font-black tracking-tight mb-6 leading-tight transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Empowering the Future of <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark ? 'from-brand-400 to-indigo-400' : 'from-brand-600 to-indigo-600'
                }`}>Finance</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className={`text-lg mb-8 leading-relaxed transition-colors ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                ASRAX Technologies builds secure, scalable, and innovative financial technology solutions that empower businesses to thrive in the digital economy.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg ${
                    isDark 
                      ? 'bg-white text-slate-950 hover:bg-slate-100 shadow-white/5' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
                  }`}
                >
                  Discover Our Vision
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/careers"
                  className={`inline-flex items-center justify-center gap-2 border px-7 py-3.5 rounded-full font-bold transition-colors ${
                    isDark 
                      ? 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800' 
                      : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Join the Team
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className={`py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className={`text-3xl lg:text-4xl font-display font-bold mb-5 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Advanced Financial Intelligence
              </h2>
              <p className={`text-base mb-6 transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Our Fintech ecosystem provides deep insights into your financial health through automated analysis and AI-driven recommendations.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'AI Portfolio Insights & Health Checks',
                  'AI Market Trend & Sentiment Analysis',
                  'AI Trade Setup & Behavior Analytics',
                  'Custom AI Bots & Document Parsing'
                ].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                    className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    <CheckCircle2 className="text-brand-500" size={18} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`p-3.5 rounded-xl border inline-block ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-100'
                }`}
              >
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Status</p>
                <p className="text-brand-600 font-semibold flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  In Active Development
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className={`aspect-square md:aspect-[4/3] rounded-2xl border shadow-2xl overflow-hidden flex items-center justify-center relative group backdrop-blur-md transition-colors ${
                isDark ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800' : 'bg-gradient-to-br from-slate-100 to-slate-50 border-slate-200'
              }`}>
                {/* Decorative UI elements */}
                <div className={`absolute top-6 left-6 right-6 h-8 rounded-lg border shadow-sm transition-colors ${
                  isDark ? 'bg-slate-800/40 border-slate-700/30' : 'bg-white/50 border-white/20'
                }`}></div>
                <div className={`absolute bottom-6 left-6 w-1/3 h-20 rounded-lg border shadow-sm transition-colors ${
                  isDark ? 'bg-slate-800/40 border-slate-700/30' : 'bg-white/50 border-white/20'
                }`}></div>
                <div className={`absolute bottom-6 right-6 w-1/2 h-20 rounded-lg border shadow-sm transition-colors ${
                  isDark ? 'bg-slate-800/40 border-slate-700/30' : 'bg-white/50 border-white/20'
                }`}></div>

                <div className="relative z-10 text-center p-8">
                  <div className={`w-16 h-16 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 transition-colors ${
                    isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white shadow-lg'
                  }`}>
                    <BarChart3 className="text-brand-500" size={32} />
                  </div>
                  <h3 className={`text-xl font-display font-bold mb-1 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>ASRAX Portal</h3>
                  <p className="text-xs text-slate-500">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-950/40 border-b border-slate-900' : 'bg-slate-50 border-b border-slate-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className={`text-2xl font-display font-bold mb-3 uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Our Pillars</h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              We are committed to democratizing financial technology and empowering businesses through intelligent, seamless infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="text-brand-500" size={24} />,
                title: 'Democratizing Access',
                desc: 'Making advanced financial tools available to everyone, from retail investors to global enterprises.'
              },
              {
                icon: <Cpu className="text-indigo-500" size={24} />,
                title: 'Seamless Operations',
                desc: 'Building infrastructure that makes financial management transparent and universally accessible.'
              },
              {
                icon: <BarChart3 className="text-emerald-500" size={24} />,
                title: 'Empowering Growth',
                desc: 'Providing the technology solutions that help businesses thrive and scale in the digital economy.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-brand-500/30' 
                    : 'bg-white border-slate-100 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isDark ? 'bg-slate-800' : 'bg-slate-50'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-brand-950/20 text-white' : 'bg-brand-600 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Have Questions or Feedback?</h2>
          <p className="text-base text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help you with any inquiries about our Fintech solutions. If you encounter any problems or have a feature you'd like us to add or improve, we'd love to hear from you!
          </p>
          <a 
            href="mailto:support@asrax.in"
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg ${
              isDark ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-950/20' : 'bg-white text-brand-600 hover:bg-brand-50'
            }`}
          >
            Send Feedback to support@asrax.in
          </a>
        </div>
      </section>
    </div>
  );
}
