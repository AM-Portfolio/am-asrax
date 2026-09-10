import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

export function ProductMockMarket() {
  return (
    <ProductScreenshot
      title="Market"
      src={PRODUCT_SHOTS.market}
      alt="ASRAX market analysis — heatmap and historical monthly performance"
    />
  );
}
