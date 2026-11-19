import { ArrowRight, BarChart3, BriefcaseBusiness, LineChart } from 'lucide-react';

const capabilities = [
  {
    icon: BriefcaseBusiness,
    title: 'Portfolio tracking',
    description: 'Organize holdings, review allocation, and follow portfolio performance.',
  },
  {
    icon: LineChart,
    title: 'Market insights',
    description: 'Explore market dashboards, research tools, and financial data in one workspace.',
  },
  {
    icon: BarChart3,
    title: 'Trade journaling',
    description: 'Record trades and review your decisions and performance over time.',
  },
];

export default function AmInvestment() {
  return (
    <article className="mx-auto w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10">
      <header className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-electric-sky">
          ASRAX financial tools
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          AM Investment
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          AM Investment is a financial intelligence platform by ASRAX for tracking investment
          portfolios, exploring market information, and reviewing trade activity. It brings these
          tools together in a single workspace for individual investors.
        </p>
        <a
          href="https://am.asrax.in"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric-sky px-6 py-3 font-semibold text-navy-950 transition hover:bg-soft-cyan"
        >
          Open AM Investment <ArrowRight size={18} />
        </a>
      </header>

      <section aria-labelledby="capabilities-title" className="mt-16">
        <h2 id="capabilities-title" className="text-2xl font-semibold text-white">
          What the platform provides
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <section key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="text-electric-sky" size={24} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </section>
          ))}
        </div>
      </section>

      <p className="mt-10 max-w-3xl text-sm leading-6 text-slate-400">
        AM Investment provides informational and record-keeping tools. It does not execute trades
        or provide personalized investment advice. Read our{' '}
        <a className="text-electric-sky underline" href="/privacy-policy.html">Privacy Policy</a>{' '}
        and <a className="text-electric-sky underline" href="/terms-of-service.html">Terms of Service</a>.
      </p>
      <p className="mt-4 text-sm text-slate-400">
        Provided by AM Portfolio, doing business as Asrax ·{' '}
        <a className="text-electric-sky underline" href="mailto:admin@asrax.in">admin@asrax.in</a>
      </p>
    </article>
  );
}
