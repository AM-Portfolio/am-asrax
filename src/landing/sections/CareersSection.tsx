import { motion } from 'motion/react';
import { Briefcase, Heart, Cpu, Globe2, ArrowRight } from 'lucide-react';

const perks = [
  {
    icon: <Cpu className="text-electric-sky" size={24} />,
    title: 'Cutting-Edge Tech',
    desc: 'Work with modern stacks and solve complex engineering challenges.',
  },
  {
    icon: <Heart className="text-rose-400" size={24} />,
    title: 'Health & Wellness',
    desc: 'Comprehensive health coverage and wellness programs for you and your family.',
  },
  {
    icon: <Globe2 className="text-emerald-400" size={24} />,
    title: 'Remote-First',
    desc: 'Work from anywhere with flexible hours and a supportive remote culture.',
  },
  {
    icon: <Briefcase className="text-amber-300" size={24} />,
    title: 'Career Growth',
    desc: 'Continuous learning opportunities, mentorship, and clear progression paths.',
  },
];

/** Careers block for the continuous home scroll (and /careers route). */
export default function CareersSection() {
  return (
    <section id="careers" className="scroll-mt-20 border-t border-white/5 bg-navy-950 text-white">
      <div className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-electric-sky">
              Careers
            </p>
            <h2 className="mb-4 font-display text-4xl font-black tracking-tight lg:text-5xl">
              Build the Future of Finance
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              We&apos;re looking for passionate builders, thinkers, and innovators to join our
              mission in revolutionizing Fintech with secure, scalable technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="mb-3 font-display text-2xl font-bold">Why Work With Us?</h3>
            <p className="text-sm text-slate-400">
              An environment that fosters growth, ownership, and innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-navy-900/60 p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800">
                  {perk.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold">{perk.title}</h4>
                <p className="text-xs leading-relaxed text-slate-400">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-navy-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h3 className="mb-2 font-display text-2xl font-bold">Open Positions</h3>
              <p className="text-sm text-slate-400">
                No open roles right now — send your resume and we&apos;ll reach out when there&apos;s
                a fit.
              </p>
            </div>
            <a
              href="mailto:admin@asrax.in"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-sky hover:text-soft-cyan"
            >
              Email us your resume <ArrowRight size={14} />
            </a>
          </div>
          <div className="rounded-2xl border border-dashed border-white/15 bg-navy-900/40 py-12 text-center">
            <p className="text-sm font-medium text-slate-500">
              No open positions at the moment. Check back later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
