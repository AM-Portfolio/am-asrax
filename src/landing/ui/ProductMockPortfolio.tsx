import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
}

export function ProductMockPortfolio({ progress = 1, active = true }: Props) {
  return (
    <ProductScreenshot
      title="Portfolio"
      src={PRODUCT_SHOTS.portfolio}
      alt="ASRAX portfolio overview — returns, health score, allocation, and risk"
      progress={progress}
      active={active}
      motion="kenBurns"
      chips={[
        { label: 'Health 78', tone: 'emerald' },
        { label: '+12.8% return', tone: 'sky' },
        { label: 'X-Ray', tone: 'amber' },
      ]}
    />
  );
}
