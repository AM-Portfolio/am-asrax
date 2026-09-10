import { ProductMockMarket } from '../ui/ProductMockMarket';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';

interface Props {
  content: ProductSceneContent;
  active: boolean;
}

export function MarketScene({ content, active }: Props) {
  return (
    <div className="grid h-full w-full items-center gap-8 lg:grid-cols-2">
      <SceneHeadline
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        active={active}
      />
      <ProductMockMarket />
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
