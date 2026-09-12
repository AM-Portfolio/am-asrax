import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

interface SceneHeadlineProps {
  eyebrow: string;
  title: string;
  body: string;
  active?: boolean;
  /** Local 0–1 scene progress for staggered scrubbed reveal. */
  progress?: number;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

const ease = [0.22, 1, 0.36, 1] as const;

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/**
 * Only the active scene may show copy. Inactive opacity must be 0 —
 * otherwise stacked layers ghost mid-crossfade (Trade over Market, etc.).
 */
export function SceneHeadline({
  eyebrow,
  title,
  body,
  active = true,
  progress = 1,
  align = 'left',
  className,
  as: Tag = 'h2',
}: SceneHeadlineProps) {
  const p = active ? clamp01(progress) : 0;
  const eyebrowP = clamp01(p / 0.22);
  const titleP = clamp01((p - 0.06) / 0.28);
  const bodyP = clamp01((p - 0.18) / 0.32);

  return (
    <div
      className={cn(
        'max-w-xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
      aria-hidden={!active}
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-sky/90"
        initial={false}
        animate={{
          opacity: active ? 0.45 + eyebrowP * 0.55 : 0,
          y: active ? (1 - eyebrowP) * 10 : 8,
        }}
        transition={{ duration: 0.28, ease }}
      >
        {eyebrow}
      </motion.p>
      <motion.div
        initial={false}
        animate={{
          opacity: active ? 0.4 + titleP * 0.6 : 0,
          y: active ? (1 - titleP) * 14 : 10,
        }}
        transition={{ duration: 0.32, ease }}
      >
        <Tag className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem]">
          {title}
        </Tag>
      </motion.div>
      <motion.p
        className="text-base leading-relaxed text-slate-300 md:text-lg"
        initial={false}
        animate={{
          opacity: active ? 0.35 + bodyP * 0.65 : 0,
          y: active ? (1 - bodyP) * 12 : 8,
        }}
        transition={{ duration: 0.32, ease }}
      >
        {body}
      </motion.p>
    </div>
  );
}
