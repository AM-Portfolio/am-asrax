import { ProductMockAiChat } from '../ui/ProductMockAiChat';
import { SceneHeadline } from '../ui/SceneHeadline';
import type { ProductSceneContent } from '../content/products';

interface Props {
  content: ProductSceneContent;
  active: boolean;
  sceneProgress: number;
  hideCopy?: boolean;
}

export function AiChatScene({ content, active, sceneProgress, hideCopy = false }: Props) {
  if (hideCopy) {
    return (
      <div data-product-panel className="flex h-full w-full items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-2xl">
          <ProductMockAiChat active={active} progress={sceneProgress} />
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
      <ProductMockAiChat active={active} progress={sceneProgress} />
      <p className="sr-only">{content.srSummary}</p>
    </div>
  );
}
