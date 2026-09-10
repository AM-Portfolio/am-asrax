import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

export function ProductMockTrade() {
  return (
    <ProductScreenshot
      title="Trade journal"
      src={PRODUCT_SHOTS.trade}
      alt="ASRAX trade journal — trade detail, templates, analytics, and metrics"
    />
  );
}
