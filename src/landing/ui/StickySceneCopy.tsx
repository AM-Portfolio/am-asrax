import { AnimatePresence, motion } from 'motion/react';
import { PRODUCT_SCENES, type ProductSceneId } from '../content/products';
import { segmentProgress } from '../scroll/timelineConfig';
import { SceneHeadline } from './SceneHeadline';

/** Scenes that share the sticky left copy column on desktop pin. */
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
 * Apple-style sticky copy: text stays put while product panels slide L/R → up.
 */
export function StickySceneCopy({ activeScene, progress, visible }: StickySceneCopyProps) {
  const show = visible && STICKY_COPY_SCENES.includes(activeScene);
  const content = PRODUCT_SCENES.find((s) => s.id === activeScene);
  const local = content ? segmentProgress(progress, content.id) : 1;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20"
      aria-hidden={!show}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 py-24 lg:px-10">
        <div className="w-full max-w-xl lg:w-1/2 lg:pr-10">
          <AnimatePresence mode="wait">
            {show && content ? (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                transition={{ duration: 0.38, ease }}
              >
                <SceneHeadline
                  eyebrow={content.eyebrow}
                  title={content.title}
                  body={content.body}
                  active
                  progress={Math.max(local, 0.55)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
