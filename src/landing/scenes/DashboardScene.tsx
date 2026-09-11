import { ProductMockDashboard } from '../ui/ProductMockDashboard';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';

interface Props {
  content: ProductSceneContent;
  active: boolean;
  sceneProgress: number;
  /** Desktop pin: product fills floating frame; chrome is Cinematic overlay. */
  hideCopy?: boolean;
}

export function DashboardScene({ content, active, sceneProgress, hideCopy = false }: Props) {
  if (hideCopy) {
    return (
      <div data-product-panel className="h-full w-full">
        <ProductMockDashboard progress={sceneProgress} active={active} stageFill />
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
