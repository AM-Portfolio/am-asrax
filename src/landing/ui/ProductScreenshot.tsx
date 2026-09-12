import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

export type ScreenshotMotion = 'kenBurns' | 'reveal' | 'tilt';

export interface ProductChip {
  label: string;
  tone?: 'sky' | 'emerald' | 'amber' | 'rose';
}

interface ProductScreenshotProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  progress?: number;
  active?: boolean;
  motion?: ScreenshotMotion;
  chips?: ProductChip[];
  /** Fill floating cinematic stage frame (no inner window chrome). */
  stageFill?: boolean;
}

const CHIP_TONE: Record<NonNullable<ProductChip['tone']>, string> = {
  sky: 'border-electric-sky/40 bg-navy-950/90 text-electric-sky',
  emerald: 'border-emerald-400/40 bg-navy-950/90 text-emerald-300',
  amber: 'border-amber-400/40 bg-navy-950/90 text-amber-300',
  rose: 'border-rose-400/40 bg-navy-950/90 text-rose-300',
};

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function settleProgress(progress: number, active: boolean) {
  if (!active) return 1;
  return clamp01(progress / 0.32);
}

export function ProductScreenshot({
  src,
  alt,
  title = 'ASRAX',
  className,
  progress = 1,
  active = true,
  motion: motionMode = 'kenBurns',
  chips,
  stageFill = false,
}: ProductScreenshotProps) {
  const settle = settleProgress(progress, active);

  if (stageFill) {
    // Fit full product UI in the frame (no edge crop) so dense dashboards stay readable
    const softScale = 1.01 - settle * 0.01;
    const softY = (1 - settle) * 4;
    const bright = 0.96 + settle * 0.04;

    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-navy-950', className)}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain object-top will-change-transform"
          loading="lazy"
          decoding="async"
          style={{
            transform: `translate3d(0, ${softY}px, 0) scale(${softScale})`,
            transformOrigin: 'center top',
            opacity: bright,
            filter: 'brightness(1.1) contrast(1.05)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent"
          style={{ opacity: Math.max(0, 0.35 - settle * 0.35) }}
          aria-hidden
        />
        {chips && chips.length > 0 ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 flex flex-wrap gap-2 md:inset-x-6 md:bottom-5">
            {chips.map((chip, i) => {
              const threshold = 0.22 + i * 0.1;
              const shown = settle >= threshold;
              const chipP = clamp01((settle - threshold) / 0.16);
              return (
                <motion.span
                  key={chip.label}
                  className={cn(
                    'rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-md md:text-[11px]',
                    CHIP_TONE[chip.tone ?? 'sky'],
                  )}
                  initial={false}
                  animate={{
                    opacity: shown ? chipP : 0,
                    y: shown ? 0 : 8,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {chip.label}
                </motion.span>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  const rotateY = motionMode === 'tilt' ? (1 - settle) * 6 - 1 : 0;
  const rotateX = motionMode === 'tilt' ? (1 - settle) * -3 : 0;
  const frameGlow = 0.15 + settle * 0.4;

  return (
    <div
      className={cn('relative', className)}
      style={{ perspective: motionMode === 'tilt' ? 1200 : undefined }}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        style={{
          transform:
            motionMode === 'tilt'
              ? `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
              : undefined,
          transformStyle: 'preserve-3d',
          boxShadow: `0 30px 80px rgba(0,0,0,0.45), 0 0 ${36 + settle * 48}px rgba(56,189,248,${frameGlow * 0.32})`,
        }}
      >
        <div className="flex items-center gap-2 border-b border-white/8 bg-navy-950/90 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 truncate text-xs font-medium text-slate-400">{title}</span>
        </div>
        <div className="relative overflow-hidden bg-navy-950">
          <img
            src={src}
            alt={alt}
            className="block h-auto w-full object-contain object-top"
            loading="lazy"
            decoding="async"
            style={{
              transform: `translate3d(0, ${(1 - settle) * 6}px, 0) scale(${1.01 - settle * 0.01})`,
              opacity: 0.92 + settle * 0.08,
              filter: 'brightness(1.1) contrast(1.05)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
