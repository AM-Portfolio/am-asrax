import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

export function ProductMockPortfolio() {
  return (
    <ProductScreenshot
      title="Portfolio"
      src={PRODUCT_SHOTS.portfolio}
      alt="ASRAX portfolio overview — returns, health score, allocation, and risk"
    />
  );
}
