import { ProductMockMarket } from '../ui/ProductMockMarket';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';

interface Props {
  content: ProductSceneContent;
  active: boolean;
  sceneProgress: number;
  hideCopy?: boolean;
}

export function MarketScene({ content, active, sceneProgress, hideCopy = false }: Props) {
  if (hideCopy) {
    return (
      <div data-product-panel className="h-full w-full overflow-hidden">
        <ProductMockMarket progress={sceneProgress} active={active} stageFill />
        <p className="sr-only">{content.srSummary}</p>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <SceneHeadline
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
        progress={sceneProgress}
      />
      <div className="max-h-[78vh] overflow-y-auto pr-1 [scrollbar-width:thin]">
        <ProductMockMarket progress={sceneProgress} active={active} />
      </div>
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
