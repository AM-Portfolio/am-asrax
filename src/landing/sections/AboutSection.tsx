import { motion } from 'motion/react';
import { Target, Users, Lightbulb } from 'lucide-react';

/** About block for the continuous home scroll (and /about route). */
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/5 bg-navy-950 text-white">
      <div className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-electric-sky">
              Company
            </p>
            <h2 className="mb-4 font-display text-4xl font-black tracking-tight lg:text-5xl">
              About ASRAX Technologies
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Building the next generation of Fintech applications. We empower businesses with
              secure, scalable, and innovative financial technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-electric-sky/20 bg-electric-sky/10 text-electric-sky">
              <Target size={22} />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold">Our Mission</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              To democratize access to advanced financial tools by building secure, scalable, and
              innovative technology solutions that empower businesses to thrive in the digital
              economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
              <Lightbulb size={22} />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold">Our Vision</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              To become the global standard for financial technology infrastructure, fostering a
              world where financial operations are seamless, transparent, and universally
              accessible.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-navy-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-wider">
              Leadership
            </h3>
            <p className="text-sm text-slate-400">Meet the minds behind ASRAX Technologies.</p>
          </motion.div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {[
              { name: 'ABHIMANYOU KUMAR', title: 'Director' },
              { name: 'SHIKHA SWARUP DEVANSHI', title: 'Director' },
            ].map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-center"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-navy-800">
                  <Users className="text-electric-sky" size={36} />
                </div>
                <h4 className="mb-1 text-lg font-bold">{member.name}</h4>
                <p className="mb-3 text-xs font-semibold text-electric-sky">{member.title}</p>
                <p className="text-xs leading-relaxed text-slate-400">
                  Leading ASRAX Technologies with a focus on innovation and excellence in the
                  Fintech landscape.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
