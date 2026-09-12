import { PRODUCT_SHOTS } from '../content/products';
import { ProductScreenshot } from './ProductScreenshot';

interface Props {
  progress?: number;
  active?: boolean;
  stageFill?: boolean;
}

export function ProductMockTrade({ progress = 1, active = true, stageFill = false }: Props) {
  return (
    <ProductScreenshot
      title="Paper trading"
      src={PRODUCT_SHOTS.trade}
      alt="ASRAX paper trading — market overview, fundamentals, and paper-cash practice orders"
      progress={progress}
      active={active}
      stageFill={stageFill}
      motion="kenBurns"
      chips={[
        { label: 'Paper cash', tone: 'emerald' },
        { label: 'Practice orders', tone: 'sky' },
        { label: 'No real money', tone: 'amber' },
      ]}
    />
  );
}
