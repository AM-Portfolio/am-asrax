import { motion } from 'motion/react';
import { AI_CHAT_DEMO } from '../content/products';
import { ProductFrame } from './ProductFrame';

interface ProductMockAiChatProps {
  active?: boolean;
}

export function ProductMockAiChat({ active = true }: ProductMockAiChatProps) {
  return (
    <ProductFrame title="AI Chat">
      <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-3">
          <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-electric-sky/20 px-3 py-2 text-sm text-slate-100">
            {AI_CHAT_DEMO.userMessage}
          </div>
          <motion.div
            className="max-w-[95%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
            initial={false}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 6 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Here&apos;s your day in one view — summary, movers, holdings, and allocation.
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {AI_CHAT_DEMO.widgets.map((w, i) => (
            <motion.div
              key={w.id}
              className="rounded-xl border border-electric-sky/25 bg-navy-900/80 px-2.5 py-3 text-center text-[11px] font-medium text-slate-200"
              initial={false}
              animate={
                active
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0.3, scale: 0.96 }
              }
              transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
            >
              {w.label}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Convergence connectors (decorative) */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <line x1="20%" y1="85%" x2="55%" y2="55%" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="80%" y1="90%" x2="70%" y2="55%" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="10%" y1="40%" x2="48%" y2="48%" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.25" />
      </svg>
    </ProductFrame>
  );
}
