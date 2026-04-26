import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              About ASRAX Technologies
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Building the next generation of Fintech applications. We empower businesses with secure, scalable, and innovative financial technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To democratize access to advanced financial tools by building secure, scalable, and innovative technology solutions that empower businesses to thrive in the digital economy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become the global standard for financial technology infrastructure, fostering a world where financial operations are seamless, transparent, and universally accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">Leadership Team</h2>
            <p className="text-lg text-slate-600">Meet the minds behind ASRAX Technologies.</p>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
                className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center"
              >
                <div className="w-32 h-32 mx-auto bg-brand-100 rounded-full mb-6 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Users className="text-brand-600" size={48} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-4">{member.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
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
