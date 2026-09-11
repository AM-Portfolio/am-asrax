import { ProductMockDashboard } from '../ui/ProductMockDashboard';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';

interface Props {
  content: ProductSceneContent;
  active: boolean;
  sceneProgress: number;
  /** Desktop pin: copy lives in StickySceneCopy; only product slides. */
  hideCopy?: boolean;
}

export function DashboardScene({ content, active, sceneProgress, hideCopy = false }: Props) {
  if (hideCopy) {
    return (
      <div className="flex h-full w-full items-center justify-end">
        <div data-product-panel className="w-full max-w-xl lg:max-w-none lg:w-[min(100%,34rem)] xl:w-[min(100%,38rem)]">
          <ProductMockDashboard progress={sceneProgress} active={active} />
        </div>
        <p className="sr-only">{content.srSummary}</p>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full items-center gap-8 lg:grid-cols-2">
      <SceneHeadline
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
        progress={sceneProgress}
      />
      <ProductMockDashboard progress={sceneProgress} active={active} />
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
