import { AnimatePresence, motion } from 'motion/react';
import { PRODUCT_SCENES, type ProductSceneId } from '../content/products';
import { segmentProgress } from '../scroll/timelineConfig';

/** Scenes that use the floating cinematic stage (word + product morph). */
export const STICKY_COPY_SCENES: readonly ProductSceneId[] = [
  'network',
  'dashboard',
  'portfolio',
  'trade',
  'market',
  'aiChat',
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

interface StickySceneCopyProps {
  activeScene: ProductSceneId;
  progress: number;
  visible: boolean;
}

/**
 * Reference-video chrome: giant centered word + calm corner copy.
 * Bridge beats (CLARITY) get a one-line meaning + soft handoff into product.
 */
export function StickySceneCopy({ activeScene, progress, visible }: StickySceneCopyProps) {
  const show = visible && STICKY_COPY_SCENES.includes(activeScene);
  const content = PRODUCT_SCENES.find((s) => s.id === activeScene);
  const local = content ? segmentProgress(progress, content.id) : 1;

  // Word hits sharp, then clears fast — no ghost overlay on product screenshots
  const wordIn = Math.min(1, local / 0.1);
  const wordOut = local > 0.14 ? Math.min(1, (local - 0.14) / 0.16) : 0;
  const wordOpacity = Math.max(0, wordIn * 0.82 - wordOut * 1.25);
  const wordBlur = (1 - wordIn) * 6 + wordOut * 12;
  const showWord = wordOpacity > 0.05;
  const cornerOpacity = Math.min(1, Math.max(0, (local - 0.1) / 0.26));

  // Bridge subtitle under CLARITY — readable while word is strong
  const lineOpacity =
    content?.heroLine != null
      ? Math.max(0, Math.min(1, wordIn) * 0.95 - Math.max(0, wordOut - 0.1) * 1.4)
      : 0;

  // Soft handoff near end of bridge beat only (dies before next scene)
  const handoffOpacity =
    content?.handoffHint != null
      ? Math.min(1, Math.max(0, (local - 0.5) / 0.25)) * Math.max(0, 1 - Math.max(0, (local - 0.88) / 0.12))
      : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-30" aria-hidden={!show}>
      <AnimatePresence mode="wait">
        {show && content ? (
          <motion.div
            key={content.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            {/* Giant tracked hero word — peaks early, then fully fades (no ghost) */}
            {content.heroWord && showWord ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10">
                <motion.p
                  className="font-display max-w-full select-none text-center text-[clamp(3.25rem,11vw,8.5rem)] font-semibold uppercase leading-none text-white"
                  style={{
                    letterSpacing: `${0.26 - wordIn * 0.07}em`,
                    opacity: wordOpacity,
                    textShadow:
                      '0 0 80px rgba(56,189,248,0.14), 0 2px 32px rgba(0,0,0,0.4)',
                    filter: `blur(${wordBlur}px)`,
                  }}
                  initial={false}
                  animate={{
                    y: (1 - wordIn) * 28 + wordOut * -12,
                    scale: 0.97 + wordIn * 0.03 - wordOut * 0.02,
                  }}
                  transition={{ duration: 0.35, ease }}
                >
                  {content.heroWord}
                </motion.p>

                {content.heroLine && lineOpacity > 0.02 ? (
                  <motion.p
                    className="mt-4 max-w-md text-center text-sm font-medium tracking-wide text-slate-200/90 md:text-base"
                    style={{ opacity: lineOpacity }}
                    initial={false}
                    animate={{ y: (1 - Math.min(1, wordIn)) * 10 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {content.heroLine}
                  </motion.p>
                ) : null}

                {content.handoffHint && handoffOpacity > 0.02 ? (
                  <motion.p
                    className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-sky md:text-xs"
                    style={{ opacity: handoffOpacity }}
                    initial={false}
                    animate={{ y: (1 - handoffOpacity) * 8 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    {content.handoffHint}
                  </motion.p>
                ) : null}
              </div>
            ) : null}

            {/* Calm corner copy — bottom-left of stage */}
            <motion.div
              className="absolute bottom-20 left-6 max-w-[16rem] md:bottom-24 md:left-8 md:max-w-sm"
              style={{ opacity: cornerOpacity }}
              initial={false}
              animate={{ y: (1 - cornerOpacity) * 12 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-electric-sky/90">
                {content.eyebrow}
              </p>
              <p className="font-display text-base font-semibold leading-snug tracking-tight text-white md:text-lg">
                {content.title}
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400 md:text-xs">
                {content.body}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
