import { motion } from 'motion/react';
import { Briefcase, Heart, Cpu, Globe2, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs: any[] = [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-900 text-brand-200 text-sm font-medium mb-6 border border-brand-800">
              Join ASRAX Technologies
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Build the Future of Finance
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're looking for passionate builders, thinkers, and innovators to join our mission in revolutionizing the Fintech industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-slate-600">
              At ASRAX Technologies, we believe in empowering our team to do their best work in an environment that fosters growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu className="text-brand-500" size={28} />,
                title: 'Cutting-Edge Tech',
                desc: 'Work with modern stacks and solve complex engineering challenges.'
              },
              {
                icon: <Heart className="text-rose-500" size={28} />,
                title: 'Health & Wellness',
                desc: 'Comprehensive health coverage and wellness programs for you and your family.'
              },
              {
                icon: <Globe2 className="text-emerald-500" size={28} />,
                title: 'Remote-First',
                desc: 'Work from anywhere with flexible hours and a supportive remote culture.'
              },
              {
                icon: <Briefcase className="text-amber-500" size={28} />,
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
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Open Positions</h2>
              <p className="text-lg text-slate-600">
                Explore our current openings. If you don't see a perfect fit, send us your resume anyway!
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="mailto:careers@asrax.com" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-2">
                Email us your resume <ArrowRight size={16} />
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
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe2 size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500 font-medium">No open positions at the moment. Check back later!</p>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
              * Note: These are placeholder positions for the upcoming recruitment drive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
