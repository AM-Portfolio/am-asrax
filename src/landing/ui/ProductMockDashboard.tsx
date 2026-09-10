import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

export function ProductMockDashboard() {
  return (
    <ProductScreenshot
      title="Dashboard"
      src={PRODUCT_SHOTS.dashboard}
      alt="ASRAX dashboard — portfolio value, performance chart, and market movers"
    />
  );
}
