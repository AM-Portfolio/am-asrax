import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
}

export function ProductMockDashboard({ progress = 1, active = true }: Props) {
  return (
    <ProductScreenshot
      title="Dashboard"
      src={PRODUCT_SHOTS.dashboard}
      alt="ASRAX dashboard — portfolio value, performance chart, and market movers"
      progress={progress}
      active={active}
      motion="kenBurns"
      chips={[
        { label: 'Live P&L', tone: 'emerald' },
        { label: 'Movers', tone: 'sky' },
        { label: 'One view', tone: 'amber' },
      ]}
    />
  );
}
