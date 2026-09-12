import { motion } from 'motion/react';
import { AI_CHAT_DEMO } from '../content/products';
import { ProductFrame } from './ProductFrame';

interface ProductMockAiChatProps {
  active?: boolean;
  progress?: number;
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function ProductMockAiChat({ active = true, progress = 1 }: ProductMockAiChatProps) {
  const p = active ? clamp01(progress) : 0.4;
  const replyShown = p >= 0.2;
  const widgetsStart = 0.35;

  return (
    <ProductFrame title="AI Chat">
      <div
        className="grid gap-3 lg:grid-cols-[1fr_1fr]"
        style={{
          transform: `translate3d(0, ${(1 - p) * 12}px, 0)`,
          opacity: 0.5 + p * 0.5,
        }}
      >
        <div className="space-y-3">
          <motion.div
            className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-electric-sky/20 px-3 py-2 text-sm text-slate-100"
            initial={false}
            animate={{
              opacity: p >= 0.08 ? 1 : 0.3,
              y: p >= 0.08 ? 0 : 8,
            }}
            transition={{ duration: 0.35 }}
          >
            {AI_CHAT_DEMO.userMessage}
          </motion.div>
          <motion.div
            className="max-w-[95%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
            initial={false}
            animate={{
              opacity: replyShown ? 1 : 0,
              y: replyShown ? 0 : 10,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Here&apos;s your day in one view — summary, movers, holdings, and allocation.
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {AI_CHAT_DEMO.widgets.map((w, i) => {
            const threshold = widgetsStart + i * 0.1;
            const shown = p >= threshold;
            return (
              <motion.div
                key={w.id}
                className="rounded-xl border border-electric-sky/25 bg-navy-900/80 px-2.5 py-3 text-center text-[11px] font-medium text-slate-200"
                initial={false}
                animate={{
                  opacity: shown ? 1 : 0.15,
                  scale: shown ? 1 : 0.92,
                  y: shown ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {w.label}
              </motion.div>
            );
          })}
        </div>
      </div>
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <line
          x1="20%"
          y1="85%"
          x2="55%"
          y2="55%"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity={0.2 + p * 0.25}
        />
        <line
          x1="80%"
          y1="90%"
          x2="70%"
          y2="55%"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity={0.15 + p * 0.25}
        />
        <line
          x1="10%"
          y1="40%"
          x2="48%"
          y2="48%"
          stroke="#7dd3fc"
          strokeWidth="1"
          strokeOpacity={0.1 + p * 0.2}
        />
      </svg>
    </ProductFrame>
  );
}
