import { motion } from 'motion/react';
import { ArrowRight, BarChart3, PieChart, CalendarDays, Bot, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    title: 'AI-Powered Market Insights & Charting',
    description: 'Track over 30+ global indices in real-time. Access AI-driven market sentiment reports, trend predictions, and make informed decisions with deeply integrated, interactive TradingView charts and our proprietary ETF Explorer.',
    image: '/assets/features/market_data_clean_1779533417197.png',
    icon: BarChart3,
  },
  {
    title: 'Deep Portfolio Analytics & AI Insights',
    description: 'Go beyond simple P&L. Visualize your asset allocation, dive into interactive sector heatmaps, track performance across unlimited portfolios simultaneously, and receive automated AI portfolio health checks and rebalancing advice.',
    image: '/assets/features/portfolio_clean_1779533435067.png',
    icon: PieChart,
  },
  {
    title: 'AI-Enhanced Trade Journaling & Management',
    description: 'Log every thought and setup. Let our AI analyze your trading behavior, check rule compliance, automatically categorize trades, and optimize your win/loss ratio with personalized coaching.',
    image: '/assets/features/journal_clean_1779533453205.png',
    icon: CalendarDays,
  },
  {
    title: 'AI Document Intelligence & Custom Bots',
    description: 'Let AI handle the heavy lifting. Automatically parse complex financial documents, deploy custom AI trading bots, and receive real-time predictive insights powered by the ASRAX AI Core.',
    image: '/assets/features/ai_bots_clean_1779533468958.png',
    icon: Bot,
  }
];

export default function Features() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Hero Section with Animated AI Background */}
      <div className={`relative isolate px-6 pt-14 lg:px-8 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 text-slate-900 border-b border-slate-200/50'
      }`}>
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, -50, 0], 
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute -top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl opacity-50 ${
              isDark 
                ? 'bg-gradient-to-br from-brand-600/30 to-blue-600/20 mix-blend-screen' 
                : 'bg-gradient-to-br from-blue-200/50 to-indigo-100/40 mix-blend-multiply'
            }`}
          />
          <motion.div
            animate={{ 
              x: [0, -100, 100, 0], 
              y: [0, 100, -100, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute top-1/2 right-1/4 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full blur-3xl opacity-40 ${
              isDark 
                ? 'bg-gradient-to-tl from-indigo-500/20 to-purple-500/20 mix-blend-screen' 
                : 'bg-gradient-to-tl from-purple-200/40 to-pink-100/30 mix-blend-multiply'
            }`}
          />
          
          {/* Subtle Grid overlay for tech feel */}
          <div className={`absolute inset-0 bg-repeat opacity-50 z-0 ${
            isDark 
              ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwaiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"
              : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwaiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"
          }`} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl py-24 sm:py-32 lg:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm ${
              isDark 
                ? 'border-brand-500/30 bg-brand-500/10 text-brand-300' 
                : 'border-brand-200 bg-brand-50 text-brand-700'
            }`}>
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              Powered by ASRAX AI Core
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-display leading-tight">
              Smarter Tech for a <br className="hidden sm:block" />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-brand-400 to-blue-400' : 'from-brand-600 to-indigo-600'
              }`}>Profitable Future</span>
            </h1>
            <p className={`mt-6 text-lg leading-8 max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Leverage the power of ASRAX AI to gain absolute control over your portfolio. Predict market movements, prevent sudden downfalls, and receive highly accurate future return estimations to outsmart the market.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Feature Sections */}
      <div className={`py-24 sm:py-32 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              const Icon = feature.icon;
              
              return (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col gap-16 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2 flex justify-center w-full">
                    <div className={`w-full max-w-lg aspect-video rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center transition-all duration-500 border backdrop-blur-sm ${
                      isDark 
                        ? 'bg-slate-900/40 border-slate-800' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className={`mb-4 p-4 rounded-full ${isDark ? 'bg-slate-800/80 text-brand-400' : 'bg-brand-50 text-brand-600'}`}>
                        <Lock className="h-8 w-8" />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Preview Hidden</h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        This module is currently under development. Detailed interface previews will be available soon.
                      </p>
                      <div className="mt-6 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 lg:px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 mb-6">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature.title}
                    </h2>
                    <p className={`mt-6 text-lg leading-8 transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {feature.description}
                    </p>
                    <div className="mt-8">
                      <Link 
                        to="/subscription" 
                        className="inline-flex items-center gap-x-2 text-brand-600 font-semibold hover:text-brand-500 transition-colors"
                      >
                        Unlock this feature <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`transition-colors duration-300 border-t ${
        isDark ? 'bg-brand-950/10 border-slate-900' : 'bg-brand-50 border-slate-100'
      }`}>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Ready to upgrade your trading?
            <br />
            <span className="text-brand-600">Start using these tools today.</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/subscription"
              className="rounded-md bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              View Pricing
            </Link>
            <a href="https://am.asrax.in" className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-slate-900 hover:text-slate-700'
            }`}>
              Log in <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

