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
 * Product visuals morph underneath inside the floating frame.
 */
export function StickySceneCopy({ activeScene, progress, visible }: StickySceneCopyProps) {
  const show = visible && STICKY_COPY_SCENES.includes(activeScene);
  const content = PRODUCT_SCENES.find((s) => s.id === activeScene);
  const local = content ? segmentProgress(progress, content.id) : 1;

  // Word hits sharp, then yields so the product UI reads (reference rhythm)
  const wordIn = Math.min(1, local / 0.18);
  const wordOut = local > 0.28 ? Math.min(1, (local - 0.28) / 0.32) : 0;
  const wordOpacity = Math.max(0, wordIn * 0.92 - wordOut * 0.82);
  const wordBlur = (1 - wordIn) * 6 + wordOut * 4;
  const cornerOpacity = Math.min(1, Math.max(0, (local - 0.12) / 0.28));

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
            {/* Giant tracked hero word — peaks early, then softens away */}
            {content.heroWord ? (
              <div className="absolute inset-0 flex items-center justify-center px-6 pb-8">
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
              </div>
            ) : null}

            {/* Calm corner copy — bottom-left of stage */}
            <motion.div
              className="absolute bottom-6 left-6 max-w-[16rem] md:bottom-8 md:left-8 md:max-w-sm"
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
