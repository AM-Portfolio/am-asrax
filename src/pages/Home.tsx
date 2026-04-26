import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Lock, BarChart3, Globe, CheckCircle2, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-slate-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6 border border-brand-100">
                  <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                  Innovating Fintech Solutions
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                Empowering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Finance</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 leading-relaxed">
                ASRAX Technologies builds secure, scalable, and innovative financial technology solutions that empower businesses to thrive in the digital economy.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                >
                  Discover Our Vision
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors"
                >
                  Join the Team
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Placeholder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
                Advanced Financial Intelligence
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our Fintech ecosystem provides deep insights into your financial health through automated analysis and AI-driven recommendations.
              </p>
              <ul className="space-y-4 mb-8">
                {['Real-time Stock Portfolio Analysis', 'Detailed Trade History & Performance Insights', 'AI-Powered Financial Chat Bot', 'Smart Asset Allocation Strategies'].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="text-brand-500" size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-4 bg-slate-50 rounded-xl border border-slate-100 inline-block"
              >
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Status</p>
                <p className="text-brand-600 font-semibold flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                  </span>
                  In Active Development
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-2xl overflow-hidden flex items-center justify-center relative group">
                {/* Abstract UI Placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="text-brand-500" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">Product Interface</h3>
                  <p className="text-slate-500">Coming Soon</p>
                </div>
                
                {/* Decorative UI elements */}
                <div className="absolute top-8 left-8 right-8 h-12 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm"></div>
                <div className="absolute bottom-8 left-8 w-1/3 h-32 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm"></div>
                <div className="absolute bottom-8 right-8 w-1/2 h-32 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Core Pillars</h2>
            <p className="text-slate-600">We are committed to democratizing financial technology and empowering businesses through intelligent, seamless infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-brand-500" size={28} />,
                title: 'Democratizing Access',
                desc: 'Making advanced financial tools available to everyone, from startups to global enterprises.'
              },
              {
                icon: <Cpu className="text-indigo-500" size={28} />,
                title: 'Seamless Operations',
                desc: 'Building infrastructure that makes financial management transparent and universally accessible.'
              },
              {
                icon: <BarChart3 className="text-emerald-500" size={28} />,
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Have Questions or Feedback?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-3xl mx-auto">
            Our team is here to help you with any inquiries about our Fintech solutions. If you encounter any problems or have a feature you'd like us to add or improve, we'd love to hear from you!
          </p>
          <a 
            href="mailto:support@asrax.in"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-xl"
          >
            Send Feedback to support@asrax.in
          </a>
        </div>
      </section>
    </div>
  );
}
