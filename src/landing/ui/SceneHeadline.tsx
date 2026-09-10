import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

interface SceneHeadlineProps {
  eyebrow: string;
  title: string;
  body: string;
  active?: boolean;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export function SceneHeadline({
  eyebrow,
  title,
  body,
  active = true,
  align = 'left',
  className,
  as: Tag = 'h2',
}: SceneHeadlineProps) {
  return (
    <motion.div
      className={cn(
        'max-w-xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
      initial={false}
      animate={
        active
          ? { opacity: 1, y: 0 }
          : { opacity: 0.35, y: 8 }
      }
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-sky/90">
        {eyebrow}
      </p>
      <Tag className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </Tag>
      <p className="text-base leading-relaxed text-slate-300 md:text-lg">{body}</p>
    </motion.div>
  );
}
