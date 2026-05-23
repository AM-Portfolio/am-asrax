import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Subscription() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started with basic tracking.',
      originalPriceMonthly: 499,
      priceMonthly: 0,
      originalPriceAnnual: 399,
      priceAnnual: 0,
      features: [
        '1 Portfolio tracking',
        'End-of-day market data',
        'Basic security search & charting',
        'Standard trade journal',
        'Up to 5 AI Document Parses/mo',
        'Basic AI Portfolio Summary (1/mo)'
      ],
      cardClass: isDark 
        ? 'bg-slate-900/60 border-slate-800 text-white' 
        : 'bg-white/60 border-slate-200/80 text-slate-800 shadow-sm',
      textClass: isDark ? 'text-white' : 'text-slate-900',
      descriptionClass: isDark ? 'text-slate-400' : 'text-slate-500',
      buttonClass: isDark 
        ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' 
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200',
      iconClass: isDark ? 'text-brand-400' : 'text-slate-500',
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Advanced tools for active investors and traders.',
      originalPriceMonthly: 2999,
      priceMonthly: 999,
      originalPriceAnnual: 2399,
      priceAnnual: 799,
      features: [
        'Up to 5 Portfolios',
        'Real-time indices tracking',
        'Interactive TradingView charts',
        'Interactive sector heatmaps',
        'Calendar-based trade analytics',
        'Win/Loss ratio tracking',
        'Up to 50 AI Document Parses/mo',
        'Auto Trade Categorization',
        'AI Portfolio Insights & Health Check',
        'AI Trade Performance Analytics'
      ],
      cardClass: isDark 
        ? 'bg-brand-950/20 border-brand-500/40 shadow-lg shadow-brand-500/5 text-white' 
        : 'bg-white/80 border-brand-300 shadow-lg shadow-brand-500/5 text-slate-900',
      textClass: isDark ? 'text-white' : 'text-slate-900',
      descriptionClass: isDark ? 'text-slate-300' : 'text-slate-600',
      buttonClass: isDark 
        ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/10' 
        : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-500/10',
      iconClass: isDark ? 'text-brand-400' : 'text-brand-600',
      buttonText: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Premium',
      description: 'The ultimate suite for professionals and active traders.',
      originalPriceMonthly: 3998,
      priceMonthly: 1999,
      originalPriceAnnual: 3198,
      priceAnnual: 1599,
      features: [
        'Basket creation & management',
        'One-click basket execution',
        'Advanced trade management',
        'Up to 20 Portfolios & Analytics',
        'ETF Explorer & key metrics',
        'Up to 200 AI Document Parses/mo',
        'Custom AI Trading Bots',
        'Predictive Market Analytics',
        'AI Portfolio Rebalancing Advice',
        'AI Market Sentiment Analysis',
        'AI Trade Setup Coach'
      ],
      cardClass: isDark 
        ? 'bg-slate-900/60 border-purple-500/20 text-white' 
        : 'bg-white/60 border-purple-300/80 text-slate-800 shadow-sm',
      textClass: isDark ? 'text-white' : 'text-slate-900',
      descriptionClass: isDark ? 'text-slate-400' : 'text-slate-500',
      buttonClass: isDark 
        ? 'bg-white text-slate-900 hover:bg-slate-100' 
        : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-500/10',
      iconClass: isDark ? 'text-purple-400' : 'text-purple-600',
      buttonText: 'Get Premium',
      popular: false
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions and unlimited usage for scaling teams.',
      originalPriceMonthly: 0,
      priceMonthly: 0,
      originalPriceAnnual: 0,
      priceAnnual: 0,
      features: [
        'Unlimited Portfolios & Analytics',
        'Unlimited AI Document Parsing',
        'Enterprise Custom AI Agents',
        'Dedicated Account Manager',
        'Custom API Access',
        'White-label Reports',
        'Advanced Team Permissions',
        'Priority 24/7 Support',
        'On-premise Deployment'
      ],
      cardClass: isDark 
        ? 'bg-slate-900/40 border-slate-800 text-white' 
        : 'bg-slate-50/60 border-slate-200 text-slate-800 shadow-sm',
      textClass: isDark ? 'text-white' : 'text-slate-900',
      descriptionClass: isDark ? 'text-slate-400' : 'text-slate-500',
      buttonClass: isDark 
        ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' 
        : 'bg-slate-800 text-white hover:bg-slate-900 border border-slate-800',
      iconClass: isDark ? 'text-slate-400' : 'text-slate-500',
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className={`min-h-[calc(100vh-4rem)] flex items-center py-6 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 text-slate-900'
    }`}>
      {/* Animated glowing orbs in the background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 40, -20, 0], 
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/3 left-1/4 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-60 ${
            isDark ? 'bg-brand-600/10 mix-blend-screen' : 'bg-blue-200/40 mix-blend-multiply'
          }`}
        />
        <motion.div
          animate={{ 
            x: [0, -30, 30, 0], 
            y: [0, 30, -30, 0],
            scale: [1, 1.25, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-50 ${
            isDark ? 'bg-purple-600/10 mix-blend-screen' : 'bg-purple-200/30 mix-blend-multiply'
          }`}
        />
        {/* Fine grid lines */}
        <div className={`absolute inset-0 bg-repeat opacity-60 ${
          isDark 
            ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwaiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"
            : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwaiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"
        }`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center relative z-10">
        
        {/* Toggle switch */}
        <div className="flex justify-center mb-8">
          <div className={`relative flex items-center p-0.5 rounded-full backdrop-blur-md border ${
            isDark 
              ? 'bg-slate-900/80 border-slate-800' 
              : 'bg-slate-200/60 border-slate-300/40'
          }`}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 w-24 rounded-full py-1 text-xs font-semibold transition-colors duration-200 focus:outline-none ${
                !isAnnual 
                  ? (isDark ? 'text-white' : 'text-slate-900') 
                  : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 w-24 rounded-full py-1 text-xs font-semibold transition-colors duration-200 focus:outline-none ${
                isAnnual 
                  ? (isDark ? 'text-white' : 'text-slate-900') 
                  : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
              }`}
            >
              Annually
            </button>
            <motion.div
              className={`absolute left-0.5 top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full shadow-sm ${
                isDark ? 'bg-brand-600' : 'bg-white'
              }`}
              animate={{ x: isAnnual ? '100%' : '0%' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            {/* Absolute positioned badge next to the toggle to prevent layout shifting */}
            {isAnnual && (
              <span className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm border ${
                isDark 
                  ? 'text-brand-400 bg-brand-500/10 border-brand-500/20' 
                  : 'text-brand-700 bg-brand-100 border-brand-200/50'
              }`}>
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Grid cards container */}
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-6 lg:mx-auto lg:max-w-7xl xl:gap-8 lg:grid-cols-4 items-stretch w-full">
          {plans.map((plan, planIdx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const originalPrice = isAnnual ? plan.originalPriceAnnual : plan.originalPriceMonthly;
            const discount = originalPrice > 0 ? Math.round((1 - price / originalPrice) * 100) : 0;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: planIdx * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className={`rounded-2xl p-4.5 border flex flex-col justify-start backdrop-blur-md relative ${plan.cardClass}`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 left-0 right-0 mx-auto w-fit px-3 py-0.5 rounded-full bg-brand-600 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}
                
                {/* 1. Top Section: Name, Description, Price (Aligned height container) */}
                <div className="flex flex-col h-[155px] justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold tracking-tight ${plan.textClass}`}>
                        {plan.name}
                      </h3>
                    </div>
                    <p className={`mt-1 text-xs leading-normal ${plan.descriptionClass}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div>
                    <div className={`flex items-center justify-between border-b pb-3 ${
                      isDark ? 'border-slate-800' : 'border-slate-200/60'
                    }`}>
                      <div className="flex items-baseline gap-x-1.5">
                        {plan.name === 'Enterprise' ? (
                          <span className={`text-2xl font-black tracking-tight ${plan.textClass}`}>
                            Custom
                          </span>
                        ) : (
                          <>
                            <span className={`text-2xl font-black tracking-tight ${plan.textClass}`}>
                              ₹{price}
                            </span>
                            <span className={`text-sm line-through ${plan.descriptionClass} opacity-50`}>
                              ₹{originalPrice}
                            </span>
                            <span className={`text-[10px] ${plan.descriptionClass}`}>/mo</span>
                          </>
                        )}
                      </div>
                      {plan.name !== 'Enterprise' && discount > 0 && (
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                          isDark 
                            ? 'bg-brand-500/10 text-brand-400 border-brand-500/20' 
                            : 'bg-brand-100/80 text-brand-700 border-brand-200/60'
                        }`}>
                          {discount}% Off
                        </span>
                      )}
                    </div>
                    
                    {/* Fixed billing info row to keep alignment consistent */}
                    <div className="h-4 mt-2">
                      {plan.name === 'Enterprise' ? (
                        <p className={`text-[10px] font-medium ${plan.descriptionClass} opacity-80`}>
                          Contact us for team pricing
                        </p>
                      ) : price === 0 ? (
                        <p className={`text-[10px] font-medium ${plan.descriptionClass} opacity-80`}>
                          Free forever
                        </p>
                      ) : isAnnual ? (
                        <p className={`text-[10px] font-medium ${plan.descriptionClass} opacity-80`}>
                          Billed annually (₹{price * 12}/yr)
                        </p>
                      ) : (
                        <p className={`text-[10px] font-medium ${plan.descriptionClass} opacity-80`}>
                          Billed monthly
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Button Section (Starts at exact same vertical offset in all cards) */}
                <div className="mt-4">
                  <a
                    href="https://am.asrax.in"
                    className={`block w-full rounded-lg py-2 px-3 text-center text-xs font-bold leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </a>
                </div>

                {/* 3. Features list section (takes remaining vertical space) */}
                <div className="flex-grow mt-5">
                  <ul role="list" className={`space-y-2 text-xs ${plan.descriptionClass}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-2 items-start">
                        <Check className={`h-4 w-4 mt-0.5 flex-none ${plan.iconClass}`} aria-hidden="true" />
                        <span className="text-[11px] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
