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
  const energy = active ? Math.max(local, 0.2) : 0.15;

  const visual = (
    <div
      data-product-panel
      className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-electric-sky/15 bg-navy-900/40"
      style={{
        boxShadow: `0 0 ${24 + energy * 48}px rgba(56,189,248,${0.08 + energy * 0.22})`,
        transform: `scale(${0.96 + energy * 0.04})`,
      }}
    >
      <EnergyNetwork progress={energy} />
    </div>
  );

  if (hideCopy) {
    return (
      <div className="flex h-full w-full items-center justify-end">
        <div className="w-full max-w-xl lg:max-w-none lg:w-[min(100%,34rem)] xl:w-[min(100%,38rem)]">
          {visual}
        </div>
        <p className="sr-only">{content.srSummary}</p>
      </div>
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
      {visual}
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
