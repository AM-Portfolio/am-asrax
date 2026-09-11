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
  /** Local scene progress 0–1 (scrubbed). Defaults to settled. */
  progress?: number;
  active?: boolean;
  motion?: ScreenshotMotion;
  chips?: ProductChip[];
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

/** Hit fully-settled UI early in the segment so the shot doesn't stay half-masked. */
function settleProgress(progress: number, active: boolean) {
  if (!active) return 1;
  // Reach 1 by ~38% of the scene hold, then stay fully up
  return clamp01(progress / 0.38);
}

/** Full product UI screenshot with scroll-scrubbed premium motion. */
export function ProductScreenshot({
  src,
  alt,
  title = 'ASRAX',
  className,
  progress = 1,
  active = true,
  motion: motionMode = 'kenBurns',
  chips,
}: ProductScreenshotProps) {
  const settle = settleProgress(progress, active);

  // Subtle drift only — never leave a large empty gap in the frame
  const scale =
    motionMode === 'tilt'
      ? 1.02 - settle * 0.02
      : 1.04 - settle * 0.04;

  const imgY = (1 - settle) * (motionMode === 'kenBurns' ? 14 : 8);
  const rotateY = motionMode === 'tilt' ? (1 - settle) * 6 - 1 : 0;
  const rotateX = motionMode === 'tilt' ? (1 - settle) * -3 : 0;

  // Soft wipe (max ~12%) — old 55% inset left a huge void and never felt "fully up"
  const revealInset =
    motionMode === 'reveal' ? `${Math.round((1 - settle) * 12)}% 0% 0% 0%` : undefined;

  const frameGlow = 0.15 + settle * 0.4;
  const chromeOpacity = 0.75 + settle * 0.25;
  const imgOpacity = 0.82 + settle * 0.18;

  return (
    <div
      className={cn('relative', className)}
      style={{
        perspective: motionMode === 'tilt' ? 1200 : undefined,
      }}
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
          borderColor: `rgba(255,255,255,${0.08 + settle * 0.08})`,
        }}
      >
        <div
          className="flex items-center gap-2 border-b border-white/8 bg-navy-950/90 px-4 py-2.5"
          style={{ opacity: chromeOpacity }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 truncate text-xs font-medium text-slate-400">{title}</span>
        </div>

        <div className="relative overflow-hidden bg-navy-950">
          <img
            src={src}
            alt={alt}
            className="block h-auto w-full object-cover object-top will-change-transform"
            loading="lazy"
            decoding="async"
            style={{
              transform: `translate3d(0, ${imgY}px, 0) scale(${scale})`,
              transformOrigin: 'center top',
              clipPath: revealInset ? `inset(${revealInset})` : undefined,
              opacity: imgOpacity,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/35 via-transparent to-navy-950/15"
            style={{ opacity: Math.max(0, 0.35 - settle * 0.35) }}
            aria-hidden
          />
        </div>
      </div>

      {chips && chips.length > 0 ? (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex flex-wrap gap-2 md:inset-x-4 md:bottom-4">
          {chips.map((chip, i) => {
            const threshold = 0.2 + i * 0.12;
            const shown = settle >= threshold;
            const chipP = clamp01((settle - threshold) / 0.18);
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
                  y: shown ? 0 : 10,
                  scale: shown ? 1 : 0.94,
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
