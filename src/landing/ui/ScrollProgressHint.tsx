import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PRODUCT_SCENES, type ProductSceneId } from '../content/products';
import { sceneAtProgress } from '../scroll/timelineConfig';

interface ScrollProgressHintProps {
  progress: number;
  visible?: boolean;
}

export function ScrollProgressHint({ progress, visible = true }: ScrollProgressHintProps) {
  const sceneId = sceneAtProgress(progress);
  // Hide on final CTA / after pin so About isn't under a stale "8/8" chip
  if (!visible || progress >= 0.94 || sceneId === 'cta') return null;

  const scene = PRODUCT_SCENES.find((s) => s.id === sceneId);
  const label = sceneLabel(sceneId, scene?.eyebrow);

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2"
      aria-hidden
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
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

function sceneLabel(id: ProductSceneId, eyebrow?: string): string {
  const index = PRODUCT_SCENES.findIndex((s) => s.id === id);
  const step = index >= 0 ? `${index + 1}/${PRODUCT_SCENES.length}` : '';
  const name = eyebrow ?? id;
  return step ? `${name} · ${step}` : name;
}
