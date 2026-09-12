import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, BarChart3, PieChart, Wallet, LayoutDashboard } from 'lucide-react';
import { APP_URL, FEATURE_IMAGES } from '../content/products';

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
    title: 'Paper trading',
    description:
      'Practice buys and sells with paper cash — learn without risk. Simulated only, not live broker execution.',
    image: FEATURE_IMAGES.paperTrading,
    icon: Wallet,
  },
  {
    title: 'Dashboard overview',
    description:
      'See everything in one place — value, performance, and movers for how you are doing today.',
    image: FEATURE_IMAGES.dashboard,
    icon: LayoutDashboard,
  },
];

type FeatureItem = (typeof features)[number];

function FeatureRow({ feature, index }: { feature: FeatureItem; index: number }) {
  const Icon = feature.icon;
  const isEven = index % 2 === 0;
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`flex flex-col gap-10 lg:items-center ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      <div className="w-full lg:w-1/2">
        {/* object-contain + no zoom: full product UI stays visible (no aspect-video crop) */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-[0_30px_80px_rgba(0,0,0,0.35),0_0_40px_rgba(56,189,248,0.08)]">
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="h-auto w-full object-contain object-top will-change-transform"
            style={{ y: imgY, filter: 'brightness(1.14) contrast(1.06)' }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 16 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-sky text-navy-950">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <h3 className="font-display text-3xl font-bold tracking-tight">{feature.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{feature.description}</p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-sky hover:text-soft-cyan"
          >
            Open in app <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

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
              Portfolio, market, paper trading, and AI chat — one financial intelligence workspace.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {features.map((feature, index) => (
            <div key={feature.title}>
              <FeatureRow feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
