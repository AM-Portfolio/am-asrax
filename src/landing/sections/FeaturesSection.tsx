import { motion } from 'motion/react';
import { ArrowRight, BarChart3, PieChart, CalendarDays, Bot } from 'lucide-react';
import { FEATURE_IMAGES } from '../content/products';

const features = [
  {
    title: 'Market insights & charting',
    description:
      'Track global indices, explore ETFs, and stay oriented with research frames that cut through the noise.',
    image: FEATURE_IMAGES.market,
    icon: BarChart3,
  },
  {
    title: 'Portfolio analytics',
    description:
      'Understand what you own — holdings, allocation, heatmaps, and baskets in one clear view.',
    image: FEATURE_IMAGES.portfolio,
    icon: PieChart,
  },
  {
    title: 'Trade journaling',
    description:
      'Learn from every decision with journal, calendar, and metrics — not a broker execution desk.',
    image: FEATURE_IMAGES.journal,
    icon: CalendarDays,
  },
  {
    title: 'Dashboard overview',
    description:
      'See everything in one place — value, performance, and movers for how you are doing today.',
    image: FEATURE_IMAGES.dashboard,
    icon: Bot,
  },
];

/** Features block for the continuous home scroll (and /features route). */
export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-white/5 bg-navy-950 text-white">
      <div className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-electric-sky">
              Product
            </p>
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
              See everything as you scroll
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              Portfolio, market, journal, and AI chat — one financial intelligence workspace.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className={`flex flex-col gap-10 lg:items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="aspect-video w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-sky text-navy-950">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-3xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                  <a
                    href="https://am.asrax.in"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-sky hover:text-soft-cyan"
                  >
                    Open in app <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
