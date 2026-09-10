import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { APP_URL, type ProductSceneContent } from '../content/products';
import { SceneHeadline } from '../ui/SceneHeadline';

interface Props {
  content: ProductSceneContent;
  active: boolean;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FinalCtaScene({ content, active }: Props) {
  return (
    <div className="flex h-full min-h-[100svh] w-full flex-col items-center justify-center bg-navy-950 px-6 text-center">
      <SceneHeadline
        as="h2"
        align="center"
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
      />
      <motion.div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        initial={false}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 8 }}
        transition={{ duration: 0.4 }}
      >
        <motion.a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-electric-sky px-7 py-3.5 text-sm font-bold text-navy-950 shadow-[0_0_40px_rgba(56,189,248,0.25)]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Open app
          <ArrowRight size={16} />
        </motion.a>
        <button
          type="button"
          onClick={() => scrollToId('about')}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
        >
          Continue scrolling
        </button>
      </motion.div>
      <p className="mt-6 text-xs text-slate-500">Keep scrolling for About, Features, and Careers</p>
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
