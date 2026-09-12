import { EnergyNetwork } from '../ui/EnergyNetwork';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';
import { segmentProgress } from '../scroll/timelineConfig';

interface NetworkSceneProps {
  content: ProductSceneContent;
  active: boolean;
  progress: number;
  hideCopy?: boolean;
}

export function NetworkScene({ content, active, progress, hideCopy = false }: NetworkSceneProps) {
  const local = segmentProgress(progress, 'network');
  const energy = active ? Math.max(local, 0.25) : 0.15;

  const visual = (
    <div
      data-product-panel
      className="relative h-full min-h-[280px] w-full overflow-hidden bg-navy-950"
      style={{
        boxShadow: `inset 0 0 ${40 + energy * 60}px rgba(56,189,248,${0.06 + energy * 0.2})`,
      }}
    >
      <EnergyNetwork progress={energy} />
    </div>
  );

  if (hideCopy) {
    return (
      <>
        {visual}
        <p className="sr-only">{content.srSummary}</p>
      </>
    );
  }

  return (
    <div className="relative grid h-full w-full items-center gap-8 lg:grid-cols-2">
      <SceneHeadline
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
        progress={local}
      />
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-electric-sky/15">
        {visual}
      </div>
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
