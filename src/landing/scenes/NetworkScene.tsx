import { EnergyNetwork } from '../ui/EnergyNetwork';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';
import { segmentProgress } from '../scroll/timelineConfig';

interface NetworkSceneProps {
  content: ProductSceneContent;
  active: boolean;
  progress: number;
}

export function NetworkScene({ content, active, progress }: NetworkSceneProps) {
  const local = segmentProgress(progress, 'network');

  return (
    <div className="relative grid h-full w-full items-center gap-8 lg:grid-cols-2">
      <SceneHeadline
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
      />
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-electric-sky/15 bg-navy-900/40">
        <EnergyNetwork progress={active ? Math.max(local, 0.35) : 0.2} />
      </div>
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
