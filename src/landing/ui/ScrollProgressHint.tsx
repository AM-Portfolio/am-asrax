import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { STORY_RAIL } from '../content/products';
import { sceneAtProgress } from '../scroll/timelineConfig';

interface ScrollProgressHintProps {
  progress: number;
  visible?: boolean;
}

/** Single progress chrome: story rail + bar (no duplicate · N/8 label). */
export function ScrollProgressHint({ progress, visible = true }: ScrollProgressHintProps) {
  const sceneId = sceneAtProgress(progress);
  if (!visible || progress >= 0.91 || sceneId === 'cta') return null;

  const activeRailIdx = STORY_RAIL.findIndex((s) => s.id === sceneId);

  return (
    <div
      className="pointer-events-none fixed bottom-5 left-1/2 z-40 flex w-[min(92vw,40rem)] -translate-x-1/2 flex-col items-center gap-2.5"
      aria-hidden
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-2 sm:gap-x-2">
        {STORY_RAIL.map((step, i) => {
          const active = step.id === sceneId;
          const past = activeRailIdx >= 0 && i < activeRailIdx;
          return (
            <div key={step.id} className="flex items-center gap-1.5 sm:gap-2">
              {i > 0 ? (
                <span
                  className={`hidden h-px w-2 sm:block sm:w-3 ${
                    past || active ? 'bg-electric-sky/50' : 'bg-white/15'
                  }`}
                  aria-hidden
                />
              ) : null}
              <span
                className={
                  active
                    ? 'rounded-full border border-electric-sky/50 bg-electric-sky/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-electric-sky sm:text-[10px]'
                    : past
                      ? 'px-1 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]'
                      : 'px-1 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600 sm:text-[10px]'
                }
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10 sm:w-40">
        <motion.div
          className="h-full rounded-full bg-electric-sky"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      {progress < 0.07 && (
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
