import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollProgressHintProps {
  progress: number;
  visible?: boolean;
}

export function ScrollProgressHint({ progress, visible = true }: ScrollProgressHintProps) {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2"
      aria-hidden
    >
      <div className="h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-electric-sky"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      {progress < 0.08 && (
        <motion.div
          className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-widest text-slate-400"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
          <ChevronDown size={14} />
        </motion.div>
      )}
    </div>
  );
}
